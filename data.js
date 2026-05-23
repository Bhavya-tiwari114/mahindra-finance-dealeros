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
            title: "Showroom Owner (Owner)",
            description: "Showroom Owner view: Check cash flow, daily sales, regional ranking, and vehicle stock loans.",
            allowedModules: ["dashboard", "enquiry", "loan", "compliance", "stock", "portfolio", "performance", "executive", "comms", "training", "security", "support", "schemes", "customer360", "emicalc", "kycvault", "audit", "productkb", "videotutorials"],
            badge: "Owner",
            themeAccent: "#E31837"
        },
        dealer_admin: {
            title: "Showroom Manager (Manager)",
            description: "Showroom Manager view: Upload customer documents (RC, Bill, Insurance) and track customer loan approvals.",
            allowedModules: ["dashboard", "enquiry", "loan", "compliance", "stock", "portfolio", "training", "comms", "support", "schemes", "customer360", "emicalc", "kycvault", "productkb", "videotutorials"],
            badge: "Manager",
            themeAccent: "#E31837"
        },
        risk_team: {
            title: "Sales Executive",
            description: "Sales Executive view: Check daily leads, customer enquiries, loan status, and active schemes.",
            allowedModules: ["dashboard", "enquiry", "loan", "performance", "schemes", "customer360", "emicalc", "productkb", "videotutorials", "support"],
            badge: "Sales Exec",
            themeAccent: "#FF3366"
        },
        compliance_team: {
            title: "Finance Executive",
            description: "Finance Executive view: Scan customer documents, complete KYC checks, verify bills, and track payouts.",
            allowedModules: ["dashboard", "loan", "compliance", "kycvault", "audit", "productkb", "support"],
            badge: "Finance Exec",
            themeAccent: "#FFAA00"
        },
        executive_leadership: {
            title: "Senior Leader (MFL)",
            description: "Senior Leadership view: Get a broad map of vehicle loan sales, dealer health, and smart forecasts across India.",
            allowedModules: ["executive", "dashboard", "portfolio", "performance", "reports", "security", "support", "productkb"],
            badge: "Senior Leader",
            themeAccent: "#00F5D4"
        }
    },

    // KPI Matrix mapped by Persona
    kpis: {
        dealer_principal: [
            { id: "ta_utilization", label: "Vehicle Stock Loans (TA) Balance", value: "₹11.75 Cr", change: "Used limit: 78.4%", status: "neutral", graph: [60, 65, 70, 75, 78.4] },
            { id: "disbursement", label: "Disbursals This Month", value: "₹2.45 Cr", change: "+14.2% vs last month", status: "up", graph: [20, 22, 21, 23, 24.5] },
            { id: "commission", label: "Commission Earned", value: "₹6.82 Lakhs", change: "Payout direct to bank A/C", status: "up", graph: [4.2, 4.8, 5.3, 6.1, 6.82] },
            { id: "pdd_pending", label: "Pending Documents", value: "18 cases", change: "12 files missing RC", status: "down", graph: [30, 26, 22, 20, 18] }
        ],
        dealer_admin: [
            { id: "ta_utilization", label: "Vehicle Stock Loans (TA) Balance", value: "₹11.75 Cr", change: "Used limit: 78.4%", status: "neutral", graph: [60, 65, 70, 75, 78.4] },
            { id: "disbursement", label: "Disbursals This Month", value: "₹2.45 Cr", change: "+14.2% vs last month", status: "up", graph: [20, 22, 21, 23, 24.5] },
            { id: "commission", label: "Commission Earned", value: "₹6.82 Lakhs", change: "Payout direct to bank A/C", status: "up", graph: [4.2, 4.8, 5.3, 6.1, 6.82] },
            { id: "pdd_pending", label: "Pending Documents", value: "18 cases", change: "12 files missing RC", status: "down", graph: [30, 26, 22, 20, 18] }
        ],
        risk_team: [
            { id: "disbursement", label: "Disbursals This Month", value: "₹2.45 Cr", change: "+14.2% vs last month", status: "up", graph: [20, 22, 21, 23, 24.5] },
            { id: "active_cases", label: "Ongoing Applications", value: "142 Cases", change: "42 in final sanction", status: "neutral", graph: [110, 125, 130, 138, 142] }
        ],
        compliance_team: [
            { id: "comp_score", label: "Document Check Score", value: "97.4%", change: "Standard target 95%", status: "up", graph: [95, 95.8, 96.2, 97.0, 97.4] },
            { id: "rc_pending", label: "Pending Registration (RC)", value: "24 Files", change: "14 matching scanning rules", status: "neutral", graph: [35, 30, 29, 26, 24] }
        ],
        executive_leadership: [
            { id: "exec_disburse", label: "All India Loans Given", value: "₹2,485.60 Cr", change: "+18.9% YoY", status: "up", graph: [2000, 2150, 2300, 2400, 2485.6] },
            { id: "total_npa", label: "All India Unpaid Dues %", value: "1.68%", change: "Target threshold < 2.0%", status: "up", graph: [1.88, 1.82, 1.76, 1.72, 1.68] }
        ]
    },

    // Business & Enquiry Leads Pipeline (Exactly 30 leads)
    pipelineLeads: [
        // ENQUIRY STAGE (12 leads)
        { id: "lead_101", name: "Rajesh Kumar", vehicle: "Mahindra XUV700 AX7 L", amount: "₹22,40,000", source: "Walk-in", probability: 92, score: "A+", stage: "enquiry", phone: "+91 98765 43210", eligibility: "Auto-Approved - Clean Credit Record", timeline: [{ date: "2026-05-21 10:15", title: "Enquiry Registered", text: "Walk-in enquiry logged by Executive Amit Patel." }, { date: "2026-05-21 11:30", title: "Credit Score Match", text: "Credit check passed. Easy auto-approval ready." }] },
        { id: "lead_106", name: "Amit Patel", vehicle: "Mahindra Scorpio-N Z8 L", amount: "₹20,10,000", source: "Digital Portal", probability: 80, score: "A", stage: "enquiry", phone: "+91 99887 76655", eligibility: "Income check completed", timeline: [{ date: "2026-05-22 09:30", title: "Enquiry Logged", text: "Web inquiry captured." }] },
        { id: "lead_107", name: "Vikram Deshmukh", vehicle: "Mahindra Thar ROXX 4x4", amount: "₹18,50,000", source: "Walk-in", probability: 75, score: "B", stage: "enquiry", phone: "+91 91122 33445", eligibility: "Checking basic details", timeline: [{ date: "2026-05-22 10:00", title: "Enquiry Logged", text: "Walk-in customer interested in Thar ROXX." }] },
        { id: "lead_108", name: "Suresh Ghadge", vehicle: "Mahindra Bolero Neo+ N10", amount: "₹11,50,000", source: "WhatsApp Bot", probability: 85, score: "B+", stage: "enquiry", phone: "+91 92233 44556", eligibility: "Eligible for commercial schemes", timeline: [{ date: "2026-05-22 10:30", title: "WhatsApp Query", text: "Details captured via automated chat." }] },
        { id: "lead_109", name: "Divya Patil", vehicle: "Mahindra XUV 3XO AX5", amount: "₹11,20,000", source: "Referral", probability: 90, score: "A-", stage: "enquiry", phone: "+91 93344 55667", eligibility: "Pre-approved corporate loan", timeline: [{ date: "2026-05-22 11:15", title: "Referral Registered", text: "Corporate code applied successfully." }] },
        { id: "lead_110", name: "Ramesh Shinde", vehicle: "Mahindra Scorpio Classic S11", amount: "₹17,90,000", source: "Walk-in", probability: 60, score: "C", stage: "enquiry", phone: "+91 94455 66778", eligibility: "Documents pending submission", timeline: [{ date: "2026-05-22 11:45", title: "Enquiry Registered", text: "Details logged by Sales RM." }] },
        { id: "lead_111", name: "Sunita Pawar", vehicle: "Mahindra Thar ROXX 2WD", amount: "₹15,40,000", source: "Digital Portal", probability: 78, score: "B", stage: "enquiry", phone: "+91 95566 77889", eligibility: "KYC details received", timeline: [{ date: "2026-05-22 12:15", title: "Portal Registration", text: "Customer registered interest online." }] },
        { id: "lead_112", name: "Anil More", vehicle: "Mahindra XUV700 AX5", amount: "₹19,20,000", source: "Walk-in", probability: 70, score: "B-", stage: "enquiry", phone: "+91 96677 88990", eligibility: "Awaiting bank statement", timeline: [{ date: "2026-05-22 12:45", title: "Walk-in Enquiry", text: "Customer test drove XUV700." }] },
        { id: "lead_113", name: "Priya Jagtap", vehicle: "Mahindra Bolero Neo N8", amount: "₹10,20,000", source: "WhatsApp Bot", probability: 82, score: "B+", stage: "enquiry", phone: "+91 97788 99001", eligibility: "Income verification active", timeline: [{ date: "2026-05-22 13:15", title: "WhatsApp Query", text: "OTP verified by customer." }] },
        { id: "lead_114", name: "Mahesh Joshi", vehicle: "Mahindra Scorpio-N Z6", amount: "₹16,80,000", source: "Referral", probability: 88, score: "A", stage: "enquiry", phone: "+91 98899 00112", eligibility: "Salary account with partner bank", timeline: [{ date: "2026-05-22 13:45", title: "Referral Registered", text: "RM assigned for doorstep KYC collection." }] },
        { id: "lead_115", name: "Geeta Rane", vehicle: "Mahindra XUV 3XO MX3", amount: "₹9,80,000", source: "Digital Portal", probability: 91, score: "A+", stage: "enquiry", phone: "+91 99900 11223", eligibility: "Excellent credit score", timeline: [{ date: "2026-05-22 14:15", title: "Web Lead Received", text: "Score card generated instantly." }] },
        { id: "lead_116", name: "Santosh Kulkarni", vehicle: "Mahindra Scorpio Classic S5", amount: "₹14,30,000", source: "Walk-in", probability: 65, score: "B-", stage: "enquiry", phone: "+91 90011 22334", eligibility: "Checking property collateral details", timeline: [{ date: "2026-05-22 14:45", title: "Enquiry Registered", text: "Rural loan specialist assigned." }] },

        // DOCUMENTS PENDING STAGE (5 leads)
        { id: "lead_102", name: "Priyanka Sharma", vehicle: "Mahindra Thar ROXX 4x4", amount: "₹18,50,000", source: "Digital Portal", probability: 74, score: "B", stage: "documents", phone: "+91 91234 56789", eligibility: "Checking Documents - Aadhar ok, checking bank details", timeline: [{ date: "2026-05-20 14:20", title: "Web Inquiry Recieved", text: "Source: Mahindra Finance Official Customizer portal." }, { date: "2026-05-21 09:00", title: "KYC Uploaded", text: "Aadhar & PAN verified successfully via NSDL gateway integration." }] },
        { id: "lead_117", name: "Rohan Jagtap", vehicle: "Mahindra Scorpio-N Z8 Diesel", amount: "₹21,10,000", source: "Walk-in", probability: 72, score: "B+", stage: "documents", phone: "+91 91223 34455", eligibility: "ITR missing, pending customer submission", timeline: [{ date: "2026-05-21 10:00", title: "KYC Initiated", text: "Aadhaar verified." }] },
        { id: "lead_118", name: "Sachin Kadam", vehicle: "Mahindra Bolero Neo N10", amount: "₹11,40,000", source: "WhatsApp Bot", probability: 68, score: "B", stage: "documents", phone: "+91 92334 45566", eligibility: "Land record upload pending", timeline: [{ date: "2026-05-21 11:30", title: "KYC Initiated", text: "PAN check complete." }] },
        { id: "lead_119", name: "Kavita Shinde", vehicle: "Mahindra XUV 3XO AX5 L", amount: "₹12,20,000", source: "Referral", probability: 80, score: "A-", stage: "documents", phone: "+91 93445 56677", eligibility: "Aadhar upload done, bank statement pending", timeline: [{ date: "2026-05-21 13:00", title: "Document Setup", text: "Customer requested digital link." }] },
        { id: "lead_120", name: "Vijay Patil", vehicle: "Mahindra Scorpio Classic S11", amount: "₹17,90,000", source: "Walk-in", probability: 75, score: "B+", stage: "documents", phone: "+91 94556 67788", eligibility: "GST certificate check pending", timeline: [{ date: "2026-05-21 14:30", title: "KYC Initiated", text: "Business registration proof received." }] },

        // UNDERWRITING STAGE (3 leads)
        { id: "lead_103", name: "Ananya Deshmukh", vehicle: "Mahindra Scorpio-N Z8 L", amount: "₹20,10,000", source: "WhatsApp Bot", probability: 88, score: "A", stage: "underwriting", phone: "+91 88888 77777", eligibility: "High Match - Monthly income checks look great", timeline: [{ date: "2026-05-19 11:00", title: "WhatsApp Chat Initialized", text: "Interactive chat bot captured base parameters." }, { date: "2026-05-20 16:30", title: "Income Verification", text: "Perfios Bank Analyzer verified stable income cashflow." }] },
        { id: "lead_121", name: "Nitin Sawant", vehicle: "Mahindra Thar ROXX AX7", amount: "₹19,50,000", source: "Walk-in", probability: 86, score: "A", stage: "underwriting", phone: "+91 95667 78899", eligibility: "Underwriter reviewing Co-applicant profile", timeline: [{ date: "2026-05-20 10:00", title: "File Submitted", text: "Passed automated risk screening." }] },
        { id: "lead_122", name: "Sneha Kulkarni", vehicle: "Mahindra XUV700 AX7", amount: "₹21,80,000", source: "Digital Portal", probability: 89, score: "A+", stage: "underwriting", phone: "+91 96778 89900", eligibility: "Final check of residential verification", timeline: [{ date: "2026-05-20 12:00", title: "File Submitted", text: "Physical verification check done." }] },

        // SANCTIONED STAGE (2 leads)
        { id: "lead_104", name: "Aditya Builders & Infra", vehicle: "Mahindra Bolero Neo+ (3 units)", amount: "₹34,80,000", source: "Referral", probability: 95, score: "A++", stage: "sanctioned", phone: "+91 99000 88888", eligibility: "Bulk Order Approved - Safe for delivery", timeline: [{ date: "2026-05-18 10:00", title: "Commercial Lead Received", text: "Referral from Regional Commercial Vehicle Hub." }, { date: "2026-05-20 12:00", title: "Sanction Letter Issued", text: "Approved at 8.75% IRR with corporate guarantee." }] },
        { id: "lead_123", name: "Megha Synthetics", vehicle: "Mahindra Scorpio Classic S11", amount: "₹17,90,000", source: "Referral", probability: 94, score: "A+", stage: "sanctioned", phone: "+91 97889 90011", eligibility: "Sanction letter signed, awaiting delivery note", timeline: [{ date: "2026-05-20 15:30", title: "Sanction Issued", text: "Sanction letter signed digitally by MD." }] },

        // DISBURSED STAGE (8 leads)
        { id: "lead_105", name: "Sunil Ghadge", vehicle: "Mahindra 3XO AX5", amount: "₹11,20,000", source: "Walk-in", probability: 100, score: "B+", stage: "disbursed", phone: "+91 97777 66666", eligibility: "Money Sent - Delivery done, vehicle registered", timeline: [{ date: "2026-05-15 09:30", title: "Booking Received", text: "Customer completed downpayment of ₹2.5L." }, { date: "2026-05-19 14:00", title: "Payout Triggered", text: "Dealer pool account credited with ₹8.7L loan amount." }] },
        { id: "lead_124", name: "Manoj Tiwari", vehicle: "Mahindra Scorpio-N Z8 L", amount: "₹20,10,000", source: "Digital Portal", probability: 100, score: "A", stage: "disbursed", phone: "+91 98990 01122", eligibility: "Loan fully disbursed and active", timeline: [{ date: "2026-05-14 11:00", title: "Disbursed", text: "Disbursal batch completed successfully." }] },
        { id: "lead_125", name: "Harish Verma", vehicle: "Mahindra Thar ROXX 4WD", amount: "₹18,50,000", source: "Walk-in", probability: 100, score: "B+", stage: "disbursed", phone: "+91 99011 22334", eligibility: "Disbursed, registration uploaded", timeline: [{ date: "2026-05-12 14:00", title: "Disbursed", text: "Vehicle delivered to customer yesterday." }] },
        { id: "lead_126", name: "Sanjay Patil", vehicle: "Mahindra Bolero Neo N10", amount: "₹11,40,000", source: "Referral", probability: 100, score: "A-", stage: "disbursed", phone: "+91 90122 33445", eligibility: "Disbursed, first EMI scheduled", timeline: [{ date: "2026-05-10 10:00", title: "Disbursed", text: "Funding pool cleared." }] },
        { id: "lead_127", name: "Rahul Shinde", vehicle: "Mahindra Scorpio Classic S11", amount: "₹17,90,000", source: "Walk-in", probability: 100, score: "B", stage: "disbursed", phone: "+91 91233 44556", eligibility: "Disbursed, RC scanner verified", timeline: [{ date: "2026-05-08 16:30", title: "Disbursed", text: "All documents processed." }] },
        { id: "lead_128", name: "Neeta Deshmukh", vehicle: "Mahindra XUV700 AX7 L", amount: "₹22,40,000", source: "Digital Portal", probability: 100, score: "A+", stage: "disbursed", phone: "+91 92344 55667", eligibility: "Disbursed, loan book active", timeline: [{ date: "2026-05-05 12:00", title: "Disbursed", text: "High value loan cleared successfully." }] },
        { id: "lead_129", name: "Ajay Pawar", vehicle: "Mahindra XUV 3XO AX5", amount: "₹11,20,000", source: "WhatsApp Bot", probability: 100, score: "B+", stage: "disbursed", phone: "+91 93455 66778", eligibility: "Disbursed, files archived", timeline: [{ date: "2026-05-02 09:30", title: "Disbursed", text: "Sub-vention benefits credited to dealer pool." }] },
        { id: "lead_130", name: "Sandeep Kadam", vehicle: "Mahindra Scorpio-N Z6", amount: "₹16,80,000", source: "Walk-in", probability: 100, score: "B", stage: "disbursed", phone: "+91 94566 77889", eligibility: "Disbursed, dealer payout completed", timeline: [{ date: "2026-04-28 15:30", title: "Disbursed", text: "Disbursal verification successful." }] }
    ],

    // Document Scanner (Compliance Center) Cases
    complianceCases: [
        {
            id: "comp_201",
            customerName: "Rohan Jagtap",
            vehicle: "Mahindra Thar AX Opt",
            loanAmount: "₹16.40 Lakhs",
            disbursementDate: "2026-05-02",
            status: "RC_MISSING",
            statusLabel: "⚠️ RC Missing",
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
            statusLabel: "❌ Rejected",
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
            statusLabel: "⚠️ RC Missing",
            score: "Critical Urgency",
            daysPending: 7,
            uploads: {
                rc: "VERIFIED",
                invoice: "VERIFIED",
                insurance: null
            }
        },
        {
            id: "comp_204",
            customerName: "Ramesh Patil",
            vehicle: "Mahindra Scorpio N Z8",
            loanAmount: "₹20.10 Lakhs",
            disbursementDate: "2026-05-18",
            status: "COMPLETE",
            statusLabel: "✅ Complete",
            score: "Satisfactory",
            daysPending: 4,
            uploads: {
                rc: "VERIFIED",
                invoice: "VERIFIED",
                insurance: "VERIFIED"
            }
        }
    ],

    // TA (Trade Advance) & Stock Finance (Exactly 3 rows outstanding)
    stockFinance: {
        totalLimit: 150000000, // 15 Cr
        utilizedAmount: 117500000, // 11.75 Cr
        availableLimit: 32500000, // 3.25 Cr
        inventoryRate: "9.25% p.a.",
        outstandingVehicles: [
            { id: "vin_901", model: "Thar ROXX 4WD AX7", chassis: "MA3NVE456G901", age: "12 Days", status: "FUNDED", cost: "₹18,50,000", location: "Showroom Floor" },
            { id: "vin_902", model: "XUV700 AX7 L Petrol", chassis: "MA3NVE234H802", age: "24 Days", status: "FUNDED", cost: "₹21,80,000", location: "Transit" },
            { id: "vin_903", model: "Scorpio-N Z8 Diesel", chassis: "MA3NVE987A105", age: "42 Days", status: "WARNING", cost: "₹19,20,000", location: "Stockyard B" }
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
        { timestamp: "2026-05-21 13:42:15", user: "Vikramaditya S. (Owner)", ip: "103.45.12.8", device: "Safari 17.5 - macOS Sonoma", action: "Authorized Access", status: "SAFE" },
        { timestamp: "2026-05-21 11:02:44", user: "Amit P. (Manager)", ip: "152.12.98.115", device: "Chrome 122 - Windows 11", action: "Upload Document (RC)", status: "SAFE" },
        { timestamp: "2026-05-20 22:15:09", user: "System System", ip: "18.232.14.88", device: "AWS Lambda - API Hook", action: "MFA Setup Change Attempt", status: "SAFE" },
        { timestamp: "2026-05-20 18:31:02", user: "Amit P. (Manager)", ip: "220.14.120.31", device: "Firefox - Unknown OS", action: "Failed MFA - OTP Expired", status: "SUSPICIOUS" }
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
