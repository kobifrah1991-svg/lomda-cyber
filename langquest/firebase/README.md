# Firebase (project cyberlab-3d, shared with the other Scitedra Labs products)

- **Hosting** — site `tedralingo` (https://tedralingo.web.app), deployed by `.github/workflows/hosting.yml`.
- **Auth** — Google sign-in. In the Firebase console → Authentication → Settings → Authorized domains, add `tedralingo.web.app`
  (`localhost` is there by default — the Android app signs in from it with the credential handed back by `auth.html`).
- **Firestore** — `tedralingo_community/{uid}`: the opt-in public community card (nickname, avatar, language, stage, points, week points, streak). Signed-in learners read the boards; each learner writes only their own card (exact shape, at most every 20 s). The boards need the composite indexes in `firestore.indexes.json`: `npx firebase-tools deploy --only firestore:indexes --project cyberlab-3d --config firebase/firebase.rules.json`.
- **Firestore** — `tedralingo_entitlements/{uid}`: Premium on the account, written only by the license server's service account (read-only for the learner).
- **Firestore** — one owner-only document per learner: `tedralingo/{uid}` = `{ schema: 1, save: "<JSON>", updatedAt }`.
  `firestore.rules` here = the project's rules (as kept in the CyberLab Kids repo) + the `tedralingo/{uid}` block.
  **Not deployed automatically**: deploying replaces the rules of every app in the project, so merge the
  `tedralingo` block into the live rules and deploy once, with the owner's OK:
  `npx firebase-tools deploy --only firestore:rules --project cyberlab-3d --config firebase/firebase.rules.json`
