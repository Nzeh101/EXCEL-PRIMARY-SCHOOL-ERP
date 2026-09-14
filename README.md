# Hillside Secondary School ERP

Hillside Secondary School ERP is a Laravel-based school management prototype for admissions, student records, fee collection, receipts, fee balances, role dashboards, messaging, notifications, curriculum, assessment, staff, and reporting workflows.

## Technology Stack

- **Backend:** PHP 8.3+ with Laravel 13
- **Database:** SQLite by default, with Laravel-compatible support for MySQL/PostgreSQL if configured in `.env`
- **Frontend:** Blade view served by Laravel, vanilla JavaScript ERP UI, CSS, Vite
- **Frontend tooling:** Node.js, NPM, Vite 8, Tailwind CSS 4
- **Dependency managers:** Composer for PHP packages, NPM for frontend packages

## Required Installs

Install these before cloning/running the project:

- PHP 8.3 or newer
- Composer 2.x
- Node.js 22.x or newer
- NPM
- Git
- SQLite extension for PHP, or another database driver if you switch from SQLite

On macOS with Homebrew:

```bash
brew install php composer node
```

Check your versions:

```bash
php -v
composer --version
node -v
npm -v
```

## Clone And Setup

```bash
git clone git@github.com:Nzeh101/HILLSIDE-SECONDARY-SCHOOL-ERP.git
cd HILLSIDE-SECONDARY-SCHOOL-ERP

composer install
npm install

cp .env.example .env
php artisan key:generate
```

The project is already configured to work well with SQLite. Create the database file if it does not exist:

```bash
touch database/database.sqlite
```

In `.env`, use SQLite:

```env
DB_CONNECTION=sqlite
```

Then migrate and seed demo data:

```bash
php artisan migrate --seed
```

## Run Locally

Start Laravel so it is available to other devices on the same Wi-Fi:

```bash
php artisan serve --host=0.0.0.0
```

On this computer, open:

```text
http://127.0.0.1:8000
```

On another device connected to the same Wi-Fi, open this computer's LAN address,
for example `http://192.168.1.156:8000`. You can find the current Wi-Fi address on
macOS with `ipconfig getifaddr en0`.

For frontend build tooling:

```bash
npm run dev
```

The Vite development server is configured to listen on all network interfaces.

For a production asset build:

```bash
npm run build
```

## Demo Accounts

All demo accounts use:

```text
password
```

Available roles:

- Super Admin: `admin@excelprimaryschool.org`
- Director: `director@excelprimaryschool.org`
- Admissions Officer: `admissions@excelprimaryschool.org`
- School Manager: `finance@excelprimaryschool.org`
- Exams Officer: `exams@excelprimaryschool.org`
- Teacher: `teacher@excelprimaryschool.org`

The login screen also includes quick role/account selectors for demo use.

## Important Project Files

- `routes/web.php` - Laravel routes and lightweight ERP API endpoints
- `database/migrations/` - database schema for users, students, guardians, payments, fee balances, notifications, and messages
- `database/seeders/DatabaseSeeder.php` - demo users, students, guardians, payments, notifications, and messages
- `resources/views/erp.blade.php` - main ERP Blade shell
- `public/erp/app.js` - browser-served ERP interface and interactions
- `public/erp/styles.css` - browser-served ERP styling
- `app.js` and `styles.css` - source/reference copies kept aligned with the served ERP assets

## Development Notes

- The ERP UI is currently mostly vanilla JavaScript and CSS under `public/erp/`.
- Role dashboards and sidebars are controlled in `roleNavGroups` inside `public/erp/app.js`.
- The served Blade shell cache-busts `public/erp/app.js` and `public/erp/styles.css`, so a browser refresh should load new UI changes.
- If browser changes still do not appear, hard refresh once.
- Do not commit `.env`, `vendor/`, `node_modules/`, or local database backups.

## Useful Commands

```bash
php artisan migrate:fresh --seed
php artisan route:list --path=erp-api
php artisan test
npm run build
```

Syntax checks:

```bash
php -l routes/web.php
node --check public/erp/app.js
```

## Pushing Changes

```bash
git status
git add README.md public/erp/app.js public/erp/styles.css resources/views/erp.blade.php app.js styles.css
git commit -m "Update ERP onboarding and role UI"
git push origin main
```

## Imported Class Registers and Annual Promotion

The local database contains 377 students from the supplied Google workbook, recorded as **2025 / 2026, Term 3**. This year label interprets “previous year” relative to September 2026. The import uses the ten tab names (Nursery, Reception, STD 1–8), because some headings inside the tabs are incorrect. TRIP and projection tables are excluded.

Sign in and open **Class Registers** to see the original columns: NO, SURNAME, FIRSTNAME, SEX, FEES, 1ST PAY, 2ND PAY, 3RD PAY, TOTAL and BALANCE. Blank cells stay blank. The database preserves every imported student row and its original values. Sixteen rows have financial discrepancies or missing fees; they are marked **Review** and excluded from ledger posting until reconciled. The other 361 rows produced 653 payment entries. Payment dates, methods, guardian details and admission dates were not supplied, so they are not invented. Imported pupils use permanent `EPS-2025-####` admission numbers, with 2025 explicitly chosen by the school owner. Existing identifiers reserve their sequence numbers, so new numbers do not collide. New admissions use the actual admission date’s year and a per-year sequence. Class changes never change admission numbers or the numeric database primary key. `IMP-*` payment references identify imported payments, not original receipts.

The 12 pre-existing student records are preserved. They have no academic year assigned and are excluded from annual promotion. Raw workbooks and the pre-import SQLite backup are in ignored private storage under `storage/app/private/`; real student data is not committed to Git.

