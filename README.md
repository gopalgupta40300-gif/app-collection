/* App Collection README */
# App Collection

A calm, minimal landing page and product showcase for a curated directory of tools and workspaces. The interface follows a dark, luminance-first visual language called Lumen Edge and is built as a static site with HTML, CSS, and vanilla JavaScript.

## Features
- Sticky glass header with active nav state and mobile drawer
- Hero section with live signal dashboard and animated counters
- Capabilities grid with hover glow, reveal motion, and icon system
- Workbench panel and pricing section aligned to the reference design
- Responsive layout tuned for mobile, tablet, and desktop
- Keyboard-friendly navigation and focus states
- No framework or build step required

## Project structure
```text
app-collection/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   └── components.css
│   ├── img/
│   │   └── favicon.svg
│   └── js/
│       ├── icons.js
│       ├── main.js
│       ├── ui.js
│       ├── apps.js
│       └── storage.js
└── favicon.svg
```

## Run locally
1. Open the project folder in a local file browser or code editor.
2. Start a simple local server from the project root:

```bash
cd app-collection
python3 -m http.server 8000
```

3. Open the page in a browser:

```text
http://localhost:8000
```

The page works when opened directly as a file too, but a local server is recommended for consistent browser behavior.

## Deploy to GitHub Pages
1. Push the repository to GitHub.
2. In the GitHub repo, open Settings.
3. Select Pages from the sidebar.
4. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. Save the settings.
6. GitHub Pages will publish the site and provide the live URL.

## Notes
This is the Segment 1 build: the landing page shell, design system, icon system, and responsive interactions are in place to support later app-directory segments without changing the core structure.
