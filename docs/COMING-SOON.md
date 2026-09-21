# PawTrust launch-page preview

Prepared on branch `design/coming-soon`, based on GitHub main commit `5e1e09fdac7b61ff617b5a6a727d716bed9e68d0`. No live deployment has been made.

The root page, imprint, privacy notice, and 404 page use the new cream/petrol/apricot branding. Approved logo PNG is rendered responsively without modifying the source image. Bricolage Grotesque and DM Sans are self-hosted; OFL licenses are in public/fonts. The entrance animation respects reduced-motion preferences.

Known old marketing routes temporarily redirect to `/` with HTTP 307. The lead API returns 410 and no longer imports or calls Supabase. Existing database records are untouched. Old code remains in the branch and Git history for the later full relaunch. No tracking or social embeds are added.

Before production: confirm the operator/address copied from the existing imprint are still current. Verify Vercel's account-level analytics, request-log retention, and DPA settings against the privacy notice. Update the IONOS email section after any move to Google Workspace. The privacy text is a draft adapted to this launch-page implementation, not a verification of hosting-account settings.

Local build uses the same installed dependencies as the original checkout via a node_modules junction. This junction is ignored by Git. Production installs from package-lock.json normally. Build command: `next build --webpack`.
