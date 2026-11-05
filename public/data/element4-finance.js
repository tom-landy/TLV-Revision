/* Element 4: Finance. Based on the TLV Element 4 revision workbook. */
(function () {
  var WORKBOOK = { type: "docx", title: "Element 4 workbook (Word, answers at the back)", url: "files/element4-finance-workbook.docx" };

  window.TLV_CONTENT.subjects.push({
    id: "element-4",
    title: "Element 4: Finance",
    colour: "#9a6700",
    topics: [
      {
        id: "4.1",
        title: "4.1 Common financial terms",
        summary: "Turnover, gross and net profit, VAT, break-even, assets, liabilities and retained profit.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Sales turnover: the total money received from selling goods or services in a given period.\n\nGross profit = sales revenue − cost of sales.\nNet profit = sales revenue − (cost of goods sold + all expenses). Net profit gives a more accurate picture of performance.\n\nBreak-even: no profit and no loss. A loss is when total costs are greater than revenue.\n\nVAT: Value Added Tax on products and services sold by VAT-registered businesses. Corporation tax is paid on company profits.\n\nThe accounting period can be annual, quarterly or monthly.\n\nIncome statement: details revenue and expenses. Balance sheet: a snapshot of what the business owns and owes at a point in time.\n\nRetained profit: profit kept in the business after all payments.\nAssets: items owned that have monetary value. Liabilities: debts, such as loans.\nCash flow: money moving into and out of the business.\nAdjustment: a correction to the accounts, e.g. a payment not yet received.\nStakeholders: individuals with an interest in the business."
          },
          WORKBOOK
        ],
        cards: [
          ["Sales turnover", "Total money received from selling goods or services in a period."],
          ["Gross profit", "Sales revenue − cost of sales."],
          ["Net profit", "Sales revenue − (cost of goods sold + all expenses)."],
          ["Break-even", "The point where the business makes no profit and no loss."],
          ["VAT", "Value Added Tax on products and services sold by VAT-registered businesses."],
          ["Corporation tax", "Tax paid on company profits."],
          ["Assets", "Items owned by the business that have monetary value."],
          ["Liabilities", "Debts the business owes, such as loans."],
          ["Retained profit", "Profit kept in the business after all payments."],
          ["Adjustment", "A correction made to the accounts, e.g. a payment not yet received."]
        ],
        questions: [
          { type: "sort", q: "Is each one an asset or a liability?", categories: ["Asset", "Liability"], items: [["Machinery", 0], ["Cash in the bank", 0], ["Stock", 0], ["Bank loan", 1], ["Money owed to suppliers", 1], ["Overdraft", 1]], explanation: "Assets are things the business owns. Liabilities are debts it owes." },
          { type: "type", q: "Sales revenue is £50,000 and cost of sales is £20,000. What is the gross profit in pounds?", accept: ["30000"], explanation: "£50,000 − £20,000 = £30,000.", placeholder: "e.g. 12000" },
          { type: "type", q: "Revenue is £40,000 and total costs are £46,000. How much is the loss in pounds?", accept: ["6000"], explanation: "£46,000 − £40,000 = £6,000 loss.", placeholder: "e.g. 12000" },
          { q: "What is 'sales turnover'?", options: ["The profit made after all expenses", "The total money received from selling goods/services in a given period", "The amount of tax paid by the business", "The closing balance of a bank account"], answer: 1, explanation: "Turnover is total sales income for the period." },
          { q: "Which of the following BEST describes 'net profit'?", options: ["Sales revenue minus cost of sales only", "Total money received from customers", "Sales revenue minus cost of goods sold AND all expenses", "The amount left in retained profit"], answer: 2, explanation: "Net profit deducts cost of sales and all expenses. Option A is gross profit." },
          { q: "What is VAT?", options: ["A tax on business profits", "A tax on employee wages", "Value Added Tax on products and services sold by VAT-registered businesses", "A type of bank loan"], answer: 2, explanation: "VAT is charged on sales by VAT-registered businesses." },
          { q: "At break-even point, a business:", options: ["Makes maximum profit", "Makes no profit and no loss", "Has paid off all its debts", "Has zero revenue"], answer: 1, explanation: "Revenue exactly covers costs." },
          { q: "True or false: gross profit is calculated by subtracting ALL expenses from sales revenue.", options: ["True", "False"], answer: 1, explanation: "False. Gross profit only subtracts cost of sales." },
          { q: "True or false: the accounting period can be annual, quarterly or monthly.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: corporation tax is paid on the wages of employees.", options: ["True", "False"], answer: 1, explanation: "False. Corporation tax is on company profits." },
          { q: "True or false: a balance sheet shows a snapshot of a business's financial position.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: retained profit is distributed to owners and not kept in the business.", options: ["True", "False"], answer: 1, explanation: "False. Retained profit is kept in the business." },
          { q: "True or false: liabilities are debts a business may have, such as loans.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "Which term means 'the movement of money into and out of a business'?", options: ["Assets", "Cash flow", "Adjustment", "VAT"], answer: 1, explanation: "Cash flow." },
          { q: "Which term means 'items owned by the business that have monetary value'?", options: ["Liabilities", "Assets", "Stakeholders", "Adjustments"], answer: 1, explanation: "Assets." },
          { q: "Which term means 'a correction made to accounts, e.g. a payment not yet received'?", options: ["Adjustment", "Cash flow", "Retained profit", "VAT"], answer: 0, explanation: "Adjustment." },
          { q: "When total costs are greater than revenue, the business has made a ______.", options: ["profit", "loss", "break-even", "gross profit"], answer: 1, explanation: "A loss." },
          { q: "Sales revenue minus cost of sales equals ______.", options: ["net profit", "gross profit", "retained profit", "turnover"], answer: 1, explanation: "Gross profit." },
          { q: "The ______ details revenue and expenses for a business.", options: ["balance sheet", "income statement", "cash flow forecast", "budget"], answer: 1, explanation: "The income statement (profit and loss account)." },
          { q: "______ is profit kept in the business after all payments.", options: ["Gross profit", "Retained profit", "Turnover", "Break-even"], answer: 1, explanation: "Retained profit." },
          { q: "A ______ shows what a business owns and owes at a given point in time.", options: ["income statement", "balance sheet", "cash flow forecast", "budget"], answer: 1, explanation: "Balance sheet." }
        ],
        practice: [
          { q: "Explain why it is important for managers to understand financial terms correctly.", marks: 3, answer: "Award up to 3 marks:\n- Understanding financial terms lets managers make informed decisions (1).\n- Misuse can lead to errors in income statements and balance sheets (1).\n- In extreme cases this can lead to insolvency or bankruptcy (1)." },
          { q: "Explain the difference between gross profit and net profit.", marks: 3, answer: "- Gross profit = sales revenue − cost of sales only (1).\n- Net profit also deducts all business expenses (1).\n- Net profit gives a more accurate picture of business performance (1)." }
        ]
      },
      {
        id: "4.2",
        title: "4.2 Financial reporting",
        summary: "Purpose of financial reporting, report types, balance sheets, income statements and audits.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Purposes of financial reporting: track and analyse financial activity, comply with UK legal requirements, report the health of the business to investors. (Marketing products is not a purpose.)\n\nFive areas of financial reporting: Assets, Revenue, Equity, Liabilities, Expenses.\n\nReport types:\nBalance sheet: what the business owns and owes (assets, liabilities and equity) at a point in time.\nIncome statement: also called the profit and loss account.\nManagement accounts: informal reports for managers' decisions, monthly or quarterly.\nCash flow statement: money in and out, split into operating, investing and financing activities.\nAnnual report: large formal document with chairperson's statement, directors' report, balance sheet, income statement and auditor's report.\nYear-end report: filed at the end of the tax year; a statutory requirement to file with HMRC.\n\nBalance sheet order (workbook): non-current assets, current assets, working capital (current assets − current liabilities), net assets, total liabilities.\n\nInternal audit: done inside the organisation; results stay internal. External audit: done by an independent third party such as a chartered accountant; gives an unbiased opinion."
          },
          WORKBOOK
        ],
        cards: [
          ["Income statement", "Shows revenue and expenses; also called the profit and loss account."],
          ["Balance sheet", "What the business owns and owes (assets, liabilities, equity) at a point in time."],
          ["Management accounts", "Informal reports for managers' decisions, monthly or quarterly."],
          ["Cash flow statement", "Money in and out, split into operating, investing and financing activities."],
          ["Annual report", "Formal document: chair's statement, directors' report, balance sheet, income statement, auditor's report."],
          ["Year-end report", "Filed with HMRC at the end of the tax year; a statutory requirement."],
          ["Working capital", "Current assets − current liabilities."],
          ["Five areas of financial reporting", "Assets, Revenue, Equity, Liabilities, Expenses."]
        ],
        questions: [
          { type: "order", q: "Put the parts of a balance sheet in order, as the workbook gives them.", items: ["Non-current (fixed) assets", "Current assets", "Working capital", "Net assets", "Total liabilities"], explanation: "" },
          { type: "match", q: "Match each financial report to its description.", pairs: [["Balance sheet", "What the business owns and owes at a point in time"], ["Income statement", "Revenue and expenses; also called profit and loss account"], ["Management accounts", "Informal reports for managers, monthly or quarterly"], ["Cash flow statement", "Money in and out: operating, investing and financing"], ["Annual report", "Formal document with chair's statement and auditor's report"], ["Year-end report", "Statutory filing with HMRC at the end of the tax year"]], explanation: "" },
          { type: "multi", q: "Select the five areas of financial reporting.", options: ["Assets", "Revenue", "Equity", "Liabilities", "Expenses", "Marketing", "Wages", "Audits"], answers: [0, 1, 2, 3, 4], explanation: "" },
          { type: "type", q: "Revenue is £90,000, cost of sales £40,000 and expenses £15,000. What is the net profit in pounds?", accept: ["35000"], explanation: "£90,000 − (£40,000 + £15,000) = £35,000.", placeholder: "e.g. 12000" },
          { q: "Which of the following is NOT a purpose of financial reporting?", options: ["To track and analyse financial activities", "To market the business's products", "To comply with UK legal requirements", "To report the health of the business to investors"], answer: 1, explanation: "Marketing is not a purpose of financial reporting." },
          { q: "Which of the following shows the FIVE areas of financial reporting?", options: ["Assets, Revenue, Equity, Liabilities, Expenses", "Profit, Loss, Tax, Wages, Loans", "Sales, Costs, Budgets, Cash flow, Audits", "Income, Expenditure, Capital, Surplus, Deficit"], answer: 0, explanation: "Assets, Revenue, Equity, Liabilities, Expenses." },
          { q: "What is an income statement also known as?", options: ["Balance sheet", "Cash flow statement", "Profit and loss account", "Annual report"], answer: 2, explanation: "Profit and loss account." },
          { q: "Which report type is a statutory requirement to file with HMRC at the end of the tax year?", options: ["Management accounts", "Year-end report", "Cash flow forecast", "Financial dashboard"], answer: 1, explanation: "Year-end report." },
          { q: "Which report is informal, used by managers to make decisions, and produced monthly or quarterly?", options: ["Annual report", "Management accounts", "Year-end report", "Balance sheet"], answer: 1, explanation: "Management accounts." },
          { q: "Which report is a large formal document including a chairperson's statement, directors' report, balance sheet, income statement and auditor's report?", options: ["Annual report", "Management accounts", "Cash flow statement", "Year-end report"], answer: 0, explanation: "Annual report." },
          { q: "A cash flow statement is split into which three areas?", options: ["Assets, liabilities and equity", "Operating, investing and financing activities", "Sales, costs and profit", "Fixed, variable and semi-variable"], answer: 1, explanation: "Operating, investing and financing activities." },
          { q: "In the workbook's balance sheet order, what comes first?", options: ["Current assets", "Non-current (fixed) assets", "Net assets", "Total liabilities"], answer: 1, explanation: "Start with non-current (fixed) assets." },
          { q: "Working capital is calculated as:", options: ["Current assets − current liabilities", "Total assets − total liabilities", "Sales − cost of sales", "Fixed assets + current assets"], answer: 0, explanation: "Working capital = current assets − current liabilities." },
          { q: "Choc Pots UK has sales revenue of £156,400 and cost of sales of £80,200. What is its gross profit?", options: ["£76,200", "£236,600", "£41,650", "£80,200"], answer: 0, explanation: "£156,400 − £80,200 = £76,200." },
          { q: "Choc Pots UK's expenses are rent £20,000, advertising £7,000, equipment £150, uniforms £100, computers £300 and general expenses £7,000. What are total expenses?", options: ["£34,550", "£27,550", "£34,000", "£41,650"], answer: 0, explanation: "20,000 + 7,000 + 150 + 100 + 300 + 7,000 = £34,550." },
          { q: "Choc Pots UK's gross profit is £76,200 and total expenses are £34,550. What is its net profit?", options: ["£41,650", "£110,750", "£42,650", "£76,200"], answer: 0, explanation: "£76,200 − £34,550 = £41,650." }
        ],
        practice: [
          { q: "Explain TWO reasons why accurate financial reporting is important for a business.", marks: 4, answer: "2 marks per reason, up to 4:\n- Statutory duty to file accounts and pay the correct tax (1), otherwise risk of fines or imprisonment (1).\n- Accurate reports let investors review performance (1); inaccurate reports could mislead investors (1).\n- Helps identify financial risks and reduce fraud (1)." },
          { q: "What is the difference between an internal audit and an external audit?", marks: 4, answer: "Up to 4 marks:\n- Internal audit: conducted internally, results only seen within the organisation (1).\n- External audit: carried out by a third party such as a chartered accountant, independent of the business (1).\n- Gives an unbiased opinion and helps detect errors (1)." },
          { q: "Discuss the importance of financial reporting for a business and the potential consequences of poor or inaccurate financial records.", marks: 8, answer: "Band descriptors:\n- 7 to 8: detailed, balanced discussion of multiple purposes (compliance, investor confidence, tracking, fraud prevention). Well structured with specific examples.\n- 5 to 6: good range of points with some development. Clear understanding of importance and consequences.\n- 3 to 4: some valid points, limited development.\n- 1 to 2: basic statements with little elaboration." }
        ]
      },
      {
        id: "4.3",
        title: "4.3 Sources of finance",
        summary: "Internal and external finance, short and long-term funding, loans, overdrafts, crowdfunding and more.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Internal sources: savings, retained profit, selling assets, owner's capital.\nExternal sources: bank loans, overdrafts, crowdfunding, venture capital, angel investors, invoice factoring, hire purchase, leasing, credit cards.\n\nShort-term funding: paid back within one year. Long-term funding: borrowed over a long period, typically 5+ years (e.g. bank loan, private equity, venture capital, mortgage).\n\nBank loan: typically repaid over 3 to 10 years.\nAngel investor: a wealthy entrepreneur who provides funding for a share of profits.\nRetained profit: profit not paid to owners but reinvested.\nOverdraft: the bank allows withdrawals beyond the balance up to an agreed limit.\nInvoice factoring: selling an invoice to a factoring company for quick cash.\nHire purchase: pay a deposit, then the rest over an agreed period.\nLeasing: use equipment while ownership stays with the leasing company.\nCrowdfunding: many investors each provide small amounts.\nCredit card: interest-free period and quick access, but expensive if the balance is not cleared."
          },
          WORKBOOK
        ],
        cards: [
          ["Internal finance", "Savings, retained profit, selling assets, owner's capital."],
          ["External finance", "e.g. bank loans, overdrafts, crowdfunding, angel investors, leasing, hire purchase."],
          ["Short-term funding", "Repaid within one year, e.g. overdraft, credit card."],
          ["Long-term funding", "Borrowed over a long period, typically 5+ years, e.g. bank loan, mortgage, venture capital."],
          ["Angel investor", "A wealthy entrepreneur who provides funding for a share of profits."],
          ["Crowdfunding", "Many investors each give small amounts to fund a business."],
          ["Invoice factoring", "Selling an invoice to a factoring company for quick cash."],
          ["Hire purchase", "Pay a deposit, then the rest over an agreed period; you own it at the end."],
          ["Leasing", "Using equipment while ownership stays with the leasing company."],
          ["Overdraft", "The bank lets you withdraw beyond your balance up to an agreed limit."]
        ],
        questions: [
          { type: "sort", q: "Is each source of finance internal or external?", categories: ["Internal", "External"], items: [["Savings", 0], ["Retained profit", 0], ["Selling assets", 0], ["Owner's capital", 0], ["Bank loan", 1], ["Overdraft", 1], ["Crowdfunding", 1], ["Angel investor", 1], ["Leasing", 1]], explanation: "" },
          { type: "sort", q: "Is each source of finance short-term or long-term?", categories: ["Short-term", "Long-term"], items: [["Overdraft", 0], ["Credit card", 0], ["Invoice factoring", 0], ["Bank loan", 1], ["Mortgage", 1], ["Venture capital", 1]], explanation: "Short-term is repaid within a year. Long-term is typically 5+ years (bank loans 3 to 10 years)." },
          { type: "match", q: "Match each source of finance to its description.", pairs: [["Angel investor", "Wealthy entrepreneur funding a business for a share of profits"], ["Retained profit", "Profit reinvested rather than paid to owners"], ["Overdraft", "Withdraw beyond the balance up to an agreed limit"], ["Invoice factoring", "Sell an invoice for quick cash"], ["Hire purchase", "Deposit, then pay the rest over an agreed period"], ["Leasing", "Use equipment while the provider keeps ownership"]], explanation: "" },
          { q: "Which of the following is an INTERNAL source of finance?", options: ["Bank loan", "Crowdfunding", "Retained profit", "Venture capital"], answer: 2, explanation: "Retained profit comes from inside the business." },
          { q: "What is 'short-term funding'?", options: ["Finance borrowed for more than five years", "Finance that will have to be paid back within one year", "Profit kept in the business", "Money raised through selling shares"], answer: 1, explanation: "Paid back within one year." },
          { q: "Which source of finance involves a group of investors providing small amounts to fund a new business?", options: ["Invoice factoring", "Overdraft", "Crowdfunding", "Hire purchase"], answer: 2, explanation: "Crowdfunding." },
          { q: "A bank loan is typically repaid over which period?", options: ["1 to 2 months", "1 year", "3 to 10 years", "50+ years"], answer: 2, explanation: "Typically 3 to 10 years." },
          { q: "Which source is 'a wealthy entrepreneur who provides funding in exchange for a share of profits'?", options: ["Angel investor", "Overdraft", "Leasing", "Retained profit"], answer: 0, explanation: "Angel investor." },
          { q: "Which source lets a business withdraw beyond its account balance up to an agreed limit?", options: ["Hire purchase", "Overdraft", "Invoice factoring", "Crowdfunding"], answer: 1, explanation: "Overdraft." },
          { q: "Which source involves selling an invoice to a company for a quick cash injection?", options: ["Invoice factoring", "Leasing", "Angel investor", "Retained profit"], answer: 0, explanation: "Invoice factoring." },
          { q: "Which source involves paying a deposit then paying off the remainder over an agreed period?", options: ["Leasing", "Hire purchase", "Overdraft", "Crowdfunding"], answer: 1, explanation: "Hire purchase. You own the item at the end." },
          { q: "With which source does the business use equipment while ownership stays with the provider?", options: ["Hire purchase", "Leasing", "Bank loan", "Owner's capital"], answer: 1, explanation: "Leasing." },
          { q: "Which is an example of long-term funding?", options: ["Overdraft", "Credit card", "Mortgage", "Trade credit"], answer: 2, explanation: "Mortgages run for many years. The others are short-term." }
        ],
        practice: [
          { q: "Give one advantage and one disadvantage of each internal source of finance: savings, retained profit, selling assets, owner's capital.", marks: 8, suggested: true, answer: "- Savings: no interest or repayments / may not be enough, and the owner risks losing their own money.\n- Retained profit: no interest, no loss of control / less available for owners' dividends; not available to new or loss-making businesses.\n- Selling assets: raises cash without debt / the asset is no longer available; may sell below value.\n- Owner's capital: no interest and the owner keeps control / limited by how much the owner has; personal financial risk." },
          { q: "Define 'long-term funding' and give TWO examples.", marks: 3, answer: "Long-term funding = money borrowed over a long period, typically 5+ years (1).\n\nExamples (1 each, up to 2): bank loan, private equity, venture capital, mortgage." },
          { q: "Explain why a sole trader might use a bank loan rather than crowdfunding.", marks: 3, answer: "- A sole trader may prefer a bank loan for a specific, larger amount needed long-term (1).\n- Crowdfunding needs the idea to be shared publicly and involves many investors (1).\n- A bank loan is more private and gives the owner more control (1)." },
          { q: "Explain ONE benefit and ONE drawback of using a credit card as a source of finance.", marks: 4, answer: "Benefit: interest-free period available (1) / easy access to funds quickly (1).\n\nDrawback: expensive if the balance is not cleared, because interest is added (1) / encourages debt (1).\n\n2 marks per side." },
          { q: "A new business is considering different sources of finance to fund its start-up costs. Discuss the factors it should consider when choosing between internal and external sources of finance.", marks: 9, answer: "Band descriptors:\n- 7 to 9: comprehensive discussion of multiple internal and external sources; clear comparison; considers speed, cost, control and risk; well structured with business context.\n- 4 to 6: good range of sources covered with some evaluative comment. Some comparison of internal and external.\n- 1 to 3: lists sources with limited or no analysis." }
        ]
      },
      {
        id: "4.4",
        title: "4.4 Forms of expenditure",
        summary: "Fixed and variable costs, capital expenditure, payroll, bank fees and interest.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Fixed costs stay the same over a period regardless of output, e.g. rent, insurance, software, company vehicles.\n\nVariable costs change with business activity, e.g. raw materials, electricity and other utilities, stationery, hourly or overtime wages. They change month to month, can change rapidly and affect profit, and are harder to control.\n\nCapital expenditure: money spent to buy, improve or maintain fixed assets, e.g. machinery, vehicles, equipment, furniture.\n\nStaff payroll: wages, salaries and employer pension contributions.\n\nBank fees: exchange transaction fees, overdraft fees, loan application and processing fees. Interest on loans can be fixed or variable."
          },
          WORKBOOK
        ],
        cards: [
          ["Fixed cost", "Stays the same over a period whatever the output, e.g. rent, insurance."],
          ["Variable cost", "Changes with business activity, e.g. raw materials, electricity."],
          ["Capital expenditure", "Money spent to buy, improve or maintain fixed assets, e.g. machinery, vehicles."],
          ["Staff payroll", "Wages, salaries and employer pension contributions."],
          ["Bank fees", "Exchange transaction fees, overdraft fees, loan application and processing fees."],
          ["Loan interest", "Can be at a fixed or a variable rate."]
        ],
        questions: [
          { type: "sort", q: "Is each cost fixed or variable?", categories: ["Fixed", "Variable"], items: [["Rent", 0], ["Insurance", 0], ["Software subscription", 0], ["Company vehicles", 0], ["Raw materials", 1], ["Electricity", 1], ["Stationery", 1]], explanation: "Fixed costs stay the same whatever the output. Variable costs change with activity." },
          { type: "multi", q: "Select all the bank fees.", options: ["Exchange transaction fees", "Overdraft fees", "Loan application and processing fees", "Staff payroll", "Rent"], answers: [0, 1, 2], explanation: "" },
          { type: "type", q: "Money spent buying or maintaining fixed assets is called ______ expenditure.", accept: ["capital"], explanation: "Capital expenditure." },
          { q: "Which of the following is a FIXED cost?", options: ["Raw materials", "Electricity bills", "Rent for premises", "Overtime wages"], answer: 2, explanation: "Rent stays the same regardless of output." },
          { q: "Capital expenditure is best described as:", options: ["Money spent on day-to-day running costs", "Money used to purchase or maintain fixed assets", "Tax paid on company profits", "Staff wages and salaries"], answer: 1, explanation: "Capital expenditure is on fixed assets." },
          { q: "Bank fees include all of the following EXCEPT:", options: ["Exchange transaction fees", "Overdraft fees", "Staff payroll costs", "Loan application and processing fees"], answer: 2, explanation: "Payroll is not a bank fee." },
          { q: "Variable costs are difficult to control because:", options: ["They are set by contract and fixed for a period", "They change month to month with business activity", "They are always higher than fixed costs", "They only apply to large companies"], answer: 1, explanation: "They move with activity." },
          { q: "True or false: fixed costs remain constant over a given period of time.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: staff payroll includes wages, salaries and employer pension contributions.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: interest fees on business loans can be at either fixed or variable rates.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: general utilities such as gas and electricity are examples of fixed costs.", options: ["True", "False"], answer: 1, explanation: "False. The workbook treats utilities as variable costs." },
          { q: "True or false: capital expenditure improves or maintains a business's fixed assets.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: variable costs can change rapidly and affect profit levels.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "Insurance is a:", options: ["Fixed cost", "Variable cost"], answer: 0, explanation: "Insurance is a set amount for the period." },
          { q: "Raw materials are a:", options: ["Fixed cost", "Variable cost"], answer: 1, explanation: "More output needs more materials." },
          { q: "Company vehicles are a:", options: ["Fixed cost", "Variable cost"], answer: 0, explanation: "The workbook classes company vehicles as a fixed cost." }
        ],
        practice: [
          { q: "Explain the difference between fixed costs and variable costs. Use an example of each.", marks: 4, answer: "Fixed costs: stay the same over a period regardless of output, e.g. rent (1 + 1).\n\nVariable costs: change with business activity or output, e.g. raw materials (1 + 1)." },
          { q: "Explain what capital expenditure is and give TWO examples of capital purchases a business might make.", marks: 3, answer: "Capital expenditure = money spent to buy, improve or maintain fixed assets (1).\n\nExamples (1 each): machinery, vehicles, equipment, office furniture." },
          { q: "A small manufacturing business has seen its variable costs increase significantly over the past six months. Discuss the potential impact on the business and suggest how it could manage its expenditure more effectively.", marks: 8, answer: "Band descriptors:\n- 7 to 8: clear analysis of impact (profit, pricing, cash flow); specific, developed suggestions for managing costs; evaluative throughout.\n- 5 to 6: good impact analysis; some workable suggestions. Mostly developed.\n- 3 to 4: some impacts identified, limited suggestions.\n- 1 to 2: basic points only." }
        ]
      },
      {
        id: "4.5",
        title: "4.5 Tracking revenue and expenditure",
        summary: "Budgets, bookkeeping, spend authorisation, profit calculations, break-even and cash flow forecasts.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Tracking revenue against expenditure highlights any risk of spending more than comes in.\n\nDouble-entry bookkeeping: every credit has a matching debit in another account. Software: Sage, QuickBooks, Wave.\n\nSpend authorisation: a request saying what to buy, why and how much. It prevents fraud and protects cash flow. The process should be documented at every stage as an audit log.\n\nBudgets can be tracked weekly, monthly or annually. KPIs show whether departments are hitting targets.\n\nFormulae:\nGross profit = sales revenue − cost of sales\nNet profit = sales revenue − (cost of goods sold + expenses)\nGross profit margin = (gross profit ÷ sales revenue) × 100\nNet profit margin = (net profit ÷ sales revenue) × 100\nBreak-even (units) = fixed costs ÷ (selling price per unit − variable cost per unit)\n\nCash flow forecast: closing balance = opening balance + net cash flow, and each month's closing balance becomes the next month's opening balance."
          },
          WORKBOOK
        ],
        cards: [
          ["Double-entry bookkeeping", "Every credit entry has a matching debit entry in another account."],
          ["Spend authorisation", "A request saying what to buy, why and how much; prevents fraud and protects cash flow."],
          ["Audit log", "A record of every stage of the authorisation process."],
          ["Budget", "A spending plan; can be tracked weekly, monthly or annually."],
          ["Gross profit margin", "(Gross profit ÷ sales revenue) × 100."],
          ["Net profit margin", "(Net profit ÷ sales revenue) × 100."],
          ["Break-even (units)", "Fixed costs ÷ (selling price per unit − variable cost per unit)."],
          ["Closing balance", "Opening balance + net cash flow. It becomes next month's opening balance."],
          ["Net cash flow", "Total inflows − total outflows."]
        ],
        questions: [
          { type: "type", q: "Fixed costs are £6,000, the selling price is £20 per unit and variable cost is £8 per unit. What is the break-even point in units?", accept: ["500"], explanation: "£6,000 ÷ (£20 − £8) = £6,000 ÷ £12 = 500 units.", placeholder: "Number of units" },
          { type: "type", q: "Revenue is £80,000 and net profit is £12,000. What is the net profit margin as a percentage?", accept: ["15"], explanation: "(12,000 ÷ 80,000) × 100 = 15%.", placeholder: "e.g. 25" },
          { type: "type", q: "Revenue is £200,000 and gross profit is £70,000. What is the gross profit margin as a percentage?", accept: ["35"], explanation: "(70,000 ÷ 200,000) × 100 = 35%.", placeholder: "e.g. 25" },
          { type: "type", q: "A month opens with £1,500, inflows are £4,000 and outflows are £4,800. What is the closing balance in pounds?", accept: ["700"], explanation: "Net cash flow = 4,000 − 4,800 = −£800. Closing = 1,500 − 800 = £700.", placeholder: "e.g. 2500" },
          { type: "multi", q: "Select what a spend authorisation request must include.", options: ["What is being bought", "Why it is needed", "How much it costs", "The employee's bank details", "The annual accounts"], answers: [0, 1, 2], explanation: "" },
          { q: "What is the main purpose of tracking revenue against expenditure?", options: ["To prepare for external audits only", "To highlight any risk of expenditure exceeding revenue", "To calculate employee bonuses", "To set the business's marketing budget"], answer: 1, explanation: "To spot overspending risk early." },
          { q: "Double-entry bookkeeping ensures that:", options: ["All receipts are stored digitally", "Every credit entry has a corresponding debit entry in another account", "Budgets are always met", "External auditors have full access to accounts"], answer: 1, explanation: "Every credit has a matching debit." },
          { q: "Which software package is NOT typically used for financial recording?", options: ["Sage", "QuickBooks", "Photoshop", "Wave"], answer: 2, explanation: "Photoshop edits images." },
          { q: "A spend authorisation request must include:", options: ["The employee's bank details", "What they want to purchase, the reason and the cost", "The business's annual accounts", "A signed letter from the CEO only"], answer: 1, explanation: "What, why and how much." },
          { q: "True or false: budgets can only be tracked annually.", options: ["True", "False"], answer: 1, explanation: "False. Weekly, monthly or annually." },
          { q: "True or false: an external audit is carried out by a third party such as a chartered accountant.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: KPIs are used to indicate whether departments are hitting their performance targets.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "True or false: internal audits use external sources to check financial records.", options: ["True", "False"], answer: 1, explanation: "False. Internal audits only use internal sources." },
          { q: "True or false: the authorisation process should be documented through every stage as an audit log.", options: ["True", "False"], answer: 0, explanation: "True." },
          { q: "A business has sales revenue of £120,000 and cost of sales of £45,000. What is the gross profit?", options: ["£75,000", "£165,000", "£45,000", "£30,000"], answer: 0, explanation: "£120,000 − £45,000 = £75,000." },
          { q: "Sales revenue is £120,000, cost of sales £45,000 and total expenses £30,000. What is the net profit?", options: ["£75,000", "£45,000", "£90,000", "£15,000"], answer: 1, explanation: "£120,000 − (£45,000 + £30,000) = £45,000." },
          { q: "Net profit is £45,000 and sales revenue is £120,000. What is the net profit margin?", options: ["37.50%", "62.50%", "26.67%", "45.00%"], answer: 0, explanation: "(45,000 ÷ 120,000) × 100 = 37.50%." },
          { q: "Fixed costs are £8,000, selling price £25 per unit and variable cost £15 per unit. What is the break-even point?", options: ["320 units", "800 units", "200 units", "533 units"], answer: 1, explanation: "£8,000 ÷ (£25 − £15) = £8,000 ÷ £10 = 800 units." },
          { q: "Strz Academy, January: materials £1,500, wages £1,800, marketing £60, overheads £120. What are total outflows?", options: ["£3,480", "£3,300", "£3,360", "£4,600"], answer: 0, explanation: "1,500 + 1,800 + 60 + 120 = £3,480." },
          { q: "Strz Academy's January opening balance is £2,500, inflows £4,600 and outflows £3,480. What is the January closing balance?", options: ["£1,120", "£3,620", "£5,980", "£7,100"], answer: 1, explanation: "Net cash flow = 4,600 − 3,480 = £1,120. Closing = 2,500 + 1,120 = £3,620." },
          { q: "Strz Academy closed January with £3,620. What is February's opening balance?", options: ["£2,500", "£680", "£3,620", "£0"], answer: 2, explanation: "Each month opens with the previous month's closing balance." },
          { q: "Strz Academy, April: sales £3,600; materials £1,400, wages £2,500, marketing £30, overheads £130. What is April's net cash flow?", options: ["£460", "−£460", "£3,600", "−£4,060"], answer: 1, explanation: "Outflows = £4,060. Net = 3,600 − 4,060 = −£460." }
        ],
        practice: [
          { q: "Complete the cash flow forecast for Strz Academy. Opening balance £2,500. Sales: Jan £4,600, Feb £6,700, Mar £7,300, Apr £3,600, May £8,000. Materials: £1,500, £1,800, £2,200, £1,400, £2,500. Wages: Jan £1,800, Feb and Mar £3,000, Apr and May £2,500. Marketing: Jan £60, Feb £10, Mar and May £50, Apr £30. Overheads: Jan £120, Feb £40, Mar and May £50, Apr £130. Give total outflows, net cash flow and closing balance for each month.", marks: 6, answer: "Total outflows: Jan 3,480 / Feb 4,850 / Mar 5,300 / Apr 4,060 / May 5,100\n\nNet cash flow: Jan 1,120 / Feb 1,850 / Mar 2,000 / Apr −460 / May 2,900\n\nOpening balance: Jan 2,500 / Feb 3,620 / Mar 5,470 / Apr 7,470 / May 7,010\n\nClosing balance: Jan 3,620 / Feb 5,470 / Mar 7,470 / Apr 7,010 / May 9,910\n\nNote: the printed workbook answer has wrong opening balances from February onward. These figures carry each closing balance forward correctly." },
          { q: "Explain the purpose of a spend authorisation process and why it is important.", marks: 4, answer: "- A spend authorisation is a request to make a purchase (1).\n- It prevents fraud (1).\n- It maintains a healthy cash flow position (1).\n- The authorisation process must be documented as an audit log (1)." },
          { q: "Explain how budgeting helps a business to manage its finances effectively.", marks: 4, answer: "- Budgeting lets a business plan and track spending (1).\n- Helps maintain finances throughout the accounting period (1).\n- Spending limits help the business stay within budget (1).\n- If budgets are not monitored, there is a risk of overspending leading to financial crisis (1)." },
          { q: "Discuss the risks to a business of poor management of revenue and expenditure. Refer to at least THREE risks.", marks: 9, answer: "Band descriptors:\n- 7 to 9: detailed analysis of 3+ risks (reputational, financial difficulties, legal difficulties); well developed with specific examples; evaluative and structured.\n- 4 to 6: good coverage of 2 to 3 risks with some development and business context.\n- 1 to 3: one or two risks identified, limited development." }
        ]
      }
    ]
  });
})();
