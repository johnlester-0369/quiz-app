# 🧠 Quiz App

A lightweight, zero-dependency quiz application built with vanilla JavaScript ES Modules. Pick a topic, answer questions, and get instant feedback — no frameworks, no bundler, no build step.

**[▶ Live Demo → johnlester-0369.github.io/quiz-app](https://johnlester-0369.github.io/quiz-app/)**

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Adding a New Quiz Category](#adding-a-new-quiz-category)
- [Tech Stack](#tech-stack)
- [Browser Support](#browser-support)
- [License](#license)

---

## Features

- **4 Quiz Categories** — Python, JavaScript, HTML & CSS, Computer History
- **Instant answer feedback** — correct/wrong states, answer reveal, and a feedback bar on every question
- **Per-category theming** — each quiz applies its own gradient to the progress bar, next button, and score ring at runtime; no per-category CSS needed
- **Results screen** — animated score ring, correct/incorrect breakdown, and a performance message
- **Animated transitions** — staggered card reveals on the hub, slide-out transition between questions
- **Accessible markup** — `aria-label` on every interactive element, `role="img"` on decorative emoji
- **HTML injection protection** — all question and choice data is passed through `escapeHTML()` before being written to `innerHTML`

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/johnlester-0369/quiz-app.git
cd quiz-app
```

### 2. Serve locally

> ⚠️ **A local HTTP server is required.** ES Module `import`/`export` is blocked on `file://` URLs by browser CORS policy — opening `index.html` directly will produce a blank screen with a CORS error in the console.

**Option A — npx serve (recommended, no install required)**
```bash
npx serve .
```
Then open **http://localhost:3000**

**Option B — Python**
```bash
python -m http.server 8080
```
Then open **http://localhost:8080**

**Option C — VS Code Live Server**
Right-click `index.html` in the Explorer → *Open with Live Server*

### 3. Open in your browser

Navigate to the local address printed in your terminal. You should see the Quiz Hub with four animated category cards.

---

## Project Structure

```
quiz-app/
├── index.html          # Shell HTML — structure only; no inline CSS or JS
├── styles.css          # All styles: Material 3 design tokens, components, animations
└── js/
    ├── app.js          # Entry point — event wiring only, zero business logic
    ├── data.js         # Quiz data — the only file you need to edit to add categories
    ├── dom.js          # DOM reference map — all getElementById calls run once at load
    ├── quiz.js         # Quiz engine — rendering, answer handling, screen transitions
    ├── state.js        # Runtime state — shared by reference across all modules
    └── utils.js        # escapeHTML() — sanitises data interpolated into innerHTML
```

**Dependency graph (one-directional, no circular imports):**

```
app.js
 └── quiz.js
      ├── data.js   (leaf — no imports)
      ├── dom.js    (leaf — no imports)
      ├── state.js  (leaf — no imports)
      └── utils.js  (leaf — no imports)
```

---

## Adding a New Quiz Category

All quiz data lives in `js/data.js`. Append an entry to the `quizGroups` array — **no other file needs to change**:

```js
{
  id: 'your-topic',
  title: 'Your Topic',
  icon: '🚀',
  // gradient and accentRgb are applied at runtime to the progress bar,
  // next button, and score ring — giving your category its own visual identity
  gradient: 'linear-gradient(135deg, rgb(255,80,80) 0%, rgb(200,50,150) 100%)',
  accentRgb: '255 80 80',
  difficulty: 'beginner',   // 'beginner' | 'intermediate'
  questions: [
    {
      num: 1,
      question: "Your question text here?",
      choices: [
        { label: "A", text: "Correct answer",  isCorrect: true  },
        { label: "B", text: "Wrong answer",    isCorrect: false },
        { label: "C", text: "Wrong answer",    isCorrect: false },
        { label: "D", text: "Wrong answer",    isCorrect: false }
      ]
    }
    // add more questions...
  ]
}
```

Save the file and refresh your local server — the new card will appear in the hub immediately.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Language | Vanilla JS (ES Modules) | Zero toolchain; native browser feature with clean `import`/`export` boundaries |
| Styling | CSS custom properties | Full Material 3 design token system; no preprocessor needed |
| Typography | [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts | Purpose-built UI font — clean without being generic |
| Animations | CSS keyframes only | Sufficient for slide/fade complexity; avoids a JS animation dependency |
| Hosting | GitHub Pages | Free static hosting; fully compatible with ES Module serving requirements |

---

## Browser Support

Any modern browser with native ES Module support: Chrome 61+, Firefox 60+, Safari 10.1+, Edge 16+.

---

## License

MIT
