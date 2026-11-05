# TLV Revision

A static revision site for TLV students: resources per topic, multiple-choice quizzes, progress tracking and printable certificates.

No build step, no server, no database. Plain HTML, CSS and JavaScript in `public/`.

## What students get

- **Topics** grouped by subject, each with notes and links.
- **Quizzes** with questions and answer order shuffled every attempt, instant feedback with an explanation, and a review of wrong answers at the end. Keys 1 to 4 pick an answer.
- **Progress**: attempts, best and last score per topic, overall stats.
- **Certificates**: one per topic when they reach the pass mark, plus a subject certificate when every topic in a subject is passed. Prints on one A4 landscape page, or saves as PDF from the print dialog.
- **Backup code** to move progress between devices.

## Limits you should know about

Progress is stored in the student's browser (`localStorage`). That means:

- Teachers cannot see student progress. There is no central record.
- Switching device or clearing browser data loses progress, unless the student used the backup code.
- Certificates are not verifiable. A student could edit their browser data or the page and print anything. The reference code on the certificate is a hash for tidiness, not proof.

If you need teacher dashboards, logins or trustworthy certificates, that needs a backend (for example a Render web service with a Postgres database). The content format here would carry over.

## Run locally

```bash
cd public
```

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `public/index.html` directly from disk also works.

## Deploy on Render

The repo includes `render.yaml`, so Render can set it up from the file.

1. Push this repo to GitHub.
2. In Render, choose **New > Blueprint** and pick the repo. Render reads `render.yaml` and creates a static site called `tlv-revision`.
3. Every push to the default branch redeploys.

To set it up by hand instead: **New > Static Site**, pick the repo, leave the build command empty, and set the publish directory to `public`.

## Adding and editing content

All content is in `public/data/content.js`. Edit it, push, and Render redeploys.

```js
{
  id: "science-cells",            // unique, never change once live
  title: "Cell biology",
  summary: "One line shown on the topic card.",
  passMark: 80,                   // optional, % needed to pass
  resources: [
    { type: "notes", title: "Key facts", body: "Paragraph one.\n\nParagraph two." },
    { type: "link",  title: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize" },
    { type: "video", title: "Explainer", url: "https://..." },
    { type: "pdf",   title: "Worksheet", url: "files/cells-worksheet.pdf" }
  ],
  questions: [
    {
      q: "Where does photosynthesis take place?",
      options: ["Mitochondria", "Chloroplasts", "Nucleus", "Vacuole"],
      answer: 1,                  // index of the correct option, counting from 0
      explanation: "Shown after the student answers."
    }
  ]
}
```

Rules:

- **Do not change a topic `id` once students have used it.** Progress is saved against the id, so a renamed id looks like a new, unstarted topic.
- `answer` counts from 0. The first option is 0, the second is 1.
- Each quiz draws `settings.questionsPerQuiz` questions (default 10) at random from the topic's bank. Write more questions than that and retakes are less repetitive.
- For PDFs or images, put the file in `public/files/` and link to it as `files/name.pdf`.
- Site name, organisation name, default pass mark and the certificate signatory are in `settings` at the top of the file.

The sample subjects (Maths, Science, English) are placeholders written to show the format. Replace them with TLV's actual topics.

## Files

```
render.yaml            Render static site config
public/index.html      page shell
public/css/style.css   styles, including print styles for certificates
public/js/app.js       routing, quizzes, progress, certificates
public/data/content.js subjects, topics, resources, questions
```
