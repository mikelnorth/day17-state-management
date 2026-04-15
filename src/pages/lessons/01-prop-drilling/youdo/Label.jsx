/*
 * YOU DO — file 5 of 5 (deepest consumer).
 *
 * Right now this badge is hardcoded slate-gray. Your job is to make it
 * use whatever accentColor the user picks in the App.
 *
 * After the drill:
 *   - accept `accentColor` as a prop
 *   - use it as the background color of the badge
 *
 * Hint: use an inline style prop, e.g. style={{ backgroundColor: accentColor }}
 */
export default function Label(/* ??? */ { children }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-xs font-semibold text-white"
      // TODO: switch from the hardcoded slate color to the accentColor prop
      style={{ backgroundColor: '#64748b' }}
    >
      {children}
    </span>
  )
}
