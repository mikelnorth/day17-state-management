import Card from './Card.jsx'

/*
 * YOU DO — middle pass-through.
 *
 * Panel doesn't care about the color. It just has to keep the prop
 * moving toward Card (which moves it toward Label).
 *
 * After the drill:
 *   - accept `accentColor` as a prop
 *   - forward it to <Card />
 */
export default function Panel(/* ??? */) {
  return (
    <div className="rounded border border-slate-200 bg-slate-50 p-3 space-y-2">
      <p className="text-[11px] uppercase tracking-wider text-amber-700">
        Panel (forwards accentColor)
      </p>
      {/* TODO: pass accentColor to Card */}
      <Card />
    </div>
  )
}
