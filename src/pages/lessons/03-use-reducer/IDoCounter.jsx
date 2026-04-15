import { useReducer } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'

const initialState = { count: 0 }

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    case 'set':
      return { count: action.payload }
    default:
      return state
  }
}

export default function IDoCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <DemoSurface title="One reducer, four action types. Every update is explicit.">
      <div className="flex items-center gap-6">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-wider text-slate-500">Count</p>
          <p className="text-5xl font-bold text-slate-900 tabular-nums">
            {state.count}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => dispatch({ type: 'decrement' })}
              className="text-xs rounded border border-slate-300 bg-white px-3 py-1.5 hover:bg-slate-100"
            >
              −1
            </button>
            <button
              onClick={() => dispatch({ type: 'increment' })}
              className="text-xs rounded bg-sky-600 text-white px-3 py-1.5 hover:bg-sky-700"
            >
              +1
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch({ type: 'reset' })}
              className="text-xs rounded border border-slate-300 bg-white px-3 py-1.5 hover:bg-slate-100"
            >
              Reset
            </button>
            <button
              onClick={() => dispatch({ type: 'set', payload: 100 })}
              className="text-xs rounded border border-slate-300 bg-white px-3 py-1.5 hover:bg-slate-100"
            >
              Set to 100
            </button>
          </div>
        </div>
      </div>
    </DemoSurface>
  )
}
