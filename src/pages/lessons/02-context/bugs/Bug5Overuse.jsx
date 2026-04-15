import { createContext, useContext, useRef, useState } from 'react'
import BugCard from './BugCard.jsx'

/*
 * Bug 5 — A "code smell" bug, not a mechanical one.
 *
 * Hover state (truly local UI) is put into global Context. Every mouse
 * move re-renders ALL subscribed components, even ones that don't care.
 *
 * We display a render counter on an unrelated consumer to make the
 * invisible cost visible.
 */
const HoverContext = createContext()

function useRenderCount() {
  const ref = useRef(0)
  ref.current += 1
  return ref.current
}

// Unrelated component that subscribes to the context because "why not?"
function UnrelatedReadout() {
  useContext(HoverContext) // subscribes, even though nothing is used
  const renders = useRenderCount()
  return (
    <div className="rounded border border-slate-200 bg-white px-2 py-1 text-xs flex items-center justify-between">
      <span>Unrelated widget (doesn&apos;t care about hover)</span>
      <code className="bg-rose-100 text-rose-800 px-1 rounded">
        renders: {renders}
      </code>
    </div>
  )
}

function HoverTarget() {
  const { setHover } = useContext(HoverContext)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={() => setHover(true)}
      className="rounded border border-dashed border-rose-300 bg-rose-50 px-3 py-4 text-center text-xs text-rose-800"
    >
      Move your mouse over here to spike the render count
    </div>
  )
}

function HoverReadout() {
  const { hover } = useContext(HoverContext)
  return (
    <div className="rounded border border-slate-200 bg-white px-2 py-1 text-xs">
      hover:{' '}
      <code className="bg-slate-100 px-1 rounded">{String(hover)}</code>
    </div>
  )
}

function BrokenApp() {
  const [hover, setHover] = useState(false)
  return (
    <HoverContext.Provider value={{ hover, setHover }}>
      <div className="space-y-2">
        <HoverTarget />
        <HoverReadout />
        <UnrelatedReadout />
      </div>
    </HoverContext.Provider>
  )
}

export default function Bug5Overuse() {
  return (
    <BugCard
      number="5"
      title="Global Context for purely-local state"
      symptom="Hovering anywhere re-renders components that have nothing to do with hover. The render counter on the unrelated widget climbs on every mouse move."
      demo={<BrokenApp />}
      diagnosis="Context is a re-render broadcaster. Every consumer of a context re-renders whenever the context value changes. When you put volatile, high-frequency state (hover, typing, scroll position) into context, every subscribed component pays — even ones that only wanted to read an unrelated field."
      fix="Keep hover, input text, and other ephemeral UI state LOCAL with useState. Use Context for data that's stable, shared, and where a re-render per change is the point (theme, auth, cart contents)."
      fixSnippet={`// Bad — hover in global context
<HoverContext.Provider value={{ hover, setHover }}>

// Good — hover stays inside the component that needs it
function MyButton() {
  const [hover, setHover] = useState(false)
  return <button onMouseEnter={...} />
}`}
    />
  )
}
