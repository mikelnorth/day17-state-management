/*
 * WE DO — extracted Context module (the target state).
 *
 * STARTING STATE: this file is almost empty. The class will fill it in together.
 *
 * Target shape:
 *   import { createContext, useContext, useState } from 'react'
 *
 *   const ThemeContext = createContext()
 *
 *   export function ThemeProvider({ children }) {
 *     const [theme, setTheme] = useState('light')
 *     const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light')
 *     return (
 *       <ThemeContext.Provider value={{ theme, toggle }}>
 *         {children}
 *       </ThemeContext.Provider>
 *     )
 *   }
 *
 *   // Custom hook: the "public API" for the context.
 *   export function useTheme() {
 *     return useContext(ThemeContext)
 *   }
 *
 * WHY A CUSTOM HOOK?
 *   - Consumers don't need to know the Context instance exists.
 *   - Typo-safe: one import, one call. `useTheme()` is easier than
 *     `useContext(ThemeContext)` at every call site.
 *   - Later, we can add defaults, logging, or throw-if-no-provider
 *     in ONE place, without touching consumers.
 */

// TODO (we-do): build ThemeProvider + useTheme here so the whole app can use them.
export function ThemeProvider({ children }) {
  return children
}

export function useTheme() {
  return { theme: 'light', toggle: () => {} }
}
