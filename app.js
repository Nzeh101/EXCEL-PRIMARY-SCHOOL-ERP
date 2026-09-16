const navGroups = [
  ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
  ["Peoples", [["students", "Students", "graduation-cap"], ["parents", "Parents", "users"], ["teachers", "Teachers", "presentation"]]],
  ["Management", [["fees", "Fees Management", "wallet"]]],
  ["Academic", [["timetable", "Time Table", "calendar-days"]]],
  ["Curriculum Management", [["curriculum", "Curriculum Design", "network"], ["lesson-planning", "Lesson Planning", "book-open"], ["assessment", "Assessment", "clipboard-check"], ["learning-materials", "Learning Materials", "archive"]]],
  ["Teacher & Staff Management", [["staff", "Staff Profiles", "id-card"], ["payroll", "Payroll", "receipt"], ["leave", "Leave Management", "calendar-minus"], ["performance", "Performance Reviews", "chart-line"]]],
  ["Communication & Notification", [["parent-communication", "Parent Communication", "megaphone"], ["messaging", "Messaging", "messages"], ["student-report", "Students Report", "file-chart"]]],
  ["Inventory Management", [["supplies", "Supplies", "package"], ["purchase", "Purchase", "shopping-cart"], ["stock-alerts", "Stock Alerts", "bell"]]],
  ["Health & Safety Management", [["health-records", "Health Records", "heart-pulse"], ["incident-reports", "Incident Reports", "triangle-alert"], ["safety-protocols", "Safety Protocols", "shield-check"]]],
  ["Reporting & Analytics", [["analytics", "Analytics Dashboard", "bar-chart"], ["financial-reports", "Financial Reports", "banknote"], ["enrollment-reports", "Enrollment Reports", "user-plus"], ["academic-progress", "Academic Progress", "trending-up"], ["compliance-reports", "Compliance Reports", "shield"]]]
];

const roleNavGroups = {
  "Super Admin": [
    ["Main", [["dashboard", "System Dashboard", "layout-dashboard"]]],
    ["User Access", [["users", "Users", "users"], ["roles", "Roles & Permissions", "shield-check"]]],
    ["System Controls", [["system-settings", "System Settings", "settings"], ["audit-logs", "Audit Logs", "file-chart"], ["admin-maintenance", "Database / Admin Maintenance", "database"]]]
  ],
  "Director": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["Students & Admissions", [["admissions", "Admissions", "user-plus"], ["students", "Students", "graduation-cap"], ["parents", "Guardians", "users"], ["classes", "Classes", "network"]]],
    ["Finance Oversight", [["fees", "Fees", "wallet"], ["receipts", "Receipts", "receipt"], ["student-balances", "Student Balances", "banknote"], ["arrears", "Arrears", "triangle-alert"], ["daily-collections", "Daily Collections", "bar-chart"], ["term-collections", "Term Collections", "file-chart"]]],
    ["Reports", [["analytics", "Analytics Dashboard", "bar-chart"], ["financial-reports", "Financial Reports", "banknote"], ["enrollment-reports", "Enrollment Reports", "user-plus"], ["academic-progress", "Academic Progress", "trending-up"], ["compliance-reports", "Compliance Reports", "shield"]]],
    ["Exams", [["exam-lists", "Candidate Lists", "file-chart"], ["eligible-students", "Eligible Students", "clipboard-check"], ["exam-export", "Excel / PDF Export", "download"], ["exam-settings", "Exam Settings", "shield-check"]]],
    ["Staff", [["teachers", "Teachers", "presentation"], ["staff", "Staff Profiles", "id-card"], ["payroll", "Payroll Review", "receipt"], ["leave", "Leave Review", "calendar-minus"], ["performance", "Performance Reviews", "chart-line"]]],
    ["Communication", [["messaging", "Messages", "messages"], ["parent-communication", "Announcements", "megaphone"], ["notifications", "Notifications", "bell"]]],
    ["Governance", [["approvals", "Approvals", "shield-check"], ["audit-logs", "Audit Logs", "file-chart"]]]
  ],
  "Admissions Officer": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["Admissions Desk", [["admissions", "New Admissions", "user-plus"], ["students", "Student Records", "graduation-cap"], ["parents", "Guardian Records", "users"]]],
    ["Placement & Setup", [["classes", "Classes", "network"], ["academic-years", "Academic Years", "calendar-days"], ["terms", "Terms", "calendar-days"]]],
    ["Admissions Reports", [["enrollment-reports", "Enrollment Reports", "bar-chart"], ["student-report", "Student Files Report", "file-chart"]]],
    ["Communication", [["notifications", "Notifications", "bell"], ["parent-communication", "Parent Follow-up", "megaphone"], ["messaging", "Admissions Messaging", "messages"]]]
  ],
  "School Manager": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["Cash Office", [["fees", "Record Payments", "wallet"], ["receipts", "Receipts", "receipt"], ["daily-collections", "Daily Collections", "bar-chart"]]],
    ["Balances", [["student-balances", "Student Balances", "banknote"], ["arrears", "Arrears Follow-up", "triangle-alert"], ["term-collections", "Term Collections", "file-chart"]]],
    ["Admissions Desk", [["admissions", "New Admissions", "user-plus"], ["students", "Student Records", "graduation-cap"], ["parents", "Guardian Records", "users"]]],
    ["Admissions Setup", [["classes", "Classes", "network"], ["academic-years", "Academic Years", "calendar-days"], ["terms", "Terms", "calendar-days"]]],
    ["Admissions Reports", [["enrollment-reports", "Enrollment Reports", "bar-chart"], ["student-report", "Student Files Report", "file-chart"]]],
    ["Finance Reports", [["financial-reports", "Financial Reports", "banknote"], ["analytics", "Collections Analytics", "bar-chart"]]],
    ["Communication", [["notifications", "Notifications", "bell"], ["parent-communication", "Payment Notices", "megaphone"], ["messaging", "Accounts Messaging", "messages"]]]
  ],
  "Exams Officer": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["Exams Desk", [["exam-lists", "Candidate Lists", "file-chart"], ["eligible-students", "Eligible Students", "clipboard-check"], ["exam-export", "Excel / PDF Export", "download"]]],
    ["Exam Setup", [["exam-settings", "Exam Settings", "shield-check"], ["exam-types", "Exam Types", "clipboard-check"], ["subjects", "Subjects", "book-open"], ["classes", "Classes", "network"]]],
    ["Exam Reports", [["academic-progress", "Academic Progress", "trending-up"], ["student-report", "Student Exam Reports", "file-chart"]]],
    ["Communication", [["messaging", "Exam Messaging", "messages"]]]
  ],
  "Teacher": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["My Teaching", [["students", "Assigned Students", "graduation-cap"], ["timetable", "My Time Table", "calendar-days"], ["lesson-planning", "Lesson Planning", "book-open"], ["assessment", "Assessment", "clipboard-check"], ["learning-materials", "Learning Materials", "archive"]]],
    ["My Staff Record", [["staff", "My Profile", "id-card"], ["leave", "My Leave", "calendar-minus"], ["performance", "My Performance", "chart-line"], ["payroll", "My Payslip", "receipt"]]],
    ["Communication", [["student-report", "Student Reports", "file-chart"], ["parent-communication", "Parent Communication", "megaphone"], ["messaging", "Messaging", "messages"]]]
  ]
};

const roleAliases = {
  Finance: "School Manager",
  "Finance Officer": "School Manager"
};

function currentRole() {
  const stored = localStorage.getItem("erpRole") || "Director";
  const normalized = roleAliases[stored] || stored;
  if (normalized !== stored) localStorage.setItem("erpRole", normalized);
  return roleNavGroups[normalized] ? normalized : "Director";
}

function navForRole(role = currentRole()) {
  return (roleNavGroups[role] || roleNavGroups["Super Admin"]).map(([title,links])=>[title,links.filter(([id])=>id!=="approvals"||Number(backendData.pending_record_approvals||0)>0)]).filter(([,links])=>links.length);
}

function flatNav(groups = navGroups) {
  return groups.flatMap((group) => group[1]);
}

function labelForRoute(id) {
  return flatNav(roleNavGroups["Director"]).concat(flatNav(roleNavGroups["Super Admin"])).find((item) => item[0] === id)?.[1] || id.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
}

function routeAllowed(id, role = currentRole()) {
  if(id==="approvals")return ["Director","Super Admin","Admissions Officer","School Manager"].includes(role);
  if (id === "notifications" && ["Director", "Super Admin", "School Manager", "Admissions Officer"].includes(role)) return true;
  return id === "dashboard" || flatNav(navForRole(role)).some((item) => item[0] === id);
}

const iconPaths = {
  "shirt": '<path d="m8 3-6 4 3 5 3-2v11h8V10l3 2 3-5-6-4a4 4 0 0 1-8 0Z"/>',
  "bus": '<rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 11h16M12 3v8M7 19v2M17 19v2M7 15h1M16 15h1"/>',
  "archive": '<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/>',
  "banknote": '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9h.01M18 15h.01"/>',
  "bar-chart": '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/>',
  "bell": '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  "book-open": '<path d="M12 7v14"/><path d="M3 5a5 5 0 0 1 7 0v16a5 5 0 0 0-7 0z"/><path d="M21 5a5 5 0 0 0-7 0v16a5 5 0 0 1 7 0z"/>',
  "calendar-days": '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  "calendar-minus": '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18M8 15h8"/>',
  "chart-line": '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "clipboard-check": '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4a3 3 0 0 1 6 0"/><path d="m9 14 2 2 4-5"/>',
  "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  "database": '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  "download": '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  "edit": '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  "eye": '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  "file-chart": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 18v-4M12 18v-7M16 18v-2"/>',
  "filter": '<path d="M3 5h18"/><path d="M6 12h12"/><path d="M10 19h4"/>',
  "graduation-cap": '<path d="m22 10-10-5-10 5 10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',
  "heart-pulse": '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3 12h4l2-3 3 6 2-3h7"/>',
  "id-card": '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 9h3M15 13h3M7 16h4"/>',
  "layout-dashboard": '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
  "menu": '<path d="M4 6h16M4 12h16M4 18h16"/>',
  "moon": '<path d="M12 3a6 6 0 0 0 9 7.3A9 9 0 1 1 12 3Z"/>',
  "megaphone": '<path d="m3 11 18-5v12L3 14z"/><path d="M11 16v4a2 2 0 0 1-4 0v-5"/>',
  "messages": '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/>',
  "phone": '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6.3 6.3l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z"/>',
  "location": '<path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  "network": '<circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M10 8 7 16M14 8l3 8M9 19h6"/>',
  "package": '<path d="m21 8-9-5-9 5 9 5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  "presentation": '<path d="M3 4h18v12H3z"/><path d="M12 16v4M8 20h8"/>',
  "printer": '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
  "receipt": '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2z"/><path d="M8 7h8M8 11h8M8 15h5"/>',
  "refresh": '<path d="M21 12a9 9 0 0 1-15.5 6.3"/><path d="M3 12A9 9 0 0 1 18.5 5.7"/><path d="M18 2v4h4M6 22v-4H2"/>',
  "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "settings": '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.2 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.4 1Z"/>',
  "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
  "shopping-cart": '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L23 6H6"/>',
  "sort": '<path d="m7 15 5 5 5-5"/><path d="M12 20V4"/><path d="m7 9 5-5 5 5"/>',
  "sun": '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  "trash": '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/>',
  "trending-up": '<path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
  "triangle-alert": '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/>',
  "wallet": '<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/><path d="M16 13h.01"/>'
};

function icon(name, size = 18) {
  return `<svg class="ui-icon" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths["layout-dashboard"]}</svg>`;
}

const demoAccounts = [
  ["Director", "director@excelprimaryschool.org", "password"],
  ["Super Admin", "admin@excelprimaryschool.org", "password"],
  ["Admissions Officer", "admissions@excelprimaryschool.org", "password"],
  ["School Manager", "finance@excelprimaryschool.org", "password"],
  ["Exams Officer", "exams@excelprimaryschool.org", "password"],
  ["Teacher", "teacher@excelprimaryschool.org", "password"]
];

function schoolLogo(compact = false, variant = "round") {
  const src = variant === "shield" ? "/erp/assets/excel-shield-generated.webp" : "/erp/assets/excel-round-generated.webp";
  return `<div class="school-logo ${compact ? "compact" : ""}" aria-label="Excel Primary School">
    <img src="${src}" alt="Excel Primary School" />
  </div>`;
}

const excelClasses = ["Nursery", "Reception", ...Array.from({ length: 8 }, (_, index) => `Standard ${index + 1}`)];
function classOptions(selected = "", studentType = "") {
  const classes = studentType === "Preschool" ? excelClasses.slice(0, 2) : studentType === "Primary" ? excelClasses.slice(2) : excelClasses;
  return classes.map((className) => `<option ${className === selected ? "selected" : ""}>${className}</option>`).join("");
}

function updateAdmissionClasses(typeSelect) {
  const classSelect = typeSelect.closest("form").querySelector("[name='class_name']");
  classSelect.innerHTML = classOptions("", typeSelect.value);
}

function currentTheme() {
  return localStorage.getItem("erpTheme") || "light";
}

function applyTheme() {
  document.documentElement.dataset.theme = currentTheme();
}

function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  localStorage.setItem("erpTheme", next);
  applyTheme();
  app();
}

let mobileMenuOpen = false;
function setMobileMenu(open) {
  mobileMenuOpen = open && window.matchMedia('(max-width: 960px)').matches;
  document.body.classList.toggle('mobile-menu-open', mobileMenuOpen);
  const sidebar = document.getElementById('school-navigation');
  if (sidebar) sidebar.inert = window.matchMedia('(max-width: 960px)').matches && !mobileMenuOpen;
  document.querySelector('.main')?.toggleAttribute('inert', mobileMenuOpen);
  document.querySelectorAll('.mobile-menu-button').forEach(button => button.setAttribute('aria-expanded', String(mobileMenuOpen)));
  if (mobileMenuOpen) sidebar?.querySelector('button')?.focus();
  else document.querySelector('.mobile-menu-button')?.focus({preventScroll: true});
}
window.matchMedia('(max-width: 960px)').addEventListener('change', () => { setMobileMenu(false); app(); });
document.addEventListener('keydown', event => {
  if (!mobileMenuOpen) return;
  if (event.key === 'Escape') { event.preventDefault(); setMobileMenu(false); }
  if (event.key === 'Tab') {
    const items = [...document.querySelectorAll('#school-navigation button, #school-navigation a')].filter(el => el.getClientRects().length);
    const first=items[0], last=items.at(-1);
    if (event.shiftKey && document.activeElement===first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement===last) { event.preventDefault(); first?.focus(); }
  }
});
function toggleSidebar() {
  if (window.matchMedia('(max-width: 960px)').matches) { setMobileMenu(!mobileMenuOpen); return; }
  const next = localStorage.getItem("erpSidebarCollapsed") === "true" ? "false" : "true";
  localStorage.setItem("erpSidebarCollapsed", next);
  app();
}

async function demoLogin(form) {
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Signing in…';
  try {
    const result = await apiRequest('/login', { method: 'POST', body: JSON.stringify(Object.fromEntries(new FormData(form))) });
    document.querySelector('meta[name="csrf-token"]').content = result.csrf_token;
    localStorage.setItem('erpRole', result.role);
    localStorage.removeItem('erpAcademicYear');
    localStorage.removeItem('erpTerm');
    backendLoaded = false;
    backendError = null;
    const loading = loadBackendData(true);
    location.hash = '#/dashboard';
    app();
    await loading;
  } catch (error) { form.querySelector('.login-error').textContent = error.message; }
  finally { button.disabled = false; button.textContent = 'Sign In'; }
}

const students = [
  ["AD9892434", "Roshni Negi", "III, A", "0001", "Female", "10 Jan 2018"],
  ["AD9892433", "Akash Rawat", "IV, B", "0002", "Male", "19 Aug 2019"],
  ["AD9892432", "Aarav Sharma", "III, A", "0003", "Female", "5 Dec 2017"],
  ["AD9892431", "Vivaan Mehta", "I, B", "0004", "Male", "22 Mar 2015"],
  ["AD9892430", "Riya Verma", "II, B", "0005", "Female", "13 May 2017"],
  ["AD9892429", "Arjun Kapoor", "III, B", "0006", "Male", "20 Jun 2021"],
  ["AD9892428", "Ananya Singh", "V, A", "0007", "Female", "18 Jan 2023"],
  ["AD9892427", "Ishaan Bansal", "VI, A", "0008", "Male", "26 Nov 2012"],
  ["AD9892426", "Kavya Malhotra", "VIII, B", "0009", "Female", "26 May 2020"],
  ["AD9892425", "Rohit Khanna", "VII, B", "0010", "Male", "6 Oct 2022"],
  ["AD9892424", "Neha Gupta", "IX, A", "0011", "Female", "27 Dec 2010"],
  ["AD9892423", "Aditya Choudhary", "X, A", "0013", "Male", "11 Aug 2011"]
];

const parents = [
  ["P124556", "Neil Das", "Added on 25 Dec 2024", "nei@example.com", "+91 8825446670", "Janet", "VI-A"],
  ["P124555", "Ritika Dutta", "Added on 18 Dec 2024", "rit@example.com", "+91 8825446670", "Joann", "V-B"],
  ["P124554", "Pratham Roy", "Added on 14 Dec 2024", "pra@example.com", "+91 8825446670", "Kathleen", "III-A"],
  ["P124552", "Rohit Khanna", "Added on 11 Jan 2025", "roh@example.com", "+91 8825446670", "Gifford", "VI-B"],
  ["P124551", "Priya Sethi", "Added on 24 Jan 2024", "pri@example.com", "+91 8825446670", "Lisa", "VI-B"],
  ["P124550", "Arvind Reddy", "Added on 19 Mar 2024", "arv@example.com", "+91 8825446670", "Ralph", "VI-B"],
  ["P124548", "Ritesh Tripathi", "Added on 22 Dec 2023", "rit@example.com", "+91 8825446670", "Julie", "VIII-A"],
  ["P124547", "Gauri Rao", "Added on 15 Dec 2025", "mar@example.com", "+91 8825446670", "Ryan", ""],
  ["P124546", "Khushal Rawat", "Added on 10 Dec 2025", "edw@example.com", "+91 8825446670", "Susan", ""]
];

const teachers = [
  ["T849127", "Meera Kulkarni", "III A", "meera@example.com", "+91 9954866445", "Physics", "Present"],
  ["T849126", "Harsh Vardhan Rathore", "II (A)", "harsh@example.com", "+91 9954866445", "Computer", "Present"],
  ["T849125", "Tanvi Deshmukh", "VI (A)", "tanvi@example.com", "+91 9954866445", "English", "Present"],
  ["T849124", "Pranav Menon", "VI (B), V (A)", "pranav@example.com", "+91 9954866445", "Hindi", "Present"],
  ["T849123", "Meera Kulkarni", "VIII", "meera@example.com", "+91 9954866445", "Env Science", "Present"],
  ["T849122", "Naveen Shetty", "I (A)", "naveen@example.com", "+91 9954866445", "Chemistry", "Absent"],
  ["T849121", "Divya Shankar", "IV", "divya@example.com", "+91 9954866445", "Maths", "Present"],
  ["T849120", "Manish Varma", "IX", "manish@example.com", "+91 9954866445", "Biology", "Present"],
  ["T849119", "Keerthi Rajan", "VII", "keerthi@example.com", "+91 9954866445", "Finance", "Present"],
  ["T849118", "Arvind Nair", "IX (C), X (C)", "arvind@example.com", "+91 9954866445", "Economics", "Present"],
  ["T849117", "Kavya Krishna", "I (A)", "kavya@example.com", "+91 9954866445", "Accounts", "Present"],
  ["T849116", "Tarun Iyer", "VI (A)", "tarun@example.com", "+91 9954866445", "English", "Present"]
];

const feeRows = students.slice(0, 9).map((student, index) => ({
  id: `FG8048${2 - index}`,
  name: student[1],
  type: ["Monthly", "Monthly", "Lump Sum", "Installment"][index % 4],
  className: student[2],
  tuition: [5000, 5500, 5000, 3500, 3000, 5000, 5500, 6000, 6500][index],
  activities: [500, 300, 800, 100, 500, 1000, 300, 200, 150][index],
  misc: [50, 150, 30, 200, 130, 150, 20, 0, 20][index],
  status: ["Paid", "Paid", "Pending", "Active", "Overdue", "Overdue", "Active", "Overdue", "Paid"][index],
  mode: ["Online", "Mobile Money", "Cash", "Mobile Money", "Mobile Money", "Mobile Money", "Online", "Cash", "Online"][index]
}));

let backendData = {
  students: [],
  admission_follow_ups: [],
  guardians: [],
  payments: [],
  balances: [],
  notifications: [],
  messages: [],
  finance_dashboard: null,
  stats: {}
};
let backendLoaded = false;
let backendLoading = false;
let backendError = null;

function route() {
  return location.hash.replace("#/", "") || "login";
}

function initials(name) {
  return name.split(" ").map((part) => part[0]).slice(0, 2).join("");
}

function money(value) {
  return `MWK ${Number(value).toLocaleString("en-MW")}`;
}

function todayLabel(options = { day: "2-digit", month: "short", year: "numeric" }) {
  return new Intl.DateTimeFormat("en-GB", options).format(new Date());
}

function dateTimeParts(value) {
  if (!value) return {date: "Not recorded", time: ""};
  const date = value ? new Date(value) : new Date();
  return {
    date: new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(date),
    time: new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" }).format(date)
  };
}

function academicYearLabel() {
  if (backendData.academic_year) return backendData.academic_year;
  const now = new Date();
  const start = now.getMonth() >= 8 ? now.getFullYear() : now.getFullYear() - 1;
  return `${start} / ${start + 1}`;
}

function csrfToken() {
  return document.querySelector("meta[name='csrf-token']")?.content || "";
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`/erp-api${path}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": csrfToken(),
      ...(options.headers || {})
    },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) { const error = new Error(data.message || "The school server could not complete that action."); error.status = response.status; throw error; }
  return data;
}

function hydrateBootstrap(data) {
  if (!data.compact) return data;
  const roster = new Map((data.students || []).map(student => [student.id, student]));
  const restore = value => {
    if (Array.isArray(value)) return value.map(restore);
    if (!value || typeof value !== 'object') return value;
    if (Object.hasOwn(value, 'student_ref')) {
      const { guardian, fee_balances, ...student } = roster.get(value.student_ref) || {};
      return student;
    }
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, restore(item)]));
  };
  const hydrated = restore(data);
  hydrated.admission_follow_ups = (data.admission_follow_ups || []).map(ref => roster.get(ref.student_ref)).filter(Boolean);
  return hydrated;
}

async function loadBackendData(force = false) {
  if (backendLoaded && !force) return;
  const requestId = ++backendLoadId;
  backendLoading = true; backendError = null;
  const params = new URLSearchParams();
  if (localStorage.getItem('erpAcademicYear')) params.set('academic_year', localStorage.getItem('erpAcademicYear'));
  if (localStorage.getItem('erpTerm')) params.set('term', localStorage.getItem('erpTerm'));
  try {
    const bootstrapRequest = apiRequest(`/bootstrap?compact=1&${params}`).then(bootstrap => {
      if (requestId === backendLoadId) {
        backendData = {payments:[],balances:[],finance_dashboard:{},...hydrateBootstrap(bootstrap)};
        if (bootstrap.user_role) localStorage.setItem('erpRole', bootstrap.user_role);
        backendLoaded = true;
        if (route() !== 'login') app();
      }
      return bootstrap;
    });
    const [bootstrap, register] = await Promise.all([bootstrapRequest, apiRequest(`/class-register?${params}`)]);
    if (requestId !== backendLoadId) return;
    const hydrated = hydrateBootstrap(bootstrap);
    backendData = {payments:[],balances:[],finance_dashboard:{},...hydrated}; classRegisterData = {...register,entries:(register.entries||[]).map(e=>({cells:{},issues:[],...e}))};
    if (bootstrap.user_role) localStorage.setItem('erpRole', bootstrap.user_role);
    backendLoaded = true;
  } catch (error) {
    if (requestId !== backendLoadId) return;
    backendError = error.message;
    if (error.status === 401) location.hash = '#/login';
  } finally {
    if (requestId === backendLoadId) { backendLoading = false; if (route() !== 'login') app(); }
  }
}

function showToast(title, body = "", type = "info") {
  let stack = document.getElementById("toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.id = "toast-stack";
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }
  const toast = document.createElement("article");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<button aria-label="Close notification" onclick="this.closest('.toast').remove()">×</button><strong>${title}</strong>${body ? `<p>${body}</p>` : ""}`;
  stack.appendChild(toast);
  setTimeout(() => toast.remove(), 6500);
}

function showLatestNotifications() {
  if (!backendData.notifications?.length) return;
  const unread = backendData.notifications.filter((notice) => (!notice.target_role || notice.target_role === currentRole()) && !notice.read_at).slice(0, 2);
  const key = unread.map((notice) => notice.id).join("-");
  if (!key || sessionStorage.getItem("erpNotificationKey") === key) return;
  sessionStorage.setItem("erpNotificationKey", key);
  unread.forEach((notice, index) => {
    setTimeout(() => showToast(notice.title, notice.body, notice.type || "info"), index * 450);
  });
}

function modalRoot() {
  let root = document.getElementById("modal-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "modal-root";
    document.body.appendChild(root);
  }
  return root;
}

function closeModal() {
  modalRoot().innerHTML = "";
}

function openModal(title, body, size = "") {
  modalRoot().innerHTML = `<div class="modal-backdrop" onclick="if(event.target === this) closeModal();">
    <section class="modal-card ${size}">
      <div class="modal-head"><h2>${title}</h2><button class="modal-close" aria-label="Close" title="Close" onclick="closeModal()">×</button></div>
      <div class="modal-body">${body}</div>
    </section>
  </div>`;
  removeStatusDots(modalRoot());
  prepareMobileRecords(modalRoot());
}

function removeStatusDots(root = document) {
  root.querySelectorAll?.(".badge").forEach((badge) => {
    badge.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) node.textContent = node.textContent.replace(/•\s*/g, "");
    });
  });
}

function actionable(label, iconName, handler = "") {
  return `<button class="btn ${label.includes("Record") || label.includes("Register") || label.includes("New") ? "primary" : "ghost"}" ${handler}>${icon(iconName)} ${label}</button>`;
}

function notifyAction(title, body = "This control is now connected to the interface flow.") {
  showToast(title, body, "success");
}

