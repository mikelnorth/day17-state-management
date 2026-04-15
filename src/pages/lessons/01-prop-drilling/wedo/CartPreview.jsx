/*
 * WE DO — deepest consumer #2.
 *
 * Sits in the page body (not the header). Needs the same cartCount.
 *
 * After the drill is complete:
 *   - accept `cartCount` as a prop
 *   - display it in the sentence
 */
export default function CartPreview(/* ??? */) {
  return (
    <div className="rounded border border-indigo-200 bg-indigo-50 p-2 text-xs text-indigo-900">
      {/* TODO: render cartCount from props */}
      &ldquo;You have <span className="font-mono font-semibold">?</span> items waiting.&rdquo;
    </div>
  )
}
