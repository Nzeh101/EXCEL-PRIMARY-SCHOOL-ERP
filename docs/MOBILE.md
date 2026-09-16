# Excel mobile apps

The existing interface remains Laravel Blade (`resources/views/erp.blade.php`) with `public/erp/app.js` and `styles.css`. Vite builds auxiliary assets into `public/build`; it does not produce an index.html or compile PHP. Do not point Capacitor at Laravel's public directory or copy .env, storage, database, or server code into an app.

Capacitor 8 uses `mobile/web` for its bundled connection-error page and loads `https://excelprimaryschool.site` in the native WebView. This is an online hosted wrapper, not an offline build. Laravel stays on the VPS. Same-origin cookie sessions, CSRF headers, hash routes, form POSTs, and multipart file inputs are unchanged. No native HTTP/cookie patching, broad navigation allowlist, cleartext traffic, or authentication bypass has been enabled. Only the trusted school origin should be loaded inside the bridge.

Capacitor documents server.url primarily for live reload, not as its recommended production architecture: https://capacitorjs.com/docs/config . This deliberate hosted-wrapper configuration meets the existing server-rendered application's constraints without rebuilding its UI. Store submission still requires device testing, signing, icons, privacy disclosures and review; generated projects are not store-ready releases.

## Commands

- `npm ci`
- `npm run build` builds Laravel's Vite assets, independently of Capacitor.
- `npm run mobile:sync` copies the bundled fallback and updates both native projects.
- `npm run mobile:ios` opens Xcode (Swift Package Manager).
- `npm run mobile:android` opens Android Studio.
- `npm run mobile:doctor` checks Capacitor dependencies.

App ID: `site.excelprimaryschool.erp`. No signing keys or provisioning identities are committed. Android requires an installed compatible JDK and Android SDK; use Android Studio's bundled JDK. iOS requires Xcode and an Apple development team for physical devices/distribution. Development updates to Laravel are deployed normally; native configuration/plugin changes require sync and rebuilding the app.

## Device acceptance checks before distribution

On both platforms, verify login/logout, persistent sessions after restart, expired-session recovery, year/term selection, hash navigation and Back, password reset links (currently open the website), validation and submission of a test form, file selection and upload, camera selection if offered, keyboard dismissal, safe areas, rotation, and offline/retry. Verify receipt preview, downloads/exports and printing explicitly: browser blob downloads and window.print are not guaranteed by native WebViews and may need native sharing/printing integration. Do not use actual payment entries for smoke tests. No claim of end-to-end native authentication/upload validation is made until these checks run on devices.

Email transaction notifications remain paused. Packaging does not alter school records, permissions, fee amounts, or the database.

## Validation on 2026-09-16

Capacitor add/sync succeeded for both platforms. Laravel Vite build and 26 PHP tests passed. Browser layout checks passed at 320, 375, 400, 768 and 1440px, including School Manager finance cards and four fee types. Native compilation is currently blocked: no Java runtime/Android SDK found; Xcode 26.4 reports its iOS 26.4 platform is not installed (Settings > Components). No APK or IPA has been produced.

## Install on a phone

Use https://excelprimaryschool.site immediately. On iPhone open it in Safari, tap Share, then Add to Home Screen. This is a home-screen web shortcut, not a native IPA.

An Android test APK can be downloaded and opened from Downloads. Allow installation from the browser only if Android prompts. Test builds are not Play Store releases. Use existing school credentials; no passwords are bundled.

Native iPhone distribution needs an Apple Developer team and signing. In Xcode install the iOS platform in Settings > Components, sign in through Settings > Accounts, select the school team under Signing & Capabilities, then Archive and distribute through TestFlight. Do not send Apple account passwords in chat. No native iPhone download is available yet.

Android update: an isolated JDK 21 and SDK 36 were installed under /private/tmp/excel-native-tools. `assembleDebug` succeeded and apksigner verified the debug signature. APK: android/app/build/outputs/apk/debug/app-debug.apk (3.9 MB). This is an online test build, not a signed production release. Native device login/upload/printing tests remain outstanding. Keep the debug signing key private and backed up before distributing upgrades.
