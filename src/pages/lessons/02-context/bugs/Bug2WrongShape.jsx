import { createContext, useContext, useState } from 'react'
import BugCard from './BugCard.jsx'

/*
 * Bug 2 — The Provider publishes a primitive, but the consumer
 * destructures as if it were an object.
 */
const ThemeContext = createContext()

function Consumer() {
  // BUG: Provider value is just the string 'light', but we destructure
  // like it's an object. `theme` ends up undefined.
  const { theme } = useContext(ThemeContext) ?? {}
  return (
    <div className="rounded border border-slate-200 bg-white p-2 text-xs">
      <p>
        <span className="text-slate-500">theme: </span>
        <code className="bg-rose-100 text-rose-800 px-1 rounded">
          {theme === undefined ? 'undefined' : theme}
        </code>
      </p>
    </div>
  )
}

export default function Bug2WrongShape() {
  const [theme] = useState('light')
  return (
    <BugCard
      number="2"
      title="Value shape mismatch"
      symptom="Consumer destructures { theme } but theme is undefined — even though the Provider clearly sets a value."
      demo={
        // BUG: value is a string, not an object.
        <ThemeContext.Provider value={theme}>
          <Consumer />
        </ThemeContext.Provider>
      }
      diagnosis="The Provider passed value={theme} — a bare string. The consumer did const { theme } = useContext(...). You can't destructure `.theme` off of a string. Provider and consumer disagreed on the shape."
      fix="Pick one shape and stick to it. If consumers want { theme, setTheme }, Provider must publish an object with those keys."
      fixSnippet={`// Provider
<ThemeContext.Provider value={{ theme, setTheme }}>

// Consumer
const { theme, setTheme } = useContext(ThemeContext)`}
    />
  )
}
