/*
 * WE DO — consumer branch #3 (bottom of the tree).
 *
 * Notice: three unrelated branches (Navbar, ThemedCard, FooterBar) all
 * want the same data. With props, the root has to hand it to each one.
 * With Context, they just ask for it.
 *
 * STARTING STATE: accepts `theme` and `toggle` as props.
 *
 * After the refactor:
 *   - Accept NO theme props.
 *   - useTheme() directly.
 */
export default function FooterBar({ theme, toggle }) {
  return (
    <div
      className={`flex items-center justify-between rounded border px-3 py-2 text-xs ${
        theme === 'dark'
          ? 'bg-slate-900 text-slate-300 border-slate-700'
          : 'bg-white text-slate-600 border-slate-200'
      }`}
    >
      <span>Footer · theme = {theme}</span>
      <button
        onClick={toggle}
        className="rounded border border-current px-2 py-0.5"
      >
        Toggle
      </button>
    </div>
  )
}
