/**
 * Mahindra Finance DealerOS - Client Side State Controller & UI Engine
 */

class DealerOSApp {
    constructor() {
        this.state = {
            currentRole: 'dealer_principal',
            currentTab: 'dashboard',
            pipelineLeads: [...window.DealerOSData.pipelineLeads],
            complianceCases: [...window.DealerOSData.complianceCases],
            stockFinance: { ...window.DealerOSData.stockFinance },
            trainingModules: [...window.DealerOSData.trainingModules],
            communications: [...window.DealerOSData.communications],
            chatMessages: [
                {
                    sender: 'assistant',
                    text: 'Welcome, Vikramaditya! I am your DealerOS Showroom AI Assistant. How can I help you manage your showroom and loans today?',
                    time: 'Just now'
                }
            ],
            selectedLeadId: 'lead_101',
            charts: {},
            notifications: [
                {
                    id: "notif_1",
                    text: "Indore Showroom (Sterling) stock loan payment delayed - ₹11.20L outstanding.",
                    time: "10 mins ago",
                    unread: true,
                    type: "stock",
                    targetId: "Sterling Automobiles (Flagged Node)"
                },
                {
                    id: "notif_2",
                    text: "New Lead Rajesh Kumar - Mahindra XUV700 auto-approved for loan.",
                    time: "30 mins ago",
                    unread: true,
                    type: "loan",
                    targetId: "lead_101"
                },
                {
                    id: "notif_3",
                    text: "Priyanka Sharma PAN/Aadhar verified. Pending final document check.",
                    time: "1 hour ago",
                    unread: true,
                    type: "compliance",
                    targetId: "lead_102"
                },
                {
                    id: "notif_4",
                    text: "New course available: 'Showroom Stock Loan & Limits' (150 XP)",
                    time: "2 hours ago",
                    unread: false,
                    type: "training",
                    targetId: "tr_2"
                }
            ],
            supportTickets: [
                { id: "TCK-8902", category: "payouts", subject: "Commission payout delay for lead Rajesh Kumar", status: "In Progress", date: "2026-05-21 14:30", description: "The loan was disbursed on May 20, but the commission of 0.5% is not yet reflecting in our payouts dashboard." },
                { id: "TCK-8903", category: "kyc", subject: "Aadhaar verification error - Ramesh Patil", status: "Resolved", date: "2026-05-20 11:15", description: "Customer Aadhaar has mismatched middle name. Resolved after uploading land records manual override." }
            ],
            schemes: [
                { id: "SCH-001", title: "Thar Roxx Rural Farmer Premium", category: "suv", rate: "8.75%", fee: "Waived", script: "Pitch 100% on-road funding for certified farmers with land records. No pre-payment penalty after 12 months.", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=350&auto=format&fit=crop" },
                { id: "SCH-002", title: "Bolero Neo Festival Zero-Fee", category: "commercial", rate: "9.25%", fee: "Waived", script: "Highlight ₹15,000 exchange bonus and zero processing charges. Ideal for local travel agency expansion.", image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=350&auto=format&fit=crop" },
                { id: "SCH-003", title: "XUV400 EV Eco-Drive Boost", category: "ev", rate: "7.99%", fee: "₹1,999", script: "Leverage state government subsidy + lowest 7.99% green interest rate. Pitch 5-year battery warranty coverage.", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=350&auto=format&fit=crop" }
            ],
            productKb: [
                { id: "DOC-901", title: "Mahindra SUV Loan Policy Handbook Q2-2026", category: "suv", type: "PDF Circular", date: "2026-05-15", size: "2.4 MB", description: "Official LTV grid, interest rates, and co-applicant rules for Scorpio-N, XUV700, and Thar ROXX." },
                { id: "DOC-902", title: "Tractor Commercial Funding Scheme Grid v4", category: "tractor", type: "PDF Circular", date: "2026-05-10", size: "1.8 MB", description: "Special crop-cycle EMI frequencies, seasonal moratorium rules, and rural agriculture documentation checklists." },
                { id: "DOC-903", title: "Aadhaar Card OTP Verification Manual v2", category: "kyc", type: "PDF Guide", date: "2026-05-01", size: "950 KB", description: "Step-by-step instructions for dealing with biometric mismatch and utilizing local Sarpanch declarations." },
                { id: "DOC-904", title: "Quick Reference EMI Rate Chart - All Models", category: "all", type: "PDF Sheet", date: "2026-05-20", size: "1.2 MB", description: "Ready reckoner for monthly EMI estimates across varying tenures (36, 48, 60, 72 months) at standard interest rates." }
            ],
            videoTutorials: [
                { id: "VID-001", title: "Lead Sourcing & CRM Input Guide", duration: "4 mins 20 secs", category: "sourcing", desc: "Learn how to capture customer enquiry details and auto-calculate eligibility parameters on the fly.", cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=350&auto=format&fit=crop" },
                { id: "VID-002", title: "AI Document Scanner & OCR Scanning Rules", duration: "6 mins 45 secs", category: "scanning", desc: "Tutorial on how to scan files, handle blurry uploads, and correct OCR auto-captured values manually.", cover: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=350&auto=format&fit=crop" },
                { id: "VID-003", title: "Vehicle Stock Finance (TA) Limit Management", duration: "5 mins 10 secs", category: "funding", desc: "Understanding stock yard outstanding limits, requesting temporary limit hikes, and tracing transaction logs.", cover: "https://images.unsplash.com/photo-1542838132-92c53300491e0?q=80&w=350&auto=format&fit=crop" }
            ],
            auditLogs: [
                { timestamp: "2026-05-22 14:10:02", operator: "Vikramaditya Singh", area: "Security / KYC", action: "Bypassed biometric verification using local OTP override", reason: "MFA scanner malfunction in rural showroom", signature: "0x8F2D...9A4E" },
                { timestamp: "2026-05-22 11:22:45", operator: "Amitesh Mishra (RM)", area: "Stock Financing", action: "Approved temporary ₹50L stock finance limit extension", reason: "Bolero Neo transit stock arrival", signature: "0x3C9A...41BF" },
                { timestamp: "2026-05-21 16:45:12", operator: "Vikramaditya Singh", area: "Customer 360", action: "Updated bank repayment record for Rohan Jagtap", reason: "Manual check clearing verification", signature: "0x7B1E...88C2" },
                { timestamp: "2026-05-21 10:05:30", operator: "System Core", area: "Security Admin", action: "Generated new digital signature credentials certificate", reason: "Quarterly security standard rotation", signature: "0x5E3F...77D1" }
            ]
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.bindNewModuleEvents();
        this.initLoginScreen();
        this.startTicker();
        this.renderMenuByRole();
        this.renderDashboard();
        this.renderPipeline();
        this.renderCompliance();
        this.renderStockFinance();
        this.renderRiskCenter();
        this.renderPerformance();
        this.renderExecutiveView();
        this.renderSecurityAdmin();
        this.renderTrainingHub();
        this.renderComms();
        
        this.renderLoanTracking();
        this.renderSupport();
        this.renderSchemes('all');
        this.renderCustomer360();
        this.renderEmiCalc();
        this.renderKycVault();
        this.renderAuditTrail();
        this.renderProductKb('all');
        this.renderVideoTutorials();
        
        this.updateNotificationBadge();
    }

    bindEvents() {
        // Tab switching
        document.querySelectorAll('[data-tab]').forEach(el => {
            el.addEventListener('click', (e) => {
                const targetTab = e.currentTarget.getAttribute('data-tab');
                this.switchTab(targetTab);
                
                // Close sidebar on mobile
                const sidebar = document.querySelector('.app-sidebar');
                if (sidebar) {
                    sidebar.classList.remove('open');
                }
            });
        });

        // Close sidebar when clicking main wrapper on mobile
        const mainWrapper = document.querySelector('.main-wrapper');
        if (mainWrapper) {
            mainWrapper.addEventListener('click', (e) => {
                // If we tapped the hamburger toggle button, let that handler process it instead
                if (e.target.closest('.sidebar-toggle-btn')) return;
                
                const sidebar = document.querySelector('.app-sidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    this.showNotification("Mobile Menu Closed", "info");
                }
            });
        }

        // Role Dropdown Toggle
        const dropdownBtn = document.getElementById('roleDropdownBtn');
        const dropdownList = document.getElementById('roleDropdownList');
        if (dropdownBtn) {
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdownList.classList.toggle('open');
            });
        }

        // Close dropdowns on clicking outside
        document.addEventListener('click', () => {
            if (dropdownList) dropdownList.classList.remove('open');
        });

        // Role selection
        document.querySelectorAll('[data-role-select]').forEach(el => {
            el.addEventListener('click', (e) => {
                const targetRole = e.currentTarget.getAttribute('data-role-select');
                this.switchRole(targetRole);
            });
        });

        // AI Copilot Toggle Drawer
        const copilotTrigger = document.getElementById('copilotTrigger');
        const copilotPanel = document.getElementById('copilotPanel');
        const copilotClose = document.getElementById('copilotClose');
        
        if (copilotTrigger && copilotPanel) {
            copilotTrigger.addEventListener('click', () => {
                copilotPanel.classList.add('active');
                copilotTrigger.classList.add('hidden');
                this.scrollToBottom('copilotBody');
            });
        }
        
        if (copilotClose && copilotPanel && copilotTrigger) {
            copilotClose.addEventListener('click', () => {
                copilotPanel.classList.remove('active');
                copilotTrigger.classList.remove('hidden');
            });
        }

        // AI Message Send
        const sendBtn = document.getElementById('aiSendBtn');
        const aiInput = document.getElementById('aiInput');
        if (sendBtn && aiInput) {
            sendBtn.addEventListener('click', () => this.handleAiInput());
            aiInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.handleAiInput();
            });
        }

        // Comms Broadcast Post
        const commsPostBtn = document.getElementById('commsPostBtn');
        const commsPostInput = document.getElementById('commsPostInput');
        if (commsPostBtn && commsPostInput) {
            commsPostBtn.addEventListener('click', () => this.handleCommsPost());
            commsPostInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.handleCommsPost();
            });
        }

        // AI Chips
        document.querySelectorAll('.prompt-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                const text = e.currentTarget.textContent;
                this.sendAiMessage(text);
            });
        });

        // TA Funding request trigger
        const stockFundingForm = document.getElementById('stockFundingForm');
        if (stockFundingForm) {
            stockFundingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFundingRequest();
            });
        }

        // OCR File Selection Simulator
        const ocrDropzone = document.getElementById('ocrDropzone');
        const fileSelector = document.getElementById('ocrFileSelector');
        if (ocrDropzone && fileSelector) {
            ocrDropzone.addEventListener('click', () => fileSelector.click());
            fileSelector.addEventListener('change', (e) => this.handleFileScanSimulation(e));
        }

        // Kanban Drag & Drop Column drop-zones
        const cols = ['enquiry', 'documents', 'underwriting', 'sanctioned', 'disbursed'];
        cols.forEach(colId => {
            const col = document.getElementById(`col-${colId}`);
            if (col) {
                col.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    if (col.parentElement) {
                        col.parentElement.classList.add('drag-over');
                    }
                });
                col.addEventListener('dragenter', (e) => {
                    e.preventDefault();
                    if (col.parentElement) {
                        col.parentElement.classList.add('drag-over');
                    }
                });
                col.addEventListener('dragleave', () => {
                    if (col.parentElement) {
                        col.parentElement.classList.remove('drag-over');
                    }
                });
                col.addEventListener('drop', (e) => {
                    e.preventDefault();
                    if (col.parentElement) {
                        col.parentElement.classList.remove('drag-over');
                    }
                    const leadId = e.dataTransfer.getData('text/plain');
                    if (leadId) {
                        this.moveLeadToStage(leadId, colId);
                    }
                });
            }
        });

        // Global Search Bar Functionality
        const searchInput = document.getElementById('globalSearchInput');
        const searchResults = document.getElementById('globalSearchResults');
        
        if (searchInput && searchResults) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim().toLowerCase();
                this.handleSearch(query, searchResults);
            });
            
            searchInput.addEventListener('focus', (e) => {
                const query = e.target.value.trim().toLowerCase();
                if (query.length > 0) {
                    searchResults.style.display = 'block';
                }
            });
            
            // Stop propagation on clicks inside the dropdown to prevent auto-closing
            searchResults.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Notification Bell Functionality
        const bellBtn = document.getElementById('notificationBellBtn');
        const notificationsDropdown = document.getElementById('notificationsDropdown');
        
        if (bellBtn && notificationsDropdown) {
            bellBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Toggle notifications panel
                const isVisible = notificationsDropdown.style.display === 'block';
                
                // Close search dropdown if open
                if (searchResults) searchResults.style.display = 'none';
                
                if (isVisible) {
                    notificationsDropdown.style.display = 'none';
                } else {
                    this.renderNotificationsList(notificationsDropdown);
                    notificationsDropdown.style.display = 'block';
                }
            });

            // Stop click propagation inside notifications dropdown to allow item selection
            notificationsDropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Dismiss both popups when clicking outside
        document.addEventListener('click', (e) => {
            if (searchResults && !e.target.closest('#globalSearchInput')) {
                searchResults.style.display = 'none';
            }
            if (notificationsDropdown && !e.target.closest('#notificationBellBtn')) {
                notificationsDropdown.style.display = 'none';
            }
        });
    }

    handleSearch(query, container) {
        if (!container) return;
        if (!query) {
            container.innerHTML = '';
            container.style.display = 'none';
            return;
        }

        const leads = this.state.pipelineLeads || [];
        const showrooms = window.DealerOSData.dealerPerformance || [];
        const courses = this.state.trainingModules || [];

        // Match Query
        const matchingLeads = leads.filter(l => 
            (l.name && l.name.toLowerCase().includes(query)) ||
            (l.vehicle && l.vehicle.toLowerCase().includes(query)) ||
            (l.phone && l.phone.toLowerCase().includes(query))
        );

        const matchingShowrooms = showrooms.filter(s => 
            (s.name && s.name.toLowerCase().includes(query)) ||
            (s.region && s.region.toLowerCase().includes(query))
        );

        const matchingCourses = courses.filter(c => 
            (c.title && c.title.toLowerCase().includes(query))
        );

        const totalMatches = matchingLeads.length + matchingShowrooms.length + matchingCourses.length;

        if (totalMatches === 0) {
            container.innerHTML = `<div class="search-no-results"><i class="fas fa-search-minus" style="margin-right: 8px;"></i>No items match "${query}"</div>`;
            container.style.display = 'block';
            return;
        }

        let html = '';

        // 1. Leads
        if (matchingLeads.length > 0) {
            html += `<div class="search-section-header"><i class="fas fa-user-friends"></i> Showroom Leads & Loan Pipeline</div>`;
            matchingLeads.forEach(lead => {
                html += `
                    <div class="search-result-item" data-type="lead" data-id="${lead.id}">
                        <div class="item-details">
                            <div class="item-title">${lead.name}</div>
                            <div class="item-subtitle">${lead.vehicle} | Stage: ${lead.stage.toUpperCase()}</div>
                        </div>
                        <span class="item-badge">${lead.amount}</span>
                    </div>
                `;
            });
        }

        // 2. Showrooms
        if (matchingShowrooms.length > 0) {
            html += `<div class="search-section-header"><i class="fas fa-store"></i> Showrooms & Dealership Performance</div>`;
            matchingShowrooms.forEach(s => {
                html += `
                    <div class="search-result-item" data-type="showroom" data-id="${s.name}">
                        <div class="item-details">
                            <div class="item-title">${s.name}</div>
                            <div class="item-subtitle">Region: ${s.region} | Rank: #${s.rank}</div>
                        </div>
                        <span class="item-badge">${s.disbursement}</span>
                    </div>
                `;
            });
        }

        // 3. Courses
        if (matchingCourses.length > 0) {
            html += `<div class="search-section-header"><i class="fas fa-graduation-cap"></i> Training Academy</div>`;
            matchingCourses.forEach(c => {
                html += `
                    <div class="search-result-item" data-type="course" data-id="${c.id}">
                        <div class="item-details">
                            <div class="item-title">${c.title}</div>
                            <div class="item-subtitle">Length: ${c.length} | Progress: ${c.progress}%</div>
                        </div>
                        <span class="item-badge">+${c.xp} XP</span>
                    </div>
                `;
            });
        }

        container.innerHTML = html;
        container.style.display = 'block';

        // Add Click listeners
        container.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                const type = el.getAttribute('data-type');
                const id = el.getAttribute('data-id');
                this.handleSearchResultSelect(type, id);
                container.style.display = 'none';
                const searchInput = document.getElementById('globalSearchInput');
                if (searchInput) searchInput.value = '';
            });
        });
    }

    handleSearchResultSelect(type, id) {
        if (type === 'lead' || type === 'loan') {
            this.switchTab('enquiry');
            const targetLead = this.state.pipelineLeads.find(l => l.id === id);
            if (targetLead) {
                this.showLeadTimeline(targetLead);
                // Scroll & highlight
                setTimeout(() => {
                    const el = document.getElementById('lead-card-' + id);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        el.classList.add('search-highlight');
                        setTimeout(() => el.classList.remove('search-highlight'), 2500);
                    }
                }, 100);
                this.showNotification(`Found Lead: ${targetLead.name} (${targetLead.vehicle})`, 'success');
            }
        } else if (type === 'showroom') {
            this.switchTab('performance');
            // Scroll & highlight showroom row
            setTimeout(() => {
                const elId = 'showroom-row-' + id.replace(/[^a-zA-Z0-9]/g, '-');
                const el = document.getElementById(elId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.classList.add('search-highlight');
                    setTimeout(() => el.classList.remove('search-highlight'), 2500);
                }
            }, 100);
            this.showNotification(`Showroom: ${id}`, 'success');
        } else if (type === 'course') {
            this.switchTab('training');
            const mod = this.state.trainingModules.find(m => m.id === id);
            if (mod) {
                // Scroll & highlight
                setTimeout(() => {
                    const el = document.getElementById('course-card-' + id);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        el.classList.add('search-highlight');
                        setTimeout(() => el.classList.remove('search-highlight'), 2500);
                    }
                }, 100);
                this.showNotification(`Course: ${mod.title}`, 'success');
            }
        } else if (type === 'compliance') {
            // Find compliance case or fallback to lead pipeline
            const targetCase = this.state.complianceCases.find(c => c.id === id);
            if (targetCase) {
                this.switchTab('compliance');
                this.selectForOcrScan(id);
                setTimeout(() => {
                    const el = document.getElementById('compliance-row-' + id);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        el.classList.add('search-highlight');
                        setTimeout(() => el.classList.remove('search-highlight'), 2500);
                    }
                }, 100);
            } else {
                // Fallback to enquiry/leads pipeline
                this.switchTab('enquiry');
                const targetLead = this.state.pipelineLeads.find(l => l.id === id);
                if (targetLead) {
                    this.showLeadTimeline(targetLead);
                    setTimeout(() => {
                        const el = document.getElementById('lead-card-' + id);
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            el.classList.add('search-highlight');
                            setTimeout(() => el.classList.remove('search-highlight'), 2500);
                        }
                    }, 100);
                    this.showNotification(`Found Lead: ${targetLead.name} (${targetLead.vehicle})`, 'success');
                }
            }
        } else if (type === 'stock') {
            // Check if id matches any outstanding vehicle
            const isVehicle = this.state.stockFinance.outstandingVehicles.some(v => v.id === id || v.chassis === id);
            if (isVehicle) {
                this.switchTab('stock');
                setTimeout(() => {
                    const el = document.getElementById('stock-row-' + id);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        el.classList.add('search-highlight');
                        setTimeout(() => el.classList.remove('search-highlight'), 2500);
                    }
                }, 100);
                this.showNotification(`Stock Item: ${id}`, 'success');
            } else {
                // Otherwise navigate to portfolio risk page where delayed showroom payments reside
                this.switchTab('portfolio');
                this.showNotification(`Risk Alert: ${id}`, 'warning');
            }
        }
    }

    renderNotificationsList(container) {
        if (!container) return;
        
        const unreadCount = this.state.notifications.filter(n => n.unread).length;
        
        let html = `
            <div class="notification-header">
                <h4>Showroom Notifications</h4>
                ${unreadCount > 0 ? `<button class="mark-all-btn" id="notifMarkAllBtn">Mark all read</button>` : ''}
            </div>
            <div class="notification-list">
        `;
        
        if (this.state.notifications.length === 0) {
            html += `<div class="notification-empty">No alerts today</div>`;
        } else {
            this.state.notifications.forEach(n => {
                let iconClass = 'fa-bell';
                if (n.type === 'stock') iconClass = 'fa-warehouse';
                else if (n.type === 'loan') iconClass = 'fa-file-invoice-dollar';
                else if (n.type === 'compliance') iconClass = 'fa-shield-alt';
                else if (n.type === 'training') iconClass = 'fa-graduation-cap';
                
                html += `
                    <div class="notification-item ${n.unread ? 'unread' : ''}" data-id="${n.id}">
                        <div class="notif-icon">
                            <i class="fas ${iconClass}"></i>
                        </div>
                        <div class="notif-content">
                            <div class="notif-text">${n.text}</div>
                            <div class="notif-time">${n.time}</div>
                        </div>
                    </div>
                `;
            });
        }
        
        html += `</div>`;
        container.innerHTML = html;
        
        // Add Event Listeners
        const markAllBtn = container.querySelector('#notifMarkAllBtn');
        if (markAllBtn) {
            markAllBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.state.notifications.forEach(n => n.unread = false);
                this.updateNotificationBadge();
                this.renderNotificationsList(container);
                this.showNotification('All notifications marked as read', 'success');
            });
        }
        
        container.querySelectorAll('.notification-item').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = el.getAttribute('data-id');
                const notif = this.state.notifications.find(n => n.id === id);
                if (notif) {
                    notif.unread = false;
                    this.updateNotificationBadge();
                    container.style.display = 'none';
                    this.handleSearchResultSelect(notif.type, notif.targetId);
                }
            });
        });
    }

    updateNotificationBadge() {
        const badge = document.getElementById('bellBadgeDot');
        if (!badge) return;
        const unreadCount = this.state.notifications.filter(n => n.unread).length;
        if (unreadCount > 0) {
            badge.style.display = 'flex';
            badge.style.alignItems = 'center';
            badge.style.justifyContent = 'center';
            badge.style.position = 'absolute';
            badge.style.top = '2px';
            badge.style.right = '2px';
            badge.style.width = '14px';
            badge.style.height = '14px';
            badge.style.borderRadius = '50%';
            badge.style.background = 'var(--color-mahindra-red)';
            badge.style.color = '#ffffff';
            badge.style.fontSize = '8px';
            badge.style.fontWeight = '800';
            badge.style.border = '1px solid var(--bg-surface)';
            badge.textContent = unreadCount;
        } else {
            badge.style.display = 'none';
        }
    }

    startTicker() {
        const syncTimeEl = document.getElementById('tickerSyncTime');
        const tickerTextEl = document.getElementById('tickerText');

        const updateSyncTime = () => {
            if (!syncTimeEl) return;
            const now = new Date();
            const pad = (n) => String(n).padStart(2, '0');
            const year = now.getFullYear();
            const month = pad(now.getMonth() + 1);
            const day = pad(now.getDate());
            const hours = pad(now.getHours());
            const minutes = pad(now.getMinutes());
            const seconds = pad(now.getSeconds());
            syncTimeEl.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        };

        // Run sync update every second
        updateSyncTime();
        setInterval(updateSyncTime, 1000);

        // Dynamic ticker variations
        if (tickerTextEl) {
            const repoRate = 6.50;
            let disbursementPercent = 88.4;
            let floorplanLiquidity = 145.2;
            let dispatchRate = 4.2;

            const updateTicker = () => {
                // Fluctuating figures slightly
                disbursementPercent = Math.min(100, Math.max(80, parseFloat(disbursementPercent) + (Math.random() - 0.5) * 0.4)).toFixed(1);
                floorplanLiquidity = Math.max(100, parseFloat(floorplanLiquidity) + (Math.random() - 0.5) * 1.5).toFixed(1);
                dispatchRate = Math.max(1, parseFloat(dispatchRate) + (Math.random() - 0.5) * 0.3).toFixed(1);
                
                const feeds = [
                    `RBI REPO RATE: ${repoRate.toFixed(2)}% [UNCHANGED]`,
                    `NSDL BANK GATEWAY: ACTIVE (99.99% UPTIME)`,
                    `VAHAN DIRECT LINK: CONNECTED (ping 8ms)`,
                    `TODAY'S NATIONAL DISBURSEMENT TARGET: ${disbursementPercent}% MET`,
                    `FLOORPLAN LIQUIDITY RESERVED: ₹${floorplanLiquidity} Cr`,
                    `INTRADAY DISPATCH VELOCITY: ₹${dispatchRate} Cr/hr`
                ];

                const prefix = "Hello Vikramaditya Singh! | Today is " + new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + " | ";
                tickerTextEl.textContent = prefix + feeds.join(' | ');
            };

            updateTicker();
            setInterval(updateTicker, 5000);
        }
    }

    toggleFullscreen() {
        const icon = document.getElementById('fullscreenIcon');
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
                .then(() => {
                    if (icon) {
                        icon.classList.remove('fa-expand');
                        icon.classList.add('fa-compress');
                    }
                    this.showNotification("Fullscreen Mode Enabled", "info");
                })
                .catch((err) => {
                    this.showNotification("Fullscreen mode is blocked by browser policies.", "warning");
                });
        } else {
            document.exitFullscreen()
                .then(() => {
                    if (icon) {
                        icon.classList.remove('fa-compress');
                        icon.classList.add('fa-expand');
                    }
                    this.showNotification("Fullscreen Mode Disabled", "info");
                })
                .catch(() => {});
        }
    }

    toggleSidebar() {
        const sidebar = document.querySelector('.app-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('open');
            const isOpen = sidebar.classList.contains('open');
            this.showNotification(isOpen ? "Mobile Menu Opened" : "Mobile Menu Closed", "info");
        }
    }

    initLoginScreen() {
        const loginForm = document.getElementById('loginForm');
        const biometricBtn = document.getElementById('biometricTrigger');
        const otpOverlay = document.getElementById('otpOverlay');
        const otpConfirmBtn = document.getElementById('otpConfirmBtn');
        const loginScreen = document.getElementById('loginScreen');
        const dynamicGreeting = document.getElementById('dynamicGreeting');

        // Dynamic time-based greeting on login page
        if (dynamicGreeting) {
            const hours = new Date().getHours();
            let greetingText = "System Operational - Good Evening";
            if (hours < 12) greetingText = "System Operational - Good Morning";
            else if (hours < 18) greetingText = "System Operational - Good Afternoon";
            dynamicGreeting.textContent = greetingText;
        }

        // Regular login triggers MFA / OTP step
        if (loginForm && otpOverlay) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                otpOverlay.classList.add('active');
                
                // Automatically focus and select the first OTP digit
                setTimeout(() => {
                    const otpInputs = document.querySelectorAll('.otp-input');
                    if (otpInputs && otpInputs.length > 0) {
                        otpInputs[0].focus();
                        otpInputs[0].select();
                    }
                }, 100);
            });
        }

        // OTP inputs routing and focus shifting
        const otpInputs = document.querySelectorAll('.otp-input');
        otpInputs.forEach((input, index) => {
            input.addEventListener('focus', () => {
                input.select();
            });

            input.addEventListener('input', () => {
                if (input.value.length === 1) {
                    if (index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                        otpInputs[index + 1].select();
                    }
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace') {
                    if (input.value === '') {
                        if (index > 0) {
                            otpInputs[index - 1].value = '';
                            otpInputs[index - 1].focus();
                        }
                    } else {
                        input.value = '';
                    }
                    e.preventDefault();
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (otpConfirmBtn) {
                        otpConfirmBtn.click();
                    }
                } else if (e.key === 'ArrowLeft') {
                    if (index > 0) otpInputs[index - 1].focus();
                } else if (e.key === 'ArrowRight') {
                    if (index < otpInputs.length - 1) otpInputs[index + 1].focus();
                }
            });
        });

        // Biometric login triggers instant access
        if (biometricBtn && loginScreen) {
            biometricBtn.addEventListener('click', () => {
                this.showNotification("Biometric verified. Welcome to Mahindra DealerOS.", "success");
                loginScreen.classList.add('hidden');
                this.switchTab('dashboard');
            });
        }

        // Confirm OTP triggers dashboard enter
        if (otpConfirmBtn && loginScreen) {
            otpConfirmBtn.addEventListener('click', () => {
                this.showNotification("Security code approved. Welcome!", "success");
                loginScreen.classList.add('hidden');
                this.switchTab('dashboard');
            });
        }
    }

    switchTab(tabId) {
        this.state.currentTab = tabId;
        
        // Update sidebar visual active state
        document.querySelectorAll('[data-tab]').forEach(el => {
            if (el.getAttribute('data-tab') === tabId) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });

        // Hide all modules, show current one
        document.querySelectorAll('.module-section').forEach(el => {
            el.classList.remove('active');
        });

        const activeModule = document.getElementById(`module-${tabId}`);
        if (activeModule) {
            activeModule.classList.add('active');
        }

        // Redraw active charts only, avoiding sizing/visibility bugs
        this.destroyAllCharts();
        
        if (tabId === 'dashboard') {
            this.renderDashboard();
            this.renderDashboardCharts();
        } else if (tabId === 'enquiry') {
            this.renderPipeline();
        } else if (tabId === 'portfolio') {
            this.renderRiskCenter();
            this.renderRiskCharts();
        } else if (tabId === 'compliance') {
            this.renderCompliance();
        } else if (tabId === 'stock') {
            this.renderStockFinance();
            this.renderStockCharts();
        } else if (tabId === 'performance') {
            this.renderPerformance();
            this.renderPerformanceCharts();
        } else if (tabId === 'executive') {
            this.renderExecutiveView();
            this.renderExecutiveCharts();
        } else if (tabId === 'security') {
            this.renderSecurityAdmin();
        } else if (tabId === 'training') {
            this.renderTrainingHub();
        } else if (tabId === 'comms') {
            this.renderComms();
        } else if (tabId === 'loan') {
            this.renderLoanTracking();
        } else if (tabId === 'support') {
            this.renderSupport();
        } else if (tabId === 'schemes') {
            this.renderSchemes('all');
        } else if (tabId === 'customer360') {
            this.renderCustomer360();
        } else if (tabId === 'emicalc') {
            this.renderEmiCalc();
        } else if (tabId === 'kycvault') {
            this.renderKycVault();
        } else if (tabId === 'audit') {
            this.renderAuditTrail();
        } else if (tabId === 'productkb') {
            this.renderProductKb('all');
        } else if (tabId === 'videotutorials') {
            this.renderVideoTutorials();
        }
    }

    switchRole(roleId) {
        this.state.currentRole = roleId;
        const currentPersona = window.DealerOSData.personas[roleId];
        
        // Update Dropdown Button UI labels
        document.getElementById('currentRoleLabel').textContent = currentPersona.title;
        document.getElementById('userRoleBadge').textContent = currentPersona.badge;
        
        // Inject role color accent
        document.documentElement.style.setProperty('--color-mahindra-red', currentPersona.themeAccent);

        // Update Profile Info
        document.getElementById('profileRoleText').textContent = currentPersona.title;

        // Show Notification of persona update
        this.showNotification(`Switched view to: ${currentPersona.title}`, "success");

        // Re-calculate menu lists based on new permissions
        this.renderMenuByRole();
        
        // If current tab is no longer allowed, default to Dashboard or Executive
        if (!currentPersona.allowedModules.includes(this.state.currentTab)) {
            if (currentPersona.allowedModules.includes('executive')) {
                this.switchTab('executive');
            } else {
                this.switchTab('dashboard');
            }
        } else {
            this.switchTab(this.state.currentTab);
        }
    }

    renderMenuByRole() {
        const allowed = window.DealerOSData.personas[this.state.currentRole].allowedModules;
        
        document.querySelectorAll('[data-tab]').forEach(el => {
            const tabId = el.getAttribute('data-tab');
            if (allowed.includes(tabId)) {
                el.style.display = 'flex';
            } else {
                el.style.display = 'none';
            }
        });
    }

    showNotification(msg, type = 'info') {
        const notifyContainer = document.getElementById('notificationContainer');
        if (!notifyContainer) return;

        const el = document.createElement('div');
        el.className = `glassmorphism glow-border notification-alert ${type}`;
        el.style.padding = '14px 20px';
        el.style.marginBottom = '12px';
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.gap = '12px';
        el.style.boxShadow = 'var(--shadow-cinematic)';
        el.style.animation = 'fade-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        
        let iconClass = 'fa-info-circle';
        let iconColor = 'var(--color-cyan-glow)';
        if (type === 'success') {
            iconClass = 'fa-check-circle';
            iconColor = 'var(--color-teal-glow)';
        } else if (type === 'warning') {
            iconClass = 'fa-exclamation-triangle';
            iconColor = 'var(--color-gold-glow)';
        } else if (type === 'danger') {
            iconClass = 'fa-radiation';
            iconColor = 'var(--color-electric-red)';
        }

        el.innerHTML = `
            <i class="fas ${iconClass}" style="color: ${iconColor}; font-size: 16px;"></i>
            <span style="font-size: 12px; font-weight: 600; color: var(--text-primary);">${msg}</span>
        `;

        notifyContainer.appendChild(el);

        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-10px)';
            setTimeout(() => el.remove(), 400);
        }, 4000);
    }

    renderDashboard() {
        const kpiContainer = document.getElementById('dashboardKpis');
        if (!kpiContainer) return;

        kpiContainer.innerHTML = '';
        
        // Grab metrics based on role
        const activeKpis = window.DealerOSData.kpis[this.state.currentRole] || window.DealerOSData.kpis['dealer_principal'];
        
        activeKpis.forEach(metric => {
            const card = document.createElement('div');
            card.className = 'glassmorphism glow-border kpi-card';
            card.setAttribute('data-kpi-id', metric.id);
            card.innerHTML = `
                <div class="kpi-header">
                    <span class="kpi-title">${metric.label}</span>
                    <div class="kpi-icon"><i class="fas ${this.getKpiIcon(metric.id)}"></i></div>
                </div>
                <div class="kpi-body">
                    <span class="kpi-value">${metric.value}</span>
                    <div class="kpi-change-panel">
                        <span class="kpi-change ${metric.status}">${metric.change}</span>
                        <div class="kpi-mini-graph" id="spark-${metric.id}"></div>
                    </div>
                </div>
            `;
            kpiContainer.appendChild(card);
            this.drawMiniSparkline(`spark-${metric.id}`, metric.graph, metric.status);
        });

        // Load dashboard notifications and alerts
        const actionList = document.getElementById('dashboardActionList');
        if (actionList) {
            actionList.innerHTML = `
                <div class="action-card" onclick="window.dealerOSApp.switchTab('compliance')">
                    <div class="action-info">
                        <div class="action-badge-icon"><i class="fas fa-file-invoice"></i></div>
                        <div class="action-meta">
                            <span class="action-heading">RC Document Pending Upload</span>
                            <span class="action-subheading">Karan Johar Autos (Thar EV) overdue by 39 Days</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-right action-btn-arrow"></i>
                </div>
                <div class="action-card" onclick="window.dealerOSApp.switchTab('stock')">
                    <div class="action-info">
                        <div class="action-badge-icon gold"><i class="fas fa-piggy-bank"></i></div>
                        <div class="action-meta">
                            <span class="action-heading">High Floorplan Stock Age</span>
                            <span class="action-subheading">Bolero Neo at Stockyard A financed for 65 Days</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-right action-btn-arrow"></i>
                </div>
            `;
        }
    }

    getKpiIcon(id) {
        const mapping = {
            disbursement: 'fa-wallet',
            active_cases: 'fa-folder-open',
            tat: 'fa-stopwatch',
            ta_utilization: 'fa-coins',
            pdd_pending: 'fa-exclamation-triangle',
            health_score: 'fa-heartbeat',
            exposure: 'fa-shield-alt',
            npa: 'fa-chart-line',
            collection: 'fa-percentage',
            high_risk: 'fa-radiation-alt',
            bucket_mig: 'fa-layer-group',
            fraud_risk: 'fa-mask',
            comp_score: 'fa-balance-scale',
            rc_pending: 'fa-car',
            ins_pending: 'fa-shield-alt',
            inv_missing: 'fa-file-signature',
            ocr_acc: 'fa-brain',
            audit_backlog: 'fa-clipboard-list'
        };
        return mapping[id] || 'fa-chart-bar';
    }

    drawMiniSparkline(targetId, data, status) {
        setTimeout(() => {
            const container = document.getElementById(targetId);
            if (!container) return;
            container.innerHTML = '';
            
            const width = 60;
            const height = 24;
            
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            container.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            
            if (!data || data.length === 0) return;
            
            const max = Math.max(...data);
            const min = Math.min(...data);
            const range = max - min === 0 ? 1 : max - min;
            
            const points = data.map((val, idx) => {
                const x = (idx / (data.length - 1)) * (width - 6) + 3; // Keep a little margin for endpoint dot
                const y = height - 4 - ((val - min) / range) * (height - 8); // Margin at top/bottom
                return { x, y };
            });
            
            // Set colors
            let strokeColor = '#a4b0be'; // Neutral
            let gradientColorStart = 'rgba(164, 176, 190, 0.4)';
            let gradientColorEnd = 'rgba(164, 176, 190, 0)';
            
            if (status === 'up') {
                strokeColor = '#00f5d4';
                gradientColorStart = 'rgba(0, 245, 212, 0.4)';
                gradientColorEnd = 'rgba(0, 245, 212, 0)';
            } else if (status === 'down') {
                strokeColor = '#E31837';
                gradientColorStart = 'rgba(227, 24, 55, 0.4)';
                gradientColorEnd = 'rgba(227, 24, 55, 0)';
            }
            
            // Create fading linear gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, gradientColorStart);
            gradient.addColorStop(1, gradientColorEnd);
            
            // Draw area under the line
            ctx.beginPath();
            ctx.moveTo(points[0].x, height);
            points.forEach(pt => {
                ctx.lineTo(pt.x, pt.y);
            });
            ctx.lineTo(points[points.length - 1].x, height);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Draw line
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            
            // Draw neat endpoint dot
            const lastPt = points[points.length - 1];
            ctx.beginPath();
            ctx.arc(lastPt.x, lastPt.y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = strokeColor;
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.stroke();
        }, 100);
    }

    renderDashboardCharts() {
        const ctxDisb = document.getElementById('disbursementChart');
        if (!ctxDisb) return;

        this.state.charts.disbursement = new Chart(ctxDisb.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May (YTD)'],
                datasets: [{
                    label: 'Total Loans Given (₹ Cr)',
                    data: [15.2, 18.5, 22.4, 21.0, 24.85],
                    borderColor: '#E31837',
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointHoverRadius: 8,
                    fill: true,
                    backgroundColor: (context) => {
                        const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
                        gradient.addColorStop(0, 'rgba(227, 24, 55, 0.2)');
                        gradient.addColorStop(1, 'rgba(227, 24, 55, 0)');
                        return gradient;
                    },
                    tension: 0.4
                }]
            },
            options: this.getChartOptions()
        });
    }

    renderPipeline() {
        const columns = {
            enquiry: document.getElementById('col-enquiry'),
            documents: document.getElementById('col-documents'),
            underwriting: document.getElementById('col-underwriting'),
            sanctioned: document.getElementById('col-sanctioned'),
            disbursed: document.getElementById('col-disbursed')
        };

        // Reset columns
        Object.values(columns).forEach(col => {
            if (col) col.innerHTML = '';
        });

        // Compute Funnel percentages
        const totalLeads = this.state.pipelineLeads.length;
        const enquiryCount = this.state.pipelineLeads.filter(l => l.stage === 'enquiry').length;
        const docsCount = this.state.pipelineLeads.filter(l => l.stage === 'documents').length;
        const underwritingCount = this.state.pipelineLeads.filter(l => l.stage === 'underwriting').length;
        const sanctionedCount = this.state.pipelineLeads.filter(l => l.stage === 'sanctioned').length;
        const disbursedCount = this.state.pipelineLeads.filter(l => l.stage === 'disbursed').length;

        const pctEnquiry = totalLeads > 0 ? ((enquiryCount / totalLeads) * 100).toFixed(0) : 0;
        const pctDocs = totalLeads > 0 ? ((docsCount / totalLeads) * 100).toFixed(0) : 0;
        const pctUnderwriting = totalLeads > 0 ? ((underwritingCount / totalLeads) * 100).toFixed(0) : 0;
        const pctSanctioned = totalLeads > 0 ? ((sanctionedCount / totalLeads) * 100).toFixed(0) : 0;
        const pctDisbursed = totalLeads > 0 ? ((disbursedCount / totalLeads) * 100).toFixed(0) : 0;

        const funnelBar = document.getElementById('pipelineFunnelBar');
        if (funnelBar) {
            funnelBar.innerHTML = `
                <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; box-shadow: var(--shadow-sm);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <span style="font-size: 12px; font-weight: 700; color: var(--text-primary);">Showroom Conversion Funnel</span>
                        <span style="font-size: 12px; font-weight: 700; color: var(--color-teal-glow);"><i class="fas fa-check-circle"></i> ${pctDisbursed}% Disbursed</span>
                    </div>
                    <div style="display: flex; height: 10px; border-radius: 5px; overflow: hidden; background: rgba(0,0,0,0.05); margin-bottom: 12px;">
                        <div style="width: ${pctEnquiry}%; background: #a4b0be; transition: width 0.3s;" title="Enquiry: ${pctEnquiry}%"></div>
                        <div style="width: ${pctDocs}%; background: #ffbe0b; transition: width 0.3s;" title="Docs: ${pctDocs}%"></div>
                        <div style="width: ${pctUnderwriting}%; background: #fb5607; transition: width 0.3s;" title="Underwriting: ${pctUnderwriting}%"></div>
                        <div style="width: ${pctSanctioned}%; background: #ff006e; transition: width 0.3s;" title="Sanctioned: ${pctSanctioned}%"></div>
                        <div style="width: ${pctDisbursed}%; background: var(--color-teal-glow); transition: width 0.3s;" title="Disbursed: ${pctDisbursed}%"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                        <span style="font-size: 11px; color: var(--text-secondary);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#a4b0be; margin-right:4px;"></span> Enquiry: ${enquiryCount} (${pctEnquiry}%)</span>
                        <span style="font-size: 11px; color: var(--text-secondary);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#ffbe0b; margin-right:4px;"></span> Docs: ${docsCount} (${pctDocs}%)</span>
                        <span style="font-size: 11px; color: var(--text-secondary);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#fb5607; margin-right:4px;"></span> Underwriting: ${underwritingCount} (${pctUnderwriting}%)</span>
                        <span style="font-size: 11px; color: var(--text-secondary);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#ff006e; margin-right:4px;"></span> Sanctioned: ${sanctionedCount} (${pctSanctioned}%)</span>
                        <span style="font-size: 11px; color: var(--text-secondary);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--color-teal-glow); margin-right:4px;"></span> Disbursed: ${disbursedCount} (${pctDisbursed}%)</span>
                    </div>
                </div>
            `;
        }

        this.state.pipelineLeads.forEach(lead => {
            const col = columns[lead.stage];
            if (!col) return;

            const card = document.createElement('div');
            card.id = 'lead-card-' + lead.id;
            card.setAttribute('data-lead-id', lead.id);
            card.className = 'pipeline-card';
            card.setAttribute('draggable', 'true');
            card.innerHTML = `
                <div class="pipeline-card-header">
                    <span class="pipeline-card-name">${lead.name}</span>
                    <span class="pipeline-card-score">${lead.score}</span>
                </div>
                <div class="pipeline-card-details">
                    <span class="pipeline-card-vehicle"><i class="fas fa-car-side"></i> ${lead.vehicle}</span>
                    <span class="pipeline-card-amount">${lead.amount}</span>
                </div>
                <div class="pipeline-card-footer">
                    <span class="pipeline-card-source">${lead.source}</span>
                    <span class="pipeline-card-prob">${lead.probability}% Prob.</span>
                </div>
                <div class="pipeline-card-actions" style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.04);">
                    <button class="chevron-btn prev-btn" onclick="event.stopPropagation(); window.dealerOSApp.demoteLeadStage('${lead.id}')">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-tertiary);">Shift Stage</span>
                    <button class="chevron-btn next-btn" onclick="event.stopPropagation(); window.dealerOSApp.advanceLeadStage('${lead.id}')">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            `;
            
            // Bind HTML5 Drag Events
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', lead.id);
                card.classList.add('dragging');
            });
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
            });

            card.addEventListener('click', () => this.showLeadTimeline(lead));
            col.appendChild(card);
        });

        // Update counts with safety null checks
        const cntEnquiry = document.getElementById('cnt-enquiry');
        const cntDocuments = document.getElementById('cnt-documents');
        const cntUnderwriting = document.getElementById('cnt-underwriting');
        const cntSanctioned = document.getElementById('cnt-sanctioned');
        const cntDisbursed = document.getElementById('cnt-disbursed');

        if (cntEnquiry) cntEnquiry.textContent = enquiryCount;
        if (cntDocuments) cntDocuments.textContent = docsCount;
        if (cntUnderwriting) cntUnderwriting.textContent = underwritingCount;
        if (cntSanctioned) cntSanctioned.textContent = sanctionedCount;
        if (cntDisbursed) cntDisbursed.textContent = disbursedCount;

        // Auto load first lead timeline
        if (this.state.pipelineLeads.length > 0) {
            const first = this.state.pipelineLeads.find(l => l.id === this.state.selectedLeadId);
            if (first) this.showLeadTimeline(first);
        }
    }

    showLeadTimeline(lead) {
        this.state.selectedLeadId = lead.id;
        const panel = document.getElementById('leadTimelinePanel');
        if (!panel) return;

        let timelineHtml = '';
        lead.timeline.forEach(t => {
            timelineHtml += `
                <div style="border-left: 2px solid var(--color-mahindra-red); padding-left: 16px; margin-bottom: 20px; position: relative;">
                    <div style="position: absolute; left: -6px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--color-mahindra-red);"></div>
                    <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 4px;">${t.date}</div>
                    <div style="font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 4px;">${t.title}</div>
                    <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.4;">${t.text}</div>
                </div>
            `;
        });

        panel.innerHTML = `
            <h3 style="margin-bottom: 8px; font-size: 18px;">${lead.name}</h3>
            <span class="badge red" style="margin-bottom: 24px; display: inline-block;">${lead.vehicle}</span>
            
            <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px;">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 8px;">
                    <span style="font-size: 12px; color: var(--text-secondary);">Phone</span>
                    <span style="font-size: 12px; color: var(--text-primary); font-weight: 600;">${lead.phone}</span>
                </div>
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 8px;">
                    <span style="font-size: 12px; color: var(--text-secondary);">Showroom Loan Check</span>
                    <span style="font-size: 12px; color: var(--color-teal-glow); font-weight: 600;">${lead.score} Profile</span>
                </div>
                <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.4; padding: 12px; background: rgba(0,0,0,0.02); border-radius: 8px; border-left: 2px solid var(--color-teal-glow);">
                    <i class="fas fa-brain" style="margin-right: 6px;"></i> ${lead.eligibility}
                </div>
            </div>

            <h4 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); margin-bottom: 16px;">Lead Actions History</h4>
            <div style="max-height: 240px; overflow-y: auto;">
                ${timelineHtml}
            </div>

            <div style="margin-top: 24px; display: flex; gap: 8px;">
                <button class="btn-primary" style="flex: 1; padding: 12px; font-size: 12px;" onclick="window.dealerOSApp.advanceLeadStage('${lead.id}')">
                    <i class="fas fa-arrow-right"></i> Advance Stage
                </button>
            </div>
        `;
    }

    advanceLeadStage(leadId) {
        const lead = this.state.pipelineLeads.find(l => l.id === leadId);
        if (!lead) return;

        const stages = ['enquiry', 'documents', 'underwriting', 'sanctioned', 'disbursed'];
        const probs = {
            enquiry: 25,
            documents: 50,
            underwriting: 70,
            sanctioned: 90,
            disbursed: 100
        };
        const currentIdx = stages.indexOf(lead.stage);
        
        if (currentIdx < stages.length - 1) {
            const nextStage = stages[currentIdx + 1];
            lead.stage = nextStage;
            lead.probability = probs[nextStage] || 50;
            lead.timeline.unshift({
                date: new Date().toISOString().slice(0, 16).replace('T', ' '),
                title: `Moved to ${nextStage.toUpperCase()}`,
                text: `Loan application moved forward.`
            });
            this.showNotification(`Lead ${lead.name} moved to ${nextStage.toUpperCase()}`, "success");
            this.renderPipeline();
        } else {
            this.showNotification(`Lead is already in Disbursed stage. Payout complete.`, "warning");
        }
    }

    demoteLeadStage(leadId) {
        const lead = this.state.pipelineLeads.find(l => l.id === leadId);
        if (!lead) return;

        const stages = ['enquiry', 'documents', 'underwriting', 'sanctioned', 'disbursed'];
        const probs = {
            enquiry: 25,
            documents: 50,
            underwriting: 70,
            sanctioned: 90,
            disbursed: 100
        };
        const currentIdx = stages.indexOf(lead.stage);
        
        if (currentIdx > 0) {
            const prevStage = stages[currentIdx - 1];
            lead.stage = prevStage;
            lead.probability = probs[prevStage] || 25;
            lead.timeline.unshift({
                date: new Date().toISOString().slice(0, 16).replace('T', ' '),
                title: `Moved back to ${prevStage.toUpperCase()}`,
                text: `Loan application moved back a stage.`
            });
            this.showNotification(`Lead ${lead.name} moved back to ${prevStage.toUpperCase()}`, "info");
            this.renderPipeline();
        } else {
            this.showNotification(`Lead is already in first stage.`, "warning");
        }
    }

    moveLeadToStage(leadId, newStage) {
        const lead = this.state.pipelineLeads.find(l => l.id === leadId);
        if (!lead) return;

        const probs = {
            enquiry: 25,
            documents: 50,
            underwriting: 70,
            sanctioned: 90,
            disbursed: 100
        };

        if (lead.stage === newStage) return;

        lead.stage = newStage;
        lead.probability = probs[newStage] || 50;
        
        lead.timeline.unshift({
            date: new Date().toISOString().slice(0, 16).replace('T', ' '),
            title: `Dragged & Dropped to ${newStage.toUpperCase()}`,
            text: `Card moved to ${newStage.toUpperCase()} column.`
        });

        this.showNotification(`Moved ${lead.name} to ${newStage.toUpperCase()}`, "success");
        this.renderPipeline();
    }

    renderCompliance() {
        const tableBody = document.getElementById('complianceTableBody');
        if (!tableBody) return;

        tableBody.innerHTML = '';
        this.state.complianceCases.forEach(c => {
            const rcStatus = c.uploads.rc === 'VERIFIED' ? '<span class="status-badge verified">Verified</span>' : '<span class="status-badge missing">Missing</span>';
            const insStatus = c.uploads.insurance === 'VERIFIED' ? '<span class="status-badge verified">Verified</span>' : '<span class="status-badge missing">Missing</span>';
            const invStatus = c.uploads.invoice === 'VERIFIED' ? '<span class="status-badge verified">Verified</span>' : '<span class="status-badge missing">Missing</span>';

            let badgeClass = 'gold';
            if (c.score === 'Critical Urgency') badgeClass = 'red';
            else if (c.score === 'Fully Compliant') badgeClass = 'teal';

            const row = document.createElement('tr');
            row.id = 'compliance-row-' + c.id;
            row.style.cursor = 'pointer';
            row.addEventListener('click', (e) => {
                if (e.target.closest('button')) return;
                this.selectForOcrScan(c.id);
            });
            row.innerHTML = `
                <td><strong>${c.customerName}</strong><br><small style="color: var(--text-secondary);">${c.vehicle}</small></td>
                <td>${c.loanAmount}</td>
                <td>${c.disbursementDate}</td>
                <td><span class="badge ${badgeClass}">${c.score}</span></td>
                <td>${rcStatus}</td>
                <td>${insStatus}</td>
                <td>${invStatus}</td>
                <td>
                    <button class="btn-primary" style="padding: 6px 12px; font-size: 11px; width: auto;" onclick="window.dealerOSApp.selectForOcrScan('${c.id}')">
                        <i class="fas fa-search"></i> Check Docs
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    selectForOcrScan(caseId) {
        const targetCase = this.state.complianceCases.find(c => c.id === caseId);
        if (!targetCase) return;

        this.state.selectedOcrCaseId = caseId;
        
        // Define metadata mapping for high-fidelity OCR injection
        const caseMetadata = {
            comp_201: { regNo: 'MH-12-RJ-5501', chassis: 'MA3NVE456G901', model: 'THAR AX OPT', owner: 'ROHAN JAGTAP' },
            comp_202: { regNo: 'MH-14-KJ-2002', chassis: 'MA3NVE234H802', model: 'XUV400 EV', owner: 'KARAN JOHAR AUTOS' },
            comp_203: { regNo: 'MH-15-MS-7733', chassis: 'MA3NVE987A105', model: 'SCORPIO CLASSIC S11', owner: 'MEGHA SYNTHETICS' }
        };

        const meta = caseMetadata[caseId] || { 
            regNo: 'MH-12-XX-9901', 
            chassis: 'MA3NVE0000000', 
            model: targetCase.vehicle.toUpperCase(), 
            owner: targetCase.customerName.toUpperCase() 
        };

        // Show scanning preview details safely with defensive DOM checking
        const ocrCaseTitle = document.getElementById('ocrCaseTitle');
        const ocrCaseSub = document.getElementById('ocrCaseSub');
        const ocrStatusMessage = document.getElementById('ocrStatusMessage');
        const ocrFieldsContainer = document.getElementById('ocrFieldsContainer');

        if (ocrCaseTitle) ocrCaseTitle.textContent = targetCase.customerName;
        if (ocrCaseSub) ocrCaseSub.textContent = `${targetCase.vehicle} (${targetCase.loanAmount})`;
        if (ocrStatusMessage) ocrStatusMessage.textContent = 'Waiting for Aadhaar / RC / Insurance copy upload';
        if (ocrFieldsContainer) ocrFieldsContainer.innerHTML = '';
        
        // Inject the registration card data directly into the DOM mockup safely
        const rcRegNoEl = document.getElementById('rcRegNo');
        const rcOwnerNameEl = document.getElementById('rcOwnerName');
        const rcChassisEl = document.getElementById('rcChassis');
        const rcModelEl = document.getElementById('rcModel');

        if (rcRegNoEl) rcRegNoEl.textContent = meta.regNo;
        if (rcOwnerNameEl) rcOwnerNameEl.textContent = meta.owner;
        if (rcChassisEl) rcChassisEl.textContent = meta.chassis;
        if (rcModelEl) rcModelEl.textContent = meta.model;

        this.showNotification(`Selected ${targetCase.customerName} for document checks.`, "info");
    }

    handleFileScanSimulation(e) {
        const caseId = this.state.selectedOcrCaseId;
        if (!caseId) {
            this.showNotification("Please select an active audit case from the table first.", "warning");
            return;
        }

        const targetCase = this.state.complianceCases.find(c => c.id === caseId);
        if (!targetCase) return;

        const file = e.target.files[0];
        if (!file) return;

        const previewContainer = document.getElementById('ocrPreviewContainer');
        const statusMessage = document.getElementById('ocrStatusMessage');
        const fieldsContainer = document.getElementById('ocrFieldsContainer');

        const caseMetadata = {
            comp_201: { regNo: 'MH-12-RJ-5501', chassis: 'MA3NVE456G901', model: 'THAR AX OPT', owner: 'ROHAN JAGTAP' },
            comp_202: { regNo: 'MH-14-KJ-2002', chassis: 'MA3NVE234H802', model: 'XUV400 EV', owner: 'KARAN JOHAR AUTOS' },
            comp_203: { regNo: 'MH-15-MS-7733', chassis: 'MA3NVE987A105', model: 'SCORPIO CLASSIC S11', owner: 'MEGHA SYNTHETICS' }
        };

        const meta = caseMetadata[caseId] || { 
            regNo: 'MH-12-XX-9901', 
            chassis: 'MA3NVE0000000', 
            model: targetCase.vehicle.toUpperCase(), 
            owner: targetCase.customerName.toUpperCase() 
        };

        if (previewContainer) {
            previewContainer.style.display = 'block';
            previewContainer.classList.add('scanning');
        }
        if (statusMessage) {
            statusMessage.textContent = `Scanning: ${file.name}...`;
        }

        setTimeout(() => {
            if (previewContainer) previewContainer.classList.remove('scanning');
            if (statusMessage) statusMessage.textContent = 'Document check complete - Matched with Govt Vahan Portal!';
            
            // Render verified mock fields with custom-colored match highlights
            if (fieldsContainer) {
                fieldsContainer.innerHTML = `
                    <div class="ocr-extracted-field">
                        <span>Chassis Number Match</span>
                        <strong style="color: var(--color-teal-glow);">100% (${meta.chassis})</strong>
                    </div>
                    <div class="ocr-extracted-field">
                        <span>Owner Name Match</span>
                        <strong style="color: var(--color-teal-glow);">99.8% (${meta.owner})</strong>
                    </div>
                    <div class="ocr-extracted-field">
                        <span>Govt Vahan Status</span>
                        <strong style="color: var(--color-teal-glow);">Active - Tax Paid Upto 2041</strong>
                    </div>
                `;
            }

            // Mark outstanding document as verified
            targetCase.uploads.rc = 'VERIFIED';
            targetCase.uploads.insurance = 'VERIFIED';
            targetCase.uploads.invoice = 'VERIFIED';
            targetCase.score = 'Fully Compliant';

            // Persist the compliance KPIs in seed data so it reflects on Dashboard tab
            const complianceKpis = window.DealerOSData.kpis['compliance_team'];
            if (complianceKpis) {
                const pendingRc = complianceKpis.find(k => k.id === 'rc_pending');
                if (pendingRc && pendingRc.value.includes('Files')) {
                    let filesCount = parseInt(pendingRc.value) || 24;
                    if (filesCount > 0) {
                        pendingRc.value = `${filesCount - 1} Files`;
                    }
                }
                const compScorecard = complianceKpis.find(k => k.id === 'comp_score');
                if (compScorecard && compScorecard.value.includes('%')) {
                    let scoreVal = parseFloat(compScorecard.value) || 97.4;
                    scoreVal = Math.min(100, scoreVal + 0.6);
                    compScorecard.value = `${scoreVal.toFixed(1)}%`;
                }
            }

            // Decrement pdd_pending in dealer_principal and dealer_admin kpis
            ['dealer_principal', 'dealer_admin'].forEach(role => {
                const kpis = window.DealerOSData.kpis[role];
                if (kpis) {
                    const pddKpi = kpis.find(k => k.id === 'pdd_pending');
                    if (pddKpi && pddKpi.value.includes('cases')) {
                        let casesCount = parseInt(pddKpi.value) || 18;
                        if (casesCount > 0) {
                            pddKpi.value = `${casesCount - 1} cases`;
                        }
                    }
                }
            });

            this.showNotification("Document check passed. Saved successfully.", "success");
            this.renderCompliance();
            this.renderKycVault();
            this.renderDashboard();
        }, 2200);
    }

    renderStockFinance() {
        const tableBody = document.getElementById('stockTableBody');
        if (!tableBody) return;

        tableBody.innerHTML = '';
        this.state.stockFinance.outstandingVehicles.forEach(v => {
            let statusBadge = '<span class="badge teal">Loan Approved</span>';
            if (v.status === 'WARNING') statusBadge = '<span class="badge gold">Stock Yard Alert</span>';
            else if (v.status === 'CRITICAL') statusBadge = '<span class="badge red">Yard Alert (Critical)</span>';
            else if (v.status === 'PENDING_RELEASE') statusBadge = '<span class="badge blue">Pending Release</span>';

            const row = document.createElement('tr');
            row.id = 'stock-row-' + v.id;
            row.innerHTML = `
                <td><strong>${v.model}</strong><br><small style="color: var(--text-secondary);">${v.chassis}</small></td>
                <td>${v.cost}</td>
                <td>${v.age}</td>
                <td>${v.location}</td>
                <td>${statusBadge}</td>
            `;
            tableBody.appendChild(row);
        });

        // Compute balances
        const total = this.state.stockFinance.totalLimit;
        const utilized = this.state.stockFinance.utilizedAmount;
        const available = total - utilized;

        document.getElementById('taTotalText').textContent = `₹${(total / 10000000).toFixed(2)} Cr`;
        document.getElementById('taUtilizedText').textContent = `₹${(utilized / 10000000).toFixed(2)} Cr`;
        document.getElementById('taAvailableText').textContent = `₹${(available / 10000000).toFixed(2)} Cr`;

        // Update progress bar
        const percent = (utilized / total) * 100;
        const bar = document.getElementById('taProgressBar');
        if (bar) bar.style.width = `${percent}%`;
    }

    handleFundingRequest() {
        const qtyInput = document.getElementById('fundingQty');
        const amtInput = document.getElementById('fundingAmount');
        if (!qtyInput || !amtInput) return;

        const qty = parseInt(qtyInput.value);
        const amt = parseFloat(amtInput.value) * 100000; // Conversion from Lakhs to Rupees

        if (isNaN(qty) || qty <= 0 || isNaN(amt) || amt <= 0) {
            this.showNotification("Please enter valid vehicle count and loan amount.", "warning");
            return;
        }

        const currentAvailable = this.state.stockFinance.totalLimit - this.state.stockFinance.utilizedAmount;

        if (amt > currentAvailable) {
            this.showNotification("Loan amount is more than your available limit. Request rejected.", "danger");
            return;
        }

        // Add to active stock inventory
        this.state.stockFinance.utilizedAmount += amt;
        this.state.stockFinance.outstandingVehicles.unshift({
            id: `vin_${Math.floor(100 + Math.random() * 900)}`,
            model: "Mahindra Scorpio-N AX7 (Request Pool)",
            chassis: `MA3NVE${Math.floor(100000 + Math.random() * 900000)}B`,
            age: "0 Days",
            status: "PENDING_RELEASE",
            cost: `₹${(amt / qty / 100000).toFixed(2)} Lakhs`,
            location: "Transit (Plant Gate)"
        });

        this.showNotification(`Stock loan request successful. Released ₹${(amt / 100000).toFixed(2)} Lakhs for factory purchase.`, "success");
        qtyInput.value = '';
        amtInput.value = '';

        this.renderStockFinance();
        this.destroyAllCharts();
        this.renderStockCharts();
    }

    renderStockCharts() {
        const ctxStock = document.getElementById('stockFinanceChart');
        if (!ctxStock) return;

        const total = this.state.stockFinance.totalLimit;
        const utilized = this.state.stockFinance.utilizedAmount;
        const available = total - utilized;

        this.state.charts.stock = new Chart(ctxStock.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Used Stock Loan', 'Available Stock Loan'],
                datasets: [{
                    data: [utilized, available],
                    backgroundColor: ['#E31837', '#f1f3f7'],
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94a3b8',
                            font: { family: 'Plus Jakarta Sans', size: 11 }
                        }
                    }
                },
                cutout: '80%'
            }
        });
    }

    renderRiskCenter() {
        const npaList = document.getElementById('riskNpaNodeList');
        if (!npaList) return;

        npaList.innerHTML = '';
        window.DealerOSData.portfolioRisk.geographicDelinquency.forEach(item => {
            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.justifyContent = 'space-between';
            row.style.padding = '12px 0';
            row.style.borderBottom = '1px solid rgba(0,0,0,0.06)';
            
            let trendIcon = '<i class="fas fa-arrow-right" style="color: var(--text-secondary);"></i>';
            if (item.trend === 'INCREASING') trendIcon = '<i class="fas fa-arrow-up" style="color: var(--color-electric-red); animation: pulse 1s infinite;"></i>';
            else if (item.trend === 'DECREASING') trendIcon = '<i class="fas fa-arrow-down" style="color: var(--color-teal-glow);"></i>';

            row.innerHTML = `
                <div>
                    <span style="font-size: 13px; font-weight: 600; color: var(--text-primary);">${item.state} Region</span><br>
                    <small style="color: var(--text-secondary);">${item.nodes} Financed Showrooms</small>
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 13px; font-weight: 700; color: var(--text-primary);">Unpaid Dues (NPA): ${item.npa}</span><br>
                    <small style="color: var(--text-secondary);">${item.activeAum} Active Loans ${trendIcon}</small>
                </div>
            `;
            npaList.appendChild(row);
        });
    }

    renderRiskCharts() {
        const ctxRisk = document.getElementById('riskAgingChart');
        if (!ctxRisk) return;

        this.state.charts.risk = new Chart(ctxRisk.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['On Time', '1-30 Days Late', '31-60 Days Late', '61-90 Days Late', 'Unpaid Dues (>90d)'],
                datasets: [{
                    label: 'Loan Dues Aging',
                    data: [96.48, 1.82, 0.82, 0.58, 0.30],
                    backgroundColor: ['rgba(227, 24, 55, 0.2)', 'rgba(227, 24, 55, 0.4)', 'rgba(227, 24, 55, 0.6)', 'rgba(227, 24, 55, 0.75)', 'rgba(227, 24, 55, 0.95)'],
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderWidth: 1
                }]
            },
            options: this.getChartOptions()
        });
    }

    renderPerformance() {
        const list = document.getElementById('dealerPerformanceList');
        if (!list) return;

        list.innerHTML = '';
        window.DealerOSData.dealerPerformance.forEach(item => {
            const row = document.createElement('tr');
            row.id = 'showroom-row-' + item.name.replace(/[^a-zA-Z0-9]/g, '-');
            row.innerHTML = `
                <td><strong>#${item.rank}</strong></td>
                <td><strong>${item.name}</strong><br><small style="color: var(--text-secondary);">${item.region} Zone</small></td>
                <td><span style="font-size: 13px; font-weight: 700; color: var(--color-teal-glow);">${item.score} Score</span></td>
                <td><strong>${item.disbursement}</strong></td>
                <td>
                    <div style="width: 100px; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
                        <div style="width: ${item.score}%; height: 100%; background: var(--color-mahindra-red);"></div>
                    </div>
                </td>
            `;
            list.appendChild(row);
        });
    }

    renderPerformanceCharts() {
        const ctxPerf = document.getElementById('performanceRankChart');
        if (!ctxPerf) return;

        this.state.charts.performance = new Chart(ctxPerf.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['Sales Target', 'On-Time Collections', 'Document Check Speed', 'Stock Yard Age', 'Customer Happy Index', 'Auto Document Match'],
                datasets: [{
                    label: 'Mahindra Landmark (My Store)',
                    data: [94, 98.92, 85, 78, 92, 89.2],
                    backgroundColor: 'rgba(227, 24, 55, 0.15)',
                    borderColor: '#E31837',
                    pointBackgroundColor: '#fff'
                }, {
                    label: 'National Benchmark Avg',
                    data: [80, 94.0, 75, 70, 85, 82.0],
                    backgroundColor: 'rgba(71, 85, 105, 0.1)',
                    borderColor: '#475569',
                    pointBackgroundColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(0, 0, 0, 0.06)' },
                        grid: { color: 'rgba(0, 0, 0, 0.06)' },
                        pointLabels: { color: '#475569', font: { family: 'Plus Jakarta Sans', size: 10 } },
                        ticks: { color: '#475569', backdropColor: 'transparent' }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#94a3b8',
                            font: { family: 'Plus Jakarta Sans', size: 11 }
                        }
                    }
                }
            }
        });
    }

    renderExecutiveView() {
        const nodes = [
            { id: 'node_mumbai', name: 'West Regional Hub - Mumbai', top: '55%', left: '35%', val: '₹82.4 Cr Active Loans' },
            { id: 'node_delhi', name: 'North Cluster Hub - Delhi NCR', top: '25%', left: '48%', val: '₹64.8 Cr Active Loans' },
            { id: 'node_bengaluru', name: 'South Cluster Hub - Bengaluru', top: '78%', left: '42%', val: '₹59.2 Cr Active Loans' }
        ];

        const mapCanvas = document.getElementById('executiveMapCanvas');
        if (!mapCanvas) return;

        // Initialize HUD elements if they don't already exist to avoid clearing on tab shifts
        if (!mapCanvas.querySelector('.map-grid-overlay')) {
            mapCanvas.innerHTML = `
                <div class="map-grid-overlay"></div>
                <div class="map-radar-circle map-radar-circle-1"></div>
                <div class="map-radar-circle map-radar-circle-2"></div>
                <div class="map-radar-circle map-radar-circle-3"></div>
                <div class="map-radar-circle map-radar-circle-4"></div>
                <div class="map-radar-sweep"></div>
                <div class="map-hud-legend">
                    <div class="hud-item">
                        <span class="hud-dot red"></span>
                        <span>Regional Offices</span>
                    </div>
                    <div class="hud-item">
                        <span class="hud-dot teal"></span>
                        <span>Sync OK</span>
                    </div>
                    <div class="hud-item" style="margin-left: auto;">
                        <span style="font-family: monospace; font-size: 8px; color: var(--text-tertiary); letter-spacing: 0.05em;">TELEMETRY: SECURE SYNCED</span>
                    </div>
                </div>
            `;
        } else {
            // Remove existing command nodes to reload fresh ones without duplication
            mapCanvas.querySelectorAll('.command-node').forEach(el => el.remove());
        }

        nodes.forEach(n => {
            const nodeEl = document.createElement('div');
            nodeEl.className = 'command-node';
            nodeEl.style.top = n.top;
            nodeEl.style.left = n.left;
            
            // Premium high-fidelity overlay tooltip for hover metrics
            const tooltipEl = document.createElement('div');
            tooltipEl.className = 'command-node-tooltip';
            tooltipEl.innerHTML = `
                <strong>${n.name}</strong>
                <span class="exposure">${n.val}</span>
                <span class="telemetry"><i class="fas fa-satellite-dish"></i> Secure Link</span>
            `;
            nodeEl.appendChild(tooltipEl);
            
            nodeEl.addEventListener('click', () => {
                this.showNotification(`Inspecting ${n.name}: active outstanding loans of ${n.val}.`, "info");
                this.selectTelemetryNode(n.id);
            });

            mapCanvas.appendChild(nodeEl);
        });
    }

    renderExecutiveCharts() {
        const ctxExec = document.getElementById('executiveNationalChart');
        if (!ctxExec) return;

        this.state.charts.executive = new Chart(ctxExec.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026 (Pro)'],
                datasets: [{
                    label: 'All India Active Loans (₹ Cr)',
                    data: [1840, 2020, 2210, 2380, 2485.6],
                    borderColor: '#E31837',
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    fill: false,
                    tension: 0.3
                }]
            },
            options: this.getChartOptions()
        });
    }

    renderSecurityAdmin() {
        const secList = document.getElementById('securityLogList');
        if (!secList) return;

        secList.innerHTML = '';
        window.DealerOSData.securityLogs.forEach(log => {
            const badge = log.status === 'SAFE' ? '<span class="badge teal">Secure</span>' : '<span class="badge red" style="animation: pulse 1s infinite;">Alert (Review Required)</span>';
            const item = document.createElement('tr');
            item.innerHTML = `
                <td><small style="color: var(--text-secondary);">${log.timestamp}</small></td>
                <td><strong>${log.user}</strong></td>
                <td>${log.ip}</td>
                <td><span style="font-size: 12px; color: var(--text-secondary);">${log.device}</span></td>
                <td>${log.action}</td>
                <td>${badge}</td>
            `;
            secList.appendChild(item);
        });
    }

    handleAiInput() {
        const input = document.getElementById('aiInput');
        if (!input) return;

        const val = input.value.trim();
        if (!val) return;

        this.sendAiMessage(val);
        input.value = '';
    }

    sendAiMessage(text) {
        // Append user prompt
        this.appendChatMessage('user', text);

        setTimeout(() => {
            const responseText = this.parseAiIntent(text);
            this.appendChatMessage('assistant', responseText);
        }, 1200);
    }

    appendChatMessage(sender, text) {
        const body = document.getElementById('copilotBody');
        if (!body) return;

        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${sender}`;
        bubble.innerHTML = text;

        body.appendChild(bubble);
        this.scrollToBottom('copilotBody');
    }

    parseAiIntent(text) {
        const query = text.toLowerCase();
        
        if (query.includes('npa') || query.includes('risk')) {
            return `
                <div style="font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                    <strong style="color: var(--color-mahindra-red);"><i class="fas fa-shield-alt"></i> Loan Risk & Dues Report:</strong><br><br>
                    Average unpaid dues (NPA) across all showrooms is very low at **1.48%**. However, Indore region has slipped with a high warning tag.<br><br>
                    <button class="btn-primary" style="padding: 6px 12px; font-size: 11px; width: auto;" onclick="window.dealerOSApp.switchTab('portfolio')">
                        <i class="fas fa-chart-bar"></i> Open Customer Dues Center
                    </button>
                </div>
            `;
        } 
        
        if (query.includes('pdd') || query.includes('compliance')) {
            return `
                <div style="font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                    <strong style="color: var(--color-mahindra-red);"><i class="fas fa-balance-scale"></i> Pending Document Checks:</strong><br><br>
                    We currently have **18 pending document checks**. 12 items are late by more than 30 Days. Top delay is matching vehicle registration numbers with the database.<br><br>
                    <button class="btn-primary" style="padding: 6px 12px; font-size: 11px; width: auto;" onclick="window.dealerOSApp.switchTab('compliance')">
                        <i class="fas fa-file-signature"></i> Go to Document Checks
                    </button>
                </div>
            `;
        }

        if (query.includes('high-risk') || query.includes('accounts')) {
            return `
                <div style="font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                    <strong style="color: var(--color-mahindra-red);"><i class="fas fa-radiation"></i> Showroom Alert Profile:</strong><br><br>
                    **Sterling Automobiles (Indore)** has a warning flag. Showroom score fell to 62.5 due to unsold vehicles (high stock aging) and unpaid showroom margins.<br><br>
                    <button class="btn-primary" style="padding: 6px 12px; font-size: 11px; width: auto;" onclick="window.dealerOSApp.switchTab('stock')">
                        <i class="fas fa-coins"></i> Inspect Vehicle Stock Loans
                    </button>
                </div>
            `;
        }

        if (query.includes('report') || query.includes('regional')) {
            return `
                <div style="font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                    <strong style="color: var(--color-mahindra-red);"><i class="fas fa-chart-line"></i> Regional Showroom Analytics:</strong><br><br>
                    West Division has the highest total loans given at **₹24.85 Cr**. Central India shows the fastest growth (+18.2% monthly) led by high demand for Bolero, Thar, and SUV700.<br><br>
                    <button class="btn-primary" style="padding: 6px 12px; font-size: 11px; width: auto;" onclick="window.dealerOSApp.switchTab('performance')">
                        <i class="fas fa-award"></i> Open Showroom Performance Rank
                    </button>
                </div>
            `;
        }

        if (query.includes('commission')) {
            return `
                <div style="font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                    <strong style="color: var(--color-mahindra-red);"><i class="fas fa-wallet"></i> Monthly Showroom Commission Progress:</strong><br><br>
                    You have earned **₹6.82 Lakhs** in commissions this month, direct-credited to your showroom account. 
                    Payout status: **94% processed successfully**.<br><br>
                    <button class="btn-primary" style="padding: 6px 12px; font-size: 11px; width: auto;" onclick="window.dealerOSApp.switchTab('support')">
                        <i class="fas fa-headset"></i> Contact Support Center
                    </button>
                </div>
            `;
        }

        return `
            <div style="font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                I parsed your prompt: "<em>${text}</em>".<br><br>
                As your showroom assistant, I can instantly check customer dues, view loan pipelines, scan missing vehicle registration files, and release showroom stock loan funds.<br><br>
                Try commands like:<br>
                - <strong>"What commission is due this month?"</strong><br>
                - <strong>"Show showrooms with rising unpaid dues"</strong><br>
                - <strong>"Show pending document checks"</strong>
            </div>
        `;
    }

    scrollToBottom(elementId) {
        const el = document.getElementById(elementId);
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }

    destroyAllCharts() {
        Object.values(this.state.charts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        this.state.charts = {};
    }

    getChartOptions() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { color: 'rgba(0, 0, 0, 0.06)' },
                    ticks: { color: '#576574', font: { family: 'Plus Jakarta Sans', size: 10 } }
                },
                y: {
                    grid: { color: 'rgba(0, 0, 0, 0.06)' },
                    ticks: { color: '#576574', font: { family: 'Plus Jakarta Sans', size: 10 } }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };
    }

    renderTrainingHub() {
        const grid = document.getElementById('trainingModulesGrid');
        if (!grid) return;

        grid.innerHTML = '';
        this.state.trainingModules.forEach(mod => {
            const card = document.createElement('div');
            card.id = 'course-card-' + mod.id;
            card.className = 'glassmorphism glow-border';
            card.style.padding = '24px';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.gap = '16px';
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            
            // Background glow accent based on status
            let glowColor = 'rgba(255, 255, 255, 0.01)';
            let accentBorder = 'rgba(255, 255, 255, 0.04)';
            if (mod.status === 'COMPLETED') {
                glowColor = 'linear-gradient(135deg, rgba(0, 245, 212, 0.03) 0%, transparent 100%)';
                accentBorder = 'rgba(0, 245, 212, 0.15)';
            } else if (mod.status === 'IN_PROGRESS') {
                glowColor = 'linear-gradient(135deg, rgba(227, 24, 55, 0.03) 0%, transparent 100%)';
                accentBorder = 'rgba(227, 24, 55, 0.15)';
            }
            
            card.style.background = glowColor;
            card.style.borderColor = accentBorder;
            
            // Progress Bar or Certificate Button
            let actionBtn = '';
            if (mod.status === 'COMPLETED') {
                actionBtn = `
                    <button class="btn-primary" style="background: linear-gradient(90deg, #d4af37 0%, #aa7c11 100%) !important; color: #000 !important; font-weight: 700; border: none; font-size: 11px; padding: 10px 16px; width: auto;" onclick="window.dealerOSApp.viewCredentials('${mod.title}')">
                        <i class="fas fa-award"></i> View Certificate
                    </button>
                `;
            } else {
                const btnLabel = mod.status === 'IN_PROGRESS' ? 'Resume Course' : 'Start Course';
                actionBtn = `
                    <button class="btn-primary" style="font-size: 11px; padding: 10px 16px; width: auto;" onclick="window.dealerOSApp.startTrainingCourse('${mod.id}', this)">
                        <i class="fas fa-play"></i> ${btnLabel}
                    </button>
                `;
            }
            
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start; z-index: 2;">
                    <span class="badge ${mod.status === 'COMPLETED' ? 'teal' : 'red'}" style="font-size: 9px;">${mod.status.replace('_', ' ')}</span>
                    <span style="font-size: 10px; color: var(--text-tertiary);"><i class="far fa-clock"></i> ${mod.length}</span>
                </div>
                <h3 style="font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: var(--text-primary); margin: 0; min-height: 48px; line-height: 1.4; z-index: 2;">${mod.title}</h3>
                
                <div style="z-index: 2; margin-top: auto;">
                    <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-secondary); margin-bottom: 6px;">
                        <span>Progress</span>
                        <span>${mod.progress}%</span>
                    </div>
                    <div style="width: 100%; height: 6px; background: rgba(0, 0, 0, 0.06); border-radius: 3px; overflow: hidden; margin-bottom: 16px;">
                        <div class="progress-bar-fill" style="width: ${mod.progress}%; height: 100%; background: ${mod.status === 'COMPLETED' ? 'var(--color-teal-glow)' : 'var(--color-mahindra-red)'}; transition: width 0.4s ease; border-radius: 3px;"></div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 11px; color: var(--text-tertiary);"><i class="fas fa-bolt text-teal"></i> +${mod.xp} XP Reward</span>
                        ${actionBtn}
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    startTrainingCourse(courseId, buttonEl) {
        const mod = this.state.trainingModules.find(m => m.id === courseId);
        if (!mod) return;

        buttonEl.disabled = true;
        buttonEl.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Loading...`;
        this.showNotification(`Initializing course sandbox for "${mod.title}"...`, "info");

        let currentProgress = mod.progress;
        const cardEl = buttonEl.closest('.glassmorphism');
        const fillEl = cardEl.querySelector('.progress-bar-fill');
        const percentageEl = fillEl.parentElement.previousElementSibling.lastElementChild;
        
        const intervalTime = 40; // update every 40ms
        const totalDuration = 2000;
        const totalSteps = totalDuration / intervalTime;
        const progressIncrement = (100 - currentProgress) / totalSteps;

        const interval = setInterval(() => {
            currentProgress += progressIncrement;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                
                mod.progress = 100;
                mod.status = "COMPLETED";
                
                // Award XP to user profile header
                const userXpBadge = document.getElementById('userXpBadge');
                if (userXpBadge) {
                    let currentXp = parseInt(userXpBadge.textContent.replace(' XP', '').replace(',', '')) || 4800;
                    currentXp += mod.xp;
                    userXpBadge.innerHTML = `<i class="fas fa-bolt"></i> ${currentXp.toLocaleString()} XP`;
                }

                this.showNotification(`Course "${mod.title}" completed! You gained +${mod.xp} XP!`, "success");
                
                this.viewCredentials(mod.title);
                this.renderTrainingHub();
            } else {
                mod.progress = Math.round(currentProgress);
                if (fillEl) fillEl.style.width = `${mod.progress}%`;
                if (percentageEl) percentageEl.textContent = `${mod.progress}%`;
            }
        }, intervalTime);
    }

    viewCredentials(courseTitle) {
        const regNo = "MFL-ACAD-" + Math.floor(10000 + Math.random() * 90000);
        this.showNotification(`Verification Certificate Generated: ${courseTitle} (${regNo})`, "success");
        
        this.state.auditLogs.unshift({
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
            operator: "Vikramaditya Singh",
            area: "Training / Credentials",
            action: `Generated digital certificate for course: ${courseTitle}`,
            reason: `Course completion verification (Reg: ${regNo})`,
            signature: `0x${Math.floor(16777215 + Math.random() * 251658240).toString(16).toUpperCase()}...${Math.floor(4096 + Math.random() * 61439).toString(16).toUpperCase()}`
        });
        
        this.renderAuditTrail();
    }

    openCertificateModal(courseTitle, userName = "Vikramaditya Singh", regNo = "MFL-ACAD-99082") {
        this.viewCredentials(courseTitle);
    }

    closeCertificateModal() {
        // Safe placeholder after removing modal structure
    }

    renderComms() {
        const commsList = document.getElementById('commsAnnouncementList');
        if (!commsList) return;

        commsList.innerHTML = '';
        this.state.communications.forEach(comm => {
            const item = document.createElement('div');
            item.className = 'glassmorphism glow-border';
            item.style.padding = '16px';
            item.style.background = 'var(--bg-surface-elevated)';
            item.style.borderWidth = '1px';
            item.style.borderColor = 'rgba(0, 0, 0, 0.06)';
            item.style.borderRadius = '8px';
            item.style.display = 'flex';
            item.style.gap = '12px';
            
            item.innerHTML = `
                <img src="${comm.avatar}" alt="${comm.author}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-glass);">
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <strong style="color: var(--text-primary); font-size: 13px;">${comm.author}</strong>
                        <span style="font-size: 10px; color: var(--text-tertiary);">${comm.time}</span>
                    </div>
                    <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin: 0;">${comm.message}</p>
                    <div style="display: flex; gap: 12px; margin-top: 10px; font-size: 11px; color: var(--text-tertiary);">
                        <span><i class="far fa-comment"></i> ${comm.threadCount} replies</span>
                        <span style="cursor: pointer;" onclick="event.stopPropagation(); window.dealerOSApp.likeCommAnnouncement('${comm.id}')"><i class="far fa-thumbs-up"></i> Like</span>
                    </div>
                </div>
            `;
            commsList.appendChild(item);
        });
    }

    handleCommsPost() {
        const input = document.getElementById('commsPostInput');
        if (!input) return;

        const message = input.value.trim();
        if (!message) return;

        const currentPersona = window.DealerOSData.personas[this.state.currentRole];
        const newComm = {
            id: `chat_${Date.now()}`,
            author: currentPersona ? currentPersona.title : "Dealer Executive",
            avatar: window.DealerOSData.currentUser.avatar,
            message: message,
            time: "Just now",
            threadCount: 0
        };

        this.state.communications.unshift(newComm);
        this.renderComms();
        input.value = '';
        this.showNotification("Operational update broadcasted successfully.", "success");
    }

    likeCommAnnouncement(commId) {
        const comm = this.state.communications.find(c => c.id === commId);
        if (!comm) return;
        this.showNotification(`Liked update from ${comm.author}!`, "success");
    }

    triggerMomTranscription() {
        const btn = document.getElementById('momTranscriptionBtn');
        const btnText = document.getElementById('momBtnText');
        const micIcon = document.getElementById('momMicIcon');
        const summaryContainer = document.getElementById('recentMomSummaries');
        
        if (!btn || !btnText || !micIcon || !summaryContainer) return;
        
        btn.classList.add('mic-recording-active');
        btnText.textContent = "Listening & Analyzing...";
        micIcon.className = "fas fa-circle-notch fa-spin";
        this.showNotification("AI voice recorder started. Listening to meeting...", "info");

        setTimeout(() => {
            btn.classList.remove('mic-recording-active');
            btnText.textContent = "Start Transcription";
            micIcon.className = "fas fa-microphone";
            
            summaryContainer.innerHTML = `
                <div style="background: rgba(227, 24, 55, 0.05); border: 1px solid rgba(227, 24, 55, 0.15); padding: 12px; border-radius: 6px; margin-bottom: 12px; border-left: 3px solid var(--color-mahindra-red);">
                    <div style="font-weight: 700; color: var(--color-mahindra-red); font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Meeting Transcript Summary</div>
                    <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.4;">
                        "Discussed Indore showroom vehicle stock loan limits. Automatic limit increases started for showroom check scores above 96%. Need to check 12 pending customer ID documents and inspect Mahindra Bolero Neo stock at Yard A."
                    </div>
                </div>
                <div style="font-weight: 700; color: var(--text-primary); font-size: 11px; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
                    <i class="fas fa-tasks text-red" style="color: var(--color-mahindra-red);"></i> Showroom Tasks to Do
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <label style="display: flex; align-items: flex-start; gap: 8px; cursor: pointer; font-size: 11px; color: var(--text-secondary);">
                        <input type="checkbox" style="margin-top: 2px;" onchange="window.dealerOSApp.completeMomTask('task_1', this)">
                        <span>Inspect Bolero Neo at Yard A (Unsold for 65 Days)</span>
                    </label>
                    <label style="display: flex; align-items: flex-start; gap: 8px; cursor: pointer; font-size: 11px; color: var(--text-secondary);">
                        <input type="checkbox" style="margin-top: 2px;" onchange="window.dealerOSApp.completeMomTask('task_2', this)">
                        <span>Check 12 pending customer ID files for quick approval</span>
                    </label>
                    <label style="display: flex; align-items: flex-start; gap: 8px; cursor: pointer; font-size: 11px; color: var(--text-secondary);">
                        <input type="checkbox" style="margin-top: 2px;" onchange="window.dealerOSApp.completeMomTask('task_3', this)">
                        <span>Approve extra showroom stock loan funds for Indore</span>
                    </label>
                </div>
            `;
            this.showNotification("Meeting summary created. 3 new showroom tasks to do.", "success");
        }, 2500);
    }

    completeMomTask(taskId, checkboxEl) {
        if (checkboxEl.checked) {
            checkboxEl.parentElement.style.textDecoration = 'line-through';
            checkboxEl.parentElement.style.opacity = '0.5';
            checkboxEl.disabled = true;
            this.showNotification("Showroom task marked completed.", "success");
            
            // Persist the state in the core KPI dataset so it doesn't get wiped on tab switch!
            const activeKpis = window.DealerOSData.kpis[this.state.currentRole] || window.DealerOSData.kpis['dealer_principal'];
            const healthMetric = activeKpis.find(k => k.id === 'health_score');
            const compMetric = activeKpis.find(k => k.id === 'comp_score');
            
            if (healthMetric && healthMetric.value.includes('94.2')) {
                healthMetric.value = 'A+ / 95.8';
                this.showNotification("Showroom Score updated to 95.8 (+1.6)", "success");
            }
            if (compMetric && compMetric.value.includes('97.4')) {
                compMetric.value = '98.5%';
                this.showNotification("Showroom Check Score updated to 98.5%", "success");
            }

            // Immediately update DOM elements if they exist
            const healthVal = document.querySelector('.kpi-card[data-kpi-id="health_score"] .kpi-value');
            const compVal = document.querySelector('.kpi-card[data-kpi-id="comp_score"] .kpi-value');
            if (healthVal && healthVal.textContent.includes('94.2')) {
                healthVal.innerHTML = 'A+ / 95.8';
            }
            if (compVal && compVal.textContent.includes('97.4')) {
                compVal.innerHTML = '98.5%';
            }
        }
    }

    selectTelemetryNode(nodeId) {
        const hud = document.getElementById('executiveNodeTelemetry');
        if (!hud) return;
        
        hud.style.display = 'flex';
        
        let data = {};
        if (nodeId === 'node_mumbai') {
            data = {
                title: "West Region Showroom Hub - Mumbai",
                aum: "₹82.40 Cr",
                dealers: "42 Active Showrooms",
                npa: "0.22% (Stable)",
                npaColor: "var(--color-teal-glow)",
                compliance: "98.4% Score",
                auditStatus: "Last document check: 4 days ago"
            };
        } else if (nodeId === 'node_delhi') {
            data = {
                title: "North Region Showroom Hub - Delhi NCR",
                aum: "₹64.80 Cr",
                dealers: "28 Active Showrooms",
                npa: "0.18% (Decreasing)",
                npaColor: "var(--color-teal-glow)",
                compliance: "96.2% Score",
                auditStatus: "Last document check: 12 days ago"
            };
        } else {
            data = {
                title: "South Region Showroom Hub - Bengaluru",
                aum: "₹59.20 Cr",
                dealers: "31 Active Showrooms",
                npa: "0.42% (Stable)",
                npaColor: "var(--color-teal-glow)",
                compliance: "94.8% Score",
                auditStatus: "Last document check: 18 days ago"
            };
        }
        
        hud.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(0, 0, 0, 0.06); padding-bottom: 10px;">
                <strong style="color: var(--text-primary); font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">${data.title}</strong>
                <span class="badge red" style="font-size: 9px; cursor: pointer; border: none; padding: 2px 6px;" onclick="document.getElementById('executiveNodeTelemetry').style.display='none'"><i class="fas fa-times"></i></span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px;">
                <div>
                    <div style="font-size: 9px; text-transform: uppercase; color: var(--text-tertiary);">Active Loans</div>
                    <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); font-family: 'Outfit', sans-serif;">${data.aum}</div>
                </div>
                <div>
                    <div style="font-size: 9px; text-transform: uppercase; color: var(--text-tertiary);">Showrooms</div>
                    <div style="font-size: 13px; font-weight: 600; color: var(--text-primary); margin-top: 2px;">${data.dealers}</div>
                </div>
                <div>
                    <div style="font-size: 9px; text-transform: uppercase; color: var(--text-tertiary);">Unpaid Dues % (NPA)</div>
                    <div style="font-size: 13px; font-weight: 700; color: ${data.npaColor}; font-family: 'Outfit', sans-serif;">${data.npa}</div>
                </div>
                <div>
                    <div style="font-size: 9px; text-transform: uppercase; color: var(--text-tertiary);">Showroom Check Score</div>
                    <div style="font-size: 13px; font-weight: 700; color: var(--color-teal-glow); font-family: 'Outfit', sans-serif;">${data.compliance}</div>
                </div>
            </div>
            
            <div style="font-size: 10px; color: var(--text-secondary); background: rgba(0, 0, 0, 0.02); padding: 8px; border-radius: 4px; border-left: 2px solid rgba(0, 0, 0, 0.1); margin-top: 8px;">
                <i class="fas fa-history" style="margin-right: 4px;"></i> ${data.auditStatus}
            </div>
            
            <div style="display: flex; gap: 8px; margin-top: 12px;">
                <button class="btn-primary" style="flex: 1; padding: 8px; font-size: 10px; border-color: rgba(227, 24, 55, 0.3); width: auto;" onclick="window.dealerOSApp.triggerRegionalAudit('${nodeId}')">
                    <i class="fas fa-binoculars"></i> Check Documents
                </button>
                <button class="btn-primary" style="flex: 1; padding: 8px; font-size: 10px; background: transparent; color: var(--text-primary); border: 1px solid rgba(0, 0, 0, 0.15); width: auto;" onclick="window.dealerOSApp.disburseRegionalBuffer('${nodeId}')">
                    <i class="fas fa-coins"></i> Release Funds
                </button>
            </div>
        `;
    }

    triggerRegionalAudit(nodeId) {
        this.showNotification(`Running document verification check on ${nodeId.replace('node_', '').toUpperCase()} showrooms...`, "info");
        setTimeout(() => {
            this.showNotification(`Showroom check completed for ${nodeId.replace('node_', '').toUpperCase()}! Status: 100% SECURE.`, "success");
        }, 1500);
    }
    
    disburseRegionalBuffer(nodeId) {
        this.showNotification(`Requesting showroom stock loan funds release for ${nodeId.replace('node_', '').toUpperCase()}...`, "info");
        setTimeout(() => {
            this.showNotification(`Showroom stock loan approved. ₹15.0 Cr released to showroom pool.`, "success");
        }, 1500);
    }

    /* ==========================================================================
       NEW COMPREHENSIVE INTERACTIVE MODULES & EVENT BINDINGS
       ========================================================================== */

    bindNewModuleEvents() {
        // Loan Tracking filters
        const loanSearch = document.getElementById('loanSearchInput');
        if (loanSearch) {
            loanSearch.addEventListener('input', () => this.renderLoanTracking());
        }
        const loanFilter = document.getElementById('loanStatusFilter');
        if (loanFilter) {
            loanFilter.addEventListener('change', () => this.renderLoanTracking());
        }

        // Support Center ticket submission
        const supportForm = document.getElementById('raiseTicketForm');
        if (supportForm) {
            supportForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const category = document.getElementById('ticketCategory').value;
                const subject = document.getElementById('ticketSubject').value;
                const description = document.getElementById('ticketDescription').value;
                const ticketId = "TCK-" + Math.floor(10000 + Math.random() * 90000);
                const date = new Date().toISOString().replace('T', ' ').substring(0, 16);
                
                this.state.supportTickets.unshift({
                    id: ticketId,
                    category: category,
                    subject: subject,
                    status: 'In Progress',
                    date: date,
                    description: description
                });
                
                this.showNotification(`Support Ticket ${ticketId} raised successfully!`, "success");
                supportForm.reset();
                this.renderSupport();

                // Add log to immutable Audit Trail
                this.state.auditLogs.unshift({
                    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
                    operator: "Vikramaditya Singh",
                    area: "Support Center",
                    action: `Raised support ticket ${ticketId}`,
                    reason: `Customer issue: ${subject}`,
                    signature: `0x${Math.floor(16777215 + Math.random() * 251658240).toString(16).toUpperCase()}...${Math.floor(4096 + Math.random() * 61439).toString(16).toUpperCase()}`
                });
                this.renderAuditTrail();
            });
        }

        // Schemes & Offers filters
        document.querySelectorAll('#schemesFilterGroup button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.getAttribute('data-scheme-filter');
                this.renderSchemes(category);
            });
        });

        // Customer 360 search
        const c360Btn = document.getElementById('c360SearchBtn');
        if (c360Btn) {
            c360Btn.addEventListener('click', () => this.renderCustomer360());
        }
        const c360Input = document.getElementById('c360SearchInput');
        if (c360Input) {
            c360Input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.renderCustomer360();
            });
        }

        // EMI Calculator parameters sliders
        ['emiAmtSlider', 'emiTenureSlider', 'emiRateSlider'].forEach(sliderId => {
            const slider = document.getElementById(sliderId);
            if (slider) {
                slider.addEventListener('input', () => this.renderEmiCalc());
            }
        });

        // Knowledge Base search & category directories
        const kbSearch = document.getElementById('kbSearchInput');
        if (kbSearch) {
            kbSearch.addEventListener('input', () => this.renderProductKb(document.querySelector('#kbFolderGroup a.active')?.getAttribute('data-kb-folder') || 'all'));
        }
        document.querySelectorAll('#kbFolderGroup a').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const folder = e.currentTarget.getAttribute('data-kb-folder');
                this.renderProductKb(folder);
            });
        });
    }

    renderLoanTracking() {
        const listContainer = document.getElementById('loanTrackingList');
        if (!listContainer) return;
        
        listContainer.innerHTML = '';
        
        const searchQuery = (document.getElementById('loanSearchInput')?.value || '').toLowerCase();
        const stageFilter = document.getElementById('loanStatusFilter')?.value || 'all';
        
        let filtered = this.state.pipelineLeads.filter(lead => {
            const matchesSearch = lead.name.toLowerCase().includes(searchQuery) || lead.vehicle.toLowerCase().includes(searchQuery) || lead.id.toLowerCase().includes(searchQuery);
            const matchesStage = stageFilter === 'all' ? (lead.stage !== 'enquiry') : (lead.stage === stageFilter);
            return matchesSearch && matchesStage;
        });
        
        if (filtered.length === 0) {
            listContainer.innerHTML = '<div style="text-align: center; color: var(--text-tertiary); font-size: 12px; padding: 24px;">No active applications found.</div>';
            const detailPanel = document.getElementById('loanTrackerDetailPanel');
            if (detailPanel) detailPanel.innerHTML = '<div style="text-align: center; color: var(--text-tertiary); font-size: 12px; padding: 24px;">Select an application to view timeline details.</div>';
            return;
        }
        
        // Set default selected lead if current one is not in the filtered list
        if (!this.state.selectedLoanLeadId || !filtered.some(l => l.id === this.state.selectedLoanLeadId)) {
            this.state.selectedLoanLeadId = filtered[0].id;
        }
        
        filtered.forEach(lead => {
            const isSelected = lead.id === this.state.selectedLoanLeadId;
            const card = document.createElement('div');
            card.style.cssText = `
                padding: 16px; 
                border-radius: 8px; 
                border: 1.5px solid ${isSelected ? 'var(--color-mahindra-red)' : 'var(--border-glass)'}; 
                background: ${isSelected ? 'rgba(227, 24, 55, 0.03)' : 'rgba(255, 255, 255, 0.4)'};
                cursor: pointer;
                transition: all 0.2s;
            `;
            card.onclick = () => {
                this.state.selectedLoanLeadId = lead.id;
                this.renderLoanTracking();
            };
            
            let stageBadge = '';
            if (lead.stage === 'documents') stageBadge = '<span class="badge gold" style="font-size: 9px; padding: 2px 6px;">Docs Pending</span>';
            else if (lead.stage === 'underwriting') stageBadge = '<span class="badge orange" style="font-size: 9px; padding: 2px 6px;">Underwriting</span>';
            else if (lead.stage === 'sanctioned') stageBadge = '<span class="badge red" style="font-size: 9px; padding: 2px 6px;">Sanctioned</span>';
            else if (lead.stage === 'disbursed') stageBadge = '<span class="badge teal" style="font-size: 9px; padding: 2px 6px;">Disbursed</span>';
            
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                    <strong style="font-size: 13px; color: var(--text-primary);">${lead.name}</strong>
                    ${stageBadge}
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-secondary);">
                    <span><i class="fas fa-car" style="margin-right: 4px;"></i> ${lead.vehicle}</span>
                    <strong style="color: var(--text-primary);">${lead.amount}</strong>
                </div>
            `;
            listContainer.appendChild(card);
        });
        
        // Render selected lead details on the right panel
        this.renderLoanTrackingDetail();
    }

    renderLoanTrackingDetail() {
        const panel = document.getElementById('loanTrackerDetailPanel');
        if (!panel) return;
        
        const lead = this.state.pipelineLeads.find(l => l.id === this.state.selectedLoanLeadId);
        if (!lead) {
            panel.innerHTML = '<div style="text-align: center; color: var(--text-tertiary); font-size: 12px; padding: 24px;">Select an application to view timeline details.</div>';
            return;
        }
        
        let timelineHTML = lead.timeline.map((step, idx) => `
            <div style="display: flex; gap: 12px; margin-bottom: 16px; position: relative;">
                ${idx < lead.timeline.length - 1 ? '<div style="position: absolute; left: 6px; top: 18px; bottom: -18px; width: 2px; background: rgba(227, 24, 55, 0.15);"></div>' : ''}
                <div style="width: 14px; height: 14px; border-radius: 50%; background: ${idx === 0 ? 'var(--color-mahindra-red)' : 'rgba(227, 24, 55, 0.2)'}; border: 3px solid #fff; display: flex; align-items: center; justify-content: center; z-index: 1;"></div>
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <strong style="font-size: 12px; color: var(--text-primary);">${step.title}</strong>
                        <span style="font-size: 9px; color: var(--text-tertiary);">${step.date}</span>
                    </div>
                    <p style="font-size: 11px; color: var(--text-secondary); line-height: 1.4; margin: 0;">${step.text}</p>
                </div>
            </div>
        `).join('');
        
        panel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-glass); padding-bottom: 14px; margin-bottom: 16px;">
                <span class="panel-title" style="margin-bottom: 0;"><i class="fas fa-file-invoice"></i> Application File #${lead.id}</span>
                <span style="font-size: 10px; font-weight: 700; color: var(--text-secondary); text-transform: uppercase;">LTV Score: <strong style="color: var(--color-mahindra-red);">${lead.score}</strong></span>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
                <div>
                    <span style="font-size: 10px; color: var(--text-tertiary); text-transform: uppercase; display: block; margin-bottom: 2px;">Customer Details</span>
                    <strong style="font-size: 14px; color: var(--text-primary); display: block;">${lead.name}</strong>
                    <span style="font-size: 11px; color: var(--text-secondary);">${lead.phone}</span>
                </div>
                
                <div>
                    <span style="font-size: 10px; color: var(--text-tertiary); text-transform: uppercase; display: block; margin-bottom: 2px;">Mahindra Vehicle & Loan</span>
                    <strong style="font-size: 13px; color: var(--text-primary); display: block;">${lead.vehicle}</strong>
                    <span style="font-size: 11px; color: var(--color-teal-glow); font-weight: 700;">Funded Amount: ${lead.amount}</span>
                </div>
                
                <div>
                    <span style="font-size: 10px; color: var(--text-tertiary); text-transform: uppercase; display: block; margin-bottom: 4px;">System Eligibility Profile</span>
                    <div style="background: rgba(0, 0, 0, 0.02); border: 1px solid var(--border-glass); padding: 8px 12px; border-radius: 6px; font-size: 11px; color: var(--text-secondary);">
                        <i class="fas fa-shield-alt" style="color: var(--color-teal-glow); margin-right: 4px;"></i> ${lead.eligibility}
                    </div>
                </div>
            </div>
            
            <div style="border-top: 1px solid var(--border-glass); padding-top: 16px;">
                <span class="panel-title" style="margin-bottom: 12px; font-size: 12px;"><i class="fas fa-history"></i> Status Timeline Logs</span>
                <div style="display: flex; flex-direction: column;">
                    ${timelineHTML}
                </div>
            </div>
        `;
    }

    renderSupport() {
        const ticketList = document.getElementById('supportTicketsList');
        if (!ticketList) return;
        
        ticketList.innerHTML = '';
        this.state.supportTickets.forEach(ticket => {
            let badgeHTML = '';
            if (ticket.status === 'Resolved') badgeHTML = '<span class="badge teal" style="padding: 2px 6px; font-size: 9px;">Resolved</span>';
            else badgeHTML = '<span class="badge gold" style="padding: 2px 6px; font-size: 9px;">In Progress</span>';
            
            const tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid var(--border-glass)';
            tr.innerHTML = `
                <td style="padding: 10px 8px; font-size: 11px; font-weight: 700; color: var(--text-primary);">${ticket.id}</td>
                <td style="padding: 10px 8px; font-size: 11px; color: var(--text-secondary);">
                    <strong style="color: var(--text-primary); display:block;">${ticket.subject}</strong>
                    <span style="font-size: 9px; color: var(--text-tertiary); display:block; margin-top:2px;">${ticket.description}</span>
                </td>
                <td style="padding: 10px 8px;">${badgeHTML}</td>
                <td style="padding: 10px 8px; font-size: 10px; color: var(--text-tertiary); white-space: nowrap;">${ticket.date}</td>
            `;
            ticketList.appendChild(tr);
        });
    }

    renderSchemes(filterType) {
        const grid = document.getElementById('schemesGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        // Update visual button active state in schemesFilterGroup
        const filterButtons = document.querySelectorAll('#schemesFilterGroup button');
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-scheme-filter') === filterType) {
                btn.classList.add('active');
                btn.style.background = 'var(--color-mahindra-red)';
                btn.style.borderColor = 'var(--color-mahindra-red)';
                btn.style.color = '#fff';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'var(--bg-surface-elevated)';
                btn.style.borderColor = 'var(--border-glass)';
                btn.style.color = 'var(--text-primary)';
            }
        });
        
        const filtered = filterType === 'all' ? this.state.schemes : this.state.schemes.filter(s => s.category === filterType);
        
        filtered.forEach(scheme => {
            const card = document.createElement('div');
            card.className = 'glassmorphism glow-border';
            card.style.cssText = `
                padding: 20px; 
                display: flex; 
                flex-direction: column; 
                gap: 12px;
                transition: transform 0.2s, box-shadow 0.2s;
            `;
            card.onmouseover = () => {
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = '0 8px 24px rgba(227, 24, 55, 0.06)';
            };
            card.onmouseout = () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
            };
            
            card.innerHTML = `
                <div style="position: relative; height: 140px; border-radius: 8px; overflow: hidden; margin-bottom: 8px;">
                    <img src="${scheme.image}" style="width: 100%; height: 100%; object-fit: cover;">
                    <span class="badge ${scheme.category === 'ev' ? 'teal' : 'red'}" style="position: absolute; top: 10px; left: 10px; text-transform: uppercase; font-size: 8px; font-weight: 700;">${scheme.category} Scheme</span>
                </div>
                <div>
                    <h3 style="font-size: 14px; font-weight: 700; color: var(--text-primary); margin: 0 0 4px 0;">${scheme.title}</h3>
                    <div style="display: flex; gap: 12px; font-size: 11px; margin-bottom: 8px;">
                        <span>Interest Rate: <strong style="color: var(--color-mahindra-red);">${scheme.rate}</strong></span>
                        <span>Processing Fee: <strong style="color: var(--color-teal-glow);">${scheme.fee}</strong></span>
                    </div>
                    <p style="font-size: 11px; color: var(--text-secondary); line-height: 1.4; margin: 0 0 12px 0;">${scheme.script}</p>
                </div>
                <button class="btn-primary" style="margin-top: auto; font-size: 11px; padding: 8px; width: 100%;" onclick="window.dealerOSApp.applySchemeToLead('${scheme.title.replace(/'/g, "\\'")}')">
                    <i class="fas fa-file-signature"></i> Apply Scheme to Active Lead
                </button>
            `;
            grid.appendChild(card);
        });
    }

    applySchemeToLead(schemeTitle) {
        this.showNotification(`Scheme "${schemeTitle}" applied to active customer! Special rate locked.`, "success");
        
        // Add log to immutable Audit Trail
        this.state.auditLogs.unshift({
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
            operator: "Vikramaditya Singh",
            area: "Schemes & Offers",
            action: `Applied scheme: ${schemeTitle}`,
            reason: "Applied discount rate lock directly from the scheme catalog",
            signature: `0x${Math.floor(16777215 + Math.random() * 251658240).toString(16).toUpperCase()}...${Math.floor(4096 + Math.random() * 61439).toString(16).toUpperCase()}`
        });
        this.renderAuditTrail();
    }

    renderCustomer360() {
        const searchInput = document.getElementById('c360SearchInput');
        const resultContainer = document.getElementById('c360ResultContainer');
        if (!resultContainer) return;
        
        const query = (searchInput?.value || '').trim().toLowerCase();
        if (!query) {
            resultContainer.style.display = 'none';
            return;
        }
        
        // Match from pipelineLeads
        const lead = this.state.pipelineLeads.find(l => l.name.toLowerCase().includes(query) || l.phone.toLowerCase().includes(query) || l.id.toLowerCase().includes(query));
        
        if (!lead) {
            resultContainer.style.display = 'block';
            resultContainer.innerHTML = `
                <div style="text-align: center; padding: 24px; color: var(--text-secondary);">
                    <i class="fas fa-exclamation-triangle" style="font-size: 24px; color: var(--color-mahindra-red); margin-bottom: 8px;"></i>
                    <p style="font-size: 13px; font-weight: 700; margin: 0;">No Customer profile found matching "${query}"</p>
                    <span style="font-size: 11px; color: var(--text-tertiary);">Please try again with spelling matches.</span>
                </div>
            `;
            return;
        }
        
        resultContainer.style.display = 'block';
        
        // Repayment records mock
        let statusColor = lead.stage === 'disbursed' ? 'var(--color-teal-glow)' : 'var(--color-mahindra-red)';
        let behaviorLabel = lead.stage === 'disbursed' ? 'EXCELLENT (0 Overdues)' : 'PENDING APPROVAL';
        let offerLimit = lead.stage === 'disbursed' ? '₹2.5L Pre-approved' : 'Under Assessment';
        
        resultContainer.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; border-bottom: 1px solid var(--border-glass); padding-bottom: 16px; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
                <div>
                    <h3 style="font-size: 18px; font-weight: 800; color: var(--text-primary); margin: 0;">${lead.name}</h3>
                    <span style="font-size: 12px; color: var(--text-secondary);"><i class="fas fa-phone-alt"></i> ${lead.phone} | KYC Status: VERIFIED</span>
                </div>
                <span class="badge teal" style="padding: 4px 10px; font-size: 10px; text-transform: uppercase;">Active File #${lead.id}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
                <div style="background: rgba(0, 0, 0, 0.01); border: 1.5px solid var(--border-glass); padding: 12px; border-radius: 8px;">
                    <span style="font-size: 9px; text-transform: uppercase; color: var(--text-tertiary); display: block; margin-bottom: 4px;">Loan Repayment Behavior</span>
                    <strong style="font-size: 12px; color: ${statusColor};">${behaviorLabel}</strong>
                </div>
                <div style="background: rgba(0, 0, 0, 0.01); border: 1.5px solid var(--border-glass); padding: 12px; border-radius: 8px;">
                    <span style="font-size: 9px; text-transform: uppercase; color: var(--text-tertiary); display: block; margin-bottom: 4px;">Customer Loan-to-Value (LTV)</span>
                    <strong style="font-size: 12px; color: var(--text-primary);">78.5% rate</strong>
                </div>
                <div style="background: rgba(0, 0, 0, 0.01); border: 1.5px solid var(--border-glass); padding: 12px; border-radius: 8px;">
                    <span style="font-size: 9px; text-transform: uppercase; color: var(--text-tertiary); display: block; margin-bottom: 4px;">Assessed Risk Score</span>
                    <strong style="font-size: 12px; color: var(--color-teal-glow);">${lead.score} Low Risk</strong>
                </div>
                <div style="background: rgba(0, 0, 0, 0.01); border: 1.5px solid var(--border-glass); padding: 12px; border-radius: 8px;">
                    <span style="font-size: 9px; text-transform: uppercase; color: var(--text-tertiary); display: block; margin-bottom: 4px;">Fuel Card Limit Offer</span>
                    <strong style="font-size: 12px; color: var(--color-mahindra-red);">${offerLimit}</strong>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; align-items: start;">
                <div>
                    <h4 style="font-size: 12px; font-weight: 700; color: var(--text-primary); margin: 0 0 12px 0;"><i class="fas fa-file-invoice-dollar"></i> Customer Repayment Grid</h4>
                    <table style="width: 100%; border-collapse: collapse; text-align: left;" class="compliance-table">
                       <thead>
                           <tr style="border-bottom: 1px solid var(--border-glass);">
                               <th style="padding: 6px 4px; font-size: 9px; color: var(--text-secondary);">DUE DATE</th>
                               <th style="padding: 6px 4px; font-size: 9px; color: var(--text-secondary);">EMI AMOUNT</th>
                               <th style="padding: 6px 4px; font-size: 9px; color: var(--text-secondary);">STATUS</th>
                               <th style="padding: 6px 4px; font-size: 9px; color: var(--text-secondary);">CLEARING</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr style="border-bottom: 1px solid var(--border-glass);">
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-primary);">2026-05-10</td>
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-primary);">₹18,450</td>
                               <td style="padding: 8px 4px;"><span class="badge teal" style="padding: 1px 4px; font-size: 8px;">CLEARED</span></td>
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-tertiary);">Auto-debit (NACH)</td>
                           </tr>
                           <tr style="border-bottom: 1px solid var(--border-glass);">
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-primary);">2026-04-10</td>
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-primary);">₹18,450</td>
                               <td style="padding: 8px 4px;"><span class="badge teal" style="padding: 1px 4px; font-size: 8px;">CLEARED</span></td>
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-tertiary);">Auto-debit (NACH)</td>
                           </tr>
                           <tr>
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-primary);">2026-03-10</td>
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-primary);">₹18,450</td>
                               <td style="padding: 8px 4px;"><span class="badge teal" style="padding: 1px 4px; font-size: 8px;">CLEARED</span></td>
                               <td style="padding: 8px 4px; font-size: 10px; color: var(--text-tertiary);">Manual Deposit</td>
                           </tr>
                       </tbody>
                    </table>
                </div>
                
                <div style="background: rgba(227, 24, 55, 0.03); border: 1px solid rgba(227, 24, 55, 0.12); padding: 16px; border-radius: 8px; display: flex; flex-direction: column; gap: 10px;">
                    <strong style="font-size: 11px; color: var(--color-mahindra-red); text-transform: uppercase;"><i class="fas fa-tag"></i> Active Pre-approved Offer</strong>
                    <span style="font-size: 11px; color: var(--text-secondary); line-height: 1.4;">Based on clean payment history, this customer is pre-selected for the **Mahindra Farmer Insurance Moratorium Scheme** with low interest buffers.</span>
                    <button class="btn-primary" style="font-size: 11px; padding: 8px;" onclick="window.dealerOSApp.triggerPreApprovedOffer('${lead.name.replace(/'/g, "\\'")}')">
                       <i class="fas fa-paper-plane"></i> Send Offer SMS
                    </button>
                </div>
            </div>
        `;
    }

    triggerPreApprovedOffer(customerName) {
        this.showNotification(`Pre-approved offer details sent to ${customerName} via SMS.`, "success");
        
        // Add log to immutable Audit Trail
        this.state.auditLogs.unshift({
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
            operator: "Vikramaditya Singh",
            area: "Customer 360",
            action: `Dispatched pre-approved offer SMS to ${customerName}`,
            reason: "Customer loyalty program eligibility verification",
            signature: `0x${Math.floor(16777215 + Math.random() * 251658240).toString(16).toUpperCase()}...${Math.floor(4096 + Math.random() * 61439).toString(16).toUpperCase()}`
        });
        this.renderAuditTrail();
    }

    renderEmiCalc() {
        const loanAmount = parseFloat(document.getElementById('emiAmtSlider')?.value) || 1200000;
        const tenureMonths = parseFloat(document.getElementById('emiTenureSlider')?.value) || 60;
        const annualRate = parseFloat(document.getElementById('emiRateSlider')?.value) || 9.5;
        
        // Update UI Labels
        const amtLabel = document.getElementById('emiAmtLabel');
        if (amtLabel) amtLabel.textContent = `₹${(loanAmount / 100000).toFixed(1)} Lakhs`;
        
        const tenureLabel = document.getElementById('emiTenureLabel');
        if (tenureLabel) tenureLabel.textContent = `${tenureMonths} Months`;
        
        const rateLabel = document.getElementById('emiRateLabel');
        if (rateLabel) rateLabel.textContent = `${annualRate.toFixed(2)}% p.a.`;
        
        // Standard Amortization Math: Monthly EMI = [P x R x (1+R)^N]/[((1+R)^N)-1]
        const monthlyRate = (annualRate / 12) / 100;
        const emiResult = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
        
        const totalRepayment = emiResult * tenureMonths;
        const interestPayable = totalRepayment - loanAmount;
        
        // Update Outputs
        const formatCurrency = (val) => "₹" + Math.round(val).toLocaleString('en-IN');
        
        const emiResultText = document.getElementById('emiResultText');
        if (emiResultText) emiResultText.textContent = formatCurrency(emiResult);
        
        const emiPrincipalOut = document.getElementById('emiPrincipalOut');
        if (emiPrincipalOut) emiPrincipalOut.textContent = formatCurrency(loanAmount);
        
        const emiInterestOut = document.getElementById('emiInterestOut');
        if (emiInterestOut) emiInterestOut.textContent = formatCurrency(interestPayable);
        
        const emiRepayOut = document.getElementById('emiRepayOut');
        if (emiRepayOut) emiRepayOut.textContent = formatCurrency(totalRepayment);
    }

    renderKycVault() {
        const body = document.getElementById('kycListBody');
        if (!body) return;
        
        body.innerHTML = '';
        this.state.complianceCases.forEach(c => {
            const tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid var(--border-glass)';
            
            const getFileBadge = (status) => {
                if (status === 'VERIFIED') return '<span class="badge teal" style="font-size: 9px; padding: 2px 6px;"><i class="fas fa-check"></i> Verified</span>';
                return '<span class="badge red" style="font-size: 9px; padding: 2px 6px;"><i class="fas fa-exclamation-triangle"></i> Missing</span>';
            };
            
            tr.innerHTML = `
                <td style="padding: 12px; font-size: 11px;">
                    <strong style="color: var(--text-primary); display: block;">${c.customerName}</strong>
                    <span style="font-size: 9px; color: var(--text-tertiary);">${c.vehicle} | ${c.loanAmount}</span>
                </td>
                <td style="padding: 12px;">${getFileBadge(c.uploads.rc || (c.status === 'COMPLETE' ? 'VERIFIED' : null))}</td>
                <td style="padding: 12px;">${getFileBadge(c.uploads.invoice || (c.status === 'COMPLETE' ? 'VERIFIED' : null))}</td>
                <td style="padding: 12px;">${getFileBadge(c.uploads.insurance || (c.status === 'COMPLETE' ? 'VERIFIED' : null))}</td>
                <td style="padding: 12px;">
                    ${c.status === 'COMPLETE' ? '<span class="badge teal" style="font-size: 9px; padding: 2px 6px;"><i class="fas fa-check"></i> Land Verified</span>' : '<span class="badge gold" style="font-size: 9px; padding: 2px 6px;">Manual Waiver</span>'}
                </td>
            `;
            body.appendChild(tr);
        });
    }

    triggerKycUpload() {
        this.showNotification("Opening secure digital upload cabinet...", "info");
        setTimeout(() => {
            // Find first RC_MISSING or incomplete case to simulate upload
            const incomplete = this.state.complianceCases.find(c => c.status !== 'COMPLETE');
            if (incomplete) {
                incomplete.uploads.rc = 'VERIFIED';
                incomplete.uploads.insurance = 'VERIFIED';
                incomplete.uploads.invoice = 'VERIFIED';
                incomplete.status = 'COMPLETE';
                incomplete.statusLabel = '✅ Complete';
                incomplete.score = 'Fully Compliant';
                
                // Decrement pdd_pending in dealer_principal and dealer_admin kpis
                ['dealer_principal', 'dealer_admin'].forEach(role => {
                    const kpis = window.DealerOSData.kpis[role];
                    if (kpis) {
                        const pddKpi = kpis.find(k => k.id === 'pdd_pending');
                        if (pddKpi && pddKpi.value.includes('cases')) {
                            let casesCount = parseInt(pddKpi.value) || 18;
                            if (casesCount > 0) {
                                pddKpi.value = `${casesCount - 1} cases`;
                            }
                        }
                    }
                });
                
                this.showNotification(`Successfully verified documents for ${incomplete.customerName}!`, "success");
                
                // Add log to immutable Audit Trail
                this.state.auditLogs.unshift({
                    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
                    operator: "Vikramaditya Singh",
                    area: "KYC Vault / OCR Scanner",
                    action: `Auto-verified Aadhaar/PAN scanner upload for ${incomplete.customerName}`,
                    reason: "Secure document scanning & verification system override",
                    signature: `0x${Math.floor(16777215 + Math.random() * 251658240).toString(16).toUpperCase()}...${Math.floor(4096 + Math.random() * 61439).toString(16).toUpperCase()}`
                });
                
                this.renderKycVault();
                this.renderCompliance();
                this.renderDashboard();
                this.renderAuditTrail();
            } else {
                this.showNotification("All current files are fully uploaded & secure.", "success");
            }
        }, 1200);
    }

    renderAuditTrail() {
        const body = document.getElementById('auditTrailList');
        if (!body) return;
        
        body.innerHTML = '';
        this.state.auditLogs.forEach(log => {
            const tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid var(--border-glass)';
            tr.innerHTML = `
                <td style="padding: 10px 8px; font-size: 11px; font-family: monospace; color: var(--text-secondary); white-space: nowrap;">${log.timestamp}</td>
                <td style="padding: 10px 8px; font-size: 11px; font-weight: 700; color: var(--text-primary);">${log.operator}</td>
                <td style="padding: 10px 8px; font-size: 11px;"><span class="badge gold" style="font-size: 8px; padding: 2px 6px;">${log.area}</span></td>
                <td style="padding: 10px 8px; font-size: 11px; color: var(--text-primary); font-weight: 600;">${log.action}</td>
                <td style="padding: 10px 8px; font-size: 11px; color: var(--text-secondary);">${log.reason}</td>
                <td style="padding: 10px 8px; font-size: 10px; font-family: monospace; color: var(--text-tertiary);">${log.signature}</td>
            `;
            body.appendChild(tr);
        });
    }

    renderProductKb(category) {
        const docList = document.getElementById('kbDocList');
        if (!docList) return;
        
        docList.innerHTML = '';
        
        // Update visual button active state in kbFolderGroup
        const folders = document.querySelectorAll('#kbFolderGroup a');
        folders.forEach(btn => {
            if (btn.getAttribute('data-kb-folder') === category) {
                btn.classList.add('active');
                btn.style.background = 'var(--color-mahindra-red)';
                btn.style.borderColor = 'var(--color-mahindra-red)';
                btn.style.color = '#fff';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'var(--bg-surface-elevated)';
                btn.style.borderColor = 'var(--border-glass)';
                btn.style.color = 'var(--text-primary)';
            }
        });
        
        const searchQuery = (document.getElementById('kbSearchInput')?.value || '').toLowerCase();
        
        let filtered = category === 'all' ? this.state.productKb : this.state.productKb.filter(doc => doc.category === category);
        if (searchQuery) {
            filtered = filtered.filter(doc => doc.title.toLowerCase().includes(searchQuery) || doc.description.toLowerCase().includes(searchQuery));
        }
        
        if (filtered.length === 0) {
            docList.innerHTML = '<div style="text-align: center; color: var(--text-tertiary); font-size: 12px; padding: 24px;">No brochures or circulars found.</div>';
            return;
        }
        
        filtered.forEach(doc => {
            const card = document.createElement('div');
            card.style.cssText = `
                padding: 14px; 
                border-radius: 8px; 
                border: 1.5px solid var(--border-glass); 
                background: #ffffff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 16px;
            `;
            
            card.innerHTML = `
                <div style="flex: 1;">
                    <strong style="font-size: 13px; color: var(--text-primary); display: block; margin-bottom: 2px;">${doc.title}</strong>
                    <p style="font-size: 11px; color: var(--text-secondary); line-height: 1.4; margin: 0 0 6px 0;">${doc.description}</p>
                    <span style="font-size: 9px; color: var(--text-tertiary); text-transform: uppercase;">Category: ${doc.category.toUpperCase()} | Size: ${doc.size} | Date: ${doc.date}</span>
                </div>
                <button class="btn-primary" style="width: auto; padding: 8px 12px; font-size: 11px; height: 32px;" onclick="window.dealerOSApp.downloadDoc('${doc.title.replace(/'/g, "\\'")}')">
                    <i class="fas fa-download"></i> Download
                </button>
            `;
            docList.appendChild(card);
        });
    }

    downloadDoc(title) {
        this.showNotification(`Started download for circular: "${title}"`, "success");
        
        // Add log to immutable Audit Trail
        this.state.auditLogs.unshift({
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
            operator: "Vikramaditya Singh",
            area: "Product Knowledge Base",
            action: `Downloaded product document: ${title}`,
            reason: "Offline customer policy verification reference",
            signature: `0x${Math.floor(16777215 + Math.random() * 251658240).toString(16).toUpperCase()}...${Math.floor(4096 + Math.random() * 61439).toString(16).toUpperCase()}`
        });
        this.renderAuditTrail();
    }

    renderVideoTutorials() {
        const grid = document.getElementById('videoTutorialsGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        this.state.videoTutorials.forEach(video => {
            const card = document.createElement('div');
            card.className = 'glassmorphism glow-border';
            card.style.cssText = `
                padding: 16px; 
                display: flex; 
                flex-direction: column; 
                gap: 12px;
            `;
            
            card.innerHTML = `
                <div style="position: relative; height: 160px; border-radius: 8px; overflow: hidden; background: #000;">
                    <img src="${video.cover}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;">
                    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.25); cursor: pointer;" onclick="window.dealerOSApp.playVideoTutorial('${video.title.replace(/'/g, "\\'")}')">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-mahindra-red); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(227, 24, 55, 0.6); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            <i class="fas fa-play" style="color: #fff; font-size: 18px; margin-left: 3px;"></i>
                        </div>
                    </div>
                    <span style="position: absolute; bottom: 8px; right: 8px; font-size: 9px; font-weight: 700; color: #fff; background: rgba(0,0,0,0.6); padding: 2px 6px; border-radius: 4px;">${video.duration}</span>
                </div>
                <div>
                    <h3 style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin: 0 0 4px 0;">${video.title}</h3>
                    <p style="font-size: 11px; color: var(--text-secondary); line-height: 1.4; margin: 0;">${video.desc}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    playVideoTutorial(title) {
        this.showNotification(`Now streaming: "${title}" video tutorial...`, "info");
    }
}


// Instantiate on load
window.addEventListener('DOMContentLoaded', () => {
    window.dealerOSApp = new DealerOSApp();
});
