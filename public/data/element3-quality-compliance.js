/* Element 3: Quality and Compliance. Based on the TLV Element 3 revision workbook. */
(function () {
  var WORKBOOK = { type: "docx", title: "Element 3 workbook (Word, answers at the back)", url: "files/element3-quality-compliance-workbook.docx" };

  window.TLV_CONTENT.subjects.push({
    id: "element-3",
    title: "Element 3: Quality and Compliance",
    colour: "#bf3989",
    topics: [
      {
        id: "3.1",
        title: "3.1 Maintaining and improving quality",
        summary: "Quality assurance and improvement, Kaizen, PDSA, fishbone diagrams and complaint handling.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Quality assurance: a process or system followed to make sure the quality of products or services is maintained and meets quality standards.\n\nQuality improvement: identifying how systems and processes work and investigating what needs to change to improve quality. Every member of staff aims to continuously improve quality.\n\nFour quality assurance activities include process checklists, quality standards and audits. (Staff appraisals are not one of them.)\n\nKaizen: a Japanese concept of gradual and continuous improvement across the whole business.\n\nPDSA: Plan (changes, timescales, who is in charge, success criteria), Do (carry out the changes and gather data), Study (analyse the results), Act (make changes permanent, or adjust and reassess).\n\nFishbone (cause and effect) diagram: 1 identify the problem, 2 draw it as a horizontal backbone, 3 add causes as bones, 4 analyse and investigate further.\n\nCustomer satisfaction: how far products or services meet customer expectations.\n\nComplaint handling (workbook order): specific point of contact; listen calmly and thank the customer; make sure they understand next steps and timeframes; obtain all facts and record them; do not admit liability unless there is an obvious mistake; find out how they want it resolved; record the complaint and resolution; follow up."
          },
          WORKBOOK
        ],
        cards: [
          ["Quality assurance", "A process or system to make sure quality is maintained and meets standards."],
          ["Quality improvement", "Every member of staff aims to continuously improve quality."],
          ["Kaizen", "A Japanese concept of gradual and continuous improvement."],
          ["PDSA", "Plan, Do, Study, Act: a cycle for improving a specific process."],
          ["Fishbone diagram", "A cause and effect diagram used to find what is causing a problem."],
          ["Process checklist", "A series of steps that makes a task consistent whoever completes it."],
          ["Customer satisfaction", "How much products or services meet customer expectations."]
        ],
        questions: [
          { type: "order", q: "Put the PDSA cycle in order.", items: ["Plan", "Do", "Study", "Act"], explanation: "" },
          { type: "order", q: "Put the steps of a fishbone (cause and effect) analysis in order.", items: ["Identify the problem", "Draw the problem as a horizontal backbone", "Add the causes as bones", "Analyse and investigate the causes"], explanation: "" },
          { type: "match", q: "Match each quality term to its meaning.", pairs: [["Quality assurance", "A system to make sure quality is maintained and meets standards"], ["Quality improvement", "Investigating what needs to change to improve quality"], ["Kaizen", "Gradual and continuous improvement across the business"], ["Process checklist", "Steps that make a task consistent whoever does it"], ["Fishbone diagram", "Visual cause and effect analysis of a problem"], ["Customer satisfaction", "How far products or services meet customer expectations"]], explanation: "" },
          { type: "type", q: "What is the Japanese name for gradual and continuous improvement?", accept: ["kaizen"], explanation: "Kaizen." },
          { q: "Quality assurance is best described as:", options: ["A process where every member of staff aims to continuously improve quality", "A process or system followed to ensure the quality of services or products is being maintained and meets quality standards", "A Japanese philosophy of gradual and continuous improvement", "A method of measuring customer complaints"], answer: 1, explanation: "Assurance maintains quality. Option A describes quality improvement; C is Kaizen." },
          { q: "Which of the following is NOT one of the four quality assurance activities a business can carry out?", options: ["Process checklists", "Quality standards", "Staff appraisals", "Audits"], answer: 2, explanation: "Staff appraisals review people, not product or service quality." },
          { q: "Kaizen is best described as:", options: ["A one-off quality check carried out by external auditors", "A Japanese concept that focuses on gradual and continuous improvement", "A method of handling customer complaints", "A government regulation for quality in manufacturing"], answer: 1, explanation: "Kaizen means gradual, continuous improvement." },
          { q: "In the PDSA cycle, what does the 'S' stand for?", options: ["Standards", "Strategy", "Study", "Systems"], answer: 2, explanation: "Plan, Do, Study, Act." },
          { q: "______ is a way of identifying the function of systems and processes used within an organisation and investigating what needs to change in order to improve quality.", options: ["Quality assurance", "Quality improvement", "Customer satisfaction", "Kaizen"], answer: 1, explanation: "Quality improvement." },
          { q: "______ are a series of steps that a business follows to complete a task, making processes consistent no matter who completes them.", options: ["Fishbone diagrams", "Process checklists", "PDSA cycles", "Quality standards"], answer: 1, explanation: "Process checklists." },
          { q: "A visual representation used in cause and effect analysis to identify what is causing a problem is called a ______ diagram.", options: ["PDSA", "fishbone", "Kaizen", "flow"], answer: 1, explanation: "A fishbone (cause and effect) diagram." },
          { q: "______ is a measure of how much an organisation's products or services meet the expectations of its customers.", options: ["Quality assurance", "Customer satisfaction", "Process checklists", "PDSA"], answer: 1, explanation: "Customer satisfaction." },
          { q: "Which PDSA stage analyses the results of changes using the data gathered in the previous stage?", options: ["Plan", "Do", "Study", "Act"], answer: 2, explanation: "Study analyses data from the Do stage." },
          { q: "In the PDSA cycle, at which stage are changes made permanent, or adjusted and reassessed?", options: ["Plan", "Do", "Study", "Act"], answer: 3, explanation: "Act." },
          { q: "In the workbook's complaint-handling procedure, what is the first stage?", options: ["Follow up with the customer", "Have a specific person as point of contact for complaints", "Record the complaint and the resolution", "Find out how the customer wants the issue resolved"], answer: 1, explanation: "Have a named point of contact first." },
          { q: "In the complaint-handling procedure, what is the last stage?", options: ["Record the complaint and the resolution", "Follow up with the customer", "Listen carefully and calmly", "Obtain all facts"], answer: 1, explanation: "Follow up with the customer comes last." },
          { q: "When handling a complaint, staff should:", options: ["Always admit liability straight away", "Not admit liability unless there has been an obvious mistake", "Avoid recording the complaint", "Ask the customer to complain in writing only"], answer: 1, explanation: "Don't admit liability unless there's an obvious mistake." },
          { q: "How is the quality budget set in the public sector?", options: ["By the board based on last year's profit", "By government; overspending is carried by the taxpayer", "By customers", "By external auditors"], answer: 1, explanation: "Public sector budgets are set by government. Private sector budgets are set by the board." }
        ],
        practice: [
          { q: "Compare how quality maintenance differs between the public and private sectors in terms of budget, process and accountability.", marks: 6, answer: "Budget. Public: set by government, must stick to the budget given, overspending carried by the taxpayer. Private: set by the board based on the previous year's performance; departments justify requests on profit and costs.\n\nProcess. Public: must conform to standards agreed by government or civil service. Private: can develop its own quality processes to meet specific needs.\n\nAccountability. Public: sector managers take responsibility for their areas; a new government could change accountability. Private: senior managers take responsibility, individuals take responsibility for their part, and errors affect profits." },
          { q: "Explain the difference between quality assurance and quality improvement.", marks: 2, answer: "Quality assurance: a process or system followed to ensure the quality of services or products is maintained and meets quality standards (i.e. does not deteriorate).\n\nQuality improvement: a process where every member of staff aims to continuously improve quality to enhance customer satisfaction." },
          { q: "Describe three reasons why an organisation would want to improve the quality of its products or services.", marks: 3, answer: "Any three, 1 mark each: stay competitive as new competitors appear / customers choose goods on price, quality and value for money / fewer complaints and fewer faulty goods / reputation management / reduced costs from complaints and replacements." },
          { q: "Describe the four steps involved in a cause and effect (fishbone) analysis.", marks: 3, answer: "1 mark each, up to 3:\n- Identify the problem and the stages that might be causing it.\n- Present the problem as a horizontal line (backbone).\n- Add the things causing the problem as 'bones'.\n- Analyse the diagram and investigate causes further." },
          { q: "A food manufacturing company has received a significant increase in customer complaints about product quality. Analyse two process improvement tools the business could use to address this issue, and evaluate which would be most effective.", marks: 6, answer: "Kaizen: whole-business philosophy, gradual continuous improvement, workers implement ideas, low cost.\n\nPDSA: focuses on the quality and efficiency of a specific process, four stages, more structured.\n\nAward 2 to 3 marks per tool (identify, explain, apply). Evaluation should say which is most effective in this context, with justification." }
        ]
      },
      {
        id: "3.2",
        title: "3.2 Quality standards",
        summary: "BSI, ISO, EFQM, the Kitemark, Investors in People and the benefits of accreditation.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "BSI (British Standards Institution): helps improve the quality and safety of products, services and systems in the UK; known for its Kitemark.\nBSI Kitemark: a symbol on products tested and certified by the BSI.\nISO (International Organization for Standardization): brings together international experts to develop voluntary international standards.\nEFQM (European Foundation for Quality Management): improves competitiveness through quality; businesses apply, complete a business matrix and are visited by assessors.\nInvestors in People: a people-based accreditation showing an organisation leads, supports and develops its people well.\nQuality standards: standards for processes and procedures set internationally or by sector experts.\n\nBenefits of accreditation: brand awareness (can publish it in marketing), helps win tenders, builds trust with customers and stakeholders.\n\nMaintaining accreditation: internal and external audits, process maps (how a process flows from input to output), accurate documentation, and reviewing costs against the benefits."
          },
          WORKBOOK
        ],
        cards: [
          ["BSI", "British Standards Institution: improves quality and safety of products, services and systems in the UK."],
          ["Kitemark", "A symbol on products tested and certified by the BSI."],
          ["ISO", "International Organization for Standardization: develops voluntary international standards."],
          ["EFQM", "European Foundation for Quality Management: apply, complete a matrix, assessors visit."],
          ["Investors in People", "A people-based accreditation for how well an organisation leads, supports and develops people."],
          ["Benefits of accreditation", "Brand awareness, help with tenders, trust with customers."],
          ["Process map", "Shows how a process flows from input to output, with decisions at each step."],
          ["Tender", "A formal bid to supply goods or do a job; accreditation helps win them."]
        ],
        questions: [
          { type: "match", q: "Match each organisation or award to its description.", pairs: [["BSI", "Improves quality and safety in the UK; known for its Kitemark"], ["ISO", "International experts developing voluntary international standards"], ["EFQM", "Apply, complete a business matrix, visit from assessors"], ["BSI Kitemark", "Symbol on products tested and certified by the BSI"], ["Investors in People", "People-based accreditation for leading and developing staff"]], explanation: "" },
          { type: "multi", q: "Select all the benefits of quality accreditation.", options: ["Increased brand awareness", "Helps win tenders", "Builds trust with customers", "No more internal audits needed", "Exempt from inspections"], answers: [0, 1, 2], explanation: "" },
          { type: "type", q: "Write out what BSI stands for.", accept: ["british standards institution"], explanation: "British Standards Institution." },
          { q: "What does BSI stand for?", options: ["Business Standards Institute", "British Standards Institution", "British Safety Inspection", "Bureau of Standards and Inspections"], answer: 1, explanation: "British Standards Institution." },
          { q: "What does EFQM stand for?", options: ["European Foundation for Quality Management", "External Foundation for Quality Monitoring", "European Framework for Quality Measures", "Established Foundation for Quality Methods"], answer: 0, explanation: "European Foundation for Quality Management." },
          { q: "Which of the following is a benefit of a business obtaining quality accreditation?", options: ["The business no longer needs to carry out internal audits", "The business develops trust with customers and stakeholders", "The business is exempt from inspections", "The business can set its own quality standards"], answer: 1, explanation: "Accreditation builds trust. Audits and inspections still happen." },
          { q: "Which organisation helps improve the quality and safety of products, services and systems in the UK and is known for its Kitemark?", options: ["ISO", "BSI", "EFQM", "Investors in People"], answer: 1, explanation: "BSI." },
          { q: "Which organisation brings together international experts to develop voluntary international standards?", options: ["ISO", "BSI", "EFQM", "HSE"], answer: 0, explanation: "ISO." },
          { q: "Which organisation's accreditation involves applying, completing a business matrix and a visit from assessors, to improve European competitiveness?", options: ["EFQM", "BSI", "ISO", "Investors in People"], answer: 0, explanation: "EFQM." },
          { q: "What is the BSI Kitemark?", options: ["An international management standard", "A symbol shown on products tested and certified by the BSI", "A people-based accreditation", "A type of audit"], answer: 1, explanation: "A symbol on BSI-certified products." },
          { q: "Which is a people-based accreditation showing an organisation leads, supports and develops its people well?", options: ["Kitemark", "ISO 9001", "Investors in People", "EFQM"], answer: 2, explanation: "Investors in People." },
          { q: "What does a process map show?", options: ["Where the business's sites are", "How a process flows from input through stages to output", "Staff salaries", "The organisation chart"], answer: 1, explanation: "Process maps show the flow from input to output and the decisions at each step." }
        ],
        practice: [
          { q: "Explain each benefit of quality accreditation: increased brand awareness, assisting with tender opportunities, developing trust with customers.", marks: 3, answer: "- Increased brand awareness: the brand is known, the business has been inspected or certified, and it can publish the accreditation on marketing materials.\n- Assisting with tender opportunities: proof of accreditation helps when submitting tenders to supply goods or perform a job.\n- Developing trust with customers: builds trust with customers, potential employees and stakeholders; confidence in the quality of goods or services." },
          { q: "Explain the four responsibilities for maintaining a quality accreditation: audits, process maps, accurate documentation and costs.", marks: 4, answer: "- Internal/external audits: look at all areas covered by the accreditation and identify issues since the last audit.\n- Process maps: show how a process flows from input through stages to output, with decisions at each step, so improvements can be made.\n- Accurate documentation: clearly explains processes and records adjustments; part of the accreditation process and must be maintained.\n- Costs: must be reviewed to make sure they are justified by the benefits gained." },
          { q: "Explain the difference between the BSI and the EFQM.", marks: 2, answer: "BSI: sets specific standards a business strives to achieve to gain the Kitemark; focuses on the safety and quality of products, services and systems.\n\nEFQM: a framework to help a business improve performance and manage change; businesses apply, complete a matrix and receive a visit from assessors." },
          { q: "Describe three benefits to an organisation of applying for a people-based accreditation such as Investors in People.", marks: 3, answer: "Any three, 1 mark each: better understanding of how well the organisation leads, supports and develops people / attracts better candidates / increased loyalty from staff / reduced staff turnover (keeps committed, knowledgeable employees)." },
          { q: "A small manufacturing business is considering applying for ISO accreditation for the first time. Evaluate the potential benefits and drawbacks of doing this.", marks: 4, suggested: true, answer: "Benefits: builds customer trust; helps win tenders where buyers require ISO; brand awareness through using the logo; more consistent processes and fewer faults.\n\nDrawbacks: cost of assessment, audits and staff time, which matters for a small business; lots of documentation to maintain; ongoing audits to keep it.\n\nJudgement: worth it if customers or tenders demand it and the costs are outweighed by new contracts. Marks for both sides and a conclusion." }
        ]
      },
      {
        id: "3.3",
        title: "3.3 Regulatory bodies and inspections",
        summary: "Regulators, inspections, compliance, and prohibition, closure and suspension notices.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "A regulatory body develops and maintains standards in a specific sector and makes sure they are applied consistently. Regulators are appointed by government. Examples: Ofsted (education), Care Quality Commission (care), Financial Conduct Authority (finance), HSE (health and safety).\n\nInspection: compares the business's activities with the regulator's standards. Inspections can be announced or unannounced. Businesses are given time to fix issues before a follow-up.\n\nCompliance: meeting the standards and requirements set by the regulator. It can enhance reputation. Failure to comply can lead to criminal proceedings, fines or being unable to trade.\n\nPowers:\nProhibition notice: serious risk of personal injury; must stop activities until the risk is investigated.\nClosure notice: close immediately for the stated period, usually 48 hours at first, before a magistrates' court can consider longer.\nSuspension: prevented from carrying out business activities; cannot offer services or products.\n\nPreparing for inspection: appoint a team to lead preparation; gather documents and evidence; choose who will host the inspector; support the inspector while minimising disruption."
          },
          WORKBOOK
        ],
        cards: [
          ["Regulatory body", "Develops and maintains standards in a sector and makes sure they are applied."],
          ["Inspection", "Compares a business's activities with the regulator's standards; can be unannounced."],
          ["Compliance", "Meeting the standards and requirements set by the regulator."],
          ["Prohibition notice", "Serious risk of injury: stop the activity until the risk is investigated."],
          ["Closure notice", "Close immediately for the stated period, usually 48 hours at first."],
          ["Suspension", "The business or individual cannot carry out business activities."],
          ["Ofsted", "Regulator for education."],
          ["Care Quality Commission (CQC)", "Regulator for health and social care."],
          ["Preparing for inspection", "Appoint a team, gather documents, choose a host, support the inspector with minimal disruption."]
        ],
        questions: [
          { type: "match", q: "Match each regulator to its sector.", pairs: [["Ofsted", "Education"], ["Care Quality Commission", "Health and social care"], ["Financial Conduct Authority", "Financial services"], ["Health and Safety Executive", "Workplace health and safety"]], explanation: "" },
          { type: "match", q: "Match each term to its meaning.", pairs: [["Prohibition notice", "Stop the risky activity until it is investigated"], ["Closure notice", "Close immediately, usually for 48 hours at first"], ["Suspension", "Prevented from offering services or products"], ["Inspection", "Tells the regulator whether obligations are being met"], ["Compliance", "Meeting the regulator's standards and requirements"]], explanation: "" },
          { type: "type", q: "How many hours does a closure notice usually last at first?", accept: ["48"], explanation: "Usually 48 hours, before a magistrates' court can consider longer.", placeholder: "Number of hours" },
          { q: "What is the purpose of a regulatory body?", options: ["To set the prices that businesses can charge", "To develop and maintain standards in a specific sector and ensure they are consistently applied", "To manage the recruitment of staff in public sector organisations", "To provide financial support to struggling businesses"], answer: 1, explanation: "Regulators set and enforce sector standards." },
          { q: "What is a prohibition notice?", options: ["A notice issued by the government to increase taxes", "A notice issued by inspectors requiring a business to stop its activities until a risk is investigated", "A notice given to employees about workplace rules", "A document sent to customers about a product recall"], answer: 1, explanation: "Stop activities until the risk is investigated." },
          { q: "How long does a typical closure notice last before a magistrates' court can consider a longer period?", options: ["24 hours", "48 hours", "72 hours", "One week"], answer: 1, explanation: "Usually 48 hours." },
          { q: "Which of the following is an example of a regulatory body for education?", options: ["The Care Quality Commission", "The Financial Conduct Authority", "Ofsted", "The Health and Safety Executive"], answer: 2, explanation: "Ofsted regulates education." },
          { q: "A ______ notice requires the business to stop its activities until a serious risk is investigated fully.", options: ["closure", "prohibition", "suspension", "compliance"], answer: 1, explanation: "Prohibition notice." },
          { q: "A ______ notice requires the business to close with immediate effect for the period of time stated in the notice.", options: ["prohibition", "closure", "inspection", "compliance"], answer: 1, explanation: "Closure notice." },
          { q: "A regulator may have the power to ______ a business or individual from carrying out business activities.", options: ["suspend", "inspect", "comply", "close"], answer: 0, explanation: "Suspend." },
          { q: "The purpose of an ______ is to compare the activities of a business with the standards set by the regulatory body.", options: ["audit committee", "inspection", "appraisal", "AGM"], answer: 1, explanation: "Inspection." },
          { q: "Which term means 'the process of meeting the standards and requirements set by the regulatory authority'?", options: ["Inspection", "Compliance", "Suspension", "Prohibition"], answer: 1, explanation: "Compliance." },
          { q: "What does an inspection provide the regulator with?", options: ["Payment of fines", "Information on whether the business is meeting its obligations", "A new set of standards", "A closure notice"], answer: 1, explanation: "Inspections tell the regulator whether obligations are being met." },
          { q: "True or false: regulatory bodies are appointed by governments to set standards.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: inspections are always pre-announced so businesses can prepare.", options: ["True", "False"], answer: 1, explanation: "False. Inspections can be unannounced." },
          { q: "True or false: failure to comply with a regulatory body can result in criminal proceedings.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: after an inspection, businesses are given time to correct issues before a follow-up.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: compliance with regulatory authorities can enhance a business's reputation.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: a prohibition notice and a closure notice are the same thing.", options: ["True", "False"], answer: 1, explanation: "False. Prohibition stops a risky activity; closure shuts the business for a set period." }
        ],
        practice: [
          { q: "List four actions a business should take to prepare for an inspection.", marks: 4, answer: "- Appoint a team to oversee and lead the whole process of preparation.\n- Gather or create required documents and any additional evidence.\n- Select who will host the inspector(s).\n- Support the inspector in carrying out the necessary checks while minimising disruption to day-to-day running." },
          { q: "Explain why it is important for a business to comply with regulatory requirements.", marks: 2, answer: "Failure to comply can result in criminal proceedings, fines, or not being able to trade. This leads to loss of confidence and trust from stakeholders, loss of reputation (which takes a long time to recover), and potentially the business closing." },
          { q: "Describe the three powers a regulatory authority has if a business does not comply with required standards.", marks: 3, answer: "1 mark each:\n- Prohibition notice: issued when actions present a serious risk of personal injury; the business must stop activities until the risk is investigated.\n- Closure notice: requires immediate closure, usually for 48 hours.\n- Suspension: the business or individual is prevented from carrying out business activities and cannot offer services or products." },
          { q: "Explain how often inspections take place and what factors influence the frequency.", marks: 2, suggested: true, answer: "There is no single fixed frequency: it is set by each regulator and can range from every few months to every few years, and some inspections are unannounced (1).\n\nFactors: the level of risk in the sector, the result of the last inspection (poor results lead to sooner follow-ups), complaints or incidents reported, and changes such as new premises or expansion (1)." },
          { q: "A sandwich delivery business has recently expanded and taken over new premises. It knows it will be inspected soon but is unsure whether the inspection will be announced or unannounced. Analyse how the business should prepare.", marks: 6, answer: "Appoint a team to lead preparation; gather compliance documentation; select who will host; support the inspector while minimising disruption.\n\nFor unannounced: make sure documentation is always up to date, internal audits are carried out regularly, and compliance training is ongoing.\n\nAfter: review the report findings, plan implementation of recommendations, carry out an internal review.\n\nAward marks for a structured, applied response." }
        ]
      }
    ]
  });
})();
