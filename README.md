# Genna Clash — GitHub Pages + Firebase test build

Static, mobile-first 20-question test build. No Node server, no Socket.IO, no player-facing sign-in screen. Firebase Anonymous Auth runs silently; Realtime Database synchronizes rooms. All art is original SVG/CSS and sound is synthesized with Web Audio.

## Before you publish

1. Create a Firebase project and a **Realtime Database**.
2. Enable **Authentication → Sign-in method → Anonymous**.
3. Register a Firebase **Web app** and copy its config into `firebase-config.js` (replace all placeholders).
4. Paste `database.rules.json` into Realtime Database → Rules and click **Publish**.
5. In Authentication → Settings → Authorized domains, ensure `muler-21.github.io` is listed (add it if needed).
6. Upload the contents of this folder to the root of the public GitHub repo `muler-21/genna-clash` and enable Pages from `main` / `(root)`.

## Firebase web config

`firebase-config.js` is intentionally a template. It is expected to be public in a static website; Firebase web config identifies the project but is not a service-account secret. **Never add a service-account JSON or private server key.** Use the exact `databaseURL` shown in the Firebase console; the database hostname can vary by region.

## Game flow

The host browser starts a round, chooses a question, writes a 15-second deadline using the offset from `.info/serverTimeOffset`, gathers answer records, then writes scoring, ball position and reveal state. A new connected player can take over if the prior host's presence has gone offline. Reconnect uses the saved anonymous UID and room code, with a 30-second grace window. If the room has disappeared, the UI returns to Home with a message.

## Important limitations of this browser-hosted prototype

- This is a **20-question test build**, not the full 120-question release or a security-hardened competitive game.
- Since the correct answer is shipped to browsers as requested, a technically curious player can inspect the JavaScript or database state before the reveal. UI hiding is not secret storage.
- Firebase rules can restrict answer writes to the authenticated player's own path, once per round and before the deadline, and restrict game-state writes to the current host (with a controlled handover when the old host is disconnected). However, because round scoring runs in the host's browser, a modified host client can cheat. Strong anti-cheat requires trusted server-side logic, which conflicts with the all-static/no-backend requirement.
- This test version should be tested with two different browsers/devices before sharing widely. Browser-host migration, reconnection and rules depend on the exact Firebase project configuration.
- Firebase Spark is free within quotas; Realtime Database currently includes 1 GB stored data and 10 GB/month downloads, with a 100 simultaneous-connection cap. If quotas are exceeded, service may be throttled or disabled for the remainder of the period. See Firebase's current pricing/limits docs.

## Local preview

Because the site uses Firebase, use a local static server rather than opening `index.html` directly. For example, with Python installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. Add `localhost` to Firebase Authentication's authorized domains if Firebase requests it.