function openAcademicYearModal() {
  openModal('Select Academic Period', `<div class="modal-grid">${availableYears().map(year => `<button class="choice-card" onclick="selectAcademicPeriod('${year}', '${year === classRegisterData.current_year ? classRegisterData.current_term : 'Term 1'}')"><strong>${escapeHtml(year)}</strong><span>View this year's students and fees</span></button>`).join('')}</div>`);
}

function activeAcademicYear() {
  return backendData.academic_year || localStorage.getItem('erpAcademicYear') || academicYearLabel();
}

function openNotificationPanel() {
  toggleNotificationDropdown();
}

function notificationRows() {
  const roleNotices = (backendData.notifications || []).filter((notice) => !notice.target_role || notice.target_role === currentRole());
  const notices = roleNotices.length ? roleNotices.slice(0, 5) : [
    { title: "No new notifications", body: "New admissions, payments, and approvals will appear here.", type: "info", created_at: new Date().toISOString() }
  ];
  return notices.map((notice) => {
    const parts = dateTimeParts(notice.created_at);
    return `<article class="notification-row ${notice.type || "info"}">
      <span class="notification-dot"></span>
      <div><strong>${notice.title}</strong><p>${notice.body}</p><small>${parts.date} · ${parts.time}</small></div>
    </article>`;
  }).join("");
}

function notificationDropdown() {
  const locallyRead = new Set(JSON.parse(localStorage.getItem("erpReadNotifications") || "[]"));
  const unread = Number(backendData.unread_notifications||0);
  return `<div class="notification-wrap">
    <button class="icon-btn notification-trigger" title="Notifications" onclick="toggleNotificationDropdown(event)">${icon("bell")}${unread ? `<span>${unread}</span>` : ""}</button>
    <section id="notification-dropdown" class="notification-dropdown" onclick="event.stopPropagation()">
      <div class="notification-head"><strong>Notifications</strong><a href="#/notifications">View all</a></div>
      <div class="notification-list">${notificationRows()}</div>
    </section>
  </div>`;
}

function toggleNotificationDropdown(event) {
  event?.stopPropagation();
  const dropdown = document.getElementById("notification-dropdown");
  dropdown?.classList.toggle("open");
  if (dropdown?.classList.contains("open")) {
    const ids = backendData.notifications?.filter((notice) => (!notice.target_role || notice.target_role === currentRole()) && !notice.read_at).map((notice) => notice.id) || [];
    const locallyRead = new Set(JSON.parse(localStorage.getItem("erpReadNotifications") || "[]"));
    ids.forEach((id) => locallyRead.add(id));
    localStorage.setItem("erpReadNotifications", JSON.stringify([...locallyRead]));
    backendData.notifications?.forEach((notice) => { if (!notice.target_role || notice.target_role === currentRole()) notice.read_at = notice.read_at || new Date().toISOString(); });
    backendData.unread_notifications=0;
    document.querySelector(".notification-trigger span")?.remove();
    apiRequest("/notifications/mark-read", { method: "POST", body: JSON.stringify({ ids }) })
      .then(() => localStorage.removeItem("erpReadNotifications"))
      .catch((error) => console.warn("Notification read state will retry on this browser.", error));
  }
}

function closeNotificationDropdown() {
  document.getElementById("notification-dropdown")?.classList.remove("open");
}

function openFilterModal(label = "Filters") {
  openModal(label, `<div class="modal-grid">
    <label><span>Academic Year</span><select><option>${activeAcademicYear()}</option><option>2024 / 2025</option><option>2026 / 2027</option></select></label>
    <label><span>Term</span><select><option>Term 1</option><option>Term 2</option><option>Term 3</option></select></label>
    <label><span>Class</span><select><option>All Forms</option><option>Standard 1</option><option>Standard 2</option><option>Standard 3</option><option>Standard 4</option></select></label>
    <button class="btn primary" onclick="closeModal(); notifyAction('Filters applied','The current view has been filtered for your selection.');">${icon("filter")} Apply Filters</button>
  </div>`);
}

function openSortModal() {
  openModal("Sort Records", `<div class="modal-grid">
    ${["A-Z", "Newest First", "Oldest First", "Highest Balance"].map((sort) => `<button class="choice-card" onclick="closeModal(); notifyAction('Sort applied','${sort} is now selected.');"><strong>${sort}</strong><span>Applies to the current list</span></button>`).join("")}
  </div>`);
}

function studentOptions() {
  const rows = backendData.students || [];
  if (!rows.length) return `<option value="">Load students first</option>`;
  return rows.map((student) => `<option value="${student.id}">${student.first_name} ${student.last_name} - ${student.class_name}${student.section || ""}</option>`).join("");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function studentSearchRows() {
  if (backendData.students?.length) {
    return backendData.students.map((student) => ({
      id: student.id,
      name: `${student.first_name} ${student.last_name}`,
      meta: `${student.admission_no || "No admission no"} - ${student.class_name}${student.section || ""}`,
      searchable: `${student.first_name} ${student.last_name} ${student.admission_no || ""} ${student.class_name || ""} ${student.section || ""}`.toLowerCase()
    }));
  }
  return students.map((student) => ({
    id: "",
    name: student[1],
    meta: `${student[0]} - ${student[2]}`,
    searchable: student.join(" ").toLowerCase()
  }));
}

function studentSearchButton(row) {
  return `<button type="button" data-student-id="${escapeHtml(row.id)}" data-student-name="${escapeHtml(row.name)}" data-student-meta="${escapeHtml(row.meta)}" onclick="choosePaymentStudent(this)">
    <strong>${escapeHtml(row.name)}</strong><span>${escapeHtml(row.meta)}</span>
  </button>`;
}

function paymentStudentSearchHtml() {
  const rows = studentSearchRows().slice(0, 8);
  return `<label class="wide-field student-search-field">
    <span>Student</span>
    <input type="hidden" name="student_id">
    <input data-student-search type="search" placeholder="Start typing student name, admission no, or class" autocomplete="off" oninput="filterPaymentStudents(this)" onfocus="filterPaymentStudents(this)" required>
    <div class="student-search-results">${rows.map(studentSearchButton).join("")}</div>
    <small class="student-search-hint">Choose the matching student from the filtered results before recording fees.</small>
  </label>`;
}

function filterPaymentStudents(input) {
  const field = input.closest(".student-search-field");
  const list = field.querySelector(".student-search-results");
  const hidden = field.querySelector("[name='student_id']");
  const query = input.value.trim().toLowerCase();
  hidden.value = "";
  const matches = studentSearchRows().filter((row) => !query || row.searchable.includes(query)).slice(0, 8);
  list.innerHTML = matches.length ? matches.map(studentSearchButton).join("") : `<p>No matching student found</p>`;
  list.classList.add("open");
}

function choosePaymentStudent(button) {
  const field = button.closest(".student-search-field");
  field.querySelector("[name='student_id']").value = button.dataset.studentId || "";
  field.querySelector("[data-student-search]").value = button.dataset.studentName || "";
  field.querySelector(".student-search-hint").textContent = button.dataset.studentMeta || "Student selected";
  field.querySelector(".student-search-results").classList.remove("open");
  updatePaymentAmountLimit(field.closest("form"));
}

function updatePaymentAmountLimit(form) {
  if (!form) return;
  const amount = form.querySelector('[name=amount]');
  const submit = form.querySelector('button[type=submit]');
  const type = form.querySelector('[name=fee_type]').value;
  const id = Number(form.querySelector('[name=student_id]').value || 0);
  const note = form.querySelector('.form-note');
  const student = (backendData.students || []).find(s => s.id === id);
  const balance = (backendData.balances || []).find(b => b.student_id === id && b.fee_type === type);
  const pending = (backendData.payments || []).filter(p => p.student_id === id && p.fee_type === type && p.status === 'Pending Approval').reduce((sum,p) => sum + Number(p.amount),0);
  const flexible = ['School Bus Fee','Trip Fee'].includes(type);
  const remaining = Math.max(0, Number(balance?.balance ?? (type === 'Uniform Fee' ? 40000 : 0)) - pending);
  const changed = amount.dataset.feeType !== type;
  amount.dataset.feeType = type;
  amount.removeAttribute('max'); amount.disabled = false;
  if (changed) amount.value = flexible ? '' : String(remaining || '');
  if (!flexible) { amount.max = String(remaining); if (Number(amount.value) > remaining) amount.value = String(remaining); }
  submit.disabled = !student || !backendData.period_opened || (!flexible && remaining <= 0);
  submit.innerHTML = `${icon('receipt')} ${!student ? 'Select a Student' : !flexible && remaining <= 0 ? (balance ? 'Fee Fully Paid / Pending' : 'Review Required') : 'Record Payment'}`;
  note.textContent = !student ? 'Select a student from this academic period.' : flexible ? 'Enter the actual amount collected manually. No fixed school bus charge is assumed.' : type === 'Uniform Fee' ? `Uniform charge: MWK 40,000. Available balance after pending payments: ${money(remaining)}.` : !balance ? 'This imported tuition row needs review before another payment can be recorded for it.' : `Tuition charged for this term: ${money(balance.amount_due)}. Available balance: ${money(remaining)}.`;
  if(currentRole()==='School Manager') note.textContent += ' This payment requires Director/Admin approval.';
}

function admissionFormHtml() {
  return `<form class="record-form modal-form" onsubmit="event.preventDefault(); createAdmission(this);">
    <label><span>First Name</span><input name="first_name" required placeholder="Student first name"></label>
    <label><span>Last Name</span><input name="last_name" required placeholder="Student last name"></label>
    <label><span>Student Type</span><select name="student_type" onchange="updateAdmissionClasses(this)"><option>Preschool</option><option>Primary</option></select></label>
    <label><span>Class</span><select name="class_name">${classOptions("", "Preschool")}</select></label>
    <label><span>Gender</span><select name="gender"><option>Female</option><option>Male</option></select></label>
    <label><span>Joined On</span><input name="joined_on" type="date"></label>
    <label><span>Parent / Guardian <small>(optional)</small></span><input name="guardian_name" placeholder="Full name"></label>
    <label><span>Parent Email</span><input name="guardian_email" type="email" placeholder="name@example.com"></label>
    <label><span>Parent Phone</span><input name="guardian_phone" placeholder="+265 ..."></label>
    <p class="form-note">Tuition balances are created automatically for all three terms: MWK 70,000 for Preschool (Nursery and Reception) and MWK 75,000 for Primary (Standard 1–8).</p>
    <button class="btn primary" type="submit">${icon("user-plus")} Save Admission</button>
  </form>`;
}

function openAdmissionModal() {
  openModal("Register Student", admissionFormHtml(), "wide");
}

function openStudentEditModal(studentId) {
  const student = backendData.students?.find((item) => Number(item.id) === Number(studentId));
  if (!student) return showToast("Student unavailable", "Refresh the student records and try again.", "error");
  const canDelete = currentRole() === "Director";
  openModal("Edit Student", `<form class="record-form modal-form" onsubmit="event.preventDefault(); updateStudent(${student.id}, this);">
    <label><span>First Name</span><input name="first_name" value="${escapeHtml(student.first_name)}" required></label>
    <label><span>Last Name</span><input name="last_name" value="${escapeHtml(student.last_name)}" required></label>
    <label><span>Student Type</span><select name="student_type" onchange="updateAdmissionClasses(this)"><option ${student.student_type === "Preschool" ? "selected" : ""}>Preschool</option><option ${student.student_type === "Primary" ? "selected" : ""}>Primary</option></select></label>
    <label><span>Class</span><select name="class_name">${classOptions(student.class_name, student.student_type)}</select></label>
    <label><span>Gender</span><select name="gender"><option ${student.gender === "Female" ? "selected" : ""}>Female</option><option ${student.gender === "Male" ? "selected" : ""}>Male</option></select></label>
    <label><span>Guardian Name</span><input name="guardian_name" type="text" value="${escapeHtml(student.guardian?.name||'')}"></label>
    <label><span>Guardian Phone</span><input name="guardian_phone" type="text" value="${escapeHtml(student.guardian?.phone||'')}"></label>
    <label><span>Guardian Email</span><input name="guardian_email" type="email" value="${escapeHtml(student.guardian?.email||'')}"></label>
    <label><span>Guardian Relationship</span><input name="guardian_relationship" type="text" value="${escapeHtml(student.guardian?.relationship||'')}"></label>
    <label><span>Guardian Address</span><input name="guardian_address" type="text" value="${escapeHtml(student.guardian?.address||'')}"></label>
    <button class="btn primary" type="submit">${icon("edit")} Save Changes</button>
    ${canDelete ? `<button class="btn danger" type="button" onclick="deleteStudent(${student.id}, '${escapeHtml(`${student.first_name} ${student.last_name}`)}')">${icon("trash")} Delete Student</button>` : ""}
  </form>`, "wide");
}

async function updateStudent(studentId, form) {
  try {
    const result = await apiRequest(`/students/${studentId}`, { method: "PATCH", body: JSON.stringify({ ...Object.fromEntries(new FormData(form).entries()), role: currentRole() }) });
    closeModal(); showToast(result.pending_approval ? "Edit sent for approval" : "Student updated", result.pending_approval ? "The Director must approve these changes before they take effect." : "The student record and tuition have been updated.", "success"); await loadBackendData(true);
  } catch (error) { showToast("Student not updated", error.message, "error"); }
}

async function deleteStudent(studentId, studentName) {
  if (currentRole() !== "Director" || !confirm(`Delete ${studentName}? This cannot be undone.`)) return;
  try {
    await apiRequest(`/students/${studentId}`, { method: "DELETE", body: JSON.stringify({ role: currentRole() }) });
    closeModal(); showToast("Student deleted", `${studentName} was removed from active student records.`, "success"); await loadBackendData(true);
  } catch (error) { showToast("Student not deleted", error.message, "error"); }
}

function openParentModal() {
  openModal("Add Parent", `<form class="record-form modal-form" onsubmit="event.preventDefault(); closeModal(); showToast('Parent saved','Parent details are ready to attach to a student record.','success');">
    <label><span>Parent Name</span><input required placeholder="Full name"></label>
    <label><span>Email</span><input type="email" placeholder="parent@example.com"></label>
    <label><span>Phone</span><input placeholder="+265 ..."></label>
    <label><span>Student</span><select>${studentOptions()}</select></label>
    <button class="btn primary" type="submit">${icon("users")} Save Parent</button>
  </form>`);
}

function openParentEditModal(parentCode) {
  const guardian = backendData.guardians.find((item) => `P${String(item.id).padStart(6, "0")}` === parentCode);
  const name = guardian?.name || "Parent / Guardian";
  if (!guardian) return showToast("Guardian unavailable", "Refresh guardian records and try again.", "error");
  openModal("Edit Guardian", `<form class="record-form modal-form" onsubmit="event.preventDefault(); updateGuardian(${guardian.id}, this);"><label><span>Full Name</span><input name="name" value="${escapeHtml(name)}" required></label><label><span>Email</span><input name="email" type="email" value="${escapeHtml(guardian.email || "")}"></label><label><span>Phone</span><input name="phone" value="${escapeHtml(guardian.phone || "")}"></label><button class="btn primary" type="submit">${icon("edit")} Save Changes</button></form>`, "wide");
}

async function updateGuardian(guardianId, form) {
  try {
    const payload = { ...Object.fromEntries(new FormData(form).entries()), role: currentRole() };
    const result = await apiRequest(`/guardians/${guardianId}`, { method: "PATCH", body: JSON.stringify(payload) });
    closeModal(); showToast(result.pending_approval?"Request sent for approval":"Guardian updated",result.pending_approval?"The Director can review this in Change Approvals.":"Guardian details have been saved.","success"); await loadBackendData(true);
  } catch (error) { showToast("Guardian not updated", error.message, "error"); }
}

function openGuardianFollowUp(studentId) {
  const student = backendData.students.find((item) => Number(item.id) === Number(studentId));
  if (!student) return showToast("Student unavailable", "Refresh admissions and try again.", "error");
  const guardian = student.guardian || {};
  openModal(`Guardian Follow-up — ${escapeHtml(`${student.first_name} ${student.last_name}`)}`, `<form class="record-form modal-form" onsubmit="event.preventDefault(); saveGuardianFollowUp(${student.id}, this);"><label><span>Full Name</span><input name="name" value="${escapeHtml(guardian.name === "Guardian details pending" ? "" : guardian.name || "")}" required></label><label><span>Email</span><input name="email" type="email" value="${escapeHtml(guardian.email || "")}"></label><label><span>Phone</span><input name="phone" value="${escapeHtml(guardian.phone || "")}"></label><button class="btn primary" type="submit">${icon("users")} Save Guardian Details</button></form>`, "wide");
}

async function saveGuardianFollowUp(studentId, form) {
  try {
    const payload = { ...Object.fromEntries(new FormData(form).entries()), role: currentRole() };
    const result = await apiRequest(`/students/${studentId}/guardian`, { method: "PUT", body: JSON.stringify(payload) });
    closeModal(); showToast(result.pending_approval?"Request sent for approval":"Guardian updated",result.pending_approval?"The Director can review this in Change Approvals.":"Guardian details were linked to the student.","success"); await loadBackendData(true);
  } catch (error) { showToast("Follow-up not updated", error.message, "error"); }
}

function openGuardianStudentsModal(guardianId) {
  const guardian = backendData.guardians.find((item) => Number(item.id) === Number(guardianId));
  if (!guardian) return showToast("Guardian unavailable", "Refresh guardian records and try again.", "error");
  const key = (value) => String(value || "").trim().toLowerCase();
  const linked = backendData.guardians.filter((item) => Number(item.id) === Number(guardianId) || (key(item.name) === key(guardian.name) && ((guardian.email && key(item.email) === key(guardian.email)) || (guardian.phone && key(item.phone) === key(guardian.phone))))).map((item) => item.student).filter(Boolean);
  openModal(`${escapeHtml(guardian.name)} — Students`, linked.length ? `<input class="select" type="search" placeholder="Search student or admission number" aria-label="Search linked students" oninput="this.nextElementSibling.querySelectorAll('.request-item').forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(this.value.trim().toLowerCase()))"><div class="request-list">${linked.map((student) => `<article class="request-item"><div class="person-line"><span class="avatar">${initials(`${student.first_name} ${student.last_name}`)}</span><div><strong>${escapeHtml(`${student.first_name} ${student.last_name}`)}</strong><span class="muted">${escapeHtml(student.admission_no || "Admission pending")} · ${escapeHtml(student.class_name)}${student.section ? ` ${escapeHtml(student.section)}` : ""}</span></div><span class="badge green">${escapeHtml(student.status || "Active")}</span></div></article>`).join("")}</div>` : `<p class="muted">No students are currently linked to this guardian.</p>`, "wide");
}

function openStudentResults(name, className) {
  const subjects = ["English", "Chichewa", "Mathematics", "Science and Technology", "Social Studies", "Life Skills", "Expressive Arts", "Agriculture", "Bible Knowledge", "Computer Studies"];
  const scores = [78, 72, 84, 75, 80, 83, 76, 79, 81, 88];
  openModal(`${name} — Academic Results`, studentResultsHtml(subjects, scores, className), "wide");
}

function openStudentDetails(studentId) {
  const student = backendData.students?.find((item) => Number(item.id) === Number(studentId));
  if (!student) return showToast("Student unavailable", "Refresh the records and try again.", "error");
  const balances = (backendData.balances || []).filter((item) => Number(item.student_id) === Number(studentId));
  const guardian = student.guardian;
  openModal(`${escapeHtml(student.first_name)} ${escapeHtml(student.last_name)} — Student Record`, `<article class="detail-card"><div><h3>${escapeHtml(student.admission_no || "Admission pending")}</h3><p>${escapeHtml(student.class_name)} · ${escapeHtml(student.student_type || "Student")}</p><p>Guardian: ${escapeHtml(guardian?.name || "Not recorded")} · ${escapeHtml(guardian?.phone || "No phone")}</p></div></article>${canViewFinance()?`<h3>Fee Balances</h3><div class="table-wrap"><table class="student-record-fees"><thead><tr><th>Fee Type</th><th>Term</th><th>Due</th><th>Paid</th><th>Balance</th><th>Status</th></tr></thead><tbody>${balances.map((balance) => `<tr><td>${balance.fee_type}</td><td>${balance.term}</td><td>${money(balance.amount_due)}</td><td>${money(balance.amount_paid)}</td><td><strong>${money(balance.balance)}</strong></td><td><span class="badge ${statusClass(balance.status)}">• ${balance.status}</span></td></tr>`).join("") || `<tr><td colspan="6">No balances recorded.</td></tr>`}</tbody></table></div>`:""}<div class="student-record-actions"><button class="btn primary student-results-btn" onclick="openStudentResults('${escapeHtml(`${student.first_name} ${student.last_name}`)}','${escapeHtml(student.class_name)}')">${icon("chart-line", 17)} View Academic Results</button></div>`, "wide");
}

function studentResultsHtml(subjects, scores, className) {
  return `<div class="filters"><select class="select"><option>${className}</option><option>Standard 1</option><option>Standard 2</option><option>Standard 3</option><option>Standard 4</option></select><select class="select"><option>Term 1</option><option>Term 2</option><option>Term 3</option></select><select id="results-subject" class="select" onchange="updateStudentResults()"><option value="">All Subjects</option>${subjects.map((subject) => `<option>${subject}</option>`).join("")}</select></div><div id="results-content"><div class="results-overview"><div class="results-pie"></div><strong>76%<small>Average score</small></strong></div><div class="results-list">${subjects.map((subject, index) => `<div><span>${subject}</span><b>${scores[index]}%</b><i><i style="width:${scores[index]}%"></i></i></div>`).join("")}</div></div>`;
}

function updateStudentResults() {
  const subject = document.getElementById("results-subject")?.value;
  const content = document.getElementById("results-content");
  if (!content || !subject) return;
  const marks = [["Assignments", 82], ["Weekly Tests", 74], ["Final Exam", 78]];
  const average = Math.round(marks.reduce((sum, [, mark]) => sum + mark, 0) / marks.length);
  content.innerHTML = `<div class="results-overview"><div class="results-pie"></div><strong>${average}%<small>${subject} average</small></strong></div><div class="results-list results-breakdown">${marks.map(([label, mark]) => `<div><span>${label}</span><b>${mark}%</b><i><i style="width:${mark}%"></i></i></div>`).join("")}</div>`;
}

function openTeacherModal() {
  openModal("Add Teacher", `<form class="record-form modal-form" onsubmit="event.preventDefault(); closeModal(); showToast('Teacher saved','Teacher profile is ready for timetable assignment.','success');">
    <label><span>Name</span><input required placeholder="Teacher full name"></label>
    <label><span>Subject</span><input required placeholder="Subject"></label>
    <label><span>Email</span><input type="email" placeholder="teacher@excelprimaryschool.org"></label>
    <label><span>Phone</span><input placeholder="+265 ..."></label>
    <button class="btn primary" type="submit">${icon("presentation")} Save Teacher</button>
  </form>`);
}

function paymentFormHtml() {
  return `<form class="record-form modal-form" onsubmit="event.preventDefault(); createPayment(this)">
    ${paymentStudentSearchHtml()}
    <label><span>Fee Type</span><select name="fee_type" onchange="updatePaymentAmountLimit(this.form)">${['Tuition Fee','Uniform Fee','School Bus Fee','Trip Fee'].map(type=>`<option>${type}</option>`).join('')}</select></label>
    <label><span>Academic Year</span><input name="academic_year" value="${escapeHtml(activeAcademicYear())}" readonly></label>
    <label><span>Term</span><input name="term" value="${escapeHtml(activeTerm())}" readonly></label>
    <label><span>Amount Collected (MWK)</span><input name="amount" type="number" min="1" step="1" required></label>
    <label><span>Method</span><select name="method"><option>Mobile Money</option><option>Cash</option><option>Bank Transfer</option></select></label>
    <label class="wide-field"><span>Notes</span><input name="notes" placeholder="Optional receipt note"></label>
    <p class="form-note">Select a student to see the fee balance.</p><button class="btn primary" type="submit" disabled> Select a Student</button></form>`;
}

function openPaymentModal() {
  openModal("Record Payment", paymentFormHtml(), "wide");
  updatePaymentAmountLimit(document.querySelector(".modal-card form"));
}

function openDetailsModal(title = "Record Details", detail = "School record") {
  openModal(title, `<div class="detail-card"><span class="soft-icon blue">${icon("eye", 30)}</span><div><h3>${detail}</h3><p class="muted">This preview card is ready for backend detail views, edits, and export history.</p></div></div>`);
}

function openReceiptModal(receiptNo) {
  const payment = backendData.payments?.find((item) => item.receipt_no === receiptNo);
  if (!payment) return openDetailsModal("Receipt", receiptNo);
  const studentName = payment.student ? `${payment.student.first_name} ${payment.student.last_name}` : "Student";
  openModal("Payment Receipt", `<div class="receipt-card">
    ${schoolLogo(false)}
    <h2>Receipt ${payment.receipt_no}</h2>
    <dl>
      <div><dt>Student</dt><dd>${studentName}</dd></div>
      <div><dt>Fee Type</dt><dd>${payment.fee_type}</dd></div>
      <div><dt>Academic Year</dt><dd>${payment.academic_year || activeAcademicYear()}</dd></div>
      <div><dt>Term</dt><dd>${payment.term || "Term 1"}</dd></div>
      <div><dt>Amount Paid</dt><dd>${money(payment.amount)}</dd></div>
      <div><dt>Balance After</dt><dd>${money(payment.balance_after || 0)}</dd></div>
      <div><dt>Method</dt><dd>${payment.method}</dd></div>
    </dl>
    <button class="btn primary" onclick="window.print()">${icon("printer")} Print Receipt</button>
  </div>`, "receipt-modal");
}

function studentPayments(studentId) {
  return (backendData.payments || [])
    .filter((payment) => Number(payment.student_id) === Number(studentId))
    .sort((a, b) => new Date(b.paid_at) - new Date(a.paid_at));
}

function openStudentPaymentHistory(studentId) {
  const student = backendData.students?.find((item) => Number(item.id) === Number(studentId));
  const payments = studentPayments(studentId);
  const studentName = student ? `${student.first_name} ${student.last_name}` : "Student";
  openModal(`${escapeHtml(studentName)} — Payment History`, payments.length ? `<div class="table-wrap payment-history-wrap"><table class="payment-history-table"><thead><tr><th>Receipt</th><th>Payment / Term</th><th>Amount</th><th>Method</th><th>Date / Time</th><th>Actions</th></tr></thead><tbody>${payments.map((payment) => { const paidAt = dateTimeParts(payment.paid_at); return `<tr><td><a onclick="openReceiptModal('${payment.receipt_no}')">${payment.receipt_no}</a></td><td><span class="cell-stack"><strong>${payment.fee_type}</strong><small>${payment.term || "Term 1"}</small></span></td><td><strong>${money(payment.amount)}</strong></td><td>${payment.method}</td><td><span class="cell-stack"><strong>${paidAt.date}</strong><small>${paidAt.time}</small></span></td><td><span class="row-tools"><button class="icon-mini" title="Preview receipt" onclick="openReceiptModal('${payment.receipt_no}')">${icon("receipt", 16)}</button><button class="icon-mini" title="Download receipt" onclick="downloadReceipt('${payment.receipt_no}')">${icon("download", 16)}</button></span></td></tr>`; }).join("")}</tbody></table></div>` : `<p class="muted">No payments have been recorded for this student.</p>`, "wide payment-history-modal");
}

function downloadReceipt(receiptNo) {
  const payment = backendData.payments?.find((item) => item.receipt_no === receiptNo);
  if (!payment) return showToast("Receipt unavailable", "No recorded transaction was found for this student.", "error");
  const studentName = payment.student ? `${payment.student.first_name} ${payment.student.last_name}` : "Student";
  const paidAt = dateTimeParts(payment.paid_at);
  const documentHtml = `<!doctype html><html><head><meta charset="utf-8"><title>${payment.receipt_no}</title><style>body{font:16px Arial;max-width:680px;margin:40px auto;color:#17213d}h1{color:#18783e}table{width:100%;border-collapse:collapse}td{padding:10px;border-bottom:1px solid #ddd}td:first-child{font-weight:bold}</style></head><body><h1>Excel Primary School</h1><h2>Payment Receipt ${payment.receipt_no}</h2><table><tr><td>Student</td><td>${escapeHtml(studentName)}</td></tr><tr><td>Payment Type</td><td>${escapeHtml(payment.fee_type)}</td></tr><tr><td>Term</td><td>${escapeHtml(payment.term || "Term 1")}</td></tr><tr><td>Academic Year</td><td>${escapeHtml(payment.academic_year || activeAcademicYear())}</td></tr><tr><td>Amount</td><td>${money(payment.amount)}</td></tr><tr><td>Method</td><td>${escapeHtml(payment.method)}</td></tr><tr><td>Date / Time</td><td>${paidAt.date} · ${paidAt.time}</td></tr><tr><td>Balance After</td><td>${money(payment.balance_after || 0)}</td></tr></table></body></html>`;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([documentHtml], { type: "text/html" }));
  link.download = `${payment.receipt_no}.html`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function backendStudentRows() {
  if (!backendData.students?.length) return [];
  return backendData.students.map((student) => [
    student.admission_no,
    `${student.first_name} ${student.last_name}`,
    `${student.class_name}${student.section ? `, ${student.section}` : ""}`,
    student.admission_no || student.roll_no || "Not issued",
    student.gender || "Not set",
    student.joined_on ? new Date(student.joined_on).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "Not recorded"
  ]);
}

function backendParentRows() {
  if (!backendData.guardians?.length) return [];
  return backendData.guardians.map((guardian) => [
    `P${String(guardian.id).padStart(6, "0")}`,
    guardian.name,
    `Added on ${guardian.created_at ? new Date(guardian.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : todayLabel()}`,
    guardian.email || "not-set@excelprimaryschool.org",
    guardian.phone || "Not set",
    guardian.student ? `${guardian.student.first_name} ${guardian.student.last_name}` : "Student",
    guardian.student ? `${guardian.student.class_name}-${guardian.student.section || ""}` : ""
  ]);
}

function backendPaymentRows() {
  if (!backendData.payments?.length) return [];
  return backendData.payments.map((payment) => {
    const paidAt = dateTimeParts(payment.paid_at);
    return [
      payment.receipt_no,
      payment.student ? `${payment.student.first_name} ${payment.student.last_name}` : "Student",
      payment.fee_type,
      payment.term || "Term 1",
      payment.academic_year || activeAcademicYear(),
      payment.student ? `${payment.student.class_name} ${payment.student.section || ""}` : "N/A",
      payment.amount,
      payment.balance_after || 0,
      payment.method,
      payment.status,
      paidAt.date,
      paidAt.time
    ];
  });
}

let latestAdmissionId = null;
async function createAdmission(form) {
  const button=form.querySelector('button[type=submit]');
  if(button?.disabled)return;
  if(button)button.disabled=true;
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.created_by_role = currentRole();
  try {
    const result=await apiRequest('/students', {method:'POST',body:JSON.stringify(payload)});
    latestAdmissionId=result.student.id;
    localStorage.setItem('erpAcademicYear',result.academic_year);
    localStorage.setItem('erpTerm',result.term);
    form.reset();closeModal();
    backendLoaded=false;
    await loadBackendData(true);
    location.hash='#/admissions';app();
    requestAnimationFrame(()=>document.querySelector('.admissions-table [data-new-admission="true"]')?.scrollIntoView({behavior:'smooth',block:'center'}));

  } catch(error) {showToast('Admission not saved',error.message,'error');}
  finally {if(button)button.disabled=false;}
}

async function createPayment(form) {
  const studentInput = form.querySelector("[data-student-search]");
  const studentId = form.querySelector("[name='student_id']")?.value;
  if (studentInput?.value.trim() && !studentId && backendData.students?.length) {
    showToast("Select a student", "Choose a student from the search results before saving the fee payment.", "error");
    return;
  }
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.amount = Number(payload.amount || 0);
  payload.created_by_role = currentRole();
  try {
    await apiRequest("/payments", { method: "POST", body: JSON.stringify(payload) });
    form.reset();
    closeModal();
    showToast(currentRole() === "Director" ? "Payment recorded" : "Payment submitted", currentRole() === "Director" ? "The balance and receipt were updated." : "The Director must approve this payment before the balance changes.", "success");
    await loadBackendData(true);
  } catch (error) {
    showToast("Payment not recorded", error.message, "error");
  }
}

async function approvePayment(paymentId) {
  try {
    await apiRequest(`/payments/${paymentId}/approve`, { method: "PATCH", body: JSON.stringify({ role: currentRole() }) });
    showToast("Payment approved", "The student balance and receipt status are now updated.", "success");
    await loadBackendData(true);
  } catch (error) { showToast("Payment not approved", error.message, "error"); }
}

async function sendMessage(form) {
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.contact_name = payload.contact_name || "Ritika";
  payload.role = currentRole();
  try {
    await apiRequest("/messages", { method: "POST", body: JSON.stringify(payload) });
    form.reset();
    showToast("Message sent", "The conversation was saved to the school messaging log.", "success");
    await loadBackendData(true);
  } catch (error) {
    showToast("Message not sent", error.message, "error");
  }
}

function app() {
  applyTheme();
  const current = route();
  if (current === "login") {
    document.getElementById("app").innerHTML = loginPage();
    return;
  }
  if (backendLoaded && backendLoading && !backendError && current === 'dashboard') {
    document.getElementById('app').innerHTML = `<div class="app-shell"><div inert>${sidebar(current)}</div><main class="main" ${mobileMenuOpen ? "inert" : ""}><div inert>${topbar()}</div><section class="content"><p role="status">Dashboard ready. Loading remaining school records…</p><div inert>${dashboard()}</div></section></main></div>`;
    return;
  }
  if (!backendLoaded || backendError || backendLoading) {
    document.getElementById('app').innerHTML = `<div class="app-shell">${sidebar(current)}<main class="main" ${mobileMenuOpen ? "inert" : ""}>${topbar()}<section class="content"><div class="loading-placeholder" aria-label="Loading"><div></div><div></div><div></div></div>${backendError?`<p>${escapeHtml(backendError)}</p><button class="btn ghost" onclick="loadBackendData(true)">Retry</button>`:''}</section></main></div>`;
    if (!backendLoading && !backendError) loadBackendData();
    return;
  }
  const sidebarTop = Number(sessionStorage.getItem("erpSidebarScroll") || 0);
  const collapsed = !window.matchMedia("(max-width: 960px)").matches && localStorage.getItem("erpSidebarCollapsed") === "true";
  document.getElementById("app").innerHTML = `
    <div class="app-shell ${collapsed ? "sidebar-collapsed" : ""}">
      ${sidebar(current)}
      <main class="main" ${mobileMenuOpen ? "inert" : ""}>
        ${topbar()}
        <section class="content is-entering">${page(current)}</section>
        <footer class="footer"><span>Copyright © Excel Primary School.</span><span>Creating the difference</span></footer>
      </main>
    </div>`;
  if (!backendLoaded && !backendLoading) loadBackendData();
  const sidebarEl = document.querySelector(".sidebar");
  compactTableToolbars();
  prepareMobileRecords();
  document.querySelector(".app-shell")?.insertAdjacentHTML("beforeend", mobileNavigation(current));
  if (sidebarEl) {
    sidebarEl.scrollTop = sidebarTop;
    sidebarEl.addEventListener("scroll", () => {
      sessionStorage.setItem("erpSidebarScroll", String(sidebarEl.scrollTop));
    }, { passive: true });
  }
  applyRosterFilters("promotion"); applyRosterFilters("fees");
  requestAnimationFrame(() => {
    document.querySelector(".content")?.classList.remove("is-entering");
    removeStatusDots();
    showLatestNotifications();
  });
}


// Keep the original cells and controls intact for filtering, editing and exports.
function prepareMobileRecords(root = document) {
  root.querySelectorAll('table').forEach(table => {
    if (!table.tHead || !table.tBodies.length) return;
    const labels = [...table.tHead.rows[table.tHead.rows.length - 1].cells].map(cell => cell.textContent.trim());
    table.classList.add('responsive-records');
    [...table.tBodies].forEach(body => [...body.rows].forEach(row => {
      let column = 0;
      [...row.cells].forEach(cell => {
        cell.dataset.label = labels[column] || 'Details';
        cell.classList.toggle('record-wide', cell.colSpan > 1);
        column += cell.colSpan;
      });
    }));
  });
}
function mobileNavigation(current) {
  const allowed = flatNav(navForRole());
  const preferred = ['dashboard', 'students', 'fees'];
  const links = preferred.map(id => allowed.find(link => link[0] === id)).filter(Boolean);
  return `<nav class="mobile-bottom-nav" aria-label="Quick navigation">${links.map(([id,label,name]) => `<a href="#/${id}" ${current===id?'aria-current="page"':''}>${icon(name)}<span>${id==='dashboard'?'Home':label}</span></a>`).join('')}</nav>`;
}
let mobileDashboardSection = 0;
function selectMobileDashboard(button, index) {
  mobileDashboardSection = index;
  const dashboard = button.closest('.director-dashboard');
  dashboard.dataset.mobileSection = String(index);
  dashboard.querySelectorAll('[role="tab"]').forEach(tab => tab.setAttribute('aria-selected', String(tab === button)));
}

function compactTableToolbars() {
  document.querySelectorAll(".section-panel").forEach((panel) => {
    const toolbars = [...panel.children].filter((child) => child.classList?.contains("section-toolbar"));
    const searchToolbar = toolbars.find((toolbar, index) => index > 0 && !toolbar.classList.contains("roster-toolbar") && toolbar.querySelector(".search"));
    if (!searchToolbar) return;
    const search = searchToolbar.querySelector(".search");
    const mainToolbar = toolbars[0];
    let filters = mainToolbar.querySelector(".filters");
    if (!filters) {
      filters = document.createElement("div");
      filters.className = "filters";
      mainToolbar.appendChild(filters);
    }
    const dateControl = filters.querySelector(".date-filter, button:first-child");
    if (dateControl) dateControl.after(search);
    else filters.prepend(search);
    searchToolbar.remove();
  });
}

function sidebar(current) {
  const role = currentRole();
  const groups = navForRole(role);
  const pendingAdmissions = Number(backendData.pending_record_approvals||0);
  const pendingNewAdmissions = Number(backendData.pending_new_admissions||0);
  const pendingPayments = Number(backendData.stats?.pending_payments || 0);
  const canApprovePayments = ["Director", "Super Admin"].includes(role);
  return `<button class="mobile-menu-backdrop" aria-label="Close navigation" tabindex="-1" onclick="setMobileMenu(false)"></button><aside id="school-navigation" class="sidebar" aria-label="School navigation" ${window.matchMedia("(max-width: 960px)").matches && !mobileMenuOpen ? "inert" : ""}>
    <div class="brand">
      ${schoolLogo(true)}
      <button class="hamburger" title="Toggle navigation" aria-label="Toggle navigation" onclick="toggleSidebar()">${icon("menu")}</button>
    </div>
    ${groups.map(([title, links]) => `
      <div class="nav-group">
        <p class="nav-title">${title}</p>
        ${links.map(([id, label, iconName]) => `
          <a class="nav-link ${current === id ? "active" : ""}" href="#/${id}" onclick="if(mobileMenuOpen)setMobileMenu(false); sessionStorage.setItem('erpSidebarScroll', String(this.closest('.sidebar')?.scrollTop || 0))">
            <span class="nav-icon">${icon(iconName)}</span><span>${label}</span>${id === "admissions" && pendingNewAdmissions ? `<span class="nav-count" title="${pendingNewAdmissions} new admissions awaiting approval">${pendingNewAdmissions}</span>` : ""}${id === "approvals" && pendingAdmissions ? `<span class="nav-count" title="${pendingAdmissions} student / guardian requests awaiting approval">${pendingAdmissions}</span>` : ""}${id === "fees" && canApprovePayments && pendingPayments ? `<span class="nav-count" title="${pendingPayments} payments awaiting approval">${pendingPayments}</span>` : ""}
          </a>`).join("")}
      </div>`).join("")}
  </aside>`;
}

function topbar() {
  const role = currentRole();
  const themeIcon = currentTheme() === "dark" ? "sun" : "moon";
  const themeLabel = currentTheme() === "dark" ? "Light mode" : "Dark mode";
  return `<header class="topbar"><div class="mobile-brand"><span>EXCEL <small>PRIMARY SCHOOL</small></span><span class="mobile-brand-caption">${schoolLogo(true)}</span></div>
    <div class="top-actions">
      <button class="icon-btn mobile-menu-button" aria-label="Open navigation" aria-controls="school-navigation" aria-expanded="${mobileMenuOpen}" onclick="setMobileMenu(true)">${icon("menu")}</button>
      <button class="pill" onclick="openDetailsModal('Signed in role','${role}')">${icon("shield-check", 15)} ${role}</button>
      <label class="period-control"><select aria-label="Academic year" onchange="selectAcademicPeriod(this.value,this.value===classRegisterData.current_year?classRegisterData.current_term:'Term 1')">${availableYears().map(year=>`<option ${year===activeAcademicYear()?'selected':''}>${year}</option>`).join('')}</select></label>
      <label class="period-control"><select aria-label="Academic term" onchange="selectAcademicPeriod(activeAcademicYear(),this.value)">${['Term 1','Term 2','Term 3'].map(term=>`<option ${term===activeTerm()?'selected':''}>${term}</option>`).join('')}</select></label>
      <button class="icon-btn" title="${themeLabel}" onclick="toggleTheme()">${icon(themeIcon)}</button>
      ${notificationDropdown()}
      <a class="icon-btn logout-btn" href="#/login" onclick="event.preventDefault(); erpLogout()" title="Log out" aria-label="Log out">${icon("log-out")}</a>
      <span class="avatar small">AD</span>
    </div>
  </header>`;
}

function loginPage() {
  const activeRole = currentRole();
  const showDemoAccounts = document.body.dataset.demoAccounts !== "false";
  const activeAccount = showDemoAccounts ? (demoAccounts.find(([role]) => role === activeRole) || demoAccounts[0]) : ["", "", ""];
  return `<main class="login-page">
    <section class="login-brand-panel">
      <div class="login-brand">
        <div class="login-logo-tile">${schoolLogo(false)}</div>
      </div>
      <div class="login-copy">
        <p class="eyebrow">Excel Primary School · Mangochi</p>
        <h1>Creating the difference.</h1>
        <p>Quality, affordable education from Nursery and Reception through Standard 8.</p>
      </div>
      <div class="login-stats">
        <div><strong>${Number(document.body.dataset.studentCount || 0).toLocaleString()}</strong><span>Enrolled Students</span></div>
        <div><strong>10</strong><span>Teachers</span></div>
        <div><strong>98%</strong><span>Fee Tracking</span></div>
      </div>
    </section>
    <section class="login-form-panel">
      <form class="login-card" onsubmit="event.preventDefault(); demoLogin(this);">
        <div class="login-card-head">
          <div class="login-card-logo">${schoolLogo(false, "shield")}</div>
          <h2>Welcome Back</h2>
          <p class="muted">Sign in to continue to your dashboard</p>
        </div>
        <label class="form-field">
          <span>Email or Username</span>
          <input name="email" type="text" value="${activeAccount[1]}" autocomplete="username" />
        </label>
        <label class="form-field">
          <span>Password</span>
          <input name="password" type="password" value="${activeAccount[2]}" autocomplete="current-password" />
        </label>
        <div class="login-options">
          <label><input type="checkbox" checked /> Remember me</label>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button class="btn primary login-submit" type="submit">Sign In</button>
        <p class="login-error"></p>
        ${showDemoAccounts ? `<div class="role-grid" onclick="if(event.target.dataset.role){const account = demoAccounts.find(([role]) => role === event.target.dataset.role); localStorage.setItem('erpRole', event.target.dataset.role); document.querySelectorAll('.role-grid span').forEach(el => el.classList.remove('selected')); event.target.classList.add('selected'); this.closest('form').querySelector('[name=email]').value = account[1]; this.closest('form').querySelector('[name=password]').value = account[2]; this.closest('form').querySelector('.login-error').textContent = '';}">
          ${demoAccounts.map(([role]) => `<span class="${role === activeRole ? "selected" : ""}" data-role="${role}">${role}</span>`).join("")}
        </div>` : ""}
      </form>
    </section>
  </main>`;
}

function pageHead(title, crumbs = "Dashboard / Admin Dashboard", actions = "") {
  return `<div class="page-head">
    <div class="page-title"><h1>${title}</h1><div class="crumbs">${crumbs}</div></div>
    <div class="head-actions">${actions}</div>
  </div>`;
}

function filters(extra = "") {
  return `<div class="filters">
    ${extra}
    <button class="pill" onclick="openFilterModal('Batch and Date Filters')">${icon("calendar-days", 14)} Batch : 24 May 2025</button>
    <select class="select" onchange="filterStudentClass(this)"><option value="">All Classes</option>${classOptions()}</select>
    <button class="pill" onclick="openSortModal()">${icon("sort", 14)} Sort By A-Z</button>
  </div>`;
}

function filterStudentClass(select) { filterDirectory(select); }
function directorySearch() {
  return `<div class="search directory-search"><input type="search" placeholder="Search name or admission number" aria-label="Search names" oninput="filterDirectory(this)"><span class="shortcut">${icon("search",15)}</span></div>`;
}
function filterDirectory(control) {
  const panel=control.closest('.section-panel');
  const query=panel?.querySelector('.directory-search input')?.value.trim().toLowerCase()||'';
  const className=panel?.querySelector('select[onchange="filterStudentClass(this)"]')?.value||'';
  panel?.querySelectorAll('.directory .profile-card, .directory-list tbody tr').forEach(card=>{card.hidden=Boolean((query&&!card.textContent.toLowerCase().includes(query))||(className&&card.dataset.class!==className));});
}

function filterTableRows(input, tableSelector) {
  const query = input.value.trim().toLowerCase();
  (input.closest(".section-panel")||input.closest(".modal-card")||document).querySelectorAll(`${tableSelector} tbody tr`).forEach((row) => {
    row.hidden = Boolean(query && !row.innerText.toLowerCase().includes(query));
  });
}

function applyAdmissionFilters(control) {
  const panel = control.closest(".section-panel");
  const query = panel.querySelector("[data-admission-search]")?.value.trim().toLowerCase() || "";
  const className = panel.querySelector("[data-admission-class]")?.value || "";
  const status = panel.querySelector("[data-admission-status]")?.value || "";
  panel.querySelectorAll(".admissions-table tbody tr").forEach((row) => {
    row.hidden = Boolean((query && !row.innerText.toLowerCase().includes(query)) || (className && row.dataset.class !== className) || (status && row.dataset.status !== status));
  });
}

function applyBalanceFilters(control) {
  const panel = control.closest(".section-panel");
  const query = panel.querySelector("[data-balance-search]")?.value.trim().toLowerCase() || "";
  const status = panel.querySelector("[data-balance-status]")?.value || "";
  const range = panel.querySelector("[data-balance-range]")?.value || "";
  const className = panel.querySelector("[data-balance-class]")?.value || "";
  panel.querySelectorAll(".balance-table tbody tr").forEach((row) => {
    const balance = Number(row.dataset.balance || 0);
    const matchesRange = !range
      || (range === "cleared" && balance === 0)
      || (range === "outstanding" && balance > 0)
      || (range === "under-50000" && balance > 0 && balance < 50000)
      || (range === "50000-plus" && balance >= 50000);
    row.hidden = Boolean((query && !row.innerText.toLowerCase().includes(query)) || (status && row.dataset.status !== status) || (className && !row.innerText.includes(className)) || !matchesRange);
  });
}

function recordFilters() {
  return `<div class="filters">
    <select class="select" onchange="updateFilterSections(this); notifyAction('Class filter applied', this.value || 'All classes')"><option value="">Class</option>${classOptions()}</select>
    <select class="select" data-section-filter onchange="notifyAction('Section filter applied', this.value || 'All sections')"><option value="">Section</option></select>
    <select class="select" onchange="notifyAction('Term filter applied', this.value || 'All terms')"><option value="">Term</option><option>Term 1</option><option>Term 2</option><option>Term 3</option></select>
    <button class="pill" onclick="openSortModal()">${icon("sort", 14)} Alphabetical A–Z</button>
  </div>`;
}

function updateFilterSections(classSelect) {
  const sectionSelect = classSelect.closest(".filters").querySelector("[data-section-filter]");
  const options = ["A", "B"];
  sectionSelect.innerHTML = `<option value="">Section</option>${options.map((section) => `<option>${section}</option>`).join("")}`;
}

function dashboard() {
  const activeRole = currentRole();
  if (activeRole === "Super Admin") return directorDashboard();
  return roleDashboard(activeRole);
}

function superAdminDashboard() {
  const metrics = [
    ["users", "6", "Active Users", "Locked : 00", "Pending : 01", "blue"],
    ["shield-check", "6", "Role Profiles", "Custom : 02", "Default : 04", "green"],
    ["file-chart", "38", "Audit Events", "Review : 04", "Critical : 01", "amber"],
    ["database", "151 MB", "SQLite Database", "Backups : 03", "Health : OK", "red"]
  ];
  return `${pageHead("System Dashboard", "Dashboard / System Administration", `<a class="btn ghost" href="#/audit-logs">${icon("file-chart")} View Audit Logs</a><a class="btn primary" href="#/admin-maintenance">${icon("database")} Maintenance</a>`)}
    <section class="school-hero"><div><p class="eyebrow">Super Admin</p><h2>Technical administration only</h2><p>Manage user access, permissions, system settings, audit trails, backups, and database maintenance.</p></div><span>${icon("shield-check", 16)} Restricted</span></section>
    <div class="grid metrics">${metrics.map(metricCard).join("")}</div>
    <div class="grid two">
      <section class="card">${cardHead("Access Control", `<span class="muted">Least privilege</span>`)}<div class="request-list">
        ${[["Director account", "Leadership access enabled", "green"], ["School Manager", "Payments and receipts only", "blue"], ["Teacher Demo", "Assigned student view", "amber"], ["Dormant account review", "1 user needs confirmation", "red"]].map(([title, meta, color]) => `<article class="request-item"><div class="person-line"><span class="nav-icon">${icon("shield-check")}</span><div><strong>${title}</strong><span class="muted">${meta}</span></div><span class="badge ${color}">Open</span></div></article>`).join("")}
      </div></section>
      <section class="card">${cardHead("Maintenance Status", `<span class="muted">${icon("calendar-days", 14)} Today</span>`)}<div class="request-list">
        ${[["Configuration cache", "Ready to clear after deployment", "blue"], ["Database backup", "Last backup: today 14:52", "green"], ["Storage link", "Public files reachable", "green"], ["Audit review", "Payment deletion request flagged", "amber"]].map(([title, meta, color]) => `<article class="request-item"><div class="person-line"><span class="nav-icon">${icon("database")}</span><div><strong>${title}</strong><span class="muted">${meta}</span></div><span class="badge ${color}">Check</span></div></article>`).join("")}
      </div></section>
    </div>
    <section class="section-panel" style="margin-top:24px"><div class="section-toolbar"><h2>System Administration Shortcuts</h2><div class="filters"><a class="btn ghost" href="#/users">${icon("users")} Users</a><a class="btn ghost" href="#/roles">${icon("shield-check")} Roles</a><a class="btn ghost" href="#/system-settings">${icon("settings")} Settings</a></div></div><div class="table-wrap">${systemAdminTable()}</div></section>`;
}

function systemAdminTable() {
  const rows = [["Users", "Account lifecycle", "Super Admin", "Create, suspend, reset", "Active"], ["Roles & Permissions", "Access policy", "Super Admin", "Grant least-privilege permissions", "Active"], ["System Settings", "School configuration", "Super Admin", "Academic year, security, integrations", "Review"], ["Database Maintenance", "Backups and cache", "Super Admin", "Backup, optimize, clear cache", "Ready"], ["Audit Logs", "Compliance trace", "Director read-only", "Review sensitive actions", "Ready"]];
  return `<table><thead><tr><th>Area</th><th>Purpose</th><th>Owner</th><th>Actions</th><th>Status</th></tr></thead><tbody>${rows.map(([a,b,c,d,e]) => `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${d}</td><td><span class="badge ${statusClass(e)}">• ${e}</span></td></tr>`).join("")}</tbody></table>`;
}

function roleDashboard(role) {
  if (role === "Director") return directorDashboard();
  if (role === "Admissions Officer") return admissionsDashboard();
  if (role === "School Manager" || role === "Finance") return financeDashboard();
  if (role === "Exams Officer") return examsDashboard();
  if (role === "Teacher") return teacherDashboard();
  return dashboard();
}

function metricCard([iconName, number, label, left, right, badge]) {
  return `<section class="card metric">
    <div class="metric-main"><span class="metric-icon">${iconPaths[iconName] ? icon(iconName, 30) : iconName}</span><div><h3>${number}</h3><p>${label}</p></div><span class="badge ${badge}" style="margin-left:auto">${activeTerm()}</span></div>
    <div class="metric-foot"><span>${left}</span><i class="vline"></i><span>${right}</span></div>
  </section>`;
}

function directorDashboard() {
  const stats=backendData.stats||{};
  const metrics=[
    ['graduation-cap',String(stats.students||0),'Active Students',`Pending : ${stats.pending_admissions||0}`,`${activeAcademicYear()} · ${activeTerm()}`,'blue'],
    ['wallet',money(stats.balances_due||0),'Fees Expected',`Collected : ${money(stats.payments_total||0)}`,`Balance : ${money(stats.balances_outstanding||0)}`,'green'],
    ['user-plus',String((backendData.students||[]).filter(s=>s.joined_on?.slice(0,10)===backendData.server_date).length),"Today's Admissions",'Registered today',`Follow-ups : ${backendData.admission_follow_ups?.length||0}`,'amber'],
    ['banknote',money(stats.payments_today||0),"Today's Fees",'Payments received',`Pending approvals : ${stats.pending_payments||0}`,'red']
  ];
  return `<div class="director-dashboard" data-mobile-section="${mobileDashboardSection}">${pageHead('Director Dashboard','Dashboard / Director',`<button class="btn ghost" onclick="openPaymentModal()">${icon('receipt')} Record Payment</button><button class="btn primary" onclick="openAdmissionModal()">${icon('user-plus')} New Admission</button>`)}${periodNotice()}
    <div class="grid metrics">${metrics.map(metricCard).join('')}</div>
    <div class="mobile-dashboard-tabs" role="tablist" aria-label="Dashboard sections">${["Overview","Collections","Calendar"].map((label,i)=>`<button role="tab" aria-selected="${i===mobileDashboardSection}" onclick="selectMobileDashboard(this,${i})">${label}</button>`).join("")}</div><div class="grid two"><section class="card director-chart-card">${cardHead('Collections & Arrears',`<span class="muted">${icon('calendar-days',14)} ${activeTerm()}</span>`)}${periodCollectionBars()}</section>
    <section class="card director-calendar">${cardHead('School Calendar',`<span class="muted">${activeAcademicYear()}</span>`)}${calendar()}</section></div>
    <section class="section-panel director-fees-table"><div class="section-toolbar"><h2>Fees Collection</h2>${feesFilters()}</div><div class="table-wrap">${feesTable()}</div></section></div>`;
}

function directorTable() {
  const rows = [["All Students", "3654", "Active records", "Ready"], ["All Payments", "1280", "This term", "Ready"], ["Arrears List", "214", "Requires follow-up", "Review"], ["Exam Eligible Students", "812", "Term 2", "Ready"], ["Audit Logs", "38", "Payment edits/deletions", "Review"]];
  return `<table><thead><tr><th>Report</th><th>Total</th><th>Scope</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map(([a,b,c,d]) => `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td><span class="badge ${statusClass(d)}">• ${d}</span></td><td><span class="row-tools">${icon("eye")} ${icon("download")}</span></td></tr>`).join("")}</tbody></table>`;
}

function financeDashboard() {
  return `${pageHead('Fees Management','Dashboard / School Manager / Fees Group',`<button class="icon-btn" title="Refresh" onclick="loadBackendData(true)">${icon('refresh')}</button><button class="icon-btn" title="Print table" onclick="printFeesTable()">${icon('printer')}</button><button class="btn ghost" onclick="downloadVisibleTable('school-fees.csv')">${icon('download')} Export</button><button class="btn ghost" onclick="openAdmissionModal()">${icon('user-plus')} New Admission</button><button class="btn primary" onclick="openPaymentModal()">${icon('receipt')} Record Payment</button>`)}${periodNotice()}
    <section class="section-panel"><div class="section-toolbar"><h2>Fees Collection</h2>${feesFilters()}</div><div class="table-wrap">${feesTable()}</div></section>
    <details class="finance-insights"><summary>Summary, fee types & trends</summary>    <div class="stats-strip finance-strip"><div class="money-stack">${feeSummaryCards()}</div>
    <section class="card trend-card finance-trend-card">${cardHead('Fees Collection Trend',`<span class="muted">${icon('calendar-days',14)} ${activeTerm()}</span>`)}${datedCollectionBars()}</section>
    <div class="finance-progress-grid">${feeProgressCards()}${financeCollectionActivityCard(backendData.finance_dashboard?.collection_activity||[])}</div></div>
</details>`;
}

function financeCollectionActivityCard(collectionActivity = []) {
  const methods=new Map();
  for(const payment of (backendData.payments||[]).filter(p=>p.status==='Paid')) {
    const method=payment.payment_method||payment.method||'Not recorded';
    methods.set(method,(methods.get(method)||0)+Number(payment.amount));
  }
  const total=[...methods.values()].reduce((sum,value)=>sum+value,0);
  const colors=['var(--green)','var(--blue)','var(--amber)','var(--cyan)'];
  let angle=0;
  const segments=[...methods.values()].map((value,index)=>{const start=angle;angle+=total?value/total*100:0;return `${colors[index%colors.length]} ${start}% ${angle}%`;});
  const background=total?`radial-gradient(circle,var(--panel) 0 47%,transparent 49%),conic-gradient(${segments.join(',')})`:'var(--line)';
  return `<section class="card progress-card collection-activity-card">${cardHead("Collection Activity", `<a class="muted" href="#/daily-collections">Daily</a>`)}<div class="activity-summary"><span class="activity-pie" style="background:${background}" role="img" aria-label="${escapeHtml([...methods].map(([method,value])=>`${method}: ${money(value)}`).join('; ')||'No collections')}"></span><div><strong>${money(total)}</strong><span class="muted">All methods</span></div></div><a class="activity-link" href="#/daily-collections">${icon("bar-chart", 15)} View breakdown</a></section>`;
}

function financePremiumDashboard(outstanding) {
  const dashboard = backendData.finance_dashboard || {};
  const noticeRows = dashboard.notices?.length ? dashboard.notices : backendData.notifications;
  const notices = noticeRows?.length ? noticeRows.slice(0, 4).map((notice) => [notice.title, notice.body, notice.type || "blue"]) : [
    ["Receipt reconciliation", "Daily collections are ready for review.", "blue"],
    ["Arrears follow-up", "214 students require parent reminders.", "red"],
    ["Primary fee audit", "Term 1 primary balances updated.", "amber"],
    ["Director approval", "Payment edit queue has 3 pending items.", "green"]
  ];
  return `<div class="finance-command-grid">
    <section class="card finance-board">
      ${cardHead("Finance Notice Board", `<a class="muted" href="#/notifications">View All</a>`)}
      <div class="finance-notices">${notices.map(([title, body, tone]) => `<article><span class="metric-icon finance-card-icon" style="background:var(--${tone}-soft);color:var(--${tone})">${icon(financeToneIcon(tone), 22)}</span><div><strong>${title}</strong><small>${body}</small></div><span class="due-pill">${todayLabel({ day: "2-digit", month: "short" })}</span></article>`).join("")}</div>
    </section>
    <section class="card finance-activity">
      ${cardHead("Collection Activity", `<a class="muted" href="#/daily-collections">Daily Collections</a>`)}
      ${financeCollectionPie(dashboard.collection_activity)}
    </section>
  </div>`;
}

function financeToneIcon(tone) {
  return { green: "banknote", red: "triangle-alert", amber: "wallet", blue: "trending-up", cyan: "bar-chart" }[tone] || "layout-dashboard";
}

function financeCollectionPie(collectionActivity = []) {
  const segments = collectionActivity?.length ? collectionActivity.map((item) => [item.label, money(item.value), item.percent, item.tone || "blue"]) : [
    ["Mobile Money", "MWK 2.9M", 48, "green"],
    ["Bank Transfer", "MWK 1.7M", 28, "blue"],
    ["Cash Desk", "MWK 920K", 15, "amber"],
    ["Failed / Reversed", "MWK 540K", 9, "red"]
  ];
  let cursor = 0;
  const gradient = segments.map(([, , pct, tone]) => {
    const start = cursor;
    cursor += Number(pct) || 0;
    return `var(--${tone}) ${start}% ${cursor}%`;
  }).join(", ");
  return `<div class="finance-pie-panel">
    <div class="finance-pie" style="background:radial-gradient(circle at center, var(--panel) 0 42%, transparent 43%), conic-gradient(${gradient || "var(--blue) 0 100%"});" aria-label="Collection activity breakdown"></div>
    <div class="finance-pie-legend">${segments.map(([label, value, pct, tone]) => `<article><span class="legend-dot ${tone}"></span><div><strong>${label}</strong><small>${value}</small></div><b>${pct}%</b></article>`).join("")}</div>
  </div>`;
}

function admissionsDashboard() {
  const metrics = [
    ["user-plus", "284", "New Admissions", "This Year", "Pending : 18", "blue"],
    ["graduation-cap", "3,654", "Student Records", "Complete : 3,512", "Drafts : 42", "green"],
    ["users", "3,420", "Parent Contacts", "Verified : 3,101", "Missing : 67", "amber"],
    ["file-chart", "38", "Pending Documents", "Birth Cert / Transfer", "Urgent : 9", "red"]
  ];
  const followUps = (backendData.admission_follow_ups?.length ? backendData.admission_follow_ups : (backendData.students || []).filter((student) => !student.guardian || !student.guardian.name || student.guardian.name === "Guardian details pending" || !student.guardian.email || !student.guardian.phone)).map((student) => {
    const missing = [!student.guardian?.name || student.guardian?.name === "Guardian details pending" ? "name" : "", !student.guardian?.email ? "email" : "", !student.guardian?.phone ? "phone" : ""].filter(Boolean).join(", ");
    return [`Guardian ${missing ? `${missing} missing` : "details incomplete"}`, `${student.first_name} ${student.last_name} · ${student.class_name}`, "amber", student.id];
  });
  return `${pageHead("Admissions Dashboard", "Dashboard / Admissions Officer", `<button class="btn primary" onclick="openAdmissionModal()">${icon("user-plus")} New Admission</button>`)}
    <div class="grid metrics">${metrics.map(metricCard).join("")}</div>
    <div class="grid two admissions-dashboard-grid">
      <section class="card admissions-chart-card">${cardHead("Admitted Students by Month", `<span class="muted">${icon("calendar-days", 14)} This Year</span>`)}${admissionsByMonthChart()}</section>
      <section class="card admissions-queue-card">${cardHead("Follow-up Queue", `<span class="muted">${followUps.length} pending</span>`)}<div class="request-list">
        ${(followUps.length ? followUps : [["Guardian records complete", "No admissions require guardian follow-up", "green", null]]).slice(0, 6).map(([title, meta, color, studentId]) => `<article class="request-item"><div class="person-line"><span class="nav-icon">${icon(color === "green" ? "shield-check" : "users")}</span><div><strong>${title}</strong><span class="muted">${meta}</span></div>${studentId ? `<button class="badge ${color}" onclick="openGuardianFollowUp(${studentId})">Complete</button>` : `<span class="badge ${color}">Clear</span>`}</div></article>`).join("")}
      </div></section>
    </div>
    <section class="section-panel" style="margin-top:24px"><div class="section-toolbar"><h2>Recent Admissions</h2>${filters("")}</div><div class="table-wrap">${admissionsTable()}</div></section>`;
}

function examsDashboard() {
  const metrics = [
    ["file-chart", "812", "Exam Candidates", "Term 2", "Blocked : 18", "blue"],
    ["clipboard-check", "794", "Eligible Students", "Fees cleared", "Exceptions : 11", "green"],
    ["download", "24", "Exports Generated", "Excel / PDF", "Today : 3", "amber"],
    ["triangle-alert", "18", "Eligibility Holds", "Fees / Records", "Critical : 6", "red"]
  ];
  return `${pageHead("Exams Dashboard", "Dashboard / Exams Officer", `<a class="btn primary" href="#/exam-export">${icon("download")} Export Lists</a>`)}
    <section class="role-overview exams-overview"><div><p class="eyebrow">Examinations Office</p><h2>Eligibility, candidate lists, and exports</h2><p>Track Standard 1 to Standard 4 exam readiness, fee clearance, holds, and generated lists by term.</p></div><strong>${icon("clipboard-check", 16)} Rules active</strong></section>
    <div class="grid metrics">${metrics.map(metricCard).join("")}</div>
    <div class="grid two">
      <section class="card">${cardHead("Candidate Trend", `<span class="muted">${academicYearLabel()}</span>`)}${bars()}</section>
      <section class="card">${cardHead("Exam Readiness", `<span class="muted">Term 2</span>`)}<div class="request-list">
        ${[["Standard 4 candidate list", "812 ready", "green"], ["Fees hold list", "18 students blocked", "red"], ["Class lists export", "Excel + PDF", "blue"], ["Exam type setup", "Mid-term / Mock", "amber"]].map(([title, meta, color]) => `<article class="request-item"><div class="person-line"><span class="nav-icon">${icon("file-chart")}</span><div><strong>${title}</strong><span class="muted">${meta}</span></div><span class="badge ${color}">View</span></div></article>`).join("")}
      </div></section>
    </div>
    <section class="section-panel" style="margin-top:24px"><div class="section-toolbar"><h2>Eligible Students Snapshot</h2>${filters("")}</div><div class="table-wrap">${examCandidatesTable()}</div></section>`;
}

function teacherDashboard() {
  const classes = [["09:00 - 09:45", "Class V, B", "Maths", "red"], ["09:45 - 10:30", "Class IV, C", "Physics", "red"], ["11:30 - 12:15", "Class V, A", "English", "blue"], ["01:30 - 02:15", "Class V, B", "Chemistry", "blue"], ["02:15 - 03:00", "Class III, B", "Science", "blue"], ["03:15 - 04:00", "Class IV, C", "Computer", "dark"]];
  return `${pageHead("Teacher Dashboard", "Dashboard / Teacher & Staff Management / Meera Kulkarni", tableActions())}
    <section class="teacher-welcome"><div><h2>Good Morning Ms. Meera</h2><p>Notice: There is a staff meeting at 9AM today. Do not forget to attend.</p></div><span class="teacher-illustration">${icon("presentation", 68)}</span></section>
    <div class="teacher-layout">
      <main class="teacher-main">
        <section class="teacher-profile card"><span class="avatar teacher-photo">MK</span><div><span class="badge blue">#T594651</span> <span class="badge blue">Full-Time</span><h2>Meera Kulkarni</h2><p>Classes : IV-A, V-B • Physics</p></div><button class="btn primary">${icon("edit")} Edit Profile</button></section>
        <section class="section-panel"><div class="section-toolbar"><h2>Personal Information</h2><a class="muted">${icon("edit", 14)} Edit</a></div><div class="info-grid">${teacherInfoCards().join("")}</div></section>
        <section class="section-panel"><div class="section-toolbar"><h2>Today's Class</h2><span class="muted">${icon("calendar-days", 14)} 16 Dec 2025</span></div><div class="class-strip">${classes.map(([time, klass, subject, color]) => `<article class="class-chip"><span class="badge ${color === "dark" ? "blue" : color}">${icon("calendar-days", 13)} ${time}</span><strong>${klass}</strong><small>${subject}</small></article>`).join("")}</div></section>
      </main>
      <aside class="teacher-side">
        <section class="card pad syllabus-card"><div class="ring green">95%</div><div><h2>Syllabus</h2><p><span class="dot"></span> Completed : 95%</p><p><span class="dot" style="background:var(--red)"></span> Pending : 5%</p></div></section>
        <section class="card">${cardHead("Attendance", `<span class="muted">${icon("calendar-days", 14)} This Month</span>`)}<div class="attendance-box"><strong>Last 7 Days</strong><div class="week-row">${["M","T","W","T","F","S","S"].map((d,i) => `<span class="${i === 4 ? "absent" : i > 4 ? "off" : ""}">${d}</span>`).join("")}</div><p>${icon("calendar-days", 14)} No of total working days <strong>28 Days</strong></p><div class="attendance-stats"><span>Present <strong>25</strong></span><span>Absent <strong>2</strong></span><span>Halfday <strong>0</strong></span><span>Late <strong>1</strong></span></div></div></section>
        <section class="card">${cardHead("Performance", `<span class="muted">This Month</span>`)}<div class="performance-list">${[["Grading Timeliness","Excellent",95,"green"],["Student Avg. Grade","Good",78,"green"],["Student Attendance","Need Improvement",68,"amber"],["Parent Feedback","Below Standard",62,"red"]].map(([a,b,p,tone]) => `<div><p><span>${a}<br><small>${b}</small></span><span>${p}%</span></p><div class="track ${tone}"><span class="fill" style="width:${p}%"></span></div></div>`).join("")}</div></section>
      </aside>
    </div>`;
}

function teacherInfoCards() {
  return [["users", "Gender", "Female", "blue"], ["calendar-days", "Date Of Birth", "April 14, 1990", "amber"], ["messages", "Email Address", "meera@example.com", "red"], ["phone", "Phone Number", "+91 9954866445", "green"], ["graduation-cap", "Qualification", "MBA", "blue"], ["id-card", "Experience", "+10 Years", "cyan"], ["shield-check", "Certificate", "Teacher registration verified", "cyan"], ["location", "Address", "Excel Primary School campus area", "purple"]].map(([iconName, label, value, color]) => `<article class="info-card"><span class="soft-icon ${color}">${icon(iconName)}</span><div><strong>${label}</strong><span>${value}</span></div></article>`);
}

function cardHead(title, right) {
  return `<div class="card-head"><h2>${title}</h2><div>${right}</div></div>`;
}

function chartLegend(items) {
  return `<div class="chart-legend">${items.map(([label, tone]) => `<span><i class="legend-marker ${tone}"></i>${label}</span>`).join("")}</div>`;
}

function bars(options = {}) {
  const months = ["Jan: 2025","Feb: 2025","Mar: 2025","Apr: 2025","May: 2025","Jun: 2025","Jul: 2025","Aug: 2025","Sep: 2025","Oct: 2025","Nov: 2025","Dec: 2025"];
  const total = options.total || [72, 84, 80, 86, 78, 68, 60, 74, 82, 82, 82, 82];
  const collected = options.collected || [62, 75, 71, 78, 69, 58, 47, 66, 77, 77, 77, 77];
  const legendItems = options.legend || [["Total Fee", "soft"], ["Collected Fee", "green"]];
  const chartClass = options.compact ? "chart compact" : "chart";
  return `<div class="${chartClass}">
    ${chartLegend(legendItems)}
    <div class="bars paired">${months.map((m, index) => `<span class="bar-group" title="${m}"><span class="bar total" style="height:${total[index]}%"></span><span class="bar collected" style="height:${collected[index]}%"></span></span>`).join("")}</div>
    <div class="months">${months.map((m) => `<span>${m}</span>`).join("")}</div>
  </div>`;
}

function admissionsByMonthChart() {
  const months = Array.from({ length: 12 }, (_, month) => new Date(new Date().getFullYear(), month, 1));
  const counts = months.map((month) => (backendData.students || []).filter((student) => {
    const joined = new Date(`${student.joined_on || ""}T00:00:00`);
    return !Number.isNaN(joined.getTime()) && joined.getFullYear() === month.getFullYear() && joined.getMonth() === month.getMonth();
  }).length);
  const displayCounts = counts.some(Boolean) ? counts : [18, 22, 27, 31, 24, 20, 16, 28, 35, 30, 26, 21];
  const max = Math.max(...displayCounts, 1);
  return `<div class="chart"><div class="chart-legend"><span><i class="legend-marker green"></i>Admitted Students</span></div><div class="bars">${months.map((month, index) => `<span class="bar-group" title="${displayCounts[index]} admitted"><span class="bar admitted" style="height:${Math.max(8, Math.round((displayCounts[index] / max) * 100))}%"></span></span>`).join("")}</div><div class="months">${months.map((month) => `<span>${new Intl.DateTimeFormat("en-GB", { month: "short" }).format(month)}</span>`).join("")}</div></div>`;
}

function lineAreaChart(tone = "green", compact = false) {
  const fill = tone === "red" ? "rgba(239, 42, 80, .12)" : "rgba(35, 132, 71, .14)";
  const stroke = tone === "red" ? "#ef2a50" : "#238447";
  return `<div class="line-chart ${compact ? "compact" : ""}">
    <svg viewBox="0 0 600 220" preserveAspectRatio="none">
      <path d="M0 140 C70 128, 120 116, 170 136 S245 170, 300 128 S390 92, 450 116 S540 150, 600 92 L600 220 L0 220 Z" fill="${fill}"/>
      <path d="M0 140 C70 128, 120 116, 170 136 S245 170, 300 128 S390 92, 450 116 S540 150, 600 92" fill="none" stroke="${stroke}" stroke-width="3"/>
    </svg>
    <span class="chart-tooltip ${tone}">${tone === "red" ? "MWK 500,000" : "MWK 600,000"}<small>July 2025</small></span>
  </div>`;
}

function financeTrendChart() {
  const payments = backendData.payments || [];
  const days = Array.from({ length: 7 }, (_, index) => { const date = new Date(); date.setDate(date.getDate() - (6 - index)); return date; });
  const values = days.map((date) => { const day = date.toISOString().slice(0, 10); return payments.filter((payment) => payment.paid_at?.slice(0, 10) === day).reduce((sum, payment) => sum + Number(payment.amount || 0), 0); });
  const max = Math.max(...values, 1);
  return `<div class="recent-trend"><div class="trend-bars">${values.map((value) => `<i style="height:${Math.max(8, Math.round((value / max) * 100))}%" title="${money(value)}"></i>`).join("")}</div><div class="trend-dates">${days.map((date) => `<span>${new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short" }).format(date)}</span>`).join("")}</div><p>${icon("bar-chart", 14)} Recent payments recorded in the system</p></div>`;
}

function datedCollectionBars() {
  const groups=new Map();
  const paid=(backendData.payments||[]).filter(p=>p.status==='Paid');
  for(const p of paid) {const date=(p.paid_at||p.reporting_date||'Date not recorded').slice(0,10);groups.set(date,(groups.get(date)||0)+Number(p.amount));}
  const rows=[...groups].sort((a,b)=>a[0].localeCompare(b[0]));
  if(!rows.length)rows.push(['No payments',0]);
  const max=Math.max(1,...rows.map(r=>r[1]));
  return `<div class="chart compact dated-collection-chart">${chartLegend([['Collected Fee','green']])}<div class="bars paired" style="grid-template-columns:repeat(${rows.length},minmax(0,1fr))">${rows.map(([date,value])=>`<span class="bar-group" title="${escapeHtml(date)}: ${money(value)}"><span class="bar collected" style="height:${value/max*100}%"></span></span>`).join('')}</div><div class="months" style="grid-template-columns:repeat(${rows.length},minmax(0,1fr))">${rows.map(([date])=>`<span>${escapeHtml(date)}</span>`).join('')}</div></div><p class="chart-date-note muted">${paid.some(p=>!p.paid_at&&p.reporting_date)?'Imported collection dates are estimated.':''}</p>`;
}

function feesLineChart() {
  const paid=(backendData.payments||[]).filter(p=>p.status==='Paid');
  const groups=new Map();
  for(const payment of paid) {
    const label=payment.paid_at?.slice(0,10)||payment.reporting_date||(payment.receipt_no?.startsWith('IMP-')?['1st payment','2nd payment','3rd payment'][Number(payment.receipt_no.split('-').at(-1))-1]:'Date not recorded');
    groups.set(label,(groups.get(label)||0)+Number(payment.amount));
  }
  const rows=[...groups].sort((a,b)=>a[0].localeCompare(b[0]));
  if(!rows.length)rows.push(['No payments',0]);
  const max=Math.max(...rows.map(r=>r[1]),1);
  const singleY=200-Math.round(rows[0][1]/max*150);
  const points=rows.map((r,i)=>`${Math.round(i/Math.max(1,rows.length-1)*600)},${200-Math.round(r[1]/max*150)}`).join(' ');
  return `<div class="line-chart compact"><svg viewBox="0 0 600 220" preserveAspectRatio="none" role="img" aria-label="Collections by date; allocated import dates are estimates"><polygon points="0,220 ${points} 600,220" fill="rgba(35,132,71,.14)"></polygon><polyline points="${rows.length===1?`0,${singleY} 600,${singleY}`:points}" fill="none" stroke="#238447" stroke-width="4" vector-effect="non-scaling-stroke"></polyline></svg><div class="trend-dates" style="grid-template-columns:repeat(${rows.length},minmax(0,1fr))">${rows.map(r=>`<span title="${money(r[1])}">${escapeHtml(r[0])}</span>`).join('')}</div><span class="chart-tooltip green">${money(paid.reduce((n,p)=>n+Number(p.amount),0))}<small>${activeAcademicYear()} · ${activeTerm()}</small></span></div><p class="chart-date-note muted">${paid.some(p=>!p.paid_at&&p.reporting_date)?'Imported collection dates are estimated.':''}</p>`;
}

function leaveRequests() {
  return `<div class="request-list">${[["Raman","Physics Teacher","Emergency","12 - 13 May"],["Nandini","Maths Teacher","Medical","17 - 18 May"]].map((item) => `
    <article class="request-item">
      <div class="person-line"><span class="avatar">${initials(item[0])}</span><div><strong>${item[0]} <span class="badge ${item[2] === "Emergency" ? "red" : "green"}">${item[2]}</span></strong><span class="muted">${item[1]}</span></div><span class="mini-actions"><button style="background:var(--green)">✓</button><button style="background:var(--red)">×</button></span></div>
      <p class="muted" style="border-top:1px solid var(--line);padding-top:14px">Leave : <strong>${item[3]}</strong><span style="float:right">Apply on : <strong>12 May</strong></span></p>
    </article>`).join("")}</div>`;
}

function calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthLabel = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(today);
  const holidays = [];
  const cells = ["S", "M", "T", "W", "T", "F", "S", ...Array(firstWeekday).fill(""), ...Array.from({ length: daysInMonth }, (_, index) => String(index + 1))];
  return `<div class="calendar"><h3>${monthLabel}</h3><div class="calendar-grid">${cells.map((day, index) => {
    const isToday = Number(day) === today.getDate();
    const isHoliday = holidays.includes(day);
    return `<span class="${index < 7 ? "calendar-day" : ""} ${isToday ? "active" : ""} ${isHoliday ? "holiday" : ""}">${day}</span>`;
  }).join("")}</div><p class="calendar-key"><i class="today"></i> Today</p></div>`;
}

function attendance() {
  return `<div class="section-body"><div class="tabs" style="padding:0"><a class="tab active">Students</a><a class="tab">Teachers</a><a class="tab">Staff</a></div><div class="grid two" style="margin-top:18px"><div class="card pad" style="box-shadow:none;text-align:center"><strong>50</strong><br><span class="muted">Absent</span></div><div class="card pad" style="box-shadow:none;text-align:center"><strong>40</strong><br><span class="muted">Present</span></div></div><div style="height:160px;margin:22px auto 0;max-width:240px;border-radius:240px 240px 0 0;background:var(--blue)"></div></div>`;
}

function quickLinks() {
  const links = [["Calendar","calendar-days","var(--green)","var(--green-soft)"],["Events","megaphone","var(--blue)","var(--blue-soft)"],["Attendance","clipboard-check","var(--amber)","var(--amber-soft)"],["Exams","file-chart","var(--cyan)","var(--cyan-soft)"],["Fees","wallet","var(--red)","var(--red-soft)"],["Reports","bar-chart","#00b9ef","#def8ff"]];
  return `<div class="quick-grid">${links.map(([label, iconName, color, bg]) => `<div class="quick" style="background:${bg}"><span style="background:${color}">${icon(iconName, 22)}</span><strong>${label}</strong></div>`).join("")}</div>`;
}

function setDirectoryView(type, mode) {
  localStorage.setItem(`erpDirectoryView:${type}`, mode === 'list' ? 'list' : 'grid');
  app();
}
function directoryList(type) {
  const students = type === 'students';
  const rows = students ? (backendData.students || []) : (backendData.guardians || []);
  return `<div class="table-wrap directory-list"><table><thead><tr>${(students ? ['Admission No.','Name','Class','Gender','Actions'] : ['Guardian','Email','Phone','Pupil','Class','Actions']).map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row=> {
    const pupil=students?row:row.student;
    return `<tr data-class="${escapeHtml(pupil?.class_name||'')}">${students ? `<td>${escapeHtml(row.admission_no)}</td><td>${escapeHtml(row.first_name+' '+row.last_name)}</td><td>${escapeHtml(row.class_name)}</td><td>${escapeHtml(row.gender||'Not recorded')}</td><td><button class="btn ghost" onclick="openStudentDetails(${row.id})">View</button></td>` : `<td>${escapeHtml(row.name)}</td><td>${escapeHtml(row.email||'Not recorded')}</td><td>${escapeHtml(row.phone||'Not recorded')}</td><td>${escapeHtml(pupil ? pupil.first_name+' '+pupil.last_name : 'Not linked')}</td><td>${escapeHtml(pupil?.class_name||'—')}</td><td><button class="btn ghost" onclick="openGuardianStudentsModal(${row.id})">View</button></td>`}</tr>`;
  }).join('') || '<tr><td colspan="6">No records for the selected period.</td></tr>'}</tbody></table></div>`;
}
function directoryPage(type) {
  const mode = ['students','parents'].includes(type) && localStorage.getItem(`erpDirectoryView:${type}`) === 'list' ? 'list' : 'grid';
  const switcher = ['students','parents'].includes(type) ? `<div class="view-switch" role="group" aria-label="Directory view"><button class="btn ${mode==='grid'?'primary':'ghost'}" aria-pressed="${mode==='grid'}" onclick="setDirectoryView('${type}','grid')">Grid</button><button class="btn ${mode==='list'?'primary':'ghost'}" aria-pressed="${mode==='list'}" onclick="setDirectoryView('${type}','list')">List</button></div>` : '';

  const title = type === "parents" ? "Guardians" : type[0].toUpperCase() + type.slice(1);
  const rows = type === "students" ? backendStudentRows() : type === "parents" ? backendParentRows() : teachers;
  const addHandler = type === "students" ? "openAdmissionModal()" : type === "parents" ? "openParentModal()" : "openTeacherModal()";
  return `${pageHead(title, `Dashboard / Peoples / ${title}`, `${tableActions()}<button class="btn primary" onclick="${addHandler}">${icon("user-plus")} Add ${title.slice(0, -1)}</button>`)}
    <section class="section-panel">
      <div class="section-toolbar"><h2>${title}</h2>${switcher}<div class="filters">${directorySearch()}<select class="select" aria-label="Filter class" onchange="filterStudentClass(this)"><option value="">All Classes</option>${classOptions()}</select></div></div>
      <div class="section-body">
        ${mode === "list" ? directoryList(type) : `<div class="directory ${type}">
          ${rows.map((row, index) => type === "students" ? studentCard(row, index) : type === "parents" ? parentCard(row, index) : teacherCard(row, index)).join("")}
        </div>
        `}
      </div>
    </section>`;
}

function studentCard(row, index) {
  const studentId = backendData.students?.[index]?.id;
  const canEdit = ["Director", "Super Admin", "Admissions Officer", "School Manager"].includes(currentRole()) && studentId;
  return `<article class="card profile-card" data-class="${backendData.students?.[index]?.class_name || ""}">
    <div class="profile-id"><span>${row[0]}</span><strong>⋮</strong></div>
    <div class="profile-main"><span class="avatar">${initials(row[1])}</span><div><strong>${row[1]}</strong><br><span>${row[2]}</span></div></div>
    <div class="profile-fields"><div><div class="field-label">Student ID</div>${row[3]}</div><div><div class="field-label">Gender</div>${row[4]}</div></div>
    <div class="card-foot"><span class="student-joined"><small>Joined</small>${row[5]}</span><span class="student-actions"><button class="tiny-btn" title="View student record" onclick="openStudentDetails(${studentId || 0})">${icon("eye")}</button>${canEdit ? `<button class="tiny-btn" title="Edit student" onclick="openStudentEditModal(${studentId})">${icon("edit")}</button>` : ""}</span></div>
  </article>`;
}

function parentCard(row, index) {
  const guardianId = backendData.guardians?.[index]?.id;
  return `<article class="card profile-card" data-class="${escapeHtml(backendData.guardians?.[index]?.student?.class_name || '')}">
    <div class="profile-id"><span>${row[0]}</span><strong>⋮</strong></div>
    <div class="profile-main"><span class="avatar">${initials(row[1])}</span><div><strong>${row[1]}</strong><br><span>${row[2]}</span></div></div>
    <div class="profile-fields"><div><div class="field-label">Email</div>${row[3]}</div><div><div class="field-label">Phone</div>${row[4]}</div></div>
    <div class="card-foot"><span class="avatar small">${initials(row[5])}</span><span>${row[5]} ${row[6]}</span><span class="student-actions" style="margin-left:auto"><button class="tiny-btn" title="View linked students" onclick="openGuardianStudentsModal(${guardianId || 0})">${icon("eye")}</button><button class="tiny-btn" title="Edit guardian" onclick="openParentEditModal('${row[0]}')">${icon("edit")}</button></span></div>
  </article>`;
}

function teacherCard(row, index) {
  return `<article class="card profile-card teachers">
    <div class="profile-id"><span>${row[0]}</span><span class="badge ${row[6] === "Present" ? "green" : "red"}">• ${row[6]}</span><strong>⋮</strong></div>
    <div class="profile-main"><span class="avatar">${initials(row[1])}</span><div><strong>${row[1]}</strong><br><span>${row[2]}</span></div></div>
    <div class="profile-fields"><div><div class="field-label">Email</div>${row[3]}</div><div><div class="field-label">Phone</div>${row[4]}</div></div>
    <div class="card-foot"><span class="badge red">${row[5]}</span><button class="btn ghost" style="margin-left:auto" onclick="openDetailsModal('Teacher Details','${row[1]} - ${row[5]}')">View Details</button></div>
  </article>`;
}

function feesPage() {
  return `${pageHead('Fees Collection','Fees Collection / Payments',tableActions())}${periodNotice()}
    <section class="section-panel"><div class="section-toolbar"><h2>Fees Collection</h2>${feesFilters()}</div><div class="table-wrap">${feesTable()}</div></section>
    <details class="finance-insights"><summary>Summary, fee types & trends</summary>    <div class="stats-strip fees-summary-strip"><div class="money-stack">${feeSummaryCards()}</div>
    <section class="card trend-card">${cardHead('Fees Collection Trend',`<span class="muted">${icon('calendar-days',14)} ${activeTerm()}</span>`)}${feesLineChart()}</section>
    <div class="finance-progress-grid fees-progress-grid">${feeProgressCards()}</div></div>
</details>
    `;
}

function feesFilters() {
  return `<div class="filters fees-filters"><label class="date-filter">${icon("calendar-days", 14)} <input type="date" value="${new Date().toISOString().slice(0, 10)}" onchange="this.dataset.active='true'; applyFeesFilters()"></label><div class="search fee-search"><input placeholder="Search student or receipt" aria-label="Search fee collections" oninput="applyFeesFilters()"><span class="shortcut">${icon("search", 15)}</span></div><select class="select" data-fee-status onchange="applyFeesFilters()"><option value="">All Status</option><option>Pending Approval</option><option>Paid</option><option>Partial</option></select><select class="select" data-fee-type onchange="applyFeesFilters()"><option value="">All Fee Types</option><option>Tuition Fee</option><option>Trip Fee</option><option>Uniform Fee</option><option>School Bus Fee</option></select><select class="select" data-fee-class onchange="applyFeesFilters()"><option value="">All Classes</option>${classOptions()}</select></div>`;
}

function filterFeesByType(type) {
  const select = document.querySelector("[data-fee-type]");
  if (select) { select.value = type; applyFeesFilters(); document.querySelector(".fees-table")?.scrollIntoView({ behavior: "smooth" }); }
}

function applyFeesFilters() {
  const panel = document.querySelector(".fees-table");
  const status = document.querySelector("[data-fee-status]")?.value || "";
  const className = document.querySelector("[data-fee-class]")?.value || "";
  const feeType = document.querySelector("[data-fee-type]")?.value || "";
  const dateInput = document.querySelector(".fees-filters .date-filter input");
  const date = dateInput?.dataset.active === "true" ? dateInput.value : "";
  const query = document.querySelector(".fee-search input")?.value.trim().toLowerCase() || "";
  panel?.querySelectorAll("tbody tr").forEach((row) => { row.hidden = Boolean((status && row.dataset.status !== status) || (feeType && row.dataset.feeType !== feeType) || (className && !row.dataset.class.includes(className)) || (date && row.dataset.date !== date) || (query && !row.innerText.toLowerCase().includes(query))); });
}

function printFeesTable() {
  const rows = [...document.querySelectorAll(".fees-table tbody tr")].filter((row) => !row.hidden).map((row) => ({ receipt: row.children[0].innerText, student: row.children[1].innerText.replaceAll("\n", " / "), fee: row.children[2].innerText.replaceAll("\n", " / "), amount: row.children[3].innerText, balance: row.children[4].innerText.replaceAll("\n", " / "), mode: row.children[5].innerText, date: row.children[6].innerText.replaceAll("\n", " "), status: row.children[7].innerText.replace("•", "").trim() }));
  if (!rows.length) return;
  const table = `<table><thead><tr><th>Receipt</th><th>Student / Class</th><th>Fee / Term</th><th>Amount</th><th>Balance</th><th>Payment Mode</th><th>Paid On</th><th>Status</th></tr></thead><tbody>${rows.map((row) => `<tr><td>${row.receipt}</td><td>${row.student}</td><td>${row.fee}</td><td>${row.amount}</td><td>${row.balance}</td><td>${row.mode}</td><td>${row.date}</td><td>${row.status}</td></tr>`).join("")}</tbody></table>`;
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`<title>Excel Primary Fees Collection</title><style>@page{size:landscape;margin:13mm}body{font:11px Arial;color:#17213d}h1{margin:0 0 4px}p{margin:0 0 18px;color:#66708a}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccd3df;padding:8px;text-align:left}th{background:#eef1f7}</style><h1>Excel Primary School — Fees Collection</h1><p>Printed ${todayLabel()} · Displayed records only</p>${table}`);
  printWindow.document.close();
  printWindow.print();
}

function downloadVisibleTable(filename = "excel-primary-report.xls") {
  const table = document.querySelector(".table-wrap table");
  if (!table) return;
  const cloned = table.cloneNode(true);
  cloned.querySelectorAll("tr").forEach((row) => { if (row.hidden) row.remove(); });
  cloned.querySelectorAll("th:last-child,td:last-child").forEach((cell) => cell.remove());
  const workbook = `<html><head><meta charset="utf-8"><style>table{border-collapse:collapse;font:12px Arial}th{background:#18783e;color:#fff;font-weight:bold}th,td{border:1px solid #b7c3bb;padding:8px;white-space:nowrap}tr:nth-child(even){background:#eef7f1}</style></head><body><h2>Excel Primary School</h2><p>Generated ${todayLabel()}</p>${cloned.outerHTML}</body></html>`;
  const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([workbook], { type: "application/vnd.ms-excel" })); link.download = filename.replace(/\.csv$/i, ".xls"); link.click(); URL.revokeObjectURL(link.href);
}

