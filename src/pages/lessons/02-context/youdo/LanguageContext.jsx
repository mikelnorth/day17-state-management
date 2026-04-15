/*
 * YOU DO — this is the file you design.
 *
 * Unlike the I Do and We Do, there's no prop-drilled "before" here.
 * Your job: recognize that locale is shared state, and build it as
 * a Context from the start.
 *
 * Requirements:
 *   1. Create a LanguageContext with createContext().
 *   2. Build a LanguageProvider that:
 *        - holds `locale` state (default 'en')
 *        - exposes both locale and a setter so consumers can switch
 *   3. Export a useLanguage() custom hook that wraps useContext.
 *
 * Value-shape decision: what do you put in Provider's `value`?
 *   - Option A: value={locale}            // read-only, no switching
 *   - Option B: value={{ locale, setLocale }}    // read + write
 *   - Option C: value={{ locale, dispatch }}     // later, with useReducer
 *   For this exercise, pick B.
 *
 *   HINT for the final shape:
 *   ---------------------------------------------------------------
 *   import { createContext, useContext, useState } from 'react'
 *   const LanguageContext = createContext()
 *
 *   export function LanguageProvider({ children }) {
 *     const [locale, setLocale] = useState('en')
 *     return (
 *       <LanguageContext.Provider value={{ locale, setLocale }}>
 *         {children}
 *       </LanguageContext.Provider>
 *     )
 *   }
 *
 *   export function useLanguage() {
 *     return useContext(LanguageContext)
 *   }
 *   ---------------------------------------------------------------
 */

// TODO: replace these stubs with your real implementation.
export function LanguageProvider({ children }) {
  return children
}

export function useLanguage() {
  return { locale: 'en', setLocale: () => {} }
}
