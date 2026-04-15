import { useState } from 'react'

export default function BugCard({
  number,
  title,
  symptom,
  demo,
  diagnosis,
  fix,
  fixSnippet,
}) {
  const [stage, setStage] = useState('broken') // 'broken' | 'diagnosed' | 'fixed'

  return (
    <div className="rounded-xl border border-rose-200 bg-white overflow-hidden">
      <div className="px-4 py-3 border-b border-rose-200 bg-rose-50 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-rose-700 font-semibold">
            Bug {number}
          </p>
          <h3 className="text-base font-semibold text-slate-900 mt-0.5">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1">
          {['broken', 'diagnosed', 'fixed'].map((s, i) => (
            <span
              key={s}
              className={`w-2.5 h-2.5 rounded-full ${
                (stage === 'broken' && i === 0) ||
                (stage === 'diagnosed' && i <= 1) ||
                (stage === 'fixed' && i <= 2)
                  ? 'bg-rose-600'
                  : 'bg-rose-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <p className="text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Symptom: </span>
          {symptom}
        </p>

        <div className="rounded border border-slate-200 bg-slate-50 p-3">
          <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Live broken demo
          </p>
          {demo}
        </div>

        {stage !== 'broken' && (
          <div className="rounded border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            <p className="font-semibold mb-1">What went wrong</p>
            <p className="text-xs leading-relaxed">{diagnosis}</p>
          </div>
        )}

        {stage === 'fixed' && (
          <div className="rounded border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
            <p className="font-semibold mb-1">The fix</p>
            <p className="text-xs leading-relaxed mb-2">{fix}</p>
            {fixSnippet && (
              <pre className="rounded bg-slate-900 text-slate-100 text-[11px] p-2 overflow-x-auto leading-relaxed">
                <code>{fixSnippet}</code>
              </pre>
            )}
          </div>
        )}

        <div className="flex gap-2 pt-1">
          {stage === 'broken' && (
            <button
              onClick={() => setStage('diagnosed')}
              className="text-xs rounded bg-indigo-600 text-white px-3 py-1.5 hover:bg-indigo-700"
            >
              Diagnose it
            </button>
          )}
          {stage === 'diagnosed' && (
            <button
              onClick={() => setStage('fixed')}
              className="text-xs rounded bg-emerald-600 text-white px-3 py-1.5 hover:bg-emerald-700"
            >
              Show the fix
            </button>
          )}
          {stage !== 'broken' && (
            <button
              onClick={() => setStage('broken')}
              className="text-xs rounded border border-slate-300 bg-white text-slate-700 px-3 py-1.5 hover:bg-slate-100"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
