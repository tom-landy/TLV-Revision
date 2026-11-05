/* Element 1: Business Context. Based on the TLV Element 1 revision workbook. */
(function () {
  var WORKBOOK = { type: "docx", title: "Element 1 workbook (Word, answers at the back)", url: "files/element1-business-context-workbook.docx" };

  window.TLV_CONTENT.subjects.push({
    id: "element-1",
    title: "Element 1: Business Context",
    colour: "#1f6feb",
    topics: [
      {
        id: "1.1",
        title: "1.1 Types of organisation",
        summary: "Public, private and voluntary sectors and the environments organisations operate in.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Public sector: owned and funded by the government, provides services to the public on a not-for-profit basis (e.g. NHS, BBC, armed forces).\n\nPrivate sector: owned by individuals or groups, aims to make a profit for owners or shareholders (e.g. Tesco, Barclays).\n\nVoluntary or third sector: not-for-profit, any surplus is reinvested, aims for social impact rather than profit (e.g. charities such as Oxfam, social enterprises)."
          },
          WORKBOOK
        ],
        cards: [
          ["Public sector", "Organisations owned and funded by the government, providing services to the public on a not-for-profit basis (e.g. NHS, BBC)."],
          ["Private sector", "Businesses owned by individuals or groups, aiming to make a profit for their owners or shareholders (e.g. Tesco)."],
          ["Voluntary (third) sector", "Not-for-profit organisations that reinvest any surplus and aim for social impact (e.g. charities, social enterprises)."],
          ["Not-for-profit", "Any surplus money is reinvested in the organisation's purpose rather than paid to owners."],
          ["Social enterprise", "An organisation in the voluntary sector that trades to achieve social aims and reinvests its surplus."]
        ],
        questions: [
          { type: "sort", q: "Sort each organisation into its sector.", categories: ["Public", "Private", "Voluntary"], items: [["NHS", 0], ["BBC", 0], ["Armed forces", 0], ["Tesco", 1], ["Barclays Bank", 1], ["Oxfam", 2], ["A social enterprise", 2]], explanation: "Public: owned and funded by government. Private: owned by individuals or groups for profit. Voluntary: not-for-profit, surplus reinvested." },
          { type: "multi", q: "Select all the features of a voluntary sector organisation.", options: ["Not-for-profit", "Any surplus is reinvested", "Aims for social impact", "Often run by volunteers", "Owned by the government", "Aims to maximise profit for shareholders"], answers: [0, 1, 2, 3], explanation: "Voluntary organisations are not-for-profit, reinvest any surplus, aim for social impact and are often run by volunteers." },
          { type: "type", q: "The voluntary sector is also known as the ______ sector.", accept: ["third"], explanation: "The voluntary or third sector." },
          { q: "Which of the following is an example of a public sector organisation?", options: ["Tesco", "NHS", "Oxfam", "Barclays Bank"], answer: 1, explanation: "The NHS is owned and funded by the government. Tesco and Barclays are private sector. Oxfam is a charity (voluntary sector)." },
          { q: "A private sector business is best described as:", options: ["Owned by the government to provide services to the public", "Owned by individuals or groups with the aim of making a profit", "A not-for-profit organisation that helps the community", "Run by volunteers to address social issues"], answer: 1, explanation: "Private sector businesses are owned by individuals or groups and aim to make a profit." },
          { q: "Which sector do charities and social enterprises belong to?", options: ["Private sector", "Public sector", "Voluntary or third sector", "Mixed sector"], answer: 2, explanation: "Charities and social enterprises are in the voluntary or third sector." },
          { q: "The public sector is owned and funded by the ______.", options: ["government", "shareholders", "volunteers", "public"], answer: 0, explanation: "Public sector organisations are owned and funded by the government." },
          { q: "Private sector businesses aim to make a ______ for their owners or shareholders.", options: ["surplus to reinvest", "profit", "public service", "donation"], answer: 1, explanation: "The aim of a private sector business is profit for its owners or shareholders." },
          { q: "The voluntary or third sector is ______ and any surplus money is reinvested.", options: ["private", "government-funded", "not-for-profit", "profit-making"], answer: 2, explanation: "Voluntary sector organisations are not-for-profit. Any surplus is reinvested." }
        ],
        practice: [
          { q: "State two features of a voluntary sector organisation.", marks: 2, answer: "Any two from:\n- not-for-profit\n- any surplus is reinvested\n- provides a public service or helps people\n- run by volunteers or private individuals\n- aim is social impact rather than profit" },
          { q: "Describe the differences between the private sector and the public sector.", marks: 3, answer: "Private sector: owned by individuals or groups, aims to make a profit.\n\nPublic sector: owned and funded by government, provides services to the public (e.g. NHS, BBC) on a not-for-profit basis.\n\nKey difference: purpose, profit versus public service." },
          { q: "Give two examples of public sector organisations and explain why they belong to this sector.", marks: 2, answer: "Examples include the NHS (healthcare for the public, government funded), the BBC (public broadcaster, government funded) and the armed forces.\n\nThe explanation should refer to government ownership and a public service purpose." },
          { q: "Explain two reasons why a business manager needs to understand which sector their organisation operates in.", marks: 4, answer: "2 marks per reason, for example:\n- To understand the legal requirements and regulations that apply to their sector.\n- To know which goals the organisation should focus on: profit, public service or social impact.\n\nAnswers should be developed with explanation." }
        ]
      },
      {
        id: "1.2",
        title: "1.2 Size, purpose and sector",
        summary: "How organisations are measured by size, mission and vision statements, and the impact of growth.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Size can be measured by turnover, balance sheet total and number of employees. Turnover is the value of total sales over a year.\n\nCompanies Act 2006 thresholds used in the workbook:\nMicro-entity: turnover not more than £632,000, balance sheet not more than £316,000, not more than 10 employees.\nSmall: turnover not more than £10.2m, balance sheet not more than £5.1m, not more than 50 employees.\nMedium: turnover not more than £36m, balance sheet not more than £18m, not more than 250 employees.\n\nNote: the money thresholds were raised from 6 April 2025 (micro £1m turnover and £500,000 balance sheet; small £15m and £7.5m; medium £54m and £27m). Employee limits did not change. Check with your teacher which figures your exam uses.\n\nA mission statement sets out the scope and purpose of an organisation. A vision statement looks to the future: where the organisation will be if it fulfils its mission.\n\nGrowth can cause problems with co-ordination, integration and communication."
          },
          WORKBOOK
        ],
        cards: [
          ["Turnover", "The value of total sales a business makes over a year."],
          ["Balance sheet total", "The total value of a business's assets; one of the three Companies Act size measures."],
          ["Micro-entity", "Not more than 10 employees (workbook money limits: £632,000 turnover, £316,000 balance sheet)."],
          ["Small company", "Not more than 50 employees (workbook money limits: £10.2m turnover, £5.1m balance sheet)."],
          ["Medium company", "Not more than 250 employees (workbook money limits: £36m turnover, £18m balance sheet)."],
          ["Mission statement", "Sets out the scope and purpose of an organisation."],
          ["Vision statement", "Looks to the future: where the organisation will be if it fulfils its mission."],
          ["Problems of growth", "Harder co-ordination, integration and communication as the business gets bigger."]
        ],
        questions: [
          { type: "multi", q: "Select the three ways business size is measured under the Companies Act.", options: ["Turnover", "Balance sheet total", "Number of employees", "Customer satisfaction", "Number of products", "Age of the business"], answers: [0, 1, 2], explanation: "Turnover, balance sheet total and number of employees." },
          { type: "sort", q: "Does each statement describe a mission statement or a vision statement?", categories: ["Mission", "Vision"], items: [["Sets out the scope and purpose of the organisation", 0], ["What the organisation does now and why", 0], ["Looks to the future", 1], ["Where the organisation will be if it fulfils its mission", 1]], explanation: "Mission = purpose now. Vision = where it is heading." },
          { type: "order", q: "Put these company sizes in order, smallest first.", items: ["Micro-entity", "Small", "Medium", "Large"], explanation: "Micro-entity (up to 10 employees), small (up to 50), medium (up to 250), large." },
          { type: "type", q: "What is the value of total sales a business makes over a year called?", accept: ["turnover", "sales turnover", "sales revenue", "revenue"], explanation: "Turnover." },
          { q: "According to the Companies Act 2006 figures in the workbook, a small business has a turnover of no more than:", options: ["£632,000", "£10.2m", "£36m", "£5.1m"], answer: 1, explanation: "Small: turnover not more than £10.2m. (£5.1m is the small balance sheet limit.) Workbook figure: the limit rose to £15m from April 2025." },
          { q: "Which of the following is NOT a way businesses are measured in terms of size?", options: ["Turnover", "Number of employees", "Customer satisfaction score", "Balance sheet total"], answer: 2, explanation: "Size is measured by turnover, balance sheet total and number of employees." },
          { q: "A ______ statement sets out the scope and purpose of an organisation.", options: ["vision", "mission", "financial", "value"], answer: 1, explanation: "A mission statement sets out scope and purpose." },
          { q: "A ______ statement looks to the future and where the organisation will be if it fulfils its mission.", options: ["mission", "vision", "income", "policy"], answer: 1, explanation: "A vision statement looks to the future." },
          { q: "______ is the value of total sales a business makes over a year.", options: ["Profit", "Turnover", "Cash flow", "Capital"], answer: 1, explanation: "Turnover is the total value of sales over a year." },
          { q: "Using the Companies Act thresholds, what is the maximum number of employees for a micro-entity?", options: ["5", "10", "50", "250"], answer: 1, explanation: "Micro-entity: not more than 10 employees. Small: 50. Medium: 250." },
          { q: "Using the Companies Act thresholds, what is the maximum number of employees for a small company?", options: ["10", "25", "50", "250"], answer: 2, explanation: "Small: not more than 50 employees." },
          { q: "Using the workbook figures, what is the maximum turnover for a medium-sized company?", options: ["£10.2m", "£18m", "£36m", "£54m"], answer: 2, explanation: "Medium: turnover not more than £36m (workbook figure). From April 2025 this rose to £54m." },
          { q: "Using the workbook figures, what is the maximum balance sheet total for a micro-entity?", options: ["£316,000", "£632,000", "£5.1m", "£18m"], answer: 0, explanation: "Micro-entity balance sheet: not more than £316,000 (workbook figure). From April 2025 this rose to £500,000." }
        ],
        practice: [
          { q: "Explain three ways that growing in size can negatively impact a business. Use the terms co-ordination, integration and communication in your answer.", marks: 3, suggested: true, answer: "1 mark for each, explained:\n- Co-ordination: with more staff, sites and departments it is harder to supervise and organise work, so activities can be duplicated or missed.\n- Integration: new staff, departments or acquired businesses may not fit the existing culture and systems, so they do not work well together.\n- Communication: more layers of management mean messages take longer, get distorted or are lost, which leads to poor decisions." },
          { q: "State two differences between a mission statement and a vision statement.", marks: 2, suggested: true, answer: "Any two, for example:\n- A mission statement sets out the organisation's current scope and purpose; a vision statement looks to the future.\n- A mission statement says what the organisation does now and why; a vision statement says where it wants to be if it fulfils its mission.\n- A mission statement guides day-to-day decisions; a vision statement inspires long-term direction." },
          { q: "A large retail company is rapidly expanding and opening new stores across the UK. Analyse two impacts that this growth may have on how the business operates.", marks: 4, answer: "Award 2 marks per impact: 1 mark identify, 1 mark develop.\n\nCo-ordination: rapid growth makes supervision of teams harder and leaders may become disconnected, affecting quality.\n\nCommunication: with more staff and locations, messages can be lost, leading to incorrect decisions being made." }
        ]
      },
      {
        id: "1.3",
        title: "1.3 Economic, social and environmental impacts",
        summary: "CSR, Carroll's pyramid, sustainability, carbon footprint and philanthropy.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "CSR stands for Corporate Social Responsibility.\n\nCarroll's CSR pyramid, from the base up: Economic (be profitable), Legal (obey the law), Ethical (be ethical), Philanthropic (be a good corporate citizen).\n\nSustainability is the long-term maintenance of systems according to environmental, economic and social considerations.\n\nPhilanthropy is when private profits are used to benefit the wider public without the business receiving anything in return.\n\nCarbon footprint measures the greenhouse gases a business produces, in equivalent tons of CO₂.\n\nBusiness output affects UK economic growth, which is measured by Gross Domestic Product (GDP)."
          },
          WORKBOOK
        ],
        cards: [
          ["CSR (Corporate Social Responsibility)", "A business's commitment to having a positive social, economic and environmental impact."],
          ["Carroll's CSR pyramid", "From the base: Economic (be profitable), Legal (obey the law), Ethical (be ethical), Philanthropic (be a good corporate citizen)."],
          ["Sustainability", "The long-term maintenance of systems according to environmental, economic and social considerations."],
          ["Philanthropy", "When private profits are used to benefit the wider public without the business receiving anything in return."],
          ["Carbon footprint", "The amount of greenhouse gases a business produces, measured in equivalent tons of CO₂."],
          ["GDP", "Gross Domestic Product: the measure of the UK's economic growth, affected by business output."],
          ["Business ethics", "The moral principles that guide how a business and its people behave."]
        ],
        questions: [
          { type: "order", q: "Put Carroll's CSR pyramid in order, from the base to the top.", items: ["Economic", "Legal", "Ethical", "Philanthropic"], explanation: "Be profitable, obey the law, be ethical, be a good corporate citizen." },
          { type: "match", q: "Match each term to its definition.", pairs: [["CSR", "A business's responsibility to have a positive impact on society, the economy and the environment"], ["Sustainability", "Long-term maintenance of systems according to environmental, economic and social considerations"], ["Philanthropy", "Using private profits to benefit the public without receiving anything in return"], ["Carbon footprint", "Greenhouse gases produced, measured in equivalent tons of CO₂"], ["GDP", "The measure of the UK's economic growth"]], explanation: "" },
          { type: "type", q: "What does GDP stand for?", accept: ["gross domestic product"], explanation: "Gross Domestic Product." },
          { q: "What does CSR stand for?", options: ["Company Social Regulation", "Corporate Social Responsibility", "Customer Service Requirement", "Central Strategy Review"], answer: 1, explanation: "CSR is Corporate Social Responsibility." },
          { q: "Carroll's CSR pyramid places which responsibility at the base?", options: ["Ethical", "Legal", "Economic", "Philanthropic"], answer: 2, explanation: "Economic (be profitable) is the base. Then legal, ethical, and philanthropic at the top." },
          { q: "Carbon footprint measures:", options: ["The total cost of a business's raw materials", "The amount of greenhouse gases produced by a business, measured in equivalent tons of CO₂", "The number of staff a business employs", "The amount of waste produced by a business per year"], answer: 1, explanation: "Carbon footprint is greenhouse gas output in equivalent tons of CO₂." },
          { q: "______ is defined as the long-term maintenance of systems according to environmental, economic and social considerations.", options: ["Philanthropy", "Sustainability", "Profitability", "Diversification"], answer: 1, explanation: "That is the definition of sustainability." },
          { q: "______ refers to when private profits are used to benefit the wider public without the business receiving anything in return.", options: ["Sponsorship", "Philanthropy", "Marketing", "Taxation"], answer: 1, explanation: "Philanthropy gives back without expecting anything in return. Sponsorship expects publicity in return." },
          { q: "The output of businesses directly affects the economic growth of the UK, which is measured by:", options: ["Inflation", "Gross Domestic Product (GDP)", "The interest rate", "The FTSE 100"], answer: 1, explanation: "Economic growth is measured by GDP." },
          { q: "In Carroll's pyramid, which level is 'be a good corporate citizen' at the top?", options: ["Economic", "Legal", "Ethical", "Philanthropic"], answer: 3, explanation: "Level 4 (top) is Philanthropic." },
          { q: "In Carroll's pyramid, which level is 'obey the law'?", options: ["Level 1 (base)", "Level 2", "Level 3", "Level 4 (top)"], answer: 1, explanation: "Level 2 is Legal, above Economic at the base." },
          { q: "In Carroll's pyramid, which level sits directly above Legal?", options: ["Economic", "Ethical", "Philanthropic", "Nothing, Legal is the top"], answer: 1, explanation: "Economic, Legal, Ethical, Philanthropic, from bottom to top." }
        ],
        practice: [
          { q: "Describe three benefits to a business of having a positive social, economic and environmental impact on society.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- Better reputation and brand image, which attracts customers.\n- Stronger commitment and loyalty from employees and customers.\n- Easier to recruit, because more prospective employees want to work there.\n- Helps secure the long-term future of the business.\n- Lower risk of fines or legal action." },
          { q: "Explain the difference between business ethics and Corporate Social Responsibility (CSR).", marks: 2, suggested: true, answer: "Business ethics are the moral principles that guide how a business and its people behave, doing what is right beyond what the law requires (1).\n\nCSR is the business's wider commitment to having a positive impact on society, the economy and the environment, often set out in a CSR policy (1)." },
          { q: "Analyse the importance of a clear CSR policy within a business. Consider both the benefits of having a CSR policy and the potential consequences of failing to act responsibly.", marks: 6, answer: "Benefits (2 marks each, 2 benefits max): secure future; reinforced commitment from employees and customers; greater interest from prospective recruits.\n\nConsequences of failure: loss of reputation; loss of sales revenue; increased costs (legal battles, fines); higher staff turnover; directors removed.\n\nAward marks for both sides of the argument with a conclusion." }
        ]
      },
      {
        id: "1.4",
        title: "1.4 Legal entity types",
        summary: "Sole traders, partnerships, Ltd, PLC, franchises, charities and co-operatives.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Sole trader: one owner, easy and cheap to set up, unlimited liability (owner pays business debts from personal funds).\n\nPartnership: typically 2 to 20 owners, more capital and shared responsibility, but unlimited liability for all partners.\n\nPrivate Limited Company (Ltd): limited liability, shares sold privately (family and friends), must register with Companies House.\n\nPublic Limited Company (PLC): minimum share capital £50,000, shares sold to the public, risk of takeover.\n\nFranchise: the franchisor grants a licence to the franchisee to sell the brand or business idea.\n\nCharity: not-for-profit, registered with the Charity Commission.\n\nCo-operative: like-minded people working together; ownership, finance and control are with the members, who share profits and losses. Types: consumer, worker, producer.\n\nLimited liability: owners can only lose what they invested. Unlimited liability: personal assets are at risk."
          },
          WORKBOOK
        ],
        cards: [
          ["Sole trader", "A business owned by one person; easy and cheap to set up; unlimited liability."],
          ["Partnership", "Typically 2 to 20 owners sharing responsibility and capital; unlimited liability."],
          ["Private Limited Company (Ltd)", "Shares sold privately (e.g. family and friends); limited liability; registered with Companies House."],
          ["Public Limited Company (PLC)", "Shares sold to the public; minimum £50,000 share capital; risk of takeover."],
          ["Franchisor", "The business that owns the brand and grants a licence to sell it."],
          ["Franchisee", "The person or business that buys a licence to sell the franchisor's brand."],
          ["Limited liability", "Owners can only lose the money they invested; personal assets are safe."],
          ["Unlimited liability", "Owners must pay business debts from personal funds if the business can't."],
          ["Co-operative", "Owned and controlled by members who share profits and losses (consumer, worker or producer)."],
          ["Charity", "A not-for-profit organisation registered with the Charity Commission."]
        ],
        questions: [
          { type: "sort", q: "Does each legal structure have limited or unlimited liability?", categories: ["Limited", "Unlimited"], items: [["Sole trader", 1], ["Partnership", 1], ["Private limited company (Ltd)", 0], ["Public limited company (PLC)", 0]], explanation: "Sole traders and partners are personally liable for debts. Shareholders in a Ltd or PLC can only lose what they invested." },
          { type: "match", q: "Match each legal structure to its description.", pairs: [["Sole trader", "One owner, easy to set up, unlimited liability"], ["Partnership", "Typically 2 to 20 owners who share responsibility"], ["Private limited company", "Shares sold privately, must register with Companies House"], ["Public limited company", "Shares sold to the public, minimum £50,000 share capital"], ["Franchise", "Licence to sell an established brand or business idea"], ["Charity", "Not-for-profit, registered with the Charity Commission"]], explanation: "" },
          { type: "multi", q: "Select all the features of a co-operative.", options: ["Owned and controlled by its members", "Profits and losses shared among members", "Can be a consumer, worker or producer co-operative", "Shares sold on the stock exchange", "Owned by one person"], answers: [0, 1, 2], explanation: "Co-operatives are owned, financed and controlled by members, who share profits and losses." },
          { type: "type", q: "What is the minimum share capital for a PLC, in pounds?", accept: ["50000", "50k"], explanation: "£50,000.", placeholder: "e.g. 10000" },
          { q: "Which of the following is a key feature of a sole trader?", options: ["Limited liability", "Must register with Companies House", "Unlimited liability", "Can sell shares on the stock exchange"], answer: 2, explanation: "Sole traders have unlimited liability: they pay business debts from their own money." },
          { q: "A Private Limited Company (Ltd) can sell shares to:", options: ["Anyone on the open stock market", "Family and friends only", "The government only", "No one, shares are not permitted"], answer: 1, explanation: "A Ltd sells shares privately, not on the open market. That is what a PLC does." },
          { q: "What is the minimum share capital for a Public Limited Company (PLC)?", options: ["£10,000", "£25,000", "£50,000", "£100,000"], answer: 2, explanation: "A PLC needs at least £50,000 share capital." },
          { q: "In a partnership, how many people typically own the business?", options: ["1", "2 to 20", "2 to 50", "Unlimited"], answer: 1, explanation: "A partnership is typically owned by 2 to 20 people." },
          { q: "A franchise is a business where the ______ grants a licence to the ______ to sell the brand or business idea.", options: ["franchisee / franchisor", "franchisor / franchisee", "shareholder / director", "partner / sole trader"], answer: 1, explanation: "The franchisor owns the brand and grants the licence. The franchisee buys it." },
          { q: "A ______ is a type of not-for-profit organisation that must be registered with the Charity Commission.", options: ["co-operative", "charity", "franchise", "partnership"], answer: 1, explanation: "Charities register with the Charity Commission." },
          { q: "In a sole trader business, the owner has ______ liability, meaning they must pay the business's debts from their own personal funds.", options: ["limited", "unlimited", "shared", "no"], answer: 1, explanation: "Unlimited liability puts the owner's personal assets at risk." },
          { q: "Which is a disadvantage of a Public Limited Company (PLC)?", options: ["Unlimited liability for shareholders", "Risk of takeover if enough shareholders buy shares", "Cannot raise money from shares", "Must be run by volunteers"], answer: 1, explanation: "Because anyone can buy PLC shares, someone can buy enough to take control." },
          { q: "Which is an advantage of buying a franchise?", options: ["No start-up costs", "Complete freedom over marketing", "The brand is already well known and recognised", "Limited liability is guaranteed"], answer: 2, explanation: "The brand is already known. Disadvantages include initial costs and following the franchisor's marketing rules." },
          { q: "Which is a disadvantage of a partnership?", options: ["Limited liability", "Unlimited liability: all partners are responsible for debts", "Must have a minimum of £50,000 share capital", "Shares are sold on the stock exchange"], answer: 1, explanation: "Partners share unlimited liability for the business's debts." }
        ],
        practice: [
          { q: "Give the missing advantage or disadvantage for each structure: sole trader (disadvantage), partnership (advantage), Ltd (disadvantage), PLC (advantage), franchise (disadvantage), charity (advantage).", marks: 6, answer: "1 mark each, for example:\n- Sole trader disadvantage: can be difficult to grow; unlimited liability.\n- Partnership advantage: greater capital investment; shared responsibility.\n- Ltd disadvantage: costly to set up; must register with Companies House.\n- PLC advantage: greater capital investment; bigger public image.\n- Franchise disadvantage: initial costs are not cheap; must follow the franchisor's marketing rules.\n- Charity advantage: separate legal identity; limited liability if a CIO; tax relief benefits." },
          { q: "Explain the difference between limited liability and unlimited liability.", marks: 2, answer: "Limited liability: owners can only lose the money they have invested; personal assets are not at risk.\n\nUnlimited liability: the owner must pay all business debts from personal funds if the business cannot cover them." },
          { q: "Describe three features of a co-operative.", marks: 3, answer: "Any three from:\n- an association of like-minded people working voluntarily\n- ownership, finance and control are in the hands of members\n- profits and losses are shared among members\n- three types: consumer, worker and producer co-operatives" },
          { q: "A group of three friends want to start a catering business together. Evaluate whether they should set up as a partnership or a private limited company (Ltd). Justify your recommendation.", marks: 6, answer: "Partnership: shared responsibility, more capital, shared skills, but unlimited liability and potential conflict.\n\nLtd: limited liability, professional image, but more complex to set up and must publish accounts.\n\nRecommendation should be justified (Ltd recommended for protection from liability). Award up to 3 marks each side plus conclusion." }
        ]
      },
      {
        id: "1.5",
        title: "1.5 Objectives and strategies",
        summary: "Aims and objectives, SMART, SWOT, PDCA and KPIs.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "An aim is a large, general goal (e.g. become market leader). An objective is a precise, measurable step towards the aim (e.g. increase market share by 5% in one year).\n\nSMART: Specific, Measurable, Achievable, Relevant, Timebound.\n\nLong-term objectives cover five to ten years.\n\nSWOT analysis: Strengths, Weaknesses, Opportunities, Threats. PDCA: Plan, Do, Check, Act.\n\nFunctional objectives guide departments to achieve corporate objectives and are based on KPIs. KPIs are reviewed at intervals.\n\nDeveloping a strategy: analyse the organisation using PESTLE, create operational plans for short-term goals, create a business plan with 6-month to 1-year targets, create a strategic plan for overall long-term direction."
          },
          WORKBOOK
        ],
        cards: [
          ["Aim", "A large, general goal, e.g. become market leader."],
          ["Objective", "A precise, measurable step towards an aim, e.g. increase market share by 5% in one year."],
          ["SMART", "Specific, Measurable, Achievable, Relevant, Timebound."],
          ["SWOT", "Strengths, Weaknesses, Opportunities, Threats."],
          ["PESTLE", "Political, Economic, Social, Technological, Legal, Environmental: used to analyse the organisation's environment."],
          ["PDCA", "Plan, Do, Check, Act."],
          ["Functional objectives", "Departmental objectives that help achieve corporate objectives; based on KPIs."],
          ["Long-term objective", "Covers five to ten years."]
        ],
        questions: [
          { type: "order", q: "Put the words of SMART in order.", items: ["Specific", "Measurable", "Achievable", "Relevant", "Timebound"], explanation: "" },
          { type: "order", q: "Put the four steps of developing a business strategy in order.", items: ["Analyse the organisation using PESTLE", "Create operational plans for short-term goals", "Create a business plan with 6-month to 1-year targets", "Create a strategic plan for long-term direction"], explanation: "" },
          { type: "sort", q: "Is each one an aim or an objective?", categories: ["Aim", "Objective"], items: [["Become market leader", 0], ["Be the most trusted brand in the UK", 0], ["Increase market share by 5% in one year", 1], ["Cut costs by 10% by December", 1]], explanation: "Aims are broad goals. Objectives are precise, measurable steps towards them." },
          { type: "type", q: "A ______ analysis looks at Strengths, Weaknesses, Opportunities and Threats.", accept: ["swot"], explanation: "SWOT." },
          { q: "What does SMART stand for in relation to objectives?", options: ["Specific, Measurable, Achievable, Relevant, Timebound", "Simple, Manageable, Achievable, Realistic, Timed", "Specific, Monitored, Appropriate, Realistic, Targeted", "Structured, Measurable, Agreed, Reviewed, Timed"], answer: 0, explanation: "Specific, Measurable, Achievable, Relevant, Timebound." },
          { q: "A long-term objective covers a time period of:", options: ["Up to one year", "One to three years", "Up to five years", "Five to ten years"], answer: 3, explanation: "Long-term objectives cover five to ten years." },
          { q: "What does PDCA stand for in business strategy?", options: ["Plan, Define, Check, Act", "Plan, Do, Check, Act", "Prepare, Deliver, Control, Assess", "Plan, Develop, Create, Analyse"], answer: 1, explanation: "Plan, Do, Check, Act." },
          { q: "A ______ analysis examines Strengths, Weaknesses, Opportunities and Threats.", options: ["PESTLE", "SWOT", "SMART", "PDCA"], answer: 1, explanation: "SWOT = Strengths, Weaknesses, Opportunities, Threats." },
          { q: "______ objectives guide departments to achieve corporate objectives and are based on KPIs.", options: ["Strategic", "Functional", "Personal", "Mission"], answer: 1, explanation: "Functional (departmental) objectives support corporate objectives." },
          { q: "Key Performance Indicators (KPIs) are reviewed at ______ to see if they have been achieved.", options: ["the end of the business's life", "intervals", "random", "the start only"], answer: 1, explanation: "KPIs are reviewed at regular intervals." },
          { q: "'Increase sales.' Which SMART elements are missing?", options: ["Only Relevant", "Specific, Measurable and Timebound", "Only Achievable", "None, it is SMART"], answer: 1, explanation: "It doesn't say how much, so it isn't specific or measurable, and there's no deadline." },
          { q: "'Build brand awareness over the next year, even if that seems impossible given current budget constraints.' Which SMART element is weak?", options: ["Specific", "Achievable", "Timebound", "Relevant"], answer: 1, explanation: "If the budget makes it impossible, it isn't achievable." },
          { q: "'Release one new product press release.' Which SMART element is missing?", options: ["Measurable", "Specific", "Timebound", "Relevant"], answer: 2, explanation: "There is no deadline, so it isn't timebound." },
          { q: "'Reduce staff sickness by 50% within six months.' According to the workbook, which SMART element is missing?", options: ["Specific", "Measurable", "Timebound", "None, it is fully SMART"], answer: 3, explanation: "It has a measurable target and a deadline. The workbook accepts it as fully SMART." }
        ],
        practice: [
          { q: "Explain the difference between an aim and an objective.", marks: 2, answer: "An aim is a large, general goal the business intends to achieve (e.g. become market leader).\n\nAn objective is a precise, measurable step designed to achieve the aim (e.g. increase market share by 5% in one year)." },
          { q: "Describe the four steps involved in developing a business strategy.", marks: 3, answer: "1 mark per step, max 3:\n- Analyse the organisation using PESTLE.\n- Create operational plans for short-term goals.\n- Create a business plan with 6-month to 1-year targets.\n- Create a strategic plan with a longer time frame, focusing on overall direction." },
          { q: "A supermarket chain wants to reduce staff turnover. Write a SMART objective for this goal and explain why each element is important.", marks: 4, suggested: true, answer: "Example: 'Reduce annual staff turnover from 30% to 20% across all stores within 12 months.'\n\n- Specific: says exactly what (staff turnover) and where (all stores), so everyone knows the target.\n- Measurable: 30% to 20% can be tracked using HR data.\n- Achievable: a 10-point cut is realistic with the right actions, so staff stay motivated.\n- Relevant: lower turnover cuts recruitment and training costs, which supports business aims.\n- Timebound: 12 months gives a deadline for review.\n\nUp to 1 mark for a SMART objective and up to 3 for explaining the elements." }
        ]
      },
      {
        id: "1.6",
        title: "1.6 Governance",
        summary: "Good governance, internal and external audits, public versus private sector governance.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Seven common characteristics of good governance shared by public and private sectors: diversity, honesty, independence, integrity, prudence, sustainability, transparency.\n\nInternal audit: broad scope covering all risk; assesses key risks; advisory role; reports to the audit committee; report shared with management.\n\nExternal audit: scope set by statute and company law; reports on the truth and fairness of financial statements; adds value and credibility to the financials; reports to shareholders and the board via the AGM; report shared with shareholders and the public."
          },
          WORKBOOK
        ],
        cards: [
          ["Governance", "How an organisation is directed and controlled, and how it is held to account."],
          ["Seven characteristics of good governance", "Diversity, honesty, independence, integrity, prudence, sustainability, transparency."],
          ["Internal audit", "Broad scope, assesses key risks, advisory; reports to the audit committee."],
          ["External audit", "Scope set by law; reports on whether the financial statements are true and fair; reports to shareholders at the AGM."],
          ["AGM", "Annual General Meeting, where the board reports to shareholders."],
          ["Prudence", "Being careful and avoiding unnecessary risk, especially with money."],
          ["Transparency", "Being open about decisions and performance."]
        ],
        questions: [
          { type: "multi", q: "Select the seven common characteristics of good governance.", options: ["Diversity", "Honesty", "Independence", "Integrity", "Prudence", "Sustainability", "Transparency", "Profitability", "Secrecy", "Growth"], answers: [0, 1, 2, 3, 4, 5, 6], explanation: "Diversity, honesty, independence, integrity, prudence, sustainability, transparency." },
          { type: "sort", q: "Does each statement describe an internal or an external audit?", categories: ["Internal", "External"], items: [["Reports to the audit committee", 0], ["Advisory role", 0], ["Broad scope covering all risk", 0], ["Reports to shareholders at the AGM", 1], ["Scope set by statute and company law", 1], ["Report shared with the public", 1]], explanation: "" },
          { q: "An internal audit reports to:", options: ["The shareholders", "The audit committee", "The general public", "The Financial Conduct Authority"], answer: 1, explanation: "Internal audits report to the audit committee. External audits report to shareholders." },
          { q: "Which of the following is NOT a common characteristic of good governance shared by public and private sectors?", options: ["Transparency", "Profitability", "Integrity", "Accountability"], answer: 1, explanation: "Profit is not a governance principle, and public sector bodies do not aim for profit." },
          { q: "Which of these is one of the seven characteristics of good governance?", options: ["Prudence", "Growth", "Secrecy", "Market share"], answer: 0, explanation: "The seven: diversity, honesty, independence, integrity, prudence, sustainability, transparency." },
          { q: "Who does an external audit report to?", options: ["The audit committee only", "Shareholders and the board, via the AGM", "Line managers", "HMRC only"], answer: 1, explanation: "External audits report to shareholders and the board at the AGM." },
          { q: "What is the main objective of an external audit?", options: ["To give advice on day-to-day risks", "To report on the truth and fairness of the financial statements", "To set staff targets", "To write the business plan"], answer: 1, explanation: "External auditors report on whether the financial statements are true and fair." },
          { q: "What is the role of internal auditors?", options: ["Advisory", "Enforcing the law", "Publishing accounts to the public", "Setting tax rates"], answer: 0, explanation: "Internal auditors play an advisory role, assessing key risks." },
          { q: "The scope of an external audit is:", options: ["Broad, covering all risk", "Specified by statute and company law", "Decided by the marketing team", "Unlimited"], answer: 1, explanation: "External audit scope is set by statute and company law. Internal audit scope is broad." }
        ],
        practice: [
          { q: "State the seven common characteristics of good governance shared by both sectors.", marks: 2, answer: "Diversity, honesty, independence, integrity, prudence, sustainability, transparency." },
          { q: "Describe three differences between governance in the public sector and the private sector.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- Accountability: public sector is accountable to government and taxpayers; private sector to owners and shareholders.\n- Purpose: public sector governance focuses on value for public money and service quality; private sector on profit and shareholder value.\n- Rules: public sector follows government codes and civil service standards; private companies follow company law and, for listed PLCs, the UK Corporate Governance Code.\n- Scrutiny: public sector faces public and political scrutiny and may change with a new government; private sector reports to its board and at the AGM." },
          { q: "Explain why good governance is important for a large public limited company (PLC).", marks: 4, suggested: true, answer: "Up to 4 marks for developed points, for example:\n- Shareholders and investors need confidence that directors act in their interests, which helps keep the share price stable and makes it easier to raise finance.\n- PLCs are legally required to publish audited accounts; good governance ensures compliance and avoids fines.\n- Clear controls and independent audits reduce the risk of fraud and mismanagement.\n- Transparency protects reputation with customers, employees and the public." }
        ]
      },
      {
        id: "1.7",
        title: "1.7 Legislation and regulation",
        summary: "GDPR, Equality Act, Health and Safety at Work Act, Competition Act, Trade Descriptions Act, Bribery Act.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "GDPR: protects personal data and gives individuals rights over their information. Enforced by the Information Commissioner's Office (ICO). Data must be kept securely and not for longer than required.\n\nEquality Act 2010: nine protected characteristics (age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation). Direct discrimination: treated less favourably because of a protected characteristic. Indirect discrimination: a policy applies equally to everyone but has a worse effect on people who share a protected characteristic.\n\nHealth and Safety at Work Act 1974: employers must carry out risk assessments and provide safe equipment. Six main provisions. Enforced by the Health and Safety Executive (HSE).\n\nCompetition Act 1998: prohibits anti-competitive agreements and abuse of a dominant position.\n\nTrade Descriptions Act 1968: products and services must be accurately described.\n\nBribery Act 2010: giving someone a financial advantage to act improperly is a criminal offence."
          },
          WORKBOOK
        ],
        cards: [
          ["GDPR", "Protects personal data; it must be kept securely and not for longer than needed. Enforced by the ICO."],
          ["ICO", "Information Commissioner's Office: enforces data protection law."],
          ["Equality Act 2010", "Protects against discrimination based on nine protected characteristics."],
          ["Direct discrimination", "Treating someone less favourably because of a protected characteristic."],
          ["Indirect discrimination", "A policy that applies to everyone but has a worse effect on people who share a protected characteristic."],
          ["Health and Safety at Work Act 1974", "Employers must keep people safe, e.g. risk assessments and safe equipment. Enforced by the HSE."],
          ["Competition Act 1998", "Prohibits anti-competitive agreements and abuse of a dominant position."],
          ["Trade Descriptions Act 1968", "Products and services must be described accurately."],
          ["Bribery Act 2010", "Giving someone a financial advantage to act improperly is a criminal offence."],
          ["Consumer Rights Act 2015", "Goods must be satisfactory quality, fit for purpose and as described; 30-day right to reject."]
        ],
        questions: [
          { type: "match", q: "Match each law to what it does.", pairs: [["GDPR", "Protects personal data and gives individuals rights over it"], ["Equality Act 2010", "Covers nine protected characteristics"], ["Health and Safety at Work Act 1974", "Risk assessments and safe equipment"], ["Competition Act 1998", "Bans anti-competitive agreements and abuse of a dominant position"], ["Trade Descriptions Act 1968", "Products and services must be accurately described"], ["Bribery Act 2010", "Offering a financial advantage to act improperly is a crime"]], explanation: "" },
          { type: "multi", q: "Select all nine protected characteristics under the Equality Act 2010.", options: ["Age", "Disability", "Gender reassignment", "Marriage and civil partnership", "Pregnancy and maternity", "Race", "Religion or belief", "Sex", "Sexual orientation", "Height", "Social class", "Political party"], answers: [0, 1, 2, 3, 4, 5, 6, 7, 8], explanation: "Height, social class and political party are not protected characteristics." },
          { type: "sort", q: "Is each example direct or indirect discrimination?", categories: ["Direct", "Indirect"], items: [["Refusing to hire someone because of their religion", 0], ["Paying a woman less than a man for the same job", 0], ["A rule that everyone must work Saturdays, which disadvantages people of some religions", 1], ["Requiring all office staff to be over 6ft tall", 1]], explanation: "Direct: treated less favourably because of a characteristic. Indirect: a rule that applies to all but hits one group harder." },
          { type: "type", q: "Which organisation enforces GDPR? Give its initials.", accept: ["ico", "information commissioners office"], explanation: "The Information Commissioner's Office (ICO)." },
          { q: "The General Data Protection Regulation (GDPR) is enforced by:", options: ["The Competition and Markets Authority", "The Information Commissioner's Office (ICO)", "The Serious Fraud Office", "The Equality and Human Rights Commission"], answer: 1, explanation: "The ICO enforces data protection law." },
          { q: "The Equality Act 2010 is based on how many protected characteristics?", options: ["Six", "Seven", "Eight", "Nine"], answer: 3, explanation: "There are nine protected characteristics." },
          { q: "The Health and Safety at Work Act requires employers to provide how many main provisions?", options: ["Four", "Five", "Six", "Seven"], answer: 2, explanation: "The workbook gives six main provisions." },
          { q: "Which law protects personal data and gives individuals rights over their information?", options: ["Trade Descriptions Act 1968", "GDPR", "Competition Act 1998", "Bribery Act 2010"], answer: 1, explanation: "GDPR covers personal data." },
          { q: "Which law covers nine protected characteristics including age, race and disability?", options: ["Equality Act 2010", "Health and Safety at Work Act 1974", "GDPR", "Competition Act 1998"], answer: 0, explanation: "The Equality Act 2010." },
          { q: "Which law requires employers to carry out risk assessments and provide safe equipment?", options: ["Bribery Act 2010", "Equality Act 2010", "Health and Safety at Work Act 1974", "Trade Descriptions Act 1968"], answer: 2, explanation: "The Health and Safety at Work Act 1974." },
          { q: "Which law prohibits anti-competitive agreements and abuse of a dominant position?", options: ["Competition Act 1998", "Trade Descriptions Act 1968", "GDPR", "Equality Act 2010"], answer: 0, explanation: "The Competition Act 1998." },
          { q: "Which law ensures businesses provide accurate descriptions of products and services?", options: ["Bribery Act 2010", "Trade Descriptions Act 1968", "Competition Act 1998", "Health and Safety at Work Act 1974"], answer: 1, explanation: "The Trade Descriptions Act 1968." },
          { q: "Which law makes giving someone a financial advantage to act improperly a criminal offence?", options: ["Competition Act 1998", "GDPR", "Bribery Act 2010", "Trade Descriptions Act 1968"], answer: 2, explanation: "The Bribery Act 2010." },
          { q: "Under GDPR, data must be kept ______ and not for longer than required.", options: ["publicly", "securely", "on paper", "forever"], answer: 1, explanation: "Data must be kept securely, up to date, and not longer than required." },
          { q: "______ discrimination occurs when a policy applies equally to everyone but has a worse effect on people who share a protected characteristic.", options: ["Direct", "Indirect", "Positive", "Associative"], answer: 1, explanation: "That is indirect discrimination." },
          { q: "The ______ is the regulatory body for enforcing the Health and Safety at Work Act.", options: ["ICO", "Health and Safety Executive (HSE)", "Charity Commission", "Competition and Markets Authority"], answer: 1, explanation: "The HSE enforces health and safety law." }
        ],
        practice: [
          { q: "Explain the difference between direct discrimination and indirect discrimination under the Equality Act 2010.", marks: 2, answer: "Direct discrimination: when a person is treated less favourably than someone else because of a protected characteristic.\n\nIndirect discrimination: when a policy or practice applies equally to everyone but has a worse effect on people who share a protected characteristic." },
          { q: "Describe three rights a consumer has under the Consumer Rights Act 2015.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- Goods must be of satisfactory quality.\n- Goods must be fit for purpose.\n- Goods must be as described.\n- The right to reject faulty goods for a full refund within 30 days.\n- After 30 days, the right to a repair or replacement.\n- Services must be carried out with reasonable care and skill." },
          { q: "A business has been found to be collecting customer data without a clear purpose and storing it indefinitely. Analyse the consequences of this for the business, with reference to relevant legislation.", marks: 6, suggested: true, answer: "Points to develop:\n- This breaches GDPR / the Data Protection Act 2018: data must be collected for a specified purpose and not kept longer than necessary.\n- The ICO can investigate, order the business to stop processing or delete data, and issue large fines.\n- Customers can complain or claim compensation.\n- Reputational damage: loss of customer trust and sales, especially if a data breach becomes public.\n- Costs of fixing systems, training staff and possibly appointing a data protection officer.\n\nFull marks need developed consequences linked to the legislation and a judgement on the most serious." }
        ]
      },
      {
        id: "1.8",
        title: "1.8 Stakeholders and customers",
        summary: "Internal and external stakeholders, their interests and conflicts.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "A stakeholder is any individual or group with an interest in the business, such as employees, customers, suppliers, investors and shareholders. Their actions and needs directly affect the business's decisions and operations.\n\nInternal stakeholders (workbook): employees and managers.\n\nExternal stakeholders (workbook): customers, shareholders, suppliers, local community, government, finance providers.\n\nShareholders want to know their investment is safe and what their dividend will be. Stakeholder needs can conflict, for example a new store may bring jobs for the community but more traffic for local residents."
          },
          WORKBOOK
        ],
        cards: [
          ["Stakeholder", "Any individual or group with an interest in the business."],
          ["Internal stakeholder", "Inside the business, e.g. employees and managers."],
          ["External stakeholder", "Outside the business, e.g. customers, suppliers, government, local community, finance providers."],
          ["Shareholder's interest", "That their investment is safe and what their dividend will be."],
          ["Stakeholder conflict", "When stakeholders want different things, e.g. shareholders want growth but residents don't want a new store's traffic."]
        ],
        questions: [
          { type: "sort", q: "Is each one an internal or external stakeholder?", categories: ["Internal", "External"], items: [["Employees", 0], ["Managers", 0], ["Customers", 1], ["Suppliers", 1], ["Local community", 1], ["Government", 1], ["Finance providers", 1]], explanation: "" },
          { type: "match", q: "Match each stakeholder to its main interest.", pairs: [["Shareholders", "A safe investment and a good dividend"], ["Employees", "Job security and fair pay"], ["Customers", "Quality products at fair prices"], ["Suppliers", "Being paid on time and repeat orders"], ["Government", "Tax revenue and legal compliance"], ["Local community", "Local jobs and limited noise and pollution"]], explanation: "" },
          { q: "Which of the following is an INTERNAL stakeholder?", options: ["Customers", "Suppliers", "Employees", "Local community"], answer: 2, explanation: "Employees work inside the business." },
          { q: "Why are shareholders interested in a business?", options: ["They want to ensure products are safe for the public", "They want to ensure their share investment is safe and know their dividend", "They need to check compliance with legislation", "They want to ensure the business can pay its bills"], answer: 1, explanation: "Shareholders care about the safety of their investment and their dividend." },
          { q: "Managers are which type of stakeholder?", options: ["Internal", "External"], answer: 0, explanation: "Managers work inside the business, so they are internal." },
          { q: "Suppliers are which type of stakeholder?", options: ["Internal", "External"], answer: 1, explanation: "Suppliers are outside the business." },
          { q: "The government is which type of stakeholder?", options: ["Internal", "External"], answer: 1, explanation: "Government is external." },
          { q: "Finance providers, such as banks, are which type of stakeholder?", options: ["Internal", "External"], answer: 1, explanation: "Finance providers are external." }
        ],
        practice: [
          { q: "Define the term 'stakeholder' and explain why stakeholders are important to a business.", marks: 2, answer: "A stakeholder is any individual or group who has an interest in the company (e.g. employees, customers, suppliers, investors, shareholders).\n\nStakeholders are important because their actions and needs directly affect the business's decisions and operations." },
          { q: "Explain why three different external stakeholders have an interest in how a business performs.", marks: 3, suggested: true, answer: "1 mark each, for example:\n- Customers: want good quality products at fair prices and good service.\n- Suppliers: want to keep selling to the business and to be paid on time.\n- Government: wants tax revenue, jobs and legal compliance.\n- Finance providers: want loans repaid with interest.\n- Local community: wants jobs, and limited noise, traffic and pollution." },
          { q: "A supermarket chain is planning to open a new large store in a small town. Analyse how two different stakeholders might be affected by this decision, and explain how their needs could conflict.", marks: 4, suggested: true, answer: "Example:\n- Local community: new jobs and more choice, but more traffic, noise and possible harm to small local shops.\n- Shareholders: expect higher revenue and dividends from the new store.\n- Conflict: shareholders want the store to open and grow profit; residents and local shop owners may oppose it because of congestion and lost trade.\n\n1 mark for each stakeholder identified and developed, plus marks for explaining the conflict." }
        ]
      },
      {
        id: "1.9",
        title: "1.9 Digital technologies",
        summary: "Big Data, IoT, AI, robotics, cloud, biometrics, cyber security and Industry 4.0.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Big Data: large and diverse sets of information summarised by volume, velocity, variety and veracity.\n\nIoT: Internet of Things. Robotics: machines performing tasks previously done by humans.\n\nA cyber attack has four stages: Survey, Delivery, Breach, Affect.\n\nDigitisation: converting text, pictures or sound into a digital form a computer can process.\nDigitalisation: using digital tools and technology to add value and generate revenue.\nTransformation: operating differently through new business designs using technology.\nCloud-based software: stored and run from the internet rather than the business's own network.\nBiometrics: automated recognition of people from biological and behavioural characteristics.\nHybrid infrastructure: a mix of public and private cloud with on-premises data centres."
          },
          WORKBOOK
        ],
        cards: [
          ["Big Data", "Large, diverse sets of information described by volume, velocity, variety and veracity."],
          ["IoT", "Internet of Things: everyday devices connected to the internet."],
          ["Robotics", "Machines performing tasks previously done by humans."],
          ["AI", "Artificial intelligence: computer systems doing tasks that normally need human thinking."],
          ["Cloud-based software", "Software stored and run from the internet rather than the business's own network."],
          ["Biometrics", "Automated recognition of people from biological and behavioural characteristics."],
          ["Digitisation", "Converting text, pictures or sound into a digital form."],
          ["Digitalisation", "Using digital tools and technology to add value and generate revenue."],
          ["Cyber attack stages", "Survey, Delivery, Breach, Affect."],
          ["Industry 4.0", "The fourth industrial revolution: AI, robotics, IoT and data combining to change how businesses work."]
        ],
        questions: [
          { type: "order", q: "Put the four stages of a cyber attack in order.", items: ["Survey", "Delivery", "Breach", "Affect"], explanation: "" },
          { type: "match", q: "Match each technology term to its definition.", pairs: [["Digitisation", "Converting text, pictures or sound into digital form"], ["Digitalisation", "Using digital tools to add value and generate revenue"], ["Transformation", "Operating differently through new technology-led business designs"], ["Cloud-based software", "Software run from the internet, not the business's own network"], ["Biometrics", "Recognising people from biological and behavioural characteristics"], ["Hybrid infrastructure", "Public and private cloud combined with on-premises data centres"]], explanation: "" },
          { type: "multi", q: "Select the four Vs that describe Big Data.", options: ["Volume", "Velocity", "Variety", "Veracity", "Vision", "Version"], answers: [0, 1, 2, 3], explanation: "" },
          { type: "type", q: "Write out what IoT stands for.", accept: ["internet of things"], explanation: "Internet of Things." },
          { q: "Which of the following best describes 'Big Data'?", options: ["A type of cloud storage system", "Large and diverse sets of information summarised by volume, velocity, variety and veracity", "A software tool used to analyse customer data", "A form of artificial intelligence"], answer: 1, explanation: "Big Data is described by the four Vs: volume, velocity, variety, veracity." },
          { q: "What does IoT stand for?", options: ["Integration of Technology", "Internet of Things", "Impact of Transformation", "Industry of Technology"], answer: 1, explanation: "Internet of Things: everyday devices connected to the internet." },
          { q: "Which technology involves machines performing tasks previously completed by humans?", options: ["Cloud computing", "Biometrics", "Robotics", "5G"], answer: 2, explanation: "Robotics." },
          { q: "A cyber attack passes through which four stages in order?", options: ["Survey, Breach, Delivery, Affect", "Delivery, Survey, Breach, Affect", "Survey, Delivery, Breach, Affect", "Breach, Survey, Delivery, Affect"], answer: 2, explanation: "Survey, Delivery, Breach, Affect." },
          { q: "Conversion of text, pictures or sound into a digital form a computer can process is called:", options: ["Digitisation", "Digitalisation", "Transformation", "Biometrics"], answer: 0, explanation: "Digitisation is the conversion itself. Digitalisation is using digital tools to add value." },
          { q: "Using digital tools and technology to add value and generate revenue is called:", options: ["Digitisation", "Digitalisation", "Hybrid infrastructure", "Robotics"], answer: 1, explanation: "Digitalisation." },
          { q: "Operating differently through new business designs using technology is called:", options: ["Transformation", "Digitisation", "Cloud-based software", "Biometrics"], answer: 0, explanation: "Digital transformation." },
          { q: "Software stored and run from the internet rather than on a business's own network is:", options: ["Hybrid infrastructure", "Cloud-based software", "Digitisation", "IoT"], answer: 1, explanation: "Cloud-based software." },
          { q: "Automated recognition of individuals based on biological and behavioural characteristics is:", options: ["Robotics", "Big Data", "Biometrics", "Digitalisation"], answer: 2, explanation: "Biometrics, e.g. fingerprint or face recognition." },
          { q: "A mix of public and private cloud storage with on-premises data centres is called:", options: ["Hybrid infrastructure", "Cloud-based software", "Transformation", "Digitisation"], answer: 0, explanation: "Hybrid infrastructure." }
        ],
        practice: [
          { q: "Explain two advantages of a business using cloud-based software.", marks: 2, suggested: true, answer: "Any two, 1 mark each:\n- Staff can access files and software from anywhere with an internet connection, which supports remote and hybrid working.\n- Lower upfront costs: no need to buy and maintain servers; pay by subscription.\n- Automatic updates and backups reduce the risk of losing data.\n- Easy to scale up or down as the business grows." },
          { q: "Describe one advantage, one disadvantage, and one impact of a business using Artificial Intelligence (AI).", marks: 3, suggested: true, answer: "1 mark each, for example:\n- Advantage: automates routine tasks (e.g. chatbots answering customer queries 24/7), saving time and cost.\n- Disadvantage: expensive to set up and may make mistakes or show bias; raises data privacy concerns.\n- Impact: changes job roles, with some jobs lost and new skills needed, so staff need retraining." },
          { q: "Explain what is meant by the 'fourth industrial revolution' (4IR or Industry 4.0).", marks: 2, suggested: true, answer: "The current period of change in which digital, physical and biological technologies combine (1), for example AI, robotics, the Internet of Things, Big Data and cloud computing, changing how businesses operate and how people work (1)." },
          { q: "A logistics company is considering introducing robotics into its warehouse operations. Evaluate the potential advantages and disadvantages of this decision for the business and its workforce.", marks: 6, answer: "Advantages: increased production at lower costs; improved quality assurance; removes human error.\n\nDisadvantages: threat of job losses; need to hire skilled staff to program robots; maintenance costs.\n\nDevelopment: need for retraining; flatter structure; a human element is still required.\n\nAward up to 3 marks per side, with evaluation and conclusion for full marks." }
        ]
      },
      {
        id: "1.10",
        title: "1.10 Culture and values",
        summary: "Organisational culture and values, hybrid working, and managing culture change.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Organisational culture: the expectations and practices that guide and inform the actions of individuals who work for a business.\n\nOrganisational values: the core beliefs of a business that act as guiding principles. Culture and values are not the same thing: values guide purpose; culture is the expectations and practices within the business.\n\nA strong culture promotes greater commitment from staff. A weak culture leads to lower commitment and loyalty, and high staff turnover.\n\nExternal culture is reinforced through things like mission statements on the website. Internal branding reinforces internal culture.\n\nHybrid working: some time at home and some in the office. It was not common before the COVID-19 pandemic.\n\nResistance to change can lead to strikes and work-to-rule."
          },
          WORKBOOK
        ],
        cards: [
          ["Organisational culture", "The expectations and practices that guide how people in a business act."],
          ["Organisational values", "The core beliefs of a business that act as guiding principles."],
          ["Strong culture", "Promotes greater commitment from staff."],
          ["Weak culture", "Lower commitment and loyalty, and high staff turnover."],
          ["Hybrid working", "Spending some time working at home and some in the office."],
          ["Resistance to change", "Staff opposing change; can lead to strikes and work-to-rule."],
          ["Internal branding", "Reinforces internal culture among staff."]
        ],
        questions: [
          { type: "sort", q: "Does each one reinforce internal or external culture?", categories: ["Internal", "External"], items: [["Staff training sessions", 0], ["Internal newsletters", 0], ["Team meetings", 0], ["Internal branding", 0], ["Mission statement on the company website", 1], ["Social media posts about the company's values", 1]], explanation: "" },
          { type: "type", q: "Working partly at home and partly in the office is called ______ working.", accept: ["hybrid"], explanation: "Hybrid working." },
          { q: "Organisational culture is best described as:", options: ["The financial targets set by managers for departments", "The expectations and practices that guide and inform the actions of individuals who work for a business", "The legal requirements a business must meet", "The marketing strategy used to promote a business to customers"], answer: 1, explanation: "Culture is the expectations and practices that guide how people act at work." },
          { q: "Which of the following is an example of reinforcing EXTERNAL culture?", options: ["Staff training sessions", "Internal newsletters", "Mission statements on the company website", "Team meetings"], answer: 2, explanation: "A website faces the public. The others are internal." },
          { q: "Organisational ______ are the main core beliefs of a business that act as guiding principles.", options: ["objectives", "values", "policies", "KPIs"], answer: 1, explanation: "Values are core beliefs and guiding principles." },
          { q: "______ working is when employees spend some time at home and some time in the office.", options: ["Flexi", "Hybrid", "Remote", "Shift"], answer: 1, explanation: "Hybrid working mixes home and office." },
          { q: "If organisational culture is weak, employees are likely to have lower levels of ______ and high staff turnover.", options: ["commitment and loyalty", "pay and holiday", "stress and absence", "training and skills"], answer: 0, explanation: "Weak culture means lower commitment and loyalty." },
          { q: "True or false: culture and values are the same thing.", options: ["True", "False"], answer: 1, explanation: "False. Values guide purpose; culture is the expectations and practices within the business." },
          { q: "True or false: a strong culture promotes greater commitment from staff.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: values guide a business's purpose; culture is based on the expectations and practices within the business.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: resistance to change can lead to strikes and work-to-rule.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: hybrid working was common before the COVID-19 pandemic.", options: ["True", "False"], answer: 1, explanation: "False. It became common because of the pandemic." },
          { q: "True or false: internal branding is a way of reinforcing external culture.", options: ["True", "False"], answer: 1, explanation: "False. Internal branding reinforces internal culture." }
        ],
        practice: [
          { q: "Explain why it is important for managers to understand organisational culture.", marks: 2, suggested: true, answer: "Culture shapes how staff behave and make decisions (1), so managers who understand it can lead in a way that fits, keep staff motivated and committed, and plan changes that staff will accept rather than resist (1)." },
          { q: "Describe three steps a business should take when managing a change in culture.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- Explain clearly why the change is needed and what the new culture looks like.\n- Involve and consult staff so they feel ownership and resistance is reduced.\n- Leaders model the new behaviours themselves.\n- Provide training and support.\n- Reinforce the change through rewards, recognition and internal branding.\n- Monitor and review progress, e.g. staff surveys." },
          { q: "A new CEO joins a large company and wants to change the culture to be more collaborative and transparent. Explain two barriers they might face when trying to do this.", marks: 4, suggested: true, answer: "2 marks per barrier (identify and explain), for example:\n- Resistance to change: long-serving staff are used to the old ways and may fear losing status, leading to low co-operation or even strikes or work-to-rule.\n- Size and structure: in a large company with many layers, messages are slow and distorted, so it takes a long time for the new culture to reach everyone.\n- Lack of trust: staff may doubt the CEO's commitment if past changes failed.\n- Cost and time: training and new communication systems take money and time." }
        ]
      },
      {
        id: "1.11",
        title: "1.11 Communication methods and channels",
        summary: "Choosing communication channels, formal and informal communication, and email etiquette.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Formal communication follows established management systems, structures and procedures (e.g. formal reports, presentations). Informal communication is ad hoc (e.g. brief notes, informal meet-ups).\n\nChannel richness: video conferencing is high richness. Formal reports, press releases and bulletins are lower.\n\nFactors when choosing a method: content (is it confidential?), intended audience, file size.\n\nEmail: fast and cheap, but there can be too many and they may go unread, plus virus threats.\nSocial media: increases brand awareness, but negative comments can damage reputation.\nVideo conferencing: instantaneous, but needs a good internet connection.\nIntranet: a one-stop shop for information, but needs maintaining and updating.\nMobile apps: faster sales orders, but security issues.\nVoice mail: available 24/7, but language differences.\n\nEmail etiquette: professional email address, avoid exclamation marks, spell check, avoid jargon, be careful with reply-all, reread before sending."
          },
          WORKBOOK
        ],
        cards: [
          ["Formal communication", "Follows established systems and procedures, e.g. reports, presentations."],
          ["Informal communication", "Ad hoc, e.g. brief notes, informal meet-ups."],
          ["Channel richness", "How much a channel carries (voice, face, instant feedback). Video conferencing is high; reports are low."],
          ["Choosing a method", "Consider content (is it confidential?), the audience, and file size."],
          ["Intranet", "An internal website: a one-stop shop for information, but needs maintaining."],
          ["Email etiquette", "Professional address, no exclamation marks, spell check, no jargon, careful with reply-all, reread before sending."]
        ],
        questions: [
          { type: "sort", q: "Is each one formal or informal communication?", categories: ["Formal", "Informal"], items: [["Formal report", 0], ["Presentation", 0], ["Board meeting minutes", 0], ["Brief note", 1], ["Informal meet-up", 1], ["Chat by the coffee machine", 1]], explanation: "" },
          { type: "multi", q: "Select all the rules of good email etiquette.", options: ["Use a professional email address", "Use spell check", "Avoid jargon", "Reread before sending", "Use lots of exclamation marks", "Reply-all to every email"], answers: [0, 1, 2, 3], explanation: "" },
          { type: "match", q: "Match each channel to a disadvantage.", pairs: [["Email", "There can be too many and they go unread"], ["Social media", "Negative comments can damage reputation"], ["Video conferencing", "Needs a good internet connection"], ["Intranet", "Needs maintaining and updating"], ["Mobile apps", "Security issues"], ["Voice mail", "Differences in language"]], explanation: "" },
          { q: "Which communication channel would be MOST appropriate for sharing confidential legal information with a senior manager?", options: ["Social media post", "Formal report", "Instant messaging", "Bulletin board"], answer: 1, explanation: "A formal report is controlled and suitable for confidential content." },
          { q: "Which of the following is a HIGH richness communication channel?", options: ["Formal report", "Press release", "Video conferencing", "Bulletin"], answer: 2, explanation: "Video conferencing carries voice, face and instant feedback, so it is rich." },
          { q: "A disadvantage of using email in a business is:", options: ["It cannot be personalised", "There can be too many and they may go unread", "It cannot reach large numbers of people", "It is too expensive"], answer: 1, explanation: "Email overload means messages get missed." },
          { q: "Which is a disadvantage of using social media to communicate?", options: ["It is slow", "Negative comments can damage reputation", "It only reaches staff", "It cannot carry images"], answer: 1, explanation: "Public comments can quickly harm reputation." },
          { q: "Which is an advantage of a company intranet?", options: ["It needs no maintenance", "It is a one-stop shop for information", "It is open to the public", "It replaces all meetings"], answer: 1, explanation: "An intranet gathers internal information in one place, but it needs maintaining." },
          { q: "Which is a disadvantage of video conferencing?", options: ["It is not instant", "It needs a good internet connection", "It cannot be used across regions", "It is always more expensive than travel"], answer: 1, explanation: "Poor connections ruin video calls." },
          { q: "Which is a disadvantage of mobile applications for business communication?", options: ["Security issues", "They are slower than post", "They cannot collect data", "They only work in the office"], answer: 0, explanation: "Apps on personal devices can create security risks." }
        ],
        practice: [
          { q: "Explain the difference between formal and informal communication.", marks: 2, answer: "Formal communication follows established management systems, structures and procedures (e.g. formal reports, presentations).\n\nInformal communication is ad hoc (e.g. brief notes, informal meet-ups). Both are valid in business but serve different purposes." },
          { q: "Describe three factors a business should consider when selecting an appropriate method of communication.", marks: 3, answer: "1 mark per factor:\n- Content: is it confidential?\n- Intended audience: who needs to receive it (executives, customers)?\n- File size: some methods are not appropriate for large files." },
          { q: "Describe three rules of professional etiquette when using email in a business context.", marks: 3, answer: "Any three, 1 mark each:\n- use a professional email address\n- avoid exclamation marks\n- use spell check\n- avoid jargon\n- be careful with reply-all\n- always reread before sending" },
          { q: "For each channel, give one example of content, one advantage and one disadvantage: email, social media, video conferencing, intranet.", marks: 4, answer: "Suggested answers:\n- Email: responding to customer requests / fast and cheap / virus threats.\n- Social media: product updates / increases brand awareness / negative comments can damage reputation.\n- Video conferencing: presenting stats across regions / instantaneous / needs a good internet connection.\n- Intranet: sharing performance data / one-stop shop for information / needs maintenance and updating." },
          { q: "Analyse two different forms of communication that are used in a business. Consider the advantages and disadvantages of each.", marks: 4, suggested: true, answer: "Example:\n- Email: fast, cheap, creates a written record and reaches many people at once; but can be overlooked in busy inboxes, tone can be misread, and there are virus risks.\n- Face-to-face meetings: rich communication with instant feedback and body language, good for sensitive issues; but take time to arrange, may not suit remote staff, and may leave no written record unless minutes are taken.\n\n2 marks per form: advantage and disadvantage, applied to the business." }
        ]
      }
    ]
  });
})();
