# Genna Clash — የጎጃም ገና (Full static version)

This is the expanded GitHub Pages + Firebase Realtime Database version. It uses original SVG/CSS illustrations and browser-generated Web Audio sound effects. No player registration form is shown; Firebase Anonymous Authentication runs silently.

## Important: preserve your live Firebase settings and rules

This update intentionally does **not** include `firebase-config.js` or `database.rules.json` in the ZIP. Keep the existing `firebase-config.js` and the corrected `database.rules.json` in your GitHub repository. Do not replace either with an earlier test-build copy.

No new database paths are introduced. Existing paths are retained:

- `rooms/{code}/state`
- `rooms/{code}/players/{uid}`
- `rooms/{code}/answers/{round}/{uid}`

The state object gains optional `grade` and `categories` fields for Teacher Mode; existing security rules that validate required fields and permit the host to update state should allow these additional fields. The question payload gains optional `id` and `grade` fields. Answers and player records keep their existing paths. The app continues to use `used` as an optional map keyed by stable question IDs; Firebase omits empty objects, so rules must not require `used` to exist.

**Rule compatibility note:** I have not changed the rules. Your deployed rules must already permit the host to update other players' `correct` and `fastest` stats, and must permit the current host to transfer `state.hostUid` when the old host is disconnected, as in your corrected rules. If either is not allowed, round scoring or host handoff will fail. No additional rule is intentionally required for `grade` or `categories`.

## Files to update in the GitHub repository

Upload/replace these files at the repository root:

- `index.html`
- `app.js`
- `questions.js`
- `style.css`
- `.nojekyll`
- `README.md`

Keep the repository's existing `firebase-config.js` and `database.rules.json` untouched.

## Teacher Mode

The host chooses grade 3–8 and one or more categories in the lobby. The selected grade includes questions tagged at or below that grade. Categories are Math, Science, Amharic Words, and Ethiopia & Gojjam. Questions are selected without repeats during a match.

## Data / trust notes

The host browser coordinates timers, scoring, and ball movement using Firebase's server-time offset. Because this is a static client-hosted game, a technically skilled player can inspect client-delivered question data or modify their browser. This is a casual educational prototype, not a cheat-resistant competitive service. The Firebase rules are important for limiting ordinary writes but cannot make client-side answer keys secret.

## Quick verification

1. Replace the listed files in GitHub, leaving Firebase config and rules alone.
2. Wait for GitHub Pages to publish, then hard-refresh the site.
3. Create a field, choose grade/categories in the lobby, and join from a second browser.
4. Test a question, one-answer limit, scoring, reveal, goal celebration, and next round.
5. Try a refresh/reconnect and host disconnect/handoff.

Public URL: https://muler-21.github.io/genna-clash/
