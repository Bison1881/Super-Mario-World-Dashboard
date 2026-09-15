# 🦖 Super Mario World Interactive Strategy Dashboard

An interactive, responsive, retro-styled web companion application for **Super Mario World (SNES)**. This dashboard tracks your completion progress, maps out secret exits, breaks down Koopaling boss mechanics, simulates optimal item loads from the Top Secret Area, and catalogs legendary speedrun glitches.

Built entirely using vanilla **HTML5, CSS3, and JavaScript**, this application requires no external dependencies, no node modules, and no server configuration. It can be run locally off your hard drive or deployed straight to the web using GitHub Pages.

---

## 🕹️ Core Modules & Features

### 🗺️ 1. Interactive Overworld Map & Secret Exit Selector
* **Region Navigation:** Seamlessly jump through all 7 primary regions of Dinosaur Land, plus the Star Road and Special Zone.
* **Secret Paths Uncovered:** Detailed instructions on how to break out of the *Forest of Illusion* loop, find the *Red/Blue/Green/Yellow Switch Palaces*, and unlock shortcuts.

### 🦖 2. Yoshi Color Power Matrix
* **Dynamic Ability Reference:** Cross-references the 4 core Koopa Shell types (Green, Red, Blue, Yellow) with the 4 Yoshi variants (Standard Green, Red, Blue, Yellow) to immediately visualize special powers like flying, fire breathing, or generating seismic shockwaves.

### 🪙 3. Region-by-Region Dragon Coin Tracker
* **Save State Integration:** An interactive checklist grouped by map zones to log every level where you have collected all 5 Dragon Coins. 
* **Persistence:** Uses browser `localStorage` to ensure your completion data stays saved even if you close or refresh the webpage.

### 🏰 4. Bowser's Castle Room Navigator
* **The Front Door Maze:** Visual layout breakdown of the Front Door's 8 hazard rooms.
* **Optimal Path Routing:** Step-by-step navigation highlighting the safest and fastest route (Rooms 1/2 into Rooms 5/6) to reach the dark hallway and Bowser's back door with minimal risk.

### 🔧 5. Glitch & Speedrun Exploit Archive
* **Advanced Mechanics:** Frame-by-frame instructional breakdowns for iconic glitches including the **Item Stock Cloud Swap**, **Yoshi Tongue Frame Glitch**, and **Yoshi Wall Clipping Layout Breaks**.

---

## 📁 Repository Structure

```bash
smw-guide/
├── index.html     # Base application architecture and dynamic template slots
├── style.css      # Retro arcade responsive layout definitions & theme skin
├── app.js         # State machine, dataset arrays, and localStorage hooks
└── README.md      # Deployment guide and repository overview
```

---

## ⚡ Quick Start: Running Locally

1. Clone or download this repository folder to your desktop machine.
2. Navigate into the root folder (`smw-guide/`).
3. Double-click **`index.html`** to launch the companion application inside any modern web browser immediately. No local server environments or package managers are required!

---

## 🚀 How to Host Free via GitHub Pages

You can host this live and access it on your smartphone, tablet, or secondary monitor while retro-gaming on the couch by turning on **GitHub Pages**:

1. Create a new repository on your GitHub account (e.g., `super-mario-world-dashboard`).
2. Commit and push your local `index.html`, `style.css`, and `app.js` into your main branch.
3. On GitHub, navigate to your repository's **Settings** tab.
4. Locate the **Pages** menu link on the left-hand navigation sidebar.
5. Under **Build and deployment**, set the source drop-down menu to **Deploy from a branch**.
6. Select your branch (`main` or `master`) and directory root (`/`), then click **Save**.
7. Within 1 to 2 minutes, GitHub will generate a public production URL (e.g., `https://<your-username>.github.io/super-mario-world-dashboard/`).

---

## 🛠️ Modifying & Expanding the Application
* **Adding Custom Levels:** The stage parameters are configured inside structured JavaScript objects located at the top of `app.js`. You can append custom stages or RomHack information directly into the matching area array.
* **Style Tweaks:** All game colors, borders, fonts, and dark-mode styles are centralized inside `style.css` using CSS custom properties (variables) for fast alterations.

---

## 📝 License
This dashboard guide project is open-source and available under the **MIT License**. All game assets, names, and references belong to their original respective creators.
