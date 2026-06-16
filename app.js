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
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["People & Records", [["students", "Students", "graduation-cap"], ["parents", "Parents", "users"], ["teachers", "Teachers", "presentation"]]],
    ["Admissions", [["admissions", "Admissions Register", "user-plus"], ["classes", "Classes & Sections", "network"], ["academic-years", "Academic Years", "calendar-days"], ["terms", "Terms", "calendar-days"]]],
    ["Fees & Accounts", [["fees", "Fees Management", "wallet"], ["receipts", "Receipts", "receipt"], ["student-balances", "Student Balances", "banknote"], ["arrears", "Arrears", "triangle-alert"], ["daily-collections", "Daily Collections", "bar-chart"], ["term-collections", "Term Collections", "file-chart"]]],
    ["Academic", [["timetable", "Time Table", "calendar-days"], ["subjects", "Subjects", "book-open"], ["curriculum", "Curriculum Design", "network"], ["lesson-planning", "Lesson Planning", "book-open"], ["assessment", "Assessment", "clipboard-check"], ["learning-materials", "Learning Materials", "archive"]]],
    ["Teacher & Staff Management", [["staff", "Staff Profiles", "id-card"], ["payroll", "Payroll", "receipt"], ["leave", "Leave Management", "calendar-minus"], ["performance", "Performance Reviews", "chart-line"]]],
    ["Communication", [["parent-communication", "Parent Communication", "megaphone"], ["messaging", "Messaging", "messages"], ["student-report", "Students Report", "file-chart"]]],
    ["Inventory", [["supplies", "Supplies", "package"], ["purchase", "Purchase", "shopping-cart"], ["stock-alerts", "Stock Alerts", "bell"]]],
    ["Health & Safety", [["health-records", "Health Records", "heart-pulse"], ["incident-reports", "Incident Reports", "triangle-alert"], ["safety-protocols", "Safety Protocols", "shield-check"]]],
    ["Reporting & Analytics", [["analytics", "Analytics Dashboard", "bar-chart"], ["financial-reports", "Financial Reports", "banknote"], ["enrollment-reports", "Enrollment Reports", "user-plus"], ["academic-progress", "Academic Progress", "trending-up"], ["compliance-reports", "Compliance Reports", "shield"]]],
    ["Exams Management", [["exam-lists", "Candidate Lists", "file-chart"], ["eligible-students", "Eligible Students", "clipboard-check"], ["exam-export", "Excel / PDF Export", "download"], ["exam-settings", "Exam Settings", "shield-check"]]],
    ["System Administration", [["users", "Users", "users"], ["roles", "Roles & Permissions", "shield-check"], ["audit-logs", "Audit Logs", "file-chart"]]]
  ],
  "Director": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["Executive Records", [["students", "Student Overview", "graduation-cap"], ["teachers", "Teacher Overview", "presentation"], ["classes", "Class Overview", "network"]]],
    ["Approvals & Audit", [["arrears", "Arrears Review", "triangle-alert"], ["eligible-students", "Exam Eligibility Review", "clipboard-check"], ["audit-logs", "Audit Logs", "file-chart"], ["compliance-reports", "Compliance Reports", "shield"]]],
    ["Leadership Reports", [["analytics", "Analytics Dashboard", "bar-chart"], ["financial-reports", "Financial Reports", "banknote"], ["enrollment-reports", "Enrollment Reports", "user-plus"], ["academic-progress", "Academic Progress", "trending-up"]]],
    ["Communication", [["messaging", "Leadership Messaging", "messages"], ["parent-communication", "Announcements", "megaphone"]]]
  ],
  "Admissions Officer": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["Admissions Desk", [["admissions", "New Admissions", "user-plus"], ["students", "Student Records", "graduation-cap"], ["parents", "Guardian Records", "users"]]],
    ["Placement & Setup", [["classes", "Classes & Sections", "network"], ["academic-years", "Academic Years", "calendar-days"], ["terms", "Terms", "calendar-days"]]],
    ["Admissions Reports", [["enrollment-reports", "Enrollment Reports", "bar-chart"], ["student-report", "Student Files Report", "file-chart"]]],
    ["Communication", [["parent-communication", "Parent Follow-up", "megaphone"], ["messaging", "Admissions Messaging", "messages"]]]
  ],
  "Finance Officer": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["Cash Office", [["fees", "Record Payments", "wallet"], ["receipts", "Receipts", "receipt"], ["daily-collections", "Daily Collections", "bar-chart"]]],
    ["Balances", [["student-balances", "Student Balances", "banknote"], ["arrears", "Arrears Follow-up", "triangle-alert"], ["term-collections", "Term Collections", "file-chart"]]],
    ["Finance Reports", [["financial-reports", "Financial Reports", "banknote"], ["analytics", "Collections Analytics", "bar-chart"]]],
    ["Communication", [["parent-communication", "Payment Notices", "megaphone"], ["messaging", "Accounts Messaging", "messages"]]]
  ],
  "Exams Officer": [
    ["Main", [["dashboard", "Dashboard", "layout-dashboard"]]],
    ["Exams Desk", [["exam-lists", "Candidate Lists", "file-chart"], ["eligible-students", "Eligible Students", "clipboard-check"], ["exam-export", "Excel / PDF Export", "download"]]],
    ["Exam Setup", [["exam-settings", "Exam Settings", "shield-check"], ["exam-types", "Exam Types", "clipboard-check"], ["subjects", "Subjects", "book-open"], ["classes", "Classes & Sections", "network"]]],
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
  Finance: "Finance Officer"
};

function currentRole() {
  const stored = localStorage.getItem("erpRole") || "Super Admin";
  const normalized = roleAliases[stored] || stored;
  if (normalized !== stored) localStorage.setItem("erpRole", normalized);
  return roleNavGroups[normalized] ? normalized : "Super Admin";
}

function navForRole(role = currentRole()) {
  return roleNavGroups[role] || roleNavGroups["Super Admin"];
}

function flatNav(groups = navGroups) {
  return groups.flatMap((group) => group[1]);
}

function labelForRoute(id) {
  return flatNav(roleNavGroups["Super Admin"]).find((item) => item[0] === id)?.[1] || id.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
}

function routeAllowed(id, role = currentRole()) {
  return id === "dashboard" || flatNav(navForRole(role)).some((item) => item[0] === id);
}

const iconPaths = {
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
  ["Super Admin", "admin@hillside.edu", "password"],
  ["Director", "director@hillside.edu", "password"],
  ["Admissions Officer", "admissions@hillside.edu", "password"],
  ["Finance Officer", "finance@hillside.edu", "password"],
  ["Exams Officer", "exams@hillside.edu", "password"],
  ["Teacher", "teacher@hillside.edu", "password"]
];

