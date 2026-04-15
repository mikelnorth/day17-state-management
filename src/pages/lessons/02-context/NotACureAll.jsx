import CodeBlock from '../../../components/ui/CodeBlock.jsx'

export default function NotACureAll() {
  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-5 space-y-3">
      <div>
        <p className="text-xs uppercase tracking-widest text-rose-700 font-semibold">
          Anti-pattern
        </p>
        <h2 className="text-xl font-semibold text-slate-900 mt-1">
          Context isn&apos;t a cure-all. Don&apos;t reach for it by default.
        </h2>
      </div>
      <p className="text-sm text-slate-700 leading-relaxed">
        Context is a re-render broadcaster. Every consumer re-renders when
        the value changes &mdash; even consumers that only care about one
        field of a big object. That&apos;s the right behavior for shared
        data, and the wrong behavior for volatile local state.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded border border-rose-300 bg-white p-3">
          <p className="text-[11px] uppercase tracking-wider text-rose-700 font-semibold mb-2">
            Don&apos;t do this
          </p>
          <CodeBlock label="ModalContext.jsx">{`// Modal open/closed in global Context.
// Used by exactly one button + one modal.
const ModalContext = createContext()

function ModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
}`}</CodeBlock>
        </div>
        <div className="rounded border border-emerald-300 bg-white p-3">
          <p className="text-[11px] uppercase tracking-wider text-emerald-700 font-semibold mb-2">
            Do this instead
          </p>
          <CodeBlock label="SettingsPanel.jsx">{`// Modal state is local to the component that owns it.
function SettingsPanel() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open settings
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  )
}`}</CodeBlock>
        </div>
      </div>
      <ul className="text-sm text-slate-700 list-disc list-inside space-y-1 leading-relaxed">
        <li>Local UI state (modal, hover, input text, accordion open) → <code className="px-1 bg-white rounded border border-rose-200">useState</code>.</li>
        <li>Stable shared data many components need (theme, auth, cart) → <code className="px-1 bg-white rounded border border-rose-200">Context</code>.</li>
        <li>
          Ask yourself: <em>does this value change per keystroke / mouse
          move</em>? If yes, Context will rerender the world. Keep it
          local.
        </li>
      </ul>
    </div>
  )
}
