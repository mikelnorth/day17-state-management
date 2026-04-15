import Sidebar from './Sidebar.jsx'

/*
 * I DO — file 2 of 4 (middle pass-through).
 *
 * Layout doesn't care about `user` either — it just has to route it
 * through to Sidebar, which routes it through to UserProfile.
 *
 * After the drill is complete:
 *   - accept `user` as a prop
 *   - forward it to <Sidebar />
 */
export default function Layout(/* ??? */) {
  return (
    <div className="rounded border border-slate-200 bg-slate-100/70 p-3 space-y-2">
      <p className="text-[11px] uppercase tracking-wider text-amber-700">
        Layout (forwards user, doesn&apos;t use it)
      </p>
      {/* TODO: pass user to Sidebar */}
      <Sidebar />
    </div>
  )
}
