import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import IDoNotifications from './IDoNotifications.jsx'
import WeDoCart from './WeDoCart.jsx'
import YouDoFavorites from './YouDoFavorites.jsx'

export default function ContextReducerLesson() {
  return (
    <LessonShell
      number="4"
      title="Context + useReducer — the combo pattern"
      subtitle="Context shares the state. useReducer organizes the updates. Wrap them together with a Provider + a custom hook, and you have a clean, reusable state architecture."
    >
      <ConceptCallout title="This is the pattern to reach for in real apps.">
        <p>
          You&apos;ve seen both halves. Now combine them: put a{' '}
          <code className="px-1 bg-slate-200 rounded">useReducer</code> inside a Provider and expose{' '}
          <code className="px-1 bg-slate-200 rounded">state</code> and{' '}
          <code className="px-1 bg-slate-200 rounded">dispatch</code>. Any component
          can read or update shared state. The reducer keeps update logic in one place.
        </p>
      </ConceptCallout>

      <CodeBlock label="The shape">{`const TaskContext = createContext()

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

function useTasks() {
  return useContext(TaskContext)
}

// In a deep component:
const { state, dispatch } = useTasks()
dispatch({ type: 'add', payload: 'Learn context' })`}</CodeBlock>

      <ExampleBlock
        variant="ido"
        title="Demo — Toast notifications system"
        description="Toasts are a classic use case. Any component anywhere can push a toast. A single ToastProvider owns the list. A reducer handles push / dismiss / clear_all."
      >
        <IDoNotifications />
        <div className="rounded-md bg-sky-50 border border-sky-200 px-4 py-3 text-sm text-sky-900">
          <p className="font-semibold mb-1">Point out:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Buttons in totally different components all dispatch actions.</li>
            <li>The ToastList reads the same state — no prop drilling.</li>
            <li>The custom hook <code className="px-1 bg-white rounded border border-sky-200">useToasts()</code> is the public API.</li>
          </ul>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Together — Shopping cart"
        description="Build a CartProvider with add_item, remove_item, update_quantity, and clear actions. A product grid dispatches add. A cart summary reads state. A cart drawer reads state AND dispatches remove/update."
      >
        <WeDoCart />
        <div className="rounded-md bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-900">
          <p className="font-semibold mb-1">Talking points:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Derived state</strong>: total price is <em>computed</em> from items,
              not stored. Don&apos;t put derivable values in state.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">add_item</code>{' '}
              needs to <em>merge</em> with existing item if same id. Reducers are a
              perfect home for that logic.
            </li>
          </ul>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Practice — Movie Favorites (mini project starter)"
        description="This is effectively the Day 17 mini project. Students complete the FavoritesProvider so MovieBrowser, FavoritesStats, and FavoritesList all share state through context + reducer."
      >
        <YouDoFavorites />
        <div className="rounded-md bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-900">
          <p className="font-semibold mb-1">Your tasks:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Create the{' '}
              <code className="px-1 bg-white rounded border border-emerald-200">
                FavoritesContext
              </code>{' '}
              and a <code className="px-1 bg-white rounded border border-emerald-200">
                FavoritesProvider
              </code> with a reducer.
            </li>
            <li>
              Handle{' '}
              <code className="px-1 bg-white rounded border border-emerald-200">
                add_favorite
              </code>{' '}
              and{' '}
              <code className="px-1 bg-white rounded border border-emerald-200">
                remove_favorite
              </code>.
            </li>
            <li>
              Expose a{' '}
              <code className="px-1 bg-white rounded border border-emerald-200">useFavorites()</code>{' '}
              hook.
            </li>
            <li>
              Make MovieCard, FavoritesStats, and FavoritesList all use the shared state.
            </li>
          </ol>
        </div>
      </ExampleBlock>
    </LessonShell>
  )
}
