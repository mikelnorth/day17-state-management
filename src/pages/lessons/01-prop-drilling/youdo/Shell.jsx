import Panel from './Panel.jsx'

/*
 * YOU DO — middle pass-through (first layer below the state owner).
 *
 * After the drill:
 *   - accept `accentColor` as a prop
 *   - forward it to <Panel />
 */
export default function Shell(/* ??? */) {
  return (
    <div className="rounded border border-slate-200 bg-slate-100/70 p-3 space-y-2">
      <p className="text-[11px] uppercase tracking-wider text-amber-700">
        Shell (forwards accentColor)
      </p>
      {/* TODO: pass accentColor to Panel */}
      <Panel />
    </div>
  )
}