function moneyCard(iconName, value, label, color) {
  return `<section class="card money-card"><span class="metric-icon finance-card-icon" style="background:var(--${color}-soft);color:var(--${color})">${iconPaths[iconName] ? icon(iconName, 28) : iconName}</span><div><h3>${value}</h3><span class="muted">${label}</span></div></section>`;
}

function progressCard(title, value, detail, color, feeType = "") {
  const tone = color.includes("red") ? "red" : color.includes("cyan") ? "cyan" : color.includes("blue") ? "blue" : color.includes("amber") ? "amber" : color.includes("green") ? "green" : "blue";
  return `<section class="card progress-card ${tone}" ${feeType ? `role="button" tabindex="0" onclick="filterFeesByType('${feeType}')"` : ""}><div class="progress-row"><span>${title}</span><span>${value}%</span></div><div class="track ${tone}"><span class="fill" style="width:${value}%"></span></div><p style="margin-top:26px"><strong>${detail.split("/")[0]}</strong>${detail.includes("/") ? `/${detail.split("/")[1]}` : ""}</p></section>`;
}

function feesTable() {
  const liveRows = backendPaymentRows();
  if (liveRows) {
    return `<table class="fees-table"><thead><tr><th>Receipt</th><th>Student / Class</th><th>Fee / Term</th><th>Amount</th><th>Balance</th><th>Mode</th><th>Paid On</th><th>Status</th><th>Action</th></tr></thead><tbody>
      ${liveRows.map((row) => { const payment = backendData.payments.find((item) => item.receipt_no === row[0]); const paymentStatus = Number(row[7]) > 0 && row[9] === "Paid" ? "Partial" : row[9]; const isoDate = payment?.paid_at?.slice(0, 10) || ""; return `<tr data-status="${paymentStatus}" data-fee-type="${row[2]}" data-class="${row[5]}" data-date="${isoDate}"><td><a onclick="openReceiptModal('${row[0]}')">${row[0]}</a></td><td><span class="cell-stack"><strong>${row[1]}</strong><small>${row[5]}</small></span></td><td><span class="cell-stack"><strong>${row[2]}</strong><small>${row[3]}</small></span></td><td>${money(row[6])}</td><td><span class="cell-stack"><strong>${money(row[7])}</strong><small>${paymentStatus === "Pending Approval" ? "Awaiting Director" : "Calculated"}</small></span></td><td>${row[8]}</td><td><span class="cell-stack"><strong>${row[10]}</strong><small>${row[11]}</small></span></td><td><span class="badge ${statusClass(paymentStatus)}">• ${paymentStatus}</span></td><td><span class="row-tools">${["Director", "Super Admin"].includes(currentRole()) && paymentStatus === "Pending Approval" ? `<button class="approve-payment-btn" onclick="approvePayment(${payment.id})" title="Approve payment">${icon("shield-check", 14)} Approve</button>` : ""}<button class="icon-mini" onclick="openReceiptModal('${row[0]}')" title="View receipt">${icon("eye", 16)}</button><button class="icon-mini" onclick="openStudentPaymentHistory(${payment?.student_id || 0})" title="Payment history">${icon("receipt", 16)}</button><button class="icon-mini" onclick="downloadReceipt('${row[0]}')" title="Download receipt">${icon("download", 16)}</button></span></td></tr>`; }).join("")}
    </tbody></table>`;
  }
  return `<table class="fees-table"><thead><tr><th>ID</th><th>Student Name</th><th>Fees Type</th><th>Class</th><th>Tuition Fee</th><th>Activities Fee</th><th>Miscellaneous</th><th>Discount / Scholarship</th><th>Adjustment / Refund</th><th>Total Amount</th><th>Total Amount</th><th>Payment Mode</th><th>Status</th><th>Action</th></tr></thead><tbody>
    ${feeRows.map((r, index) => {
      const total = r.tuition + r.activities + r.misc;
      const cls = r.status === "Paid" || r.status === "Active" ? "green" : r.status === "Pending" ? "amber" : "red";
      return `<tr data-status="${r.status}" data-class="${r.className}" data-date="${new Date().toISOString().slice(0, 10)}"><td><a>${r.id}</a></td><td>${r.name}</td><td>${r.type}</td><td>${r.className}</td><td>${money(r.tuition)}</td><td>${money(r.activities)}</td><td>${money(r.misc)}</td><td>${index % 3 === 0 ? "Discount MWK 500" : index % 4 === 0 ? "Scholarship MWK 1000" : "–"}</td><td>${index === 2 ? "MWK 300 Refunded" : "–"}</td><td>${money(total)}</td><td>${money(total)}</td><td>${r.mode}</td><td><span class="badge ${cls}">• ${r.status}</span></td><td>⋮</td></tr>`;
    }).join("")}</tbody></table>`;
}

