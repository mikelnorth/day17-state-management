import UserProfile from './UserProfile.jsx'

/*
 * I DO — file 3 of 4 (middle pass-through).
 *
 * Sidebar itself has no interest in `user`, but UserProfile needs it,
 * so Sidebar is forced to accept it and forward it.
 *
 * After the drill is complete, this should:
 *   - accept `user` as a prop
 *   - forward it to <UserProfile />
 */
export default function Sidebar(/* ??? */) {
  return (
    <div className="rounded border border-slate-200 bg-slate-50 p-3 space-y-2">
      <p className="text-[11px] uppercase tracking-wider text-amber-700">
        Sidebar (forwards user, doesn&apos;t use it)
      </p>
      {/* TODO: pass user to UserProfile */}
      <UserProfile />
    </div>
  )
}
