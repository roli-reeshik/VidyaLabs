# Deploy VidyaLabs to Vercel (correct way)

## The problem
The GitHub repo currently has only a few files (index.html, images) from the **dist** folder.  
Vercel needs the **full source code** so it can run `npm install` and `npm run build` and deploy your real VidyaLabs site.

## What to push
Push everything in this folder **except** what's in `.gitignore` (e.g. `node_modules`, `dist`):
- `package.json`, `package-lock.json`
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js`
- `index.html`
- `src/` (all of it)
- `public/` (all of it)
- `vercel.json`

## Steps (run in terminal from j:\VidyaLabs)

### 1. Open terminal in project folder
```bash
cd j:\VidyaLabs
```

### 2. Check if Git is set up and which remote is used
```bash
git status
git remote -v
```

### 3. If the remote is NOT your GitHub repo (the one connected to Vercel), set it:
Replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repo name (e.g. roli-reeshik and the repo name).
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```
Or if there is no remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### 4. Add all source files, commit, and push
```bash
git add .
git status
git commit -m "Add full VidyaLabs source for Vercel build"
git push origin main
```
If the push is rejected (e.g. "divergent histories"), use:
```bash
git push --force origin main
```

### 5. Wait for Vercel
- Vercel will detect the push and start a new deployment.
- It will run `npm install` and `npm run build` and deploy.
- In 1–2 minutes, https://www.vidyalabs.online will show your real VidyaLabs site.

## After this
Do not upload only the `dist` folder again. Always push the **source code**; Vercel will build it.
