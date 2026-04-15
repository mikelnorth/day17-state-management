/*
 * WE DO — consumer branch #2 (nested deep in the page body).
 *
 * STARTING STATE: receives `theme` as a prop.
 *
 * After the refactor:
 *   - Accept NO theme props.
 *   - Call useTheme() directly.
 */
export default function ThemedCard({ theme }) {
  return (
    <div
      className={`rounded border px-3 py-3 text-sm ${
        theme === 'dark'
          ? 'bg-slate-900 text-slate-100 border-slate-700'
          : 'bg-white text-slate-900 border-slate-200'
      }`}
    >
      <p className="font-semibold">Themed card</p>
      <p className="text-xs opacity-80">
        Current theme: <code className="opacity-100">{theme}</code>
      </p>
    </div>
  )
}
