# auto.dougkarda.com

Personal automotive reference site. React + Vite.

Same LiteSpeed layout as golf.dougkarda.com: the repo root is the document root, and `.htaccess` serves the built files from `public/`.

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run deploy
```

That builds into `dist/`, then copies `index.html` and `assets/` into `public/`. Commit and push those `public/` files plus the root `.htaccess`.
