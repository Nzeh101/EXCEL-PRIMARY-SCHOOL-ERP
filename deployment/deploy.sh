#!/usr/bin/env bash
set -euo pipefail
# Run as the excel user. main is the only production deployment branch.
base=/srv/excel
exec 9>"$base/deploy.lock"
flock -n 9 || { echo 'Another deployment is running'; exit 1; }
git -C "$base/repository" fetch origin main
revision=$(git -C "$base/repository" rev-parse origin/main)
release="$base/releases/$(date -u +%Y%m%d%H%M%S)-${revision:0:8}"
mkdir -p "$release"
git -C "$base/repository" archive "$revision" | tar -x -C "$release"
cd "$release"
ln -s "$base/shared/.env" .env
rm -rf storage
ln -s "$base/shared/storage" storage
composer install --no-dev --prefer-dist --no-interaction --optimize-autoloader
npm ci --ignore-scripts
npm run build
php artisan config:cache
php artisan view:cache
sqlite3 "$base/shared/database.sqlite" ".backup '$base/backups/predeploy-$(date -u +%Y%m%d%H%M%S).sqlite'"
php artisan migrate --force
php artisan storage:link
ln -s "$release" "$base/current.next"
mv -Tf "$base/current.next" "$base/current"
php artisan queue:restart
echo "Deployed $revision to $release"
