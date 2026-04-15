import { useReducer, useState } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'

/*
 * YOU DO — Complete the todo reducer.
 *
 * Each todo looks like: { id: number, text: string, completed: boolean }
 *
 * Actions you need to support:
 *  - { type: 'add',    payload: 'string text' }
 *  - { type: 'toggle', payload: todoId }
 *  - { type: 'delete', payload: todoId }
 *
 * Bonus:
 *  - { type: 'clear_completed' }
 */

const initialState = [
  { id: 1, text: 'Learn useState', completed: true },
  { id: 2, text: 'Learn useReducer', completed: false },
]

function todosReducer(state, action) {
  switch (action.type) {
    // TODO: implement 'add'
    // HINT: return [...state, { id: Date.now(), text: action.payload, completed: false }]

    // TODO: implement 'toggle'
    // HINT: use state.map(), flip completed on the matching id

    // TODO: implement 'delete'
    // HINT: use state.filter(), drop the matching id

    // BONUS: 'clear_completed'
    // HINT: filter out every todo whose completed is true

    default:
      return state
  }
}

export default function YouDoTodos() {
  const [state, dispatch] = useReducer(todosReducer, initialState)
  const [draft, setDraft] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    dispatch({ type: 'add', payload: text })
    setDraft('')
  }

  return (
    <DemoSurface title="Make 'add', 'toggle', and 'delete' work. The UI is already wired up.">
      <form onSubmit={handleAdd} className="flex gap-2 mb-3">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="What needs doing?"
          className="flex-1 rounded border border-slate-300 bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          className="text-xs rounded bg-emerald-600 text-white px-3 py-1.5 hover:bg-emerald-700"
        >
          Add todo
        </button>
      </form>

      {state.length === 0 ? (
        <p className="text-sm text-slate-500 italic">
          No todos yet — implement <code>add</code> to fix that.
        </p>
      ) : (
        <ul className="divide-y divide-slate-200 rounded border border-slate-200 bg-white">
          {state.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 px-3 py-2 text-sm"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
                className="h-4 w-4"
              />
              <span
                className={
                  todo.completed
                    ? 'flex-1 text-slate-400 line-through'
                    : 'flex-1 text-slate-900'
                }
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch({ type: 'delete', payload: todo.id })}
                className="text-xs text-rose-600 hover:text-rose-800"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex justify-end">
        <button
          onClick={() => dispatch({ type: 'clear_completed' })}
          className="text-xs rounded border border-slate-300 bg-white text-slate-700 px-3 py-1.5 hover:bg-slate-100"
        >
          Clear completed (bonus)
        </button>
      </div>
    </DemoSurface>
  )
}