function timetablePage() {
  return `${pageHead("TimeTable", "Dashboard / Academic / Time Table", `<button class="icon-btn">↻</button><button class="icon-btn">⎙</button><button class="btn ghost">⇩ Export</button><button class="btn primary">⊕ Add Time Table</button>`)}
    <div class="timetable-page">
      <section class="section-panel">
        <div class="section-toolbar"><h2>Time Table</h2><div class="filters"><button class="pill">○ Teacher Availability⌄</button><button class="pill">Class I-A⌄</button><button class="pill">▣ This Week⌄</button></div></div>
        <div class="section-body"><div class="timetable-grid">${["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(dayColumn).join("")}</div></div>
      </section>
      <aside class="grid">
        ${sideStat("Total Classes", "45", "green", "↗ 1.2%")}
        ${sideStat("Active Teachers", "18", "red", "↘ 1.5%")}
        ${sideStat("Upcoming Events", "4", "blue", "↗ 1.5%")}
        <section class="card">${cardHead("Schedules", `<a class="muted">⊞ Add New</a>`)}${calendar()}${events()}</section>
      </aside>
    </div>`;
}

function dayColumn(day, dayIndex) {
  const times = ["09:00 - 09:45 AM", "09:45 - 10:30 AM", "10:45 - 11:30 AM", "11:30 - 12:15 AM", "01:30 - 02:15 PM", "02:15 - 03:00 AM"];
  const subjects = ["Maths", "Hindi", "Computer", "Physics", "English", "Science", "Chemistry"];
  const names = ["Divya", "Harsh", "Pranav", "Meera", "Tanvi", "Arvind", "Tarun"];
  const bgs = ["#fbe5ea", "#e1f7fc", "#e6fae5", "#fff5df", "#ecf0ff", "#e7f1fc"];
  return `<div class="day"><h3>${day}</h3>${times.map((time, index) => {
    const absent = (index + dayIndex) % 5 === 2;
    const busy = (index + dayIndex) % 7 === 4;
    return `<article class="lesson" style="background:${bgs[(index + dayIndex) % bgs.length]}"><p>◷ ${time}</p><p>Subject : ${subjects[(index + dayIndex) % subjects.length]}</p><span class="teacher-pill"><span class="avatar small">${names[(index + dayIndex) % names.length][0]}</span>${names[(index + dayIndex) % names.length]} ${absent ? '<span class="dot" style="background:var(--red)"></span> Absent' : busy ? '<span class="dot" style="background:var(--amber)"></span> Busy' : ""}</span><p><span class="dot"></span> ${absent ? "Taking By: " + names[(index + 1) % names.length] : busy ? "Replace By: Divya" : "Available"}</p></article>`;
  }).join("")}</div>`;
}

