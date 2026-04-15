/*
 * WE DO — file 5 of 5 (deepest consumer #1).
 *
 * After the class builds the drill, this should:
 *   - accept `cartCount` as a prop
 *   - render the number inside the badge
 */
export default function CartBadge(/* ??? */) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1">
      Cart
      <span className="inline-flex items-center justify-center rounded-full bg-white text-indigo-700 w-5 h-5 text-[11px]">
        {/* TODO: render cartCount from props */}?
      </span>
    </span>
  )
}
