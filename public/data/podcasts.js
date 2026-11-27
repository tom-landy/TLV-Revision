/*
 * Podcast episodes, shown in the Podcasts tab and on their topic pages.
 *
 * Upload files to public/audio/deep-dives/. Each episode lists the file names it will accept:
 * a short name (e.g. 6.3-1.m4a) or NotebookLM's own download name. Either works, .m4a or .mp3.
 * An episode only shows once one of its files is there.
 *
 * To add an episode: copy an entry, give it a new id, set topic, title, lesson, covers and files.
 */
(function () {
  function names(short, notebook) {
    return [short + ".m4a", short + ".mp3", notebook + ".m4a", notebook + ".mp3"];
  }
  window.TLV_PODCASTS = [
    {
      id: "D1", badge: "6.1", topic: "6.1", folder: "audio/deep-dives/",
      files: names("6.1-1", "From_TOWS_Matrix_to_Boardroom_Briefing"),
      title: "From TOWS matrix to boardroom briefing", lesson: "Lessons 1B, 2A and 2B",
      covers: [
        "Using PESTLE to feed external opportunities and threats into a SWOT.",
        "Building the TOWS matrix: SO, WO, ST and WT strategies.",
        "Turning the analysis into evidence-based recommendations for a board."
      ]
    },
    {
      id: "D2", badge: "6.2", topic: "6.2", folder: "audio/deep-dives/",
      files: names("6.2-1", "Why_Small_Daily_Changes_Beat_Massive_Restructures"),
      title: "Why small daily changes beat massive restructures", lesson: "Lesson 3A",
      covers: [
        "The Kaizen philosophy and standard work as the baseline.",
        "Running the PDCA cycle (Plan, Do, Check, Act) with measurable KPIs.",
        "Preventing operational bottlenecks."
      ]
    },
    {
      id: "D3", badge: "6.2", topic: "6.2", folder: "audio/deep-dives/",
      files: names("6.2-2", "How_Continuous_Improvement_Prevents_Business_Crises"),
      title: "How continuous improvement prevents business crises", lesson: "Lesson 3B",
      covers: [
        "Total Quality Management: customer focus and zero defects.",
        "Psychological safety: admitting errors without blame.",
        "The limits of small improvements during sudden structural crises."
      ]
    },
    {
      id: "D4", badge: "6.3", topic: "6.3", folder: "audio/deep-dives/",
      files: names("6.3-1", "Choosing_Between_Kotter_and_Lewin"),
      title: "Choosing between Kotter and Lewin", lesson: "Lesson 4A",
      covers: [
        "Lewin's 3 stages: unfreeze, change, refreeze.",
        "Kotter's 8 sequential steps.",
        "Which fits small changes and which fits large-scale transformation."
      ]
    },
    {
      id: "D5", badge: "6.3", topic: "6.3", folder: "audio/deep-dives/",
      files: names("6.3-2", "Diagnosing_Employee_Resistance_to_Change"),
      title: "Diagnosing employee resistance to change", lesson: "Lesson 4B",
      covers: [
        "The root fears behind staff pushback.",
        "Kotter and Schlesinger's six approaches: education, participation, facilitation, negotiation, manipulation, coercion."
      ]
    },
    {
      id: "D6", badge: "6.3", topic: "6.3", folder: "audio/deep-dives/",
      files: names("6.3-3", "McKinsey_7S_versus_ADKAR_Change_Models"),
      title: "McKinsey 7-S versus ADKAR change models", lesson: "Lesson 5A",
      covers: [
        "McKinsey 7-S: diagnosing alignment across hard and soft elements.",
        "ADKAR: each employee's journey and where they get stuck."
      ]
    },
    {
      id: "D7", badge: "6.3", topic: "6.3", folder: "audio/deep-dives/",
      files: names("6.3-4", "Nudge_Theory_and_the_Change_Curve"),
      title: "Nudge theory and the change curve", lesson: "Lesson 5B",
      covers: [
        "Supporting staff through the Kübler-Ross change curve, from denial to acceptance.",
        "Thaler and Sunstein's nudge theory: choice architecture, defaults and ethics."
      ]
    }
  ];
})();
