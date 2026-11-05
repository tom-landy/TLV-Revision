/* Element 2: People. Based on the TLV Element 2 revision workbook. */
(function () {
  var WORKBOOK = { type: "docx", title: "Element 2 workbook (Word, answers at the back)", url: "files/element2-people-workbook.docx" };

  window.TLV_CONTENT.subjects.push({
    id: "element-2",
    title: "Element 2: People",
    colour: "#1a7f37",
    topics: [
      {
        id: "2.1",
        title: "2.1 Employee lifecycle legislation",
        summary: "Equality Act, Employment Rights Act, GDPR, Working Time Regulations, pensions, duty of care and disciplinary action.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Legislation is passed by parliament and is the law; breaking it can lead to prosecution. Regulations are linked to laws and help people apply them.\n\nEquality Act 2010: must not discriminate on the basis of nine protected characteristics (age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation).\nEmployment Rights Act 1996: the workbook says a contract of employment must be issued within two months. Note: since April 2020, employees must get a written statement of their main terms on or before their first day. Check which your exam expects.\nGDPR 2018: controls how personal data is stored and used.\nHealth and Safety at Work Act 1974: workplaces must be safe and healthy for everyone, including visitors.\nWorking Time Regulations 1998: a maximum of 48 hours a week, with some exceptions.\nPensions Act 2008: employers must have a workplace pension scheme and contribute to it.\nMaternity and Parental Leave Regulations 1999: parents can take unpaid leave to care for children up to their 18th birthday.\n\nDuty of care: employers are legally and morally obliged to protect anyone associated with the business from harm.\n\nRedundancy: when a role is no longer needed. Employees with two years' service or more are entitled to a payment.\n\nDisciplinary order in the workbook: verbal warning, written warning, retraining, dismissal as a last resort."
          },
          WORKBOOK
        ],
        questions: [
          { q: "What is the key difference between legislation and regulations?", options: ["Legislation is a set of guidelines; regulations are laws passed by parliament", "Legislation is passed by parliament and known as the law; regulations assist individuals to apply the law", "Regulations are more serious than legislation", "There is no difference between legislation and regulations"], answer: 1, explanation: "Legislation is the law. Regulations help people apply it." },
          { q: "Under the Working Time Regulations 1998, the maximum hours an individual can work per week is:", options: ["35 hours", "40 hours", "48 hours", "60 hours"], answer: 2, explanation: "48 hours a week, with some exceptions." },
          { q: "The Equality Act 2010 protects individuals against discrimination on the basis of how many protected characteristics?", options: ["Six", "Seven", "Eight", "Nine"], answer: 3, explanation: "Nine protected characteristics." },
          { q: "According to the workbook, under the Employment Rights Act 1996 a contract of employment must be issued within how many months of starting a new job?", options: ["One month", "Two months", "Three months", "Six months"], answer: 1, explanation: "The workbook answer is two months. Since April 2020 the law requires a written statement of main terms on or before day one." },
          { q: "GDPR stands for:", options: ["General Data Privacy Regulation", "Government Data Protection Rules", "General Data Protection Regulation", "Global Data Processing Requirements"], answer: 2, explanation: "General Data Protection Regulation." },
          { q: "Every organisation that employs individuals is obliged to implement ______ and follow good practice in relation to wellbeing and welfare.", options: ["duty of care", "redundancy", "hygiene", "maternity"], answer: 0, explanation: "Duty of care means protecting people from harm." },
          { q: "Under the Pensions Act 2008, organisations must have a workplace ______ scheme to which the employer contributes on behalf of the employee.", options: ["maternity", "pension", "disciplinary", "redundancy"], answer: 1, explanation: "Workplace pension scheme." },
          { q: "When a role is no longer needed, an employee might be made ______. If they have worked for two years or more, they are entitled to a payment.", options: ["disciplinary", "redundant", "behavioural", "hygiene"], answer: 1, explanation: "Redundancy." },
          { q: "If an employee's performance or behaviour is not up to standard, the employer may take ______ action.", options: ["pension", "maternity", "disciplinary", "redundancy"], answer: 2, explanation: "Disciplinary action." },
          { q: "Which law limits working hours to 48 per week, with some exceptions?", options: ["Employment Rights Act 1996", "Working Time Regulations 1998", "Pensions Act 2008", "Equality Act 2010"], answer: 1, explanation: "Working Time Regulations 1998." },
          { q: "Which law requires organisations to have a workplace pension scheme?", options: ["Pensions Act 2008", "GDPR 2018", "Health and Safety at Work Act 1974", "Employment Rights Act 1996"], answer: 0, explanation: "Pensions Act 2008." },
          { q: "Which law controls how personal data of individuals is stored and used?", options: ["Equality Act 2010", "GDPR 2018", "Working Time Regulations 1998", "Maternity and Parental Leave Regulations 1999"], answer: 1, explanation: "GDPR." },
          { q: "Which law says places of work must be safe and healthy for everyone, including employees and visitors?", options: ["Health and Safety at Work Act 1974", "Employment Rights Act 1996", "Pensions Act 2008", "GDPR 2018"], answer: 0, explanation: "Health and Safety at Work Act 1974." },
          { q: "Which regulations let parents take unpaid leave to care for children up to the child's 18th birthday?", options: ["Working Time Regulations 1998", "Maternity and Parental Leave Regulations 1999", "Equality Act 2010", "Pensions Act 2008"], answer: 1, explanation: "Maternity and Parental Leave Regulations 1999." },
          { q: "What is the first step in the disciplinary process?", options: ["Written warning", "Retraining", "Verbal warning", "Dismissal"], answer: 2, explanation: "A verbal (first) warning comes first." },
          { q: "In the disciplinary process, what is the last resort?", options: ["Verbal warning", "Written warning", "Retraining", "Dismissal or other sanctions"], answer: 3, explanation: "Dismissal is the last resort." },
          { q: "In the workbook's disciplinary order, what comes straight after the written warning?", options: ["Verbal warning", "Retraining", "Dismissal", "Nothing, it is the final stage"], answer: 1, explanation: "Verbal warning, written warning, retraining, dismissal." }
        ],
        practice: [
          { q: "Explain the difference between legislation and regulations.", marks: 2, answer: "Legislation: laws passed by parliament; if broken, the individual or business can be prosecuted in court.\n\nRegulations: linked to laws but are guidelines to help apply the law; breaking them may not lead to prosecution." },
          { q: "Describe three of the nine protected characteristics covered by the Equality Act 2010.", marks: 3, answer: "Any three from the nine, 1 mark each: age, disability, gender reassignment, marriage and civil partnership, sex, sexual orientation, race, religion or belief, pregnancy and maternity." },
          { q: "Explain what 'duty of care' means for an employer.", marks: 2, answer: "Duty of care means an organisation is legally and morally obliged to ensure that anyone associated with the business (employees, employers and the general public) is fully protected from harm on the premises or while completing tasks related to the business." },
          { q: "A new employee has been dismissed without going through the correct disciplinary procedure. Analyse the consequences for the business and explain what the correct process should have been.", marks: 6, answer: "Consequences: unfair dismissal claim, employment tribunal, financial penalties, reputational damage.\n\nCorrect process: verbal warning, then written warning, then retraining, then dismissal as a last resort, with each stage documented.\n\nAward 3 marks per side (consequences and correct process)." }
        ]
      },
      {
        id: "2.2",
        title: "2.2 Having the right people",
        summary: "Recruitment process, internal and external recruitment, job descriptions and contract types.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Recruitment process in the workbook: 1 identify a vacancy, 2 develop a person specification, 3 develop a job description, 4 advertise, 5 shortlist, 6 testing, 7 interviews, 8 obtain references, 9 offer the position, 10 issue the contract.\n\nPerson specification: the skills, experience, qualifications and attributes the employee will need. Job description: the tasks and responsibilities of the role.\n\nInternal recruitment (e.g. company intranet): cheaper, quicker, candidate knows the culture; but limited pool, no fresh ideas, may cause resentment.\nExternal recruitment: wider pool and fresh ideas; but more expensive, takes longer, candidate may not fit the culture.\n\nContracts:\nPermanent: employed for an unlimited time until they leave.\nTemporary: has a start and finish date, used at busy times such as Christmas.\nFixed-term: pre-defined start and end date, e.g. maternity cover.\nPart-time: fewer hours than full-time.\nZero-hours: hours not stated, work at the employer's discretion, no sick or holiday pay (workbook).\nFreelance: self-employed, short-term, pays own taxes.\nOutsourced/agency: an agency sources workers for a project."
          },
          WORKBOOK
        ],
        questions: [
          { q: "Which of the following is an example of INTERNAL recruitment?", options: ["Advertising on a job website", "Using a recruitment agency", "Posting on the company intranet", "Headhunting"], answer: 2, explanation: "The intranet only reaches existing staff." },
          { q: "At which stage of the recruitment process does a business review applications against the person specification?", options: ["Advertising the position", "Shortlisting candidates", "Conducting interviews", "Issuing the contract"], answer: 1, explanation: "Shortlisting." },
          { q: "A zero-hours contract means:", options: ["The employee works exactly zero hours per week", "The hours are not stated and work is at the employer's discretion", "The employee works part-time hours only", "The contract has no end date"], answer: 1, explanation: "Hours are not guaranteed; work is offered as needed." },
          { q: "What is the first stage of the recruitment process?", options: ["Advertise the position", "Identify a vacancy", "Shortlist candidates", "Conduct interviews"], answer: 1, explanation: "First identify the vacancy." },
          { q: "In the recruitment process, which stage comes straight after advertising the position?", options: ["Issue the contract", "Shortlist candidates", "Obtain references", "Identify a vacancy"], answer: 1, explanation: "Advertise, then shortlist." },
          { q: "In the workbook's recruitment process, which stage comes straight after conducting interviews?", options: ["Obtain references", "Advertise the position", "Testing", "Develop a job description"], answer: 0, explanation: "Interviews, references, offer, contract." },
          { q: "What is the final stage of the recruitment process?", options: ["Offer the position", "Obtain references", "Issue the contract", "Conduct interviews"], answer: 2, explanation: "Issuing the contract is last, after the offer." },
          { q: "A ______ specification identifies the skills, experience, qualifications and attributes the future employee will need.", options: ["job", "person", "contract", "role"], answer: 1, explanation: "Person specification." },
          { q: "A ______ description details the tasks that form the job role and the responsibilities of the employee.", options: ["person", "job", "company", "skills"], answer: 1, explanation: "Job description." },
          { q: "A ______ contract is for a set number of hours less than full-time and can help employees work around other commitments.", options: ["zero-hours", "fixed-term", "part-time", "freelance"], answer: 2, explanation: "Part-time." },
          { q: "Which contract type means the employee is employed for an unlimited length of time until they leave?", options: ["Temporary", "Permanent", "Fixed-term", "Freelance"], answer: 1, explanation: "Permanent." },
          { q: "Which contract type has a start and finish date and is used at busy periods such as Christmas?", options: ["Temporary", "Permanent", "Zero-hours", "Part-time"], answer: 0, explanation: "Temporary." },
          { q: "Which contract type has a pre-defined start and end date and may cover maternity leave?", options: ["Fixed-term", "Zero-hours", "Freelance", "Permanent"], answer: 0, explanation: "Fixed-term." },
          { q: "Which describes a freelance worker?", options: ["Employed permanently by the business", "Self-employed, works for a business short-term and pays own taxes", "Sourced by an agency for a project", "Works fewer hours than full-time staff"], answer: 1, explanation: "Freelancers are self-employed." },
          { q: "Which contract type involves an employment agency sourcing workers for a specific project?", options: ["Outsourced/agency", "Fixed-term", "Part-time", "Permanent"], answer: 0, explanation: "Outsourced or agency workers." }
        ],
        practice: [
          { q: "Give one advantage and one disadvantage each of internal recruitment and external recruitment.", marks: 4, answer: "Internal recruitment: advantage, e.g. cheaper / quicker / employee already knows the business culture. Disadvantage, e.g. limited pool of candidates / no fresh ideas / may cause resentment.\n\nExternal recruitment: advantage, e.g. wider pool of candidates / fresh ideas and perspectives. Disadvantage, e.g. more expensive / takes longer / candidate may not fit the culture." },
          { q: "Explain why it is important for an organisation to have a fair and transparent recruitment process.", marks: 2, suggested: true, answer: "It ensures the business complies with the Equality Act 2010 and avoids discrimination claims and tribunals (1). It also helps the business choose the best candidate on merit from a wider, more diverse pool, and protects its reputation as an employer (1)." },
          { q: "Describe three methods a business might use to advertise a vacancy externally.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- online job websites (e.g. Indeed)\n- the business's own website and social media (e.g. LinkedIn)\n- recruitment agencies\n- local or trade newspapers and magazines\n- Jobcentre Plus\n- job fairs, colleges and universities" },
          { q: "A growing tech company needs to fill a senior software developer role quickly. Evaluate whether they should use internal or external recruitment, justifying your recommendation.", marks: 4, suggested: true, answer: "Internal: quicker and cheaper, the person already knows the systems and culture; but there may be no one with senior skills, and it leaves another gap to fill.\n\nExternal: wider pool with the specialist skills needed and fresh ideas; but slower and more expensive (adverts, agency fees), with a risk of poor culture fit.\n\nJudgement, e.g. internal if a suitable developer exists because speed matters; otherwise external through a specialist agency to find the skills quickly. Marks for both sides and a justified recommendation." }
        ]
      },
      {
        id: "2.3",
        title: "2.3 Equality, diversity and inclusion",
        summary: "Equality, inclusion, and the benefits of a diverse workforce.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Equality: everyone has the same opportunities and is not discriminated against.\n\nInclusion: including every person who might be excluded or marginalised due to disability or other characteristics.\n\nFive benefits of an equal, diverse and inclusive workforce: promotes innovation; encourages and enhances creativity; increases diversity and opportunities for new talent; improves motivation and retention of staff; enhances reputation.\n\nThe Equality Act applies throughout employment, not just recruitment. Employees can go to an employment tribunal about discrimination without any required length of service. A diverse interview panel helps make recruitment fair."
          },
          WORKBOOK
        ],
        questions: [
          { q: "Which of the following best describes 'inclusion' in the workplace?", options: ["Ensuring all employees earn the same wage", "Including every person who might be excluded or marginalised due to disability or other characteristics", "Recruiting only from internal sources", "Ensuring all employees have the same qualifications"], answer: 1, explanation: "Inclusion means not leaving anyone out." },
          { q: "Which of the following is NOT a benefit of an equal, diverse and inclusive workforce?", options: ["Promotes innovation", "Reduces the need for recruitment", "Improves motivation and retention of staff", "Enhances reputation"], answer: 1, explanation: "Recruitment is still needed. The others are listed benefits." },
          { q: "Which of these is one of the five benefits of an equal, diverse and inclusive workforce?", options: ["Lower wage bill", "Enhances reputation", "Fewer laws to follow", "No need for training"], answer: 1, explanation: "The five: innovation, creativity, new talent, motivation and retention, reputation." },
          { q: "True or false: equality means everyone has the same opportunities and is not discriminated against.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: a business only needs to consider the Equality Act during recruitment.", options: ["True", "False"], answer: 1, explanation: "False. It applies throughout employment." },
          { q: "True or false: employees can use an employment tribunal without any required length of service if they think discrimination has occurred.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: values are what a customer experiences; benefits are from the business's point of view.", options: ["True", "False"], answer: 0, explanation: "True, according to the workbook." },
          { q: "True or false: having a diverse interview panel can help achieve an equal recruitment process.", options: ["True", "False"], answer: 0, explanation: "True." }
        ],
        practice: [
          { q: "Explain the difference between equality and inclusion in the workplace.", marks: 2, suggested: true, answer: "Equality means everyone has the same opportunities and is not discriminated against (1).\n\nInclusion goes further: actively making sure people who might be excluded or marginalised (e.g. because of disability) are involved, valued and able to take part fully (1)." },
          { q: "Describe three actions a business can take to ensure its recruitment process is equal, diverse and inclusive.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- use a diverse interview panel\n- write job adverts in inclusive language and advertise in a range of places\n- anonymise applications (remove names, ages)\n- ask every candidate the same interview questions and score against set criteria\n- offer reasonable adjustments for disabled candidates\n- train recruiters on unconscious bias" },
          { q: "A construction company has an all-male senior leadership team. Analyse two benefits it could gain by introducing a more diverse and inclusive senior team.", marks: 4, suggested: true, answer: "2 marks per benefit (identify and develop), for example:\n- Innovation and creativity: different backgrounds bring new ideas and better decisions, e.g. new ways to win contracts.\n- Reputation: a diverse leadership team improves the company's image with clients and the public, helping win tenders.\n- New talent: role models encourage women to apply and stay, widening the recruitment pool in an industry with skills shortages.\n- Motivation and retention: staff feel valued and see a route to promotion." }
        ]
      },
      {
        id: "2.4",
        title: "2.4 Wellbeing and resilience",
        summary: "Employee wellbeing, resilience, wellbeing initiatives and employee assistance schemes.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Wellbeing: being comfortable, healthy and happy in life.\n\nResilience: the ability of an individual to adapt when faced with difficult or challenging circumstances.\n\nWellbeing initiative: a plan of action designed and implemented to improve a situation or issue a business may be facing.\n\nEmployee assistance scheme: a free, confidential service funded by employers, including counselling and advice.\n\nBenefits of wellbeing initiatives for the business: better performance, reduced absence, more efficiency, lower staff turnover, better reputation, more applicants.\nDisadvantages: cost, staff need training to lead them, confidentiality issues, effect is hard to measure, tax or benefit issues."
          },
          WORKBOOK
        ],
        questions: [
          { q: "Resilience in the workplace is best defined as:", options: ["The ability to work long hours without getting tired", "The ability of an individual to adapt when faced with difficult or challenging circumstances", "The ability to manage a team effectively", "The ability to always meet targets on time"], answer: 1, explanation: "Resilience is adapting to difficulty." },
          { q: "Which of the following is a benefit of wellbeing initiatives FOR THE BUSINESS?", options: ["Improved fitness levels for employees", "Increased motivation at work", "Reduced absence rates", "Variety within work"], answer: 2, explanation: "Lower absence benefits the business directly. The others mainly benefit the employee." },
          { q: "An employee assistance scheme is:", options: ["A government grant given to businesses", "A free and confidential service funded by employers that includes counselling and advice", "A compulsory mental health assessment", "A pension contribution scheme"], answer: 1, explanation: "Free, confidential, employer-funded support." },
          { q: "______ is defined as being comfortable, healthy and happy in life.", options: ["Resilience", "Wellbeing", "Motivation", "Productivity"], answer: 1, explanation: "Wellbeing." },
          { q: "______ is the ability of an individual to adapt when faced with difficult or challenging circumstances.", options: ["Wellbeing", "Resilience", "Empathy", "Delegation"], answer: 1, explanation: "Resilience." },
          { q: "A wellbeing ______ is a plan of action designed and implemented to improve a situation or issue a business may be facing.", options: ["policy", "initiative", "audit", "contract"], answer: 1, explanation: "Wellbeing initiative." },
          { q: "Which is a disadvantage of wellbeing initiatives for a business?", options: ["Reduced staff turnover", "They cost money and their effect is hard to measure", "Improved reputation", "More job applicants"], answer: 1, explanation: "Cost and measuring impact are the main drawbacks." }
        ],
        practice: [
          { q: "Give three benefits and two disadvantages of wellbeing initiatives for businesses.", marks: 5, answer: "Benefits: improve performance / reduce absence rates / make the business more efficient / reduce staff turnover / improve reputation / attract more applicants.\n\nDisadvantages: cost money / staff need training to lead them / confidentiality issues / difficult to analyse the effect / tax or benefit issues." },
          { q: "Describe three strategies an individual employee could implement to improve their resilience at work.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- manage time and prioritise tasks to reduce stress\n- build a support network and talk to colleagues or a manager\n- take regular breaks and keep a healthy work-life balance\n- look after physical health: sleep, exercise, diet\n- set realistic goals and learn from setbacks\n- use support such as an employee assistance scheme or mentoring" },
          { q: "Describe three ways an organisation can ensure the workplace culture is positive for employee wellbeing.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- managers who listen and hold regular one-to-ones\n- flexible or hybrid working to support work-life balance\n- an employee assistance scheme and mental health first aiders\n- recognising and rewarding good work\n- reasonable workloads and clear expectations\n- open communication and staff surveys acted on" },
          { q: "A call centre has noticed a significant increase in staff sickness and absence rates. Analyse two wellbeing initiatives the business could introduce to address this problem.", marks: 4, suggested: true, answer: "2 marks per initiative (identify and analyse), for example:\n- Employee assistance scheme: free, confidential counselling helps staff deal with stress from difficult calls before it leads to sickness absence.\n- Flexible shift patterns and regular screen breaks: reduce fatigue and help staff balance home life, so fewer days off.\n- Wellbeing training for team leaders: they spot early signs of stress and act sooner.\n\nAnalysis should link to reduced absence, cost, and how success could be measured (absence rates)." }
        ]
      },
      {
        id: "2.5",
        title: "2.5 Management and leadership styles",
        summary: "Directive, participative, delegative, pacesetting, autocratic, democratic, laissez-faire and more.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Directive: leader sets specific objectives and allocates tasks; employees are not involved in decisions. Common in military or uniformed settings.\nAuthoritative: manager is in charge and makes decisions without consulting others; results-driven.\nParticipative: manager encourages ideas from the team and decisions are made together.\nPacesetting: manager sets high standards and expects employees to meet and exceed them.\nDelegative: manager delegates tasks and lets team members make decisions.\nDemocratic: invites others to take part in decision-making.\nAutocratic: all decisions are made by the leader, who has all the power; no advice taken.\nLaissez-faire: individuals complete tasks their own way and learn from mistakes; leader provides resources.\nAffiliative: focuses on a positive, harmonious environment and resolves conflict quickly.\nCoaching: encourages collaboration, empowerment and fulfilment.\n\nDirect report: reports directly to their manager. Indirect report: managed by their boss but also reports to someone else for a task or project.\n\nOutputs: the activities and actions completed. Outcomes: the reasons for them, the intangible results and human elements."
          },
          WORKBOOK
        ],
        questions: [
          { q: "Which management style is most commonly found in military or uniformed settings?", options: ["Participative", "Delegative", "Directive", "Pacesetting"], answer: 2, explanation: "Directive: clear orders, no employee involvement in decisions." },
          { q: "A participative management style is best described as:", options: ["The manager makes all decisions alone", "The manager encourages ideas from the team and they work together to make decisions", "The manager delegates tasks to team members and takes no responsibility", "The manager sets very high standards and expects employees to exceed them"], answer: 1, explanation: "Participative means deciding together." },
          { q: "Which leadership style encourages collaboration, empowerment and fulfilment?", options: ["Autocratic", "Laissez-faire", "Coaching", "Affiliative"], answer: 2, explanation: "Coaching." },
          { q: "Which style: leader sets specific objectives and allocates tasks; the employee is not involved in decisions?", options: ["Directive", "Democratic", "Laissez-faire", "Affiliative"], answer: 0, explanation: "Directive. (The workbook's answer key pairs this with autocratic, which looks like a slip; it matches directive.)" },
          { q: "Which style: all decisions are made by the leader, who has all the power; no advice taken from others?", options: ["Participative", "Autocratic", "Delegative", "Coaching"], answer: 1, explanation: "Autocratic." },
          { q: "Which style: manager is in charge and makes decisions without consulting others; results-driven?", options: ["Authoritative", "Democratic", "Affiliative", "Laissez-faire"], answer: 0, explanation: "Authoritative, according to the workbook." },
          { q: "Which style: manager delegates tasks to team members, allowing them to make decisions?", options: ["Pacesetting", "Delegative", "Directive", "Autocratic"], answer: 1, explanation: "Delegative." },
          { q: "Which style: manager sets high standards and expects employees to meet and exceed them?", options: ["Pacesetting", "Affiliative", "Democratic", "Coaching"], answer: 0, explanation: "Pacesetting." },
          { q: "Which style invites others to participate in the business and be part of the decision-making process?", options: ["Autocratic", "Democratic", "Directive", "Authoritative"], answer: 1, explanation: "Democratic." },
          { q: "Which style: individuals complete tasks their own way and learn from their mistakes; the leader provides resources?", options: ["Laissez-faire", "Pacesetting", "Authoritative", "Directive"], answer: 0, explanation: "Laissez-faire." },
          { q: "Which style focuses on working in a positive and harmonious environment and resolves conflicts quickly?", options: ["Affiliative", "Autocratic", "Pacesetting", "Delegative"], answer: 0, explanation: "Affiliative." }
        ],
        practice: [
          { q: "Explain the difference between a direct report and an indirect report.", marks: 2, answer: "Direct report: an employee who reports directly to their boss or manager.\n\nIndirect report: an employee managed by their boss but who also reports to someone else for a specific task or project." },
          { q: "Describe how a business might need to adapt its management style during a period of significant change such as the COVID-19 pandemic.", marks: 3, suggested: true, answer: "Up to 3 marks, for example:\n- More directive at first: quick, clear decisions and instructions were needed (e.g. safety rules, closures).\n- More trust and delegation for remote workers: managers could not supervise in person, so staff were given more freedom to decide how to work.\n- More affiliative and coaching: regular check-ins to support wellbeing and keep teams connected.\n- More communication through digital channels such as video calls." },
          { q: "Explain the difference between 'outputs' and 'outcomes' in a business context.", marks: 2, answer: "Outputs: the activities and actions an individual or team will complete.\n\nOutcomes: the reasons for completing those activities and actions; the intangible results and human elements." },
          { q: "A school is expanding rapidly and taking on a large number of new teaching staff. Evaluate which management style would be most appropriate for the headteacher to use during this period of growth. Justify your answer.", marks: 6, suggested: true, answer: "Points to weigh:\n- Directive/authoritative: gives new staff clear rules and expectations quickly and keeps standards consistent; but can demotivate experienced teachers and stifle ideas.\n- Participative/democratic: involves staff, builds commitment and uses their expertise; but slower decisions during rapid change.\n- Coaching/affiliative: supports new teachers' development and builds a positive culture; takes time.\n- Laissez-faire: unsuitable, because new staff need guidance.\n\nJustified judgement, e.g. directive for policies and safeguarding, combined with coaching or participative for teaching practice, because styles can be adapted to the situation. Full marks need both sides and a reasoned conclusion." }
        ]
      },
      {
        id: "2.6",
        title: "2.6 Developing skills",
        summary: "CPD, training types, mentoring, coaching, appraisals and induction.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "CPD: Continuing Professional Development.\n\nOn-the-job training happens at the employee's workplace while they do their job.\n\nLearning Development Plan (LDP): a formal record of CPD activities completed, so employee and employer can refer to it.\n\nMentoring: an experienced team member is paired with a newer one. Benefits: long-term, good working relationships, promotes growth and career aspirations, staff learn faster, being a mentor counts as CPD.\n\nCoaching: training driven by performance, helping the person being coached improve. Benefits: solve issues in different ways, better productivity, more confidence.\n\nPerformance review (appraisal): reviewing an employee's performance over a period of time."
          },
          WORKBOOK
        ],
        questions: [
          { q: "What does CPD stand for?", options: ["Continued Personal Development", "Continuing Professional Development", "Current Professional Development", "Company Personnel Direction"], answer: 1, explanation: "Continuing Professional Development." },
          { q: "Which type of training takes place at the employee's workplace while they carry out their job?", options: ["External training", "Internal training", "On-the-job training", "Conference training"], answer: 2, explanation: "On-the-job training." },
          { q: "A Learning Development Plan (LDP) is:", options: ["A government scheme to fund employee training", "A formal document that details CPD activities completed so employee and employer can refer to a record of training", "An appraisal form used once a year", "A plan for new employees in their first week"], answer: 1, explanation: "An LDP is a formal record of CPD." },
          { q: "______ is when two people are paired to help professional development: an experienced team member with a newer member.", options: ["Coaching", "Mentoring", "Shadowing", "Appraisal"], answer: 1, explanation: "Mentoring." },
          { q: "______ is a form of training driven by performance, enabling the individual being coached to improve.", options: ["Mentoring", "Coaching", "Induction", "CPD"], answer: 1, explanation: "Coaching." },
          { q: "A performance review is also known as an ______.", options: ["induction", "appraisal", "interview", "audit"], answer: 1, explanation: "Appraisal." },
          { q: "Which is a benefit of mentoring?", options: ["It is a quick, one-off fix", "Being a mentor counts as CPD and good working relationships form", "It removes the need for appraisals", "It is only for senior managers"], answer: 1, explanation: "Mentoring is long-term, builds relationships and counts as CPD for the mentor." }
        ],
        practice: [
          { q: "Give two benefits of mentoring and two benefits of coaching.", marks: 4, answer: "Mentoring: long-term process with good working relationships formed / promotes individual growth and career aspirations / staff learn faster / becoming a mentor counts as CPD.\n\nCoaching: allows employees to solve issues in different ways / improves productivity / increases the individual's confidence." },
          { q: "Explain the difference between mentoring and coaching.", marks: 2, suggested: true, answer: "Mentoring: a longer-term relationship where an experienced colleague supports a newer one with overall development and career goals (1).\n\nCoaching: shorter-term and performance-driven, focused on improving specific skills or reaching set goals (1)." },
          { q: "Describe three examples of CPD activities an employee might complete.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- attending a training course or workshop\n- completing a qualification\n- online learning or webinars\n- attending a conference\n- job shadowing\n- being mentored or mentoring others\n- reading professional journals" },
          { q: "Explain the purpose of a performance review (appraisal).", marks: 2, suggested: true, answer: "To review how well an employee has performed over a period against their targets, recognising successes (1), and to agree new objectives and identify training or development needs (1)." },
          { q: "A logistics company has taken on 30 new warehouse employees. Explain why an effective induction process is important and describe two elements it should include.", marks: 4, suggested: true, answer: "Why (up to 2): helps new staff become productive quickly, meets health and safety duty of care in a warehouse, makes staff feel welcome so they are less likely to leave.\n\nElements (1 each, up to 2):\n- health and safety training (manual handling, equipment, fire procedures)\n- a tour of the site and introductions to the team\n- company policies and procedures\n- paperwork: contract, payroll, pension\n- a buddy or mentor" }
        ]
      },
      {
        id: "2.7",
        title: "2.7 Teamworking and motivation",
        summary: "Belbin's team roles, Maslow's hierarchy, Herzberg's two-factor theory and team conflict.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Belbin's team roles:\nAction-orientated: Shaper (thrives on pressure and challenges, overcomes obstacles), Completer Finisher (keeps to schedule, highest standard), Implementer (reliable and efficient, sees ideas through).\nPeople-orientated: Team Worker (co-operates, listens, avoids conflict), Co-ordinator (good leader, identifies goals, delegates, encourages decision-making), Resource Investigator (seeks opportunities, enthusiastic, good communicator).\nCerebral: Monitor Evaluator (looks at the whole project, judges options accurately), Plant (creative, imaginative, solves problems), Specialist (self-motivated, has the skills, can be single-minded).\n\nMaslow's hierarchy, bottom to top: Physiological, Safety, Love and belonging, Esteem, Self-actualisation.\n\nHerzberg: hygiene factors (e.g. salary, working conditions) keep workers in their job but do not motivate them to work harder. Motivators lead to satisfaction.\n\nCauses of team conflict include leadership (the most senior person may not be the best leader) and team dynamics (personality clashes)."
          },
          WORKBOOK
        ],
        questions: [
          { q: "According to Belbin, which team role 'thrives on pressure and challenges, and likes to overcome obstacles'?", options: ["Plant", "Shaper", "Monitor Evaluator", "Implementer"], answer: 1, explanation: "Shaper." },
          { q: "Which Belbin role is described as 'creative, imaginative and able to solve problems'?", options: ["Shaper", "Resource Investigator", "Plant", "Specialist"], answer: 2, explanation: "Plant." },
          { q: "Maslow's hierarchy of needs places which need at the very top?", options: ["Esteem", "Safety needs", "Physiological needs", "Self-actualisation"], answer: 3, explanation: "Self-actualisation is at the top." },
          { q: "According to Herzberg, 'hygiene factors' such as salary and working conditions:", options: ["Motivate employees to work harder", "Can keep workers in their present job but do not motivate them to work harder", "Lead directly to job satisfaction", "Are less important than motivating factors"], answer: 1, explanation: "Hygiene factors prevent dissatisfaction but don't motivate." },
          { q: "What is at the base (level 1) of Maslow's hierarchy?", options: ["Safety needs", "Physiological needs", "Love and belonging", "Esteem"], answer: 1, explanation: "Physiological: food, water, shelter." },
          { q: "What is level 2 of Maslow's hierarchy?", options: ["Safety needs", "Esteem", "Self-actualisation", "Love and belonging"], answer: 0, explanation: "Safety: security and stability." },
          { q: "What is level 3 of Maslow's hierarchy?", options: ["Esteem", "Love and belonging", "Physiological needs", "Safety needs"], answer: 1, explanation: "Love and belonging: social needs and relationships." },
          { q: "What is level 4 of Maslow's hierarchy?", options: ["Esteem", "Self-actualisation", "Safety needs", "Love and belonging"], answer: 0, explanation: "Esteem: recognition and status." },
          { q: "Which Belbin role keeps to schedule and ensures output is to the highest standard?", options: ["Completer Finisher", "Team Worker", "Plant", "Co-ordinator"], answer: 0, explanation: "Completer Finisher." },
          { q: "Which Belbin role is reliable and efficient and sees ideas through from start to finish?", options: ["Shaper", "Implementer", "Resource Investigator", "Specialist"], answer: 1, explanation: "Implementer." },
          { q: "Which Belbin role co-operates, listens well and likes to avoid conflict?", options: ["Team Worker", "Shaper", "Monitor Evaluator", "Plant"], answer: 0, explanation: "Team Worker." },
          { q: "Which Belbin role is often a good leader who identifies goals, delegates tasks and encourages decision-making?", options: ["Co-ordinator", "Implementer", "Specialist", "Completer Finisher"], answer: 0, explanation: "Co-ordinator." },
          { q: "Which Belbin role seeks opportunities, is enthusiastic and a good communicator?", options: ["Resource Investigator", "Monitor Evaluator", "Team Worker", "Shaper"], answer: 0, explanation: "Resource Investigator." },
          { q: "Which Belbin role looks at the whole project and judges options and roles accurately?", options: ["Plant", "Monitor Evaluator", "Co-ordinator", "Implementer"], answer: 1, explanation: "Monitor Evaluator." }
        ],
        practice: [
          { q: "Describe three benefits of working as part of a team for an individual employee.", marks: 3, answer: "Any three, 1 mark each: boosts morale / personal development / accountability / support from team members / opportunities to gain new knowledge / job satisfaction." },
          { q: "Explain two causes of conflict within a team.", marks: 2, answer: "1 mark each, fully developed:\n- Leadership: the most senior person may not always be the best leader.\n- Team dynamics: personality clashes can affect completion and effectiveness." },
          { q: "Compare Maslow's and Herzberg's theories of motivation. Identify one similarity and two differences.", marks: 3, answer: "Similarity: both address what motivates people.\n\nDifference 1: Maslow uses a hierarchy of needs; Herzberg uses a two-factor theory (hygiene factors and motivators).\n\nDifference 2: Maslow says physiological needs must be met first; Herzberg says hygiene factors prevent dissatisfaction but don't motivate." },
          { q: "A marketing agency is forming a new team for a major client project. Using Belbin's team roles, evaluate the importance of having a balanced team and explain the potential consequences of having an unbalanced team.", marks: 6, suggested: true, answer: "Importance of balance:\n- Each role adds something: a Plant for creative campaign ideas, a Resource Investigator to build client relationships, a Co-ordinator to delegate, a Completer Finisher to meet deadlines and quality.\n- A balanced team covers ideas, people and delivery, so the project is more likely to succeed.\n\nConsequences of imbalance:\n- Too many Plants or Shapers: lots of ideas or arguments, but conflict and nothing finished.\n- No Completer Finisher or Implementer: missed deadlines and errors in client work.\n- No Team Worker: tension goes unresolved.\n\nJudgement: balance matters, but in a small team people can cover more than one role. Full marks need applied examples and a conclusion." }
        ]
      }
    ]
  });
})();
