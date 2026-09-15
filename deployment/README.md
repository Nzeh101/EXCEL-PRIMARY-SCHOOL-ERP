# Hosted ERP

Production domain: `excelprimaryschool.site`. VPS: `45.113.226.134`.

`main` contains approved production code. Use `develop` for ongoing work and merge reviewed changes into `main` when ready. Pushing a branch does not automatically change the live site.

The VPS clones this GitHub repository at `/srv/excel/repository`. Each deployment builds an independent release, then switches `/srv/excel/current`. Database, environment and uploaded files remain under `/srv/excel/shared`; they are never pulled from Git. Do not seed or replace the live database during updates.

After pushing approved changes to `main`, connect by SSH and run:

```bash
runuser -u excel -- bash /srv/excel/current/deployment/deploy.sh
```

The script backs up SQLite before applying migrations and switches the live release only after a successful build and migration. Review migrations before deployment: a failed migration may still require database recovery, and reverting code does not reverse schema changes. Previous releases remain available in `/srv/excel/releases`.

Daily server backups are stored under `/srv/excel/backups`. These are on the same VPS; arrange a separate off-server backup destination for disaster recovery.

Production hides the demo account selector. Hosted account passwords are provisioned separately and must not be committed to Git. Development uses the local database and does not affect hosted records. Transfer new production data back to development only deliberately.

## School launch configuration

The 2026/2027 opening is an explicit one-time operation, never part of deployment migrations. `school:start-2026 --apply --backup=/private/snapshot.sqlite --user=ADMIN_ID` preserves pupil IDs and admission numbers, completes promotions (including previously retained decisions), retains Standard 8 as graduated records, resets the existing fee ledger, and opens Term 1 with fresh tuition. The operation refuses a second run and records a summary and backup path in `school_year_resets`.

Notification emails use the database queue after transaction commit. Only opted-in management users receive notices matching their role (or school-wide notices). Gmail SMTP credentials belong only in the private environment. The sender display name is “Excel Primary School — No Reply”; the authenticated Gmail address is the actual sender.

`/forgot-password` requests a new link and `/reset-password/{token}` provides first-time password setup. Links are single use; expiry is controlled by `AUTH_PASSWORD_RESET_EXPIRE` in minutes. Password changes invalidate that user’s existing sessions. Exams, Staff, Communication and Governance menu groups are hidden while their source code remains available.
