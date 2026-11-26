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
            body: "Public sector: owned and funded by the government, provides services to the public on a not-for-profit basis (e.g. NHS, BBC, armed forces).\n\nPrivate sector: owned by individuals or groups, aims to make a profit for owners or shareholders (e.g. Tesco, Barclays).\n\nVoluntary or third sector: not-for-profit, any surplus is reinvested, aims for social impact rather than profit (e.g. charities such as Oxfam, social enterprises).\n\nFunding: public sector organisations are funded mainly by taxes; private sector businesses by owners, investors and sales; voluntary organisations by donations, grants, fundraising and trading (e.g. charity shops).\n\nMain aims: public sector, providing services and value for money for taxpayers; private sector, profit and growth; voluntary sector, social aims and helping people.\n\nWhere organisations operate: locally, nationally, internationally (trading with other countries) or globally (multinationals operating in many countries)."
          },
          WORKBOOK
        ],
        cards: [
          ["Public sector", "Organisations owned and funded by the government, providing services to the public on a not-for-profit basis (e.g. NHS, BBC)."],
          ["Private sector", "Businesses owned by individuals or groups, aiming to make a profit for their owners or shareholders (e.g. Tesco)."],
          ["Voluntary (third) sector", "Not-for-profit organisations that reinvest any surplus and aim for social impact (e.g. charities, social enterprises)."],
          ["Not-for-profit", "Any surplus money is reinvested in the organisation's purpose rather than paid to owners."],
          ["Social enterprise", "An organisation in the voluntary sector that trades to achieve social aims and reinvests its surplus."],
          ["Public sector funding", "Mainly taxes."],
          ["Voluntary sector funding", "Donations, grants, fundraising and trading."],
          ["Multinational", "A business that operates in many countries."],
          ["Value for money", "A key aim in the public sector: getting the most from taxpayers' money."]
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
          { q: "The voluntary or third sector is ______ and any surplus money is reinvested.", options: ["private", "government-funded", "not-for-profit", "profit-making"], answer: 2, explanation: "Voluntary sector organisations are not-for-profit. Any surplus is reinvested." },
          { q: "A council-run leisure centre belongs to which sector?", options: ["Public", "Private", "Voluntary"], answer: 0, explanation: "It is run by local government and funded through taxes and fees." },
          { q: "A food bank run by a charity belongs to which sector?", options: ["Public", "Private", "Voluntary"], answer: 2, explanation: "" },
          { q: "A football club owned by shareholders belongs to which sector?", options: ["Public", "Private", "Voluntary"], answer: 1, explanation: "" },
          { q: "What is the MAIN aim of most private sector businesses?", options: ["Providing free services", "Making a profit", "Raising donations", "Following government policy"], answer: 1, explanation: "" },
          { q: "A public sector manager is asked to show 'value for money'. What does this mean?", options: ["Maximising profit for shareholders", "Getting the best results from taxpayers' money", "Charging the highest prices", "Raising more donations"], answer: 1, explanation: "" },
          { q: "A business with factories and offices in 30 countries is best described as:", options: ["A sole trader", "A multinational", "A local business", "A charity"], answer: 1, explanation: "" },
          { type: "sort", q: "How is each organisation mainly funded?", categories: ["Taxes", "Owners, investors and sales", "Donations and grants"], items: [["NHS hospital", 0], ["State school", 0], ["High street retailer", 1], ["Tech start-up", 1], ["Animal rescue charity", 2], ["Community food bank", 2]], explanation: "" },
          { type: "sort", q: "Where does each business mainly operate?", categories: ["Local", "National", "Global"], items: [["A village bakery", 0], ["A hairdresser with one salon", 0], ["A UK-wide supermarket chain", 1], ["A fast food brand in 100 countries", 2]], explanation: "" },
          { q: "True or false: charities can sell goods and services to raise money.", options: ["True", "False"], answer: 0, explanation: "E.g. charity shops, as long as the money goes to the cause." }
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
            body: "Size can be measured by turnover, balance sheet total and number of employees. Turnover is the value of total sales over a year.\n\nCompanies Act 2006 thresholds used in the workbook:\nMicro-entity: turnover not more than £632,000, balance sheet not more than £316,000, not more than 10 employees.\nSmall: turnover not more than £10.2m, balance sheet not more than £5.1m, not more than 50 employees.\nMedium: turnover not more than £36m, balance sheet not more than £18m, not more than 250 employees.\n\nNote: the money thresholds were raised from 6 April 2025 (micro £1m turnover and £500,000 balance sheet; small £15m and £7.5m; medium £54m and £27m). Employee limits did not change. Check with your teacher which figures your exam uses.\n\nA mission statement sets out the scope and purpose of an organisation. A vision statement looks to the future: where the organisation will be if it fulfils its mission.\n\nGrowth can cause problems with co-ordination, integration and communication.\n\nClassifying by employees (unchanged in 2025): micro up to 10, small up to 50, medium up to 250, large over 250."
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
          { q: "Using the workbook figures, what is the maximum balance sheet total for a micro-entity?", options: ["£316,000", "£632,000", "£5.1m", "£18m"], answer: 0, explanation: "Micro-entity balance sheet: not more than £316,000 (workbook figure). From April 2025 this rose to £500,000." },
          { q: "A firm has a workforce of 42. What size category is it in?", options: ["Micro", "Small", "Medium", "Large"], answer: 1, explanation: "Small is up to 50 employees. Micro is up to 10." },
          { q: "A business employs 140 people. How is it classified by size?", options: ["Micro", "Small", "Medium", "Large"], answer: 2, explanation: "Medium is up to 250 employees." },
          { q: "A business employs 7 people. How is it classified by size?", options: ["Micro", "Small", "Medium", "Large"], answer: 0, explanation: "Micro is up to 10 employees." }
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
            body: "CSR stands for Corporate Social Responsibility.\n\nCarroll's CSR pyramid, from the base up: Economic (be profitable), Legal (obey the law), Ethical (be ethical), Philanthropic (be a good corporate citizen).\n\nSustainability is the long-term maintenance of systems according to environmental, economic and social considerations.\n\nPhilanthropy is when private profits are used to benefit the wider public without the business receiving anything in return.\n\nCarbon footprint measures the greenhouse gases a business produces, in equivalent tons of CO₂.\n\nBusiness output affects UK economic growth, which is measured by Gross Domestic Product (GDP).\n\nCircular economy: keeping products and materials in use for as long as possible instead of 'take, make, throw away'. Examples: repairing, refurbishing and remanufacturing, buying back used products to resell, designing products to be recycled, renting instead of selling. Publishing a net zero target or an advert about green values is not a circular economy practice in itself."
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
          ["Business ethics", "The moral principles that guide how a business and its people behave."],
          ["Circular economy", "Keeping products and materials in use for as long as possible: repair, reuse, remanufacture, recycle."],
          ["Linear economy", "Take, make, throw away: products are used once and then discarded."]
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
          { q: "In Carroll's pyramid, which level sits directly above Legal?", options: ["Economic", "Ethical", "Philanthropic", "Nothing, Legal is the top"], answer: 1, explanation: "Economic, Legal, Ethical, Philanthropic, from bottom to top." },
          { q: "Which business activity best shows the circular economy in action?", options: ["A clothing brand publishing a target to be carbon neutral by 2040", "A phone maker taking back old handsets, refurbishing and reselling them", "A supermarket running an advert about its eco values", "A bank sponsoring a local beach clean"], answer: 1, explanation: "Taking back, refurbishing and reselling keeps products in use. Targets, adverts and sponsorship don't change how products are used." },
          { type: "sort", q: "Is each one a circular economy practice?", categories: ["Circular", "Not circular"], items: [["Furniture company repairing and reselling returned sofas", 0], ["Printer firm remanufacturing used ink cartridges", 0], ["Tool hire shop renting equipment instead of selling it", 0], ["Company announcing a net zero target", 1], ["Hotel advert about its green values", 1], ["Retailer donating to a tree-planting charity", 1]], explanation: "Circular practices keep products and materials in use. Pledges and adverts do not by themselves." },
          { q: "A supermarket gives its unsold food to a local food bank and asks for nothing back. This is an example of:", options: ["Philanthropy", "Market research", "Diversification", "Price skimming"], answer: 0, explanation: "" },
          { q: "A firm switches its delivery vans to electric to reduce emissions. Which impact is it improving most directly?", options: ["Environmental", "Legal", "Political", "Technological only"], answer: 0, explanation: "" },
          { q: "A new factory creates 300 local jobs. This is mainly which kind of impact?", options: ["Economic (and social)", "Environmental only", "Legal", "Political"], answer: 0, explanation: "Jobs and wages boost the local economy and community." },
          { q: "True or false: a business can only be socially responsible if it makes no profit.", options: ["True", "False"], answer: 1, explanation: "Carroll's pyramid puts being profitable at the base." }
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
            body: "Sole trader: one owner, easy and cheap to set up, unlimited liability (owner pays business debts from personal funds).\n\nPartnership: typically 2 to 20 owners, more capital and shared responsibility, but unlimited liability for all partners.\n\nPrivate Limited Company (Ltd): limited liability, shares sold privately (family and friends), must register with Companies House.\n\nPublic Limited Company (PLC): minimum share capital £50,000, shares sold to the public, risk of takeover.\n\nFranchise: the franchisor grants a licence to the franchisee to sell the brand or business idea.\n\nCharity: not-for-profit, registered with the Charity Commission.\n\nCo-operative: like-minded people working together; ownership, finance and control are with the members, who share profits and losses. Types: consumer, worker, producer.\n\nLimited liability: owners can only lose what they invested. Unlimited liability: personal assets are at risk.\n\nIncorporated businesses (Ltd, PLC, LLP, CIC) are separate legal entities, so owners have limited liability. Unincorporated businesses (sole traders, ordinary partnerships) are not separate from their owners, so liability is unlimited.\n\nIn an ordinary partnership, liability is 'joint and several': each partner can be made to pay ALL the business's debts if the others can't. A partner with savings or a home could have to pay the whole amount.\n\nLimited liability partnership (LLP): a partnership where members have limited liability. Common for solicitors and accountants.\n\nCommunity interest company (CIC): a limited company that exists for the benefit of a community. It must have an asset lock, so its profits and assets are used for the community it serves. It is regulated by the CIC Regulator.\n\nFranchise payments: the franchisee pays an initial fee to join, then an ongoing royalty fee, a regular percentage of turnover or profit, to the franchisor.\n\nPLC features: shares can be sold to the public on the stock exchange; at least £50,000 share capital; at least two directors; must publish accounts; limited liability; 'plc' after its name.\n\nChanging from a partnership to a Ltd: owners get limited liability and protect personal assets (e.g. a home), and it is easier to sell shares to an investor. But it costs more to set up and run, accounts are public at Companies House, and there are directors' legal duties and corporation tax."
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
          ["Charity", "A not-for-profit organisation registered with the Charity Commission."],
          ["Unincorporated", "Not a separate legal entity from its owners, e.g. sole trader, ordinary partnership. Unlimited liability."],
          ["Incorporated", "A separate legal entity from its owners, e.g. Ltd, PLC, LLP, CIC. Limited liability."],
          ["Joint and several liability", "Each partner in an ordinary partnership can be made to pay all of the business's debts."],
          ["LLP", "Limited liability partnership: partners (members) have limited liability. Common in law and accountancy."],
          ["CIC", "Community interest company: a limited company run for the benefit of a community."],
          ["Asset lock", "A CIC rule that its profits and assets must be used for the community it serves."],
          ["Royalty fee", "An ongoing percentage of turnover or profit a franchisee pays to the franchisor."]
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
          { q: "Which is a disadvantage of a partnership?", options: ["Limited liability", "Unlimited liability: all partners are responsible for debts", "Must have a minimum of £50,000 share capital", "Shares are sold on the stock exchange"], answer: 1, explanation: "Partners share unlimited liability for the business's debts." },
          { q: "A one-owner business is not a separate legal entity, so its owner is personally liable for all its debts. What type of business is it?", options: ["Sole trader", "Private limited company", "Limited liability partnership", "Community interest company"], answer: 0, explanation: "Sole traders are not separate from their owner. The others are incorporated." },
          { q: "Four partners run an ordinary partnership with unpaid debts of £40,000. Two partners have no money. What is the most that one of the other partners could be made to pay?", options: ["£10,000", "£20,000", "£40,000", "£0"], answer: 2, explanation: "Joint and several liability: any partner can be made to pay the full debt." },
          { q: "Which legal entity must have an asset lock?", options: ["Community interest company (CIC)", "Franchise", "Ordinary partnership", "Public limited company"], answer: 0, explanation: "A CIC's assets and profits are locked for community benefit." },
          { q: "What is the ongoing percentage a franchisee pays to the franchisor called?", options: ["Dividend", "Royalty fee", "Share capital", "Asset lock"], answer: 1, explanation: "The royalty fee. There is usually an initial fee too." },
          { q: "A limited liability partnership (LLP) is most commonly used by:", options: ["Solicitors and accountants", "Charities only", "Community groups", "Sole traders"], answer: 0, explanation: "LLPs give partnership-style firms limited liability." },
          { q: "What does 'incorporated' mean?", options: ["The business is a separate legal entity from its owners", "The business has only one owner", "The business is owned by the government", "The business has no debts"], answer: 0, explanation: "Incorporation creates a separate legal person, giving limited liability." },
          { type: "sort", q: "Is each business incorporated or unincorporated?", categories: ["Incorporated", "Unincorporated"], items: [["Sole trader", 1], ["Ordinary partnership", 1], ["Private limited company", 0], ["Public limited company", 0], ["Limited liability partnership", 0], ["Community interest company", 0]], explanation: "" },
          { type: "multi", q: "Select all the features of a public limited company (PLC).", options: ["Can sell shares to the public", "Minimum £50,000 share capital", "Must publish its accounts", "Shareholders have limited liability", "Owner has unlimited liability", "Shares can only be sold to family and friends"], answers: [0, 1, 2, 3], explanation: "" }
        ],
        practice: [
          { q: "Give the missing advantage or disadvantage for each structure: sole trader (disadvantage), partnership (advantage), Ltd (disadvantage), PLC (advantage), franchise (disadvantage), charity (advantage).", marks: 6, answer: "1 mark each, for example:\n- Sole trader disadvantage: can be difficult to grow; unlimited liability.\n- Partnership advantage: greater capital investment; shared responsibility.\n- Ltd disadvantage: costly to set up; must register with Companies House.\n- PLC advantage: greater capital investment; bigger public image.\n- Franchise disadvantage: initial costs are not cheap; must follow the franchisor's marketing rules.\n- Charity advantage: separate legal identity; limited liability if a CIO; tax relief benefits." },
          { q: "Explain the difference between limited liability and unlimited liability.", marks: 2, answer: "Limited liability: owners can only lose the money they have invested; personal assets are not at risk.\n\nUnlimited liability: the owner must pay all business debts from personal funds if the business cannot cover them." },
          { q: "Describe three features of a co-operative.", marks: 3, answer: "Any three from:\n- an association of like-minded people working voluntarily\n- ownership, finance and control are in the hands of members\n- profits and losses are shared among members\n- three types: consumer, worker and producer co-operatives" },
          { q: "A group of three friends want to start a catering business together. Evaluate whether they should set up as a partnership or a private limited company (Ltd). Justify your recommendation.", marks: 6, answer: "Partnership: shared responsibility, more capital, shared skills, but unlimited liability and potential conflict.\n\nLtd: limited liability, professional image, but more complex to set up and must publish accounts.\n\nRecommendation should be justified (Ltd recommended for protection from liability). Award up to 3 marks each side plus conclusion." },
          { q: "Give two things that make a PLC different from a private limited company.", marks: 2, answer: "Any two, 1 mark each: shares can be sold to the public on the stock exchange / at least £50,000 share capital / shareholders have limited liability / must publish annual accounts / at least two directors / 'plc' after its name / separate legal entity.", suggested: true },
          { q: "Sam and Leah run a dog-grooming business as an ordinary partnership. They want to open a second salon, which needs £80,000. A bank will lend £40,000 and a friend will invest £40,000 for a 25% share. Leah owns a flat; Sam lives with his parents. A dog was injured last year and the partners worry about future claims. Analyse whether they should change from a partnership to a private limited company (Ltd).", marks: 9, answer: "For changing to a Ltd:\n- Limited liability: their personal assets (Leah's flat) are protected if the business can't pay debts or a large claim. At the moment joint and several liability means Leah could lose her flat for the whole debt.\n- Easier to bring in the investor by issuing shares; the 25% stake is clearly recorded.\n- Looks more professional to banks, landlords and customers.\n\nAgainst:\n- Costs and admin: registering at Companies House, filing accounts that are public, directors' legal duties.\n- Corporation tax and accountancy fees.\n- Banks may still ask for personal guarantees, so limited liability isn't complete.\n- Giving away 25% means sharing profits and some control.\n\nJudgement: with expansion, a bigger debt, an outside investor and injury risk, a Ltd is likely the better choice, especially to protect Leah's flat.\n\nBand guide (9 marks): 7 to 9 balanced analysis applied to the scenario with a supported conclusion; 4 to 6 some analysis and application; 1 to 3 basic points.", suggested: true }
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
          { q: "'Reduce staff sickness by 50% within six months.' According to the workbook, which SMART element is missing?", options: ["Specific", "Measurable", "Timebound", "None, it is fully SMART"], answer: 3, explanation: "It has a measurable target and a deadline. The workbook accepts it as fully SMART." },
          { q: "A café sets the objective 'Increase lunchtime sales by 10% by the end of June'. Which SMART element tells you WHEN?", options: ["Specific", "Measurable", "Achievable", "Timebound"], answer: 3, explanation: "" },
          { q: "Which is the best example of an AIM rather than an objective?", options: ["Cut waste by 5% by March", "Be the most trusted bank in the UK", "Recruit two staff by September", "Raise prices by 3% in April"], answer: 1, explanation: "Aims are broad; the others are measurable objectives." },
          { q: "A business finds a competitor is closing nearby. In a SWOT this is:", options: ["A strength", "A weakness", "An opportunity", "A threat"], answer: 2, explanation: "An external factor that could help the business." },
          { q: "Corporate objectives are set for the whole business. Functional objectives are set for:", options: ["Individual departments", "Customers", "Competitors", "The government"], answer: 0, explanation: "" }
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
            body: "Seven common characteristics of good governance shared by public and private sectors: diversity, honesty, independence, integrity, prudence, sustainability, transparency.\n\nInternal audit: broad scope covering all risk; assesses key risks; advisory role; reports to the audit committee; report shared with management.\n\nExternal audit: scope set by statute and company law; reports on the truth and fairness of financial statements; adds value and credibility to the financials; reports to shareholders and the board via the AGM; report shared with shareholders and the public.\n\nBoard roles:\n- Chair: leads the board and makes sure it works well. Should be independent.\n- Chief Executive Officer (CEO): runs the company day to day and is the most senior executive.\n- Chief Financial Officer (CFO): responsible for finance. Chief Operating Officer (COO): responsible for operations.\n- Executive directors are employed by the company and run it. Non-executive directors (NEDs) are not employees: they bring independent experience and challenge the executive directors' decisions.\n\nThe UK Corporate Governance Code says the Chair and CEO roles should be held by different people. This stops too much power sitting with one person, means the CEO is held to account by the board, gives independent challenge to decisions and protects shareholders."
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
          ["Transparency", "Being open about decisions and performance."],
          ["Chair", "Leads the board of directors and makes sure it works well; should be independent of the CEO."],
          ["CEO", "Chief Executive Officer: runs the company day to day; the most senior executive."],
          ["Non-executive director (NED)", "A board member who is not employed by the company and challenges the executive directors."],
          ["Executive director", "A board member employed by the company to run part of it, e.g. CEO, CFO, COO."],
          ["Separating Chair and CEO", "Stops one person having too much power and means the CEO is held to account."]
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
          { q: "The scope of an external audit is:", options: ["Broad, covering all risk", "Specified by statute and company law", "Decided by the marketing team", "Unlimited"], answer: 1, explanation: "External audit scope is set by statute and company law. Internal audit scope is broad." },
          { q: "Which director brings independent challenge to the board and is not an employee of the company?", options: ["Chief Executive Officer", "Non-executive director", "Chief Financial Officer", "Chief Operating Officer"], answer: 1, explanation: "NEDs are independent of day-to-day management." },
          { q: "Who leads the board of directors?", options: ["The Chair", "The CFO", "The company secretary", "The largest customer"], answer: 0, explanation: "The Chair leads the board. The CEO runs the company." },
          { q: "Why should the roles of Chair and CEO be held by different people?", options: ["So that one person does not hold too much power", "To save on salaries", "Because the CEO must also be the CFO", "So the board meets less often"], answer: 0, explanation: "Separating them means the board can hold the CEO to account." },
          { type: "match", q: "Match each role to its responsibility.", pairs: [["Chair", "Leads the board"], ["CEO", "Runs the company day to day"], ["CFO", "Responsible for finance"], ["COO", "Responsible for operations"], ["Non-executive director", "Independent challenge to the executives"]], explanation: "" },
          { q: "What is the main purpose of a company's AGM?", options: ["To recruit new staff", "For the board to report to shareholders, who can vote on key decisions", "To launch new products", "To audit the accounts"], answer: 1, explanation: "" },
          { q: "Which committee oversees internal audit and the financial reporting process?", options: ["Audit committee", "Marketing committee", "Social committee", "Staff council"], answer: 0, explanation: "" },
          { q: "A company publishes clear, honest information about its pay and performance. Which governance characteristic does this show?", options: ["Transparency", "Prudence", "Diversity", "Independence"], answer: 0, explanation: "" },
          { q: "A board appoints directors from different backgrounds to avoid 'groupthink'. Which characteristic is this?", options: ["Diversity", "Secrecy", "Prudence", "Profitability"], answer: 0, explanation: "" },
          { q: "True or false: good governance only matters for large PLCs.", options: ["True", "False"], answer: 1, explanation: "Public bodies, charities and smaller companies all need it." }
        ],
        practice: [
          { q: "State the seven common characteristics of good governance shared by both sectors.", marks: 2, answer: "Diversity, honesty, independence, integrity, prudence, sustainability, transparency." },
          { q: "Describe three differences between governance in the public sector and the private sector.", marks: 3, suggested: true, answer: "Any three, 1 mark each:\n- Accountability: public sector is accountable to government and taxpayers; private sector to owners and shareholders.\n- Purpose: public sector governance focuses on value for public money and service quality; private sector on profit and shareholder value.\n- Rules: public sector follows government codes and civil service standards; private companies follow company law and, for listed PLCs, the UK Corporate Governance Code.\n- Scrutiny: public sector faces public and political scrutiny and may change with a new government; private sector reports to its board and at the AGM." },
          { q: "Explain why good governance is important for a large public limited company (PLC).", marks: 4, suggested: true, answer: "Up to 4 marks for developed points, for example:\n- Shareholders and investors need confidence that directors act in their interests, which helps keep the share price stable and makes it easier to raise finance.\n- PLCs are legally required to publish audited accounts; good governance ensures compliance and avoids fines.\n- Clear controls and independent audits reduce the risk of fraud and mismanagement.\n- Transparency protects reputation with customers, employees and the public." },
          { q: "A company's founder is both Chair and CEO. Explain two reasons why splitting these roles between two people would improve its governance.", marks: 4, answer: "2 marks per developed reason, e.g.:\n- Stops one person having too much power (1), which reduces the risk of poor or self-interested decisions (1).\n- The Chair can hold the CEO to account (1), so performance is challenged and monitored (1).\n- Gives independent challenge in board meetings (1), protecting shareholders' interests (1).\n- Follows the UK Corporate Governance Code (1), which builds investor confidence (1).", suggested: true }
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
            body: "GDPR: protects personal data and gives individuals rights over their information. Enforced by the Information Commissioner's Office (ICO). Data must be kept securely and not for longer than required.\n\nEquality Act 2010: nine protected characteristics (age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation). Direct discrimination: treated less favourably because of a protected characteristic. Indirect discrimination: a policy applies equally to everyone but has a worse effect on people who share a protected characteristic.\n\nHealth and Safety at Work Act 1974: employers must carry out risk assessments and provide safe equipment. Six main provisions. Enforced by the Health and Safety Executive (HSE).\n\nCompetition Act 1998: prohibits anti-competitive agreements and abuse of a dominant position.\n\nTrade Descriptions Act 1968: products and services must be accurately described.\n\nBribery Act 2010: giving someone a financial advantage to act improperly is a criminal offence.\n\nModern Slavery Act 2015: organisations with an annual turnover of £36 million or more must publish a yearly slavery and human trafficking statement saying what they do to stop slavery in their business and supply chains.\n\nHealth and Safety at Work etc. Act 1974, employees' duties: take reasonable care of their own health and safety and that of others; co-operate with their employer (e.g. follow training and use PPE); not interfere with or misuse anything provided for safety. Risk assessments, free PPE and training are the employer's duties."
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
          ["Consumer Rights Act 2015", "Goods must be satisfactory quality, fit for purpose and as described; 30-day right to reject."],
          ["Modern Slavery Act 2015", "Organisations with turnover of £36 million or more must publish a slavery and human trafficking statement each year."],
          ["Employees' H&S duties", "Take reasonable care of own and others' safety, co-operate with the employer, don't misuse safety equipment."]
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
          { q: "The ______ is the regulatory body for enforcing the Health and Safety at Work Act.", options: ["ICO", "Health and Safety Executive (HSE)", "Charity Commission", "Competition and Markets Authority"], answer: 1, explanation: "The HSE enforces health and safety law." },
          { q: "What annual turnover makes an organisation publish a yearly statement under the Modern Slavery Act 2015?", options: ["£10 million", "£36 million", "£50 million", "£85,000"], answer: 1, explanation: "£36 million." },
          { q: "Under the Health and Safety at Work Act 1974, which is a duty of the EMPLOYEE?", options: ["Carry out risk assessments", "Provide free PPE", "Take reasonable care of their own and others' health and safety", "Provide health and safety training"], answer: 2, explanation: "The other three are employer duties." },
          { type: "sort", q: "Is each one a duty of the employer or the employee under the Health and Safety at Work Act?", categories: ["Employer", "Employee"], items: [["Carry out risk assessments", 0], ["Provide PPE free of charge", 0], ["Provide health and safety training", 0], ["Take reasonable care of own and others' safety", 1], ["Co-operate with the employer on safety", 1], ["Not misuse safety equipment", 1]], explanation: "" },
          { type: "match", q: "Match each law or body to what it does.", pairs: [["Modern Slavery Act 2015", "Large firms publish a statement on slavery in supply chains"], ["ICO", "Can fine organisations for data protection breaches"], ["HSE", "Enforces health and safety law"], ["Competition and Markets Authority", "Tackles anti-competitive behaviour"]], explanation: "" }
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
            body: "A stakeholder is any individual or group with an interest in the business, such as employees, customers, suppliers, investors and shareholders. Their actions and needs directly affect the business's decisions and operations.\n\nInternal stakeholders (workbook): employees and managers.\n\nExternal stakeholders (workbook): customers, shareholders, suppliers, local community, government, finance providers.\n\nShareholders want to know their investment is safe and what their dividend will be. Stakeholder needs can conflict, for example a new store may bring jobs for the community but more traffic for local residents.\n\nMendelow's matrix maps stakeholders by their power (ability to influence the business) and interest (how much they care about a decision):\n- High power, high interest: manage closely (key players, e.g. major shareholders, the board).\n- High power, low interest: keep satisfied (e.g. a bank that lent money, a regulator).\n- Low power, high interest: keep informed (e.g. local residents, staff affected by a change).\n- Low power, low interest: monitor (minimal effort).\nA stakeholder's position can change, e.g. residents become more powerful if they organise a campaign.\n\nInternal customers are colleagues or departments who receive your work (e.g. HR providing a service to managers). External customers buy the business's goods or services."
          },
          WORKBOOK
        ],
        cards: [
          ["Stakeholder", "Any individual or group with an interest in the business."],
          ["Internal stakeholder", "Inside the business, e.g. employees and managers."],
          ["External stakeholder", "Outside the business, e.g. customers, suppliers, government, local community, finance providers."],
          ["Shareholder's interest", "That their investment is safe and what their dividend will be."],
          ["Stakeholder conflict", "When stakeholders want different things, e.g. shareholders want growth but residents don't want a new store's traffic."],
          ["Mendelow's matrix", "Maps stakeholders by power and interest to decide how to manage them."],
          ["Manage closely", "High power, high interest stakeholders (key players)."],
          ["Keep satisfied", "High power, low interest stakeholders."],
          ["Keep informed", "Low power, high interest stakeholders."],
          ["Monitor", "Low power, low interest stakeholders."],
          ["Internal customer", "A colleague or department that receives your work."],
          ["External customer", "Someone outside the business who buys its goods or services."]
        ],
        questions: [
          { type: "sort", q: "Is each one an internal or external stakeholder?", categories: ["Internal", "External"], items: [["Employees", 0], ["Managers", 0], ["Customers", 1], ["Suppliers", 1], ["Local community", 1], ["Government", 1], ["Finance providers", 1]], explanation: "" },
          { type: "match", q: "Match each stakeholder to its main interest.", pairs: [["Shareholders", "A safe investment and a good dividend"], ["Employees", "Job security and fair pay"], ["Customers", "Quality products at fair prices"], ["Suppliers", "Being paid on time and repeat orders"], ["Government", "Tax revenue and legal compliance"], ["Local community", "Local jobs and limited noise and pollution"]], explanation: "" },
          { q: "Which of the following is an INTERNAL stakeholder?", options: ["Customers", "Suppliers", "Employees", "Local community"], answer: 2, explanation: "Employees work inside the business." },
          { q: "Why are shareholders interested in a business?", options: ["They want to ensure products are safe for the public", "They want to ensure their share investment is safe and know their dividend", "They need to check compliance with legislation", "They want to ensure the business can pay its bills"], answer: 1, explanation: "Shareholders care about the safety of their investment and their dividend." },
          { q: "Managers are which type of stakeholder?", options: ["Internal", "External"], answer: 0, explanation: "Managers work inside the business, so they are internal." },
          { q: "Suppliers are which type of stakeholder?", options: ["Internal", "External"], answer: 1, explanation: "Suppliers are outside the business." },
          { q: "The government is which type of stakeholder?", options: ["Internal", "External"], answer: 1, explanation: "Government is external." },
          { q: "Finance providers, such as banks, are which type of stakeholder?", options: ["Internal", "External"], answer: 1, explanation: "Finance providers are external." },
          { q: "In Mendelow's matrix, how should high power, high interest stakeholders be managed?", options: ["Monitor", "Keep informed", "Keep satisfied", "Manage closely"], answer: 3, explanation: "They are key players." },
          { q: "A bank has lent money to a business but takes little interest in daily decisions. Using Mendelow, how should it be managed?", options: ["Manage closely", "Keep satisfied", "Keep informed", "Monitor"], answer: 1, explanation: "High power, low interest." },
          { q: "Local residents care a lot about a planned new warehouse but have little power over the decision. Using Mendelow, the business should:", options: ["Ignore them", "Keep them informed", "Keep them satisfied", "Manage them closely"], answer: 1, explanation: "Low power, high interest." },
          { q: "The payroll team provides payslips to the sales team. To the payroll team, the sales team are:", options: ["Internal customers", "External customers", "Suppliers", "Shareholders"], answer: 0, explanation: "" },
          { q: "Shareholders want higher dividends while employees want a pay rise from the same profit. This is an example of:", options: ["Stakeholder conflict", "Stakeholder agreement", "Delegation", "Diversification"], answer: 0, explanation: "" },
          { q: "Residents start a petition and get the local council involved against a new store. On Mendelow's matrix, their position:", options: ["Moves towards higher power", "Moves towards lower interest", "Stays exactly the same", "Disappears from the matrix"], answer: 0, explanation: "Organising increases their power." },
          { type: "match", q: "Match each Mendelow position to how to manage it.", pairs: [["High power, high interest", "Manage closely"], ["High power, low interest", "Keep satisfied"], ["Low power, high interest", "Keep informed"], ["Low power, low interest", "Monitor"]], explanation: "" },
          { type: "sort", q: "Is each one an internal or an external customer?", categories: ["Internal", "External"], items: [["The finance team receiving reports from sales", 0], ["Managers using the HR team's recruitment service", 0], ["A shopper buying a coat", 1], ["A business buying office supplies from you", 1]], explanation: "" },
          { type: "sort", q: "Using Mendelow, how should a supermarket opening a new store manage each one?", categories: ["Manage closely", "Keep satisfied", "Keep informed"], items: [["Major shareholders funding the project", 0], ["The local planning authority", 1], ["Nearby residents", 2], ["Staff who will transfer to the store", 2]], explanation: "" },
          { type: "type", q: "Mendelow's matrix maps stakeholders by power and ______.", accept: ["interest"], explanation: "Power and interest." }
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
          { q: "A mix of public and private cloud storage with on-premises data centres is called:", options: ["Hybrid infrastructure", "Cloud-based software", "Transformation", "Digitisation"], answer: 0, explanation: "Hybrid infrastructure." },
          { q: "A warehouse fits sensors to its shelves that report stock levels automatically over the internet. This is an example of:", options: ["IoT (Internet of Things)", "Biometrics", "Digitisation", "Hybrid working"], answer: 0, explanation: "" },
          { q: "Staff unlock their laptops with a fingerprint. This uses:", options: ["Robotics", "Biometrics", "Big Data", "Cloud storage"], answer: 1, explanation: "" },
          { q: "An employee receives a fake email asking for their password. This is a cyber attack known as:", options: ["Phishing", "Kaizen", "Benchmarking", "Outsourcing"], answer: 0, explanation: "Phishing tricks people into giving away details." },
          { q: "A bank scans old paper customer files into PDFs. This is:", options: ["Digitisation", "Digitalisation", "Transformation", "Robotics"], answer: 0, explanation: "Converting into digital form." }
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
            body: "Organisational culture: the expectations and practices that guide and inform the actions of individuals who work for a business.\n\nOrganisational values: the core beliefs of a business that act as guiding principles. Culture and values are not the same thing: values guide purpose; culture is the expectations and practices within the business.\n\nA strong culture promotes greater commitment from staff. A weak culture leads to lower commitment and loyalty, and high staff turnover.\n\nExternal culture is reinforced through things like mission statements on the website. Internal branding reinforces internal culture.\n\nHybrid working: some time at home and some in the office. It was not common before the COVID-19 pandemic.\n\nResistance to change can lead to strikes and work-to-rule.\n\nCharles Handy's four organisational cultures:\n- Power culture (a web): power sits with one person or a small group at the centre, e.g. a founder-led small business. Fast decisions, but depends on the leader.\n- Role culture (a Greek temple): clear roles, rules and procedures, e.g. the civil service or a large bank. Stable and predictable, but slow to change.\n- Task culture (a net): teams formed to complete projects, power comes from expertise, e.g. a consultancy or design agency. Flexible and creative, but can be costly and hard to control.\n- Person culture (a cluster): the organisation exists to serve the individuals in it, e.g. barristers' chambers or a partnership of doctors."
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
          ["Internal branding", "Reinforces internal culture among staff."],
          ["Handy's power culture", "Power with one central person or group; symbol: a web."],
          ["Handy's role culture", "Rules, procedures and clear job roles; symbol: a Greek temple."],
          ["Handy's task culture", "Project teams, power from expertise; symbol: a net."],
          ["Handy's person culture", "The organisation serves its individuals, e.g. barristers; symbol: a cluster."]
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
          { q: "True or false: internal branding is a way of reinforcing external culture.", options: ["True", "False"], answer: 1, explanation: "False. Internal branding reinforces internal culture." },
          { q: "A small business where the founder makes every important decision has which Handy culture?", options: ["Power", "Role", "Task", "Person"], answer: 0, explanation: "" },
          { q: "A government department with strict rules, procedures and job descriptions has which Handy culture?", options: ["Power", "Role", "Task", "Person"], answer: 1, explanation: "" },
          { q: "A design agency forms a new team for each client project, led by whoever has the right expertise. Which Handy culture?", options: ["Power", "Role", "Task", "Person"], answer: 2, explanation: "" },
          { q: "A set of barristers share offices and admin staff but each works for themselves. Which Handy culture?", options: ["Power", "Role", "Task", "Person"], answer: 3, explanation: "" },
          { q: "Which is a likely DISADVANTAGE of a role culture?", options: ["Slow to change because of rules and procedures", "Decisions depend on one person", "No clear job roles", "Too much freedom"], answer: 0, explanation: "" },
          { type: "match", q: "Match each Handy culture to its symbol.", pairs: [["Power culture", "A web"], ["Role culture", "A Greek temple"], ["Task culture", "A net"], ["Person culture", "A cluster"]], explanation: "" }
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
            body: "Formal communication follows established management systems, structures and procedures (e.g. formal reports, presentations). Informal communication is ad hoc (e.g. brief notes, informal meet-ups).\n\nChannel richness: video conferencing is high richness. Formal reports, press releases and bulletins are lower.\n\nFactors when choosing a method: content (is it confidential?), intended audience, file size.\n\nEmail: fast and cheap, but there can be too many and they may go unread, plus virus threats.\nSocial media: increases brand awareness, but negative comments can damage reputation.\nVideo conferencing: instantaneous, but needs a good internet connection.\nIntranet: a one-stop shop for information, but needs maintaining and updating.\nMobile apps: faster sales orders, but security issues.\nVoice mail: available 24/7, but language differences.\n\nEmail etiquette: professional email address, avoid exclamation marks, spell check, avoid jargon, be careful with reply-all, reread before sending.\n\nBarriers to communication: jargon and technical language; language differences; noise and distractions; technology failures; information overload; poor timing; the receiver's emotions or attitude; physical barriers such as different sites or time zones. Reduce them by using plain English, choosing the right channel, checking understanding and getting feedback."
          },
          WORKBOOK
        ],
        cards: [
          ["Formal communication", "Follows established systems and procedures, e.g. reports, presentations."],
          ["Informal communication", "Ad hoc, e.g. brief notes, informal meet-ups."],
          ["Channel richness", "How much a channel carries (voice, face, instant feedback). Video conferencing is high; reports are low."],
          ["Choosing a method", "Consider content (is it confidential?), the audience, and file size."],
          ["Intranet", "An internal website: a one-stop shop for information, but needs maintaining."],
          ["Email etiquette", "Professional address, no exclamation marks, spell check, no jargon, careful with reply-all, reread before sending."],
          ["Barriers to communication", "Jargon, language differences, noise, technology failure, information overload, poor timing, emotions."],
          ["Feedback (communication)", "The receiver's response, which shows whether the message was understood."]
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
          { q: "Which is a disadvantage of mobile applications for business communication?", options: ["Security issues", "They are slower than post", "They cannot collect data", "They only work in the office"], answer: 0, explanation: "Apps on personal devices can create security risks." },
          { q: "An HR manager must tell an employee the outcome of a disciplinary hearing. Which channel is most appropriate?", options: ["A group chat message", "A private meeting followed by a formal letter", "A post on the intranet", "A team email"], answer: 1, explanation: "Confidential and formal, and it needs a written record." },
          { q: "A manager uses lots of technical terms that new staff don't understand. Which barrier to communication is this?", options: ["Jargon", "Noise", "Technology failure", "Information overload"], answer: 0, explanation: "" },
          { q: "A team in the UK and a team in Australia struggle to find meeting times. Which barrier is this?", options: ["Time zones (a physical barrier)", "Jargon", "Emotions", "Too much feedback"], answer: 0, explanation: "" },
          { q: "Staff receive 150 emails a day and miss important ones. Which barrier is this?", options: ["Information overload", "Jargon", "Language differences", "Noise"], answer: 0, explanation: "" },
          { q: "What is the best way to check a message has been understood?", options: ["Send it twice", "Ask for feedback or ask the receiver to summarise it", "Use more jargon", "Write it in capitals"], answer: 1, explanation: "" },
          { q: "A company needs to share live sales figures with managers in five regions. Which is most suitable?", options: ["A shared dashboard", "A noticeboard", "Voicemail", "A printed letter"], answer: 0, explanation: "" },
          { type: "multi", q: "Select the barriers to communication.", options: ["Jargon", "Noise and distractions", "Technology failure", "Information overload", "Plain English", "Checking understanding"], answers: [0, 1, 2, 3], explanation: "" },
          { type: "sort", q: "Does each one help or hinder communication?", categories: ["Helps", "Hinders"], items: [["Using plain English", 0], ["Checking understanding", 0], ["Choosing the right channel", 0], ["Using unexplained acronyms", 1], ["A noisy open-plan office", 1], ["Sending the message at the wrong time", 1]], explanation: "" }
        ],
        practice: [
          { q: "Explain the difference between formal and informal communication.", marks: 2, answer: "Formal communication follows established management systems, structures and procedures (e.g. formal reports, presentations).\n\nInformal communication is ad hoc (e.g. brief notes, informal meet-ups). Both are valid in business but serve different purposes." },
          { q: "Describe three factors a business should consider when selecting an appropriate method of communication.", marks: 3, answer: "1 mark per factor:\n- Content: is it confidential?\n- Intended audience: who needs to receive it (executives, customers)?\n- File size: some methods are not appropriate for large files." },
          { q: "Describe three rules of professional etiquette when using email in a business context.", marks: 3, answer: "Any three, 1 mark each:\n- use a professional email address\n- avoid exclamation marks\n- use spell check\n- avoid jargon\n- be careful with reply-all\n- always reread before sending" },
          { q: "For each channel, give one example of content, one advantage and one disadvantage: email, social media, video conferencing, intranet.", marks: 4, answer: "Suggested answers:\n- Email: responding to customer requests / fast and cheap / virus threats.\n- Social media: product updates / increases brand awareness / negative comments can damage reputation.\n- Video conferencing: presenting stats across regions / instantaneous / needs a good internet connection.\n- Intranet: sharing performance data / one-stop shop for information / needs maintenance and updating." },
          { q: "Analyse two different forms of communication that are used in a business. Consider the advantages and disadvantages of each.", marks: 4, suggested: true, answer: "Example:\n- Email: fast, cheap, creates a written record and reaches many people at once; but can be overlooked in busy inboxes, tone can be misread, and there are virus risks.\n- Face-to-face meetings: rich communication with instant feedback and body language, good for sensitive issues; but take time to arrange, may not suit remote staff, and may leave no written record unless minutes are taken.\n\n2 marks per form: advantage and disadvantage, applied to the business." }
        ]
      },
      {
        id: "1.12",
        title: "1.12 Organisational structures",
        summary: "Hierarchical, flat, matrix and divisional structures, span of control and chain of command.",
        resources: [
          { type: "notes", title: "Key points", body: "Organisational structure: how roles, responsibilities and reporting lines are arranged.\n\nSpan of control: the number of people who report directly to one manager. Wide = many; narrow = few.\nChain of command: the line of authority from the top of the organisation to the bottom.\n\nHierarchical (tall): many layers of management, narrow spans of control, a long chain of command. Clear roles and promotion routes, but slow decisions and communication.\n\nFlat: few layers, wide spans of control, a short chain of command. Faster communication and more staff empowerment, but managers can be stretched and there are fewer promotion routes.\n\nMatrix: employees report to two managers, one for their function (e.g. marketing) and one for the project they are working on. Good for projects and sharing skills, but can cause confusion and conflicting priorities.\n\nDivisional: the organisation is split into divisions by product, region or market, each with its own functions. Focus on each market, but duplication of resources.\n\nFunctional: organised by department (finance, HR, marketing). Specialist expertise, but departments can work in silos.\n\nDelayering: removing layers of management to make a structure flatter.\n\nCentralised organisations keep decision-making at the top (head office), giving consistency and control but slower local decisions. Decentralised organisations push decisions down to branches or departments, giving faster, local decisions and motivated staff but less consistency." }
        ],
        cards: [
          ["Span of control", "The number of people who report directly to one manager."],
          ["Chain of command", "The line of authority from the top of an organisation to the bottom."],
          ["Hierarchical (tall) structure", "Many layers, narrow spans of control, long chain of command."],
          ["Flat structure", "Few layers, wide spans of control, short chain of command."],
          ["Matrix structure", "Employees report to two managers: one for their function and one for their project."],
          ["Divisional structure", "Split into divisions by product, region or market."],
          ["Functional structure", "Organised by department, e.g. finance, HR, marketing."],
          ["Delayering", "Removing layers of management to make the structure flatter."],
          ["Centralised", "Decisions are made at the top (head office): consistent but slower locally."],
          ["Decentralised", "Decisions are delegated to branches or departments: faster and more local, but less consistent."]
        ],
        questions: [
          { q: "In which structure do employees report to two managers, one for their function and one for their project?", options: ["Hierarchical", "Flat", "Divisional", "Matrix"], answer: 3, explanation: "Matrix structures combine functional and project lines." },
          { q: "Which is a feature of a flat organisational structure?", options: ["Wide spans of control", "Many layers of management", "Narrow spans of control", "A long chain of command"], answer: 0, explanation: "Flat structures have few layers, so each manager has more people reporting to them." },
          { q: "Which is a feature of a tall (hierarchical) structure?", options: ["Wide spans of control", "Few layers of management", "A long chain of command", "Employees with two managers"], answer: 2, explanation: "Many layers mean a long chain of command and narrow spans of control." },
          { q: "What is 'span of control'?", options: ["The number of people who report directly to one manager", "The number of layers in an organisation", "The size of the budget a manager controls", "The number of sites a business has"], answer: 0, explanation: "A wide span means many people report to one manager; a narrow span means few." },
          { q: "A business organised into a UK division, a Europe division and an Asia division has which structure?", options: ["Matrix", "Divisional", "Flat", "Functional"], answer: 1, explanation: "Divisions by region (or product or market) is a divisional structure." },
          { q: "A disadvantage of a matrix structure is:", options: ["Staff can be confused by having two managers with different priorities", "There are no projects", "It has too many layers", "It cannot share skills"], answer: 0, explanation: "Two managers can pull staff in different directions." },
          { q: "Removing layers of management to make a structure flatter is called:", options: ["Delayering", "Delegation", "Diversification", "Divisional"], answer: 0, explanation: "Delayering. Delegation is passing tasks down; diversification is entering new markets." },
          { q: "True or false: a flat structure usually means faster communication than a tall structure.", options: ["True", "False"], answer: 0, explanation: "Messages pass through fewer layers." },
          { type: "sort", q: "Does each feature describe a tall or a flat structure?", categories: ["Tall", "Flat"], items: [["Many layers of management", 0], ["Narrow spans of control", 0], ["Long chain of command", 0], ["Few layers of management", 1], ["Wide spans of control", 1], ["Short chain of command", 1]], explanation: "" },
          { type: "match", q: "Match each structure to its description.", pairs: [["Hierarchical", "Many layers and a long chain of command"], ["Flat", "Few layers and wide spans of control"], ["Matrix", "Two managers: function and project"], ["Divisional", "Split by product, region or market"], ["Functional", "Organised by department"]], explanation: "" },
          { q: "A manager has 9 people reporting directly to them. What is their span of control?", options: ["3", "9", "10", "1"], answer: 1, explanation: "" },
          { q: "A small design agency has 12 staff who all report directly to the owner. Which structure is this closest to?", options: ["Flat", "Tall hierarchical", "Matrix", "Divisional"], answer: 0, explanation: "" },
          { q: "The army, with many ranks from private to general, is a classic example of which structure?", options: ["Flat", "Hierarchical (tall)", "Matrix", "Person"], answer: 1, explanation: "" },
          { q: "A construction firm builds project teams using staff from its engineering, finance and design departments. Which structure is this?", options: ["Matrix", "Flat", "Functional only", "Divisional"], answer: 0, explanation: "" },
          { q: "A supermarket chain lets each store manager decide local promotions. This is an example of:", options: ["Decentralisation", "Centralisation", "Delayering", "A tall structure"], answer: 0, explanation: "" },
          { q: "If a business widens managers' spans of control, what is a likely effect?", options: ["Less close supervision and more staff responsibility", "More layers of management", "A longer chain of command", "More managers needed"], answer: 0, explanation: "" },
          { q: "A fast food chain makes all menu and pricing decisions at head office so every branch is the same. This is:", options: ["Centralised decision-making", "Decentralised decision-making", "A matrix structure", "Delayering"], answer: 0, explanation: "" },
          { type: "sort", q: "Is each one an advantage of centralisation or decentralisation?", categories: ["Centralisation", "Decentralisation"], items: [["Consistent decisions across all branches", 0], ["Strong control from head office", 0], ["Faster decisions made locally", 1], ["Staff feel trusted and motivated", 1]], explanation: "" }
        ],
        practice: [
          { q: "Explain one advantage and one disadvantage of a matrix structure.", marks: 4, answer: "Advantage (2): staff with different skills work together on projects (1), so expertise is shared and projects benefit from specialists (1).\n\nDisadvantage (2): staff report to two managers (1), which can cause confusion and conflicting priorities about which work comes first (1).", suggested: true },
          { q: "A company is changing from a tall structure to a flat structure. Analyse the likely effects on its staff.", marks: 6, answer: "Positive: faster communication and decisions; more responsibility and empowerment, which can motivate; closer contact with senior managers.\n\nNegative: managers have wider spans of control and may be overstretched; fewer promotion opportunities; some middle management jobs lost, causing insecurity and resistance; staff may need training for extra responsibility.\n\nFull marks need developed points on both sides, applied to staff.", suggested: true }
        ]
      }
    ]
  });
})();
