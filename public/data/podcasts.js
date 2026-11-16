/*
 * Topic podcasts. Upload each file to public/audio/ with exactly the name given in "file".
 * An episode only shows on the site once its file is there, so you can add them one at a time.
 * To add an episode: upload the file, then add an entry below (topic = the topic it belongs to).
 */
window.TLV_PODCASTS = [
  {
    id: "E1", file: "E1. Why_Organisational_Inertia_Guarantees_Failure.m4a", topic: "6.1",
    title: "Why organisational inertia guarantees failure", lesson: "Lesson 1A: Drivers of change",
    covers: [
      "Why organisations must keep evolving, and what inertia costs: lost market share, talent drain, compliance breaches, financial decline and reputational damage.",
      "The 7 drivers of change. Internal: human resources, business focus, KPIs, business growth. External: customer needs, competitors, globalisation.",
      "Judging how urgent a driver is (imminent, high impact, outside the organisation's control) and how drivers interact."
    ],
    scenario: "NorthBay Logistics faces a competitor's automation and high staff turnover, alongside real failures: Blockbuster, BHS and Wilko."
  },
  {
    id: "E2", file: "E2. Turn_SWOT_into_Strategy_with_TOWS.m4a", topic: "6.1",
    title: "Turn SWOT into strategy with TOWS", lesson: "Lesson 1B: SWOT analysis",
    covers: [
      "The internal/external boundary: strengths and weaknesses are internal; opportunities and threats are external.",
      "Common traps, e.g. why 'expanding online' is an opportunity, not a strength.",
      "Turning a SWOT into strategy with the TOWS matrix: SO (growth), WO (development), ST (defensive), WT (survival)."
    ],
    scenario: "Turning NorthBay's depot network and outdated IT into TOWS growth and survival plans."
  },
  {
    id: "E3", file: "E3. Avoid_Business_Blind_Spots_with_PESTLE.m4a", topic: "6.1",
    title: "Avoid business blind spots with PESTLE", lesson: "Lessons 2A and 2B: PESTLE and SWOT/PESTLE integration",
    covers: [
      "Scanning all six PESTLE factors: political, economic, social, technological, legal, environmental.",
      "Ranking factors by urgency, and telling apart those a business can partly influence from those it has to absorb (e.g. inflation, interest rates).",
      "Feeding PESTLE findings into the opportunities and threats of a SWOT."
    ],
    scenario: "NorthBay weighs post-Brexit customs rules, rising fuel costs and warehouse robots."
  },
  {
    id: "E4", file: "E4. Fixing_Operational_Bottlenecks_with_Kaizen.m4a", topic: "6.2",
    title: "Fixing operational bottlenecks with Kaizen", lesson: "Lesson 3A: Continuous improvement and Kaizen",
    covers: [
      "Continuous improvement as an everyday habit that prevents crisis-driven change.",
      "Kaizen: small, ongoing changes by all staff, built on standard work ('without standards, there can be no Kaizen').",
      "The PDCA cycle (Plan, Do, Check, Act), and why the Check stage must be measured against a KPI."
    ],
    scenario: "Fixing loading bay delays at NorthBay with timed pilots and KPI targets."
  },
  {
    id: "E5", file: "E5. Why_TQM_Needs_a_Blameless_Culture.m4a", topic: "6.2",
    title: "Why TQM needs a blameless culture", lesson: "Lesson 3B: TQM, innovation culture and CI as a change strategy",
    covers: [
      "TQM principles: customer-defined quality, total employee involvement, data-driven decisions, zero defects.",
      "An innovation culture needs psychological safety, so staff can admit errors and experiment without blame.",
      "Limitations: TQM needs long-term leadership commitment, can create paperwork, and doesn't suit sudden large crises."
    ],
    scenario: "NorthBay's proactive, data-led quality checks compared with a reactive firm losing customers."
  },
  {
    id: "E6", file: "E6. Lewin_vs_Kotter_for_Organisational_Change.m4a", topic: "6.3",
    title: "Lewin vs Kotter for organisational change", lesson: "Lesson 4A: Kotter's 8 steps and Lewin's 3 stages",
    covers: [
      "Kotter's 8 steps: create urgency, form a coalition, create a vision, communicate, empower action, short-term wins, consolidate, anchor in the culture.",
      "Lewin's 3 stages: unfreeze, change, refreeze.",
      "Why organisations slip back without Lewin's refreeze or Kotter's anchor stage, and when to choose each model."
    ],
    scenario: "Moving staff from paper registers to digital tracking, and NorthBay's warehouse automation."
  },
  {
    id: "E7", file: "E7. Overcoming_Employee_Resistance_to_Change.m4a", topic: "6.3",
    title: "Overcoming employee resistance to change", lesson: "Lesson 4B: Drivers and resistance to change",
    covers: [
      "Why people resist: fear of the unknown, threat to expertise or status, loss of control, lack of trust, poor communication, change fatigue.",
      "Individual resistance (absence, lower output) vs organisational inertia (rigid structures, culture).",
      "Kotter and Schlesinger's six approaches: education, participation, facilitation, negotiation, manipulation and co-optation, coercion."
    ],
    scenario: "An NHS trust rolling out electronic patient records, and NorthBay's depot restructure."
  },
  {
    id: "E8", file: "E8. Why_Company_Restructures_Fail_Without_Culture.m4a", topic: "6.3",
    title: "Why company restructures fail without culture", lesson: "Lesson 5A: McKinsey 7-S and ADKAR",
    covers: [
      "The McKinsey 7-S framework as a diagnostic tool.",
      "Hard elements (strategy, structure, systems) vs soft elements (shared values, style, staff, skills).",
      "Why changing the hard elements fails if the soft ones are ignored."
    ],
    scenario: "NorthBay takes over FastRoute Couriers: a sound strategy, but clashing IT systems and management cultures."
  },
  {
    id: "E9", file: "E9. Pinpoint_Employee_Change_Barriers_with_ADKAR.m4a", topic: "6.3",
    title: "Pinpoint employee change barriers with ADKAR", lesson: "Lesson 5A: McKinsey 7-S and ADKAR",
    covers: [
      "ADKAR as each person's journey: awareness, desire, knowledge, ability, reinforcement.",
      "Finding where someone is stuck, e.g. training (knowledge) is wasted if they don't yet want the change (desire).",
      "ADKAR (the individual) compared with Kotter (the management programme)."
    ],
    scenario: "Sam's story: why a trained NorthBay coordinator freezes on a new dispatch terminal, and what the manager should do."
  },
  {
    id: "E10", file: "E10. When_to_Choose_PRINCE2_or_Agile.m4a", topic: "6.4",
    title: "When to choose PRINCE2 or Agile", lesson: "Lesson 7A: PRINCE2 and Agile",
    covers: [
      "A methodology (how to deliver) vs a change model (what and why).",
      "PRINCE2: 7 principles, project board, stage gates, manage by exception, business justification. Best for large, fixed-scope projects.",
      "Agile: short iterations, customer collaboration, changing requirements. Best for software and digital tools. The cost of using no method at all."
    ],
    scenario: "A £14m council civic centre build compared with a NorthBay parcel-tracking app."
  },
  {
    id: "E11", file: "E11. When_to_Use_Scrum_or_Six_Sigma.m4a", topic: "6.4",
    title: "When to use Scrum or Six Sigma", lesson: "Lesson 7B: Scrum, Six Sigma and choosing a methodology",
    covers: [
      "Scrum: roles (product owner, Scrum master, developers), events (sprint planning, daily stand-up, review, retrospective) and backlogs.",
      "Six Sigma: near-zero defects (3.4 per million) using DMAIC: define, measure, analyse, improve, control.",
      "Choosing: Six Sigma for repeated processes, Scrum/Agile for evolving digital work, PRINCE2 for large stage-gated projects."
    ],
    scenario: "Six Sigma to stop mislabelled parcels at NorthBay, compared with Scrum for software features."
  }
];