function sideStat(title, value, color, badge) {
  return `<section class="card pad"><p class="muted">${title}</p><h2>${value}</h2><span class="badge ${color}" style="float:right">${badge}</span></section>`;
}

function events() {
  return `<div class="event-list"><h3>Upcoming Events</h3>${[["Parents, Teacher Meet","6 July 2024","09:10 AM - 10:50 PM"],["Staff Meeting","7 July 2024","11:00 AM - 12:00 PM"]].map((e) => `<article class="event-item"><div class="person-line"><span class="nav-icon">⚭</span><div><strong>${e[0]}</strong><span class="muted">▣ ${e[1]}</span></div></div><p class="muted">◷ ${e[2]}</p></article>`).join("")}</div>`;
}

function curriculumPage(active = "curriculum") {
  const titles = { curriculum: "Curriculum Design", "lesson-planning": "Lesson Planning", assessment: "Assessment", "learning-materials": "Learning Materials" };
  const action = active === "curriculum" ? "⊕ Add Curriculum" : "⊕ Create Lesson Plan";
  return `${pageHead("Curriculum Management", "Dashboard / Management / Curriculum Management", `<button class="icon-btn">↻</button><button class="icon-btn">⎙</button><button class="btn ghost">⇩ Export</button><button class="btn primary">${action}</button>`)}
    <section class="card" style="margin-bottom:24px"><div class="tabs">${Object.entries(titles).map(([id, label]) => `<a class="tab ${active === id ? "active" : ""}" href="#/${id}">${label}</a>`).join("")}</div></section>
    ${active === "lesson-planning" ? lessonPlanning() : active === "assessment" ? assessment() : active === "learning-materials" ? inventory() : curriculumTable()}`;
}

function curriculumTable() {
  const rows = ["I|A|3-4|08|08|Active","I|B|3-4|03|03|Active","II|A|4-5|03|03|Active","II|B|5-6|03|03|Active","II|C|5-6|03|03|Inactive","III|A|6-7|03|03|Active","III|B|6-7|05|05|Active","IV|A|7-8|05|05|Active","IV|B|7-8|05|05|Inactive","V|A|8-9|05|05|Active"].map((x, i) => [`C13803${8 - i}`, ...x.split("|")]);
  return `<section class="section-panel"><div class="section-toolbar"><h2>Manage Curriculum</h2><div class="filters"><button class="pill">▣ 15 Apr 2025 - 24 May 2025</button><button class="pill">▽ Filter</button><button class="pill">↕ Sort By A-Z</button></div></div><div class="section-toolbar"><span>Row Per Page <select class="select"><option>10</option></select> Entries</span><div class="search"><input placeholder="Search"></div></div><div class="table-wrap"><table><thead><tr><th>ID</th><th>Class</th><th>Section</th><th>Age Group</th><th>Total Topics</th><th>Weekly Goals</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map((r) => `<tr><td><a>${r[0]}</a></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><span class="badge ${r[6] === "Active" ? "green" : "red"}">• ${r[6]}</span></td><td>${actionIcons()}</td></tr>`).join("")}</tbody></table></div></section>`;
}

function lessonPlanning() {
  const plans = [["Class V, B","Subject : Physics","7 July 2025","Introduction Note to Physics on Today’s Tech","green",42],["Class V, A","Subject : Biometric","10 May 2025","Biometric & their Working Functionality","amber",42],["Class IV, C","Subject : Biometric","10 May 2025","Analyze and interpret literary texts","blue",42],["Class IV, C","Subject : English","10 Dec 2025","Enhance vocabulary and grammar skills","red",0]];
  const all = [...plans, ...plans, ...plans];
  return `<section class="section-panel"><div class="section-toolbar"><h2>Syllabus / Lesson Plan</h2><div class="filters"><button class="pill">▣ 15 Apr 2025 - 24 May 2025</button><button class="pill">▽ Filter</button><button class="pill">↕ Sort By A-Z</button></div></div><div class="section-body"><div class="curriculum-cards">${all.map(([klass, subject, date, title, color, pct]) => `<article class="card lesson-plan"><div class="class-tag" style="background:var(--${color}-soft);color:var(--${color})">${klass}</div><p><span>${subject}</span><span style="float:right">${date}</span></p><h3>${title}</h3><div class="track ${color}"><span class="fill" style="width:${pct}%"></span></div><div class="lesson-actions"><span>♢ Reschedule</span><span>♧ Share</span></div></article>`).join("")}</div></div></section>`;
}

function assessmentState() {
  return {
    className: localStorage.getItem("erpAssessmentClass") || "All Classes",
    subject: localStorage.getItem("erpAssessmentSubject") || "All Subjects",
    term: localStorage.getItem("erpAssessmentTerm") || "Term 2",
    view: localStorage.getItem("erpAssessmentView") || "Average"
  };
}

function setAssessmentFilter(key, value) {
  localStorage.setItem(`erpAssessment${key}`, value);
  app();
}

function assessmentTone(score) {
  if (score >= 75) return "green";
  if (score >= 50) return "blue";
  if (score >= 35) return "amber";
  return "red";
}

function assessmentStatus(score) {
  if (score >= 85) return "Excellent";
  if (score >= 65) return "Good";
  if (score >= 40) return "Average";
  return "Needs Support";
}

function assessmentRows(state) {
  const classes = ["Standard 1", "Standard 1", "Standard 2", "Standard 2", "Standard 2", "Standard 3", "Standard 3", "Standard 4", "Standard 4", "Standard 4"];
  const sections = ["A", "B", "A", "B", "C", "A", "B", "A", "B", "A"];
  const subjects = ["Mathematics", "English", "Biology", "Physics", "Computer Studies"];
  const subjectOffset = Math.max(0, subjects.indexOf(state.subject)) * 3;
  return students.slice(0, 10).map((student, index) => {
    const test1 = Math.max(18, Math.min(98, [92, 88, 74, 68, 61, 56, 52, 42, 34, 24][index] - subjectOffset + (index % 3)));
    const test2 = Math.max(18, Math.min(98, test1 + [4, 2, -3, 5, 1, 6, -2, -5, 8, 3][index]));
    const mid = Math.max(18, Math.min(98, Math.round((test1 + test2) / 2) + [3, 5, 2, -1, 0, 4, 2, -3, -1, 2][index]));
    const final = Math.max(18, Math.min(98, mid + [1, 3, 4, 2, -2, 5, 6, 1, 2, -1][index]));
    const average = Math.round((test1 + test2 + mid + final) / 4);
    return {
      id: `C13803${8 - index}`,
      name: student[1],
      className: classes[index],
      section: sections[index],
      subject: state.subject === "All Subjects" ? subjects[index % subjects.length] : state.subject,
      test1,
      test2,
      mid,
      final,
      average
    };
  }).filter((row) => state.className === "All Classes" || row.className === state.className);
}

function assessmentScoreCell(score) {
  const tone = assessmentTone(score);
  return `<span class="assessment-score"><strong>${score}%</strong><span class="track table-progress assessment-progress ${tone}"><span class="fill" style="width:${score}%"></span></span></span>`;
}

