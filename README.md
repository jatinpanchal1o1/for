# FOR — Dating Platform Frontend

Mira is a responsive React + Vite dating-platform frontend based on the supplied `for-master.zip` starter project. The original components and pages remain in `src/component` and `src/pages`; the new experience lives in `src/app` and is wired through `src/App.jsx`.

## Stack

- React 18 and React Router 7
- Vite 6 (development server and production bundler)
- Tailwind CSS 4 (Vite plugin and CSS import)
- Axios (available for backend API integration)
- React Icons
- ESLint and Prettier

Vite is the single build pipeline. Webpack is intentionally not added as a second bundler. jQuery is not included because the current implementation has no legacy DOM plugin that requires it; React owns the UI and its DOM.

## Run locally

```bash
npm install
npm run dev
```

## Available scripts

```bash
npm run dev           # local development
npm run build         # optimized production bundle
npm run preview       # preview production bundle
npm run lint          # lint project files
npm run format        # format active application files
npm run format:check  # check formatting
```

## Main routes

- `/` — marketing landing page
- `/login` and `/signup` — preview authentication forms
- `/onboarding` — four-step profile onboarding
- `/discover` — profile discovery, search, filters, like and pass
- `/likes` — likes received and likes sent
- `/matches` — mutual matches
- `/messages` — sample conversations and local message composer
- `/profile` — profile preview and edit form
- `/settings` — privacy and discovery preferences
- `/admin` — sample moderation and platform overview

## Demo mode and production requirements

The supplied ZIP did not include a backend, database, authentication provider, deployment configuration, or real-time messaging service. The current UI therefore uses sample profiles and browser-local state (`localStorage`). This is a frontend preview, not a production dating service. The banner in the app intentionally discloses this.

Before launch, connect and test:

1. Secure server-side authentication (email, phone OTP, password reset, Google OAuth if desired).
2. A database and authorization policies for users, preferences, likes, matches, blocks, reports, and messages.
3. Server-side mutual-match creation and idempotency.
4. Real-time messaging, online presence, and delivery/read state.
5. Private media storage with validation, moderation, and access controls.
6. Backend rate limiting, abuse detection, reporting, and admin audit logs.
7. Privacy policy, terms, consent, retention, account deletion, and data export workflows.
8. HTTPS, production environment variables, monitoring, backups, and deployment settings.

Do not treat the demo sign-in form, localStorage, sample profile verification badges, counts, or admin page as real security or real member records. A server must enforce age eligibility, permissions, moderation, and access control.

## Notes

- The original `src/pages` and `src/component` code is preserved as legacy source and is no longer wired into the new navigation. Review and migrate any legacy behavior you still need before deleting it.
- The site uses remote Unsplash image URLs for demo presentation. Replace these with licensed, approved profile media in production.
- Tailwind CSS 4 is loaded from `src/index.css` using the official Vite plugin. Vite handles the production bundle, code splitting, minification, and hashed assets.
