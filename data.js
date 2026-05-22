/**
 * Mahindra Finance DealerOS - Enterprise Core Seed Data
 * Designed for rich information density, high fidelity, and realistic operations.
 * Simplified for rural and semi-rural dealership networks.
 */

const DealerOSData = {
    // Current Active User Profile
    currentUser: {
        name: "Vikramaditya Singh",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
        role: "dealer_principal", // Default role
        dealership: "Mahindra Landmark Automobiles - West Division",
        region: "Maharashtra-1 Zone"
    },

    // Available User Persona Configurations
    personas: {
        dealer_principal: {
            title: "Showroom Owner",
            description: "Showroom Owner view: Check cash flow, daily sales, regional ranking, and vehicle stock loans.",
            allowedModules: ["dashboard", "enquiry", "loan", "portfolio", "compliance", "stock", "performance", "training", "comms", "security"],
            badge: "Owner",
            themeAccent: "#E31837"
        },
        dealer_admin: {
            title: "Showroom Manager",
            description: "Showroom Manager view: Upload customer documents (RC, Bill, Insurance) and track customer loan approvals.",
            allowedModules: ["dashboard", "enquiry", "loan", "compliance", "training", "comms"],
            badge: "Manager",
            themeAccent: "#E31837"
        },
        risk_team: {
            title: "Loan Checker (MFL)",
            description: "Mahindra Finance Checker view: Track customer dues, delay trends, and loan risks across areas.",
            allowedModules: ["dashboard", "portfolio", "performance", "security", "reports"],
            badge: "Loan Risk Checker",
            themeAccent: "#FF3366"
        },
        compliance_team: {
            title: "Document Checker (MFL)",
            description: "Mahindra Finance Auditor view: Verify customer documents, check insurance status, and approve pending loans.",
            allowedModules: ["dashboard", "loan", "compliance", "reports", "security"],
            badge: "Doc Checker",
            themeAccent: "#FFAA00"
        },
        executive_leadership: {
            title: "Senior Leader (MFL)",
            description: "Senior Leadership view: Get a broad map of vehicle loan sales, dealer health, and smart forecasts across India.",
            allowedModules: ["executive", "dashboard", "portfolio", "performance", "reports", "security"],
            badge: "Senior Leader",
            themeAccent: "#00F5D4"
        }
    },

    // KPI Matrix mapped by Persona
    kpis: {
        dealer_principal: [
            { id: "disbursement", label: "Total Loans Given", value: "₹24.85 Cr", change: "+14.2% MoM", status: "up", graph: [20, 22, 21, 23, 24.85] },
            { id: "active_cases", label: "Ongoing Loan Applications", value: "142 Cases", change: "42 in final sanction", status: "neutral", graph: [110, 125, 130, 138, 142] },
            { id: "tat", label: "Average Approval Time", value: "3.4 Hours", change: "-22 min vs last week", status: "up", graph: [4.2, 4.0, 3.8, 3.6, 3.4] },
            { id: "ta_utilization", label: "Stock Loan Limit Used", value: "78.4%", change: "₹11.75 Cr outstanding", status: "neutral", graph: [60, 65, 70, 75, 78.4] },
            { id: "pdd_pending", label: "Pending Customer Documents", value: "18 cases", change: "12 overdue > 30 days", status: "down", graph: [30, 26, 22, 20, 18] },
            { id: "health_score", label: "Showroom Health Score", value: "A+ / 94.2", change: "Top 5% nationwide", status: "up", graph: [90, 92, 92, 93, 94.2] }
        ],
        risk_team: [
            { id: "exposure", label: "Total Active Loans", value: "₹4,285.50 Cr", change: "West Region accounts for 32%", status: "neutral", graph: [4100, 4150, 4200, 4250, 4285.5] },
            { id: "npa", label: "Unpaid Dues % (NPA)", value: "1.48%", change: "-0.12% vs last Qtr", status: "up", graph: [1.65, 1.60, 1.55, 1.50, 1.48] },
            { id: "collection", label: "Monthly Collections %", value: "98.92%", change: "Industry beating", status: "up", graph: [98.1, 98.3, 98.5, 98.7, 98.92] },
            { id: "high_risk", label: "High Risk Showrooms", value: "3 Nodes", change: "Flagged for floorplan audits", status: "down", graph: [6, 5, 4, 3, 3] },
            { id: "bucket_mig", label: "Dues Delay Rate (30+ Days)", value: "0.82%", change: "Low delinquency slip", status: "up", graph: [1.1, 1.0, 0.95, 0.88, 0.82] },
            { id: "fraud_risk", label: "Suspicious Applications", value: "2 flagged", change: "Under forensic screening", status: "neutral", graph: [4, 3, 1, 0, 2] }
        ],
        compliance_team: [
            { id: "comp_score", label: "Document Check Score", value: "97.4%", change: "Standard target 95%", status: "up", graph: [95, 95.8, 96.2, 97.0, 97.4] },
            { id: "rc_pending", label: "Pending Vehicle Registration (RC)", value: "24 Files", change: "14 matching OCR rules", status: "neutral", graph: [35, 30, 29, 26, 24] },
            { id: "ins_pending", label: "Pending Insurance Updates", value: "8 Cases", change: "Auto SMS reminders sent", status: "up", graph: [15, 12, 10, 9, 8] },
            { id: "inv_missing", label: "Bill Mismatches", value: "1 Case", change: "Mismatch in ex-showroom tax", status: "up", graph: [5, 3, 2, 1, 1] },
            { id: "ocr_acc", label: "Auto-Document Check Success %", value: "89.2%", change: "System average is 85%", status: "up", graph: [82, 84, 86, 88, 89.2] },
            { id: "audit_backlog", label: "Unfinished Document Checks", value: "0 Cases", change: "Clear queue", status: "up", graph: [4, 2, 1, 0, 0] }
        ],
        executive_leadership: [
            { id: "exec_disburse", label: "All India Loans Given", value: "₹2,485.60 Cr", change: "+18.9% YoY", status: "up", graph: [2000, 2150, 2300, 2400, 2485.6] },
            { id: "net_interest", label: "Average Interest Earnings", value: "8.12%", change: "Steady spreads", status: "neutral", graph: [8.0, 8.05, 8.1, 8.12, 8.12] },
            { id: "total_npa", label: "All India Unpaid Dues %", value: "1.68%", change: "Target threshold < 2.0%", status: "up", graph: [1.88, 1.82, 1.76, 1.72, 1.68] },
            { id: "active_dealers", label: "Active Showrooms Financed", value: "1,142 Dealers", change: "42 newly onboarded", status: "up", graph: [1100, 1115, 1125, 1135, 1142] },
            { id: "tat_national", label: "All India Approval Time", value: "2.8 Hours", change: "Digital workflow impact", status: "up", graph: [3.5, 3.2, 3.0, 2.9, 2.8] },
            { id: "roi", label: "Earning Power of Assets (RoA)", value: "3.24%", change: "Top quartile performance", status: "up", graph: [2.9, 3.05, 3.12, 3.2, 3.24] }
        ]
    },

    // Business & Enquiry Leads Pipeline
    pipelineLeads: [
        {
            id: "lead_101",
            name: "Rajesh Kumar",
            vehicle: "Mahindra XUV700 AX7 L",
            amount: "₹22,40,000",
            source: "Walk-in",
            probability: 92,
            score: "A+",
            stage: "enquiry",
            phone: "+91 98765 43210",
            eligibility: "Auto-Approved - Clean Credit Record",
            timeline: [
                { date: "2026-05-21 10:15", title: "Enquiry Registered", text: "Walk-in enquiry logged by Executive Amit Patel." },
                { date: "2026-05-21 11:30", title: "Credit Score Match", text: "Credit check passed. Easy auto-approval ready." }
            ]
        },
        {
            id: "lead_102",
            name: "Priyanka Sharma",
            vehicle: "Mahindra Thar ROXX 4x4",
            amount: "₹18,50,000",
            source: "Digital Portal",
            probability: 74,
            score: "B",
            stage: "documents",
            phone: "+91 91234 56789",
            eligibility: "Checking Documents - Aadhar ok, checking bank details",
            timeline: [
                { date: "2026-05-20 14:20", title: "Web Inquiry Recieved", text: "Source: Mahindra Finance Official Customizer portal." },
                { date: "2026-05-21 09:00", title: "KYC Uploaded", text: "Aadhar & PAN verified successfully via NSDL gateway integration." }
            ]
        },
        {
            id: "lead_103",
            name: "Ananya Deshmukh",
            vehicle: "Mahindra Scorpio-N Z8 L",
            amount: "₹20,10,000",
            source: "WhatsApp Bot",
            probability: 88,
            score: "A",
            stage: "underwriting",
            phone: "+91 88888 77777",
            eligibility: "High Match - Monthly income checks look great",
            timeline: [
                { date: "2026-05-19 11:00", title: "WhatsApp Chat Initialized", text: "Interactive chat bot captured base parameters." },
                { date: "2026-05-20 16:30", title: "Income Verification", text: "Perfios Bank Analyzer verified stable income cashflow." }
            ]
        },
        {
            id: "lead_104",
            name: "Aditya Builders & Infra",
            vehicle: "Mahindra Bolero Neo+ (3 units)",
            amount: "₹34,80,000",
            source: "Referral",
            probability: 95,
            score: "A++",
            stage: "sanctioned",
            phone: "+91 99000 88888",
            eligibility: "Bulk Order Approved - Safe for delivery",
            timeline: [
                { date: "2026-05-18 10:00", title: "Commercial Lead Received", text: "Referral from Regional Commercial Vehicle Hub." },
                { date: "2026-05-20 12:00", title: "Sanction Letter Issued", text: "Approved at 8.75% IRR with corporate guarantee." }
            ]
        },
        {
            id: "lead_105",
            name: "Sunil Ghadge",
            vehicle: "Mahindra 3XO AX5",
            amount: "₹11,20,000",
            source: "Walk-in",
            probability: 100,
            score: "B+",
            stage: "disbursed",
            phone: "+91 97777 66666",
            eligibility: "Money Sent - Delivery done, vehicle registered",
            timeline: [
                { date: "2026-05-15 09:30", title: "Booking Received", text: "Customer completed downpayment of ₹2.5L." },
                { date: "2026-05-19 14:00", title: "Payout Triggered", text: "Dealer pool account credited with ₹8.7L loan amount." }
            ]
        }
    ],

    // PDD Compliance Centre Active Cases
    complianceCases: [
        {
            id: "comp_201",
            customerName: "Rohan Jagtap",
            vehicle: "Mahindra Thar AX Opt",
            loanAmount: "₹16.40 Lakhs",
            disbursementDate: "2026-05-02",
            status: "RC_MISSING",
            statusLabel: "RC Missing",
            score: "Medium Urgency",
            daysPending: 19,
            uploads: {
                rc: null,
                invoice: "VERIFIED",
                insurance: "VERIFIED"
            }
        },
        {
            id: "comp_202",
            customerName: "Karan Johar Autos",
            vehicle: "Mahindra XUV400 EV",
            loanAmount: "₹19.10 Lakhs",
            disbursementDate: "2026-04-12",
            status: "OVERDUE_ALL",
            statusLabel: "Highly Critical (All Docs Missing)",
            score: "High Urgency",
            daysPending: 39,
            uploads: {
                rc: null,
                invoice: null,
                insurance: null
            }
        },
        {
            id: "comp_203",
            customerName: "Megha Synthetics",
            vehicle: "Mahindra Scorpio Classic S11",
            loanAmount: "₹17.90 Lakhs",
            disbursementDate: "2026-05-14",
            status: "INSURANCE_EXPIRED",
            statusLabel: "Expired Insurance",
            score: "Critical Urgency",
            daysPending: 7,
            uploads: {
                rc: "VERIFIED",
                invoice: "VERIFIED",
                insurance: null
            }
        }
    ],

    // TA (Trade Advance) & Stock Finance
    stockFinance: {
        totalLimit: 150000000, // 15 Cr
        utilizedAmount: 117500000, // 11.75 Cr
        availableLimit: 32500000, // 3.25 Cr
        inventoryRate: "9.25% p.a.",
        outstandingVehicles: [
            { id: "vin_901", model: "Thar ROXX 4WD AX7", chassis: "MA3NVE456G901", age: "12 Days", status: "FUNDED", cost: "₹18,50,000", location: "Showroom Floor" },
            { id: "vin_902", model: "XUV700 AX7 L Petrol", chassis: "MA3NVE234H802", age: "24 Days", status: "FUNDED", cost: "₹21,80,000", location: "Transit" },
            { id: "vin_903", model: "Scorpio-N Z8 Diesel", chassis: "MA3NVE987A105", age: "42 Days", status: "WARNING", cost: "₹19,20,000", location: "Stockyard B" },
            { id: "vin_904", model: "Bolero Neo N10", chassis: "MA3NVE123C402", age: "65 Days", status: "CRITICAL", cost: "₹11,40,000", location: "Stockyard A" },
            { id: "vin_905", model: "XUV 3XO AX5 Luxury", chassis: "MA3NVE654K109", age: "2 Days", status: "PENDING_RELEASE", cost: "₹12,10,000", location: "Plant Gate" }
        ],
        recentFundingRequests: [
            { id: "req_501", date: "2026-05-21", quantity: 4, amount: "₹68,40,000", status: "APPROVED", remarks: "Funds transferred to Mahindra Factory A/C" },
            { id: "req_502", date: "2026-05-20", quantity: 2, amount: "₹34,20,000", status: "UNDER_REVIEW", remarks: "Verifying physical invoice manifest" }
        ]
    },

    // Institutional Portfolio Risk and Aging
    portfolioRisk: {
        totalAUM: "₹248.50 Cr",
        averageLTV: "74.8%",
        bucketBreakdown: {
            standard: "96.48%",
            bucket_1: "1.82%",
            bucket_2: "0.82%",
            bucket_3: "0.58%",
            npa: "0.30%"
        },
        geographicDelinquency: [
            { state: "Maharashtra", nodes: 42, activeAum: "₹82.4 Cr", npa: "0.22%", trend: "STABLE" },
            { state: "Gujarat", nodes: 28, activeAum: "₹64.2 Cr", npa: "0.18%", trend: "DECREASING" },
            { state: "Madhya Pradesh", nodes: 22, activeAum: "₹42.1 Cr", npa: "1.82%", trend: "INCREASING" },
            { state: "Karnataka", nodes: 31, activeAum: "₹59.8 Cr", npa: "0.42%", trend: "STABLE" }
        ]
    },

    // Leaderboards & Regional Rankings
    dealerPerformance: [
        { rank: 1, name: "Mahindra Landmark Automobiles - West", region: "Mumbai-1", score: 98.4, disbursement: "₹24.85 Cr" },
        { rank: 2, name: "Sahyadri Motors", region: "Pune-3", score: 96.2, disbursement: "₹21.10 Cr" },
        { rank: 3, name: "Ghatge Mahindra", region: "Kolhapur", score: 94.8, disbursement: "₹18.40 Cr" },
        { rank: 4, name: "Unnati Vehicles", region: "Nagpur-2", score: 89.2, disbursement: "₹14.90 Cr" },
        { rank: 5, name: "Sterling Automobiles (Flagged Node)", region: "Indore-1", score: 62.5, disbursement: "₹11.20 Cr" }
    ],

    // Security Analytics Logs
    securityLogs: [
        { timestamp: "2026-05-21 13:42:15", user: "Principal Vikramaditya", ip: "103.45.12.8", device: "Safari 17.5 - macOS Sonoma", action: "Authorized Access", status: "SAFE" },
        { timestamp: "2026-05-21 11:02:44", user: "Admin Amit.P", ip: "152.12.98.115", device: "Chrome 122 - Windows 11", action: "Upload Document (RC)", status: "SAFE" },
        { timestamp: "2026-05-20 22:15:09", user: "System System", ip: "18.232.14.88", device: "AWS Lambda - API Hook", action: "MFA Setup Change Attempt", status: "SAFE" },
        { timestamp: "2026-05-20 18:31:02", user: "Admin Amit.P", ip: "220.14.120.31", device: "Firefox - Unknown OS", action: "Failed MFA - OTP Expired", status: "SUSPICIOUS" }
    ],

    // Training Modules and Gamification
    trainingModules: [
        { id: "tr_1", title: "Mahindra Customer Loan Approval Training", length: "45 mins", progress: 100, status: "COMPLETED", xp: 120 },
        { id: "tr_2", title: "Showroom Stock Loan & Limits Training", length: "60 mins", progress: 65, status: "IN_PROGRESS", xp: 150 },
        { id: "tr_3", title: "Customer ID Check & Auto-Document Matching", length: "30 mins", progress: 0, status: "NOT_STARTED", xp: 80 }
    ],

    // Institutional Discussions & MOM System
    communications: [
        {
            id: "chat_001",
            author: "NBFC Operations Manager",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
            message: "Team, we have updated the automatic stock loan limit system. If your document check score stays above 96% for 3 months in a row, your stock loan limit will automatically increase by 15% without any extra paperwork.",
            time: "2 Hours ago",
            threadCount: 4
        },
        {
            id: "chat_002",
            author: "Risk Control Head",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
            message: "We are seeing many pending RC (Registration) uploads in the Indore region. Showroom managers, please upload outstanding RCs to avoid loan release delays.",
            time: "Yesterday at 15:40",
            threadCount: 12
        }
    ]
};

// Export to window object for frontend SPA access
window.DealerOSData = DealerOSData;
