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