function assessmentSelect(label, key, value, options) {
  return `<label class="assessment-filter"><span>${label}</span><select class="select" onchange="setAssessmentFilter('${key}', this.value)">${options.map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
}

function assessmentTab(label, value, active) {
  return `<button class="tab ${active === value ? "active" : ""}" onclick="setAssessmentFilter('View', '${value}')">${label}</button>`;
}

function assessment() {
  const state = assessmentState();
  const rows = assessmentRows(state);
  const scoreKey = state.view === "Test 1" ? "test1" : state.view === "Test 2" ? "test2" : state.view === "Mid Term" ? "mid" : state.view === "Final Term" ? "final" : "average";
  const average = rows.length ? Math.round(rows.reduce((sum, row) => sum + row[scoreKey], 0) / rows.length) : 0;
  const passRate = rows.length ? Math.round((rows.filter((row) => row[scoreKey] >= 50).length / rows.length) * 100) : 0;
  const support = rows.filter((row) => row[scoreKey] < 40).length;
  return `<section class="assessment-board">
    <div class="assessment-kpis">
      ${metricCard(["clipboard-check", `${average}%`, "Average Score", state.view, `${rows.length} learners`, assessmentTone(average)])}
      ${metricCard(["trending-up", `${passRate}%`, "Pass Rate", state.className, state.term, assessmentTone(passRate)])}
      ${metricCard(["book-open", state.subject === "All Subjects" ? "All" : state.subject, "Subject Filter", state.term, state.view, "blue"])}
      ${metricCard(["triangle-alert", support, "Needs Support", "Below 40%", "Follow up", support ? "red" : "green"])}
    </div>
    <section class="section-panel">
      <div class="section-toolbar assessment-toolbar">
        <h2>Manage Assessment</h2>
        <div class="filters">
          ${assessmentSelect("Class", "Class", state.className, ["All Classes", "Standard 1", "Standard 2", "Standard 3", "Standard 4"])}
          ${assessmentSelect("Subject", "Subject", state.subject, ["All Subjects", "Mathematics", "English", "Biology", "Physics", "Computer Studies"])}
          ${assessmentSelect("Term", "Term", state.term, ["Term 1", "Term 2", "Term 3"])}
        </div>
      </div>
      <div class="assessment-tabs">${["Test 1", "Test 2", "Mid Term", "Final Term", "Average"].map((tab) => assessmentTab(tab, tab, state.view)).join("")}</div>
      <div class="assessment-legend">
        <span><i class="legend-dot green"></i>75-100 Excellent</span>
        <span><i class="legend-dot blue"></i>50-74 Good</span>
        <span><i class="legend-dot amber"></i>35-49 Average</span>
        <span><i class="legend-dot red"></i>0-34 Support</span>
      </div>
      <div class="section-toolbar"><span>Row Per Page <select class="select"><option>10</option></select> Entries</span><div class="search"><input placeholder="Search"></div></div>
      <div class="table-wrap"><table><thead><tr><th>ID</th><th>Student Name</th><th>Class</th><th>Section</th><th>Subject</th><th>Test 1</th><th>Test 2</th><th>Mid Term</th><th>Final Term</th><th>${state.view}</th><th>Status</th></tr></thead><tbody>${rows.map((row) => {
        const activeScore = row[scoreKey];
        return `<tr><td><a>${row.id}</a></td><td>${row.name}</td><td>${row.className}</td><td>${row.section}</td><td>${row.subject}</td><td>${row.test1}%</td><td>${row.test2}%</td><td>${row.mid}%</td><td>${row.final}%</td><td>${assessmentScoreCell(activeScore)}</td><td><span class="badge ${assessmentTone(activeScore)}">• ${assessmentStatus(activeScore)}</span></td></tr>`;
      }).join("")}</tbody></table></div>
    </section>
  </section>`;
}

function inventory() {
  const items = [["Chemistry Lab Glassware", 88, "Only 8 sets left", "blue"],["Printer Paper A4", 78, "Only 20 sets left", "cyan"],["Printer Paper A4", 92, "Only 10 sets left", "cyan"],["Whiteboard Markers", 80, "Only 12 sets left", "green"],["Sports Equipment", 66, "Only 5 sets left", "amber"],["Sports Equipment", 76, "Only 7 sets left", "blue"],["Sports Equipment", 74, "Only 20 sets left", "green"],["Sports Equipment", 91, "Only 3 sets left", "amber"]];
  return `<section class="section-panel"><div class="section-toolbar"><h2>Inventory Alerts</h2><div class="filters"><button class="pill">♧ Class II⌄</button><button class="pill">↕ Sort By A-Z</button></div></div><div class="section-body"><div class="inventory-list">${items.map(([name, pct, left, color]) => `<div class="inventory-row"><strong>${name}</strong><div class="track ${color}"><span class="fill" style="width:${pct}%"></span></div><span>${left}</span></div>`).join("")}</div></div></section>`;
}

const staffRows = [
  ["8483", "Meera Kulkarni", "Teacher", "Physics", "6 Years", "Active"],
  ["8482", "Rahul Sharma", "Admin", "Accounts", "4 Years", "Active"],
  ["8481", "Suresh Patel", "Teacher", "Math", "8 Years", "Inactive"],
  ["8480", "Anita Verma", "Teacher", "Chemistry", "5 Years", "Active"],
  ["8479", "Vikram Joshi", "Admin", "HR", "3 Years", "Active"],
  ["8478", "Rakesh Kumar", "Teacher", "Biology", "1 Years", "Active"],
  ["8477", "Aman Verma", "Teacher", "English", "5 Years", "Inactive"],
  ["8476", "Neha Gupta", "Admin", "Finance", "1 Years", "Active"],
  ["8475", "Kavita Sharma", "Teacher", "History", "2 Years", "Active"],
  ["8474", "Kiran Rao", "Admin", "Operations", "7 Years", "Active"]
];

function staffProfilesPage() {
  return `${pageHead("Staff Profiles", "Dashboard / Teacher & Staff Management / Staff Profiles", tableActions())}
    <section class="section-panel">
      <div class="section-toolbar"><h2>Staff Profiles Table</h2><div class="filters"><button class="pill">▣ 15 May 2024 - 24 Dec 2025</button><button class="pill">▽ Filter</button><button class="pill">↕ Sort By A-Z</button></div></div>
      ${tableSearch()}
      <div class="table-wrap"><table><thead><tr><th>S.No</th><th>ID</th><th>Name</th><th>Role</th><th>Department</th><th>Experience</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${staffRows.map((r) => `<tr><td>1</td><td><a>${r[0]}</a></td><td><span class="inline-person"><span class="avatar small">${initials(r[1])}</span>${r[1]}</span></td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td><span class="badge ${r[5] === "Active" ? "green" : "red"}">• ${r[5]}</span></td><td>${actionIcons()}</td></tr>`).join("")}
      </tbody></table></div>${pagination()}
    </section>`;
}

function payrollPage() {
  const salaries = [30000, 20000, 32000, 28000, 22000, 35000, 27000, 25000, 31000, 18000];
  const deductions = [2000, 1000, 2500, 1500, 1200, 3000, 1000, 2000, 2200, 800];
  const statuses = ["Pending", "Approved", "Declined", "Approved", "Pending", "Approved", "Declined", "Pending", "Approved", "Pending"];
  return `${pageHead("Payroll", "Dashboard / Teacher & Staff Management / Payroll", tableActions())}
    <section class="section-panel">
      <div class="section-toolbar"><h2>Payroll List</h2><div class="filters"><button class="pill">▣ 15 May 2024 - 24 Dec 2025</button><select class="select"><option>Status</option></select><select class="select"><option>Role</option></select><button class="pill">↕ Sort By A-Z</button></div></div>
      ${tableSearch()}
      <div class="table-wrap"><table><thead><tr><th>ID</th><th>Name</th><th>Role</th><th>Basic Salary</th><th>Deductions</th><th>Net Salary</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${staffRows.map((r, i) => {
          const cls = statuses[i] === "Approved" ? "green" : statuses[i] === "Pending" ? "amber" : "red";
          return `<tr><td><a>P73819${8 - i}</a></td><td><span class="inline-person"><span class="avatar small">${initials(r[1])}</span>${r[1]}</span></td><td>${r[2]}</td><td>${money(salaries[i])}</td><td>${money(deductions[i])}</td><td>${money(salaries[i] - deductions[i])}</td><td><span class="badge ${cls}">• ${statuses[i]}</span></td><td><button class="btn ghost small-btn">${statuses[i] === "Approved" ? "Pay Now" : "View Payslip"}</button></td></tr>`;
        }).join("")}
      </tbody></table></div>${pagination()}
    </section>`;
}

function leavePage() {
  const types = ["Sick Leave", "Casual", "Medical", "Earned", "Medical", "Sick Leave", "Casual", "Earned", "Casual", "Casual"];
  const from = ["12 Dec 2025", "18 Dec 2025", "10 Dec 2025", "05 Dec 2025", "20 Dec 2025", "22 Dec 2025", "01 Dec 2025", "15 Dec 2025", "26 Dec 2025", "28 Dec 2025"];
  const days = [3, 1, 6, 3, 2, 2, 4, 5, 1, 3];
  const statuses = ["Pending", "Approved", "Paid", "Paid", "Paid", "Pending", "Paid", "Paid", "Pending", "Paid"];
  return `${pageHead("Leave Management", "Dashboard / Teacher & Staff Management / Leave Management", tableActions())}
    <section class="section-panel">
      <div class="section-toolbar"><h2>Leave Table</h2><div class="filters"><button class="pill">▣ 15 May 2024 - 24 Dec 2025</button><select class="select"><option>Status</option></select><select class="select"><option>Leave Type</option></select><button class="pill">↕ Sort By A-Z</button></div></div>
      ${tableSearch()}
      <div class="table-wrap"><table><thead><tr><th>ID</th><th>Name</th><th>Leave Type</th><th>From Date</th><th>To Date</th><th>Days</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${staffRows.map((r, i) => {
          const cls = statuses[i] === "Pending" ? "amber" : "green";
          return `<tr><td><a>P73819${8 - i}</a></td><td><span class="inline-person"><span class="avatar small">${initials(r[1])}</span>${r[1]}</span></td><td>${types[i]}</td><td>${from[i]}</td><td>${from[(i + 2) % from.length]}</td><td>${days[i]}</td><td><span class="badge ${cls}">• ${statuses[i]}</span></td><td>${i % 3 === 0 ? '<button class="btn primary small-btn">Approve</button> <button class="btn ghost small-btn">Reject</button>' : '<button class="btn ghost small-btn">View</button>'}</td></tr>`;
        }).join("")}
      </tbody></table></div>${pagination()}
    </section>`;
}

function performancePage() {
  const scores = [95, 90, 88, 92, 85, 96, 89, 87, 93, 80];
  const remarks = ["Very Good", "Good Performance", "Needs Improvement", "Consistent", "Average", "Excellent", "Improving", "Satisfactory", "Very Good", "Needs Attention"];
  return `${pageHead("Payroll", "Dashboard / Teacher & Staff Management / Performance Reviews", tableActions())}
    <section class="section-panel">
      <div class="section-toolbar"><h2>Payroll List</h2><div class="filters"><button class="pill">▣ 15 May 2024 - 24 Dec 2025</button><select class="select"><option>Status</option></select><select class="select"><option>Role</option></select><button class="pill">↕ Sort By A-Z</button></div></div>
      ${tableSearch()}
      <div class="table-wrap"><table><thead><tr><th>ID</th><th>Name</th><th>Role</th><th>Attendance</th><th>Remarks</th><th>Action</th></tr></thead><tbody>
        ${staffRows.map((r, i) => `<tr><td><a>P73819${8 - i}</a></td><td><span class="inline-person"><span class="avatar small">${initials(r[1])}</span>${r[1]}</span></td><td>${r[2]}</td><td><span style="display:inline-block;width:42px">${scores[i]}%</span><span class="track table-progress ${scores[i] >= 90 ? "green" : scores[i] >= 80 ? "blue" : scores[i] >= 70 ? "amber" : "red"}"><span class="fill" style="width:${scores[i]}%"></span></span></td><td>${remarks[i]}</td><td><button class="btn ghost small-btn">View</button></td></tr>`).join("")}
      </tbody></table></div>${pagination()}
    </section>`;
}

function parentCommunicationPage() {
  const rows = [
    ["PTM Meeting", "Class 8A Parents", "Meeting", "20 Apr 2025"],
    ["School Holiday Notice", "All Parents", "Announcement", "15 Apr 2025"],
    ["Sports Day Tomorrow", "Class 10 Parents", "Event", "10 Apr 2025"],
    ["Exam Schedule Update", "Class 9 Parents", "Announcement", "08 Apr 2025"],
    ["Fee Payment Reminder", "Class 7 Parents", "Announcement", "05 Apr 2025"],
    ["Annual Function Invite", "All Parents", "Event", "02 Apr 2025"],
    ["Result Declaration", "Class 12 Parents", "Announcement", "30 Mar 2025"],
    ["PTM Reminder", "Class 6B Parents", "Meeting", "28 Mar 2025"],
    ["Bus Timing Change", "Transport Users", "Announcement", "25 Mar 2025"],
    ["Holiday Due to Weather", "All Parents", "Announcement", "22 Mar 2025"]
  ];
  return `${pageHead("Parent Communication", "Dashboard / Communication & Notification / Parent Communication", `<button class="icon-btn">↻</button><button class="btn ghost">⇩ Export</button><button class="btn primary">⊕ Create Notification</button>`)}
    <section class="section-panel">
      <div class="section-toolbar"><h2>Communication & Notification</h2><div class="filters"><button class="pill">▣ 15 May 2024 - 24 Dec 2025</button><button class="pill">▽ Filter</button><button class="pill">↕ Sort By A-Z</button></div></div>
      ${tableSearch()}
      <div class="table-wrap"><table><thead><tr><th>S.No</th><th>Title</th><th>Target Audience</th><th>Type</th><th>Date</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${rows.map((r) => `<tr><td>1</td><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="badge green">• Sent</span></td><td>${actionIcons()}</td></tr>`).join("")}
      </tbody></table></div>${pagination()}
    </section>`;
}

function messagingPage() {
  const liveMessages = backendData.messages?.length ? backendData.messages : null;
  const contacts = liveMessages ? [...new Set(liveMessages.map((message) => message.contact_name))] : ["Ritika", "Neil Das", "Pratham Roy", "Rohit", "Priya", "Priya"];
  const activeContact = contacts[0] || "Ritika";
  const conversation = liveMessages ? liveMessages.filter((message) => message.contact_name === activeContact) : null;
  const preview = "Please confirm the latest school update when you have a moment.";
  return `${pageHead("Messaging", "Dashboard / Communication & Notification / Messaging", `<button class="icon-btn">↻</button><button class="btn ghost">⇩ Export</button><button class="btn primary">⊕ Add Parent</button>`)}
    <section class="messaging-layout">
      <aside class="chat-list card">
        <div class="chat-list-head"><strong>All Messages⌄</strong><strong>⋮</strong></div>
        <div class="chat-search"><input placeholder="⌕  Search or start a new chat"></div>
        ${contacts.map((name, i) => `<article class="chat-contact ${i === 1 ? "soft" : ""}"><span class="avatar">${initials(name)}</span><div><strong>${name}</strong><p>${preview}</p><span class="muted">Today | 05:30 PM</span></div></article>`).join("")}
      </aside>
      <section class="chat-window card">
        <div class="chat-top"><div class="person-line"><span class="avatar small">${initials(activeContact)}</span><strong>${activeContact}</strong></div><div class="head-actions"><button class="icon-btn">☆</button><button class="icon-btn">⌕</button><button class="icon-btn">⋮</button></div></div>
        <div class="chat-body">
          <p class="chat-date">Today | 06:32 PM</p>
          ${conversation ? conversation.map((message) => chatBubble(message.body, message.direction === "out" ? "out" : "in")).join("") : `
            ${chatBubble("Good afternoon. Please confirm whether the fee reminder should be sent to all Standard 3 parents.", "in")}
            ${chatBubble("Confirmed. Send it to Standard 3 A and B first, then share the delivery report.", "out")}
            ${chatBubble("Noted. I will prepare the notice and attach the outstanding balance list.", "in")}
            ${chatBubble("Thank you. Mark urgent balances for finance review.", "out")}
          `}
          ${voiceBubble("in")}
          ${voiceBubble("out")}
        </div>
        <form class="chat-input" onsubmit="event.preventDefault(); sendMessage(this);">
          <input type="hidden" name="contact_name" value="${activeContact}">
          <button class="icon-btn" type="button">＋</button>
          <input name="body" placeholder="Type your message here..." required />
          <button class="send-btn" type="submit">➤</button>
        </form>
      </section>
    </section>`;
}

function chatBubble(text, side) {
  return `<div class="bubble-row ${side}"><div class="chat-bubble">${text}</div><span class="chat-time">04:45 PM</span></div>`;
}

function voiceBubble(side) {
  return `<div class="bubble-row ${side}"><div class="chat-bubble voice"><span class="play">▶</span><span class="wave"></span><span>01:24</span></div><span class="chat-time">04:45 PM</span></div>`;
}

function studentReportPage() {
  const rows = [
    ["Roshni Negi", "III", "A", "Attendance Report", "Mar 2025", "10 Apr 2025", "Ready"],
    ["Neha Verma", "II", "B", "Progress Report", "Term 1", "08 Apr 2025", "Ready"],
    ["Rohit Kumar", "VI", "C", "Financial Statement", "Jan-Mar", "05 Apr 2025", "Pending"],
    ["Simran Kaur", "X", "B", "Financial Statement", "Mar 2025", "20 Apr 2025", "Ready"],
    ["Aman Gupta", "XI", "A", "Progress Report", "Term 1", "05 Apr 2025", "Ready"],
    ["Pooja Sharma", "III", "C", "Attendance Report", "Jan-Mar", "03 Apr 2025", "Ready"],
    ["Karan Mehta", "IV", "B", "Progress Report", "Mar 2025", "05 Mar 2025", "Pending"],
    ["Riya Malhotra", "VII", "A", "Attendance Report", "Term 1", "30 Mar 2025", "Ready"],
    ["Mohit Verma", "VIII", "C", "Financial Statement", "Mar 2025", "15 Mar 2025", "Ready"],
    ["Anjali Singh", "I", "B", "Attendance Report", "Dec 2025", "02 Dec 2025", "Ready"]
  ];
  return `${pageHead("Students Reports", "Dashboard / Communication & Notification / Students Reports", tableActions())}
    <div class="report-metrics">
      ${circleMetric("95%", "Average Attendance", "All Students", "green")}
      ${circleMetric("85%", "Passing Rate", "All Students", "blue")}
      ${circleMetric("950", "Total Students", "All Students", "amber")}
      ${circleMetric("720", "Reports Generated", "All Reports", "cyan")}
    </div>
    <section class="section-panel">
      <div class="section-toolbar"><h2>Manage Student Reports</h2><div class="filters"><button class="pill">▣ 15 Apr 2025 - 24 May 2025</button><button class="pill">▽ Filter</button><button class="pill">↕ Sort By A-Z</button></div></div>
      <div class="section-toolbar"><div class="filters"><select class="select"><option>Class</option></select><select class="select"><option>Section</option></select><select class="select"><option>Report Type</option></select><select class="select"><option>Period</option></select></div><div class="search"><input placeholder="Search"></div></div>
      <div class="table-wrap"><table><thead><tr><th>ID</th><th>Student Name</th><th>Class</th><th>Section</th><th>Report Type</th><th>Report Period</th><th>Last Updated</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${rows.map((r, i) => `<tr><td><a>C13803${8 - Math.min(i, 7)}</a></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><span class="badge ${r[6] === "Ready" ? "green" : "amber"}">• ${r[6]}</span></td><td>${actionIcons()}</td></tr>`).join("")}
      </tbody></table></div>${pagination("08")}
    </section>`;
}

function compareAdmissions(a,b) {
  const pending=Number(b.status==='Pending Approval')-Number(a.status==='Pending Approval');
  const date=s=>String(s.joined_on||s.created_at||'').slice(0,10);
  return pending||date(b).localeCompare(date(a))||String(b.created_at||'').localeCompare(String(a.created_at||''))||b.id-a.id;
}
function admissionsTable() {
  const rows = backendData.students?.length ? [...backendData.students].sort(compareAdmissions).map((student) => [
    student.admission_no,
    `${student.first_name} ${student.last_name}`,
    `${student.class_name}${student.section ? ` ${student.section}` : ""}`,
    student.guardian ? student.guardian.name : "Not provided — follow up",
    student.status,
    student.id
  ]) : [];
  return `<table class="admissions-table"><thead><tr><th>Application ID</th><th>Student</th><th>Class</th><th>Parent / Guardian</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map((r) => `<tr data-new-admission="${r[5]===latestAdmissionId}" data-class="${r[2]}" data-status="${r[4]}"><td><a>${r[0]}</a></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="badge ${statusClass(r[4])}">• ${r[4]}</span></td><td><span class="row-tools">${["Director","Super Admin"].includes(currentRole()) && ["Pending Approval", "Pending Edit Approval"].includes(r[4]) && r[5] ? `<button class="approve-payment-btn" type="button" title="${r[4]==='Pending Approval'?'Review admission for approval':'Preview requested changes'}" aria-label="${r[4]==='Pending Approval'?'Review admission for approval':'Preview requested changes'}" onclick="reviewRecordChange(${r[5]})">${icon("shield-check", 16)}</button>` : ""}<button class="icon-mini" onclick="openDetailsModal('Admission Details','${r[0]} — ${r[1]}')" title="View admission">${icon("eye", 16)}</button><button class="icon-mini" onclick="notifyAction('Admission export prepared','${r[0]} is ready for download.')" title="Download admission">${icon("download", 16)}</button></span></td></tr>`).join("")}</tbody></table>`;
}

function approveAdmission(studentId) { return reviewRecordChange(studentId); }
async function confirmReviewedAdmission(studentId, reviewToken, button) {
  button.disabled=true;
  try {
    await apiRequest(`/students/${studentId}/approve`, { method: "PATCH", body: JSON.stringify({ role: currentRole(), review_token: reviewToken }) });
    closeModal();showToast("Request approved", "Student and guardian changes have been saved. The requester has been notified.", "success");
    await loadBackendData(true);
  } catch (error) { showToast("Admission not approved", error.message, "error"); button.disabled=false; }
}

function examCandidatesTable() {
  const rows = [
    ["EX-4001", "Roshni Negi", "III A", "Paid", "Eligible"],
    ["EX-4002", "Akash Rawat", "IV B", "Balance", "Hold"],
    ["EX-4003", "Aarav Sharma", "III A", "Paid", "Eligible"],
    ["EX-4004", "Vivaan Mehta", "I B", "Missing record", "Review"],
    ["EX-4005", "Riya Verma", "II B", "Paid", "Eligible"]
  ];
  return `<table><thead><tr><th>Candidate ID</th><th>Student</th><th>Class</th><th>Clearance</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map((r) => `<tr><td><a>${r[0]}</a></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="badge ${statusClass(r[4])}">• ${r[4]}</span></td><td>${actionIcons()}</td></tr>`).join("")}</tbody></table>`;
}

function admissionsPage() {
  return `${pageHead("Admissions Register", "Dashboard / Admissions / Admissions Register", `<button class="btn primary" onclick="openAdmissionModal()">${icon("user-plus")} New Admission</button>`)}
    <div class="report-metrics">
      ${circleMetric(String(backendData.stats?.students ?? 0), "New Applications", academicYearLabel(), "blue")}
      ${circleMetric(String((backendData.students||[]).filter(s=>["Active","Approved"].includes(s.status)).length), "Active / Approved", activeTerm(), "green")}
      ${circleMetric(String(backendData.stats?.pending_admissions||0), "Pending Review", "Documents / approvals", "amber")}
      ${circleMetric(String((backendData.admission_follow_ups||[]).length), "Guardian Follow-up", "Details incomplete", "red")}
    </div>
    <section class="section-panel compact-form">
      <div class="section-toolbar"><h2>Register Student</h2><span class="muted">Student and parent records are saved together</span></div>
      <form class="record-form" onsubmit="event.preventDefault(); createAdmission(this);">
        <label><span>First Name</span><input name="first_name" required placeholder="Student first name"></label>
        <label><span>Last Name</span><input name="last_name" required placeholder="Student last name"></label>
        <label><span>Student Type</span><select name="student_type" onchange="updateAdmissionClasses(this)"><option>Preschool</option><option>Primary</option></select></label>
        <label><span>Class</span><select name="class_name">${classOptions("", "Preschool")}</select></label>
        <label><span>Gender</span><select name="gender"><option>Female</option><option>Male</option></select></label>
        <label><span>Joined On</span><input name="joined_on" type="date"></label>
        <label><span>Parent / Guardian <small>(optional)</small></span><input name="guardian_name" placeholder="Full name"></label>
        <label><span>Parent Email</span><input name="guardian_email" type="email" placeholder="name@example.com"></label>
        <label><span>Parent Phone</span><input name="guardian_phone" placeholder="+265 ..."></label>
        <button class="btn primary" type="submit">${icon("user-plus")} Save Admission</button>
      </form>
    </section>
    <section class="section-panel"><div class="section-toolbar"><h2>Manage Admissions</h2><div class="filters"><div class="search"><input data-admission-search type="search" placeholder="Search admissions" aria-label="Search admissions" oninput="applyAdmissionFilters(this)"><span class="shortcut">${icon("search", 15)}</span></div><select class="select" data-admission-class onchange="applyAdmissionFilters(this)"><option value="">All Classes</option>${classOptions()}</select><select class="select" data-admission-status onchange="applyAdmissionFilters(this)"><option value="">All Statuses</option><option>Pending Approval</option><option>Pending Edit Approval</option><option>Approved</option><option>Submitted</option><option>Active</option><option>Pending</option></select><button class="pill">${icon("sort", 14)} Pending First · Newest Admissions</button></div></div><div class="table-wrap">${admissionsTable()}</div>${pagination()}</section>`;
}

function balancesPage(kind) {
  if (kind === "daily-collections") return dailyCollectionsPage();
  if (kind === "term-collections") return termCollectionsPage();
  if (["student-balances", "arrears"].includes(kind)) {
    const allRows = [...(backendData.balances || [])]
      .filter((balance) => kind === "student-balances" || Number(balance.balance) > 0)
      .map((balance) => [
        `BAL-${String(balance.id).padStart(4, "0")}`,
        balance.student ? `${balance.student.first_name} ${balance.student.last_name}` : "Student",
        balance.student ? `${balance.student.class_name} ${balance.student.section || ""}` : "N/A",
        `${balance.fee_type} / ${balance.term}`,
        money(balance.amount_due),
        money(balance.amount_paid),
        money(balance.balance),
        balance.status,
        Number(balance.balance),
        balance.student_id || balance.student?.id,
      ]);
    const title = kind === "arrears" ? "Arrears" : "Student Balances";
    return `${pageHead(title, `Dashboard / Fees & Accounts / ${title}`, tableActions())}
      <section class="section-panel">
        <div class="section-toolbar"><h2>${kind === "arrears" ? "Outstanding Balances" : "Balance Summary"}</h2><div class="filters"><button class="pill" onclick="openAcademicYearModal()">${icon("calendar-days", 14)} ${activeAcademicYear()}</button><select class="select" data-balance-status onchange="applyBalanceFilters(this)"><option value="">All Statuses</option><option>Unpaid</option><option>Partial</option><option>Cleared</option></select><select class="select" data-balance-class onchange="applyBalanceFilters(this)"><option value="">All Classes</option>${classOptions()}</select><select class="select" data-balance-range onchange="applyBalanceFilters(this)"><option value="">All Balances</option><option value="outstanding">Outstanding</option><option value="cleared">Zero / Cleared</option><option value="under-50000">Below MWK 50,000</option><option value="50000-plus">MWK 50,000+</option></select><button class="pill" onclick="openSortModal()">${icon("sort", 14)} Sort By A-Z</button></div></div>
        <div class="section-toolbar"><div class="search"><input data-balance-search type="search" placeholder="Search balances" oninput="applyBalanceFilters(this)"><span class="shortcut">${icon("search", 15)}</span></div></div>
        <div class="table-wrap"><table class="balance-table"><thead><tr><th>ID</th><th>Student</th><th>Class</th><th>Fee / Term</th><th>Due</th><th>Paid</th><th>Balance</th><th>Status</th><th>Action</th></tr></thead><tbody>
          ${allRows.map((row) => { const latestPayment = studentPayments(row[9])[0]; return `<tr data-status="${row[7]}" data-balance="${row[8]}"><td><a>${row[0]}</a></td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td><td><strong>${row[6]}</strong></td><td><span class="badge ${statusClass(row[7])}">• ${row[7]}</span></td><td><span class="row-tools"><button class="icon-mini" onclick="openStudentPaymentHistory(${row[9]})" title="Payment history">${icon("eye", 16)}</button><button class="icon-mini" onclick="${latestPayment ? `openReceiptModal('${latestPayment.receipt_no}')` : `showToast('No receipt','No payment has been recorded for this student.','info')`}" title="Latest receipt">${icon("receipt", 16)}</button><button class="icon-mini" onclick="${latestPayment ? `downloadReceipt('${latestPayment.receipt_no}')` : `showToast('No receipt','No payment has been recorded for this student.','info')`}" title="Download latest receipt">${icon("download", 16)}</button></span></td></tr>`; }).join("")}
        </tbody></table></div>${pagination()}
      </section>`;
  }
  if (kind === "receipts") {
    const payments = backendData.payments || [];
    return `${pageHead("Receipts", "Dashboard / Fees & Accounts / Receipts", tableActions())}
      <section class="section-panel"><div class="section-toolbar"><h2>Receipt Register</h2><span class="muted">${payments.length} recorded payment${payments.length === 1 ? "" : "s"}</span></div>
      <div class="section-toolbar"><div class="search"><input type="search" placeholder="Search receipt or student" oninput="filterTableRows(this, '.receipt-table')"><span class="shortcut">${icon("search", 15)}</span></div></div>
      <div class="table-wrap"><table class="receipt-table"><thead><tr><th>Receipt</th><th>Student</th><th>Fee / Term</th><th>Amount</th><th>Method</th><th>Paid On</th><th>Status</th><th>Action</th></tr></thead><tbody>
      ${payments.map((payment) => { const paidAt = dateTimeParts(payment.paid_at); const student = payment.student ? `${payment.student.first_name} ${payment.student.last_name}` : "Student"; return `<tr data-status="${payment.status}"><td><a onclick="openReceiptModal('${payment.receipt_no}')">${payment.receipt_no}</a></td><td>${student}</td><td>${payment.fee_type} / ${payment.term || "Term 1"}</td><td><strong>${money(payment.amount)}</strong></td><td>${payment.method}</td><td>${paidAt.date} · ${paidAt.time}</td><td><span class="badge ${statusClass(payment.status)}">• ${payment.status}</span></td><td><span class="row-tools"><button class="icon-mini" onclick="openReceiptModal('${payment.receipt_no}')" title="View receipt">${icon("receipt", 16)}</button><button class="icon-mini" onclick="downloadReceipt('${payment.receipt_no}')" title="Download receipt">${icon("download", 16)}</button></span></td></tr>`; }).join("") || `<tr><td colspan="8" class="muted">No payments have been recorded yet.</td></tr>`}
      </tbody></table></div></section>`;
  }
  const map = {
    receipts: ["Receipts", "Fees & Accounts / Receipts", "Receipt Register", [["RCPT-7821", "Roshni Negi", "Tuition Fee", "MWK 5,550", "Online", "Approved"], ["RCPT-7820", "Akash Rawat", "Tuition Fee", "MWK 5,950", "Mobile Money", "Approved"], ["RCPT-7819", "Vivaan Mehta", "Activities", "MWK 3,800", "Cash", "Pending"], ["RCPT-7818", "Riya Verma", "Monthly Fee", "MWK 3,630", "Mobile Money", "Approved"]]],
    "student-balances": ["Student Balances", "Fees & Accounts / Student Balances", "Balance Summary", [["BAL-1001", "Roshni Negi", "III A", "MWK 0", "Cleared", "Ready"], ["BAL-1002", "Akash Rawat", "IV B", "MWK 1,250", "Partial", "Pending"], ["BAL-1003", "Aarav Sharma", "III A", "MWK 0", "Cleared", "Ready"], ["BAL-1004", "Vivaan Mehta", "I B", "MWK 4,300", "Arrears", "Review"]]],
    arrears: ["Arrears", "Fees & Accounts / Arrears", "Arrears Follow-up", [["ARR-4101", "Vivaan Mehta", "I B", "MWK 4,300", "Parent called", "Review"], ["ARR-4102", "Riya Verma", "II B", "MWK 2,700", "SMS sent", "Pending"], ["ARR-4103", "Ishaan Bansal", "VI A", "MWK 6,200", "Director review", "Review"], ["ARR-4104", "Neha Gupta", "IX A", "MWK 1,800", "Payment plan", "Pending"]]],
    "daily-collections": ["Daily Collections", "Fees & Accounts / Daily Collections", "Daily Collection Register", [["DAY-0615", "Standard 1", "Term 1 · 42 students", "MWK 72,000", "Cash", "Ready"], ["DAY-0615-M", "Standard 3", "Term 1 · 81 students", "MWK 118,000", "Mobile Money", "Ready"], ["DAY-0615-B", "Standard 4", "Term 2 · 18 students", "MWK 55,000", "Bank Transfer", "Ready"]]],
    "term-collections": ["Term Collections", "Fees & Accounts / Term Collections", "Term Collection Summary", [["TERM-1-F1", "Standard 1", "Term 1 · 186 students", "MWK 4,820,000", "Tuition Fee", "Ready"], ["TERM-1-F2", "Standard 2", "Term 1 · 174 students", "MWK 930,000", "Activities Fee", "Ready"], ["TERM-2-F3", "Standard 3", "Term 2 · 206 students", "MWK 710,000", "Uniform Fee", "Pending"], ["TERM-2-F4", "Standard 4", "Term 2 · 246 students", "MWK 1,200,000", "Tuition Fee", "Ready"]]]
  };
  const [title, crumbs, heading, rows] = map[kind];
  return inventoryTablePage(title, crumbs, heading, ["ID", "Student / Type", "Class / Count", "Amount", "Notes", "Status"], rows);
}

function collectionTypes() { return [...new Set(['Tuition Fee','Uniform Fee','School Bus Fee','Trip Fee',...(backendData.payments||[]).map(p=>p.fee_type),...(backendData.balances||[]).map(b=>b.fee_type)])]; }
let collectionDate='';
function collectionPayments(type, date='', className='') { return (backendData.payments||[]).filter(p=>p.status==='Paid'&&(!type||p.fee_type===type)&&(!date||p.paid_at?.slice(0,10)===date)&&(!className||p.student?.class_name===className)); }
function termCollectionsPage() { return collectionSummaryPage(false); }
function dailyCollectionsPage() { return collectionSummaryPage(true); }
function collectionSummaryPage(daily) {
  const date=daily?(collectionDate||backendData.server_date||new Date().toISOString().slice(0,10)):'';
  return `${pageHead(daily?'Daily Collections':'Term Collections',`${activeAcademicYear()} / ${activeTerm()}`)}${periodNotice()}<section class="section-panel"><div class="section-toolbar"><h2>Collections by Payment Type</h2><div class="collection-summary-actions">${daily?`<label>Date <input class="select" type="date" value="${date}" onchange="collectionDate=this.value;app()"></label>`:'<span class="muted">Open a class to filter by month or week.</span>'}</div></div><div class="table-wrap"><table><thead><tr><th>Payment Type</th><th>Payments</th><th>Collected</th><th>View Classes</th></tr></thead><tbody>${collectionTypes().map((type,i)=>{const rows=collectionPayments(type,date);return `<tr><td>${escapeHtml(type)}</td><td>${rows.length}</td><td>${money(rows.reduce((n,p)=>n+Number(p.amount),0))}</td><td><button class="icon-mini" title="View classes for ${escapeHtml(type)}" onclick="openCollectionClasses(${i},'${date}')">${icon('eye',16)}</button></td></tr>`;}).join('')}</tbody></table></div></section>`;
}
function openCollectionClasses(index,date) {
  const type=collectionTypes()[index];
  openModal(`${escapeHtml(type)} — ${escapeHtml(date||activeTerm())}`,`<div class="collection-modal-meta"><span>${escapeHtml(activeAcademicYear())} · ${activeTerm()}</span></div><div class="table-wrap"><table><thead><tr><th>Class</th><th>Payments</th><th>Collected</th><th>View</th></tr></thead><tbody>${excelClasses.map((name,i)=>{const rows=collectionPayments(type,date,name);return `<tr><td>${name}</td><td>${rows.length}</td><td>${money(rows.reduce((n,p)=>n+Number(p.amount),0))}</td><td><button class="icon-mini" title="View ${name} collections" onclick="openCollectionClass(${index},'${date}',${i})">${icon('eye',16)}</button></td></tr>`;}).join('')}</tbody></table></div>`,'wide');
}
function collectionExportButtons(index=-1,date='',classIndex=-1,month='',week='',scope='entries') {
  const args=`${index},'${date}',${classIndex},'${month}','${week}','${scope}'`;
  return `<span class="collection-export-tools" role="group" aria-label="Report actions"><button class="icon-mini" title="Print this report" aria-label="Print this report" onclick="exportCollectionReport('print',${args})">${icon('printer',16)}</button><button class="icon-mini" title="Export this report to Excel" aria-label="Export this report to Excel" onclick="exportCollectionReport('excel',${args})">${icon('file-chart',16)}</button></span>`;
}
function collectionReportData(index,date,classIndex,month,week,scope) {
  const type=index<0?'':collectionTypes()[index],name=classIndex<0?'':excelClasses[classIndex];
  const payments=collectionRangePayments(collectionPayments(type,date,name),month,week);
  const sum=rows=>rows.reduce((n,p)=>n+Number(p.amount),0);
  let headers,rows;
  if(scope==='types') {headers=['Payment Type','Payments','Collected (MWK)'];rows=collectionTypes().map(t=>{const items=payments.filter(p=>p.fee_type===t);return [t,items.length,sum(items)];});}
  else if(scope==='classes') {headers=['Class','Payments','Collected (MWK)'];rows=excelClasses.map(c=>{const items=payments.filter(p=>p.student?.class_name===c);return [c,items.length,sum(items)];});}
  else if(scope==='months') {headers=['Month','Payments','Collected (MWK)'];rows=[...new Set(payments.map(p=>p.paid_at?.slice(0,7)||'Date not recorded'))].sort().map(m=>{const items=payments.filter(p=>(p.paid_at?.slice(0,7)||'Date not recorded')===m);return [m,items.length,sum(items)];});}
  else {headers=['Receipt','Student','Class','Payment Type','Date','Method','Amount (MWK)'];rows=payments.map(p=>[p.receipt_no,`${p.student?.first_name||''} ${p.student?.last_name||''}`.trim(),p.student?.class_name||'Not recorded',p.fee_type,p.paid_at?.slice(0,10)||'Not recorded',p.method||'Not recorded',Number(p.amount)]);}
  const period=[activeAcademicYear(),activeTerm(),date&&'Date: '+date,month&&'Month: '+month,week&&'Week starting: '+week+' (Mon–Sun)'].filter(Boolean).join(' · ');
  return {title:[name,type,scope==='months'?'Monthly Collection Summary':'Collection Report'].filter(Boolean).join(' — '),period,headers,rows,total:sum(payments),count:payments.length};
}
function exportCollectionReport(kind,index,date,classIndex,month,week,scope) {
  const report=collectionReportData(index,date,classIndex,month,week,scope);
  const cell=value=>typeof value==='number'?`<td class="number">${value}</td>`:`<td class="text">${escapeHtml(value??'')}</td>`;
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(report.title)}</title><style>@page{size:A4 landscape;margin:12mm}body{font:11px Arial;color:#17213d}h1{font-size:18px;margin:0 0 6px}h2{font-size:14px;margin:0 0 8px}p{margin:6px 0 12px}table{width:100%;border-collapse:collapse;table-layout:fixed}th,td{border:1px solid #ccd3df;padding:7px;text-align:left;overflow-wrap:anywhere}th{background:#eef5f0}thead{display:table-header-group}tr{break-inside:avoid}.number{text-align:right;font-variant-numeric:tabular-nums}.text{mso-number-format:"\\@"}</style></head><body><h1>Excel Primary School</h1><h2>${escapeHtml(report.title)}</h2><p>${escapeHtml(report.period)}</p><p>${report.count} payments · Total collected: <strong>${money(report.total)}</strong></p><table><thead><tr>${report.headers.map(h=>`<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${report.rows.map(row=>`<tr>${row.map(cell).join('')}</tr>`).join('')||`<tr><td colspan="${report.headers.length}">No collections for the selected dates.</td></tr>`}</tbody></table></body></html>`;
  if(kind==='print') {
    const win=window.open('','_blank');if(!win){showToast('Allow pop-ups to print this report');return;}
    win.document.write(html);win.document.close();win.focus();win.print();
  } else {
    const link=document.createElement('a'),url=URL.createObjectURL(new Blob([html],{type:'application/vnd.ms-excel'}));
    link.href=url;link.download=[report.title,activeAcademicYear(),activeTerm(),date,month,week].filter(Boolean).join('-').replace(/[^a-z0-9-]+/gi,'-').toLowerCase()+'.xls';
    document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
}

function collectionWeekStart(date) {
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date||''))return '';
  const day=new Date(date+'T00:00:00Z');
  day.setUTCDate(day.getUTCDate()-((day.getUTCDay()+6)%7));
  return day.toISOString().slice(0,10);
}
function collectionRangePayments(rows,month='',week='') {
  return rows.filter(p=>(!month||p.paid_at?.slice(0,7)===month)&&(!week||collectionWeekStart(p.paid_at?.slice(0,10))===week));
}
function openCollectionClass(index,date,classIndex,month='',week='') {
  const type=collectionTypes()[index],name=excelClasses[classIndex],all=collectionPayments(type,date,name);
  const rows=collectionRangePayments(all,month,week);
  const months=[...new Set(all.map(p=>p.paid_at?.slice(0,7)).filter(Boolean))].sort();
  const weeks=[...new Set(collectionRangePayments(all,month).map(p=>collectionWeekStart(p.paid_at?.slice(0,10))).filter(Boolean))].sort();
  const controls=date?'':`<div class="collection-range-filters"><label>Month<select class="select" onchange="openCollectionClass(${index},'',${classIndex},this.value,'')"><option value="">All months</option>${months.map(m=>`<option value="${m}" ${month===m?'selected':''}>${new Date(m+'-01T00:00:00').toLocaleDateString('en-GB',{month:'long',year:'numeric'})}</option>`).join('')}</select></label><label>Week<select class="select" onchange="openCollectionClass(${index},'',${classIndex},'${month}',this.value)"><option value="">All weeks</option>${weeks.map(w=>`<option value="${w}" ${week===w?'selected':''}>Week of ${w} (Mon–Sun)</option>`).join('')}</select></label><button class="btn ghost" onclick="openCollectionClass(${index},'',${classIndex})">Clear filters</button></div>`;
  const summary=!date&&!month&&!week?`<details class="collection-month-summary"><summary>Monthly totals</summary><div class="collection-month-actions">${collectionExportButtons(index,date,classIndex,month,week,'months')}</div><table><thead><tr><th>Month</th><th>Payments</th><th>Collected</th></tr></thead><tbody>${months.map(m=>{const entries=collectionRangePayments(all,m);return `<tr><td><button class="text-link" onclick="openCollectionClass(${index},'',${classIndex},'${m}')">${m}</button></td><td>${entries.length}</td><td>${money(entries.reduce((n,p)=>n+Number(p.amount),0))}</td></tr>`;}).join('')||'<tr><td colspan="3">No dated payments.</td></tr>'}</tbody></table></details>`:'';
  const content=`<table class="collection-entry-table"><colgroup><col style="width:21%"><col style="width:25%"><col style="width:17%"><col style="width:17%"><col style="width:20%"></colgroup><thead><tr><th>Receipt</th><th>Student</th><th>Date</th><th>Method</th><th>Amount</th></tr></thead><tbody>${rows.map(p=>`<tr><td><span class="compact-receipt" tabindex="0" title="${escapeHtml(p.receipt_no)}" aria-label="Receipt ${escapeHtml(p.receipt_no)}">${escapeHtml(p.receipt_no)}</span></td><td>${escapeHtml((p.student?.first_name||'')+' '+(p.student?.last_name||''))}</td><td>${escapeHtml(p.paid_at?.slice(0,10)||'Not recorded')}</td><td>${escapeHtml(p.method||'Not recorded')}</td><td>${money(p.amount)}</td></tr>`).join('')||'<tr><td colspan="5">No collections for the selected dates.</td></tr>'}</tbody></table>`;
  openModal(`${name} — ${escapeHtml(type)}`,`<div class="collection-modal-meta"><span>${escapeHtml(activeAcademicYear())} · ${activeTerm()}${date?' · '+escapeHtml(date):''}</span><button class="btn ghost" onclick="openCollectionClasses(${index},'${date}')">Back to classes</button></div>${controls}<div class="collection-class-total"><span>${rows.length} payments</span><span class="collection-total-actions"><strong>${money(rows.reduce((n,p)=>n+Number(p.amount),0))}</strong>${collectionExportButtons(index,date,classIndex,month,week)}</span></div>${summary}<div class="table-wrap">${content}</div>`,'wide collection-detail-modal');
}

function dailyReportPayments(date) {
  const payments = (backendData.payments || []).filter((payment) => payment.status === "Paid" && payment.paid_at?.slice(0, 10) === date);
  return payments;
}

function openDailyReport(date) {
  const payments = dailyReportPayments(date);
  const total = payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
  openModal("Daily Collection Report", `<section class="collection-report"><header><div><strong>Excel Primary School</strong><span>Daily Fees Collection Report</span></div><b>${new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</b></header><div class="report-summary"><span><small>Payments</small><strong>${payments.length}</strong></span><span><small>Total collected</small><strong>${money(total)}</strong></span><span><small>Methods</small><strong>${new Set(payments.map((payment) => payment.method)).size}</strong></span></div><table><thead><tr><th>Receipt</th><th>Student</th><th>Fee Type</th><th>Term</th><th>Method</th><th>Amount</th></tr></thead><tbody>${payments.map((payment) => `<tr><td>${payment.receipt_no}</td><td>${payment.student ? `${payment.student.first_name} ${payment.student.last_name}` : "Student"}</td><td>${payment.fee_type}</td><td>${payment.term || "Term 1"}</td><td>${payment.method}</td><td>${money(payment.amount)}</td></tr>`).join("")}</tbody></table></section>`, "wide");
}

function downloadDailyReport(date) {
  const payments = dailyReportPayments(date);
  const rows = payments.map((payment) => { const paidAt = dateTimeParts(payment.paid_at); return `<tr><td>${payment.receipt_no}</td><td>${payment.student ? `${payment.student.first_name} ${payment.student.last_name}` : "Student"}</td><td>${payment.student?.class_name || "N/A"}</td><td>${payment.fee_type}</td><td>${payment.term || "Term 1"}</td><td>${payment.academic_year || activeAcademicYear()}</td><td>${payment.amount}</td><td>${payment.balance_after || 0}</td><td>${payment.method}</td><td>${paidAt.date}</td><td>${paidAt.time}</td><td>${payment.status}</td><td>${payment.notes || ""}</td></tr>`; }).join("");
  const workbook = `<html><head><meta charset="utf-8"><style>table{border-collapse:collapse;font:12px Arial}th{background:#18783e;color:#fff}th,td{border:1px solid #aaa;padding:8px}</style></head><body><h2>Excel Primary School — Daily Collections</h2><p>${date}</p><table><thead><tr><th>Receipt</th><th>Student</th><th>Class</th><th>Fee Type</th><th>Term</th><th>Academic Year</th><th>Amount</th><th>Balance After</th><th>Method</th><th>Date</th><th>Time</th><th>Status</th><th>Notes</th></tr></thead><tbody>${rows}</tbody></table></body></html>`;
  const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([workbook], { type: "application/vnd.ms-excel" })); link.download = `excel-primary-daily-collections-${date}.xls`; link.click(); URL.revokeObjectURL(link.href);
}

function examPage(kind) {
  const map = {
    "exam-lists": ["Candidate Lists", "Exams Management / Candidate Lists", "Exam Candidate Lists", [["EXL-2026-F1", "Standard 1", "186 candidates", "Mid Term", "Excel + PDF", "Ready"], ["EXL-2026-F2", "Standard 2", "174 candidates", "Mid Term", "Excel + PDF", "Ready"], ["EXL-2026-F3", "Standard 3", "206 candidates", "Mock", "Excel + PDF", "Pending"], ["EXL-2026-F4", "Standard 4", "246 candidates", "MSCE Prep", "Excel + PDF", "Ready"]]],
    "eligible-students": ["Eligible Students", "Exams Management / Eligible Students", "Eligibility Register", [["ELG-001", "Roshni Negi", "III A", "Fees cleared", "Candidate no issued", "Eligible"], ["ELG-002", "Akash Rawat", "IV B", "Balance remains", "No candidate no", "Hold"], ["ELG-003", "Aarav Sharma", "III A", "Fees cleared", "Candidate no issued", "Eligible"], ["ELG-004", "Vivaan Mehta", "I B", "Missing admission file", "Records office", "Review"]]],
    "exam-export": ["Excel / PDF Export", "Exams Management / Export", "Export Queue", [["EXP-901", "Standard 4 Candidate List", "Excel", "Exams Officer", "Generated today", "Ready"], ["EXP-900", "Standard 3 Candidate List", "PDF", "Exams Officer", "Generated today", "Ready"], ["EXP-899", "Eligibility Hold List", "Excel", "Director", "Pending approval", "Pending"]]],
    "exam-settings": ["Exam Settings", "Exams Management / Exam Settings", "Exam Configuration", [["SET-01", "Mid Term", "Term 2", "Open", "Eligibility required", "Active"], ["SET-02", "Mock Exams", "Term 3", "Draft", "Director approval", "Pending"], ["SET-03", "Final Exams", "Term 3", "Draft", "Fees clearance", "Pending"]]],
    "exam-types": ["Exam Types", "Academic Records / Exam Types", "Exam Types", [["TYPE-01", "Mid Term", "All classes", "Term 1 and 2", "Continuous assessment", "Active"], ["TYPE-02", "Mock Exam", "Standard 4", "Term 3", "MSCE readiness", "Active"], ["TYPE-03", "Final Exam", "All classes", "Term 3", "Promotion decision", "Active"]]]
  };
  const [title, crumbs, heading, rows] = map[kind];
  return inventoryTablePage(title, crumbs, heading, ["ID", "Name", "Scope", "Period", "Notes", "Status"], rows);
}

function setupPage(kind) {
  const classTeachers = Array(10).fill("Not assigned");
  const map = {
    classes: ["Classes", "Academic Setup / Classes", "Class Setup", excelClasses.map((name, index) => [`CLS-${String(index + 1).padStart(2, "0")}`, name, classTeachers[index], index < 2 ? "Preschool" : "Primary", `${145 + index * 11} learners`])],
    subjects: ["Subjects", "Academic Setup / Subjects", "Primary Subject Setup", [["SUB-01", "English", "Core", "Standards 1–8", "Primary", "Active"], ["SUB-02", "Chichewa", "Core", "Standards 1–8", "Primary", "Active"], ["SUB-03", "Mathematics", "Core", "Standards 1–8", "Primary", "Active"], ["SUB-04", "Science and Technology", "Core", "Standards 1–8", "Primary", "Active"], ["SUB-05", "Social Studies", "Core", "Standards 1–8", "Primary", "Active"], ["SUB-06", "Life Skills", "Core", "Standards 1–8", "Primary", "Active"], ["SUB-07", "Expressive Arts", "Practical", "All classes", "Primary", "Active"], ["SUB-08", "Agriculture", "Practical", "Standards 3–8", "Primary", "Active"]]],
    "academic-years": ["Academic Years", "Academic Setup / Academic Years", "Academic Calendar", [["AY-2026", academicYearLabel(), "Open", "3 terms", "Current year", "Active"], ["AY-2025", "2025 / 2026", "Closed", "3 terms", "Archived", "Completed"]]],
    terms: ["Terms", "Academic Setup / Terms", "Term Setup", [["TRM-01", "Term 1", "Open", "Jan - Apr", "Fees active", "Active"], ["TRM-02", "Term 2", "Draft", "May - Aug", "Exam setup", "Pending"], ["TRM-03", "Term 3", "Draft", "Sep - Dec", "Promotion setup", "Pending"]]]
  };
  const [title, crumbs, heading, rows] = map[kind];
  if (kind === "classes") return classesPage(rows);
  return inventoryTablePage(title, crumbs, heading, ["ID", "Name", "Status / Type", "Scope", "Notes", "State"], rows);
}

