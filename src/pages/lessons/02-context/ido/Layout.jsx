import Sidebar from './Sidebar.jsx'

/*
 * I DO — middle pass-through.
 *
 * STARTING STATE: accepts `user`, forwards to Sidebar.
 *
 * After the Context refactor:
 *   - accept NO user prop
 *   - render <Sidebar /> with no props
 */
export default function Layout({ user }) {
  return (
    <div className="rounded border border-slate-200 bg-slate-100/70 p-3 space-y-2">
      <p className="text-[11px] uppercase tracking-wider text-amber-700">
        Layout (forwarding user today — should forward nothing tomorrow)
      </p>
      <Sidebar user={user} />
    </div>
  )
}
