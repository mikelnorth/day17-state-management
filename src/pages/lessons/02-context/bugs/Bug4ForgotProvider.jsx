import { createContext, useContext, useState } from 'react'
import BugCard from './BugCard.jsx'

/*
 * Bug 4 — A consumer rendered OUTSIDE the Provider's subtree.
 *
 * Classic refactoring accident: someone moves a component up in the
 * tree and it quietly stops working because it's no longer under the
 * right Provider.
 */
const ThemeContext = createContext()

function Consumer({ label }) {
  const theme = useContext(ThemeContext)
  const ok = theme !== undefined
  return (
    <div
      className={`flex items-center justify-between rounded border px-2 py-1 text-xs ${
        ok
          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
          : 'bg-rose-50 border-rose-200 text-rose-900'
      }`}
    >
      <span>{label}</span>
      <code className={`px-1 rounded ${ok ? 'bg-white' : 'bg-rose-100'}`}>
        {theme === undefined ? 'undefined' : theme}
      </code>
    </div>
  )
}

function BrokenApp() {
  const [theme] = useState('light')
  return (
    <div className="space-y-2">
      {/* BUG: this consumer is rendered BEFORE/OUTSIDE the Provider */}
      <Consumer label="Consumer A (outside Provider)" />

      <ThemeContext.Provider value={theme}>
        <Consumer label="Consumer B (inside Provider)" />
      </ThemeContext.Provider>
    </div>
  )
}

export default function Bug4ForgotProvider() {
  return (
    <BugCard
      number="4"
      title="Consumer outside the Provider subtree"
      symptom="Two identical consumers, very different outputs. One shows the theme, one shows undefined."
      demo={<BrokenApp />}
      diagnosis="Only components RENDERED INSIDE <ThemeContext.Provider> receive its value. A sibling rendered above or next to the Provider is outside the subtree and gets the context's default (undefined here). This often happens after refactoring: someone moves a component up one layer, and it silently stops working."
      fix="Move the Provider high enough that every component that needs the context is a descendant. For app-wide state, put the Provider near the root (in App.jsx or your router)."
      fixSnippet={`<ThemeContext.Provider value={theme}>
  {/* EVERYTHING that needs theme goes inside */}
  <ConsumerA />
  <ConsumerB />
</ThemeContext.Provider>`}
    />
  )
}