function classesPage() {
  return `${pageHead('Classes', `Classes / ${activeAcademicYear()} / ${activeTerm()}`, `<a class="btn ghost" href="#/class-register">Class Registers</a>`)}${periodNotice()}
  <section class="section-panel"><div class="section-toolbar"><h2>Class Enrollment</h2><input class="select" type="search" placeholder="Search classes" oninput="filterTableRows(this, '.classes-table')"></div><div class="table-wrap"><table class="classes-table"><thead><tr><th>Class</th><th>Level</th><th>Students</th><th>View / Print / Excel</th></tr></thead><tbody>${excelClasses.map((name,index)=>`<tr><td>${name}</td><td>${index<2?'Preschool':'Primary'}</td><td>${(backendData.students||[]).filter(s=>s.class_name===name).length}</td><td><span class="row-tools"><button class="icon-mini" title="View ${name}" onclick="openClassStudents('${name}')">${icon('eye',16)}</button>${classExportButtons(name)}</span></td></tr>`).join('')}</tbody></table></div></section>`;
}

function openClassStudents(className) {
  openModal(`${escapeHtml(className)} — ${escapeHtml(activeAcademicYear())} — ${activeTerm()}`, `<div class="class-modal-actions"><input class="select" type="search" placeholder="Search student or admission number" aria-label="Search class students" oninput="filterTableRows(this, '.class-student-table')"><div class="filters">${classExportButtons(className, true)}</div></div><div class="table-wrap class-table-scroll" tabindex="0" aria-label="Scrollable class student table">${classStudentTable(className)}</div>`, 'class-register-modal');
}

function adminPage(kind) {
  const map = {
    users: ["Users", "System Administration / Users", "System Users", [["USR-001", "System Admin", "Super Admin", "admin@excelprimaryschool.org", "MFA enabled, break-glass only", "Active"], ["USR-002", "School Director", "Director", "director@excelprimaryschool.org", "Leadership workspace", "Active"], ["USR-003", "Accounts Desk", "School Manager", "finance@excelprimaryschool.org", "Fees and receipts", "Active"], ["USR-004", "Admissions Desk", "Admissions Officer", "admissions@excelprimaryschool.org", "Admissions and guardians", "Active"], ["USR-005", "Exams Office", "Exams Officer", "exams@excelprimaryschool.org", "Candidate lists", "Active"], ["USR-006", "Teacher Demo", "Teacher", "teacher@excelprimaryschool.org", "Assigned classes", "Active"]]],
    roles: ["Roles & Permissions", "System Administration / Roles", "Role Permissions", [["ROLE-01", "Super Admin", "Technical administration", "Users, roles, settings, maintenance", "Restricted", "Active"], ["ROLE-02", "Director", "School leadership", "Operations, reports, approvals, read-only audit", "Approve + review", "Active"], ["ROLE-03", "School Manager", "Cash office", "Payments, receipts, balances", "Create + export", "Active"], ["ROLE-04", "Admissions Officer", "Admissions desk", "Students, guardians, enrollment reports", "Create + update", "Active"], ["ROLE-05", "Exams Officer", "Exams desk", "Candidate lists, eligibility, exports", "Create + submit", "Active"], ["ROLE-06", "Teacher", "Classroom", "Assigned learners and teaching records", "Read + update own", "Active"]]],
    "audit-logs": ["Audit Logs", "Governance / Audit Logs", "Recent Audit Logs", [["AUD-9001", "Payment edit requested", "School Manager", "Receipt RCPT-7819", "Director approval required", "Review"], ["AUD-9000", "Student record updated", "Admissions Officer", "ADM-2026-004", "Documents added", "Completed"], ["AUD-8999", "Exam export generated", "Exams Officer", "EXP-901", "PDF + Excel", "Completed"], ["AUD-8998", "Role viewed", "Director", "School Manager", "No change", "Completed"], ["AUD-8997", "Backup completed", "Super Admin", "database.sqlite", "Encrypted copy stored", "Ready"]]],
    "system-settings": ["System Settings", "System Administration / System Settings", "System Settings", [["SET-SCH", "School Profile", "Excel Primary School", "Logo, address, motto", "Configured", "Active"], ["SET-SEC", "Security Policy", "Super Admin", "Password, session, MFA rules", "Strict", "Active"], ["SET-AYR", "Academic Year", academicYearLabel(), "Current calendar and terms", "Open", "Active"], ["SET-NOT", "Notifications", "Email/SMS", "Parent and staff alerts", "Queue healthy", "Ready"], ["SET-INT", "Integrations", "Payments/SMS", "API keys stored securely", "Review", "Review"]]],
    "admin-maintenance": ["Database / Admin Maintenance", "System Administration / Maintenance", "Maintenance Console", [["MAINT-01", "Database Backup", "database.sqlite", "Create encrypted backup before upgrades", "Ready", "Ready"], ["MAINT-02", "Clear Laravel Cache", "config/routes/views", "Refresh deployment cache", "Manual", "Ready"], ["MAINT-03", "Storage Link", "public storage", "Verify document access", "Healthy", "Active"], ["MAINT-04", "Composer Packages", "vendor", "Review updates in staging first", "Locked", "Review"], ["MAINT-05", "Audit Retention", "12 months", "Export compliance logs", "Scheduled", "Active"]]]
  };
  const [title, crumbs, heading, rows] = map[kind];
  return inventoryTablePage(title, crumbs, heading, ["ID", "Record", "Owner", "Scope", "Notes", "Status"], rows);
}

function approvalsPage() { return `${pageHead('Change Approvals','Student & Guardian Changes')}${approvalQueuePanel()}`; }
function approvalQueuePanel() {
  const rows=backendData.approval_requests||[];
  return `<section class="section-panel"><div class="section-toolbar"><h2>Pending Approval <span class="nav-count">${rows.length}</span></h2><input class="select" type="search" aria-label="Search approval requests" placeholder="Search student, ID or requester" oninput="filterTableRows(this,'.approval-table')"></div><div class="table-wrap"><table class="approval-table"><thead><tr><th>Admission No.</th><th>Student</th><th>Requested By</th><th>Request</th><th>Action</th></tr></thead><tbody>${rows.map(s=>`<tr><td>${escapeHtml(s.admission_no||'Pending')}</td><td>${escapeHtml(s.first_name+' '+s.last_name)}</td><td>${escapeHtml(s.pending_change_requested_by||s.created_by_role||'Not recorded')}</td><td>${s.status==='Pending Approval'?'New admission':'Student / guardian edit'}</td><td>${["Director","Super Admin"].includes(currentRole())?`<button class="btn primary small-btn" onclick="reviewRecordChange(${s.id})">Review changes</button>`:'<span class="badge amber">Waiting for Director</span>'}</td></tr>`).join('')||'<tr><td colspan="5">No requests awaiting approval.</td></tr>'}</tbody></table></div></section>`;
}
async function reviewRecordChange(id) {
  let result;
  try { result=await apiRequest(`/students/${id}/review`); }
  catch(error) {showToast('Preview unavailable',error.message,'error');return;}
  const s=result.student;
  const changes=s.pending_changes||{};
  const before=key=>key.startsWith('guardian_')?s.guardian?.[key.slice(9)]:s[key];
  const fields=Object.keys(changes).filter(k=>!['section','tuition_fee'].includes(k)&&String(changes[k]??'').trim()!==String(before(k)??'').trim());
  openModal('Review Student / Guardian Request',`<p>${escapeHtml(s.admission_no||'')} · ${escapeHtml(s.first_name+' '+s.last_name)}</p><div class="table-wrap"><table class="change-preview-table"><thead><tr><th>Field</th><th>Current</th><th>Requested</th></tr></thead><tbody>${fields.map(key=>`<tr><td>${escapeHtml(key.replaceAll('_',' '))}</td><td>${escapeHtml(before(key)||'Not recorded')}</td><td>${escapeHtml(changes[key]||'Not recorded')}</td></tr>`).join('')||(s.status==='Pending Approval'?`<tr><td>New admission</td><td>Awaiting approval</td><td>${escapeHtml(s.class_name)} · Guardian: ${escapeHtml(s.guardian?.name||'Not recorded')}</td></tr>`:'<tr><td colspan="3">No differences remain. The requested values already match the current record.</td></tr>')}</tbody></table></div><button class="btn primary" onclick="confirmReviewedAdmission(${id},'${result.review_token}',this)">Approve request</button>`,'wide');
}
async function refreshInbox() {
  if(!backendLoaded||route()==='login'||document.hidden||inboxRefreshing)return;
  inboxRefreshing=true;
  const loadId=backendLoadId;
  try {
    const inbox=await apiRequest('/inbox');
    if(route()==='login'||loadId!==backendLoadId)return;
    Object.assign(backendData,inbox);
    const sidebarElement=document.querySelector('.sidebar');
    if(sidebarElement){const top=sidebarElement.scrollTop;sidebarElement.outerHTML=sidebar(route());document.querySelector('.sidebar').scrollTop=top;}
    const wrapper=document.querySelector('.notification-wrap');
    if(wrapper){const open=!!wrapper.querySelector('.notification-dropdown.open');wrapper.outerHTML=notificationDropdown();if(open)document.getElementById('notification-dropdown')?.classList.add('open');}
    if(['approvals','notifications'].includes(route())&&!document.querySelector('.modal-card')&&document.activeElement?.tagName!=='INPUT')document.querySelector('.content').innerHTML=route()==='approvals'?approvalsPage():notificationsPage();
  } catch(error) { if(error.status===401){backendLoaded=false;location.hash='#/login';} }
  finally {inboxRefreshing=false;}
}
let inboxRefreshing=false;
setInterval(refreshInbox,15000);
window.addEventListener('focus',refreshInbox);

function notificationsPage() {
  const role = currentRole();
  const available = backendData.notifications||[];
  const visible = available.filter((item) => !item.target_role || item.target_role === role);
  const rows = visible.map((item, index) => [`NOT-${String(index + 1).padStart(4, "0")}`, item.title, item.target_role || "All Staff", item.body, item.type || "info", item.read_at ? "Completed" : "Pending"]);
  return inventoryTablePage("Notifications", "Communication / Notifications", "Notification Center", ["ID", "Title", "Audience", "Message", "Type", "Status"], rows);
}

function suppliesPage() {
  const rows = [["SUP-2401", "Printer Paper A4", "Stationery", "420 packs", "120 packs", "Active"], ["SUP-2402", "Whiteboard Markers", "Classroom", "180 boxes", "40 boxes", "Active"], ["SUP-2403", "Chemistry Lab Glassware", "Laboratory", "48 sets", "12 sets", "Low Stock"], ["SUP-2404", "Sports Cones", "Sports", "90 pieces", "15 pieces", "Active"], ["SUP-2405", "Exam Booklets", "Exams", "2,400", "800", "Active"], ["SUP-2406", "First Aid Kits", "Health", "28 kits", "8 kits", "Low Stock"]];
  return inventoryTablePage("Supplies", "Inventory Management / Supplies", "Manage Supplies", ["ID", "Item", "Category", "Available", "Minimum", "Status"], rows);
}

function purchasePage() {
  const rows = [["PO-1008", "Lab Reagents", "Science Dept", "MWK 45,000", "12 Jun 2026", "Pending"], ["PO-1007", "Library Books", "Academics", "MWK 72,000", "10 Jun 2026", "Approved"], ["PO-1006", "Printer Toner", "Administration", "MWK 18,000", "08 Jun 2026", "Received"], ["PO-1005", "Football Kits", "Sports", "MWK 32,500", "05 Jun 2026", "Approved"], ["PO-1004", "Cleaning Supplies", "Operations", "MWK 24,800", "03 Jun 2026", "Received"]];
  return inventoryTablePage("Purchase", "Inventory Management / Purchase", "Purchase Orders", ["PO ID", "Item", "Department", "Amount", "Date", "Status"], rows);
}

function stockAlertsPage() {
  return `${pageHead("Stock Alerts", "Dashboard / Inventory Management / Stock Alerts", `<button class="btn primary">⊕ Create Alert</button>`)}
    <section class="section-panel"><div class="section-toolbar"><h2>Inventory Alerts</h2><div class="filters"><button class="pill">Critical Only</button><button class="pill">↕ Sort By A-Z</button></div></div><div class="section-body"><div class="inventory-list">
      ${[["Chemistry Lab Glassware", 88, "Only 8 sets left", "blue"], ["Printer Paper A4", 78, "Only 20 packs left", "cyan"], ["Whiteboard Markers", 80, "Only 12 boxes left", "green"], ["Sports Equipment", 66, "Only 5 sets left", "amber"], ["First Aid Kits", 40, "Only 3 kits left", "red"]].map(([name, pct, left, color]) => `<div class="inventory-row"><strong>${name}</strong><div class="track ${color}"><span class="fill" style="width:${pct}%"></span></div><span>${left}</span></div>`).join("")}
    </div></div></section>`;
}

function healthRecordsPage() {
  const rows = [["HR-0921", "Roshni Negi", "III A", "Asthma", "Active Plan", "Updated"], ["HR-0920", "Akash Rawat", "IV B", "None", "Cleared", "Updated"], ["HR-0919", "Aarav Sharma", "III A", "Peanut Allergy", "Active Plan", "Review"], ["HR-0918", "Vivaan Mehta", "I B", "Vision Support", "Monitoring", "Updated"], ["HR-0917", "Riya Verma", "II B", "None", "Cleared", "Updated"]];
  return inventoryTablePage("Health Records", "Health & Safety Management / Health Records", "Student Health Records", ["ID", "Student", "Class", "Condition", "Care Status", "Status"], rows);
}

function incidentReportsPage() {
  const rows = [["INC-118", "Playground fall", "Minor", "Open", "12 Jun 2026", "Review"], ["INC-117", "Lab spill", "Moderate", "Closed", "08 Jun 2026", "Resolved"], ["INC-116", "Bus delay", "Low", "Closed", "04 Jun 2026", "Resolved"], ["INC-115", "Sports injury", "Moderate", "Open", "02 Jun 2026", "Review"]];
  return inventoryTablePage("Incident Reports", "Health & Safety Management / Incident Reports", "Incident Reports", ["ID", "Incident", "Severity", "State", "Date", "Status"], rows);
}

function safetyProtocolsPage() {
  const rows = [["SAFE-01", "Fire Drill", "Termly", "Admin Block", "Completed", "Active"], ["SAFE-02", "Lab Safety", "Monthly", "Science Labs", "Due Soon", "Active"], ["SAFE-03", "Bus Safety", "Weekly", "Transport", "Completed", "Active"], ["SAFE-04", "Emergency Assembly", "Termly", "All Campus", "Pending", "Review"]];
  return inventoryTablePage("Safety Protocols", "Health & Safety Management / Safety Protocols", "Safety Protocols", ["ID", "Protocol", "Frequency", "Area", "Progress", "Status"], rows);
}

function analyticsPage() {
  return financialReportsPage();
}

function financialReportsPage() {
  const rows=['Tuition Fee','Uniform Fee','School Bus Fee','Trip Fee'].map(type=>{
    const balances=(backendData.balances||[]).filter(b=>b.fee_type===type);
    const paid=(backendData.payments||[]).filter(p=>p.fee_type===type&&p.status==='Paid');
    return [type,money(balances.reduce((n,b)=>n+Number(b.amount_due),0)),money(paid.reduce((n,p)=>n+Number(p.amount),0)),money(balances.reduce((n,b)=>n+Number(b.balance),0)),String(paid.length),`${activeAcademicYear()} · ${activeTerm()}`];
  });
  return inventoryTablePage('Financial Reports',`${activeAcademicYear()} / ${activeTerm()}`,'Fee Collection Summary',['Fee Type','Assessed','Collected','Outstanding','Payments','Period'],backendData.period_opened?rows:[],false);
}

function enrollmentReportsPage() {
  const rows=excelClasses.map(name=>{
    const students=(backendData.students||[]).filter(s=>s.class_name===name);
    return [name,String(students.length),String(students.filter(s=>s.gender==='Female').length),String(students.filter(s=>s.gender==='Male').length),activeAcademicYear(),activeTerm()];
  });
  return inventoryTablePage('Enrollment Reports',`${activeAcademicYear()} / ${activeTerm()}`,'Enrollment by Class',['Class','Students','Female','Male','Academic Year','Term'],rows,false);
}

function academicProgressPage() {
  return reportDashboard("Academic Progress", "Reporting & Analytics / Academic Progress", [["Passing Rate", "85%", "green"], ["Average Score", "72%", "blue"], ["Needs Support", "148", "amber"], ["At Risk", "31", "red"]], "Academic Progress");
}

function complianceReportsPage() {
  const rows = [["COMP-41", "Audit Log Review", "Director", "Monthly", "Completed", "Ready"], ["COMP-40", "Payment Edit Approvals", "Accounts", "Weekly", "Pending", "Review"], ["COMP-39", "Student Data Completeness", "Admissions", "Termly", "Completed", "Ready"], ["COMP-38", "Exam Eligibility Rules", "Exams", "Termly", "Completed", "Ready"]];
  return inventoryTablePage("Compliance Reports", "Reporting & Analytics / Compliance Reports", "Compliance Reports", ["ID", "Report", "Owner", "Cycle", "Progress", "Status"], rows);
}

function inventoryTablePage(title, crumbs, heading, columns, rows, badgeLast = true) {
  return `${pageHead(title, `Dashboard / ${crumbs}`, tableActions())}
    <section class="section-panel">
      <div class="section-toolbar"><h2>${heading}</h2>${recordFilters()}</div>
      ${tableSearch()}
      <div class="table-wrap"><table><thead><tr>${columns.map((col) => `<th>${col}</th>`).join("")}<th>Action</th></tr></thead><tbody>
        ${rows.map((row) => `<tr>${row.map((cell, i) => i === 0 ? `<td><a>${cell}</a></td>` : badgeLast && i === row.length - 1 ? `<td><span class="badge ${statusClass(cell)}">• ${cell}</span></td>` : `<td>${cell}</td>`).join("")}<td>${actionIcons()}</td></tr>`).join("")}
      </tbody></table></div>${pagination()}
    </section>`;
}

function reportDashboard(title, crumbs, metrics, heading) {
  return `${pageHead(title, `Dashboard / ${crumbs}`, tableActions())}
    <div class="report-metrics">${metrics.map(([label, value, color]) => circleMetric(value, label, "Current term", color)).join("")}</div>
    <div class="grid two">
      <section class="card">${cardHead(heading, `<span class="muted">${academicYearLabel()}</span>`)}${bars()}</section>
      <section class="card">${cardHead("Key Actions", `<span class="muted">Priority</span>`)}<div class="request-list">${metrics.map(([label, value, color]) => `<article class="request-item"><div class="person-line"><span class="nav-icon">▦</span><div><strong>${label}</strong><span class="muted">${value} current value</span></div><span class="badge ${color}">View</span></div></article>`).join("")}</div></section>
    </div>`;
}

function statusClass(status) {
  const value = String(status || "").toLowerCase();
  if (["paid", "active", "approved", "received", "ready", "updated", "completed", "complete", "cleared", "resolved", "eligible", "submitted", "success", "successful"].includes(value)) return "green";
  if (["pending", "pending approval", "pending edit approval", "review", "in review", "low stock", "due soon", "monitoring", "partial", "draft", "in progress", "processing"].includes(value)) return "amber";
  if (["failed", "fail", "overdue", "arrears", "critical", "rejected", "declined", "void", "voided", "cancelled", "canceled", "hold", "blocked", "inactive"].includes(value)) return "red";
  return "red";
}

function circleMetric(value, title, subtitle, color) {
  return `<section class="card circle-metric"><span class="ring ${color}">${value}</span><div><h2>${title}</h2><p class="muted">${subtitle}</p></div></section>`;
}

function actionIcons() {
  const role = currentRole();
  const current = route();
  if (role === "Director" && current === "audit-logs") {
    return `<span class="row-tools"><button class="icon-mini" onclick="openDetailsModal('Audit Log','Read-only governance review')" title="view">${icon("eye", 16)}</button><button class="icon-mini" onclick="notifyAction('Audit export prepared','Read-only audit report is ready for download.')" title="download">${icon("download", 16)}</button></span>`;
  }
  const actionsByRole = {
    "Super Admin": ["eye", "settings", "database", "download"],
    "Director": current === "fees" || current === "receipts" || current === "student-balances" || current === "arrears" || current === "daily-collections" || current === "term-collections" ? ["eye", "receipt", "download"] : ["eye", "shield-check", "download"],
    "Admissions Officer": ["eye", "edit", "download"],
    "School Manager": ["eye", "receipt", "download"],
    "Exams Officer": ["eye", "clipboard-check", "download"],
    "Teacher": ["eye"]
  };
  const actions = actionsByRole[role] || ["eye"];
  return `<span class="row-tools">${actions.map((name) => {
    const handler = name === "receipt" ? "openPaymentModal()" : name === "download" ? "notifyAction('Export prepared','The selected record is ready for download.')" : name === "database" ? "notifyAction('Maintenance task queued','The selected maintenance task is ready for Super Admin confirmation.')" : name === "settings" ? "openDetailsModal('System Configuration','Review role, security, and school-level settings')" : `openDetailsModal('${labelForRoute(route())} Details','Selected school record')`;
    return `<button class="icon-mini" onclick="${handler}" title="${name}">${icon(name, 16)}</button>`;
  }).join("")}</span>`;
}

function tableActions() {
  const role = currentRole();
  const common = `<button class="icon-btn" title="Refresh" onclick="loadBackendData(true); showToast('Refreshed','Latest school records loaded.','success')">${icon("refresh")}</button>`;
  if (role === "Teacher") return `${common}<button class="btn ghost" onclick="openDetailsModal('Teacher Workspace','View only access for assigned classes')">${icon("eye")} View Only</button>`;
  if (role === "School Manager") return `${common}<button class="icon-btn" title="Print table" onclick="printFeesTable()">${icon("printer")}</button><button class="btn ghost" onclick="downloadVisibleTable('excel-primary-finance-export.csv')">${icon("download")} Export</button><button class="btn primary" onclick="openPaymentModal()">${icon("receipt")} Record Payment</button>`;
  if (role === "Admissions Officer") return `${common}<button class="btn ghost" onclick="notifyAction('Export prepared','Admissions register is ready for download.')">${icon("download")} Export</button><button class="btn primary" onclick="openAdmissionModal()">${icon("user-plus")} Register Student</button>`;
  if (role === "Exams Officer") return `${common}<button class="btn ghost" onclick="notifyAction('Export prepared','Candidate lists are ready for download.')">${icon("download")} Export</button><button class="btn primary" onclick="notifyAction('Exam list generated','A candidate list was generated for the selected class.')">${icon("file-chart")} Generate List</button>`;
  if (role === "Director") return `${common}<button class="icon-btn" title="Print table" onclick="printFeesTable()">${icon("printer")}</button><button class="btn ghost" onclick="downloadVisibleTable('excel-primary-director-export.csv')">${icon("download")} Export</button><button class="btn primary" onclick="openPaymentModal()">${icon("receipt")} Record Payment</button>`;
  if (role === "Super Admin") return `${common}<button class="btn ghost" onclick="notifyAction('Backup prepared','Database backup task is ready for confirmation.')">${icon("database")} Backup</button><button class="btn primary" onclick="openDetailsModal('System Configuration','Manage users, roles, security, and maintenance settings')">${icon("settings")} Configure</button>`;
  return `${common}<button class="icon-btn" title="Print" onclick="window.print()">${icon("printer")}</button><button class="btn ghost" onclick="notifyAction('Export prepared','The current report is ready for download.')">${icon("download")} Export</button>`;
}

function tableSearch() {
  return `<div class="section-toolbar"><div class="search"><input placeholder="Search"></div></div>`;
}

function pagination(perPage = "10") {
  return `<div class="table-footer table-pagination"><span>Pre <b>1</b> 2 <span>....</span> 20 <a>Next</a></span></div>`;
}

function placeholder(id) {
  const label = labelForRoute(id);
  return `${pageHead(label, `Dashboard / ${label}`, `<button class="btn primary">${icon("edit")} Add Record</button>`)}<section class="card pad"><h2>${label}</h2><p class="muted">This workspace is ready for its data forms, approval flow, and backend connection.</p></section>`;
}

function accessDeniedPage(id, role) {
  return `${pageHead("Access Restricted", `Dashboard / ${labelForRoute(id)}`, `<a class="btn ghost" href="#/dashboard">${icon("layout-dashboard")} Back to Dashboard</a>`)}
    <section class="card pad access-card">
      <span class="soft-icon red">${icon("shield", 34)}</span>
      <div>
        <h2>${role} cannot open ${labelForRoute(id)}</h2>
        <p class="muted">The sidebar is now role-based from the system document, so this page is hidden and blocked for your current account. Use Super Admin or the correct department account when you need this module.</p>
      </div>
    </section>`;
}

function page(current) {
  const role = currentRole();
  if (!routeAllowed(current, role)) return accessDeniedPage(current, role);
  if (current === "terms" || current === "academic-years") return termDatesPage();
  if (current === "class-register") return registerPage();
  if (current === "student-fee-accounts") return `${pageHead("Student Fee Accounts", `Fees Collection / ${activeAcademicYear()} / ${activeTerm()}`)}${periodNotice()}${studentRegisterPanel()}`;
  if (current === "class-promotions") return promotionPage();
  if (!backendData.students?.length && ['students','parents','analytics','financial-reports','enrollment-reports','academic-progress','student-report','exam-lists','eligible-students'].includes(current)) return `${pageHead(labelForRoute(current), `${activeAcademicYear()} / ${activeTerm()}`)}${periodNotice()}<section class="section-panel"><p class="section-note">No enrolled students or period records to display.</p></section>`;
  if (current === "dashboard") return dashboard();
  if (["students", "parents", "teachers"].includes(current)) return directoryPage(current);
  if (current === "admissions") return admissionsPage();
  if (["receipts", "student-balances", "arrears", "daily-collections", "term-collections"].includes(current)) return balancesPage(current);
  if (["exam-lists", "eligible-students", "exam-export", "exam-settings", "exam-types"].includes(current)) return examPage(current);
  if (["classes", "subjects", "academic-years", "terms"].includes(current)) return setupPage(current);
  if (["users", "roles", "audit-logs", "system-settings", "admin-maintenance"].includes(current)) return adminPage(current);
  if (current === "approvals") return approvalsPage();
  if (current === "notifications") return notificationsPage();
  if (current === "fees") return currentRole()==='School Manager'?financeDashboard():feesPage();
  if (current === "timetable") return timetablePage();
  if (["curriculum", "lesson-planning", "assessment", "learning-materials"].includes(current)) return curriculumPage(current);
  if (current === "staff") return staffProfilesPage();
  if (current === "payroll") return payrollPage();
  if (current === "leave") return leavePage();
  if (current === "performance") return performancePage();
  if (current === "parent-communication") return parentCommunicationPage();
  if (current === "messaging") return messagingPage();
  if (current === "student-report") return studentReportPage();
  if (current === "supplies") return suppliesPage();
  if (current === "purchase") return purchasePage();
  if (current === "stock-alerts") return stockAlertsPage();
  if (current === "health-records") return healthRecordsPage();
  if (current === "incident-reports") return incidentReportsPage();
  if (current === "safety-protocols") return safetyProtocolsPage();
  if (current === "analytics") return analyticsPage();
  if (current === "financial-reports") return financialReportsPage();
  if (current === "enrollment-reports") return enrollmentReportsPage();
  if (current === "academic-progress") return academicProgressPage();
  if (current === "compliance-reports") return complianceReportsPage();
  return placeholder(current);
}

let classRegisterData = { imports: [], entries: [], history: [], current_year: null };
let registerSheet = 'ALL';
let promotionPreview = null;
const retainedStudents = new Set();

function registerPage() {
  const className = registerSheet==='ALL'?'':registerSheet==='NURSERY'?'Nursery':registerSheet==='RECEPTION'?'Reception':registerSheet.replace('STD','Standard');
  return `${pageHead('Class Registers', `Registers / ${activeAcademicYear()} / ${activeTerm()}`)}${periodNotice()}
  <section class="section-panel"><div class="section-toolbar register-toolbar"><h2>${escapeHtml(className || 'All Classes')} — ${activeTerm()} · ${(backendData.students||[]).filter(s=>!className||s.class_name===className).length} pupils</h2><div class="filters"><input class="select" type="search" placeholder="Search name or admission number" aria-label="Search register" oninput="filterTableRows(this,'.class-student-table')"><select class="select" aria-label="Class" onchange="registerSheet=this.value; app()">${['ALL','NURSERY','RECEPTION',...Array.from({length:8},(_,i)=>`STD ${i+1}`)].map(name=>`<option value="${name}" ${name===registerSheet?'selected':''}>${name==='ALL'?'All Classes':name}</option>`).join('')}</select>${className ? classExportButtons(className,true) : '<span class="muted">Select a class to print or export.</span>'}</div></div><div class="table-wrap">${classStudentTable(className)}</div></section>`;
}

function nextPromotionClass(student, annual) {
  const completed=(classRegisterData.promotion_outcomes||[]).find(row=>row.student_id===student.id);
  if(annual&&completed)return completed.to_class;
  if (!annual || retainedStudents.has(student.id)) return student.class_name;
  const approvedPreview=promotionPreview?.rows.find(row=>row.student_id===student.id);
  if (approvedPreview) return approvedPreview.to_class;
  const index=excelClasses.indexOf(student.class_name);
  return index<0?'Class needs review':excelClasses[index+1]||'Graduated';
}

