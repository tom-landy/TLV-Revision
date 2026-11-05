(function () {
  "use strict";

  var CONTENT = window.TLV_CONTENT;
  var SETTINGS = Object.assign(
    { siteName: "TLV Revision", organisation: "TLV", defaultPassMark: 80, certificateSignatory: "TLV Teaching Team", questionsPerQuiz: 10 },
    CONTENT.settings || {}
  );
  var STORAGE_KEY = "tlv-revision-v1";
  var app = document.getElementById("app");

  // ---------- Content lookup ----------

  var topicIndex = {};
  var subjectIndex = {};
  CONTENT.subjects.forEach(function (s) {
    subjectIndex[s.id] = s;
    s.topics.forEach(function (t) {
      if (topicIndex[t.id]) console.warn("Duplicate topic id:", t.id);
      topicIndex[t.id] = { topic: t, subject: s };
    });
  });
  var allTopics = Object.keys(topicIndex);

  function passMarkFor(topic) {
    return typeof topic.passMark === "number" ? topic.passMark : SETTINGS.defaultPassMark;
  }

  // ---------- Storage ----------

  var storageOk = true;
  var memoryState = null;

  function emptyState() {
    return { version: 1, student: { name: "" }, attempts: [], certificates: {} };
  }

  function loadState() {
    if (memoryState) return memoryState;
    var raw = null;
    try { raw = window.localStorage.getItem(STORAGE_KEY); } catch (e) { storageOk = false; }
    var state = emptyState();
    if (raw) {
      try { state = normaliseState(JSON.parse(raw)); } catch (e) { console.warn("Saved progress was unreadable, starting fresh."); }
    }
    memoryState = state;
    return state;
  }

  function saveState(state) {
    memoryState = state;
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); storageOk = true; }
    catch (e) { storageOk = false; }
  }

  function normaliseState(s) {
    var out = emptyState();
    if (!s || typeof s !== "object") return out;
    if (s.student && typeof s.student.name === "string") out.student.name = s.student.name.slice(0, 80);
    if (Array.isArray(s.attempts)) {
      out.attempts = s.attempts.filter(function (a) {
        return a && typeof a.topicId === "string" && typeof a.score === "number" && typeof a.total === "number";
      });
    }
    if (s.certificates && typeof s.certificates === "object") {
      Object.keys(s.certificates).forEach(function (k) {
        var c = s.certificates[k];
        if (c && typeof c.pct === "number" && c.date) out.certificates[k] = { pct: c.pct, date: c.date };
      });
    }
    return out;
  }

  // ---------- Helpers ----------

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function safeUrl(url) {
    return /^(https?:|mailto:|\/|\.\/|[a-z0-9_\-]+\/)/i.test(url || "") ? url : "#";
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function fmtDate(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  function fmtShortDate(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) + " " +
      d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  }

  // FNV-1a hash, used for a short certificate reference. Not tamper-proof.
  function certCode(parts) {
    var str = parts.join("|");
    var h = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    var hex = ("00000000" + h.toString(16).toUpperCase()).slice(-8);
    return "TLV-" + hex.slice(0, 4) + "-" + hex.slice(4);
  }

  function encodeBackup(state) {
    var bytes = new TextEncoder().encode(JSON.stringify(state));
    var bin = "";
    bytes.forEach(function (b) { bin += String.fromCharCode(b); });
    return btoa(bin);
  }

  function decodeBackup(code) {
    var bin = atob(code.replace(/\s+/g, ""));
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return JSON.parse(new TextDecoder().decode(bytes));
  }

  function topicStats(state, topicId) {
    var list = state.attempts.filter(function (a) { return a.topicId === topicId; });
    var best = list.reduce(function (m, a) { return Math.max(m, a.pct); }, 0);
    return {
      attempts: list.length,
      best: list.length ? best : null,
      last: list.length ? list[list.length - 1] : null,
      passed: !!state.certificates[topicId]
    };
  }

  function subjectComplete(state, subject) {
    return subject.topics.length > 0 && subject.topics.every(function (t) { return !!state.certificates[t.id]; });
  }

  function subjectCompletionDate(state, subject) {
    return subject.topics.reduce(function (latest, t) {
      var d = state.certificates[t.id] && state.certificates[t.id].date;
      return d && d > latest ? d : latest;
    }, "");
  }

  function setTitle(part) {
    document.title = part ? part + " · " + SETTINGS.siteName : SETTINGS.siteName;
  }

  function renderWho() {
    var name = loadState().student.name;
    document.getElementById("who").innerHTML = name
      ? "Signed in as <strong>" + esc(name) + "</strong>"
      : "";
  }

  function markNav(key) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === key);
    });
  }

  function storageBanner() {
    return storageOk ? "" :
      '<div class="banner warn">This browser is blocking saved data (private window or strict settings). ' +
      'Your progress will be lost when you close the tab. Use a normal window to keep it.</div>';
  }

  function progressBar(pct, passMark) {
    var p = Math.max(0, Math.min(100, pct || 0));
    return '<div class="bar" role="img" aria-label="' + p + ' percent">' +
      '<span style="width:' + p + '%"></span>' +
      (passMark ? '<i style="left:' + passMark + '%" title="Pass mark ' + passMark + '%"></i>' : "") +
      "</div>";
  }

  // ---------- Name form ----------

  function nameForm(redirect) {
    return '<form class="card name-form" id="nameForm">' +
      "<h2>Welcome to " + esc(SETTINGS.siteName) + "</h2>" +
      "<p>Enter your name as you want it to appear on your certificates.</p>" +
      '<label for="studentName">Your full name</label>' +
      '<div class="row"><input id="studentName" name="studentName" maxlength="80" autocomplete="name" required placeholder="e.g. Sam Patel">' +
      '<button class="btn primary" type="submit">Continue</button></div>' +
      '<input type="hidden" name="redirect" value="' + esc(redirect || "") + '">' +
      "</form>";
  }

  function bindNameForm() {
    var form = document.getElementById("nameForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.studentName.value.trim().replace(/\s+/g, " ");
      if (!name) return;
      var state = loadState();
      state.student.name = name;
      saveState(state);
      renderWho();
      var redirect = form.redirect.value;
      if (redirect && location.hash !== redirect) location.hash = redirect;
      else route();
    });
  }

  // ---------- Views ----------

  function viewHome() {
    setTitle("");
    markNav("home");
    var state = loadState();
    var passedCount = allTopics.filter(function (id) { return state.certificates[id]; }).length;
    var html = storageBanner();

    if (!state.student.name) {
      html += nameForm("");
    } else {
      html += '<section class="hero"><h1>Hi ' + esc(state.student.name.split(" ")[0]) + "</h1>" +
        "<p>You have passed <strong>" + passedCount + "</strong> of <strong>" + allTopics.length +
        "</strong> topics.</p>" + progressBar(allTopics.length ? Math.round(passedCount / allTopics.length * 100) : 0) +
        "</section>";
    }

    html += '<div class="search"><label for="topicSearch" class="sr-only">Search topics</label>' +
      '<input id="topicSearch" type="search" placeholder="Search topics…"></div>';

    CONTENT.subjects.forEach(function (s) {
      var done = s.topics.filter(function (t) { return state.certificates[t.id]; }).length;
      html += '<section class="subject" style="--subject:' + esc(s.colour || "#1f4e79") + '">' +
        '<div class="subject-head"><h2>' + esc(s.title) + "</h2>" +
        '<span class="muted">' + done + "/" + s.topics.length + " passed</span>" +
        (subjectComplete(state, s) ? ' <a class="badge gold" href="#/certificate/subject/' + encodeURIComponent(s.id) + '">Subject certificate</a>' : "") +
        "</div>" +
        '<div class="grid">';
      s.topics.forEach(function (t) {
        var st = topicStats(state, t.id);
        var status = st.passed ? '<span class="badge pass">Passed</span>'
          : st.attempts ? '<span class="badge">Best ' + st.best + "%</span>"
          : '<span class="badge muted">Not started</span>';
        html += '<a class="card topic-card" href="#/topic/' + encodeURIComponent(t.id) + '" data-search="' +
          esc((s.title + " " + t.title + " " + (t.summary || "")).toLowerCase()) + '">' +
          "<h3>" + esc(t.title) + "</h3>" +
          '<p class="muted">' + esc(t.summary || "") + "</p>" +
          '<div class="card-foot">' + status + '<span class="muted small">' + t.questions.length + " questions</span></div>" +
          "</a>";
      });
      html += "</div></section>";
    });

    app.innerHTML = html;
    bindNameForm();

    var search = document.getElementById("topicSearch");
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      document.querySelectorAll(".subject").forEach(function (sec) {
        var any = false;
        sec.querySelectorAll(".topic-card").forEach(function (card) {
          var show = !q || card.getAttribute("data-search").indexOf(q) !== -1;
          card.hidden = !show;
          if (show) any = true;
        });
        sec.hidden = !any;
      });
    });
  }

  function viewTopic(topicId) {
    var entry = topicIndex[topicId];
    if (!entry) return viewNotFound();
    var t = entry.topic, s = entry.subject;
    setTitle(t.title);
    markNav("home");
    var state = loadState();
    var st = topicStats(state, t.id);
    var pm = passMarkFor(t);
    var count = Math.min(t.questions.length, SETTINGS.questionsPerQuiz);

    var html = storageBanner() +
      '<nav class="crumbs"><a href="#/">Topics</a> › ' + esc(s.title) + "</nav>" +
      '<header class="page-head" style="--subject:' + esc(s.colour || "#1f4e79") + '">' +
      "<h1>" + esc(t.title) + "</h1>" +
      '<p class="muted">' + esc(t.summary || "") + "</p></header>" +
      '<div class="two-col"><section><h2>Resources</h2>';

    if (!t.resources || !t.resources.length) html += '<p class="muted">No resources yet.</p>';
    (t.resources || []).forEach(function (r) {
      if (r.type === "notes") {
        html += '<article class="card notes"><h3>' + esc(r.title || "Notes") + "</h3>" +
          String(r.body || "").split(/\n\s*\n/).map(function (p) {
            return "<p>" + esc(p).replace(/\n/g, "<br>") + "</p>";
          }).join("") + "</article>";
      } else {
        var label = { video: "Video", pdf: "PDF", link: "Link" }[r.type] || "Link";
        html += '<a class="card resource" href="' + esc(safeUrl(r.url)) + '" target="_blank" rel="noopener">' +
          '<span class="tag">' + label + "</span> " + esc(r.title || r.url) +
          '<span class="ext" aria-hidden="true">↗</span></a>';
      }
    });

    html += '</section><aside class="card quiz-panel"><h2>Quiz</h2>' +
      "<p>" + count + " questions · pass mark " + pm + "%</p>";
    if (st.attempts) {
      html += '<p class="small">Attempts: ' + st.attempts + " · best score " + st.best + "%</p>" + progressBar(st.best, pm);
    }
    if (st.passed) {
      html += '<p><span class="badge pass">Passed</span></p>' +
        '<a class="btn" href="#/certificate/' + encodeURIComponent(t.id) + '">View certificate</a> ';
    }
    html += '<a class="btn primary" href="#/quiz/' + encodeURIComponent(t.id) + '">' + (st.attempts ? "Try again" : "Start quiz") + "</a>" +
      "</aside></div>";

    app.innerHTML = html;
  }

  function viewQuiz(topicId) {
    var entry = topicIndex[topicId];
    if (!entry) return viewNotFound();
    var t = entry.topic, s = entry.subject;
    var state = loadState();
    setTitle("Quiz: " + t.title);
    markNav("home");

    if (!state.student.name) {
      app.innerHTML = nameForm("#/quiz/" + encodeURIComponent(topicId));
      bindNameForm();
      return;
    }
    if (!t.questions || !t.questions.length) {
      app.innerHTML = '<div class="card"><p>This topic has no questions yet.</p><a class="btn" href="#/topic/' + encodeURIComponent(t.id) + '">Back</a></div>';
      return;
    }

    var pm = passMarkFor(t);
    var questions = shuffle(t.questions).slice(0, Math.min(t.questions.length, SETTINGS.questionsPerQuiz)).map(function (q) {
      var order = shuffle(q.options.map(function (_, i) { return i; }));
      return {
        q: q.q,
        options: order.map(function (i) { return q.options[i]; }),
        answer: order.indexOf(q.answer),
        explanation: q.explanation || ""
      };
    });

    var idx = 0, score = 0, chosen = [], started = Date.now(), locked = false;

    function renderQuestion() {
      var q = questions[idx];
      locked = false;
      app.innerHTML =
        '<nav class="crumbs"><a href="#/topic/' + encodeURIComponent(t.id) + '">' + esc(t.title) + "</a> › Quiz</nav>" +
        '<section class="card quiz" style="--subject:' + esc(s.colour || "#1f4e79") + '">' +
        '<div class="quiz-top"><span>Question ' + (idx + 1) + " of " + questions.length + "</span>" +
        "<span>Score " + score + "</span></div>" +
        progressBar(Math.round(idx / questions.length * 100)) +
        '<h2 class="question">' + esc(q.q) + "</h2>" +
        '<div class="options" role="group" aria-label="Answers">' +
        q.options.map(function (o, i) {
          return '<button class="option" data-i="' + i + '"><span class="key">' + (i + 1) + "</span>" + esc(o) + "</button>";
        }).join("") +
        "</div>" +
        '<div class="feedback" id="feedback" aria-live="polite"></div>' +
        '<div class="quiz-actions"><button class="btn primary" id="nextBtn" hidden>' +
        (idx === questions.length - 1 ? "See results" : "Next question") + "</button></div>" +
        "</section>";
      app.querySelectorAll(".option").forEach(function (b) {
        b.addEventListener("click", function () { choose(Number(b.getAttribute("data-i"))); });
      });
      document.getElementById("nextBtn").addEventListener("click", next);
      app.querySelector(".option").focus();
    }

    function choose(i) {
      if (locked) return;
      locked = true;
      var q = questions[idx];
      var right = i === q.answer;
      if (right) score++;
      chosen.push(i);
      app.querySelectorAll(".option").forEach(function (b, bi) {
        b.disabled = true;
        if (bi === q.answer) b.classList.add("correct");
        else if (bi === i) b.classList.add("wrong");
      });
      document.getElementById("feedback").innerHTML =
        '<p class="' + (right ? "ok" : "bad") + '"><strong>' + (right ? "Correct." : "Not quite.") + "</strong> " +
        esc(q.explanation) + "</p>";
      var nb = document.getElementById("nextBtn");
      nb.hidden = false;
      nb.focus();
    }

    function next() {
      idx++;
      if (idx < questions.length) renderQuestion();
      else finish();
    }

    function finish() {
      document.removeEventListener("keydown", onKey);
      var total = questions.length;
      var pct = Math.round(score / total * 100);
      var passed = pct >= pm;
      var now = new Date().toISOString();
      var st = loadState();
      var firstPass = passed && !st.certificates[t.id];
      st.attempts.push({
        topicId: t.id, score: score, total: total, pct: pct, passed: passed,
        date: now, seconds: Math.round((Date.now() - started) / 1000)
      });
      if (passed) {
        var prev = st.certificates[t.id];
        if (!prev || pct > prev.pct) st.certificates[t.id] = { pct: pct, date: now };
      }
      saveState(st);

      var wrong = questions.map(function (q, i) { return { q: q, pick: chosen[i] }; })
        .filter(function (x) { return x.pick !== x.q.answer; });

      var html = storageBanner() +
        '<section class="card result ' + (passed ? "is-pass" : "is-fail") + '">' +
        "<h1>" + (passed ? (firstPass ? "Passed. Certificate earned." : "Passed.") : "Not passed yet") + "</h1>" +
        '<p class="big">' + score + " / " + total + " · " + pct + "%</p>" +
        progressBar(pct, pm) +
        "<p>" + (passed ? "The pass mark was " + pm + "%." : "You need " + pm + "% to pass. Have another look at the resources and try again.") + "</p>" +
        '<div class="actions">' +
        (passed ? '<a class="btn primary" href="#/certificate/' + encodeURIComponent(t.id) + '">View certificate</a>' : "") +
        '<a class="btn' + (passed ? "" : " primary") + '" href="#/quiz/' + encodeURIComponent(t.id) + '" id="retry">Try again</a>' +
        '<a class="btn" href="#/topic/' + encodeURIComponent(t.id) + '">Back to topic</a>' +
        "</div></section>";

      if (passed && subjectComplete(st, s)) {
        html += '<div class="banner gold">You have passed every topic in ' + esc(s.title) +
          '. <a href="#/certificate/subject/' + encodeURIComponent(s.id) + '">Get your subject certificate</a>.</div>';
      }

      if (wrong.length) {
        html += '<section><h2>Review</h2>' + wrong.map(function (x) {
          return '<div class="card review"><p class="question">' + esc(x.q.q) + "</p>" +
            '<p class="bad">Your answer: ' + esc(x.q.options[x.pick]) + "</p>" +
            '<p class="ok">Correct answer: ' + esc(x.q.options[x.q.answer]) + "</p>" +
            (x.q.explanation ? '<p class="muted">' + esc(x.q.explanation) + "</p>" : "") + "</div>";
        }).join("") + "</section>";
      }
      app.innerHTML = html;
      renderWho();
      // Same hash as current page, so force a re-render.
      document.getElementById("retry").addEventListener("click", function (e) { e.preventDefault(); route(); });
    }

    function onKey(e) {
      if (e.target && /input|textarea/i.test(e.target.tagName)) return;
      var n = parseInt(e.key, 10);
      if (!locked && n >= 1 && n <= questions[idx].options.length) { e.preventDefault(); choose(n - 1); }
    }

    document.addEventListener("keydown", onKey);
    cleanup = function () { document.removeEventListener("keydown", onKey); };
    renderQuestion();
  }

  function viewProgress() {
    setTitle("My progress");
    markNav("progress");
    var state = loadState();
    var passed = allTopics.filter(function (id) { return state.certificates[id]; }).length;
    var avg = state.attempts.length
      ? Math.round(state.attempts.reduce(function (m, a) { return m + a.pct; }, 0) / state.attempts.length) : 0;

    var html = storageBanner() + "<h1>My progress</h1>";

    html += '<div class="stats">' +
      stat(passed + "/" + allTopics.length, "topics passed") +
      stat(state.attempts.length, "quizzes taken") +
      stat(state.attempts.length ? avg + "%" : "–", "average score") +
      stat(Object.keys(state.certificates).length, "certificates") +
      "</div>";

    CONTENT.subjects.forEach(function (s) {
      html += '<section class="card"><div class="subject-head"><h2>' + esc(s.title) + "</h2>" +
        (subjectComplete(state, s) ? '<a class="badge gold" href="#/certificate/subject/' + encodeURIComponent(s.id) + '">Subject certificate</a>' : "") +
        "</div>" +
        '<div class="table-wrap"><table><thead><tr><th>Topic</th><th>Attempts</th><th>Best</th><th>Last</th><th>Status</th></tr></thead><tbody>';
      s.topics.forEach(function (t) {
        var st = topicStats(state, t.id);
        html += "<tr>" +
          '<td><a href="#/topic/' + encodeURIComponent(t.id) + '">' + esc(t.title) + "</a></td>" +
          "<td>" + st.attempts + "</td>" +
          "<td>" + (st.best == null ? "–" : st.best + "%") + "</td>" +
          "<td>" + (st.last ? st.last.pct + "%" : "–") + "</td>" +
          "<td>" + (st.passed
            ? '<a class="badge pass" href="#/certificate/' + encodeURIComponent(t.id) + '">Certificate</a>'
            : st.attempts ? '<span class="badge">Pass mark ' + passMarkFor(t) + "%</span>" : '<span class="muted">Not started</span>') +
          "</td></tr>";
      });
      html += "</tbody></table></div></section>";
    });

    var recent = state.attempts.slice(-15).reverse();
    html += '<section class="card"><h2>Recent attempts</h2>';
    if (!recent.length) html += '<p class="muted">No quizzes taken yet.</p>';
    else {
      html += '<div class="table-wrap"><table><thead><tr><th>When</th><th>Topic</th><th>Score</th><th>Result</th></tr></thead><tbody>' +
        recent.map(function (a) {
          var e = topicIndex[a.topicId];
          return "<tr><td>" + esc(fmtShortDate(a.date)) + "</td><td>" + esc(e ? e.topic.title : a.topicId) + "</td>" +
            "<td>" + a.score + "/" + a.total + " (" + a.pct + "%)</td>" +
            "<td>" + (a.passed ? '<span class="ok">Pass</span>' : '<span class="bad">Not yet</span>') + "</td></tr>";
        }).join("") + "</tbody></table></div>";
    }
    html += "</section>";

    html += '<section class="card"><h2>Your details</h2>' +
      '<form id="renameForm" class="row"><label for="rename" class="sr-only">Name</label>' +
      '<input id="rename" maxlength="80" value="' + esc(state.student.name) + '" placeholder="Your full name" required>' +
      '<button class="btn" type="submit">Save name</button></form>' +
      '<p class="small muted">This is the name printed on your certificates.</p></section>';

    html += '<section class="card"><h2>Back up or move your progress</h2>' +
      "<p>Progress lives in this browser only. To move it to another device, copy this code and paste it into the box below on the other device.</p>" +
      '<textarea id="backupOut" readonly rows="3">' + esc(encodeBackup(state)) + "</textarea>" +
      '<div class="row"><button class="btn" id="copyBackup" type="button">Copy code</button>' +
      '<button class="btn" id="downloadBackup" type="button">Download file</button></div>' +
      '<label for="backupIn">Restore from a code</label>' +
      '<textarea id="backupIn" rows="3" placeholder="Paste a backup code here"></textarea>' +
      '<div class="row"><button class="btn" id="restoreBackup" type="button">Restore (merge with this device)</button></div>' +
      '<p id="backupMsg" class="small" aria-live="polite"></p></section>';

    html += '<section class="card danger-zone"><h2>Start again</h2>' +
      '<p class="small">Deletes your name, scores and certificates from this browser.</p>' +
      '<button class="btn danger" id="resetAll" type="button">Delete all progress</button></section>';

    app.innerHTML = html;

    document.getElementById("renameForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var v = document.getElementById("rename").value.trim().replace(/\s+/g, " ");
      if (!v) return;
      var st = loadState(); st.student.name = v; saveState(st); renderWho(); route();
    });

    var msg = document.getElementById("backupMsg");
    document.getElementById("copyBackup").addEventListener("click", function () {
      var ta = document.getElementById("backupOut");
      ta.select();
      var done = function () { msg.textContent = "Copied."; };
      if (navigator.clipboard) navigator.clipboard.writeText(ta.value).then(done, function () { document.execCommand("copy"); done(); });
      else { document.execCommand("copy"); done(); }
    });
    document.getElementById("downloadBackup").addEventListener("click", function () {
      var blob = new Blob([document.getElementById("backupOut").value], { type: "text/plain" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "tlv-revision-backup.txt";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    document.getElementById("restoreBackup").addEventListener("click", function () {
      var code = document.getElementById("backupIn").value.trim();
      if (!code) { msg.textContent = "Paste a code first."; return; }
      var incoming;
      try { incoming = normaliseState(decodeBackup(code)); }
      catch (e) { msg.textContent = "That code is not valid. Check you copied all of it."; return; }
      var st = loadState();
      var seen = {};
      st.attempts.forEach(function (a) { seen[a.topicId + a.date] = true; });
      incoming.attempts.forEach(function (a) { if (!seen[a.topicId + a.date]) st.attempts.push(a); });
      st.attempts.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
      Object.keys(incoming.certificates).forEach(function (k) {
        var c = incoming.certificates[k], mine = st.certificates[k];
        if (!mine || c.pct > mine.pct) st.certificates[k] = c;
      });
      if (!st.student.name && incoming.student.name) st.student.name = incoming.student.name;
      saveState(st);
      renderWho();
      route();
      var m = document.getElementById("backupMsg");
      if (m) m.textContent = "Progress restored.";
    });
    document.getElementById("resetAll").addEventListener("click", function () {
      if (!confirm("Delete all your progress and certificates from this browser? This cannot be undone.")) return;
      saveState(emptyState());
      renderWho();
      location.hash = "#/";
    });

    function stat(value, label) {
      return '<div class="card stat"><span class="stat-value">' + esc(value) + '</span><span class="muted small">' + esc(label) + "</span></div>";
    }
  }

  function certificateHtml(opts) {
    return '<div class="cert-toolbar no-print">' +
      '<a class="btn" href="' + opts.back + '">Back</a>' +
      '<button class="btn primary" id="printCert" type="button">Print or save as PDF</button>' +
      '<span class="small muted">In the print dialog choose landscape, and turn on background graphics.</span></div>' +
      '<div class="cert-wrap"><div class="certificate" style="--subject:' + esc(opts.colour) + '">' +
      '<div class="cert-border">' +
      '<div class="cert-org">' + esc(SETTINGS.organisation) + "</div>" +
      '<div class="cert-title">Certificate of Achievement</div>' +
      '<div class="cert-line">This is to certify that</div>' +
      '<div class="cert-name">' + esc(opts.name) + "</div>" +
      '<div class="cert-line">' + opts.reason + "</div>" +
      '<div class="cert-topic">' + esc(opts.topic) + "</div>" +
      (opts.detail ? '<div class="cert-detail">' + opts.detail + "</div>" : "") +
      '<div class="cert-foot">' +
      '<div><div class="cert-sig">' + esc(SETTINGS.certificateSignatory) + '</div><div class="cert-cap">Awarded by</div></div>' +
      '<div class="cert-seal" aria-hidden="true">★</div>' +
      '<div><div class="cert-sig">' + esc(fmtDate(opts.date)) + '</div><div class="cert-cap">Date</div></div>' +
      "</div>" +
      '<div class="cert-code">Ref ' + esc(opts.code) + "</div>" +
      "</div></div></div>";
  }

  // Scale the A4 certificate down to fit the screen. Print CSS resets zoom.
  function fitCertificate() {
    var wrap = app.querySelector(".cert-wrap"), cert = app.querySelector(".certificate");
    if (!wrap || !cert) return;
    cert.style.zoom = "";
    var z = Math.min(1, wrap.clientWidth / cert.offsetWidth);
    if (z < 1) cert.style.zoom = String(z);
  }

  function bindPrint() {
    var b = document.getElementById("printCert");
    if (b) b.addEventListener("click", function () { window.print(); });
    fitCertificate();
  }

  function viewCertificate(topicId) {
    var entry = topicIndex[topicId];
    if (!entry) return viewNotFound();
    var t = entry.topic, s = entry.subject;
    var state = loadState();
    var cert = state.certificates[t.id];
    setTitle("Certificate: " + t.title);
    markNav("progress");
    if (!cert) {
      app.innerHTML = '<div class="card"><h1>No certificate yet</h1><p>Pass the ' + esc(t.title) +
        ' quiz to earn this certificate.</p><a class="btn primary" href="#/quiz/' + encodeURIComponent(t.id) + '">Take the quiz</a></div>';
      return;
    }
    if (!state.student.name) {
      app.innerHTML = nameForm(location.hash);
      bindNameForm();
      return;
    }
    app.innerHTML = certificateHtml({
      back: "#/topic/" + encodeURIComponent(t.id),
      colour: s.colour || "#1f4e79",
      name: state.student.name,
      reason: "has successfully completed the " + esc(s.title) + " quiz",
      topic: t.title,
      detail: "with a score of " + cert.pct + "%",
      date: cert.date,
      code: certCode([state.student.name, t.id, cert.date, cert.pct])
    });
    bindPrint();
  }

  function viewSubjectCertificate(subjectId) {
    var s = subjectIndex[subjectId];
    if (!s) return viewNotFound();
    var state = loadState();
    setTitle("Certificate: " + s.title);
    markNav("progress");
    if (!subjectComplete(state, s)) {
      var left = s.topics.filter(function (t) { return !state.certificates[t.id]; });
      app.innerHTML = '<div class="card"><h1>Not complete yet</h1><p>Pass every ' + esc(s.title) +
        " topic to earn this certificate. Still to pass:</p><ul>" +
        left.map(function (t) { return '<li><a href="#/topic/' + encodeURIComponent(t.id) + '">' + esc(t.title) + "</a></li>"; }).join("") +
        "</ul></div>";
      return;
    }
    if (!state.student.name) {
      app.innerHTML = nameForm(location.hash);
      bindNameForm();
      return;
    }
    var avg = Math.round(s.topics.reduce(function (m, t) { return m + state.certificates[t.id].pct; }, 0) / s.topics.length);
    var date = subjectCompletionDate(state, s);
    app.innerHTML = certificateHtml({
      back: "#/progress",
      colour: s.colour || "#1f4e79",
      name: state.student.name,
      reason: "has passed every topic in",
      topic: s.title,
      detail: s.topics.length + " topics · average score " + avg + "%",
      date: date,
      code: certCode([state.student.name, "subject:" + s.id, date, avg])
    });
    bindPrint();
  }

  function viewNotFound() {
    setTitle("Not found");
    app.innerHTML = '<div class="card"><h1>Page not found</h1><p>That topic may have been renamed or removed.</p><a class="btn primary" href="#/">Back to topics</a></div>';
  }

  // ---------- Router ----------

  var cleanup = null;

  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
    var page = parts[0] || "";

    if (page === "") viewHome();
    else if (page === "topic") viewTopic(parts[1]);
    else if (page === "quiz") viewQuiz(parts[1]);
    else if (page === "progress") viewProgress();
    else if (page === "certificate" && parts[1] === "subject") viewSubjectCertificate(parts[2]);
    else if (page === "certificate") viewCertificate(parts[1]);
    else viewNotFound();

    document.body.classList.toggle("cert-page", page === "certificate");
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("resize", fitCertificate);
  loadState();
  document.querySelector(".brand").lastChild.textContent = " " + SETTINGS.siteName.replace(/^TLV\s*/, "");
  renderWho();
  route();
})();
