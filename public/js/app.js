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
    return { version: 1, student: { name: "" }, attempts: [], certificates: {}, practice: {}, tests: [], missed: {}, cards: {} };
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
    if (s.practice && typeof s.practice === "object") {
      Object.keys(s.practice).forEach(function (k) {
        var p = s.practice[k];
        if (!p || typeof p !== "object") return;
        out.practice[k] = {
          text: typeof p.text === "string" ? p.text.slice(0, 20000) : "",
          mark: typeof p.mark === "number" ? p.mark : null
        };
      });
    }
    if (Array.isArray(s.tests)) {
      out.tests = s.tests.filter(function (x) { return x && typeof x.subjectId === "string" && typeof x.pct === "number"; });
    }
    if (s.missed && typeof s.missed === "object") {
      Object.keys(s.missed).forEach(function (k) { if (typeof s.missed[k] === "number") out.missed[k] = s.missed[k]; });
    }
    if (s.cards && typeof s.cards === "object") {
      Object.keys(s.cards).forEach(function (k) {
        var c = s.cards[k];
        if (c && typeof c.known === "number" && typeof c.total === "number") out.cards[k] = { known: c.known, total: c.total, date: c.date };
      });
    }
    return out;
  }

  function practiceKey(topic, item, i) {
    return item.id || (topic.id + "#" + i);
  }

  function practiceStats(state, topic) {
    var items = topic.practice || [];
    var marked = 0, got = 0, possible = 0;
    items.forEach(function (item, i) {
      var p = state.practice[practiceKey(topic, item, i)];
      if (p && typeof p.mark === "number") { marked++; got += p.mark; possible += item.marks || 0; }
    });
    return { total: items.length, marked: marked, got: got, possible: possible };
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
      (SETTINGS.tagline ? '<p class="eyebrow">' + esc(SETTINGS.tagline) + "</p>" : "") +
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
      html += '<section class="hero">' + (SETTINGS.tagline ? '<p class="eyebrow">' + esc(SETTINGS.tagline) + "</p>" : "") +
        "<h1>Hi " + esc(state.student.name.split(" ")[0]) + "</h1>" +
        "<p>You have passed <strong>" + passedCount + "</strong> of <strong>" + allTopics.length +
        "</strong> topics.</p>" + progressBar(allTopics.length ? Math.round(passedCount / allTopics.length * 100) : 0) +
        (function () {
          var n = missedPool(state).length;
          return n ? '<p><a class="btn" href="#/mistakes">Practise my mistakes <span class="badge">' + n + "</span></a></p>" : "";
        })() +
        "</section>";
    }

    html += '<div class="search"><label for="topicSearch" class="sr-only">Search topics</label>' +
      '<input id="topicSearch" type="search" placeholder="Search topics…"></div>';

    CONTENT.subjects.forEach(function (s) {
      var done = s.topics.filter(function (t) { return state.certificates[t.id]; }).length;
      html += '<section class="subject" style="--subject:' + esc(s.colour || "#1f4e79") + '">' +
        '<div class="subject-head"><h2>' + esc(s.title) + "</h2>" +
        '<span class="muted">' + done + "/" + s.topics.length + " passed</span>" +
        (subjectComplete(state, s) ? ' <a class="badge gold" href="#/certificate/subject/' + encodeURIComponent(s.id) + '">Element certificate</a>' : "") +
        '<a class="btn small-btn head-action" href="#/test/' + encodeURIComponent(s.id) + '">Element test</a>' +
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
          '<div class="card-foot">' + status + '<span class="muted small">' + t.questions.length + " quiz" +
          ((t.practice || []).length ? " · " + t.practice.length + " written" : "") + "</span></div>" +
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
        var label = { video: "Video", pdf: "PDF", link: "Link", docx: "Word" }[r.type] || "Link";
        html += '<a class="card resource" href="' + esc(safeUrl(r.url)) + '" target="_blank" rel="noopener">' +
          '<span class="tag">' + label + "</span> " + esc(r.title || r.url) +
          '<span class="ext" aria-hidden="true">↗</span></a>';
      }
    });

    var cardInfo = state.cards[t.id];
    html += '</section><aside class="card quiz-panel"><h2>Quiz</h2>' +
      "<p>" + count + " questions, mixed types · pass mark " + pm + "%</p>";
    if (st.attempts) {
      html += '<p class="small">Attempts: ' + st.attempts + " · best score " + st.best + "%</p>" + progressBar(st.best, pm);
    }
    if (st.passed) {
      html += '<p><span class="badge pass">Passed</span></p>' +
        '<a class="btn" href="#/certificate/' + encodeURIComponent(t.id) + '">View certificate</a> ';
    }
    html += '<a class="btn primary" href="#/quiz/' + encodeURIComponent(t.id) + '">' + (st.attempts ? "Try again" : "Start quiz") + "</a>";
    if ((t.cards || []).length) {
      html += '<h2 class="panel-h">Flashcards</h2><p class="small">' + t.cards.length + " cards" +
        (cardInfo ? " · last time you knew " + cardInfo.known + " first time" : "") + "</p>" +
        '<a class="btn" href="#/cards/' + encodeURIComponent(t.id) + '">Study flashcards</a>';
    }
    if ((t.practice || []).length) {
      html += '<p class="small muted panel-note">Then try the <a href="#practice" id="toPractice">written exam questions</a> below.</p>';
    }
    html += "</aside></div>";

    if ((t.practice || []).length) {
      var ps = practiceStats(state, t);
      html += '<section id="practice" class="practice">' +
        '<header class="print-only print-head">' +
        '<p class="print-site">' + esc(SETTINGS.siteName) + (SETTINGS.tagline ? " · " + esc(SETTINGS.tagline) : "") + "</p>" +
        "<h1>" + esc(t.title) + "</h1>" +
        '<p class="print-sub">' + esc(s.title) + " · Exam practice</p>" +
        '<dl class="print-meta"><div><dt>Name</dt><dd>' + esc(state.student.name || "") + "</dd></div>" +
        "<div><dt>Date</dt><dd>" + esc(fmtDate(new Date().toISOString())) + "</dd></div>" +
        '<div><dt>Self-marked</dt><dd id="printTotal">' + printTotal(ps) + "</dd></div></dl>" +
        "</header>" +
        '<div class="subject-head no-print"><h2>Exam practice</h2>' +
        '<span class="muted small" id="practiceSummary">' + practiceSummary(ps) + "</span></div>" +
        '<p class="muted no-print">Write your answer, then open the mark scheme and give yourself a mark. ' +
        "Answers save in this browser. These marks do not count towards the quiz certificate.</p>" +
        '<div class="practice-toolbar no-print">' +
        '<button class="btn" type="button" id="printPractice">Print my answers</button>' +
        '<label class="check"><input type="checkbox" id="printSchemes"' + (printSchemes ? " checked" : "") + "> Include mark schemes when printing</label>" +
        "</div>";
      t.practice.forEach(function (item, i) {
        var key = practiceKey(t, item, i);
        var saved = state.practice[key] || { text: "", mark: null };
        var marks = item.marks || 0;
        var opts = '<option value="">–</option>';
        for (var m = 0; m <= marks; m++) {
          opts += '<option value="' + m + '"' + (saved.mark === m ? " selected" : "") + ">" + m + "</option>";
        }
        html += '<article class="card practice-item" data-key="' + esc(key) + '" data-i="' + i + '" data-marks="' + marks + '">' +
          '<div class="practice-q"><p class="question"><span class="qnum">' + (i + 1) + ".</span> " + esc(item.q) + "</p>" +
          '<span class="badge">' + marks + " mark" + (marks === 1 ? "" : "s") + "</span></div>" +
          printAnswerHtml(saved.text, marks) +
          '<label class="sr-only" for="pa-' + i + '">Your answer</label>' +
          '<textarea class="answer" id="pa-' + i + '" rows="' + Math.min(10, 2 + marks) + '" placeholder="Write your answer here">' + esc(saved.text) + "</textarea>" +
          '<details class="scheme"' + (saved.mark !== null ? " open" : "") + "><summary>Show mark scheme</summary>" +
          (item.suggested ? '<p class="small muted">Suggested answer. Not from the original workbook.</p>' : "") +
          formatScheme(item.answer) +
          '<div class="row self-mark"><label for="pm-' + i + '">My mark</label>' +
          '<select id="pm-' + i + '" class="mark">' + opts + "</select>" +
          '<span class="muted small">out of ' + marks + "</span></div>" +
          "</details>" +
          '<div class="print-only print-scheme"><p class="print-label">Mark scheme' + (item.suggested ? " (suggested, not from the workbook)" : "") + "</p>" +
          formatScheme(item.answer) + "</div>" +
          '<p class="print-only print-mark">' + printMarkText(saved.mark, marks) + "</p>" +
          "</article>";
      });
      html += "</section>";
    }

    app.innerHTML = html;

    var toP = document.getElementById("toPractice");
    if (toP) toP.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("practice").scrollIntoView({ behavior: "smooth" });
    });

    var pp = document.getElementById("printPractice");
    if (pp) pp.addEventListener("click", function () { window.print(); });
    var pcb = document.getElementById("printSchemes");
    if (pcb) pcb.addEventListener("change", function () {
      printSchemes = pcb.checked;
      document.body.classList.toggle("print-schemes", printSchemes);
    });
    document.body.classList.toggle("print-schemes", printSchemes);

    app.querySelectorAll(".practice-item").forEach(function (card) {
      var key = card.getAttribute("data-key");
      var marks = Number(card.getAttribute("data-marks"));
      var ta = card.querySelector(".answer");
      var sel = card.querySelector(".mark");
      var timer = null;
      function save() {
        var stt = loadState();
        stt.practice[key] = { text: ta.value, mark: sel.value === "" ? null : Number(sel.value) };
        saveState(stt);
        var stats = practiceStats(stt, t);
        var sum = document.getElementById("practiceSummary");
        if (sum) sum.innerHTML = practiceSummary(stats);
        var pt = document.getElementById("printTotal");
        if (pt) pt.textContent = printTotal(stats);
        card.querySelector(".print-mark").textContent = printMarkText(sel.value === "" ? null : Number(sel.value), marks);
      }
      ta.addEventListener("input", function () {
        // Keep the printable copy current straight away, so Ctrl+P mid-typing prints everything.
        card.querySelector(".print-answer").outerHTML = printAnswerHtml(ta.value, marks);
        clearTimeout(timer); timer = setTimeout(save, 400);
      });
      ta.addEventListener("blur", function () { clearTimeout(timer); save(); });
      sel.addEventListener("change", save);
    });
  }

  var printSchemes = false;

  function printAnswerHtml(text, marks) {
    if (text && text.trim()) return '<div class="print-only print-answer">' + esc(text) + "</div>";
    var lines = Math.max(3, Math.min(14, marks * 2));
    return '<div class="print-only print-answer is-blank" style="--lines:' + lines + '"></div>';
  }

  function printMarkText(mark, marks) {
    return typeof mark === "number" ? "Self-mark: " + mark + " / " + marks : "Mark: ____ / " + marks;
  }

  function printTotal(ps) {
    return ps.possible ? ps.got + " / " + ps.possible + " marks (" + ps.marked + " of " + ps.total + " questions)" : "Not yet";
  }

  function practiceSummary(ps) {
    return ps.marked + " of " + ps.total + " self-marked" + (ps.possible ? " · " + ps.got + "/" + ps.possible + " marks" : "");
  }

  // Mark schemes: blank line = new paragraph, lines starting "- " = bullet list.
  function formatScheme(text) {
    return String(text || "").split(/\n\s*\n/).map(function (block) {
      var lines = block.split("\n");
      if (lines.every(function (l) { return /^\s*- /.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + esc(l.replace(/^\s*- /, "")) + "</li>"; }).join("") + "</ul>";
      }
      return "<p>" + esc(block).replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }

  // ---------- Quiz engine ----------
  //
  // Question types (set with `type`, default "mcq"):
  //   mcq    options + answer (index)
  //   multi  options + answers (array of indexes): select all that apply
  //   type   accept (array of accepted answers): student types the answer
  //   match  pairs [[term, description], ...]: pick the term for each description
  //   order  items in the correct order: student arranges them
  //   sort   categories + items [[text, categoryIndex], ...]: put each item in a group
  // Every question is worth 1 point. Multi-part types give partial credit.

  function qType(q) { return q.type || "mcq"; }

  function questionKey(topicId, q) { return topicId + "|" + q.q; }

  function prepQuestion(q, topic) {
    var type = qType(q);
    var pq = { type: type, q: q.q, explanation: q.explanation || "", key: questionKey(topic.id, q), topicId: topic.id };
    var idxs, order;
    if (type === "mcq" || type === "multi") {
      idxs = q.options.map(function (_, i) { return i; });
      order = (q.shuffle === false || q.options.length === 2) ? idxs : shuffle(idxs);
      pq.options = order.map(function (i) { return q.options[i]; });
      if (type === "mcq") pq.answer = order.indexOf(q.answer);
      else pq.answers = q.answers.map(function (a) { return order.indexOf(a); });
    } else if (type === "type") {
      pq.accept = q.accept;
      pq.placeholder = q.placeholder || "Type your answer";
    } else if (type === "match") {
      pq.rows = shuffle(q.pairs.map(function (p) { return { text: p[1], correct: p[0] }; }));
      pq.choices = shuffle(q.pairs.map(function (p) { return p[0]; }));
    } else if (type === "order") {
      pq.correct = q.items.slice();
      var start = shuffle(q.items);
      var guard = 0;
      while (start.join("|") === q.items.join("|") && guard++ < 10) start = shuffle(q.items);
      pq.start = start;
    } else if (type === "sort") {
      pq.categories = q.categories.slice();
      pq.items = shuffle(q.items.map(function (it) { return { text: it[0], cat: it[1] }; }));
    }
    return pq;
  }

  function blankResponse(pq) {
    switch (pq.type) {
      case "multi": return [];
      case "type": return "";
      case "match": return pq.rows.map(function () { return ""; });
      case "order": return pq.start.slice();
      case "sort": return pq.items.map(function () { return null; });
      default: return null;
    }
  }

  function isAnswered(pq, r) {
    switch (pq.type) {
      case "multi": return r.length > 0;
      case "type": return r.trim() !== "";
      case "match": return r.every(function (x) { return x !== ""; });
      case "order": return true;
      case "sort": return r.every(function (x) { return x !== null; });
      default: return r !== null;
    }
  }

  function normaliseTyped(str) {
    return String(str).toLowerCase()
      .replace(/[£$,%'’]/g, "").replace(/\s+/g, " ").trim()
      .replace(/^the /, "").replace(/[.!]+$/, "");
  }

  function typedMatches(given, accept) {
    var g = normaliseTyped(given);
    // "48 hours", "500 units" -> "48", "500"
    var unit = g.match(/^(-?[\d.]+)\s*[a-z ]+$/);
    if (unit) g = unit[1];
    return accept.some(function (a) {
      var n = normaliseTyped(a);
      if (g === n) return true;
      var gn = parseFloat(g), an = parseFloat(n);
      return /^-?[\d.]+$/.test(g) && /^-?[\d.]+$/.test(n) && gn === an;
    });
  }

  // Returns a number from 0 to 1.
  function scoreQuestion(pq, r) {
    var n, hits, wrong;
    switch (pq.type) {
      case "mcq": return r === pq.answer ? 1 : 0;
      case "multi":
        hits = r.filter(function (i) { return pq.answers.indexOf(i) !== -1; }).length;
        wrong = r.length - hits;
        return Math.max(0, (hits - wrong) / pq.answers.length);
      case "type": return typedMatches(r, pq.accept) ? 1 : 0;
      case "match":
        n = pq.rows.filter(function (row, i) { return r[i] === row.correct; }).length;
        return n / pq.rows.length;
      case "order":
        n = r.filter(function (item, i) { return item === pq.correct[i]; }).length;
        return n / pq.correct.length;
      case "sort":
        n = pq.items.filter(function (it, i) { return r[i] === it.cat; }).length;
        return n / pq.items.length;
    }
    return 0;
  }

  var TYPE_HINT = {
    mcq: "Choose one answer.",
    multi: "Select all that apply.",
    type: "Type your answer.",
    match: "Choose the right term for each description.",
    order: "Use the arrows to put these in the right order, first at the top.",
    sort: "Put each item in the right group."
  };

  function questionBodyHtml(pq, r) {
    var h = "";
    if (pq.type === "mcq" || pq.type === "multi") {
      var multi = pq.type === "multi";
      h += '<div class="options" role="' + (multi ? "group" : "radiogroup") + '" aria-label="Answers">' +
        pq.options.map(function (o, i) {
          var sel = multi ? r.indexOf(i) !== -1 : r === i;
          return '<button type="button" class="option' + (multi ? " is-multi" : "") + (sel ? " selected" : "") + '" role="' + (multi ? "checkbox" : "radio") +
            '" aria-checked="' + sel + '" data-i="' + i + '"><span class="key">' + (i < 9 ? i + 1 : "") + "</span>" + esc(o) + "</button>";
        }).join("") + "</div>";
    } else if (pq.type === "type") {
      h += '<label class="sr-only" for="typed">Your answer</label>' +
        '<input id="typed" class="typed" autocomplete="off" spellcheck="false" placeholder="' + esc(pq.placeholder) + '" value="' + esc(r) + '">';
    } else if (pq.type === "match") {
      h += '<div class="match">' + pq.rows.map(function (row, i) {
        return '<div class="match-row"><label for="m' + i + '">' + esc(row.text) + "</label>" +
          '<select id="m' + i + '" data-i="' + i + '"><option value="">Choose…</option>' +
          pq.choices.map(function (c) { return '<option' + (r[i] === c ? " selected" : "") + ">" + esc(c) + "</option>"; }).join("") +
          "</select></div>";
      }).join("") + "</div>";
    } else if (pq.type === "order") {
      h += '<ol class="order">' + r.map(function (item, i) {
        return '<li><span class="order-n">' + (i + 1) + '</span><span class="order-text">' + esc(item) + "</span>" +
          '<span class="order-btns"><button type="button" class="icon-btn" data-move="-1" data-i="' + i + '" aria-label="Move up: ' + esc(item) + '"' + (i === 0 ? " disabled" : "") + ">↑</button>" +
          '<button type="button" class="icon-btn" data-move="1" data-i="' + i + '" aria-label="Move down: ' + esc(item) + '"' + (i === r.length - 1 ? " disabled" : "") + ">↓</button></span></li>";
      }).join("") + "</ol>";
    } else if (pq.type === "sort") {
      h += '<div class="sort">' + pq.items.map(function (it, i) {
        return '<div class="sort-row"><span class="sort-text" id="s' + i + '">' + esc(it.text) + "</span>" +
          '<span class="seg" role="radiogroup" aria-labelledby="s' + i + '">' + pq.categories.map(function (c, ci) {
            var sel = r[i] === ci;
            return '<button type="button" role="radio" aria-checked="' + sel + '" class="seg-btn' + (sel ? " selected" : "") + '" data-i="' + i + '" data-c="' + ci + '">' + esc(c) + "</button>";
          }).join("") + "</span></div>";
      }).join("") + "</div>";
    }
    return h;
  }

  // Binds input for the current question. onChange(newResponse, rerender)
  function bindQuestionBody(root, pq, r, onChange) {
    if (pq.type === "mcq" || pq.type === "multi") {
      root.querySelectorAll(".option").forEach(function (b) {
        b.addEventListener("click", function () { onChange(toggleOption(pq, r, Number(b.getAttribute("data-i"))), true); });
      });
    } else if (pq.type === "type") {
      var inp = root.querySelector("#typed");
      inp.addEventListener("input", function () { onChange(inp.value, false); });
      inp.focus();
    } else if (pq.type === "match") {
      root.querySelectorAll(".match select").forEach(function (sel) {
        sel.addEventListener("change", function () {
          var next = Array.prototype.map.call(root.querySelectorAll(".match select"), function (x) { return x.value; });
          onChange(next, false);
        });
      });
    } else if (pq.type === "order") {
      root.querySelectorAll(".order .icon-btn").forEach(function (b) {
        b.addEventListener("click", function () {
          var i = Number(b.getAttribute("data-i")), d = Number(b.getAttribute("data-move"));
          var next = r.slice(), tmp = next[i]; next[i] = next[i + d]; next[i + d] = tmp;
          onChange(next, true, '.order .icon-btn[data-i="' + (i + d) + '"][data-move="' + d + '"]');
        });
      });
    } else if (pq.type === "sort") {
      root.querySelectorAll(".seg-btn").forEach(function (b) {
        b.addEventListener("click", function () {
          var next = r.slice(); next[Number(b.getAttribute("data-i"))] = Number(b.getAttribute("data-c"));
          onChange(next, true, '.seg-btn[data-i="' + b.getAttribute("data-i") + '"][data-c="' + b.getAttribute("data-c") + '"]');
        });
      });
    }
  }

  function toggleOption(pq, r, i) {
    if (pq.type === "mcq") return i;
    var next = r.slice(), at = next.indexOf(i);
    if (at === -1) next.push(i); else next.splice(at, 1);
    return next;
  }

  function reviewBodyHtml(pq, r) {
    var h = "";
    if (pq.type === "mcq") {
      var right = r === pq.answer;
      h += '<p class="' + (right ? "ok" : "bad") + '">Your answer: ' + esc(pq.options[r]) + "</p>" +
        (right ? "" : '<p class="ok">Correct answer: ' + esc(pq.options[pq.answer]) + "</p>");
    } else if (pq.type === "multi") {
      h += '<ul class="review-items">' + pq.options.map(function (o, i) {
        var should = pq.answers.indexOf(i) !== -1, did = r.indexOf(i) !== -1;
        if (!should && !did) return "";
        var cls = should && did ? "ok" : "bad";
        var note = should && did ? "selected, correct" : should ? "missed" : "selected, but wrong";
        return '<li class="' + cls + '">' + esc(o) + ' <span class="muted">(' + note + ")</span></li>";
      }).join("") + "</ul>";
    } else if (pq.type === "type") {
      var ok = typedMatches(r, pq.accept);
      h += '<p class="' + (ok ? "ok" : "bad") + '">Your answer: ' + esc(r) + "</p>" +
        (ok ? "" : '<p class="ok">Correct answer: ' + esc(pq.accept[0]) + "</p>");
    } else if (pq.type === "match") {
      h += '<ul class="review-items">' + pq.rows.map(function (row, i) {
        var good = r[i] === row.correct;
        return '<li class="' + (good ? "ok" : "bad") + '"><strong>' + esc(row.correct) + "</strong>: " + esc(row.text) +
          (good ? "" : ' <span class="muted">(you chose ' + esc(r[i]) + ")</span>") + "</li>";
      }).join("") + "</ul>";
    } else if (pq.type === "order") {
      h += '<p class="small muted">Correct order:</p><ol class="review-items">' + pq.correct.map(function (item, i) {
        var good = r[i] === item;
        return '<li class="' + (good ? "ok" : "bad") + '">' + esc(item) +
          (good ? "" : ' <span class="muted">(you put ' + esc(r[i]) + " here)</span>") + "</li>";
      }).join("") + "</ol>";
    } else if (pq.type === "sort") {
      h += '<ul class="review-items">' + pq.items.map(function (it, i) {
        var good = r[i] === it.cat;
        return '<li class="' + (good ? "ok" : "bad") + '">' + esc(it.text) + ": <strong>" + esc(pq.categories[it.cat]) + "</strong>" +
          (good ? "" : ' <span class="muted">(you chose ' + esc(pq.categories[r[i]]) + ")</span>") + "</li>";
      }).join("") + "</ul>";
    }
    return h;
  }

  function fmtPoints(n) {
    var r = Math.round(n * 10) / 10;
    return String(r % 1 === 0 ? r : r.toFixed(1));
  }

  // Pick a quiz: mostly multiple choice, plus up to `maxOther` of the other types.
  function pickQuestions(pool, count, maxOther) {
    var others = shuffle(pool.filter(function (x) { return qType(x.q) !== "mcq"; }));
    var mcqs = shuffle(pool.filter(function (x) { return qType(x.q) === "mcq"; }));
    var take = others.slice(0, Math.min(maxOther, others.length));
    var rest = shuffle(mcqs.concat(others.slice(take.length)));
    take = take.concat(rest.slice(0, Math.max(0, count - take.length)));
    return shuffle(take);
  }

  function recordMistakes(st, questions, responses) {
    questions.forEach(function (pq, i) {
      if (scoreQuestion(pq, responses[i]) >= 1) delete st.missed[pq.key];
      else st.missed[pq.key] = (st.missed[pq.key] || 0) + 1;
    });
  }

  // Runs a quiz. opts: crumbs (html), colour, questions (prepared), finish(score, total, responses) -> html for the top of the results page
  function runQuiz(opts) {
    var questions = opts.questions;
    var idx = 0, done = false;
    var responses = questions.map(blankResponse);

    function answeredCount() {
      return questions.filter(function (pq, i) { return isAnswered(pq, responses[i]); }).length;
    }

    function updateChrome() {
      var nb = document.getElementById("nextBtn");
      if (nb) nb.disabled = !isAnswered(questions[idx], responses[idx]);
      var a = document.getElementById("answered");
      if (a) a.textContent = answeredCount() + " answered";
      var bar = app.querySelector(".quiz .bar span");
      if (bar) bar.style.width = Math.round(answeredCount() / questions.length * 100) + "%";
    }

    function renderQuestion(focusSel) {
      var pq = questions[idx];
      var last = idx === questions.length - 1;
      app.innerHTML = opts.crumbs +
        '<section class="card quiz" style="--subject:' + esc(opts.colour) + '">' +
        '<div class="quiz-top"><span>Question ' + (idx + 1) + " of " + questions.length + "</span>" +
        '<span id="answered">' + answeredCount() + " answered</span></div>" +
        progressBar(Math.round(answeredCount() / questions.length * 100)) +
        '<h2 class="question">' + esc(pq.q) + "</h2>" +
        '<p class="type-hint">' + TYPE_HINT[pq.type] + "</p>" +
        '<div id="qbody">' + questionBodyHtml(pq, responses[idx]) + "</div>" +
        '<p class="small muted quiz-hint">Answers are marked when you finish. You can go back and change them until then.</p>' +
        '<div class="quiz-actions">' +
        (idx > 0 ? '<button class="btn" id="backBtn" type="button">Back</button>' : "<span></span>") +
        '<button class="btn primary" id="nextBtn" type="button">' + (last ? "Finish and mark" : "Next question") + "</button></div>" +
        "</section>";
      bindBody(focusSel);
      document.getElementById("nextBtn").addEventListener("click", next);
      var back = document.getElementById("backBtn");
      if (back) back.addEventListener("click", function () { idx--; renderQuestion(); });
      updateChrome();
      if (!focusSel && pq.type !== "type") {
        var f = app.querySelector("#qbody .selected") || app.querySelector("#qbody button:not([disabled]), #qbody select");
        if (f) f.focus();
      }
    }

    function bindBody(focusSel) {
      var body = document.getElementById("qbody");
      var pq = questions[idx];
      bindQuestionBody(body, pq, responses[idx], function (next, rerender, nextFocus) {
        responses[idx] = next;
        if (rerender) {
          body.innerHTML = questionBodyHtml(pq, next);
          bindBody(nextFocus);
        }
        updateChrome();
      });
      if (focusSel) {
        var el = body.querySelector(focusSel);
        if (el && el.disabled) el = body.querySelector(focusSel.replace(/data-move="-?1"/, function (m) { return m.indexOf("-1") !== -1 ? 'data-move="1"' : 'data-move="-1"'; }));
        if (el) el.focus();
      }
    }

    function next() {
      if (!isAnswered(questions[idx], responses[idx])) return;
      if (idx < questions.length - 1) { idx++; renderQuestion(); }
      else finish();
    }

    function finish() {
      done = true;
      document.removeEventListener("keydown", onKey);
      var scores = questions.map(function (pq, i) { return scoreQuestion(pq, responses[i]); });
      var total = questions.length;
      var score = scores.reduce(function (m, x) { return m + x; }, 0);
      var html = opts.finish(score, total, responses);
      html += '<section class="review-list"><h2>Your answers</h2>' + questions.map(function (pq, i) {
        var sc = scores[i];
        var cls = sc >= 1 ? "is-right" : sc > 0 ? "is-part" : "is-wrong";
        var mark = sc >= 1 ? "✓" : sc > 0 ? "½" : "✗";
        var label = sc >= 1 ? "Correct. " : sc > 0 ? "Partly correct. " : "Incorrect. ";
        return '<div class="card review ' + cls + '">' +
          '<div class="review-head"><span class="review-mark" aria-hidden="true">' + mark + "</span>" +
          '<p class="question"><span class="sr-only">' + label + "</span>" + (i + 1) + ". " + esc(pq.q) + "</p>" +
          (pq.type !== "mcq" && pq.type !== "type" ? '<span class="badge">' + fmtPoints(sc) + " / 1</span>" : "") + "</div>" +
          reviewBodyHtml(pq, responses[i]) +
          (pq.explanation ? '<p class="muted">' + esc(pq.explanation) + "</p>" : "") + "</div>";
      }).join("") + "</section>";
      app.innerHTML = html;
      renderWho();
      window.scrollTo(0, 0);
      var retry = document.getElementById("retry");
      if (retry) retry.addEventListener("click", function (e) { e.preventDefault(); route(); });
    }

    function onKey(e) {
      if (done) return;
      var tag = e.target && e.target.tagName;
      var pq = questions[idx];
      if (tag === "INPUT" && e.key === "Enter") { e.preventDefault(); next(); return; }
      if (/INPUT|TEXTAREA|SELECT/.test(tag || "")) return;
      var n = parseInt(e.key, 10);
      if ((pq.type === "mcq" || pq.type === "multi") && n >= 1 && n <= pq.options.length) {
        e.preventDefault();
        responses[idx] = toggleOption(pq, responses[idx], n - 1);
        var body = document.getElementById("qbody");
        body.innerHTML = questionBodyHtml(pq, responses[idx]);
        bindBody();
        updateChrome();
      } else if (e.key === "Enter" && tag !== "BUTTON" && isAnswered(pq, responses[idx])) {
        e.preventDefault(); next();
      }
    }

    document.addEventListener("keydown", onKey);
    cleanup = function () { document.removeEventListener("keydown", onKey); };
    renderQuestion();
  }

  function resultCard(o) {
    return '<section class="card result ' + (o.passed === false ? "is-fail" : "is-pass") + '">' +
      "<h1>" + o.heading + "</h1>" +
      '<p class="big">' + fmtPoints(o.score) + " / " + o.total + " · " + o.pct + "%</p>" +
      progressBar(o.pct, o.passMark) +
      (o.text ? "<p>" + o.text + "</p>" : "") +
      '<div class="actions">' + o.actions + "</div></section>";
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
    var started = Date.now();
    var pool = t.questions.map(function (q) { return { q: q, topic: t }; });
    var questions = pickQuestions(pool, SETTINGS.questionsPerQuiz, 4).map(function (x) { return prepQuestion(x.q, x.topic); });

    runQuiz({
      colour: s.colour || "#1f4e79",
      crumbs: '<nav class="crumbs"><a href="#/topic/' + encodeURIComponent(t.id) + '">' + esc(t.title) + "</a> › Quiz</nav>",
      questions: questions,
      finish: function (score, total, responses) {
        var pct = Math.round(score / total * 100);
        var passed = pct >= pm;
        var now = new Date().toISOString();
        var st = loadState();
        var firstPass = passed && !st.certificates[t.id];
        st.attempts.push({
          topicId: t.id, score: Math.round(score * 10) / 10, total: total, pct: pct, passed: passed,
          date: now, seconds: Math.round((Date.now() - started) / 1000)
        });
        if (passed) {
          var prev = st.certificates[t.id];
          if (!prev || pct > prev.pct) st.certificates[t.id] = { pct: pct, date: now };
        }
        recordMistakes(st, questions, responses);
        saveState(st);
        var html = storageBanner() + resultCard({
          passed: passed, score: score, total: total, pct: pct, passMark: pm,
          heading: passed ? (firstPass ? "Passed. Certificate earned." : "Passed.") : "Not passed yet",
          text: passed ? "The pass mark was " + pm + "%." : "You need " + pm + "% to pass. Have another look at the key points and flashcards, then try again.",
          actions: (passed ? '<a class="btn primary" href="#/certificate/' + encodeURIComponent(t.id) + '">View certificate</a>' : "") +
            '<a class="btn' + (passed ? "" : " primary") + '" href="#/quiz/' + encodeURIComponent(t.id) + '" id="retry">Try again</a>' +
            ((t.cards || []).length ? '<a class="btn" href="#/cards/' + encodeURIComponent(t.id) + '">Flashcards</a>' : "") +
            '<a class="btn" href="#/topic/' + encodeURIComponent(t.id) + '">Back to topic</a>'
        });
        if (passed && subjectComplete(st, s)) {
          html += '<div class="banner gold">You have passed every topic in ' + esc(s.title) +
            '. <a href="#/certificate/subject/' + encodeURIComponent(s.id) + '">Get your Element certificate</a>.</div>';
        }
        return html;
      }
    });
  }

  var TEST_LENGTH = 20;

  function viewTest(subjectId) {
    var s = subjectIndex[subjectId];
    if (!s) return viewNotFound();
    var state = loadState();
    setTitle("Test: " + s.title);
    markNav("home");
    if (!state.student.name) {
      app.innerHTML = nameForm("#/test/" + encodeURIComponent(subjectId));
      bindNameForm();
      return;
    }
    var pool = [];
    s.topics.forEach(function (t) { t.questions.forEach(function (q) { pool.push({ q: q, topic: t }); }); });
    var questions = pickQuestions(pool, TEST_LENGTH, 7).map(function (x) { return prepQuestion(x.q, x.topic); });
    var started = Date.now();

    runQuiz({
      colour: s.colour || "#1f4e79",
      crumbs: '<nav class="crumbs"><a href="#/">Topics</a> › ' + esc(s.title) + " test</nav>",
      questions: questions,
      finish: function (score, total, responses) {
        var pct = Math.round(score / total * 100);
        var st = loadState();
        st.tests.push({ subjectId: s.id, score: Math.round(score * 10) / 10, total: total, pct: pct, date: new Date().toISOString(), seconds: Math.round((Date.now() - started) / 1000) });
        recordMistakes(st, questions, responses);
        saveState(st);
        var best = st.tests.filter(function (x) { return x.subjectId === s.id; }).reduce(function (m, x) { return Math.max(m, x.pct); }, 0);
        // Which topics went worst
        var byTopic = {};
        questions.forEach(function (pq, i) {
          var b = byTopic[pq.topicId] || (byTopic[pq.topicId] = { got: 0, n: 0 });
          b.got += scoreQuestion(pq, responses[i]); b.n++;
        });
        var weak = Object.keys(byTopic).filter(function (k) { return byTopic[k].got / byTopic[k].n < 0.7; });
        return storageBanner() + resultCard({
          score: score, total: total, pct: pct,
          heading: s.title + " test",
          text: "Your best on this test: " + best + "%." +
            (weak.length ? " Topics to revisit: " + weak.map(function (k) {
              return '<a href="#/topic/' + encodeURIComponent(k) + '">' + esc(topicIndex[k].topic.title) + "</a>";
            }).join(", ") + "." : " No weak topics in this test."),
          actions: '<a class="btn primary" href="#/test/' + encodeURIComponent(s.id) + '" id="retry">New test</a>' +
            '<a class="btn" href="#/">Back to topics</a>'
        });
      }
    });
  }

  function missedPool(state) {
    var pool = [];
    Object.keys(state.missed).forEach(function (key) {
      var cut = key.indexOf("|");
      var e = topicIndex[key.slice(0, cut)];
      if (!e) return;
      var q = e.topic.questions.filter(function (x) { return x.q === key.slice(cut + 1); })[0];
      if (q) pool.push({ q: q, topic: e.topic });
    });
    return pool;
  }

  function viewMistakes() {
    var state = loadState();
    setTitle("Practise my mistakes");
    markNav("progress");
    var pool = missedPool(state);
    if (!pool.length) {
      app.innerHTML = '<div class="card"><h1>No mistakes to practise</h1><p>Questions you get wrong in quizzes and tests appear here until you get them right.</p><a class="btn primary" href="#/">Back to topics</a></div>';
      return;
    }
    var questions = shuffle(pool).slice(0, 10).map(function (x) { return prepQuestion(x.q, x.topic); });
    runQuiz({
      colour: "#1f4e79",
      crumbs: '<nav class="crumbs"><a href="#/progress">My progress</a> › Practise my mistakes</nav>',
      questions: questions,
      finish: function (score, total, responses) {
        var pct = Math.round(score / total * 100);
        var st = loadState();
        recordMistakes(st, questions, responses);
        saveState(st);
        var left = missedPool(st).length;
        return resultCard({
          score: score, total: total, pct: pct, heading: "Mistakes practice",
          text: left ? left + " question" + (left === 1 ? "" : "s") + " still to get right." : "You've cleared all your mistakes.",
          actions: (left ? '<a class="btn primary" href="#/mistakes" id="retry">Keep going</a>' : "") + '<a class="btn" href="#/progress">My progress</a>'
        });
      }
    });
  }

  // ---------- Flashcards ----------

  function viewCards(topicId) {
    var entry = topicIndex[topicId];
    if (!entry) return viewNotFound();
    var t = entry.topic, s = entry.subject;
    setTitle("Flashcards: " + t.title);
    markNav("home");
    var cards = (t.cards || []).map(function (c) { return { front: c[0], back: c[1] }; });
    if (!cards.length) {
      app.innerHTML = '<div class="card"><p>No flashcards for this topic yet.</p><a class="btn" href="#/topic/' + encodeURIComponent(t.id) + '">Back</a></div>';
      return;
    }
    var flipBack = false; // false: term first. true: definition first.
    var deck, knownFirstTime, seen, current, flipped, done = false;

    function start() {
      deck = shuffle(cards);
      knownFirstTime = 0; seen = {}; flipped = false;
      current = deck.shift();
      render();
    }

    function render() {
      var remaining = deck.length + 1;
      app.innerHTML = '<nav class="crumbs"><a href="#/topic/' + encodeURIComponent(t.id) + '">' + esc(t.title) + "</a> › Flashcards</nav>" +
        '<section class="cards-wrap" style="--subject:' + esc(s.colour || "#1f4e79") + '">' +
        '<div class="quiz-top"><span>' + remaining + " card" + (remaining === 1 ? "" : "s") + " left</span>" +
        '<label class="check small"><input type="checkbox" id="flipMode"' + (flipBack ? " checked" : "") + "> Show definition first</label></div>" +
        '<button type="button" class="flashcard' + (flipped ? " is-flipped" : "") + '" id="card" aria-live="polite">' +
        '<span class="fc-label">' + (flipped ? (flipBack ? "Term" : "Definition") : (flipBack ? "Definition" : "Term")) + "</span>" +
        '<span class="fc-text">' + esc(flipped ? (flipBack ? current.front : current.back) : (flipBack ? current.back : current.front)) + "</span>" +
        (flipped ? "" : '<span class="fc-hint">Tap or press space to turn over</span>') +
        "</button>" +
        '<div class="fc-actions"' + (flipped ? "" : " hidden") + ">" +
        '<button class="btn" id="again" type="button">Not yet <span class="muted small">(1)</span></button>' +
        '<button class="btn primary" id="knew" type="button">Got it <span class="small">(2)</span></button></div>' +
        "</section>";
      document.getElementById("card").addEventListener("click", flip);
      document.getElementById("flipMode").addEventListener("change", function (e) { flipBack = e.target.checked; flipped = false; render(); });
      if (flipped) {
        document.getElementById("again").addEventListener("click", function () { answer(false); });
        document.getElementById("knew").addEventListener("click", function () { answer(true); });
        document.getElementById("knew").focus();
      } else {
        document.getElementById("card").focus();
      }
    }

    function flip() { flipped = !flipped; render(); }

    function answer(knew) {
      if (knew && !seen[current.front]) knownFirstTime++;
      seen[current.front] = true;
      if (!knew) {
        // Put it back a few cards later so it comes round again.
        deck.splice(Math.min(deck.length, 2 + Math.floor(Math.random() * 3)), 0, current);
      }
      if (!deck.length) return finish();
      current = deck.shift();
      flipped = false;
      render();
    }

    function finish() {
      done = true;
      var st = loadState();
      st.cards[t.id] = { known: knownFirstTime, total: cards.length, date: new Date().toISOString() };
      saveState(st);
      app.innerHTML = '<nav class="crumbs"><a href="#/topic/' + encodeURIComponent(t.id) + '">' + esc(t.title) + "</a> › Flashcards</nav>" +
        '<section class="card result is-pass"><h1>Deck finished</h1>' +
        '<p class="big">' + knownFirstTime + " / " + cards.length + "</p><p>known first time</p>" +
        '<div class="actions"><button class="btn" id="restart" type="button">Go again</button>' +
        '<a class="btn primary" href="#/quiz/' + encodeURIComponent(t.id) + '">Take the quiz</a>' +
        '<a class="btn" href="#/topic/' + encodeURIComponent(t.id) + '">Back to topic</a></div></section>' +
        '<section class="card"><h2>All cards</h2><dl class="card-list">' + cards.map(function (c) {
          return "<dt>" + esc(c.front) + "</dt><dd>" + esc(c.back) + "</dd>";
        }).join("") + "</dl></section>";
      document.getElementById("restart").addEventListener("click", function () { done = false; start(); });
    }

    function onKey(e) {
      if (done || (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName))) return;
      if (e.key === " " || e.key === "Enter") {
        if (e.target && e.target.tagName === "BUTTON" && e.target.id !== "card") return;
        e.preventDefault(); flip();
      } else if (flipped && e.key === "1") answer(false);
      else if (flipped && e.key === "2") answer(true);
    }
    document.addEventListener("keydown", onKey);
    cleanup = function () { document.removeEventListener("keydown", onKey); };
    start();
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

    var missedN = missedPool(state).length;
    html += '<section class="card"><div class="subject-head"><h2>Practise my mistakes</h2></div>' +
      (missedN ? "<p>" + missedN + " question" + (missedN === 1 ? "" : "s") + " you got wrong and haven't got right since.</p>" +
        '<a class="btn primary" href="#/mistakes">Practise them</a>'
        : '<p class="muted">Nothing to practise. Questions you get wrong in quizzes and tests show up here.</p>') + "</section>";

    html += '<section class="card"><h2>Element tests</h2><div class="table-wrap"><table><thead><tr><th>Element</th><th>Tests taken</th><th>Best</th><th>Last</th><th></th></tr></thead><tbody>' +
      CONTENT.subjects.map(function (s) {
        var list = state.tests.filter(function (x) { return x.subjectId === s.id; });
        var best = list.reduce(function (m, x) { return Math.max(m, x.pct); }, 0);
        return "<tr><td>" + esc(s.title) + "</td><td>" + list.length + "</td><td>" + (list.length ? best + "%" : "–") + "</td><td>" +
          (list.length ? list[list.length - 1].pct + "%" : "–") + '</td><td><a href="#/test/' + encodeURIComponent(s.id) + '">Take test</a></td></tr>';
      }).join("") + "</tbody></table></div></section>";

    CONTENT.subjects.forEach(function (s) {
      html += '<section class="card"><div class="subject-head"><h2>' + esc(s.title) + "</h2>" +
        (subjectComplete(state, s) ? '<a class="badge gold" href="#/certificate/subject/' + encodeURIComponent(s.id) + '">Element certificate</a>' : "") +
        "</div>" +
        '<div class="table-wrap"><table><thead><tr><th>Topic</th><th>Attempts</th><th>Best</th><th>Cards</th><th>Written</th><th>Status</th></tr></thead><tbody>';
      s.topics.forEach(function (t) {
        var st = topicStats(state, t.id);
        html += "<tr>" +
          '<td><a href="#/topic/' + encodeURIComponent(t.id) + '">' + esc(t.title) + "</a></td>" +
          "<td>" + st.attempts + "</td>" +
          "<td>" + (st.best == null ? "–" : st.best + "%") + "</td>" +
          "<td>" + (state.cards[t.id] ? state.cards[t.id].known + "/" + state.cards[t.id].total : "–") + "</td>" +
          "<td>" + (function () {
            var ps = practiceStats(state, t);
            return ps.total ? ps.marked + "/" + ps.total + (ps.possible ? ' <span class="muted">(' + ps.got + "/" + ps.possible + ")</span>" : "") : "–";
          })() + "</td>" +
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
      '<p class="small">Deletes your name, scores, written answers and certificates from this browser.</p>' +
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
      var seenTests = {};
      st.tests.forEach(function (x) { seenTests[x.subjectId + x.date] = true; });
      incoming.tests.forEach(function (x) { if (!seenTests[x.subjectId + x.date]) st.tests.push(x); });
      Object.keys(incoming.missed).forEach(function (k) { if (!(k in st.missed)) st.missed[k] = incoming.missed[k]; });
      Object.keys(incoming.cards).forEach(function (k) { if (!st.cards[k]) st.cards[k] = incoming.cards[k]; });
      Object.keys(incoming.practice).forEach(function (k) {
        var mine = st.practice[k], inc = incoming.practice[k];
        if (!mine || (!mine.text && inc.text) || (mine.mark === null && inc.mark !== null)) st.practice[k] = inc;
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
      reason: "has passed the revision quiz for",
      topic: t.title,
      detail: esc(s.title) + " · score " + cert.pct + "%",
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
      reason: "has passed every revision quiz in",
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
    else if (page === "test") viewTest(parts[1]);
    else if (page === "cards") viewCards(parts[1]);
    else if (page === "mistakes") viewMistakes();
    else if (page === "progress") viewProgress();
    else if (page === "certificate" && parts[1] === "subject") viewSubjectCertificate(parts[2]);
    else if (page === "certificate") viewCertificate(parts[1]);
    else viewNotFound();

    document.body.classList.toggle("cert-page", page === "certificate");
    document.body.classList.toggle("topic-page", page === "topic");
    setPrintPage(page === "certificate");
    window.scrollTo(0, 0);
  }

  // Chrome ignores named @page rules here, so swap the default page size per route.
  function setPrintPage(landscape) {
    var el = document.getElementById("print-page");
    if (!el) { el = document.createElement("style"); el.id = "print-page"; document.head.appendChild(el); }
    el.textContent = landscape ? "@page { size: A4 landscape; margin: 0; }" : "@page { size: A4 portrait; margin: 16mm 15mm; }";
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("resize", fitCertificate);
  loadState();
  document.querySelector(".brand").lastChild.textContent = " " + SETTINGS.siteName.replace(/^TLV\s*/, "");
  renderWho();
  route();
})();
