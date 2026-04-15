import CartBadge from './CartBadge.jsx'

/*
 * WE DO — middle pass-through.
 *
 * Header has its own job (showing the store title), but it ALSO has to
 * forward cartCount to the badge it renders. Classic drill middleman.
 *
 * After the drill:
 *   - accept cartCount
 *   - forward to <CartBadge />
 */
export default function Header(/* ??? */) {
  return (
    <div className="flex items-center justify-between rounded border border-slate-200 bg-white px-3 py-2">
      <p className="text-sm font-semibold text-slate-800">My Store</p>
      {/* TODO: pass cartCount to CartBadge */}
      <CartBadge />
    </div>
  )
}
