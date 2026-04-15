/*
 * WE DO — consumer branch #1 (top of the tree).
 *
 * STARTING STATE: receives `theme` and `toggle` as props.
 *
 * After the refactor:
 *   - Accept NO theme props.
 *   - import { useTheme } from './ThemeContext.jsx'
 *   - Call useTheme() to get { theme, toggle }.
 */
export default function Navbar({ theme, toggle }) {
  return (
    <div
      className={`flex items-center justify-between rounded border px-3 py-2 ${
        theme === 'dark'
          ? 'bg-slate-900 text-slate-100 border-slate-700'
          : 'bg-white text-slate-900 border-slate-200'
      }`}
    >
      <p className="text-sm font-semibold">Acme App</p>
      <button
        onClick={toggle}
        className="text-xs rounded border border-current px-2.5 py-1"
      >
        Flip to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  )
}
