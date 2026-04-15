export default function DemoSurface({ title, children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      {title && (
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">
          {title}
        </p>
      )}
      <div className="rounded-md bg-white border border-slate-200 p-4">
        {children}
      </div>
    </div>
  )
}
