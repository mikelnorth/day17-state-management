# Day 17 — State Management Patterns

An interactive teaching app for the **Day 17: State Management Patterns** lesson.
Built with Vite + React 19 + Tailwind v4. Vanilla JavaScript (no TypeScript).

Every concept follows an **I do / We do / You do** structure so the instructor
can demo, work through the next one as a class, then hand off an independent
practice problem.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build    # production build
npm run lint     # eslint
```

## What's covered

| Lesson | Concept | What students do |
|---|---|---|
| 1 | **Prop drilling** | Build drills from scratch and count the files they touch — the pain that motivates everything else. |
| 2 | **Context API** | Refactor drilled trees to Context, design value shapes, extract custom hooks. Includes a 5-bug spot-the-bug gallery. |
| 3 | **useReducer** | Replace scattered `setState` calls with action-based updates. |
| 4 | **Context + useReducer** | Combine both into a reusable Provider with a custom hook. Includes the mini-project starter. |
| 5 | **Choose the pattern** | Scenario cards with reveal-on-click recommendations — a judgment exercise. |

## Lesson structure

Each lesson uses the same three-part flow:

- **🟦 I do** — the instructor demos. Live-coded in front of the class.
- **🟨 We do** — the whole class works through the next one together.
- **🟩 You do** — students practice on their own with a stubbed starter.

Within a lesson, each I / We / You activity has its components split into
**separate files**. That's intentional: when a student is threading a prop
through five files, opening five tabs in their editor, they feel the cost in
a way that a single-file demo can't convey.

## Project layout

```
src/
├── App.jsx                             # sidebar + router
├── main.jsx
├── index.css                           # Tailwind entry
├── components/ui/                      # shared lesson-page UI
│   ├── LessonShell.jsx
│   ├── ExampleBlock.jsx                # I do / We do / You do color-coded blocks
│   ├── ConceptCallout.jsx
│   ├── CodeBlock.jsx
│   └── DemoSurface.jsx
├── pages/
│   ├── Home.jsx                        # big idea, objectives, decision framework
│   └── lessons/
│       ├── 01-prop-drilling/
│       │   ├── PropDrilling.jsx
│       │   ├── ido/   (4 files: user drilled through 3 layers)
│       │   ├── wedo/  (5 files: cart count forked to 2 consumers)
│       │   └── youdo/ (5 files: accent color drilled 4 layers)
│       ├── 02-context/
│       │   ├── ContextLesson.jsx
│       │   ├── ValueShapeTable.jsx
│       │   ├── NotACureAll.jsx         # anti-pattern callout
│       │   ├── MultipleProvidersDemo.jsx
│       │   ├── ido/   (refactor the linear drill to Context)
│       │   ├── wedo/  (refactor forked drill + extract useTheme hook)
│       │   ├── youdo/ (build LanguageContext from scratch)
│       │   └── bugs/  (5 interactive spot-the-bug cards)
│       ├── 03-use-reducer/             # counter / form / todos
│       ├── 04-context-reducer/         # toasts / cart / favorites starter
│       └── 05-choose-pattern/          # 8 scenario cards
```

## How to run the class

Each lesson page has three colored activity blocks and an instructor-facing
callout under each one listing the exact steps:

- The **I Do** block has the instructor's live-coding script, including which
  files to open and in what order.
- The **We Do** block has discussion prompts and the student-facing task.
- The **You Do** block has the student checklist + reflection questions.

All the starter code is intentionally incomplete — clicking around shows the
broken state. Students and instructor both fill it in to make the demos work.

## The Day 17 mini project

The **You Do** in Lesson 4 (Movie Favorites) doubles as the mini-project
starter. Students flesh out the `FavoritesContext` with:

- `add_favorite` and `remove_favorite` reducer cases
- a `useFavorites()` custom hook
- shared state across `MovieBrowser`, `FavoritesStats`, and `FavoritesList`

## Stack

- **Vite** 8
- **React** 19 (with `<Context>` direct provider support)
- **Tailwind CSS** v4 (`@import "tailwindcss"` + `@tailwindcss/vite`)
- **react-router-dom** 7 for the sidebar navigation
