# Homepage – 23.09.2026

## Intent and scope
Responsive, functional homepage preview in the existing Next.js project. Vercel remains the deployment target. No production deployment in this iteration. Homepage is deliberately noindex until launch. Existing proxy restrictions remain in place: old checkout, API and product routes must not become accidentally available.

Journey: choose pet → see accurately attributed tariff proof → understand protection → understand own costs → learn the four-step process → resolve questions. No invented customer reviews, customer counts, media mentions or blanket promises.

## Editing
- `content/home.ts`: navigation, species, steps, FAQ and verified proof data. This is the first editorial adapter, not an installed CMS. Remaining homepage copy lives in `app/page.tsx`.
- `app/home.css`: central color, spacing and container tokens; mobile and desktop styles.
- `app/components/site`: reusable header, footer, logo, decorative arc and isolated interactive cost example.
- Local fonts: Bricolage Grotesque and DM Sans. No remote font requests or analytics added.
- Hero: generated illustrative lifestyle image; not a testimonial or real adviser portrait. WebP in `public/images/leben-zusammen.webp`; original generated PNG remains in Codex generated_images. Existing dog and cat assets reused.

## Deferred connections
The two contribution buttons are disabled with an explicit availability note. Working species buttons link to sections on this page. No insurance request is submitted. Future calculator keeps four steps: pet, protection, details, conclusion. CRM, actual tariff calculation and checkout remain unconnected. A later CMS can replace the editorial adapter without rebuilding components; no CMS was purchased or integrated.

## Proof
1.3 is specifically the Stiftung Warentest rating of Barmenia Hunde-OP Premium OP SB 0, not PawTrust or all tariffs. Primary source checked 23.09.2026:
https://www.barmenia-firmenloesungen.de/deu/barmenia_ausgezeichnet/auszeichnungen/siegel-detailseite_41408.xhtml
Own text treatment, no reproduction of a licensed seal. Before production verify offered tariff identity, current proof applicability and intermediary disclosure.

## Validation and local preview
`next build --webpack` passes. Default Turbopack fails in this local setup because node_modules is a junction outside its root; this is not a site code failure. Build workers limited to two after local memory exhaustion. Targeted ESLint passes. `qa-home.cjs` checks widths 320/390/768/1440, overflow, images, mobile menu including Escape, FAQ, cost calculation, disabled checkout and legal links. Screenshots under artifacts are local review outputs and excluded from Git.
Start compiled preview: `next start --hostname 127.0.0.1 --port 3100`. Preview available only while its local server is running; no public URL has been deployed.
