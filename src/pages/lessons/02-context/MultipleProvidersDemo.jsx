import { createContext, useContext, useState } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'

/*
 * Multiple providers demo — small, focused contexts compose.
 *
 * The key teaching point: you don't need ONE giant global context.
 * Split by concern. Any component reads only what it needs.
 */
const ThemeCtx = createContext()
const UserCtx = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>
  )
}

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Ada' })
  return (
    <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>
  )
}

// Reads ONLY theme. Doesn't even know UserCtx exists.
function ThemeBadge() {
  const { theme, setTheme } = useContext(ThemeCtx)
  return (
    <div className="rounded border border-slate-200 bg-white px-3 py-2 text-sm flex items-center justify-between">
      <span>
        Theme badge · <code className="bg-slate-100 px-1 rounded">{theme}</code>
      </span>
      <button
        onClick={() =>
          setTheme((t) => (t === 'light' ? 'dark' : 'light'))
        }
        className="text-xs rounded bg-sky-600 text-white px-2.5 py-1 hover:bg-sky-700"
      >
        flip
      </button>
    </div>
  )
}

// Reads ONLY user. Doesn't know ThemeCtx exists.
function UserBadge() {
  const { user, setUser } = useContext(UserCtx)
  return (
    <div className="rounded border border-slate-200 bg-white px-3 py-2 text-sm flex items-center justify-between">
      <span>
        User badge · <code className="bg-slate-100 px-1 rounded">{user.name}</code>
      </span>
      <button
        onClick={() =>
          setUser((u) => ({
            name: u.name === 'Ada' ? 'Grace' : 'Ada',
          }))
        }
        className="text-xs rounded bg-emerald-600 text-white px-2.5 py-1 hover:bg-emerald-700"
      >
        swap
      </button>
    </div>
  )
}

// Reads BOTH — just calls two hooks.
function Both() {
  const { theme } = useContext(ThemeCtx)
  const { user } = useContext(UserCtx)
  return (
    <div className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
      Both at once: <code className="bg-white px-1 rounded">{theme}</code>
      {' · '}
      <code className="bg-white px-1 rounded">{user.name}</code>
    </div>
  )
}

export default function MultipleProvidersDemo() {
  return (
    <DemoSurface title="Two focused contexts compose. A component only reads what it needs.">
      <ThemeProvider>
        <UserProvider>
          <div className="space-y-2">
            <ThemeBadge />
            <UserBadge />
            <Both />
          </div>
        </UserProvider>
      </ThemeProvider>
    </DemoSurface>
  )
}