function schoolLogo(compact = false) {
  const src = compact ? "/erp/assets/hillside-icon-192.png" : "/erp/assets/hillside-logo.png";
  return `<div class="school-logo ${compact ? "compact" : ""}" aria-label="Hillside Secondary School">
    <img src="${src}" alt="Hillside Secondary School" />
  </div>`;
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

function toggleSidebar() {
  const next = localStorage.getItem("erpSidebarCollapsed") === "true" ? "false" : "true";
  localStorage.setItem("erpSidebarCollapsed", next);
  app();
}

function demoLogin(form) {
  const email = form.querySelector("[name='email']").value.trim().toLowerCase();
  const password = form.querySelector("[name='password']").value;
  const account = demoAccounts.find(([, accountEmail, accountPassword]) => accountEmail === email && accountPassword === password);
  if (account) {
    localStorage.setItem("erpRole", account[0]);
    location.hash = "#/dashboard";
    return;
  }
  const chosenRole = localStorage.getItem("erpRole") || "Super Admin";
  form.querySelector(".login-error").textContent = `Sign in failed. Select the ${chosenRole} account below, or use the matching email and password.`;
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
  guardians: [],
  payments: [],
  balances: [],
  notifications: [],
  messages: [],
  stats: {}
};
let backendLoaded = false;
let backendLoading = false;

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

function academicYearLabel() {
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
  if (!response.ok) throw new Error(data.message || "The school server could not complete that action.");
  return data;
}

async function loadBackendData(force = false) {
  if (backendLoading || (backendLoaded && !force)) return;
  backendLoading = true;
  try {
    backendData = await apiRequest("/bootstrap");
    backendLoaded = true;
  } catch (error) {
    console.warn(error);
  } finally {
    backendLoading = false;
    if (route() !== "login") app();
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
  const unread = backendData.notifications.filter((notice) => !notice.read_at).slice(0, 2);
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
      <div class="modal-head"><h2>${title}</h2><button class="icon-btn" onclick="closeModal()">${icon("log-out", 16)}</button></div>
      <div class="modal-body">${body}</div>
    </section>
  </div>`;
}

function actionable(label, iconName, handler = "") {
  return `<button class="btn ${label.includes("Record") || label.includes("Register") || label.includes("New") ? "primary" : "ghost"}" ${handler}>${icon(iconName)} ${label}</button>`;
}

function notifyAction(title, body = "This control is now connected to the interface flow.") {
  showToast(title, body, "success");
}

function openAcademicYearModal() {
  openModal("Academic Year", `<div class="modal-grid">
    ${["2025 / 2026", "2026 / 2027", "2024 / 2025"].map((year) => `<button class="choice-card" onclick="localStorage.setItem('erpAcademicYear','${year}'); closeModal(); showToast('Academic year selected','${year} is now active for filters.','success'); app();"><strong>${year}</strong><span>3 terms configured</span></button>`).join("")}
  </div>`);
}

function activeAcademicYear() {
  return localStorage.getItem("erpAcademicYear") || academicYearLabel();
}

function openNotificationPanel() {
  const notices = backendData.notifications?.length ? backendData.notifications : [
    { title: "No new notifications", body: "New admissions, payments, and approvals will appear here.", type: "info" }
  ];
  openModal("Notifications", `<div class="notice-list">${notices.map((notice) => `<article class="notice-row ${notice.type || "info"}"><strong>${notice.title}</strong><p>${notice.body}</p></article>`).join("")}</div>`);
}

function openFilterModal(label = "Filters") {
  openModal(label, `<div class="modal-grid">
    <label><span>Academic Year</span><select><option>${activeAcademicYear()}</option><option>2024 / 2025</option><option>2026 / 2027</option></select></label>
    <label><span>Term</span><select><option>Term 1</option><option>Term 2</option><option>Term 3</option></select></label>
    <label><span>Class</span><select><option>All Forms</option><option>Form 1</option><option>Form 2</option><option>Form 3</option><option>Form 4</option></select></label>
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
}

function admissionFormHtml() {
  return `<form class="record-form modal-form" onsubmit="event.preventDefault(); createAdmission(this);">
    <label><span>First Name</span><input name="first_name" required placeholder="Student first name"></label>
    <label><span>Last Name</span><input name="last_name" required placeholder="Student last name"></label>
    <label><span>Student Type</span><select name="student_type"><option>Day Scholar</option><option>Boarding</option></select></label>
    <label><span>Class</span><select name="class_name"><option>Form 1</option><option>Form 2</option><option>Form 3</option><option>Form 4</option></select></label>
    <label><span>Section</span><select name="section"><option>A</option><option>B</option><option>C</option></select></label>
    <label><span>Gender</span><select name="gender"><option>Female</option><option>Male</option></select></label>
    <label><span>Joined On</span><input name="joined_on" type="date"></label>
    <label><span>Parent / Guardian</span><input name="guardian_name" required placeholder="Full name"></label>
    <label><span>Parent Email</span><input name="guardian_email" type="email" placeholder="name@example.com"></label>
    <label><span>Parent Phone</span><input name="guardian_phone" placeholder="+265 ..."></label>
    <p class="form-note">Tuition balances are created automatically for Term 1, Term 2, and Term 3: MWK 120,000 for Day Scholars and MWK 550,000 for Boarding students.</p>
    <button class="btn primary" type="submit">${icon("user-plus")} Save Admission</button>
  </form>`;
}

function openAdmissionModal() {
  openModal("Register Student", admissionFormHtml(), "wide");
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

function openTeacherModal() {
  openModal("Add Teacher", `<form class="record-form modal-form" onsubmit="event.preventDefault(); closeModal(); showToast('Teacher saved','Teacher profile is ready for timetable assignment.','success');">
    <label><span>Name</span><input required placeholder="Teacher full name"></label>
    <label><span>Subject</span><input required placeholder="Subject"></label>
    <label><span>Email</span><input type="email" placeholder="teacher@hillside.edu"></label>
    <label><span>Phone</span><input placeholder="+265 ..."></label>
    <button class="btn primary" type="submit">${icon("presentation")} Save Teacher</button>
  </form>`);
}

function paymentFormHtml() {
  return `<form class="record-form modal-form" onsubmit="event.preventDefault(); createPayment(this);">
    ${paymentStudentSearchHtml()}
    <label><span>Fee Type</span><select name="fee_type"><option>Tuition Fee</option><option>Examination Fee</option><option>Trip Fee</option><option>Other Fee</option></select></label>
    <label><span>Academic Year</span><select name="academic_year"><option>${activeAcademicYear()}</option><option>2024 / 2025</option><option>2026 / 2027</option></select></label>
    <label><span>Term</span><select name="term"><option>Term 1</option><option>Term 2</option><option>Term 3</option></select></label>
    <label><span>Amount (MWK)</span><input name="amount" type="number" min="1" value="120000" required></label>
    <label><span>Method</span><select name="method"><option>Mobile Money</option><option>Cash</option><option>Bank Transfer</option></select></label>
    <label class="wide-field"><span>Notes</span><input name="notes" placeholder="Optional receipt note"></label>
    <p class="form-note">When saved, the matching fee balance is deducted and a printable receipt number is generated automatically.</p>
    <button class="btn primary" type="submit">${icon("receipt")} Record Payment</button>
  </form>`;
}

function openPaymentModal() {
  openModal("Record Payment", paymentFormHtml(), "wide");
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

function backendStudentRows() {
  if (!backendData.students?.length) return students;
  return backendData.students.map((student) => [
    student.admission_no,
    `${student.first_name} ${student.last_name}`,
    `${student.class_name}${student.section ? `, ${student.section}` : ""}`,
    student.roll_no || "0000",
    student.gender || "Not set",
    student.joined_on ? new Date(student.joined_on).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "Today"
  ]);
}

function backendParentRows() {
  if (!backendData.guardians?.length) return parents;
  return backendData.guardians.map((guardian) => [
    `P${String(guardian.id).padStart(6, "0")}`,
    guardian.name,
    `Added on ${guardian.created_at ? new Date(guardian.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : todayLabel()}`,
    guardian.email || "not-set@hillside.edu",
    guardian.phone || "Not set",
    guardian.student ? `${guardian.student.first_name} ${guardian.student.last_name}` : "Student",
    guardian.student ? `${guardian.student.class_name}-${guardian.student.section || ""}` : ""
  ]);
}

function backendPaymentRows() {
  if (!backendData.payments?.length) return null;
  return backendData.payments.map((payment) => [
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
    payment.paid_at ? new Date(payment.paid_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : todayLabel()
  ]);
}

async function createAdmission(form) {
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.created_by_role = currentRole();
  try {
    await apiRequest("/students", { method: "POST", body: JSON.stringify(payload) });
    form.reset();
    closeModal();
    showToast("Admission saved", "The student and parent record were added to the school register.", "success");
    await loadBackendData(true);
  } catch (error) {
    showToast("Admission not saved", error.message, "error");
  }
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
  try {
    await apiRequest("/payments", { method: "POST", body: JSON.stringify(payload) });
    form.reset();
    closeModal();
    showToast("Payment recorded", "The receipt has been added to the finance register.", "success");
    await loadBackendData(true);
  } catch (error) {
    showToast("Payment not recorded", error.message, "error");
  }
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
  const sidebarTop = Number(sessionStorage.getItem("erpSidebarScroll") || 0);
  const collapsed = localStorage.getItem("erpSidebarCollapsed") === "true";
  document.getElementById("app").innerHTML = `
    <div class="app-shell ${collapsed ? "sidebar-collapsed" : ""}">
      ${sidebar(current)}
      <main class="main">
        ${topbar()}
        <section class="content is-entering">${page(current)}</section>
        <footer class="footer"><span>Copyright © Hillside Secondary School.</span><span>For a better tomorrow</span></footer>
      </main>
    </div>`;
  if (!backendLoaded && !backendLoading) loadBackendData();
  const sidebarEl = document.querySelector(".sidebar");
  if (sidebarEl) {
    sidebarEl.scrollTop = sidebarTop;
    sidebarEl.addEventListener("scroll", () => {
      sessionStorage.setItem("erpSidebarScroll", String(sidebarEl.scrollTop));
    }, { passive: true });
  }
  requestAnimationFrame(() => {
    document.querySelector(".content")?.classList.remove("is-entering");
    showLatestNotifications();
  });
}

function sidebar(current) {
  const role = currentRole();
  const groups = navForRole(role);
  return `<aside class="sidebar">
    <div class="brand">
      ${schoolLogo(true)}
      <button class="hamburger" title="Toggle sidebar" onclick="toggleSidebar()">${icon("menu")}</button>
    </div>
    <div class="sidebar-role">
      <span>Signed in as</span>
      <strong>${role}</strong>
      <a href="#/login">${icon("log-out", 14)} Switch account</a>
    </div>
    ${groups.map(([title, links]) => `
      <div class="nav-group">
        <p class="nav-title">${title}</p>
        ${links.map(([id, label, iconName]) => `
          <a class="nav-link ${current === id ? "active" : ""}" href="#/${id}" onclick="sessionStorage.setItem('erpSidebarScroll', String(this.closest('.sidebar')?.scrollTop || 0))">
            <span class="nav-icon">${icon(iconName)}</span><span>${label}</span>
          </a>`).join("")}
      </div>`).join("")}
  </aside>`;
}

function topbar() {
  const role = currentRole();
  const themeIcon = currentTheme() === "dark" ? "sun" : "moon";
  const themeLabel = currentTheme() === "dark" ? "Light mode" : "Dark mode";
  return `<header class="topbar">
    <div class="search"><input placeholder="Search" /><span class="shortcut">${icon("search", 15)}</span></div>
    <div class="top-actions">
      <button class="pill" onclick="openDetailsModal('Signed in role','${role}')">${icon("shield-check", 15)} ${role}</button>
      <button class="pill" onclick="openAcademicYearModal()">${icon("calendar-days", 15)} Academic Year : ${activeAcademicYear()}</button>
      <button class="icon-btn" title="${themeLabel}" onclick="toggleTheme()">${icon(themeIcon)}</button>
      <button class="icon-btn" title="Language">MW</button>
      <button class="icon-btn" title="Notifications" onclick="openNotificationPanel()">${icon("bell")}</button>
      <a class="icon-btn" href="#/messaging" title="Messages">${icon("messages")}</a>
      <a class="icon-btn logout-btn" href="#/login" title="Logout">${icon("log-out")}</a>
      <span class="avatar small">AD</span>
    </div>
  </header>`;
}

function loginPage() {
  const activeRole = currentRole();
  const activeAccount = demoAccounts.find(([role]) => role === activeRole) || demoAccounts[0];
  return `<main class="login-page">
    <section class="login-brand-panel">
      <div class="login-brand">
        <div class="login-logo-tile">${schoolLogo(false)}</div>
      </div>
      <div class="login-copy">
        <p class="eyebrow">Hillside Secondary School</p>
        <h1>For a better tomorrow.</h1>
        <p>Hillside Secondary School keeps every learner known, supported, and prepared for the next step.</p>
      </div>
      <div class="login-stats">
        <div><strong>3,654</strong><span>Total Students</span></div>
        <div><strong>284</strong><span>Teachers</span></div>
        <div><strong>98%</strong><span>Fee Tracking</span></div>
      </div>
    </section>
    <section class="login-form-panel">
      <form class="login-card" onsubmit="event.preventDefault(); demoLogin(this);">
        <div class="login-card-head">
          <span class="avatar">HSS</span>
          <div>
            <h2>Welcome Back</h2>
            <p class="muted">Sign in to continue to your dashboard</p>
          </div>
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
          <a href="#/forgot-password">Forgot Password?</a>
        </div>
        <button class="btn primary login-submit" type="submit">Sign In</button>
        <p class="login-error"></p>
        <div class="role-grid" onclick="if(event.target.dataset.role){const account = demoAccounts.find(([role]) => role === event.target.dataset.role); localStorage.setItem('erpRole', event.target.dataset.role); document.querySelectorAll('.role-grid span').forEach(el => el.classList.remove('selected')); event.target.classList.add('selected'); this.closest('form').querySelector('[name=email]').value = account[1]; this.closest('form').querySelector('[name=password]').value = account[2]; this.closest('form').querySelector('.login-error').textContent = '';}">
          ${demoAccounts.map(([role]) => `<span class="${role === activeRole ? "selected" : ""}" data-role="${role}">${role}</span>`).join("")}
        </div>
        <div class="demo-credentials">
          <h3>Available Accounts</h3>
          ${demoAccounts.map(([role, email, password]) => `<button type="button" onclick="localStorage.setItem('erpRole','${role}'); this.closest('form').querySelector('[name=email]').value='${email}'; this.closest('form').querySelector('[name=password]').value='${password}'; document.querySelectorAll('.role-grid span').forEach(el => el.classList.toggle('selected', el.dataset.role === '${role}'));"><strong>${role}</strong><span>${email}</span><small>${password}</small></button>`).join("")}
        </div>
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
    <select class="select" onchange="notifyAction('Class filter applied', this.value || 'All classes')"><option>Class</option><option>Form 1</option><option>Form 2</option><option>Form 3</option><option>Form 4</option></select>
    <select class="select" onchange="notifyAction('Section filter applied', this.value || 'All sections')"><option>Section</option><option>A</option><option>B</option><option>C</option></select>
    <button class="pill" onclick="openSortModal()">${icon("sort", 14)} Sort By A-Z</button>
  </div>`;
}

function dashboard() {
  const activeRole = currentRole();
  if (activeRole !== "Super Admin") return roleDashboard(activeRole);
  const metrics = [
    ["graduation-cap", "3654", "Total Students", "Present : 3643", "Absent : 11", "red"],
    ["presentation", "284", "Total Teachers", "Present : 254", "Absent : 30", "blue"],
    ["users", "162", "Total Staff", "Present : 161", "Absent : 02", "amber"],
    ["book-open", "82", "Total Subjects", "Inactive : 81", "Active : 01", "green"]
  ];
  return `${pageHead("Admin Dashboard", "Dashboard / Admin Dashboard", `<button class="btn primary" onclick="openAdmissionModal()">${icon("user-plus")} Add New Student</button><a class="btn ghost" href="#/fees">${icon("wallet")} Fees Details</a>`)}
    <section class="school-hero"><div><p class="eyebrow">Hillside Secondary School</p><h2>School operations at a glance</h2><p>Admissions, classes, fees, communication, and reports are ready for today’s work.</p></div><span>${icon("calendar-days", 16)} ${todayLabel()}</span></section>
    <div class="grid metrics">${metrics.map(metricCard).join("")}</div>
    <div class="grid two">
      <section class="card">${cardHead("Fees Collection", `<span class="muted">◆ Total Fee &nbsp;&nbsp; ◆ Collected Fee</span>`)}${bars()}</section>
      <section class="card">${cardHead("Leave Requests", `<span class="muted">▣ This Week⌄</span>`)}${leaveRequests()}</section>
    </div>
    <div class="grid three" style="margin-top:24px">
      <section class="card">${cardHead("Schedules", `<a href="#" class="muted">⊞ Add New</a>`)}${calendar()}</section>
      <section class="card">${cardHead("Attendance", `<span class="muted">▣ Today⌄</span>`)}${attendance()}</section>
      <section class="card">${cardHead("Quick Links", "")}${quickLinks()}</section>
    </div>`;
}

function roleDashboard(role) {
  if (role === "Director") return directorDashboard();
  if (role === "Admissions Officer") return admissionsDashboard();
  if (role === "Finance Officer" || role === "Finance") return financeDashboard();
  if (role === "Exams Officer") return examsDashboard();
  if (role === "Teacher") return teacherDashboard();
  return dashboard();
}

function metricCard([iconName, number, label, left, right, badge]) {
  return `<section class="card metric">
    <div class="metric-main"><span class="metric-icon">${iconPaths[iconName] ? icon(iconName, 30) : iconName}</span><div><h3>${number}</h3><p>${label}</p></div><span class="badge ${badge}" style="margin-left:auto">1.2%</span></div>
    <div class="metric-foot"><span>${left}</span><i class="vline"></i><span>${right}</span></div>
  </section>`;
}

function directorDashboard() {
  const metrics = [
    ["graduation-cap", "3654", "Active Students", "New : 284", "Transfers : 07", "blue"],
    ["wallet", "MWK 12.4M", "Fees Expected", "Collected : MWK 10.3M", "Balance : MWK 2.1M", "green"],
    ["file-chart", "812", "Exam Eligible", "Approved : 36", "Blocked : 18", "amber"],
    ["shield-check", "18", "Approvals", "Payment Edits", "Audit Items", "red"]
  ];
  return `${pageHead("Director Dashboard", "Dashboard / Director", `<a class="btn ghost" href="#/login">${icon("log-out")} Switch Role</a><a class="btn primary" href="#/analytics">${icon("bar-chart")} View Analytics</a>`)}
    <section class="director-hero"><div><p class="eyebrow">Executive Overview</p><h2>Hillside Secondary School</h2><p>Monitor admissions, fees, arrears, exam eligibility, and approvals from one workspace.</p></div><div class="director-score"><strong>92%</strong><span>Operational Health</span></div></section>
    <div class="grid metrics">${metrics.map(metricCard).join("")}</div>
    <div class="grid two">
      <section class="card">${cardHead("Collections & Arrears", `<span class="muted">${icon("calendar-days", 14)} This Term</span>`)}${bars()}</section>
      <section class="card">${cardHead("Director Actions", `<span class="muted">Priority</span>`)}<div class="request-list">
        ${[["Approve payment edit", "Accounts Office", "red"], ["Review exam eligibility exception", "Exams Office", "amber"], ["Open arrears report", "Form 4", "blue"], ["Audit deleted receipt request", "Finance", "red"]].map(([title, meta, color]) => `<article class="request-item"><div class="person-line"><span class="nav-icon">${icon("shield-check")}</span><div><strong>${title}</strong><span class="muted">${meta}</span></div><span class="badge ${color}">Open</span></div></article>`).join("")}
      </div></section>
    </div>
    <section class="section-panel" style="margin-top:24px"><div class="section-toolbar"><h2>Key Director Reports</h2><div class="filters"><a class="btn ghost" href="#/financial-reports">${icon("banknote")} Financial</a><a class="btn ghost" href="#/enrollment-reports">${icon("user-plus")} Enrollment</a><a class="btn ghost" href="#/compliance-reports">${icon("shield")} Compliance</a></div></div><div class="table-wrap">${directorTable()}</div></section>`;
}

function directorTable() {
  const rows = [["All Students", "3654", "Active records", "Ready"], ["All Payments", "1280", "This term", "Ready"], ["Arrears List", "214", "Requires follow-up", "Review"], ["Exam Eligible Students", "812", "Term 2", "Ready"], ["Audit Logs", "38", "Payment edits/deletions", "Review"]];
  return `<table><thead><tr><th>Report</th><th>Total</th><th>Scope</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map(([a,b,c,d]) => `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td><span class="badge ${statusClass(d)}">• ${d}</span></td><td><span class="row-tools">${icon("eye")} ${icon("download")}</span></td></tr>`).join("")}</tbody></table>`;
}

function financeDashboard() {
  const metrics = [
    ["banknote", "MWK 245K", "Today Collections", "Cash / Mobile / Bank", "Receipts : 128", "green"],
    ["wallet", "MWK 835K", "Pending Fees", "Partly Paid", "Unpaid : 47", "amber"],
    ["receipt", "1,208", "Receipts Issued", "This Term", "Voids : 03", "blue"],
    ["triangle-alert", "214", "Students With Arrears", "Director Review", "Critical : 36", "red"]
  ];
  const outstanding = backendData.stats?.balances_outstanding ? money(backendData.stats.balances_outstanding) : "MWK 2,050,050";
  return `${pageHead("Finance Dashboard", "Dashboard / Finance", `<a class="btn ghost" href="#/login">${icon("log-out")} Switch Role</a><button class="btn primary" onclick="openPaymentModal()">${icon("receipt")} Record Payment</button>`)}
    <section class="finance-overview"><div><p class="eyebrow">Finance Office</p><h2>Fees, receipts, and balances</h2><p>Track Kwacha collections, parent balances, and receipt activity for the current academic year.</p></div><strong>${money(backendData.stats?.payments_total || 2450000)}</strong></section>
    <div class="grid metrics">${metrics.map(metricCard).join("")}</div>
    <div class="stats-strip finance-strip">
      <div class="money-stack">${moneyCard("banknote", money(backendData.stats?.payments_total || 5050050), "Fees Collected", "green")}${moneyCard("wallet", outstanding, "Pending Fees", "amber")}${moneyCard("triangle-alert", outstanding, "Overdue Payments", "red")}</div>
      <section class="card">${cardHead("Collection Trend", `<span class="muted">${icon("calendar-days", 14)} This Month</span>`)}<div class="line-chart"><svg viewBox="0 0 600 220" preserveAspectRatio="none"><path d="M0 140 C80 142, 140 120, 210 92 S330 65, 390 95 S500 150, 600 70" fill="none" stroke="#4263e6" stroke-width="3"/></svg></div></section>
      <div class="grid" style="gap:24px">${progressCard("Tuition Fee", 80, "MWK 3,000,000/2,600,000 Collected", "var(--cyan)")}${progressCard("Activities", 20, "MWK 1,500,000/500,000 Collected", "var(--amber)")}</div>
      <div class="grid" style="gap:24px">${progressCard("Books & Supplies", 63, "MWK 2,500,000/1,000,000 Collected", "var(--blue)")}${progressCard("Miscellaneous", 98, "MWK 500,000/430,000 Collected", "var(--green)")}</div>
    </div>
    <section class="section-panel"><div class="section-toolbar"><h2>Recent Payments</h2><div class="filters"><button class="pill">${icon("calendar-days", 14)} Today</button><button class="pill">${icon("sort", 14)} Sort By A-Z</button></div></div><div class="table-wrap">${feesTable()}</div></section>`;
}

function admissionsDashboard() {
  const metrics = [
    ["user-plus", "284", "New Admissions", "This Year", "Pending : 18", "blue"],
    ["graduation-cap", "3,654", "Student Records", "Complete : 3,512", "Drafts : 42", "green"],
    ["users", "3,420", "Parent Contacts", "Verified : 3,101", "Missing : 67", "amber"],
    ["file-chart", "38", "Pending Documents", "Birth Cert / Transfer", "Urgent : 9", "red"]
  ];
  return `${pageHead("Admissions Dashboard", "Dashboard / Admissions Officer", `<a class="btn ghost" href="#/login">${icon("log-out")} Switch Role</a><button class="btn primary" onclick="openAdmissionModal()">${icon("user-plus")} New Admission</button>`)}
    <section class="role-overview admissions-overview"><div><p class="eyebrow">Admissions Desk</p><h2>Register learners without losing the paper trail</h2><p>Student records, parent contacts, transfer documents, and class placement stay together for review.</p></div><strong>${icon("refresh", 16)} Synced</strong></section>
    <div class="grid metrics">${metrics.map(metricCard).join("")}</div>
    <div class="grid two">
      <section class="card">${cardHead("Admissions by Class", `<span class="muted">${icon("calendar-days", 14)} This Year</span>`)}${bars()}</section>
      <section class="card">${cardHead("Follow-up Queue", `<span class="muted">Priority</span>`)}<div class="request-list">
        ${[["Missing transfer letter", "Aarav Sharma - III A", "red"], ["Parent phone not verified", "Riya Verma - II B", "amber"], ["Assign admission number", "Kavya Malhotra - VIII B", "blue"], ["Director review requested", "Scholarship admission", "green"]].map(([title, meta, color]) => `<article class="request-item"><div class="person-line"><span class="nav-icon">${icon("user-plus")}</span><div><strong>${title}</strong><span class="muted">${meta}</span></div><span class="badge ${color}">Open</span></div></article>`).join("")}
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
  return `${pageHead("Exams Dashboard", "Dashboard / Exams Officer", `<a class="btn ghost" href="#/login">${icon("log-out")} Switch Role</a><a class="btn primary" href="#/exam-export">${icon("download")} Export Lists</a>`)}
    <section class="role-overview exams-overview"><div><p class="eyebrow">Examinations Office</p><h2>Eligibility, candidate lists, and exports</h2><p>Track Form 1 to Form 4 exam readiness, fee clearance, holds, and generated lists by term.</p></div><strong>${icon("clipboard-check", 16)} Rules active</strong></section>
    <div class="grid metrics">${metrics.map(metricCard).join("")}</div>
    <div class="grid two">
      <section class="card">${cardHead("Candidate Trend", `<span class="muted">${academicYearLabel()}</span>`)}${bars()}</section>
      <section class="card">${cardHead("Exam Readiness", `<span class="muted">Term 2</span>`)}<div class="request-list">
        ${[["Form 4 candidate list", "812 ready", "green"], ["Fees hold list", "18 students blocked", "red"], ["Class lists export", "Excel + PDF", "blue"], ["Exam type setup", "Mid-term / Mock", "amber"]].map(([title, meta, color]) => `<article class="request-item"><div class="person-line"><span class="nav-icon">${icon("file-chart")}</span><div><strong>${title}</strong><span class="muted">${meta}</span></div><span class="badge ${color}">View</span></div></article>`).join("")}
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
        <section class="card">${cardHead("Performance", `<span class="muted">This Month</span>`)}<div class="performance-list">${[["Grading Timeliness","Excellent",95],["Student Avg. Grade","Good",78],["Student Attendance","Need Improvement",68],["Parent Feedback","Below Standard",62]].map(([a,b,p]) => `<div><p><span>${a}<br><small>${b}</small></span><span>${p}%</span></p><div class="track"><span class="fill" style="width:${p}%;background:var(--green)"></span></div></div>`).join("")}</div></section>
      </aside>
    </div>`;
}

function teacherInfoCards() {
  return [["users", "Gender", "Female", "blue"], ["calendar-days", "Date Of Birth", "April 14, 1990", "amber"], ["messages", "Email Address", "meera@example.com", "red"], ["phone", "Phone Number", "+91 9954866445", "green"], ["graduation-cap", "Qualification", "MBA", "blue"], ["id-card", "Experience", "+10 Years", "cyan"], ["shield-check", "Certificate", "Teacher registration verified", "cyan"], ["location", "Address", "Hillside Secondary School campus area", "purple"]].map(([iconName, label, value, color]) => `<article class="info-card"><span class="soft-icon ${color}">${icon(iconName)}</span><div><strong>${label}</strong><span>${value}</span></div></article>`);
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
  const legendItems = options.legend || [["Total Fee", "soft"], ["Collected Fee", "blue"]];
  const chartClass = options.compact ? "chart compact" : "chart";
  return `<div class="${chartClass}">
    ${chartLegend(legendItems)}
    <div class="bars paired">${months.map((m, index) => `<span class="bar-group" title="${m}"><span class="bar total" style="height:${total[index]}%"></span><span class="bar collected" style="height:${collected[index]}%"></span></span>`).join("")}</div>
    <div class="months">${months.map((m) => `<span>${m}</span>`).join("")}</div>
  </div>`;
}

function lineAreaChart(tone = "blue", compact = false) {
  const fill = tone === "red" ? "rgba(239, 42, 80, .12)" : "rgba(66, 99, 230, .12)";
  const stroke = tone === "red" ? "#ef2a50" : "#4263e6";
  return `<div class="line-chart ${compact ? "compact" : ""}">
    <svg viewBox="0 0 600 220" preserveAspectRatio="none">
      <path d="M0 140 C70 128, 120 116, 170 136 S245 170, 300 128 S390 92, 450 116 S540 150, 600 92 L600 220 L0 220 Z" fill="${fill}"/>
      <path d="M0 140 C70 128, 120 116, 170 136 S245 170, 300 128 S390 92, 450 116 S540 150, 600 92" fill="none" stroke="${stroke}" stroke-width="3"/>
    </svg>
    <span class="chart-tooltip ${tone}">${tone === "red" ? "MWK 500,000" : "MWK 600,000"}<small>July 2025</small></span>
  </div>`;
}

function leaveRequests() {
  return `<div class="request-list">${[["Raman","Physics Teacher","Emergency","12 - 13 May"],["Nandini","Maths Teacher","Medical","17 - 18 May"]].map((item) => `
    <article class="request-item">
      <div class="person-line"><span class="avatar">${initials(item[0])}</span><div><strong>${item[0]} <span class="badge ${item[2] === "Emergency" ? "red" : "green"}">${item[2]}</span></strong><span class="muted">${item[1]}</span></div><span class="mini-actions"><button style="background:var(--green)">✓</button><button style="background:var(--red)">×</button></span></div>
      <p class="muted" style="border-top:1px solid var(--line);padding-top:14px">Leave : <strong>${item[3]}</strong><span style="float:right">Apply on : <strong>12 May</strong></span></p>
    </article>`).join("")}</div>`;
}

function calendar() {
  const cells = ["S","M","T","W","T","F","S","27","28","29","30","31","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","27","19","20","21","22","23","24","25","26","27","28","29","30"];
  return `<div class="calendar"><h3>July 2024</h3><div class="calendar-grid">${cells.map((d) => `<span class="${["6","7","12"].includes(d) ? "active" : ""}">${d}</span>`).join("")}</div></div>`;
}

function attendance() {
  return `<div class="section-body"><div class="tabs" style="padding:0"><a class="tab active">Students</a><a class="tab">Teachers</a><a class="tab">Staff</a></div><div class="grid two" style="margin-top:18px"><div class="card pad" style="box-shadow:none;text-align:center"><strong>50</strong><br><span class="muted">Absent</span></div><div class="card pad" style="box-shadow:none;text-align:center"><strong>40</strong><br><span class="muted">Present</span></div></div><div style="height:160px;margin:22px auto 0;max-width:240px;border-radius:240px 240px 0 0;background:var(--blue)"></div></div>`;
}

function quickLinks() {
  const links = [["Calendar","calendar-days","var(--green)","var(--green-soft)"],["Events","megaphone","var(--blue)","var(--blue-soft)"],["Attendance","clipboard-check","var(--amber)","var(--amber-soft)"],["Exams","file-chart","var(--cyan)","var(--cyan-soft)"],["Fees","wallet","var(--red)","var(--red-soft)"],["Reports","bar-chart","#00b9ef","#def8ff"]];
  return `<div class="quick-grid">${links.map(([label, iconName, color, bg]) => `<div class="quick" style="background:${bg}"><span style="background:${color}">${icon(iconName, 22)}</span><strong>${label}</strong></div>`).join("")}</div>`;
}

function directoryPage(type) {
  const title = type[0].toUpperCase() + type.slice(1);
  const rows = type === "students" ? backendStudentRows() : type === "parents" ? backendParentRows() : teachers;
  const addHandler = type === "students" ? "openAdmissionModal()" : type === "parents" ? "openParentModal()" : "openTeacherModal()";
  return `${pageHead(title, `Dashboard / Peoples / ${title}`, `${tableActions()}<button class="btn primary" onclick="${addHandler}">${icon("user-plus")} Add ${title.slice(0, -1)}</button>`)}
    <section class="section-panel">
      <div class="section-toolbar"><h2>${title} Grid</h2>${filters("")}</div>
      <div class="section-body">
        <div class="directory ${type}">
          ${rows.map((row, index) => type === "students" ? studentCard(row, index) : type === "parents" ? parentCard(row, index) : teacherCard(row, index)).join("")}
        </div>
        <div class="load-more"><button class="btn primary">${icon("refresh")} Load More</button></div>
      </div>
    </section>`;
}

function studentCard(row, index) {
  return `<article class="card profile-card">
    <div class="profile-id"><span>${row[0]}</span><strong>⋮</strong></div>
    <div class="profile-main"><span class="avatar">${initials(row[1])}</span><div><strong>${row[1]}</strong><br><span>${row[2]}</span></div></div>
    <div class="profile-fields"><div><div class="field-label">Roll No</div>${row[3]}</div><div><div class="field-label">Gender</div>${row[4]}</div><div><div class="field-label">Joined On</div>${row[5]}</div></div>
    <div class="card-foot"><button class="tiny-btn" onclick="openDetailsModal('Student Details','${row[1]} - ${row[2]}')">${icon("eye")}</button><button class="tiny-btn" onclick="openDetailsModal('Call Parent','${row[1]}')">${icon("phone")}</button><button class="tiny-btn" onclick="location.hash='#/messaging'">${icon("messages")}</button></div>
  </article>`;
}

function parentCard(row, index) {
  return `<article class="card profile-card">
    <div class="profile-id"><span>${row[0]}</span><strong>⋮</strong></div>
    <div class="profile-main"><span class="avatar">${initials(row[1])}</span><div><strong>${row[1]}</strong><br><span>${row[2]}</span></div></div>
    <div class="profile-fields"><div><div class="field-label">Email</div>${row[3]}</div><div><div class="field-label">Phone</div>${row[4]}</div></div>
    <div class="card-foot"><span class="avatar small">${initials(row[5])}</span><span>${row[5]} ${row[6]}</span><button class="btn ghost" style="margin-left:auto" onclick="openDetailsModal('Parent Details','${row[1]} - ${row[3]}')">View Details</button></div>
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
  return `${pageHead("Fees Management", "Dashboard / Management / Fees Group", tableActions())}
    <div class="stats-strip fees-summary-strip">
      <div class="money-stack">
        ${moneyCard("banknote", money(backendData.stats?.payments_total || 5050050), "Fees Collected", "green")}
        ${moneyCard("wallet", "MWK 3,050,050", "Pending Fees", "amber")}
        ${moneyCard("triangle-alert", "MWK 2,050,050", "Overdue Payments", "red")}
      </div>
      <section class="card trend-card">${cardHead("Fees Collection Trend", `<span class="muted">${icon("calendar-days", 14)} This Month</span>`)}${lineAreaChart("blue", true)}</section>
      <div class="grid" style="gap:24px">${progressCard("Tuition Fee", 80, "MWK 3,000,000/2,600,000 Collected", "var(--cyan)")}${progressCard("Activities", 20, "MWK 1,500,000/500,000 Collected", "var(--amber)")}</div>
      <div class="grid" style="gap:24px">${progressCard("Books & Supplies", 63, "MWK 2,500,000/1,000,000 Collected", "var(--blue)")}${progressCard("Miscellaneous", 98, "MWK 500,000/430,000 Collected", "var(--green)")}</div>
    </div>
    <section class="section-panel compact-form">
      <div class="section-toolbar"><h2>Record Payment</h2><span class="muted">Saved to the finance register</span></div>
      <form class="record-form" onsubmit="event.preventDefault(); createPayment(this);">
        <label><span>Student</span><select name="student_id">${(backendData.students || []).map((student) => `<option value="${student.id}">${student.first_name} ${student.last_name} - ${student.class_name}${student.section || ""}</option>`).join("")}<option value="">General payment</option></select></label>
        <label><span>Fee Type</span><select name="fee_type"><option>Tuition Fee</option><option>Examination Fee</option><option>Trip Fee</option><option>Other Fee</option></select></label>
        <label><span>Academic Year</span><select name="academic_year"><option>${activeAcademicYear()}</option><option>2024 / 2025</option><option>2026 / 2027</option></select></label>
        <label><span>Term</span><select name="term"><option>Term 1</option><option>Term 2</option><option>Term 3</option></select></label>
        <label><span>Amount (MWK)</span><input name="amount" type="number" min="1" value="250000" required></label>
        <label><span>Method</span><select name="method"><option>Mobile Money</option><option>Cash</option><option>Bank Transfer</option></select></label>
        <button class="btn primary" type="submit">${icon("receipt")} Save Payment</button>
      </form>
    </section>
    <section class="section-panel">
      <div class="section-toolbar"><h2>Fees Collection</h2><div class="filters"><button class="pill">+ Generate Invoice</button><select class="select"><option>This Month</option></select><select class="select"><option>All Status</option></select><select class="select"><option>All Classes</option></select></div></div>
      <div class="section-toolbar"><span>Row Per Page <select class="select"><option>10</option></select> Entries</span><div class="search"><input placeholder="Search"></div></div>
      <div class="table-wrap">${feesTable()}</div>
    </section>`;
}

function moneyCard(iconName, value, label, color) {
  return `<section class="card money-card"><span class="metric-icon" style="background:var(--${color}-soft);color:var(--${color})">${iconPaths[iconName] ? icon(iconName, 28) : iconName}</span><div><h3>${value}</h3><span class="muted">${label}</span></div></section>`;
}

function progressCard(title, value, detail, color) {
  return `<section class="card progress-card"><div class="progress-row"><span>${title}</span><span>${value}%</span></div><div class="track"><span class="fill" style="width:${value}%;background:${color}"></span></div><p style="margin-top:26px"><strong>${detail.split("/")[0]}</strong>/${detail.split("/")[1] || ""}</p></section>`;
}

function feesTable() {
  const liveRows = backendPaymentRows();
  if (liveRows) {
    return `<table><thead><tr><th>□</th><th>Receipt</th><th>Student</th><th>Fee Type</th><th>Term</th><th>Class</th><th>Amount</th><th>Balance After</th><th>Payment Mode</th><th>Paid On</th><th>Status</th><th>Action</th></tr></thead><tbody>
      ${liveRows.map((row) => `<tr><td>□</td><td><a onclick="openReceiptModal('${row[0]}')">${row[0]}</a></td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[5]}</td><td>${money(row[6])}</td><td>${money(row[7])}</td><td>${row[8]}</td><td>${row[10]}</td><td><span class="badge ${statusClass(row[9])}">• ${row[9]}</span></td><td><span class="row-tools"><button class="icon-mini" onclick="openReceiptModal('${row[0]}')" title="Receipt">${icon("receipt", 16)}</button><button class="icon-mini" onclick="window.print()" title="Print">${icon("printer", 16)}</button></span></td></tr>`).join("")}
    </tbody></table>`;
  }
  return `<table><thead><tr><th>□</th><th>ID</th><th>Student Name</th><th>Fees Type</th><th>Class</th><th>Tuition Fee</th><th>Activities Fee</th><th>Miscellaneous</th><th>Discount / Scholarship</th><th>Adjustment / Refund</th><th>Total Amount</th><th>Total Amount</th><th>Payment Mode</th><th>Status</th><th>Action</th></tr></thead><tbody>
    ${feeRows.map((r, index) => {
      const total = r.tuition + r.activities + r.misc;
      const cls = r.status === "Paid" || r.status === "Active" ? "green" : r.status === "Pending" ? "amber" : "red";
      return `<tr><td>□</td><td><a>${r.id}</a></td><td>${r.name}</td><td>${r.type}</td><td>${r.className}</td><td>${money(r.tuition)}</td><td>${money(r.activities)}</td><td>${money(r.misc)}</td><td>${index % 3 === 0 ? "Discount MWK 500" : index % 4 === 0 ? "Scholarship MWK 1000" : "–"}</td><td>${index === 2 ? "MWK 300 Refunded" : "–"}</td><td>${money(total)}</td><td>${money(total)}</td><td>${r.mode}</td><td><span class="badge ${cls}">• ${r.status}</span></td><td>⋮</td></tr>`;
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
  return `<section class="section-panel"><div class="section-toolbar"><h2>Manage Curriculum</h2><div class="filters"><button class="pill">▣ 15 Apr 2025 - 24 May 2025</button><button class="pill">▽ Filter</button><button class="pill">↕ Sort By A-Z</button></div></div><div class="section-toolbar"><span>Row Per Page <select class="select"><option>10</option></select> Entries</span><div class="search"><input placeholder="Search"></div></div><div class="table-wrap"><table><thead><tr><th>□</th><th>ID</th><th>Class</th><th>Section</th><th>Age Group</th><th>Total Topics</th><th>Weekly Goals</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map((r) => `<tr><td>□</td><td><a>${r[0]}</a></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><span class="badge ${r[6] === "Active" ? "green" : "red"}">• ${r[6]}</span></td><td>${actionIcons()}</td></tr>`).join("")}</tbody></table></div></section>`;
}

function lessonPlanning() {
  const plans = [["Class V, B","Subject : Physics","7 July 2025","Introduction Note to Physics on Today’s Tech","green",42],["Class V, A","Subject : Biometric","10 May 2025","Biometric & their Working Functionality","amber",42],["Class IV, C","Subject : Biometric","10 May 2025","Analyze and interpret literary texts","blue",42],["Class IV, C","Subject : English","10 Dec 2025","Enhance vocabulary and grammar skills","red",0]];
  const all = [...plans, ...plans, ...plans];
  return `<section class="section-panel"><div class="section-toolbar"><h2>Syllabus / Lesson Plan</h2><div class="filters"><button class="pill">▣ 15 Apr 2025 - 24 May 2025</button><button class="pill">▽ Filter</button><button class="pill">↕ Sort By A-Z</button></div></div><div class="section-body"><div class="curriculum-cards">${all.map(([klass, subject, date, title, color, pct]) => `<article class="card lesson-plan"><div class="class-tag" style="background:var(--${color}-soft);color:var(--${color})">${klass}</div><p><span>${subject}</span><span style="float:right">${date}</span></p><h3>${title}</h3><div class="track"><span class="fill" style="width:${pct}%;background:var(--${color})"></span></div><div class="lesson-actions"><span>♢ Reschedule</span><span>♧ Share</span></div></article>`).join("")}</div></div></section>`;
}

function assessment() {
  const names = students.slice(0, 10);
  const progress = [96,96,76,70,60,60,58,38,34,22];
  return `<section class="section-panel"><div class="section-toolbar"><h2>Manage Curriculum</h2><div class="filters"><button class="pill">▣ 15 Apr 2025 - 24 May 2025</button><button class="pill">▽ All Subject⌄</button><button class="pill">↕ Sort By A-Z</button></div></div><div class="section-toolbar"><span>Row Per Page <select class="select"><option>10</option></select> Entries</span><div class="search"><input placeholder="Search"></div></div><div class="table-wrap"><table><thead><tr><th>□</th><th>ID</th><th>Student Name</th><th>Class</th><th>Section</th><th>Overall Progress</th><th>Status</th></tr></thead><tbody>${names.map((s, i) => {
    const pct = progress[i];
    const color = pct > 50 ? "var(--green)" : pct > 30 ? "var(--amber)" : "var(--red)";
    return `<tr><td>□</td><td><a>C13803${8 - i}</a></td><td>${s[1]}</td><td>${["I","I","II","II","II","III","III","IV","IV","V"][i]}</td><td>${["A","B","A","B","C","A","B","A","B","A"][i]}</td><td><span style="display:inline-block;width:45px">${pct}%</span><span class="track" style="display:inline-block;width:70%;vertical-align:middle"><span class="fill" style="width:${pct}%;background:${color}"></span></span></td><td>${pct > 70 ? "Excellent" : pct > 50 ? "Good" : pct > 30 ? "Average" : "Poor"}</td></tr>`;
  }).join("")}</tbody></table></div></section>`;
}

function inventory() {
  const items = [["Chemistry Lab Glassware", 88, "Only 8 sets left", "blue"],["Printer Paper A4", 78, "Only 20 sets left", "cyan"],["Printer Paper A4", 92, "Only 10 sets left", "cyan"],["Whiteboard Markers", 80, "Only 12 sets left", "green"],["Sports Equipment", 66, "Only 5 sets left", "amber"],["Sports Equipment", 76, "Only 7 sets left", "blue"],["Sports Equipment", 74, "Only 20 sets left", "green"],["Sports Equipment", 91, "Only 3 sets left", "amber"]];
  return `<section class="section-panel"><div class="section-toolbar"><h2>Inventory Alerts</h2><div class="filters"><button class="pill">♧ Class II⌄</button><button class="pill">↕ Sort By A-Z</button></div></div><div class="section-body"><div class="inventory-list">${items.map(([name, pct, left, color]) => `<div class="inventory-row"><strong>${name}</strong><div class="track"><span class="fill" style="width:${pct}%;background:var(--${color})"></span></div><span>${left}</span></div>`).join("")}</div></div></section>`;
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
      <div class="table-wrap"><table><thead><tr><th>□</th><th>ID</th><th>Name</th><th>Role</th><th>Basic Salary</th><th>Deductions</th><th>Net Salary</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${staffRows.map((r, i) => {
          const cls = statuses[i] === "Approved" ? "green" : statuses[i] === "Pending" ? "amber" : "red";
          return `<tr><td>□</td><td><a>P73819${8 - i}</a></td><td><span class="inline-person"><span class="avatar small">${initials(r[1])}</span>${r[1]}</span></td><td>${r[2]}</td><td>${money(salaries[i])}</td><td>${money(deductions[i])}</td><td>${money(salaries[i] - deductions[i])}</td><td><span class="badge ${cls}">• ${statuses[i]}</span></td><td><button class="btn ghost small-btn">${statuses[i] === "Approved" ? "Pay Now" : "View Payslip"}</button></td></tr>`;
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
      <div class="table-wrap"><table><thead><tr><th>□</th><th>ID</th><th>Name</th><th>Leave Type</th><th>From Date</th><th>To Date</th><th>Days</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${staffRows.map((r, i) => {
          const cls = statuses[i] === "Pending" ? "amber" : "green";
          return `<tr><td>□</td><td><a>P73819${8 - i}</a></td><td><span class="inline-person"><span class="avatar small">${initials(r[1])}</span>${r[1]}</span></td><td>${types[i]}</td><td>${from[i]}</td><td>${from[(i + 2) % from.length]}</td><td>${days[i]}</td><td><span class="badge ${cls}">• ${statuses[i]}</span></td><td>${i % 3 === 0 ? '<button class="btn primary small-btn">Approve</button> <button class="btn ghost small-btn">Reject</button>' : '<button class="btn ghost small-btn">View</button>'}</td></tr>`;
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
      <div class="table-wrap"><table><thead><tr><th>□</th><th>ID</th><th>Name</th><th>Role</th><th>Attendance</th><th>Remarks</th><th>Action</th></tr></thead><tbody>
        ${staffRows.map((r, i) => `<tr><td>□</td><td><a>P73819${8 - i}</a></td><td><span class="inline-person"><span class="avatar small">${initials(r[1])}</span>${r[1]}</span></td><td>${r[2]}</td><td><span style="display:inline-block;width:42px">${scores[i]}%</span><span class="track table-progress"><span class="fill" style="width:${scores[i]}%;background:var(--green)"></span></span></td><td>${remarks[i]}</td><td><button class="btn ghost small-btn">View</button></td></tr>`).join("")}
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
            ${chatBubble("Good afternoon. Please confirm whether the fee reminder should be sent to all Form 3 parents.", "in")}
            ${chatBubble("Confirmed. Send it to Form 3 A and B first, then share the delivery report.", "out")}
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
      <div class="table-wrap"><table><thead><tr><th>□</th><th>ID</th><th>Student Name</th><th>Class</th><th>Section</th><th>Report Type</th><th>Report Period</th><th>Last Updated</th><th>Status</th><th>Action</th></tr></thead><tbody>
        ${rows.map((r, i) => `<tr><td>□</td><td><a>C13803${8 - Math.min(i, 7)}</a></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><span class="badge ${r[6] === "Ready" ? "green" : "amber"}">• ${r[6]}</span></td><td>${actionIcons()}</td></tr>`).join("")}
      </tbody></table></div>${pagination("08")}
    </section>`;
}

function admissionsTable() {
  const rows = backendData.students?.length ? backendData.students.map((student) => [
    student.admission_no,
    `${student.first_name} ${student.last_name}`,
    `${student.class_name}${student.section ? ` ${student.section}` : ""}`,
    student.guardian ? `Parent: ${student.guardian.name}` : "Parent pending",
    student.status
  ]) : [
    ["ADM-2026-001", "Thoko Banda", "Form 1", "Parent verified", "Submitted"],
    ["ADM-2026-002", "Madalitso Phiri", "Form 2", "Missing transfer letter", "Review"],
    ["ADM-2026-003", "Tadala Mbewe", "Form 1", "Ready for approval", "Ready"],
    ["ADM-2026-004", "Chisomo Tembo", "Form 3", "Scholarship review", "Pending"],
    ["ADM-2026-005", "Fatsani Zulu", "Form 1", "Documents complete", "Approved"]
  ];
  return `<table><thead><tr><th>Application ID</th><th>Student</th><th>Class</th><th>Stage</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map((r) => `<tr><td><a>${r[0]}</a></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="badge ${statusClass(r[4])}">• ${r[4]}</span></td><td>${actionIcons()}</td></tr>`).join("")}</tbody></table>`;
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
      ${circleMetric(String(backendData.stats?.students || 284), "New Applications", academicYearLabel(), "blue")}
      ${circleMetric("238", "Approved", "Ready to enroll", "green")}
      ${circleMetric("28", "Pending Review", "Documents / approvals", "amber")}
      ${circleMetric("18", "Returned", "Needs correction", "red")}
    </div>
    <section class="section-panel compact-form">
      <div class="section-toolbar"><h2>Register Student</h2><span class="muted">Student and parent records are saved together</span></div>
      <form class="record-form" onsubmit="event.preventDefault(); createAdmission(this);">
        <label><span>First Name</span><input name="first_name" required placeholder="Student first name"></label>
        <label><span>Last Name</span><input name="last_name" required placeholder="Student last name"></label>
        <label><span>Student Type</span><select name="student_type"><option>Day Scholar</option><option>Boarding</option></select></label>
        <label><span>Class</span><select name="class_name"><option>Form 1</option><option>Form 2</option><option>Form 3</option><option>Form 4</option></select></label>
        <label><span>Section</span><select name="section"><option>A</option><option>B</option><option>C</option></select></label>
        <label><span>Gender</span><select name="gender"><option>Female</option><option>Male</option></select></label>
        <label><span>Joined On</span><input name="joined_on" type="date"></label>
        <label><span>Parent / Guardian</span><input name="guardian_name" required placeholder="Full name"></label>
        <label><span>Parent Email</span><input name="guardian_email" type="email" placeholder="name@example.com"></label>
        <label><span>Parent Phone</span><input name="guardian_phone" placeholder="+265 ..."></label>
        <button class="btn primary" type="submit">${icon("user-plus")} Save Admission</button>
      </form>
    </section>
    <section class="section-panel"><div class="section-toolbar"><h2>Manage Admissions</h2><div class="filters"><select class="select"><option>Class</option></select><select class="select"><option>Status</option></select><button class="pill">${icon("sort", 14)} Sort By A-Z</button></div></div>${tableSearch()}<div class="table-wrap">${admissionsTable()}</div>${pagination()}</section>`;
}

function balancesPage(kind) {
  if (["student-balances", "arrears"].includes(kind) && backendData.balances?.length) {
    const allRows = backendData.balances
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
      ]);
    const title = kind === "arrears" ? "Arrears" : "Student Balances";
    return `${pageHead(title, `Dashboard / Fees & Accounts / ${title}`, tableActions())}
      <section class="section-panel">
        <div class="section-toolbar"><h2>${kind === "arrears" ? "Outstanding Balances" : "Balance Summary"}</h2><div class="filters"><button class="pill" onclick="openAcademicYearModal()">${icon("calendar-days", 14)} ${activeAcademicYear()}</button><button class="pill" onclick="openFilterModal('Balance Filters')">${icon("filter", 14)} Filter</button><button class="pill" onclick="openSortModal()">${icon("sort", 14)} Sort By A-Z</button></div></div>
        ${tableSearch()}
        <div class="table-wrap"><table><thead><tr><th>ID</th><th>Student</th><th>Class</th><th>Fee / Term</th><th>Due</th><th>Paid</th><th>Balance</th><th>Status</th><th>Action</th></tr></thead><tbody>
          ${allRows.map((row) => `<tr><td><a>${row[0]}</a></td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td><td><strong>${row[6]}</strong></td><td><span class="badge ${statusClass(row[7])}">• ${row[7]}</span></td><td>${actionIcons()}</td></tr>`).join("")}
        </tbody></table></div>${pagination()}
      </section>`;
  }
  const map = {
    receipts: ["Receipts", "Fees & Accounts / Receipts", "Receipt Register", [["RCPT-7821", "Roshni Negi", "Tuition Fee", "MWK 5,550", "Online", "Approved"], ["RCPT-7820", "Akash Rawat", "Tuition Fee", "MWK 5,950", "Mobile Money", "Approved"], ["RCPT-7819", "Vivaan Mehta", "Activities", "MWK 3,800", "Cash", "Pending"], ["RCPT-7818", "Riya Verma", "Monthly Fee", "MWK 3,630", "Mobile Money", "Approved"]]],
    "student-balances": ["Student Balances", "Fees & Accounts / Student Balances", "Balance Summary", [["BAL-1001", "Roshni Negi", "III A", "MWK 0", "Cleared", "Ready"], ["BAL-1002", "Akash Rawat", "IV B", "MWK 1,250", "Partial", "Pending"], ["BAL-1003", "Aarav Sharma", "III A", "MWK 0", "Cleared", "Ready"], ["BAL-1004", "Vivaan Mehta", "I B", "MWK 4,300", "Arrears", "Review"]]],
    arrears: ["Arrears", "Fees & Accounts / Arrears", "Arrears Follow-up", [["ARR-4101", "Vivaan Mehta", "I B", "MWK 4,300", "Parent called", "Review"], ["ARR-4102", "Riya Verma", "II B", "MWK 2,700", "SMS sent", "Pending"], ["ARR-4103", "Ishaan Bansal", "VI A", "MWK 6,200", "Director review", "Review"], ["ARR-4104", "Neha Gupta", "IX A", "MWK 1,800", "Payment plan", "Pending"]]],
    "daily-collections": ["Daily Collections", "Fees & Accounts / Daily Collections", "Daily Collection Register", [["DAY-0615", "Cash", "42 payments", "MWK 72,000", "Accounts Office", "Ready"], ["DAY-0615-M", "Mobile Money", "81 payments", "MWK 118,000", "Accounts Office", "Ready"], ["DAY-0615-B", "Bank", "18 payments", "MWK 55,000", "Accounts Office", "Ready"]]],
    "term-collections": ["Term Collections", "Fees & Accounts / Term Collections", "Term Collection Summary", [["TERM-1", "Tuition", "1,820 payments", "MWK 4,820,000", "82%", "Ready"], ["TERM-1-A", "Activities", "1,540 payments", "MWK 930,000", "74%", "Ready"], ["TERM-1-B", "Books & Supplies", "1,120 payments", "MWK 710,000", "63%", "Pending"]]]
  };
  const [title, crumbs, heading, rows] = map[kind];
  return inventoryTablePage(title, crumbs, heading, ["ID", "Student / Type", "Class / Count", "Amount", "Notes", "Status"], rows);
}

function examPage(kind) {
  const map = {
    "exam-lists": ["Candidate Lists", "Exams Management / Candidate Lists", "Exam Candidate Lists", [["EXL-2026-F1", "Form 1", "186 candidates", "Mid Term", "Excel + PDF", "Ready"], ["EXL-2026-F2", "Form 2", "174 candidates", "Mid Term", "Excel + PDF", "Ready"], ["EXL-2026-F3", "Form 3", "206 candidates", "Mock", "Excel + PDF", "Pending"], ["EXL-2026-F4", "Form 4", "246 candidates", "MSCE Prep", "Excel + PDF", "Ready"]]],
    "eligible-students": ["Eligible Students", "Exams Management / Eligible Students", "Eligibility Register", [["ELG-001", "Roshni Negi", "III A", "Fees cleared", "Candidate no issued", "Eligible"], ["ELG-002", "Akash Rawat", "IV B", "Balance remains", "No candidate no", "Hold"], ["ELG-003", "Aarav Sharma", "III A", "Fees cleared", "Candidate no issued", "Eligible"], ["ELG-004", "Vivaan Mehta", "I B", "Missing admission file", "Records office", "Review"]]],
    "exam-export": ["Excel / PDF Export", "Exams Management / Export", "Export Queue", [["EXP-901", "Form 4 Candidate List", "Excel", "Exams Officer", "Generated today", "Ready"], ["EXP-900", "Form 3 Candidate List", "PDF", "Exams Officer", "Generated today", "Ready"], ["EXP-899", "Eligibility Hold List", "Excel", "Director", "Pending approval", "Pending"]]],
    "exam-settings": ["Exam Settings", "Exams Management / Exam Settings", "Exam Configuration", [["SET-01", "Mid Term", "Term 2", "Open", "Eligibility required", "Active"], ["SET-02", "Mock Exams", "Term 3", "Draft", "Director approval", "Pending"], ["SET-03", "Final Exams", "Term 3", "Draft", "Fees clearance", "Pending"]]],
    "exam-types": ["Exam Types", "Academic Records / Exam Types", "Exam Types", [["TYPE-01", "Mid Term", "All classes", "Term 1 and 2", "Continuous assessment", "Active"], ["TYPE-02", "Mock Exam", "Form 4", "Term 3", "MSCE readiness", "Active"], ["TYPE-03", "Final Exam", "All classes", "Term 3", "Promotion decision", "Active"]]]
  };
  const [title, crumbs, heading, rows] = map[kind];
  return inventoryTablePage(title, crumbs, heading, ["ID", "Name", "Scope", "Period", "Notes", "Status"], rows);
}

function setupPage(kind) {
  const map = {
    classes: ["Classes & Sections", "Academic Setup / Classes & Sections", "Class Setup", [["CLS-01", "Form 1", "A, B, C", "186 students", "Mr. Banda", "Active"], ["CLS-02", "Form 2", "A, B, C", "174 students", "Ms. Phiri", "Active"], ["CLS-03", "Form 3", "A, B, C", "206 students", "Mr. Mbewe", "Active"], ["CLS-04", "Form 4", "A, B", "246 students", "Ms. Tembo", "Active"]]],
    subjects: ["Subjects", "Academic Setup / Subjects", "Subject Setup", [["SUB-01", "Mathematics", "Core", "Forms 1-4", "8 teachers", "Active"], ["SUB-02", "English", "Core", "Forms 1-4", "7 teachers", "Active"], ["SUB-03", "Physics", "Science", "Forms 3-4", "3 teachers", "Active"], ["SUB-04", "Computer Studies", "Elective", "Forms 2-4", "2 teachers", "Active"]]],
    "academic-years": ["Academic Years", "Academic Setup / Academic Years", "Academic Calendar", [["AY-2026", academicYearLabel(), "Open", "3 terms", "Current year", "Active"], ["AY-2025", "2025 / 2026", "Closed", "3 terms", "Archived", "Completed"]]],
    terms: ["Terms", "Academic Setup / Terms", "Term Setup", [["TRM-01", "Term 1", "Open", "Jan - Apr", "Fees active", "Active"], ["TRM-02", "Term 2", "Draft", "May - Aug", "Exam setup", "Pending"], ["TRM-03", "Term 3", "Draft", "Sep - Dec", "Promotion setup", "Pending"]]]
  };
  const [title, crumbs, heading, rows] = map[kind];
  return inventoryTablePage(title, crumbs, heading, ["ID", "Name", "Status / Type", "Scope", "Notes", "State"], rows);
}

function adminPage(kind) {
  const map = {
    users: ["Users", "System Administration / Users", "System Users", [["USR-001", "Admin User", "Super Admin", "admin@hillside.edu", "Full access", "Active"], ["USR-002", "Director", "Director", "director@hillside.edu", "Leadership", "Active"], ["USR-003", "Accounts Desk", "Finance Officer", "finance@hillside.edu", "Fees only", "Active"], ["USR-004", "Teacher Demo", "Teacher", "teacher@hillside.edu", "Assigned classes", "Active"]]],
    roles: ["Roles & Permissions", "System Administration / Roles", "Role Permissions", [["ROLE-01", "Super Admin", "All modules", "Create / update / delete", "System owner", "Active"], ["ROLE-02", "Director", "Reports + approvals", "Read + approve", "Leadership", "Active"], ["ROLE-03", "Finance Officer", "Fees modules", "Payments + receipts", "Accounts", "Active"], ["ROLE-04", "Teacher", "Assigned students", "Read only", "Classroom", "Active"]]],
    "audit-logs": ["Audit Logs", "System Administration / Audit Logs", "Recent Audit Logs", [["AUD-9001", "Payment edit requested", "Finance Officer", "Receipt RCPT-7819", "Director approval required", "Review"], ["AUD-9000", "Student record updated", "Admissions Officer", "ADM-2026-004", "Documents added", "Completed"], ["AUD-8999", "Exam export generated", "Exams Officer", "EXP-901", "PDF + Excel", "Completed"], ["AUD-8998", "Role viewed", "Director", "Finance Officer", "No change", "Completed"]]]
  };
  const [title, crumbs, heading, rows] = map[kind];
  return inventoryTablePage(title, crumbs, heading, ["ID", "Record", "Owner", "Scope", "Notes", "Status"], rows);
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
      ${[["Chemistry Lab Glassware", 88, "Only 8 sets left", "blue"], ["Printer Paper A4", 78, "Only 20 packs left", "cyan"], ["Whiteboard Markers", 80, "Only 12 boxes left", "green"], ["Sports Equipment", 66, "Only 5 sets left", "amber"], ["First Aid Kits", 40, "Only 3 kits left", "red"]].map(([name, pct, left, color]) => `<div class="inventory-row"><strong>${name}</strong><div class="track"><span class="fill" style="width:${pct}%;background:var(--${color})"></span></div><span>${left}</span></div>`).join("")}
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
  const kpis = [
    ["Financial Report", "MWK 6,452,224", "banknote", "red", "View Details"],
    ["Enrollment Reports", "85", "user-plus", "blue", "View Details"],
    ["Academic Progress", "76%", "trending-up", "green", "View Details"],
    ["Compliance Reports", "9.2/10", "file-chart", "cyan", "View Details"]
  ];
  const transactions = [
    ["16 Jun 2026", "Tuition fee received", "Tuition Fees", "Income", "MWK 550,000", "Completed"],
    ["15 Jun 2026", "Classroom repair payment", "Maintenance", "Expense", "MWK 80,000", "Pending"],
    ["14 Jun 2026", "Books and materials sale", "Books Sale", "Income", "MWK 125,000", "Completed"],
    ["13 Jun 2026", "Stationery purchase", "Stationery Buy", "Expense", "MWK 32,000", "Pending"],
    ["12 Jun 2026", "Transport fees for Form 3", "Transport Fees", "Income", "MWK 180,000", "Completed"]
  ];
  const notices = [
    ["New syllabus instructions", "Added on 11 Jun 2026", "20 Days", "blue"],
    ["Environment club programme", "Added on 21 Apr 2026", "15 Days", "green"],
    ["Exam preparation notice", "Added on 13 Mar 2026", "12 Days", "red"],
    ["Online class preparation", "Added on 24 May 2026", "02 Days", "cyan"]
  ];

  return `${pageHead("Analytics Dashboard", "Dashboard / Reporting & Analytics / Analytics Dashboard", tableActions())}
    <div class="analytics-kpi-grid">${kpis.map(([title, value, iconName, color, action]) => `
      <section class="card analytics-kpi">
        <span class="metric-icon" style="background:var(--${color}-soft);color:var(--${color})">${icon(iconName, 28)}</span>
        <div><h2>${value}</h2><p>${title}</p></div>
        <button class="btn primary" onclick="openDetailsModal('${title}', '${value}')">${action}</button>
      </section>`).join("")}</div>
    <div class="analytics-premium-grid">
      <div class="money-stack analytics-money">
        <section class="card money-line-card">
          <span class="soft-icon blue">${icon("user-plus")}</span>
          <p>Total Earnings</p><h2>MWK 5,050,050</h2>
          ${lineAreaChart("blue", true)}
        </section>
        <section class="card money-line-card">
          <span class="soft-icon red">${icon("wallet")}</span>
          <p>Total Expenses</p><h2>MWK 4,545,024</h2>
          ${lineAreaChart("red", true)}
        </section>
      </div>
      <section class="card analytics-enrollment">
        ${cardHead("Enrollment Trends", `<span class="muted">${icon("calendar-days", 14)} This Year - ${activeAcademicYear()}</span>`)}
        ${bars({ compact: true, total: [32, 46, 52, 38, 68, 42, 60, 56, 36, 72, 20, 12], collected: [10, 16, 14, 6, 20, 11, 17, 16, 8, 11, 6, 4], legend: [["New Admissions", "blue"], ["Dropouts", "soft"]] })}
      </section>
    </div>
    <div class="analytics-lower-grid">
      <section class="section-panel">
        <div class="section-toolbar"><h2>Recent Transactions</h2><div class="filters"><select class="select"><option>All Categories</option></select><select class="select"><option>This Term</option></select><div class="search"><input placeholder="Search"></div></div></div>
        <div class="table-wrap"><table><thead><tr><th>Date</th><th>Description</th><th>Category</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead><tbody>
          ${transactions.map((row) => `<tr>${row.map((cell, index) => index === 5 ? `<td><span class="badge ${statusClass(cell)}">• ${cell}</span></td>` : `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </tbody></table></div>
      </section>
      <section class="card">
        ${cardHead("Notice Board", `<a class="muted">View All</a>`)}
        <div class="notice-list">${notices.map(([title, date, due, color]) => `<article><span class="soft-icon ${color}">${icon(color === "red" ? "bell" : "file-chart", 16)}</span><div><strong>${title}</strong><small>${date}</small></div><span class="pill">${icon("clock", 13)} ${due}</span></article>`).join("")}</div>
      </section>
    </div>
    <div class="analytics-shortcuts">
      ${[["View Attendance", "calendar-days", "amber"], ["New Events", "megaphone", "green"], ["Finance & Accounts", "wallet", "cyan"], ["Compliance Review", "shield-check", "blue"]].map(([label, iconName, color]) => `<button class="shortcut-tile ${color}"><span>${icon(iconName)}</span><strong>${label}</strong><i>${icon("chevron-right", 15)}</i></button>`).join("")}
    </div>`;
}

function financialReportsPage() {
  const rows = [["FIN-501", "Daily Collections", "Accounts", "MWK 245,000", "Today", "Ready"], ["FIN-500", "Term Arrears", "Director", "MWK 2,100,000", "Term 2", "Ready"], ["FIN-499", "Receipt Register", "Accounts", "1,208", "June", "Ready"], ["FIN-498", "Fee Balance Summary", "Director", "MWK 835,000", "June", "Pending"]];
  return inventoryTablePage("Financial Reports", "Reporting & Analytics / Financial Reports", "Financial Reports", ["ID", "Report", "Owner", "Value", "Period", "Status"], rows);
}

function enrollmentReportsPage() {
  return reportDashboard("Enrollment Reports", "Reporting & Analytics / Enrollment Reports", [["Total Enrolled", "3,654", "blue"], ["New Admissions", "284", "green"], ["Transfers", "19", "amber"], ["Withdrawals", "7", "red"]], "Enrollment by Class");
}

function academicProgressPage() {
  return reportDashboard("Academic Progress", "Reporting & Analytics / Academic Progress", [["Passing Rate", "85%", "green"], ["Average Score", "72%", "blue"], ["Needs Support", "148", "amber"], ["At Risk", "31", "red"]], "Academic Progress");
}

function complianceReportsPage() {
  const rows = [["COMP-41", "Audit Log Review", "Director", "Monthly", "Completed", "Ready"], ["COMP-40", "Payment Edit Approvals", "Accounts", "Weekly", "Pending", "Review"], ["COMP-39", "Student Data Completeness", "Admissions", "Termly", "Completed", "Ready"], ["COMP-38", "Exam Eligibility Rules", "Exams", "Termly", "Completed", "Ready"]];
  return inventoryTablePage("Compliance Reports", "Reporting & Analytics / Compliance Reports", "Compliance Reports", ["ID", "Report", "Owner", "Cycle", "Progress", "Status"], rows);
}

function inventoryTablePage(title, crumbs, heading, columns, rows) {
  return `${pageHead(title, `Dashboard / ${crumbs}`, tableActions())}
    <section class="section-panel">
      <div class="section-toolbar"><h2>${heading}</h2><div class="filters"><button class="pill">▣ This Term</button><button class="pill">▽ Filter</button><button class="pill">↕ Sort By A-Z</button></div></div>
      ${tableSearch()}
      <div class="table-wrap"><table><thead><tr><th>□</th>${columns.map((col) => `<th>${col}</th>`).join("")}<th>Action</th></tr></thead><tbody>
        ${rows.map((row) => `<tr><td>□</td>${row.map((cell, i) => i === 0 ? `<td><a>${cell}</a></td>` : i === row.length - 1 ? `<td><span class="badge ${statusClass(cell)}">• ${cell}</span></td>` : `<td>${cell}</td>`).join("")}<td>${actionIcons()}</td></tr>`).join("")}
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
  if (["Active", "Approved", "Received", "Ready", "Updated", "Completed", "Cleared", "Resolved", "Eligible", "Submitted"].includes(status)) return "green";
  if (["Pending", "Review", "Low Stock", "Due Soon", "Monitoring", "Partial", "Hold", "Draft"].includes(status)) return "amber";
  return "red";
}

function circleMetric(value, title, subtitle, color) {
  return `<section class="card circle-metric"><span class="ring ${color}">${value}</span><div><h2>${title}</h2><p class="muted">${subtitle}</p></div></section>`;
}

function actionIcons() {
  const role = currentRole();
  const actionsByRole = {
    "Super Admin": ["eye", "edit", "trash", "download"],
    "Director": ["eye", "shield-check", "download"],
    "Admissions Officer": ["eye", "edit", "download"],
    "Finance Officer": ["eye", "receipt", "download"],
    "Exams Officer": ["eye", "clipboard-check", "download"],
    "Teacher": ["eye"]
  };
  const actions = actionsByRole[role] || ["eye"];
  return `<span class="row-tools">${actions.map((name) => {
    const handler = name === "receipt" ? "openPaymentModal()" : name === "download" ? "notifyAction('Export prepared','The selected record is ready for download.')" : name === "trash" ? "notifyAction('Delete requires approval','The delete request has been logged.')" : `openDetailsModal('${labelForRoute(route())} Details','Selected school record')`;
    return `<button class="icon-mini" onclick="${handler}" title="${name}">${icon(name, 16)}</button>`;
  }).join("")}</span>`;
}

function tableActions() {
  const role = currentRole();
  const common = `<button class="icon-btn" title="Refresh" onclick="loadBackendData(true); showToast('Refreshed','Latest school records loaded.','success')">${icon("refresh")}</button>`;
  if (role === "Teacher") return `${common}<button class="btn ghost" onclick="openDetailsModal('Teacher Workspace','View only access for assigned classes')">${icon("eye")} View Only</button>`;
  if (role === "Finance Officer") return `${common}<button class="icon-btn" title="Print" onclick="window.print()">${icon("printer")}</button><button class="btn ghost" onclick="notifyAction('Export prepared','Finance records are ready for download.')">${icon("download")} Export</button><button class="btn primary" onclick="openPaymentModal()">${icon("receipt")} Record Payment</button>`;
  if (role === "Admissions Officer") return `${common}<button class="btn ghost" onclick="notifyAction('Export prepared','Admissions register is ready for download.')">${icon("download")} Export</button><button class="btn primary" onclick="openAdmissionModal()">${icon("user-plus")} Register Student</button>`;
  if (role === "Exams Officer") return `${common}<button class="btn ghost" onclick="notifyAction('Export prepared','Candidate lists are ready for download.')">${icon("download")} Export</button><button class="btn primary" onclick="notifyAction('Exam list generated','A candidate list was generated for the selected class.')">${icon("file-chart")} Generate List</button>`;
  if (role === "Director") return `${common}<button class="icon-btn" title="Print" onclick="window.print()">${icon("printer")}</button><button class="btn ghost" onclick="notifyAction('Export prepared','Leadership report is ready for download.')">${icon("download")} Export</button><button class="btn primary" onclick="openDetailsModal('Director Review','Approval queue and audit items')">${icon("shield-check")} Review</button>`;
  return `${common}<button class="icon-btn" title="Print" onclick="window.print()">${icon("printer")}</button><button class="btn ghost" onclick="notifyAction('Export prepared','The current report is ready for download.')">${icon("download")} Export</button>`;
}

function tableSearch() {
  return `<div class="section-toolbar"><span>Row Per Page <select class="select"><option>10</option></select> Entries</span><div class="search"><input placeholder="Search"></div></div>`;
}

function pagination(perPage = "10") {
  return `<div class="table-footer"><span>Row Per Page <select class="select"><option>${perPage}</option></select> Entries</span><span>Pre <b>1</b> 2 <span>....</span> 20 <a>Next</a></span></div>`;
}

function placeholder(id) {
  const label = labelForRoute(id);
  return `${pageHead(label, `Dashboard / ${label}`, `<button class="btn primary">${icon("edit")} Add Record</button>`)}<section class="card pad"><h2>${label}</h2><p class="muted">This workspace is ready for its data forms, approval flow, and backend connection.</p></section>`;
}

function accessDeniedPage(id, role) {
  return `${pageHead("Access Restricted", `Dashboard / ${labelForRoute(id)}`, `<a class="btn ghost" href="#/dashboard">${icon("layout-dashboard")} Back to Dashboard</a><a class="btn primary" href="#/login">${icon("log-out")} Switch Account</a>`)}
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
  if (current === "dashboard") return dashboard();
  if (["students", "parents", "teachers"].includes(current)) return directoryPage(current);
  if (current === "admissions") return admissionsPage();
  if (["receipts", "student-balances", "arrears", "daily-collections", "term-collections"].includes(current)) return balancesPage(current);
  if (["exam-lists", "eligible-students", "exam-export", "exam-settings", "exam-types"].includes(current)) return examPage(current);
  if (["classes", "subjects", "academic-years", "terms"].includes(current)) return setupPage(current);
  if (["users", "roles", "audit-logs"].includes(current)) return adminPage(current);
  if (current === "fees") return feesPage();
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

window.addEventListener("hashchange", app);
app();
