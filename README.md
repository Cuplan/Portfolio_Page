# Portfolio — Dylan Johnson

Personal portfolio built with React 19 + TypeScript. The whole thing has a terminal/CLI aesthetic — two themes, an interactive fake shell, CRT scanlines if you're into that.

Live: [dylan-johnson-dev.vercel.app](https://dylan-johnson-dev.vercel.app)

---

## Running it

```bash
cd portfolio-dj
npm install
npm run dev
```

Build:

```bash
npm run build
```

---

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3 (custom color tokens, no component library)
- Framer Motion 12
- React Router 7
- react-simple-typewriter, react-icons

---

## Themes

Two modes, both dark — toggle with the moon/sun button in the navbar.

**Day mode** — Notepad++ inspired. Charcoal `#2b2b2b` background, Monokai green `#a6e22e` accent. There's a `# NotepadPlusPlus.xml` comment hidden in the footer.

**Dark mode** — Classic terminal. Pure black `#0a0a0a`, phosphor green `#4ade80`.

---

## Interactive terminal

Press `` ` `` anywhere on the site, or click `[>_]` in the navbar.

Supported commands:

```
help, whoami, skills, ls, cat bio.txt, contact
neofetch, man dylan, pwd, date, echo <text>
cd ~, cd ./projects, cd ./contact
crt          (toggles CRT scanline effect)
clear
sudo         (nice try)
rm -rf /     (nice try)
```

↑↓ navigates command history. Tab autocompletes.

---

## CRT mode

Click `[CRT]` in the navbar. Adds scanlines + vignette + a subtle flicker. State persists in localStorage.

---

## Project structure

```
portfolio-dj/src/
├── components/
│   ├── TermWindow.tsx          shared terminal window chrome + Prompt component
│   ├── TerminalIntro.tsx       boot screen on first visit (sessionStorage flag)
│   ├── InteractiveTerminal.tsx floating CLI modal
│   ├── NavCommandBar.tsx       shows "$ cd ./page" briefly on navigation
│   ├── CRTOverlay.tsx          scanline + vignette overlay
│   ├── UptimeWidget.tsx        live clock + status panel on home
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProjectCards.tsx
├── hooks/
│   ├── useTheme.tsx            dark/day toggle, persisted in localStorage
│   ├── useLang.tsx             FR/EN context
│   └── useCRT.tsx              CRT toggle context, persisted in localStorage
├── i18n/
│   └── translations.ts         all copy in one place, FR and EN
├── pages/
│   ├── Home.tsx
│   ├── Projets.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx            "bash: /url: command not found"
└── App.tsx                     CRTProvider > LangProvider, AnimatePresence routes
```

---

## Bilingual

FR/EN toggle `[EN]`/`[FR]` in the navbar. All text lives in `src/i18n/translations.ts`. The `useLang` hook exposes `{ lang, t, toggleLang }`.

---

## Contact

johnsondylan14@gmail.com
[linkedin.com/in/dylan-johnson-447681280](https://www.linkedin.com/in/dylan-johnson-447681280)
