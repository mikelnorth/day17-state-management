import Header from './Header.jsx'
import CartPreview from './CartPreview.jsx'

/*
 * WE DO — middle pass-through with TWO children that need the data.
 *
 * Page renders Header AND CartPreview. Both end up needing cartCount,
 * so Page has to accept it and hand it to both.
 *
 * After the drill:
 *   - accept cartCount
 *   - forward to <Header /> and <CartPreview />
 */
export default function Page(/* ??? */) {
  return (
    <div className="rounded border border-slate-200 bg-slate-50 p-3 space-y-3">
      <p className="text-[11px] uppercase tracking-wider text-amber-700">
        Page (forwards cartCount to two children)
      </p>
      {/* TODO: pass cartCount to Header */}
      <Header />
      <div className="rounded bg-white border border-dashed border-slate-300 px-3 py-6 text-center text-xs text-slate-400">
        (rest of page content — totally unrelated to the cart)
      </div>
      {/* TODO: pass cartCount to CartPreview */}
      <CartPreview />
    </div>
  )
}
