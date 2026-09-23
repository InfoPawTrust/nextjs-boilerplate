# Homepage release – 23 September 2026

The user authorized production publication of the responsive homepage on the existing Next.js/Vercel site. This supersedes the earlier preview-only notes in HOMEPAGE.md and MEDIA-REVISION.md.

- Desktop header CTA goes to the pet-selection section, now titled “Wen möchtest du schützen?”.
- Hero smile removed only beside the heading; other decorative arcs retained.
- Four service steps now cover selection, contract, receipt submission and reimbursement; the last step uses a checkmark.
- Mobile partner strip is horizontally scrollable with four factual tariff features, not an invented awards count. Primary sources: https://www.barmeniagothaer.de/hundekranken-versicherung/ and https://www.barmeniagothaer.de/katzenkranken-versicherung/ .
- Warentest image removed from both rendering and public assets at the user's request. The exact attributed result remains a source-linked prose statement. No CHECK24 logo, stars or rating badges added. CHECK24's cited pages show insurer reviews, not PawTrust reviews; permission for reusing badges was not established. Reference: https://www.check24.de/fahrradversicherung/impressum/ (copyright notice), https://www.test.de/Werbung-mit-test-Logo-Machen-Sie-den-Lizenz-Check-5047409-0/ and RAL FAQ on text-only references.
- Homepage indexable with canonical, sitemap and robots metadata. Old routes still redirect; lead API remains disabled. Actual quote buttons remain disabled; no checkout or data submission is represented as working.

Validation: webpack production build, TypeScript, targeted ESLint, mobile/desktop browser interactions and release checks. No secrets, generated build directory or local test artifacts are included in the release.
