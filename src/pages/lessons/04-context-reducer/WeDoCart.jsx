import { createContext, useContext, useReducer } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'

// --- Provider + reducer ---
const CartContext = createContext()

const initialState = { items: [] }

function cartReducer(state, action) {
  switch (action.type) {
    case 'add_item': {
      const existing = state.items.find((i) => i.id === action.payload.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        }
      }
      return {
        items: [...state.items, { ...action.payload, qty: 1 }],
      }
    }
    case 'remove_item':
      return {
        items: state.items.filter((i) => i.id !== action.payload),
      }
    case 'update_quantity': {
      const { id, qty } = action.payload
      if (qty <= 0) {
        return { items: state.items.filter((i) => i.id !== id) }
      }
      return {
        items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)),
      }
    }
    case 'clear':
      return initialState
    default:
      return state
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  return useContext(CartContext)
}

// --- Products (product catalog, not in state) ---
const products = [
  { id: 'p1', name: 'Mechanical Keyboard', price: 120 },
  { id: 'p2', name: 'Wireless Mouse', price: 45 },
  { id: 'p3', name: 'USB-C Hub', price: 35 },
  { id: 'p4', name: 'Laptop Stand', price: 60 },
]

function ProductGrid() {
  const { dispatch } = useCart()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {products.map((p) => (
        <div
          key={p.id}
          className="flex items-center justify-between rounded border border-slate-200 bg-white px-3 py-2"
        >
          <div>
            <p className="text-sm font-semibold text-slate-900">{p.name}</p>
            <p className="text-xs text-slate-500">${p.price}</p>
          </div>
          <button
            onClick={() => dispatch({ type: 'add_item', payload: p })}
            className="text-xs rounded bg-amber-600 text-white px-2.5 py-1 hover:bg-amber-700"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  )
}

function CartSummary() {
  const { state } = useCart()
  const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = state.items.reduce((sum, i) => sum + i.qty * i.price, 0)
  return (
    <div className="rounded border border-slate-200 bg-white px-3 py-2 text-sm">
      <span className="text-slate-600">
        Items: <span className="font-mono font-semibold">{totalItems}</span>
      </span>
      <span className="mx-3 text-slate-300">|</span>
      <span className="text-slate-600">
        Total: <span className="font-mono font-semibold">${totalPrice}</span>
      </span>
    </div>
  )
}

function CartDrawer() {
  const { state, dispatch } = useCart()
  if (state.items.length === 0) {
    return (
      <p className="text-sm text-slate-500 italic">Cart is empty.</p>
    )
  }
  return (
    <ul className="divide-y divide-slate-200 rounded border border-slate-200 bg-white">
      {state.items.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-3 px-3 py-2 text-sm"
        >
          <span className="flex-1 font-medium text-slate-900">{item.name}</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() =>
                dispatch({
                  type: 'update_quantity',
                  payload: { id: item.id, qty: item.qty - 1 },
                })
              }
              className="w-6 h-6 rounded border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            >
              −
            </button>
            <span className="font-mono w-6 text-center">{item.qty}</span>
            <button
              onClick={() =>
                dispatch({
                  type: 'update_quantity',
                  payload: { id: item.id, qty: item.qty + 1 },
                })
              }
              className="w-6 h-6 rounded border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            >
              +
            </button>
          </div>
          <span className="font-mono text-slate-600 w-16 text-right">
            ${item.qty * item.price}
          </span>
          <button
            onClick={() => dispatch({ type: 'remove_item', payload: item.id })}
            className="text-xs text-rose-600 hover:text-rose-800"
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  )
}

function ClearButton() {
  const { dispatch, state } = useCart()
  if (state.items.length === 0) return null
  return (
    <button
      onClick={() => dispatch({ type: 'clear' })}
      className="text-xs rounded border border-slate-300 bg-white text-slate-700 px-3 py-1.5 hover:bg-slate-100"
    >
      Clear cart
    </button>
  )
}

export default function WeDoCart() {
  return (
    <CartProvider>
      <DemoSurface title="ProductGrid, CartSummary, and CartDrawer all share one reducer-backed context.">
        <div className="space-y-3">
          <CartSummary />
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-2">
              Products
            </p>
            <ProductGrid />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] uppercase tracking-wider text-slate-500">
                Cart
              </p>
              <ClearButton />
            </div>
            <CartDrawer />
          </div>
        </div>
      </DemoSurface>
    </CartProvider>
  )
}
