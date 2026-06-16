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

Start Laravel:

```bash
php artisan serve
```

Open:

```text
http://127.0.0.1:8000
```

For frontend build tooling:

```bash
npm run dev
```

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

- Super Admin: `admin@hillside.edu`
- Director: `director@hillside.edu`
- Admissions Officer: `admissions@hillside.edu`
- Finance Officer: `finance@hillside.edu`
- Exams Officer: `exams@hillside.edu`
- Teacher: `teacher@hillside.edu`

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
