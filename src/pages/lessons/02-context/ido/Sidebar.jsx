import UserProfile from './UserProfile.jsx'

/*
 * I DO — middle pass-through.
 *
 * STARTING STATE: accepts `user` and forwards it — pure tax.
 *
 * After the Context refactor, this file should:
 *   - accept NO props related to user
 *   - render <UserProfile /> with no props
 * (That's the win — this file gets lighter.)
 */
export default function Sidebar({ user }) {
  return (
    <div className="rounded border border-slate-200 bg-slate-50 p-3 space-y-2">
      <p className="text-[11px] uppercase tracking-wider text-amber-700">
        Sidebar (forwarding user today — should forward nothing tomorrow)
      </p>
      <UserProfile user={user} />
    </div>
  )
}
