import DemoSurface from '../../../../components/ui/DemoSurface.jsx'
import Page from './Page.jsx'

/*
 * WE DO — file 1 of 5 (the top, where state will live).
 *
 * Class activity (do this together, taking student suggestions):
 *
 *   1. In this file: add cartCount state + "Add to cart" and "Clear" buttons
 *      that update it. Pass cartCount to <Page />.
 *   2. In Page.jsx: accept cartCount, forward it to BOTH <Header /> and <CartPreview />.
 *   3. In Header.jsx: accept cartCount, forward to <CartBadge />.
 *   4. In CartBadge.jsx: accept cartCount, display it.
 *   5. In CartPreview.jsx: accept cartCount, display it in the sentence.
 *
 * Talking points while you wire this up:
 *   - Page has to carry the prop even though it never uses it for itself.
 *   - Adding the second consumer (CartPreview) means Page now passes the
 *     same prop to two children. In a bigger tree, this gets noisy fast.
 *   - What if a THIRD component somewhere deeper needed cartCount too?
 */

export default function WeDoPropDrill() {
  // TODO: const [cartCount, setCartCount] = useState(0)

  return (
    <DemoSurface title="5 files live in ./wedo. Wire cartCount from App all the way down to TWO consumers.">
      <div className="flex items-center gap-2 mb-4">
        {/* TODO: add working "Add to cart" and "Clear" buttons here.
            They should bump / reset cartCount. */}
        <button
          disabled
          className="text-xs rounded bg-amber-600 text-white px-3 py-1.5 opacity-50 cursor-not-allowed"
        >
          Add to cart (wire me up)
        </button>
        <button
          disabled
          className="text-xs rounded border border-slate-300 bg-white text-slate-700 px-3 py-1.5 opacity-50 cursor-not-allowed"
        >
          Clear
        </button>
      </div>
      {/* TODO: pass cartCount to Page */}
      <Page />
    </DemoSurface>
  )
}
