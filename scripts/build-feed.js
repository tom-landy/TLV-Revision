#!/usr/bin/env node
/*
 * Builds public/podcast.xml, a podcast RSS feed students can subscribe to in a podcast app.
 * DEEP DIVES ONLY (topic overviews stay on the topic pages).
 *
 * It lists every deep dive in public/data/podcasts.js whose audio file exists, plus any
 * file in public/audio/deep-dives/ named after a topic (e.g. 6.4.m4a), with its real
 * file size and (for .m4a) duration read from the file. Run by Render on each deploy
 * (see render.yaml), so uploading an episode is enough to update the feed.
 *
 * Run locally:  node scripts/build-feed.js
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const PUB = path.join(ROOT, "public");

function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(PUB, file), "utf8"), ctx);
  return ctx.window;
}
const SETTINGS = load("data/settings.js").TLV_CONTENT.settings;
const EPISODES = (load("data/podcasts.js").TLV_PODCASTS || []).filter(e => e.kind === "deep");
// Topic titles, for deep dives uploaded under the topic-number naming (audio/deep-dives/6.4.m4a).
const TOPICS = {};
{
  const ctx = { window: {} }; vm.createContext(ctx);
  const html = fs.readFileSync(path.join(PUB, "index.html"), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  for (const m of html.matchAll(/src="(data\/[^"]+)"/g)) vm.runInContext(fs.readFileSync(path.join(PUB, m[1]), "utf8"), ctx);
  for (const s of ctx.window.TLV_CONTENT.subjects) for (const t of s.topics) TOPICS[t.id] = t.title;
}
for (const id of Object.keys(TOPICS)) {
  for (const ext of [".m4a", ".mp3"]) {
    if (fs.existsSync(path.join(PUB, "audio/deep-dives", id + ext))) {
      EPISODES.push({ id: "DD-" + id, kind: "deep", topic: id, folder: "audio/deep-dives/", files: [id + ext],
        title: TOPICS[id].replace(/^[\d.]+\s*/, ""), lesson: "", covers: [] });
      break;
    }
  }
}
const SITE = (SETTINGS.siteUrl || "").replace(/\/+$/, "");
if (!SITE) { console.error("settings.js needs siteUrl"); process.exit(1); }

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Duration of an .m4a/.mp4 file from its 'mvhd' box (seconds), or null.
function m4aDuration(buf) {
  const i = buf.indexOf("mvhd");
  if (i < 4) return null;
  const version = buf[i + 4];
  try {
    if (version === 1) {
      const timescale = buf.readUInt32BE(i + 4 + 4 + 16);
      const dur = Number(buf.readBigUInt64BE(i + 4 + 4 + 20));
      return timescale ? dur / timescale : null;
    }
    const timescale = buf.readUInt32BE(i + 4 + 4 + 8);
    const dur = buf.readUInt32BE(i + 4 + 4 + 12);
    return timescale ? dur / timescale : null;
  } catch (e) { return null; }
}
const hms = s => { s = Math.round(s); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
  return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(x).padStart(2, "0"); };

// Find each episode's file (first matching name), skip those not uploaded yet.
const found = [];
EPISODES.forEach((e, order) => {
  const folder = (e.folder || "audio/").replace(/^\/+/, "");
  const names = e.files || [e.file];
  for (const n of names) {
    const p = path.join(PUB, folder, n);
    if (fs.existsSync(p)) {
      const buf = fs.readFileSync(p);
      found.push({ e, order, folder, name: n, size: buf.length, duration: /\.m4a$/i.test(n) ? m4aDuration(buf) : null });
      break;
    }
  }
});

// Course order: by topic, overviews before deep dives, then list order.
const topicKey = t => t.split(".").map(n => String(n).padStart(3, "0")).join(".");
found.sort((a, b) => topicKey(a.e.topic).localeCompare(topicKey(b.e.topic)) ||
  ((a.e.kind === "deep") - (b.e.kind === "deep")) || a.order - b.order);

const items = found.map((f, i) => {
  const e = f.e;
  const kind = e.kind === "deep" ? "Deep dive" : "Topic overview";
  const title = "Deep dive " + e.topic + ": " + e.title;
  // Stable dates: the episode's 'added' date, plus a minute per position so apps keep course order.
  const base = Date.parse((e.added || "2026-11-27") + "T08:00:00Z");
  const date = new Date(base + i * 60000).toUTCString();
  const url = SITE + "/" + f.folder + encodeURIComponent(f.name);
  const type = /\.mp3$/i.test(f.name) ? "audio/mpeg" : "audio/mp4";
  const desc = kind + " for topic " + e.topic + (e.lesson ? " (" + e.lesson + ")" : "") + ".\n" +
    (e.covers || []).map(c => "- " + c).join("\n") + (e.scenario ? "\nScenario: " + e.scenario : "");
  return `    <item>
      <title>${esc(title)}</title>
      <description>${esc(desc)}</description>
      <itunes:summary>${esc(desc)}</itunes:summary>
      <enclosure url="${esc(url)}" length="${f.size}" type="${type}"/>
      <guid isPermaLink="false">tlv-revision-${esc(e.id)}</guid>
      <pubDate>${date}</pubDate>
      <itunes:episode>${i + 1}</itunes:episode>
      <itunes:episodeType>full</itunes:episodeType>${f.duration ? `
      <itunes:duration>${hms(f.duration)}</itunes:duration>` : ""}
      <itunes:explicit>false</itunes:explicit>
    </item>`;
});

const name = SETTINGS.siteName || "TLV Revision";
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(name)} Podcasts</title>
    <link>${esc(SITE)}/#/podcasts</link>
    <atom:link href="${esc(SITE)}/podcast.xml" rel="self" type="application/rss+xml"/>
    <description>Deep-dive podcasts for ${esc(SETTINGS.tagline || "T Level Management and Administration")}.</description>
    <language>en-gb</language>
    <itunes:author>${esc(SETTINGS.certificateSignatory || name)}</itunes:author>
    <itunes:image href="${esc(SITE)}/podcast-cover.png"/>
    <image><url>${esc(SITE)}/podcast-cover.png</url><title>${esc(name)} Podcasts</title><link>${esc(SITE)}/</link></image>
    <itunes:category text="Education"/>
    <itunes:explicit>false</itunes:explicit>
    <itunes:type>serial</itunes:type>
    <itunes:block>Yes</itunes:block>
${items.join("\n")}
  </channel>
</rss>
`;
fs.writeFileSync(path.join(PUB, "podcast.xml"), xml);
console.log("podcast.xml: " + found.length + " deep dives (" + (EPISODES.length - found.length) + " listed but not uploaded)");