function promotionPage() {
  const year = classRegisterData.current_year;
  const term = classRegisterData.current_term || 'Term 3';
  const active = (classRegisterData.active_students || []).filter(s=>['Active','Approved'].includes(s.status)||(classRegisterData.promotion_outcomes||[]).some(r=>r.student_id===s.id));
  const selectedClass=rosterFilters.promotion.className;
  const completedClasses=(classRegisterData.class_approvals||[]).filter(c=>c.from_year===year);
  const classApproved=completedClasses.some(c=>c.class_name===selectedClass);
  const selectedCount=active.filter(s=>s.class_name===selectedClass).length;
  const annual = term==='Term 3';
  const allowedAnnual = ['Director','Super Admin'].includes(currentRole());
  const start = Number((year||'2025').slice(0,4))+1;
  const targetYear = annual?`${start} / ${start+1}`:year;
  const targetTerm = annual?'Term 1':term==='Term 1'?'Term 2':'Term 3';
  const targetDates=(classRegisterData.calendar||[]).find(t=>t.academic_year===targetYear&&t.term===targetTerm);
  return `${pageHead('Promotions & Terms', 'Academic / Promotions & Terms', '<a class="btn ghost" href="#/terms">Set Term Dates</a>')}
    <section class="section-panel"><div class="section-toolbar"><h2>Active: ${escapeHtml(year||'Not configured')} · ${term}</h2></div><div class="section-note">
    <p><strong>Next: ${escapeHtml(targetYear)} · ${targetTerm}</strong>${targetDates?.starts_on&&targetDates?.ends_on?` <span class="muted">· ${escapeHtml(targetDates.starts_on)} to ${escapeHtml(targetDates.ends_on)}</span>`:''}</p><p>${annual?'At the end of Term 3, promote classes: Nursery → Reception → Standard 1 → … → Standard 8 → Graduated. Director or Super Admin approves each class separately. The active year switches after all classes are processed.':'Advance to the next term in the same classes. Director, Super Admin or School Manager can approve.'}</p>
    <p>Set the closing and next term’s dates first. Opening the next period creates unpaid tuition of MWK 70,000 for preschool and MWK 75,000 for primary. Previous balances and payments stay in their original period. Uniform and bus charges are recorded when applicable.</p>
    <div class="promotion-action-row"><div class="promotion-primary-action">${annual ? allowedAnnual?`<button class="btn primary" ${classApproved||!selectedCount?'disabled':''} onclick="previewClassPromotion(this)">${classApproved?escapeHtml(selectedClass)+' — Approved':'Preview '+escapeHtml(selectedClass)+' Promotion'}</button>`:'<p>The Director or Super Admin must approve this annual class move.</p>' : `<label><input type="checkbox" id="term-confirm"> I confirm this term has ended and the ${active.length} active students should advance to ${targetTerm} with fresh unpaid tuition.</label><p><button class="btn primary" onclick="advanceSchoolTerm(this)">Approve Advance to ${targetTerm}</button></p>`}
    </div>${rosterFilterToolbar("promotion",true)}</div>
    ${annual && promotionPreview?`<p><strong>${promotionPreview.rows.filter(r=>r.outcome==='Promoted').length} promoted · ${promotionPreview.rows.filter(r=>r.outcome==='Retained').length} retained · ${promotionPreview.rows.filter(r=>r.outcome==='Graduated').length} graduating</strong></p><label><input type="checkbox" id="promotion-confirm"> I have reviewed ${escapeHtml(selectedClass)} and confirm the academic year has ended.</label><p><button class="btn primary" onclick="approveClassPromotion(this)">Approve ${escapeHtml(selectedClass)} Promotion</button></p>`:''}
    <p id="promotion-error" role="alert"></p></div>
    <div class="promotion-filter-summary"><span>${annual?'Approval applies only to '+escapeHtml(selectedClass)+'. '+completedClasses.length+' classes approved.':'Term advancement keeps students in their current classes.'} Retained selections stay saved when switching classes.</span><span data-roster-count="promotion"></span></div><div class="table-wrap"><table class="promotion-roster"><thead><tr>${annual&&allowedAnnual?'<th>Retain</th>':''}<th>Admission No.</th><th>Student</th><th>Current Class <small class="cell-stack">${escapeHtml(year)} · ${term}</small></th><th>Next Class <small class="cell-stack">${escapeHtml(targetYear)} · ${targetTerm}</small></th></tr></thead><tbody>${active.map(s=>`<tr data-class="${escapeHtml(s.class_name)}" data-gender="${escapeHtml(s.gender||'')}" data-status="${(annual&&(classRegisterData.promotion_outcomes||[]).find(r=>r.student_id===s.id)?.outcome)|| (retainedStudents.has(s.id)?'Retained':annual&&s.class_name==='Standard 8'?'Graduated':annual?'Promoted':'Continuing')}">${annual&&allowedAnnual?`<td><input type="checkbox" ${(classRegisterData.promotion_outcomes||[]).some(r=>r.student_id===s.id)?'disabled':''} aria-label="Retain ${escapeHtml(s.first_name+' '+s.last_name)}" ${retainedStudents.has(s.id)||(classRegisterData.promotion_outcomes||[]).some(r=>r.student_id===s.id&&r.outcome==='Retained')?'checked':''} onchange="this.checked?retainedStudents.add(${s.id}):retainedStudents.delete(${s.id});promotionPreview=null;app()"></td>`:''}<td>${escapeHtml(s.admission_no)}</td><td>${escapeHtml(s.first_name+' '+s.last_name)}</td><td>${escapeHtml(s.class_name)}</td><td>${escapeHtml(nextPromotionClass(s,annual))}${annual&&allowedAnnual&&(classRegisterData.promotion_outcomes||[]).some(r=>r.student_id===s.id)?` <button class="icon-mini" title="Edit approved decision" onclick="editPromotionDecision(${s.id})">${icon('edit',16)}</button>`:''}</td></tr>`).join('')}</tbody></table></div></section>
    <section class="section-panel"><div class="section-toolbar"><h2>Approved Changes</h2></div><div class="table-wrap"><table><thead><tr><th>From</th><th>To</th><th>Approved</th></tr></thead><tbody>${(classRegisterData.class_approvals||[]).map(c=>`<tr><td>${escapeHtml(c.from_year)} · ${escapeHtml(c.class_name)}</td><td>${escapeHtml(c.to_year)} Term 1 · ${c.student_count} pupils</td><td>${escapeHtml(c.approved_by_name)} · ${escapeHtml(c.approved_at)}${annual&&allowedAnnual&&c.from_year===year?` <button class="icon-mini" title="Edit approved class decisions" onclick="setRosterFilter('promotion','className','${c.class_name}');document.querySelector('.promotion-roster').scrollIntoView({behavior:'smooth'})">${icon('edit',16)}</button>`:''}</td></tr>`).join('')}${classRegisterData.history.filter(r=>!(classRegisterData.class_approvals||[]).some(c=>c.promotion_id===r.id)).map(r=>`<tr><td>${escapeHtml(r.from_year)} Term 3</td><td>${escapeHtml(r.to_year)} Term 1</td><td>${escapeHtml(r.approved_by_name)} · ${escapeHtml(r.approved_at)}</td></tr>`).join('')}${(classRegisterData.term_history||[]).map(r=>`<tr><td>${escapeHtml(r.academic_year)} ${r.from_term}</td><td>${r.to_term}</td><td>${escapeHtml(r.approved_at)}</td></tr>`).join('') || ''}</tbody></table></div></section>`;
}

function editPromotionDecision(studentId) {
  const row=(classRegisterData.promotion_outcomes||[]).find(r=>r.student_id===studentId);
  if(!row)return;
  openModal('Edit Approved Promotion',`<p>Original class: ${escapeHtml(row.from_class)} · Current decision: ${escapeHtml(row.outcome)}</p><form onsubmit="event.preventDefault();savePromotionDecision(${row.id},'${row.outcome}',this)"><label>Decision <select class="select" name="decision"><option value="retain" ${row.outcome==='Retained'?'selected':''}>Retain in ${escapeHtml(row.from_class)}</option><option value="promote" ${row.outcome!=='Retained'?'selected':''}>${row.from_class==='Standard 8'?'Graduate':'Promote to next class'}</option></select></label><p>Corrections are available until all classes have been approved.</p><button class="btn primary">Save Correction</button><p class="form-note" role="alert"></p></form>`);
}
async function savePromotionDecision(id,expected,form) {
  const button=form.querySelector('button');button.disabled=true;
  try {await apiRequest(`/class-promotions/students/${id}`,{method:'PATCH',body:JSON.stringify({retain:form.elements.decision.value==='retain',expected_outcome:expected})});promotionPreview=null;closeModal();await loadBackendData(true);showToast('Promotion corrected');}
  catch(error){form.querySelector('.form-note').textContent=error.message;}finally{button.disabled=false;}
}
function exportFeeAccounts(kind) {
  const table=document.querySelector('.student-fee-register')?.cloneNode(true);if(!table)return;
  table.querySelectorAll('tr[hidden]').forEach(r=>r.remove());
  table.querySelectorAll('th:last-child,td:last-child').forEach(c=>c.remove());
  const f=rosterFilters.fees;
  const title=`Student Fee Accounts — ${activeAcademicYear()} — ${activeTerm()}`;
  const filters=[f.className||'All Classes',f.gender,f.status,f.query&&'Search: '+f.query].filter(Boolean).join(' · ');
  const html=`<html><head><meta charset="utf-8"><title>${escapeHtml(title)}</title><style>@page{size:landscape}body{font:12px Arial}table{border-collapse:collapse;width:100%}th,td{border:1px solid #aaa;padding:8px;text-align:left}small{display:block}td{mso-number-format:"\\@"}</style></head><body><h2>Excel Primary School</h2><h3>${escapeHtml(title)}</h3><p>${escapeHtml(filters)} · ${table.querySelectorAll('tbody tr[data-class]').length} students · MWK</p>${table.outerHTML}</body></html>`;
  if(kind==='print'){const win=window.open('','_blank');if(!win){showToast('Allow pop-ups to print');return;}win.document.write(html);win.document.close();win.focus();win.print();}
  else {const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([html],{type:'application/vnd.ms-excel'}));a.download='student-fee-accounts.xls';a.click();URL.revokeObjectURL(a.href);}
}

function selectedClassRetentions() {
  const ids=new Set((classRegisterData.active_students||[]).filter(s=>s.class_name===rosterFilters.promotion.className).map(s=>s.id));
  return [...retainedStudents].filter(id=>ids.has(id));
}
async function previewClassPromotion(button) {
  button.disabled = true;
  try {
    promotionPreview = await apiRequest('/class-promotions/preview', {method:'POST', body:JSON.stringify({from_year:classRegisterData.current_year, class_name:rosterFilters.promotion.className, retain:selectedClassRetentions()})});
    app();
  } catch (error) { document.getElementById('promotion-error').textContent = error.message; }
  finally { button.disabled = false; }
}

async function approveClassPromotion(button) {
  if (!promotionPreview || !document.getElementById('promotion-confirm')?.checked) {
    document.getElementById('promotion-error').textContent = 'Review the preview and confirm that the academic year has ended.'; return;
  }
  button.disabled = true;
  try {
    const result=await apiRequest('/class-promotions/approve', {method:'POST', body:JSON.stringify({from_year:promotionPreview.from_year, token:promotionPreview.token, class_name:promotionPreview.class_name, retain:selectedClassRetentions(), confirmed:true})});
    const nextYear=promotionPreview.to_year;
    for(const row of promotionPreview.rows)retainedStudents.delete(row.student_id);
    promotionPreview = null;
    if(result.year_complete){localStorage.setItem("erpAcademicYear",nextYear);localStorage.setItem("erpTerm","Term 1");}
    await loadBackendData(true);
    showToast(`${result.class_name} promotion approved`,result.year_complete?'All classes are complete. Term 1 is now active.':`${result.remaining_students} pupils remain in classes awaiting approval.`, 'success');
  } catch (error) { document.getElementById('promotion-error').textContent = error.message; }
  finally { button.disabled = false; }
}

async function erpLogout() {
  try {
    const result = await apiRequest('/logout', {method:'POST'});
    document.querySelector('meta[name="csrf-token"]').content = result.csrf_token;
    latestAdmissionId=null; backendData = {}; backendLoaded = false; classRegisterData = {imports:[],entries:[],history:[],current_year:null};
    promotionPreview = null; retainedStudents.clear(); location.hash = '#/login';
  } catch (error) { showToast('Sign out failed', error.message, 'error'); }
}

for (const role of Object.keys(roleNavGroups)) {
  const groups=roleNavGroups[role];
  if (['Director','Super Admin','School Manager'].includes(role)) {
    for(const group of groups) group[1]=group[1].filter(item=>!['terms','academic-years','class-promotions','class-register'].includes(item[0]));
    groups.splice(1,0,['Academic Periods',[['class-promotions','Promotions & Terms','graduation-cap'],['terms','Term Dates','calendar-days'],['class-register','Class Registers','book-open']]]);
    if(role==='Super Admin') groups.push(['School Records',[['classes','Classes','network'],['students','Students','users'],['fees','Fees Management','wallet'],['student-balances','Student Balances','banknote']]]);
  } else if(flatNav(groups).some(item=>item[0]==='classes')) groups.push(['Class Registers',[['class-register','Class Registers','book-open']]]);
}


for (const role of ['Director','School Manager','Super Admin']) {
  const groups=roleNavGroups[role];
  const main=groups.find(g=>g[0]==='Main');
  const academic=groups.find(g=>g[0]==='Academic Periods');
  const admissionsIds=['admissions','students','parents','classes'];
  const feesIds=['fees','receipts','student-balances','arrears','daily-collections','term-collections'];
  const items=new Map(flatNav(groups).map(item=>[item[0],item]));
  const admissions=admissionsIds.filter(id=>items.has(id)).map(id=>items.get(id));
  const fees=feesIds.filter(id=>items.has(id)).map(id=>items.get(id));
  const rest=groups.filter(g=>g!==main&&g!==academic).map(([label,links])=>[label,links.filter(item=>!admissionsIds.includes(item[0])&&!feesIds.includes(item[0]))]).filter(g=>g[1].length);
  roleNavGroups[role]=[main,['Admissions',admissions],['Fees',fees],academic,...rest].filter(g=>g&&g[1].length);
}

for(const role of ['Director','Super Admin','School Manager','Admissions Officer']) {
  const groups=roleNavGroups[role];
  for(const group of groups)group[1]=group[1].filter(item=>item[0]!=='approvals');
  const admissions=groups.find(g=>g[0]==='Admissions')||groups.find(g=>g[0].includes('Admission'))||groups[0];
  admissions[1].push(['approvals','Change Approvals','shield-check']);
}

for (const groups of Object.values(roleNavGroups)) {
  const group=groups.find(g=>g[1].some(i=>i[0]==='fees'));
  if(group) { group[0]='Fees'; group[1].find(i=>i[0]==='fees')[1]='Fees Collection'; group[1].splice(1,0,['student-fee-accounts','Student Fee Accounts','book-open']); const order=['fees','student-fee-accounts','student-balances','arrears','receipts','daily-collections','term-collections']; group[1].sort((a,b)=>(order.indexOf(a[0])<0?99:order.indexOf(a[0]))-(order.indexOf(b[0])<0?99:order.indexOf(b[0]))); }
}

// Keep unfinished modules available in source, but out of visible navigation.
for (const role of Object.keys(roleNavGroups)) {
  roleNavGroups[role] = roleNavGroups[role].filter(([label]) => !/exams|staff|communication|governance/i.test(label));
}

let backendLoadId = 0;
function activeTerm() { return backendData.term || localStorage.getItem('erpTerm') || classRegisterData.current_term || 'Term 3'; }
function availableYears() {
  const current = classRegisterData.current_year || backendData.current_year || '2025 / 2026';
  const start = Number(current.slice(0,4));
  return [...new Set([current,`${start+1} / ${start+2}`,...(classRegisterData.calendar||[]).map(t=>t.academic_year),activeAcademicYear()])].sort();
}
function canManagePeriods() { return ['Director','Super Admin','School Manager'].includes(currentRole()); }
function canCollectFees() { return canManagePeriods(); }
async function selectAcademicPeriod(year, term) {
  localStorage.setItem('erpAcademicYear',year); localStorage.setItem('erpTerm',term);
  promotionPreview=null; retainedStudents.clear(); closeModal();
  backendLoaded=false; const pending=loadBackendData(true); app(); await pending;
}
function periodNotice() {
  return backendData.period_opened?'':`<p class="period-notice">${escapeHtml(activeAcademicYear())} · ${activeTerm()} has not been opened. No students or fees are carried into it until the approved term advancement or annual promotion.</p>`;
}
function classExportButtons(className, labels=false) {
  return `<button class="${labels?'btn ghost':'icon-mini'}" title="Print ${className} table" onclick="exportClass('${className}','print')">${icon('printer',16)}${labels?' Print':''}</button><button class="${labels?'btn ghost':'icon-mini'}" title="Download ${className} Excel workbook" onclick="exportClass('${className}','export')">${icon('download',16)}${labels?' Excel (.xlsx)':''}</button>`;
}
function exportClass(className, kind) {
  const params=new URLSearchParams({academic_year:activeAcademicYear(),term:activeTerm(),class_name:className});
  if(kind==='print') window.open(`/erp-api/classes/print?${params}`,'_blank','noopener');
  else {const a=document.createElement('a');a.href=`/erp-api/classes/export?${params}`;a.download='';document.body.append(a);a.click();a.remove();}
}
function canViewFinance() { return ["Director","School Manager","Super Admin"].includes(currentRole()); }
function classStudentTable(className) {
  const pupils=(backendData.students||[]).filter(s=>!className||s.class_name===className);
  return `<table class="class-student-table"><thead><tr>${['Admission No.','Student','Class','Gender','Guardian','Phone',...(canViewFinance()?['Fees Due','Fees Paid','Balance','Status']:[])].map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${pupils.map(s=>{
    const balances=(backendData.balances||[]).filter(b=>b.student_id===s.id);
    const review=!balances.length;
    const paymentReview=canViewFinance()&&(classRegisterData.entries||[]).some(e=>e.student_id===s.id&&e.issues?.length);
    const due=balances.reduce((v,b)=>v+Number(b.amount_due),0),paid=balances.reduce((v,b)=>v+Number(b.amount_paid),0),balance=balances.reduce((v,b)=>v+Number(b.balance),0);
    return `<tr><td>${escapeHtml(s.admission_no)}</td><td><button class="text-link" onclick="openStudentDetails(${s.id})">${escapeHtml(s.first_name+' '+s.last_name)}</button></td><td>${escapeHtml(s.class_name)}</td><td>${escapeHtml(s.gender||'Not recorded')}</td><td>${escapeHtml(s.guardian?.name||'Not recorded')}</td><td>${escapeHtml(s.guardian?.phone||'Not recorded')}</td>${canViewFinance()?`<td>${review?'—':money(due)}</td><td>${review?'—':money(paid)}</td><td>${review?'—':money(balance)}</td><td><span class="badge ${review||balance?'amber':'green'}">${paymentReview?'Payment review':review?'Review / not assessed':balance?'Outstanding':'Cleared'}</span></td>`:''}</tr>`;
  }).join('') || '<tr><td colspan="9">No students enrolled in this class for the selected period.</td></tr>'}</tbody></table>`;
}
function studentFeeTable() {
  return `<table class="student-fee-register"><thead><tr><th>Admission No.</th><th>Student / Class</th><th>Tuition Due</th><th>Tuition Paid</th><th>Tuition Balance</th><th>Uniform Paid</th><th>Bus Paid</th><th>Status</th><th>Details</th></tr></thead><tbody>${(backendData.students||[]).map(s=>{
    const balances=(backendData.balances||[]).filter(b=>b.student_id===s.id);
    const tuition=balances.find(b=>b.fee_type==='Tuition Fee');
    const original=classRegisterData.entries.find(e=>e.student_id===s.id);
    const status=original?.issues.length?'Review':tuition?.status||'Not assessed';
    return `<tr data-class="${escapeHtml(s.class_name)}" data-gender="${escapeHtml(s.gender||'')}" data-status="${escapeHtml(status)}"><td>${escapeHtml(s.admission_no)}</td><td>${escapeHtml(s.first_name+' '+s.last_name)}<small class="cell-stack">${escapeHtml(s.class_name)}</small></td><td>${tuition?money(tuition.amount_due):'—'}</td><td>${tuition?money(tuition.amount_paid):'—'}</td><td>${tuition?money(tuition.balance):'—'}</td><td>${money(balances.find(b=>b.fee_type==='Uniform Fee')?.amount_paid||0)}</td><td>${money(balances.find(b=>b.fee_type==='School Bus Fee')?.amount_paid||0)}</td><td><span class="badge ${status==='Cleared'?'green':'amber'}">${status}</span></td><td><button class="icon-mini" title="Student fee details" onclick="openStudentFeeDetails(${s.id})">${icon('eye',16)}</button></td></tr>`;
  }).join('') || '<tr><td colspan="9">No enrolled students in this academic period.</td></tr>'}</tbody></table>`;
}
function openStudentFeeDetails(id) {
  const s=backendData.students.find(s=>s.id===id); if(!s)return;
  const balances=backendData.balances.filter(b=>b.student_id===id);
  openModal(`${escapeHtml(s.first_name+' '+s.last_name)} — Fees`, `<p>${escapeHtml(s.admission_no)} · ${escapeHtml(s.class_name)} · ${activeAcademicYear()} · ${activeTerm()}</p><div class="table-wrap"><table><thead><tr><th>Fee</th><th>Due</th><th>Paid</th><th>Balance</th><th>Status</th></tr></thead><tbody>${balances.map(b=>`<tr><td>${escapeHtml(b.fee_type)}</td><td>${money(b.amount_due)}</td><td>${money(b.amount_paid)}</td><td>${money(b.balance)}</td><td>${escapeHtml(b.status)}</td></tr>`).join('')}</tbody></table></div><button class="btn ghost" onclick="openStudentPaymentHistory(${id})">Payment History</button>`, 'class-register-modal');
}
function termDatesPage() {
  const editable=canManagePeriods();
  const rows=availableYears().flatMap(year=>['Term 1','Term 2','Term 3'].map(term=>{
    const record=(classRegisterData.calendar||[]).find(r=>r.academic_year===year&&r.term===term)||{};
    return `<tr><td>${escapeHtml(year)}</td><td>${term}</td><td>${escapeHtml(record.starts_on||'Not set')}</td><td>${escapeHtml(record.ends_on||'Not set')}</td><td>${record.closed_at?'Closed':record.opened_at?'Open':'Not opened'}</td><td>${editable?`<button class="btn ghost" onclick="editTermDates('${year}','${term}')">Set Dates</button>`:''}</td></tr>`;
  }));
  return `${pageHead('Term Dates','Academic / Term Dates',editable?'<a class="btn primary" href="#/class-promotions">Promotions & Terms</a>':'')}<section class="section-panel"><p class="section-note">Director, Super Admin and School Manager can set dates. Dates must not overlap. Setting dates does not enroll students or open a term.</p><div class="table-wrap"><table><thead><tr><th>Academic Year</th><th>Term</th><th>Starts</th><th>Ends</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.join('')}</tbody></table></div></section>`;
}
function editTermDates(year,term) {
  const record=(classRegisterData.calendar||[]).find(r=>r.academic_year===year&&r.term===term)||{};
  openModal(`${escapeHtml(year)} · ${term}`,`<form class="record-form modal-form" onsubmit="event.preventDefault();saveTermDates(this)"><input type="hidden" name="academic_year" value="${escapeHtml(year)}"><input type="hidden" name="term" value="${term}"><label>Start Date<input name="starts_on" type="date" value="${record.starts_on||''}" required></label><label>End Date<input name="ends_on" type="date" value="${record.ends_on||''}" required></label><button class="btn primary" type="submit">Save Dates</button><p class="form-note" role="alert"></p></form>`);
}
async function saveTermDates(form) {
  const button=form.querySelector('button');button.disabled=true;
  try {await apiRequest('/school-terms',{method:'PUT',body:JSON.stringify(Object.fromEntries(new FormData(form)))});promotionPreview=null;closeModal();await loadBackendData(true);showToast('Term dates saved');}
  catch(error){form.querySelector('.form-note').textContent=error.message;}finally{button.disabled=false;}
}
async function advanceSchoolTerm(button) {
  if(!document.getElementById('term-confirm')?.checked){document.getElementById('promotion-error').textContent='Confirm the term advancement first.';return;}
  button.disabled=true;
  try {const result=await apiRequest('/term-transitions',{method:'POST',body:JSON.stringify({academic_year:classRegisterData.current_year,term:classRegisterData.current_term,confirmed:true})});await selectAcademicPeriod(result.academic_year,result.term);showToast('Term advanced','Fresh unpaid tuition is ready.');}
  catch(error){document.getElementById('promotion-error').textContent=error.message;}finally{button.disabled=false;}
}


const rosterFilters={promotion:{query:'',className:'Nursery',gender:'',status:''},fees:{query:'',className:'',gender:'',status:''}};
function rosterFilterToolbar(kind, compact=false) {
  const f=rosterFilters[kind];
  const states=kind==='promotion'?['Promoted','Retained','Graduated','Continuing']:['Unpaid','Partial','Cleared','Review','Not assessed'];
  return `<div class="section-toolbar roster-toolbar ${compact?'promotion-inline-filters':''} ${kind==='fees'?'fee-account-filters':''}"><div class="filters"><div class="search"><input aria-label="Search ${kind} students" placeholder="Search student or admission no." value="${escapeHtml(f.query)}" oninput="setRosterFilter('${kind}','query',this.value)"></div>
    <select class="select" aria-label="${kind} class filter" onchange="setRosterFilter('${kind}','className',this.value)">${kind==='promotion'?'':'<option value="">All Classes</option>'}${classOptions(f.className)}</select>
    <select class="select" aria-label="${kind} gender filter" onchange="setRosterFilter('${kind}','gender',this.value)"><option value="">All Genders</option>${['Female','Male'].map(v=>`<option ${f.gender===v?'selected':''}>${v}</option>`).join('')}</select>
    <select class="select" aria-label="${kind} status filter" onchange="setRosterFilter('${kind}','status',this.value)"><option value="">${kind==='promotion'?'All Outcomes':'All Statuses'}</option>${states.map(v=>`<option ${f.status===v?'selected':''}>${v}</option>`).join('')}</select>
    <button class="pill" onclick="resetRosterFilters('${kind}')">Clear Filters</button></div>${compact?'':`<span class="muted" data-roster-count="${kind}"></span>`}</div>${kind==='promotion'&&!compact?'<p class="muted roster-filter-note">Filters change the view only. Approval includes the full roster; retained selections remain saved when filtering.</p>':''}`;
}
function setRosterFilter(kind,key,value) { rosterFilters[kind][key]=value;if(kind==='promotion'&&key==='className'){promotionPreview=null;app();}else applyRosterFilters(kind); }
function resetRosterFilters(kind) { rosterFilters[kind]={query:'',className:kind==='promotion'?rosterFilters[kind].className||'Nursery':'',gender:'',status:''};app(); }
function applyRosterFilters(kind) {
  const table=document.querySelector(kind==='promotion'?'.promotion-roster':'.student-fee-register');if(!table)return;
  const f=rosterFilters[kind];let visible=0;const rows=[...table.querySelectorAll('tbody tr[data-class]')];
  for(const row of rows){row.hidden=Boolean((f.className&&row.dataset.class!==f.className)||(f.gender&&row.dataset.gender!==f.gender)||(f.status&&row.dataset.status!==f.status)||(f.query&&!row.textContent.toLowerCase().includes(f.query.trim().toLowerCase())));if(!row.hidden)visible++;}
  const label=document.querySelector(`[data-roster-count="${kind}"]`);if(label)label.textContent=`${visible} of ${f.className?rows.filter(r=>r.dataset.class===f.className).length:rows.length} students${f.className?' · '+f.className:''}`;
}
function studentRegisterPanel() {
  return `<section class="section-panel student-register-panel"><div class="section-toolbar"><h2>Student Fee Accounts — ${activeTerm()}</h2><div class="filters"><button class="btn ghost" onclick="exportFeeAccounts('print')">${icon('printer',16)} Print</button><button class="btn ghost" onclick="exportFeeAccounts('excel')">${icon('download',16)} Excel</button></div></div>${rosterFilterToolbar('fees')}<div class="table-wrap">${studentFeeTable()}</div></section>`;
}
function feeSummaryCards() {
  const stats=backendData.stats||{};
  const term=(classRegisterData.calendar||[]).find(t=>t.academic_year===activeAcademicYear()&&t.term===activeTerm());
  const overdue=term?.ends_on&&term.ends_on<backendData.server_date?stats.balances_outstanding||0:0;
  return moneyCard('banknote',money(stats.payments_total||0),'Fees Collected','green')+moneyCard('wallet',money(stats.balances_outstanding||0),'Pending Fees','amber')+moneyCard('triangle-alert',money(overdue),'Overdue Payments','red');
}
function feeProgressCards(limit=4) {
  return ['Tuition Fee','Uniform Fee','School Bus Fee','Trip Fee'].slice(0,limit).map((type,index)=>{
    const balances=(backendData.balances||[]).filter(b=>b.fee_type===type);
    const due=balances.reduce((n,b)=>n+Number(b.amount_due),0);
    const paid=(backendData.payments||[]).filter(p=>p.fee_type===type&&p.status==='Paid').reduce((n,p)=>n+Number(p.amount),0);
    return progressCard(type,due?Math.min(100,Math.round(paid/due*1000)/10):0,`${money(paid)} / ${money(due)} Collected`,['var(--cyan)','var(--blue)','var(--amber)','var(--green)'][index],type);
  }).join('');
}
function periodCollectionBars(compact=false) {
  const rows=excelClasses.map(name=>{
    const balances=(backendData.balances||[]).filter(b=>b.student?.class_name===name);
    return {name,due:balances.reduce((n,b)=>n+Number(b.amount_due),0),paid:balances.reduce((n,b)=>n+Number(b.amount_paid),0)};
  });
  const max=Math.max(1,...rows.map(r=>r.due));
  return `<div class="mobile-collection-bars">${rows.map(r=>`<div><strong>${r.name}</strong><span>${money(r.paid)} / ${money(r.due)}</span><i><b style="width:${r.due ? Math.min(100,r.paid/r.due*100) : 0}%"></b></i></div>`).join("")}</div><div class="chart period-collection-chart ${compact?'compact':''}">${chartLegend([['Assessed Fee','soft'],['Collected Fee','green']])}<div class="bars paired">${rows.map(r=>`<span class="bar-group" title="${r.name}: ${money(r.paid)} collected / ${money(r.due)} assessed"><span class="bar total" style="height:${r.due/max*100}%"></span><span class="bar collected" style="height:${r.paid/max*100}%"></span></span>`).join('')}</div><div class="months">${rows.map(r=>`<span>${r.name.replace('Standard ','Std ')}</span>`).join('')}</div></div>`;
}

window.addEventListener("hashchange", () => { if(mobileMenuOpen)setMobileMenu(false); app(); window.scrollTo(0, 0); });
document.addEventListener("click", closeNotificationDropdown);
app();
