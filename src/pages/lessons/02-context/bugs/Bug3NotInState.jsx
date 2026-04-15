import { createContext, useContext } from 'react'
import BugCard from './BugCard.jsx'

/*
 * Bug 3 — Provider "shares" a value but never stores it in state.
 * The button mutates a plain variable; React never re-renders.
 */
const CounterContext = createContext()

// BUG: `count` is a module-level variable. Mutating it doesn't trigger
// any re-render, so the consumer keeps showing the stale value.
let count = 0

function Consumer() {
  const { count } = useContext(CounterContext)
  return (
    <span className="font-mono text-lg font-semibold text-slate-900">
      {count}
    </span>
  )
}

function IncrementButton() {
  const { increment } = useContext(CounterContext)
  return (
    <button
      onClick={increment}
      className="text-xs rounded bg-rose-600 text-white px-3 py-1.5 hover:bg-rose-700"
    >
      +1 (nothing happens)
    </button>
  )
}

export default function Bug3NotInState() {
  // BUG: no useState. `count` is just a variable. The closure captures
  // the CURRENT value, but mutating it doesn't re-render.
  const increment = () => {
    count = count + 1
  }

  return (
    <BugCard
      number="3"
      title="Value not stored in state"
      symptom="The increment button runs but the displayed number never changes."
      demo={
        <CounterContext.Provider value={{ count, increment }}>
          <div className="flex items-center gap-3">
            <Consumer />
            <IncrementButton />
          </div>
        </CounterContext.Provider>
      }
      diagnosis="Context is just a delivery system — it doesn't decide WHEN to re-render. React only re-renders when state changes. If your Provider exposes a plain variable instead of a useState value, mutating that variable is invisible to React."
      fix="Hold the value in useState (or useReducer) inside the Provider. Use the setter to update. Then Context will carry the new value to every consumer automatically."
      fixSnippet={`function CounterProvider({ children }) {
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  )
}`}
    />
  )
}
