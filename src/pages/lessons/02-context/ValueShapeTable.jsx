const rows = [
  {
    shape: 'value={theme}',
    what: 'Just the data',
    good: 'Simplest possible API. Read-only consumers.',
    bad: 'Nobody can change it. Add a setter later = breaking change.',
  },
  {
    shape: 'value={{ theme, setTheme }}',
    what: 'Data + direct setter',
    good: 'Consumers can read AND update. Easy to type by hand.',
    bad: 'Setter is an implementation detail (useState). Hard to evolve into reducer-based logic later.',
  },
  {
    shape: 'value={{ theme, toggle, setToDark }}',
    what: 'Data + named action helpers',
    good: 'Intent is obvious at call sites. Easy to change the implementation.',
    bad: 'Provider has to design these functions up front.',
  },
  {
    shape: 'value={{ state, dispatch }}',
    what: 'Reducer-backed',
    good: 'Scales to many actions. Same pattern as Lesson 4.',
    bad: 'Overkill for simple values.',
  },
]

export default function ValueShapeTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-600 text-left">
          <tr>
            <th className="px-4 py-3 font-semibold">Shape</th>
            <th className="px-4 py-3 font-semibold">What you&apos;re saying</th>
            <th className="px-4 py-3 font-semibold text-emerald-700">Good when</th>
            <th className="px-4 py-3 font-semibold text-rose-700">Watch out for</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((r) => (
            <tr key={r.shape}>
              <td className="px-4 py-3 font-mono text-xs text-indigo-700 align-top whitespace-nowrap">
                {r.shape}
              </td>
              <td className="px-4 py-3 text-slate-700 align-top">{r.what}</td>
              <td className="px-4 py-3 text-emerald-700 align-top text-xs">
                {r.good}
              </td>
              <td className="px-4 py-3 text-rose-700 align-top text-xs">{r.bad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
