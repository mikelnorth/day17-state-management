import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PropDrilling from './pages/lessons/01-prop-drilling/PropDrilling.jsx'
import ContextLesson from './pages/lessons/02-context/ContextLesson.jsx'
import ReducerLesson from './pages/lessons/03-use-reducer/ReducerLesson.jsx'
import ContextReducerLesson from './pages/lessons/04-context-reducer/ContextReducerLesson.jsx'
import ChoosePattern from './pages/lessons/05-choose-pattern/ChoosePattern.jsx'

const lessons = [
  { to: '/', label: 'Home / Big Idea', end: true },
  { to: '/prop-drilling', label: '1. Prop Drilling' },
  { to: '/context', label: '2. Context API' },
  { to: '/use-reducer', label: '3. useReducer' },
  { to: '/context-reducer', label: '4. Context + useReducer' },
  { to: '/choose-pattern', label: '5. Choose the Pattern' },
]

function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur px-5 py-6 overflow-y-auto">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-500">Day 17</p>
        <h1 className="text-lg font-semibold text-slate-900 leading-tight">
          State Management Patterns
        </h1>
      </div>
      <nav className="flex flex-col gap-1">
        {lessons.map((lesson) => (
          <NavLink
            key={lesson.to}
            to={lesson.to}
            end={lesson.end}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-sm transition ${
                isActive
                  ? 'bg-indigo-600 text-white font-medium shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {lesson.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-8 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed">
        Each lesson follows an{' '}
        <span className="font-semibold text-slate-900">I do / We do / You do</span>{' '}
        pattern. Demo the first, work the second together, let students try the third.
      </div>
    </aside>
  )
}

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prop-drilling" element={<PropDrilling />} />
            <Route path="/context" element={<ContextLesson />} />
            <Route path="/use-reducer" element={<ReducerLesson />} />
            <Route path="/context-reducer" element={<ContextReducerLesson />} />
            <Route path="/choose-pattern" element={<ChoosePattern />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
