# TLV Revision

A static revision site for TLV students on the City & Guilds T Level in Management and Administration: key points per topic, quizzes, written exam practice with mark schemes, progress tracking and printable certificates.

Elements 1 to 5 are based on the TLV revision workbooks (the original Word files are in `public/files/` and linked from each topic). Element 6 (Project and Change Management) was written for the site from the C&G Core textbook chapter 6, with exam practice built from the Paper 2 past-paper questions (8715-032, Summer 2023, Autumn 2023, Summer 2024).

No build step, no server, no database. Plain HTML, CSS and JavaScript in `public/`.

## What students get

- **Topics**: 34 sections across Elements 1 to 6, each with key points (and, for Elements 1 to 5, a link to the workbook).
- **Quizzes**: 10 questions per attempt, mixing multiple choice with match-up, put in order, sort into groups, select all that apply, and type the answer. Nothing is marked until the end, then every question is reviewed. Multi-part questions get partial credit.
- **Flashcards** for every topic (228 cards): turn over, mark "Got it" or "Not yet"; missed cards come back round.
- **Element tests**: 20 mixed questions across a whole Element, with weak topics flagged.
- **Practise my mistakes**: questions answered wrongly in any quiz or test come back until they're answered right.
- **Exam practice**: the workbook's short-answer and extended questions. Students write an answer, open the mark scheme and give themselves a mark. Saved in the browser. Does not count towards certificates.
- **Progress**: attempts, best and last score per topic, written questions self-marked, overall stats.
- **Certificates**: one per topic when they reach the pass mark, plus an Element certificate when every topic in an Element is passed. Prints on one A4 landscape page, or saves as PDF from the print dialog.
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

Content is in `public/data/`, one file per Element (`element1-business-context.js` and so on). Site name, pass mark and certificate signatory are in `public/data/settings.js`. Edit, push, and Render redeploys.

```js
{
  id: "1.1",                      // unique, never change once live
  title: "1.1 Types of organisation",
  summary: "One line shown on the topic card.",
  passMark: 80,                   // optional, % needed to pass
  resources: [
    { type: "notes", title: "Key points", body: "Paragraph one.\n\nParagraph two." },
    { type: "link",  title: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize" },
    { type: "docx",  title: "Workbook", url: "files/element1-business-context-workbook.docx" }
  ],
  cards: [                        // flashcards: [front, back]
    ["Public sector", "Owned and funded by the government..."]
  ],
  questions: [                    // auto-marked quiz
    {
      q: "Which of the following is an example of a public sector organisation?",
      options: ["Tesco", "NHS", "Oxfam", "Barclays Bank"],
      answer: 1,                  // index of the correct option, counting from 0
      explanation: "Shown in the review at the end."
    },
    { q: "True or false: ...", options: ["True", "False"], answer: 0, explanation: "..." },
    { type: "multi", q: "Select all...", options: ["A", "B", "C", "D"], answers: [0, 2] },
    { type: "type", q: "What does GDP stand for?", accept: ["gross domestic product"] },
    { type: "match", q: "Match each...", pairs: [["Term", "Its description"], ["Term 2", "Description 2"], ["Term 3", "Description 3"]] },
    { type: "order", q: "Put these in order.", items: ["First", "Second", "Third"] },
    { type: "sort", q: "Fixed or variable?", categories: ["Fixed", "Variable"], items: [["Rent", 0], ["Raw materials", 1]] }
  ],
  practice: [                     // written exam practice, self-marked
    {
      q: "State two features of a voluntary sector organisation.",
      marks: 2,
      answer: "Any two from:\n- not-for-profit\n- surplus reinvested",
      suggested: true             // optional: shows "Suggested answer, not from the workbook"
    }
  ]
}
```

Rules:

- **Do not change a topic `id` once students have used it.** Progress is saved against the id.
- **Do not reorder `practice` items once live.** Saved written answers are matched by position. To be safe, give an item its own `id`.
- `answer` and `answers` count from 0. The first option is 0.
- Question wording must be unique within a topic: the mistakes list finds questions by their text. Editing a question's wording drops it from students' mistakes lists, which is harmless.
- Typed answers ignore capitals, £, commas, % and apostrophes, and accept a number followed by a unit ("48 hours"). List every acceptable wording in `accept`; the first is shown as the correct answer.
- Each quiz includes up to 4 non-multiple-choice questions, so topics with many of them still get a mix.
- Options are shuffled each attempt, except two-option questions (True/False) and any question with `shuffle: false`.
- Mark schemes: a blank line starts a new paragraph; lines starting `- ` become a bullet list.
- Each quiz draws up to `questionsPerQuiz` questions (default 10) at random.
- Put PDFs or other files in `public/files/` and link to them as `files/name.pdf`.

## How the workbooks were converted

- Multiple choice, fill in the blank, match-up, true/false, ordering, labelling and classification exercises became auto-marked quiz questions. Fill-in blanks use the word bank as options where there was one.
- Short-answer and extended questions became written exam practice with the workbook's mark scheme.
- 37 written questions had no answer in the workbook. They have a suggested answer marked `suggested: true`, shown to students as "Suggested answer. Not from the original workbook." Staff should check these.
- Open table exercises that had no single right answer became written practice items.

### Element 6

- Notes, quiz questions and flashcards are written in our own words from the textbook. The textbook PDF itself is not on the site: it is a licensed copy.
- Exam practice includes the 16 Paper 2 past-paper questions on project and change management (one, on ADKAR, sits under Policies and Procedures in the workbook). Each is labelled with its exam series. Mark schemes are condensed from the answers booklet.
- The textbook spells PERT as "Program Evaluation and Review Technique"; the Summer 2023 paper says "Project Evaluation Review Technique". The site mentions both.

### Things staff should check

- **Company size thresholds (1.2).** The workbook uses the old Companies Act figures (small: £10.2m turnover). These rose from 6 April 2025 (micro £1m / £500k, small £15m / £7.5m, medium £54m / £27m). The quiz keeps the workbook figures and notes the change.
- **Contract of employment timing (2.1).** The workbook says within two months. Since April 2020 the written statement of main terms is due on or before day one. The quiz keeps the workbook answer and notes the change.
- **Management styles match-up (2.5).** The workbook answer key pairs directive with "all decisions made by the leader" and autocratic with "sets objectives and allocates tasks". That looks swapped, since the same workbook says directive is the military style. The quiz uses directive = sets objectives and allocates tasks, autocratic = all decisions by the leader.
- **Cash flow forecast (4.5).** The workbook's model answer has wrong opening balances from February (it shows £680 instead of £3,620). The site uses corrected figures: closing balances £3,620, £5,470, £7,470, £7,010, £9,910.
- **Health and safety policy (5.1).** The workbook says "more than five employees". The legal threshold is five or more. The quiz question was reworded to "at least five".
- **Shareholders (1.8).** The workbook classes shareholders as external stakeholders, which some textbooks don't. The classification quiz leaves shareholders out.

## Files

```
render.yaml            Render static site config
public/index.html      page shell
public/css/style.css   styles, including print styles for certificates
public/js/app.js       routing, quizzes, progress, certificates
public/data/settings.js site settings
public/data/element*.js topics, key points, flashcards, quiz and written questions, one file per Element
public/files/          the original Element workbooks (Word)
```
