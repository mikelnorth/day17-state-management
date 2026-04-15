import { createContext, useContext } from 'react'
import BugCard from './BugCard.jsx'

/*
 * Bug 1 — useContext is called for a context that has no Provider above
 * the component. React returns the default value (undefined here),
 * which usually crashes the first time the code tries to read a property.
 */
const ThemeContext = createContext()

function Consumer() {
  const value = useContext(ThemeContext)
  return (
    <div className="rounded border border-slate-200 bg-white p-2 text-xs">
      <p>
        <span className="text-slate-500">value from context: </span>
        <code className="bg-rose-100 text-rose-800 px-1 rounded">
          {value === undefined ? 'undefined' : JSON.stringify(value)}
        </code>
      </p>
      <p className="text-slate-500 mt-1">
        If we tried <code>value.theme</code> below, React would crash with{' '}
        <em>&quot;Cannot read properties of undefined&quot;</em>.
      </p>
    </div>
  )
}

export default function Bug1MissingProvider() {
  return (
    <BugCard
      number="1"
      title="The missing Provider"
      symptom="useContext returns undefined, then the first property access crashes."
      demo={
        // NO <ThemeContext.Provider> wrapping this — that's the bug.
        <Consumer />
      }
      diagnosis="When you call useContext(X) without wrapping an ancestor in <X.Provider>, React uses the context's default value. If you didn't pass one to createContext(), that's undefined — and any code that expects an object will crash immediately."
      fix="Wrap the subtree that needs the data in <Context.Provider value={...}>. Always keep the Provider near the top of the subtree — routers, layouts, or App itself."
      fixSnippet={`<ThemeContext.Provider value={{ theme: 'light' }}>
  <Consumer />
</ThemeContext.Provider>`}
    />
  )
}
