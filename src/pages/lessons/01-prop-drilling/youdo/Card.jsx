import Label from './Label.jsx'

/*
 * YOU DO — middle pass-through.
 *
 * Card renders two Labels. Neither Card nor its Labels have any state
 * of their own — Card just routes accentColor on through.
 *
 * After the drill:
 *   - accept `accentColor` as a prop
 *   - forward it to both <Label /> calls
 */
export default function Card(/* ??? */) {
  return (
    <div className="rounded border border-slate-200 bg-white p-3 space-y-2">
      <p className="text-[11px] uppercase tracking-wider text-slate-500">
        Card (uses accentColor via its Labels)
      </p>
      {/* TODO: pass accentColor to both Labels */}
      <Label>Featured</Label>
      <Label>New</Label>
    </div>
  )
}
