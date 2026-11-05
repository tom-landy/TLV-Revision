/*
 * TLV Revision content.
 *
 * This is the only file you need to edit to add subjects, topics,
 * resources and quiz questions. See README.md for the full format.
 *
 * Rules:
 *  - Every subject id and topic id must be unique and never change once
 *    students have started using it (progress is stored against the id).
 *  - "answer" is the index of the correct option, counting from 0.
 *  - "passMark" is a percentage. Falls back to settings.defaultPassMark.
 *  - Resource "type" is one of: notes, link, video, pdf.
 *    "notes" shows "body" on the page (plain text, blank line = new paragraph).
 *    The others open "url" in a new tab.
 */
window.TLV_CONTENT = {
  settings: {
    siteName: "TLV Revision",
    organisation: "TLV",
    defaultPassMark: 80,
    // Shown on certificates under the signature line.
    certificateSignatory: "TLV Teaching Team",
    // Max questions per attempt. Questions are drawn at random from the
    // topic's bank, so a bigger bank gives students fresh attempts.
    questionsPerQuiz: 10
  },

  subjects: [
    {
      id: "maths",
      title: "Maths",
      colour: "#1f6feb",
      topics: [
        {
          id: "maths-fractions-percentages",
          title: "Fractions, decimals and percentages",
          summary: "Convert between forms, find percentages of amounts and work with percentage change.",
          passMark: 80,
          resources: [
            {
              type: "notes",
              title: "Key facts",
              body: "To turn a fraction into a decimal, divide the top by the bottom. 3/8 = 3 ÷ 8 = 0.375.\n\nTo turn a decimal into a percentage, multiply by 100. 0.375 = 37.5%.\n\nTo find a percentage of an amount, turn the percentage into a decimal and multiply. 15% of 60 = 0.15 × 60 = 9.\n\nPercentage change = (change ÷ original) × 100."
            },
            { type: "link", title: "Corbettmaths videos and worksheets", url: "https://corbettmaths.com/contents/" },
            { type: "link", title: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize" }
          ],
          questions: [
            { q: "What is 3/4 as a percentage?", options: ["34%", "75%", "0.75%", "43%"], answer: 1, explanation: "3 ÷ 4 = 0.75, and 0.75 × 100 = 75%." },
            { q: "What is 0.4 as a fraction in its simplest form?", options: ["4/100", "1/4", "2/5", "4/5"], answer: 2, explanation: "0.4 = 4/10, which simplifies to 2/5." },
            { q: "What is 15% of 80?", options: ["12", "15", "8", "1.2"], answer: 0, explanation: "0.15 × 80 = 12." },
            { q: "A coat costs £50. It is reduced by 20%. What is the new price?", options: ["£30", "£40", "£45", "£10"], answer: 1, explanation: "20% of £50 is £10, so the new price is £50 − £10 = £40." },
            { q: "Which is the largest?", options: ["0.65", "2/3", "64%", "5/8"], answer: 1, explanation: "2/3 = 0.666…, 0.65, 64% = 0.64, 5/8 = 0.625. So 2/3 is largest." },
            { q: "What is 1/8 as a decimal?", options: ["0.18", "0.8", "0.125", "0.0125"], answer: 2, explanation: "1 ÷ 8 = 0.125." },
            { q: "A price goes up from £20 to £25. What is the percentage increase?", options: ["5%", "20%", "25%", "125%"], answer: 2, explanation: "Change is £5. 5 ÷ 20 = 0.25 = 25%." },
            { q: "What is 2/5 + 1/10?", options: ["3/15", "1/2", "3/10", "2/50"], answer: 1, explanation: "2/5 = 4/10. 4/10 + 1/10 = 5/10 = 1/2." },
            { q: "What multiplier increases an amount by 12%?", options: ["0.12", "1.2", "1.12", "0.88"], answer: 2, explanation: "100% + 12% = 112% = 1.12." },
            { q: "What is 35% as a fraction in its simplest form?", options: ["35/10", "7/20", "3/5", "7/10"], answer: 1, explanation: "35/100 simplifies (÷5) to 7/20." },
            { q: "What is 3/5 of 45?", options: ["27", "9", "15", "30"], answer: 0, explanation: "45 ÷ 5 = 9, then 9 × 3 = 27." },
            { q: "What multiplier decreases an amount by 30%?", options: ["0.3", "1.3", "0.7", "0.03"], answer: 2, explanation: "100% − 30% = 70% = 0.7." }
          ]
        },
        {
          id: "maths-algebra-basics",
          title: "Algebra basics",
          summary: "Simplify expressions, expand brackets, substitute values and solve linear equations.",
          resources: [
            {
              type: "notes",
              title: "Key facts",
              body: "Collect like terms: 3a + 2b + a = 4a + 2b.\n\nExpand a bracket by multiplying everything inside by the term outside: 3(x + 4) = 3x + 12.\n\nTo solve an equation, do the same thing to both sides until the letter is on its own: 2x + 5 = 17 → 2x = 12 → x = 6."
            },
            { type: "link", title: "Corbettmaths videos and worksheets", url: "https://corbettmaths.com/contents/" }
          ],
          questions: [
            { q: "Simplify 4x + 3y − x + 2y", options: ["3x + 5y", "5x + 5y", "3x + y", "8xy"], answer: 0, explanation: "4x − x = 3x and 3y + 2y = 5y." },
            { q: "Expand 5(2a − 3)", options: ["10a − 3", "10a − 15", "7a − 8", "10a + 15"], answer: 1, explanation: "5 × 2a = 10a and 5 × −3 = −15." },
            { q: "Solve 3x + 4 = 19", options: ["x = 5", "x = 7.67", "x = 15", "x = 6"], answer: 0, explanation: "3x = 15, so x = 5." },
            { q: "If a = 3 and b = −2, what is 2a + b?", options: ["8", "4", "1", "−4"], answer: 1, explanation: "2 × 3 + (−2) = 6 − 2 = 4." },
            { q: "Solve x/4 = 6", options: ["x = 1.5", "x = 10", "x = 24", "x = 2"], answer: 2, explanation: "Multiply both sides by 4: x = 24." },
            { q: "Factorise 6x + 9", options: ["3(2x + 3)", "6(x + 9)", "3(2x + 9)", "9(x + 6)"], answer: 0, explanation: "The highest common factor is 3: 3(2x + 3)." },
            { q: "Simplify a × a × a", options: ["3a", "a³", "a + 3", "3a³"], answer: 1, explanation: "a multiplied by itself three times is a³." },
            { q: "Solve 5x − 7 = 2x + 8", options: ["x = 5", "x = 1/3", "x = 3", "x = 15"], answer: 0, explanation: "5x − 2x = 8 + 7, so 3x = 15 and x = 5." },
            { q: "Expand and simplify (x + 2)(x + 3)", options: ["x² + 6", "x² + 5x + 6", "2x + 5", "x² + 6x + 5"], answer: 1, explanation: "x² + 3x + 2x + 6 = x² + 5x + 6." },
            { q: "If y = 3x² and x = 2, what is y?", options: ["12", "36", "18", "6"], answer: 0, explanation: "x² = 4, then 3 × 4 = 12. Square first, then multiply." }
          ]
        }
      ]
    },
    {
      id: "science",
      title: "Science",
      colour: "#1a7f37",
      topics: [
        {
          id: "science-cells",
          title: "Cell biology",
          summary: "Animal and plant cells, organelles and what they do.",
          resources: [
            {
              type: "notes",
              title: "Key facts",
              body: "Animal and plant cells both have a nucleus (contains genetic material), cytoplasm (where reactions happen), a cell membrane (controls what goes in and out), mitochondria (respiration) and ribosomes (make proteins).\n\nPlant cells also have a cell wall (made of cellulose, gives support), chloroplasts (photosynthesis) and a permanent vacuole (filled with cell sap).\n\nBacteria are prokaryotes. They have no nucleus. Their DNA is a single loop, and they may have small rings of DNA called plasmids."
            },
            { type: "link", title: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize" },
            { type: "link", title: "Khan Academy biology", url: "https://www.khanacademy.org/science/biology" }
          ],
          questions: [
            { q: "Which organelle is where aerobic respiration happens?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"], answer: 2, explanation: "Mitochondria release energy through aerobic respiration." },
            { q: "Which of these is found in plant cells but not animal cells?", options: ["Cell membrane", "Cell wall", "Cytoplasm", "Nucleus"], answer: 1, explanation: "Plant cells have a cellulose cell wall. Animal cells do not." },
            { q: "What is the job of ribosomes?", options: ["Make proteins", "Store water", "Photosynthesis", "Control the cell"], answer: 0, explanation: "Ribosomes are where protein synthesis happens." },
            { q: "What is the cell wall of a plant made of?", options: ["Starch", "Glucose", "Cellulose", "Protein"], answer: 2, explanation: "Plant cell walls are made of cellulose, which strengthens the cell." },
            { q: "Which structure controls what enters and leaves the cell?", options: ["Cell wall", "Vacuole", "Cell membrane", "Cytoplasm"], answer: 2, explanation: "The cell membrane is partially permeable and controls movement in and out." },
            { q: "Where does photosynthesis take place?", options: ["Mitochondria", "Chloroplasts", "Nucleus", "Vacuole"], answer: 1, explanation: "Chloroplasts contain chlorophyll, which absorbs light for photosynthesis." },
            { q: "Bacterial cells are prokaryotic. What does this mean?", options: ["They have no cell membrane", "They have no nucleus", "They have no DNA", "They have no cytoplasm"], answer: 1, explanation: "Prokaryotic cells have no nucleus. Their DNA floats in the cytoplasm." },
            { q: "What are plasmids?", options: ["Small rings of DNA in bacteria", "Plant organelles that store starch", "Proteins in the membrane", "Types of ribosome"], answer: 0, explanation: "Plasmids are small loops of DNA found in bacteria, separate from the main loop." },
            { q: "What does the nucleus contain?", options: ["Cell sap", "Chlorophyll", "Genetic material", "Cellulose"], answer: 2, explanation: "The nucleus contains genetic material (DNA) that controls the cell." },
            { q: "What fills the permanent vacuole of a plant cell?", options: ["Cytoplasm", "Cell sap", "Chlorophyll", "Air"], answer: 1, explanation: "The vacuole contains cell sap, a weak solution of sugars and salts." }
          ]
        },
        {
          id: "science-forces",
          title: "Forces and motion",
          summary: "Speed, resultant forces, weight and Newton's laws.",
          resources: [
            {
              type: "notes",
              title: "Key equations",
              body: "speed = distance ÷ time\n\nweight (N) = mass (kg) × gravitational field strength (N/kg). On Earth g ≈ 9.8 N/kg (often rounded to 10).\n\nresultant force (N) = mass (kg) × acceleration (m/s²), F = ma.\n\nIf the resultant force on an object is zero, it stays still or keeps moving at a constant speed in a straight line (Newton's first law)."
            },
            { type: "link", title: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize" }
          ],
          questions: [
            { q: "A car travels 120 m in 6 s. What is its average speed?", options: ["20 m/s", "720 m/s", "126 m/s", "0.05 m/s"], answer: 0, explanation: "speed = distance ÷ time = 120 ÷ 6 = 20 m/s." },
            { q: "What is the unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], answer: 2, explanation: "Force is measured in newtons (N)." },
            { q: "A 5 kg mass on Earth (g = 10 N/kg) has what weight?", options: ["0.5 N", "5 N", "50 N", "15 N"], answer: 2, explanation: "W = mg = 5 × 10 = 50 N." },
            { q: "Forces of 10 N right and 4 N left act on a box. What is the resultant force?", options: ["14 N right", "6 N right", "6 N left", "40 N right"], answer: 1, explanation: "Opposite directions subtract: 10 − 4 = 6 N, in the direction of the larger force." },
            { q: "A 2 kg trolley has a resultant force of 8 N. What is its acceleration?", options: ["16 m/s²", "4 m/s²", "10 m/s²", "0.25 m/s²"], answer: 1, explanation: "a = F ÷ m = 8 ÷ 2 = 4 m/s²." },
            { q: "If the resultant force on a moving object is zero, what happens?", options: ["It stops immediately", "It slows down", "It keeps moving at constant velocity", "It speeds up"], answer: 2, explanation: "Newton's first law: no resultant force means no change in velocity." },
            { q: "Which of these is a scalar quantity?", options: ["Velocity", "Force", "Displacement", "Speed"], answer: 3, explanation: "Speed has size only. The others also have a direction, so they are vectors." },
            { q: "Mass is measured in…", options: ["newtons", "kilograms", "metres", "N/kg"], answer: 1, explanation: "Mass is measured in kilograms. Weight is a force, measured in newtons." },
            { q: "Which force opposes motion when two surfaces rub together?", options: ["Weight", "Friction", "Tension", "Upthrust"], answer: 1, explanation: "Friction acts against the direction of motion between surfaces." },
            { q: "A cyclist rides at 5 m/s for 60 s. How far do they travel?", options: ["12 m", "65 m", "300 m", "30 m"], answer: 2, explanation: "distance = speed × time = 5 × 60 = 300 m." }
          ]
        }
      ]
    },
    {
      id: "english",
      title: "English",
      colour: "#8250df",
      topics: [
        {
          id: "english-language-techniques",
          title: "Language techniques",
          summary: "Spot and name the techniques writers use, and explain their effect.",
          resources: [
            {
              type: "notes",
              title: "Key terms",
              body: "Simile: compares using \"like\" or \"as\". Metaphor: says one thing is another. Personification: gives human qualities to something non-human.\n\nAlliteration: repeated sounds at the start of nearby words. Onomatopoeia: a word that sounds like what it describes.\n\nWhen you name a technique, always explain its effect on the reader. Naming it alone earns very little."
            },
            { type: "link", title: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize" }
          ],
          questions: [
            { q: "\"The classroom was a zoo.\" Which technique is this?", options: ["Simile", "Metaphor", "Alliteration", "Onomatopoeia"], answer: 1, explanation: "It says the classroom is a zoo, without \"like\" or \"as\", so it is a metaphor." },
            { q: "\"Her smile was as bright as the sun.\" Which technique is this?", options: ["Metaphor", "Personification", "Simile", "Hyperbole"], answer: 2, explanation: "It compares using \"as… as\", so it is a simile." },
            { q: "\"The wind howled through the trees.\" Which technique is this?", options: ["Personification", "Simile", "Oxymoron", "Rhetorical question"], answer: 0, explanation: "Howling is given to the wind as if it were alive, so it is personification." },
            { q: "\"Buzz\", \"crash\" and \"sizzle\" are examples of…", options: ["Alliteration", "Onomatopoeia", "Assonance", "Sibilance"], answer: 1, explanation: "These words sound like the noise they describe." },
            { q: "\"Silent seas swept softly.\" The repeated \"s\" sound is called…", options: ["Sibilance", "Onomatopoeia", "Metaphor", "Juxtaposition"], answer: 0, explanation: "Repeated \"s\" sounds are sibilance, a kind of alliteration." },
            { q: "\"I've told you a million times!\" is an example of…", options: ["Simile", "Hyperbole", "Personification", "Irony"], answer: 1, explanation: "It is deliberate exaggeration, which is hyperbole." },
            { q: "\"Deafening silence\" puts two opposite ideas together. This is…", options: ["An oxymoron", "A simile", "A pun", "A triplet"], answer: 0, explanation: "An oxymoron puts contradictory words side by side." },
            { q: "\"Don't we all deserve better?\" is an example of…", options: ["Imperative", "Rhetorical question", "Hyperbole", "Statistic"], answer: 1, explanation: "A question asked for effect, not to get an answer, is a rhetorical question." },
            { q: "What should always follow when you name a technique in an exam answer?", options: ["A second technique", "A quotation from a different text", "An explanation of its effect", "A summary of the plot"], answer: 2, explanation: "Marks come from explaining the effect on the reader, not just naming the technique." },
            { q: "\"Calm, collected and confident.\" A list of three is often called…", options: ["The rule of three", "Anaphora", "Enjambment", "Caesura"], answer: 0, explanation: "Grouping things in threes is the rule of three (or a triplet)." }
          ]
        }
      ]
    }
  ]
};
