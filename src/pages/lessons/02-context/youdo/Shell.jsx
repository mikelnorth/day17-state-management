import Greeting from './Greeting.jsx'

/*
 * YOU DO — pass-through layer.
 *
 * Notice: Shell doesn't care about the locale. With Context, it NEVER
 * has to learn about it. Compare to Lesson 1 where a file like this
 * would have had to accept and forward the prop.
 */
export default function Shell() {
  return (
    <div className="rounded border border-slate-200 bg-slate-50 p-3">
      <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-2">
        Shell (no locale prop — ever)
      </p>
      <Greeting />
    </div>
  )
}
