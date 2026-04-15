import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import IDoCounter from './IDoCounter.jsx'
import WeDoForm from './WeDoForm.jsx'
import YouDoTodos from './YouDoTodos.jsx'

export default function ReducerLesson() {
  return (
    <LessonShell
      number="3"
      title="useReducer — organize complex state"
      subtitle="When one piece of state has many update paths, useReducer centralizes the logic. State transitions become actions, and updates become a predictable function."
    >
      <ConceptCallout title="Reach for useReducer when updates get crowded.">
        <p>
          <code className="px-1 bg-slate-200 rounded">useState</code> is great for one
          or two setters. When you find yourself with 4+ ways to change the same state
          — <em>add</em>, <em>remove</em>, <em>toggle</em>, <em>reset</em>, <em>update</em>{' '}
          — you&apos;re reinventing a reducer by hand. Make it explicit.
        </p>
      </ConceptCallout>

      <CodeBlock label="The shape">{`const [state, dispatch] = useReducer(reducer, initialState)

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 }
    case 'decrement': return { count: state.count - 1 }
    case 'reset':     return { count: 0 }
    default:          return state
  }
}

// In a handler:
dispatch({ type: 'increment' })
dispatch({ type: 'set', payload: 42 })`}</CodeBlock>

      <ExampleBlock
        variant="ido"
        title="Demo — counter with 4 actions"
        description="Start with the simplest reducer. A counter with increment, decrement, reset, and set. The value of useReducer shows up when you have more than one way to change state."
      >
        <IDoCounter />
        <div className="rounded-md bg-sky-50 border border-sky-200 px-4 py-3 text-sm text-sky-900">
          <p className="font-semibold mb-1">Talking points:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              The reducer is a <em>pure function</em>. Same inputs → same output.
            </li>
            <li>Never mutate the incoming state. Return a new object.</li>
            <li>
              Actions are plain objects. <code className="px-1 bg-white rounded border border-sky-200">type</code> describes what happened, <code className="px-1 bg-white rounded border border-sky-200">payload</code> carries data.
            </li>
          </ul>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Together — multi-field form with one reducer"
        description="A classic useState trap: 5 form fields = 5 setters. Let's collapse it to one reducer with `update_field` and `reset` actions."
      >
        <WeDoForm />
        <div className="rounded-md bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-900">
          <p className="font-semibold mb-1">As you build:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              One{' '}
              <code className="px-1 bg-white rounded border border-amber-200">update_field</code>{' '}
              action with{' '}
              <code className="px-1 bg-white rounded border border-amber-200">payload</code>:{' '}
              <code className="px-1 bg-white rounded border border-amber-200">{`{ field, value }`}</code>.
            </li>
            <li>
              A single{' '}
              <code className="px-1 bg-white rounded border border-amber-200">onChange</code>{' '}
              handler for ALL inputs, driven by{' '}
              <code className="px-1 bg-white rounded border border-amber-200">e.target.name</code>.
            </li>
            <li>
              Adding a 6th field? One new line in initialState. No new setter.
            </li>
          </ul>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Practice — todo list reducer"
        description="Students build a todo reducer with three actions: add, toggle, delete. The UI is wired up — you just write the reducer."
      >
        <YouDoTodos />
        <div className="rounded-md bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-900">
          <p className="font-semibold mb-1">Your tasks:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Implement the <code className="px-1 bg-white rounded border border-emerald-200">add</code> case. Payload is the new todo text.
            </li>
            <li>
              Implement <code className="px-1 bg-white rounded border border-emerald-200">toggle</code>. Payload is the todo id. Flip its{' '}
              <code className="px-1 bg-white rounded border border-emerald-200">completed</code> flag.
            </li>
            <li>
              Implement <code className="px-1 bg-white rounded border border-emerald-200">delete</code>. Payload is the todo id.
            </li>
            <li>
              Bonus: add a <code className="px-1 bg-white rounded border border-emerald-200">clear_completed</code> action.
            </li>
          </ol>
        </div>
      </ExampleBlock>
    </LessonShell>
  )
}
