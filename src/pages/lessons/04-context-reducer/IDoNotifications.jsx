import { createContext, useContext, useReducer } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'

// --- Context + Reducer setup ---
const ToastContext = createContext()

const initialState = { toasts: [] }

function toastReducer(state, action) {
  switch (action.type) {
    case 'push':
      return {
        toasts: [
          ...state.toasts,
          {
            id: Date.now() + Math.random(),
            message: action.payload.message,
            tone: action.payload.tone ?? 'info',
          },
        ],
      }
    case 'dismiss':
      return {
        toasts: state.toasts.filter((t) => t.id !== action.payload),
      }
    case 'clear_all':
      return { toasts: [] }
    default:
      return state
  }
}

function ToastProvider({ children }) {
  const [state, dispatch] = useReducer(toastReducer, initialState)
  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  )
}

function useToasts() {
  return useContext(ToastContext)
}

// --- Consumers ---
function TriggerPanel() {
  const { dispatch } = useToasts()
  return (
    <div className="rounded border border-slate-200 bg-white p-3">
      <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-2">
        TriggerPanel (dispatches only)
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() =>
            dispatch({
              type: 'push',
              payload: { message: 'Saved successfully', tone: 'success' },
            })
          }
          className="text-xs rounded bg-emerald-600 text-white px-3 py-1.5 hover:bg-emerald-700"
        >
          Success toast
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'push',
              payload: { message: 'Something went wrong', tone: 'error' },
            })
          }
          className="text-xs rounded bg-rose-600 text-white px-3 py-1.5 hover:bg-rose-700"
        >
          Error toast
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'push',
              payload: { message: 'Heads up, cache cleared', tone: 'info' },
            })
          }
          className="text-xs rounded bg-sky-600 text-white px-3 py-1.5 hover:bg-sky-700"
        >
          Info toast
        </button>
        <button
          onClick={() => dispatch({ type: 'clear_all' })}
          className="text-xs rounded border border-slate-300 bg-white text-slate-700 px-3 py-1.5 hover:bg-slate-100"
        >
          Clear all
        </button>
      </div>
    </div>
  )
}

const toneStyles = {
  success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
  error: 'bg-rose-50 border-rose-200 text-rose-900',
  info: 'bg-sky-50 border-sky-200 text-sky-900',
}

function ToastList() {
  const { state, dispatch } = useToasts()

  if (state.toasts.length === 0) {
    return (
      <div className="rounded border border-dashed border-slate-300 bg-slate-50 px-3 py-8 text-center text-xs text-slate-500 italic">
        No notifications. Press a trigger above.
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {state.toasts.map((t) => (
        <li
          key={t.id}
          className={`flex items-center justify-between rounded border px-3 py-2 text-sm ${toneStyles[t.tone]}`}
        >
          <span>{t.message}</span>
          <button
            onClick={() => dispatch({ type: 'dismiss', payload: t.id })}
            className="text-xs text-slate-500 hover:text-slate-900"
          >
            dismiss
          </button>
        </li>
      ))}
    </ul>
  )
}

function ToastCount() {
  const { state } = useToasts()
  return (
    <div className="rounded border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
      Active notifications:{' '}
      <span className="font-mono font-semibold">{state.toasts.length}</span>
    </div>
  )
}

// --- Demo ---
export default function IDoNotifications() {
  return (
    <ToastProvider>
      <DemoSurface title="3 components, 1 shared state. Triggers dispatch, list reads, counter reads.">
        <div className="space-y-3">
          <TriggerPanel />
          <ToastCount />
          <ToastList />
        </div>
      </DemoSurface>
    </ToastProvider>
  )
}
