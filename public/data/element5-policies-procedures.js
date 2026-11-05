/* Element 5: Policies and Procedures. Based on the TLV Element 5 revision workbook. */
(function () {
  var WORKBOOK = { type: "docx", title: "Element 5 workbook (Word, answers at the back)", url: "files/element5-policies-procedures-workbook.docx" };

  window.TLV_CONTENT.subjects.push({
    id: "element-5",
    title: "Element 5: Policies and Procedures",
    colour: "#8250df",
    topics: [
      {
        id: "5.1",
        title: "5.1 Developing policies and procedures",
        summary: "Policies versus procedures, why organisations have them, how they are developed, and related law.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Policy: sets out corporate values and rules; senior managers are responsible. Written in plain language, avoids specialist acronyms, has clear headings, version controls and explains its purpose. Example: health and safety policy.\n\nProcedure: details how to carry out a specific task, used by individuals for repetitive work, with a start point and target end point. Example: fire evacuation procedure.\n\nVersion control: records when a policy was approved, who approved it and when it is next due for review.\nFormalisation: every member of the workforce completes the same task in the same way.\nWorkflow: accurate and timely completion of required tasks, monitored by managers.\n\nPurposes: help the business operate successfully, support consistent workflows, uphold equality, protect the business from being prosecuted.\n\nFor-profit organisations focus policies on maximising profit; not-for-profit on raising money to improve others' lives; philanthropic organisations on CSR.\n\nMandatory policies are required by law (e.g. health and safety for businesses with five or more employees). Non-mandatory policies (e.g. hybrid working) are not required by law.\n\nPolicy development (workbook order): identify the need, write the policy, test the procedure and hold an initial meeting, consult unions, staff and the board, issue for final approval, formally implement.\n\nPolicies should be reviewed regularly because laws change, to stay relevant and to reflect best practice.\n\nRIDDOR: Reporting of Injuries, Diseases and Dangerous Occurrences Regulations (2013), monitored by the HSE; includes reporting all work-related deaths."
          },
          WORKBOOK
        ],
        questions: [
          { q: "What is the main difference between a policy and a procedure?", options: ["A policy details how to complete a task; a procedure states the business values", "A policy sets out values and rules; a procedure details how to carry out a specific task", "Policies are written by employees; procedures are written by managers", "There is no difference between a policy and a procedure"], answer: 1, explanation: "Policy = values and rules. Procedure = how to do a task." },
          { q: "Which of the following is a characteristic of a policy?", options: ["It must identify the starting point and target end point of a task", "It should be used by individuals for repetitive work", "It must have clear headings, version controls and explain its purpose", "It replaces the need for any procedures in the workplace"], answer: 2, explanation: "A and B describe procedures." },
          { q: "Which organisation type focuses its policies and procedures on maximising profit for owners and shareholders?", options: ["Not-for-profit", "Philanthropic", "Social enterprise", "For-profit"], answer: 3, explanation: "For-profit." },
          { q: "The Equality Act 2010 protects people from discrimination based on how many protected characteristics?", options: ["Five", "Seven", "Nine", "Twelve"], answer: 2, explanation: "Nine." },
          { q: "Under health and safety law, a business must have a written health and safety policy once it employs at least how many people?", options: ["2", "5", "10", "50"], answer: 1, explanation: "Five or more employees." },
          { q: "What does RIDDOR stand for?", options: ["Reporting of Injuries, Diseases and Dangerous Occurrences Regulations", "Regulation of Illness, Disability and Dangerous Occupational Risks", "Recording of Incidents, Deaths, Diseases and Organisational Risks", "Reporting of Industrial Disasters and Dangerous Operational Results"], answer: 0, explanation: "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations." },
          { q: "True or false: policies are written in plain, understandable language and should avoid specialist acronyms.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: a procedure should identify the starting point and target end point of a task.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: non-mandatory policies must be followed by all employees by law.", options: ["True", "False"], answer: 1, explanation: "False. Non-mandatory policies are not required by law." },
          { q: "True or false: the sickness policy details the company's approach to sick pay.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: philanthropic organisations focus their policies on maximising profit.", options: ["True", "False"], answer: 1, explanation: "False. They focus on CSR." },
          { q: "True or false: the HSE monitors compliance with RIDDOR 2013, which includes reporting all work-related deaths.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: version controls record when a policy was approved, who approved it and when it is next due for review.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: a hybrid working policy is an example of a non-mandatory policy.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "Which term means 'used by individuals for repetitive tasks, detailing the order of steps'?", options: ["Policy", "Procedure", "Version control", "Workflow"], answer: 1, explanation: "Procedure." },
          { q: "Which term means 'ensures every member of the workforce completes the same task in the same way'?", options: ["Formalisation", "Workflow", "Version control", "Policy"], answer: 0, explanation: "Formalisation." },
          { q: "Which term means 'the accurate and timely completion of required tasks monitored by managers'?", options: ["Procedure", "Workflow", "Formalisation", "Cascading"], answer: 1, explanation: "Workflow." },
          { q: "Policies and procedures protect businesses from being ______.", options: ["consulted", "prosecuted", "formalised", "cascaded"], answer: 1, explanation: "Prosecuted." },
          { q: "When new policies are introduced, there should be a period of ______ with unions, staff and the board.", options: ["cascading", "consultation", "equality", "formalisation"], answer: 1, explanation: "Consultation." },
          { q: "Policies should be regularly reviewed to ensure they uphold ______ in the workplace.", options: ["equality", "mandatory", "board", "prosecuted"], answer: 0, explanation: "Equality." },
          { q: "All processes should be ______ so that every member of the workforce completes tasks in the same way.", options: ["cascaded", "formalised", "consulted", "mandatory"], answer: 1, explanation: "Formalised." },
          { q: "What is the first step in developing a new policy?", options: ["Write the policy", "Identify the need for the policy (e.g. change in legislation)", "Consult with unions, staff and the board", "Formally implement the policy"], answer: 1, explanation: "First identify why the policy is needed." },
          { q: "What is the last step in developing a new policy?", options: ["Issue the policy for final approval", "Test the procedure", "Formally implement the policy", "Write the policy"], answer: 2, explanation: "Formal implementation comes last, after final approval." },
          { q: "In the workbook's policy development order, what comes straight before issuing the policy for final approval?", options: ["Identify the need", "Consult with unions, staff and the board", "Formally implement", "Write the policy"], answer: 1, explanation: "Identify, write, test, consult, issue for approval, implement." }
        ],
        practice: [
          { q: "Give examples of what the Health and Safety at Work Act 1974 requires employers to do.", marks: 4, answer: "Suggested answers:\n- Provide training and instructions so employees can work safely.\n- Make sure facilities exist to handle equipment and chemicals safely.\n- Manage health and safety risks in the workplace.\n- Maintain a safe and healthy working environment.\n- Review and revise policies regularly." },
          { q: "Explain the difference between a policy and a procedure. Give ONE example of each.", marks: 4, answer: "Policy: sets out values and rules, e.g. health and safety policy (1 + 1).\n\nProcedure: details how to complete a specific task in order, e.g. fire evacuation procedure (1 + 1)." },
          { q: "Explain the purpose of having policies and procedures in an organisation.", marks: 3, answer: "- They enable the business to operate successfully (1).\n- They support consistent workflows (1).\n- They protect the business from being prosecuted (1)." },
          { q: "Describe how the development of policies differs between a for-profit organisation and a not-for-profit organisation.", marks: 4, answer: "- For-profit: policies focus on maximising profit for owners and shareholders (1).\n- Not-for-profit: policies focus on how to raise money to improve the lives of others, e.g. through volunteering (1).\n- Both must comply with legal requirements (1).\n\nUp to 4 marks." },
          { q: "Explain why policies and procedures need to be reviewed regularly.", marks: 3, answer: "- Legislation changes (1).\n- To ensure they stay relevant to the current business (1).\n- To ensure they reflect best practice (1)." },
          { q: "A new employee is confused about why their organisation has so many policies. Discuss the importance of policies and procedures, referring to at least THREE different purposes.", marks: 9, answer: "Band descriptors:\n- 7 to 9: detailed, well-structured discussion of 3+ purposes (consistent workflows, maintaining equality, legal compliance, protection from prosecution). Specific examples. Evaluative throughout.\n- 4 to 6: good range of points, mostly developed. Some reference to legal obligations and practical benefits.\n- 1 to 3: lists purposes with limited development or explanation." }
        ]
      },
      {
        id: "5.2",
        title: "5.2 Key Performance Indicators (KPIs)",
        summary: "Strategic, financial and operational KPIs, cascading, RAG ratings, logic models and reviewing KPIs.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Strategic KPIs measure overall success against strategic objectives (e.g. achieve market leadership in the region within 3 years, increase customer base by 7%).\nFinancial KPIs measure success in money terms (e.g. increase annual revenue by 15% over 2 years).\nOperational KPIs measure the work of managers, teams and individuals (e.g. products produced in summer months, quality control).\n\nHigh-level KPIs are set at a strategic level across the organisation (e.g. increase annual turnover). Low-level KPIs are set for an individual or team (e.g. weekly sales target of £5,000).\n\nCascading: passing KPI information down from managers until everyone who needs it has it.\nRAG rating: Red (major issue), Amber (concern), Green (on track).\nCost-effect analysis: compares the cost of an activity with how well it achieves the outcome.\nProcess flow analysis: identifies the parts of a process and puts them in order.\nLogic model: a graph of resources, actions and outcomes.\nMetrics: quantitative information used to measure progress.\n\nKPIs can be reviewed weekly, monthly, quarterly or annually. A KPI that is no longer relevant should be removed or replaced."
          },
          WORKBOOK
        ],
        questions: [
          { q: "Which type of KPI measures the organisation's overall success against its strategic objectives?", options: ["Operational KPI", "Financial KPI", "Strategic KPI", "Quantitative KPI"], answer: 2, explanation: "Strategic KPI." },
          { q: "What does 'RAG rating' stand for in the context of KPIs?", options: ["Revenue, Assets, Growth", "Red, Amber, Green: a traffic light system to identify issues", "Review, Analyse, Generate", "Report, Adjust, Goal"], answer: 1, explanation: "Red, Amber, Green." },
          { q: "Which of the following BEST describes 'cascading' in the context of KPIs?", options: ["Reducing the number of KPIs each year", "Passing information from one group to another until everyone who needs it has received it", "Setting KPIs only at board level", "Measuring KPIs using financial data only"], answer: 1, explanation: "Cascading passes information down through the organisation." },
          { q: "A 'high-level KPI' is designed to:", options: ["Set individual sales targets for team members", "Measure KPIs at a strategic level across the whole organisation, e.g. increasing annual turnover", "Report on weekly departmental outputs only", "Track the number of sick days taken by employees"], answer: 1, explanation: "High-level = strategic, organisation-wide." },
          { q: "A business uses cost-effect analysis when setting KPIs. This means it:", options: ["Records all costs in a spreadsheet", "Compares the cost of an activity with its effectiveness to meet the required outcome", "Adds all KPIs together to form one overall score", "Asks all employees to review their own performance"], answer: 1, explanation: "Cost compared with effectiveness." },
          { q: "True or false: financial KPIs measure the work of managers, teams and individuals.", options: ["True", "False"], answer: 1, explanation: "False. That describes operational KPIs." },
          { q: "True or false: KPIs can be reviewed weekly, monthly, quarterly or annually.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: a logic model shows the relationship between resources, actions and outcomes of an activity.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: low-level KPIs are designed to meet the aims and objectives of the business for an individual or team.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: a KPI should never be changed once it has been set.", options: ["True", "False"], answer: 1, explanation: "False. KPIs should be reviewed and may stop being relevant." },
          { q: "True or false: metrics refers to quantitative information that can be used to measure progress against goals.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "'Achieve market leadership in the region within 3 years' is which type of KPI?", options: ["Strategic", "Financial", "Operational"], answer: 0, explanation: "Strategic." },
          { q: "'Increase annual revenue by 15% over 2 years' is which type of KPI?", options: ["Strategic", "Financial", "Operational"], answer: 1, explanation: "Financial." },
          { q: "'Quality control of products' is which type of KPI?", options: ["Strategic", "Financial", "Operational"], answer: 2, explanation: "Operational." },
          { q: "'Increase customer base by 7%' is which type of KPI, according to the workbook?", options: ["Strategic", "Financial", "Operational"], answer: 0, explanation: "Strategic." },
          { q: "Which method identifies the components of a process and places them in order?", options: ["Cost-effect analysis", "Process flow analysis", "Logic model", "RAG rating"], answer: 1, explanation: "Process flow analysis." },
          { q: "Which method shows the stages of an activity in a graph: resources, actions and outcomes?", options: ["Logic model", "Cascading", "Process flow analysis", "RAG rating"], answer: 0, explanation: "Logic model." },
          { q: "A KPI is no longer relevant to the current business. What should happen?", options: ["Keep it unchanged", "Remove or replace it with one that reflects current goals", "Rate it green", "Cascade it to all staff"], answer: 1, explanation: "Remove or replace it." }
        ],
        practice: [
          { q: "For each KPI review result, say what it suggests and what action to take: (a) positive change in the right direction, (b) no change, objective not being met in reality, (c) KPI no longer relevant.", marks: 6, answer: "Suggested answers:\n- Positive change: the objective is being met; continue the current approach or set a more stretching target.\n- No change / not met in reality: the KPI measurement may not reflect reality; investigate the measurement method.\n- No longer relevant: remove or replace the KPI with one that reflects current business goals." },
          { q: "Explain what is meant by 'cascading' KPIs and why it is important for a business.", marks: 3, answer: "- Cascading = sharing KPI information from the top down until everyone who needs it has received it (1).\n- Important because managers at each level can share targets with their staff (1).\n- Ensures alignment across the whole organisation (1)." },
          { q: "Describe the difference between a high-level KPI and a low-level KPI. Give an example of each.", marks: 4, answer: "High-level KPI: set at strategic level, e.g. increase annual turnover (1 + 1).\n\nLow-level KPI: set for an individual or team, e.g. achieve a weekly sales target of £5,000 (1 + 1)." },
          { q: "Explain how performance monitoring processes are used to measure the achievement of KPIs.", marks: 4, answer: "- Performance monitoring is linked to HR (1).\n- Annual employee performance reviews highlight successes and training needs (1).\n- KPIs are reviewed regularly: weekly, monthly, quarterly or annually (1).\n- Outcomes are shared in formal meetings (1)." },
          { q: "Explain what a RAG rating is and how a business uses it.", marks: 3, answer: "- RAG = Red, Amber, Green traffic light system (1).\n- Lets the business identify red (major issue), amber (concern) and green (on track) areas (1).\n- Enables early action before problems escalate (1)." },
          { q: "A business wants to introduce a new system of KPIs for its sales department. Discuss how it should develop, track and report these KPIs, and explain how this will help improve performance.", marks: 9, answer: "Band descriptors:\n- 7 to 9: comprehensive discussion covering development (identifying objectives, setting strategic, financial and operational KPIs), tracking (RAG rating, cascading, metrics) and reporting (formal meetings, performance reviews). Clear links to improved performance with specific examples.\n- 4 to 6: good coverage of development and at least one tracking or reporting method. Some evaluative comment.\n- 1 to 3: basic description of KPIs with limited discussion of tracking or reporting." }
        ]
      }
    ]
  });
})();
