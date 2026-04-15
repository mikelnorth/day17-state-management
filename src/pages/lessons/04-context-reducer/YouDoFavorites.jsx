import { createContext, useContext, useReducer } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'

/*
 * YOU DO — Movie Favorites Dashboard
 *
 * This is the Day 17 mini project. Three components (MovieBrowser /
 * FavoritesStats / FavoritesList) all need to share the same list of
 * favorited movies.
 *
 * Your job: wire up the FavoritesContext + reducer so every component
 * reads and updates one shared source of truth.
 *
 * Supported actions:
 *   { type: 'add_favorite',    payload: movieObject }
 *   { type: 'remove_favorite', payload: movieId }
 */

// =============================================================
// TODO 1: Create the context.
// =============================================================
const FavoritesContext = createContext()

const initialState = { favorites: [] }

// =============================================================
// TODO 2: Implement the reducer.
//   - 'add_favorite' pushes action.payload (a movie) onto favorites,
//     but only if it isn't already there.
//   - 'remove_favorite' filters out the movie with action.payload (id).
// =============================================================
function favoritesReducer(state, action) {
  switch (action.type) {
    // case 'add_favorite':
    //   // HINT: check if movie already in favorites; if so return state unchanged
    //   return { ...state, favorites: [...state.favorites, action.payload] }

    // case 'remove_favorite':
    //   return { ...state, favorites: state.favorites.filter(m => m.id !== action.payload) }

    default:
      return state
  }
}

// =============================================================
// TODO 3: Build the FavoritesProvider.
//   useReducer + FavoritesContext.Provider.
//   Value should be { state, dispatch } so consumers can both read and update.
// =============================================================
function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState)
  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}

// =============================================================
// TODO 4: Write the useFavorites() custom hook.
//   Just a thin wrapper around useContext(FavoritesContext).
// =============================================================
function useFavorites() {
  return useContext(FavoritesContext)
}

// --- Movie catalog (not in state — it's static data) ---
const movies = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'Interstellar', year: 2014 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: 'Arrival', year: 2016 },
  { id: 5, title: 'The Matrix', year: 1999 },
]

// =============================================================
// TODO 5: Use `useFavorites` so each button toggles the movie
//         in/out of favorites.
// =============================================================
function MovieCard({ movie }) {
  const { state, dispatch } = useFavorites()
  const isFavorite = state.favorites.some((m) => m.id === movie.id)

  const toggle = () => {
    if (isFavorite) {
      dispatch({ type: 'remove_favorite', payload: movie.id })
    } else {
      dispatch({ type: 'add_favorite', payload: movie })
    }
  }

  return (
    <div className="flex items-center justify-between rounded border border-slate-200 bg-white px-3 py-2">
      <div>
        <p className="text-sm font-semibold text-slate-900">{movie.title}</p>
        <p className="text-xs text-slate-500">{movie.year}</p>
      </div>
      <button
        onClick={toggle}
        className={`text-xs rounded px-3 py-1.5 border transition ${
          isFavorite
            ? 'bg-rose-600 text-white border-rose-600 hover:bg-rose-700'
            : 'bg-white text-emerald-700 border-emerald-600 hover:bg-emerald-50'
        }`}
      >
        {isFavorite ? 'Remove' : 'Favorite'}
      </button>
    </div>
  )
}

function MovieBrowser() {
  return (
    <div className="space-y-2">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  )
}

// =============================================================
// TODO 6: Read favorites from context to display count.
// =============================================================
function FavoritesStats() {
  const { state } = useFavorites()
  return (
    <div className="rounded border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
      Total favorites:{' '}
      <span className="font-mono font-semibold">{state.favorites.length}</span>
    </div>
  )
}

// =============================================================
// TODO 7: Read favorites from context to display the list.
// =============================================================
function FavoritesList() {
  const { state } = useFavorites()
  if (state.favorites.length === 0) {
    return (
      <p className="text-sm text-slate-500 italic">
        No favorites yet — pick a movie above.
      </p>
    )
  }
  return (
    <ul className="divide-y divide-slate-200 rounded border border-slate-200 bg-white">
      {state.favorites.map((m) => (
        <li key={m.id} className="px-3 py-2 text-sm">
          <span className="font-medium text-slate-900">{m.title}</span>{' '}
          <span className="text-slate-500">({m.year})</span>
        </li>
      ))}
    </ul>
  )
}

// =============================================================
// TODO 8: Wrap the tree in <FavoritesProvider>.
// =============================================================
export default function YouDoFavorites() {
  return (
    <FavoritesProvider>
      <DemoSurface title="When the reducer is complete, all three components stay in sync with zero prop drilling.">
        <div className="space-y-4">
          <FavoritesStats />
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-2">
              Movie Browser
            </p>
            <MovieBrowser />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-2">
              Favorites
            </p>
            <FavoritesList />
          </div>
        </div>
      </DemoSurface>
    </FavoritesProvider>
  )
}
