import { useReducer } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'

const initialState = {
  name: '',
  email: '',
  role: '',
  company: '',
  notes: '',
}

function formReducer(state, action) {
  switch (action.type) {
    case 'update_field':
      // payload: { field, value }
      return { ...state, [action.payload.field]: action.payload.value }
    case 'reset':
      return initialState
    case 'fill_example':
      return {
        name: 'Katherine Johnson',
        email: 'katherine@nasa.gov',
        role: 'Mathematician',
        company: 'NASA',
        notes: 'Calculated trajectories for Apollo 11.',
      }
    default:
      return state
  }
}

function Field({ label, name, value, onChange, type = 'text' }) {
  const Tag = type === 'textarea' ? 'textarea' : 'input'
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1">
        {label}
      </span>
      <Tag
        name={name}
        value={value}
        onChange={onChange}
        rows={type === 'textarea' ? 2 : undefined}
        type={type === 'textarea' ? undefined : type}
        className="w-full rounded border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </label>
  )
}

export default function WeDoForm() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  // ONE change handler for ALL fields
  const handleChange = (e) =>
    dispatch({
      type: 'update_field',
      payload: { field: e.target.name, value: e.target.value },
    })

  return (
    <DemoSurface title="5 fields, 1 reducer, 1 onChange. Adding a 6th is one line.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Name" name="name" value={state.name} onChange={handleChange} />
        <Field
          label="Email"
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
        />
        <Field label="Role" name="role" value={state.role} onChange={handleChange} />
        <Field
          label="Company"
          name="company"
          value={state.company}
          onChange={handleChange}
        />
        <div className="sm:col-span-2">
          <Field
            label="Notes"
            name="notes"
            type="textarea"
            value={state.notes}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={() => dispatch({ type: 'fill_example' })}
          className="text-xs rounded bg-amber-600 text-white px-3 py-1.5 hover:bg-amber-700"
        >
          Fill with example
        </button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="text-xs rounded border border-slate-300 bg-white text-slate-700 px-3 py-1.5 hover:bg-slate-100"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 rounded border border-slate-200 bg-slate-900 text-slate-100 p-3 text-xs font-mono overflow-x-auto">
        {JSON.stringify(state, null, 2)}
      </div>
    </DemoSurface>
  )
}
