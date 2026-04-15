/*
 * I DO — file 4 of 4 (deepest layer).
 *
 * Right now this component hardcodes "Guest". The instructor's task is
 * to lift that data up to App, then thread it back down as a prop.
 *
 * After the drill is complete, this component should:
 *   - accept `user` as a prop
 *   - display user.name and user.role
 */
export default function UserProfile(/* ??? */) {
  return (
    <div className="rounded border border-slate-300 bg-white p-3">
      <p className="text-[11px] uppercase tracking-wider text-slate-500">
        UserProfile (deepest consumer)
      </p>
      {/* TODO: display user.name and user.role from props */}
      <p className="font-semibold text-slate-900">Guest</p>
      <p className="text-xs text-slate-600">&mdash;</p>
    </div>
  )
}
