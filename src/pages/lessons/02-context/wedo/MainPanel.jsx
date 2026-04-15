import ThemedCard from './ThemedCard.jsx'

/*
 * WE DO — pass-through layer in the middle branch.
 *
 * STARTING STATE: accepts `theme`, forwards to ThemedCard.
 *
 * After the refactor:
 *   - Accept NO theme prop. This is the "win": middle layers stop caring.
 *   - Render <ThemedCard /> with no props.
 */
export default function MainPanel({ theme }) {
  return (
    <div className="rounded border border-slate-200 bg-slate-50 p-3 space-y-2">
      <p className="text-[11px] uppercase tracking-wider text-amber-700">
        MainPanel (forwarding theme — should disappear after refactor)
      </p>
      <ThemedCard theme={theme} />
    </div>
  )
}