**Director and Super Admin:** open **Promotions & Terms** from the top bar, Classes page, or the Academic Periods sidebar group. Use **Set Term Dates** to enter the closing Term 3 and next Term 1 dates. Select any pupils who must repeat, click **Preview Annual Class Promotion**, review the moves, confirm the year has ended, then click **Approve Promotion & Open Term 1**. Nursery advances to Reception, Reception to Standard 1, and each standard advances one class. Standard 8 students graduate unless retained. Approval records the approver and each student's previous/new class, and advances the current academic year. No promotion was executed during implementation.

Promotion includes only Active/Approved students enrolled in the closing period. Resolve pending admissions or edits first. Stale previews, duplicate closures, missing term dates, and advancement before the configured end date are rejected. Annual promotion opens Term 1 with fresh unpaid tuition: **MWK 70,000 for preschool** and **MWK 75,000 for primary**, using the destination class. Historical assessed fees, payments, class placements and admission numbers remain unchanged.

The top-bar **Year** and **Term** selectors reload students, balances, payments and finance totals for that period. Unopened periods stay empty even if dates are configured. **Director, Super Admin and School Manager** can set chronological, non-overlapping term dates and advance Term 1 → Term 2 → Term 3 with the same classes and fresh unpaid tuition each term. Only Director/Super Admin can authorize the year-end class move. Term dates have not been guessed or set in the real database.

**Fees Management** shows every enrolled pupil, including imported rows requiring review, with per-student details and payment history. Fee groups are Tuition, Uniform, School Bus and Trip. Uniform is assessed at **MWK 40,000**, with partial collection allowed up to the remaining charge. School Bus and Trip accept the amount actually collected, entered manually; no fixed bus charge is assumed. School Manager collections require Director/Admin approval. Payments cannot exceed fixed fee balances, including pending payments, or be posted for pupils in unopened periods.

On **Classes**, each eye button has **Print** and **Excel** buttons beside it. The wider student modal has an internal scrollbar and a pinned admission-number column. Print produces a landscape table; Excel downloads a real `.xlsx` workbook for the selected class/year/term.

The Finance Officer role is now **School Manager**; its existing `finance@excelprimaryschool.org` login remains valid.

Sign-in now verifies the database password and role on the server. All ERP data endpoints require a session; annual promotion requires the Director or Super Admin role. Existing browser-only sessions must sign in again.

To import into another installation, obtain a private XLSX export of the workbook, migrate, preview, then apply:

```bash
php artisan migrate
php artisan school:import-classes /private/path/classes.xlsx --year="2025 / 2026" --term="Term 3"
php artisan school:import-classes /private/path/classes.xlsx --year="2025 / 2026" --term="Term 3" --apply
```

The same workbook is a no-op on repeat import. A revised second workbook is rejected for manual reconciliation because the source does not contain stable school admission IDs. Do not run `migrate:fresh` on a database containing real records.

Validation: `php artisan test`, `node --check public/erp/app.js`, and `npm run build`.


Latest record and access updates:

- Student edits include guardian name, phone, email, relationship and address. Admissions/School Manager edits remain pending until Director approval, including guardian changes.
- Financial data is restricted to Director, School Manager and Super Admin in API responses, student details, class lists and print/Excel exports.
- Class registers use current ledger assessments and include live search with grouped class/print/Excel controls. Original spreadsheet cells remain available for financial review.
- `php artisan school:standardize-imported-tuition --apply` sets imported tuition to MWK 70,000 (preschool) / 75,000 (primary), recalculates running balances and preserves payment amounts. It is repeatable. Unreconciled source payments remain flagged and are not invented.
- Missing imported payment dates have separate estimated `reporting_date` values distributed across the configured term for charts. `paid_at` remains unchanged; estimates are never presented as actual receipt dates.
- Refreshes retain the current layout, and initial loading shows the application shell. Related student payloads omit duplicated guardian/balance relationships. Saving payments still requires a working server connection.

Student and guardian change approvals are under **Admissions → Change Approvals** for Director/Super Admin. The queue spans academic periods and shows current/requested values before approval. Red sidebar counts remain until requests are resolved, independently of notification read status. Direct guardian edits/follow-ups submitted by Admissions or School Manager now use the same queue; approval sends a notification back to the requesting role. The lightweight inbox refreshes every 15 seconds while the tab is visible and when focus returns.

Change Approvals now appears in the sidebar only when there are pending requests, with the red count on that link alone. Director/Admin see all requests; Admissions and School Manager see requests submitted by their role and receive a “Waiting for Director approval” notification. The review displays only fields whose requested values differ from current values. The queue is separate from Admissions.

New admissions awaiting approval appear in the red count on Admissions/New Admissions, separately from Change Approvals (existing student/guardian edits only). The submitting role receives an admission-recorded/waiting-for-Director notification. Admissions sort newest first by admission date, falling back to record creation date when unknown, with ID as a stable tie-breaker. Saving no longer displays the new-entry popup.

Annual promotions are approved class by class. Select a class, set retained pupils, preview that class and approve it. Each class gets its own approval history; only its pupils enter the next year with new unpaid tuition. Classes already approved cannot be processed again. The active school year switches after all remaining pupils are processed, and new admissions wait until the class-promotion run is complete. Term 1/2 advancement still keeps the same classes. Class snapshots preserve the original roster throughout partial completion.

2026/2027 term dates were configured from the Ministry academic calendar supplied by the school (June 2026 press release): Term 1: 14 September–18 December 2026; Term 2: 4 January–25 March 2027; Term 3: 12 April–16 July 2027. Setting these dates does not approve promotions or open terms.
