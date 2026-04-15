/*
 * I DO — deepest consumer.
 *
 * STARTING STATE: reads `user` from props.
 *
 * After the Context refactor, this file should:
 *   - import useContext + UserContext
 *   - accept NO props
 *   - read user from context:  const user = useContext(UserContext)
 */
export default function UserProfile({ user }) {
  return (
    <div className="rounded border border-slate-300 bg-white p-3">
      <p className="text-[11px] uppercase tracking-wider text-slate-500">
        UserProfile (consumer)
      </p>
      <p className="font-semibold text-slate-900">{user.name}</p>
      <p className="text-xs text-slate-600">{user.role}</p>
    </div>
  )
}
