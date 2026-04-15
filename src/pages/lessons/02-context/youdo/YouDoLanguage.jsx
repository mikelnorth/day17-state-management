import DemoSurface from '../../../../components/ui/DemoSurface.jsx'
import { LanguageProvider } from './LanguageContext.jsx'
import LocaleSwitcher from './LocaleSwitcher.jsx'
import Shell from './Shell.jsx'

/*
 * YOU DO — file 1 of 5 (entry).
 *
 * Your tasks in order:
 *
 *   1. Open LanguageContext.jsx. Build:
 *        - createContext()
 *        - LanguageProvider with useState for locale
 *        - useLanguage() custom hook
 *      (See the hint block inside that file.)
 *
 *   2. Come back here. The <LanguageProvider> is already wrapping the
 *      tree — once your provider actually provides, the whole thing
 *      will start working.
 *
 *   3. Confirm behavior:
 *        - Clicking a locale button changes the Greeting immediately.
 *        - Shell, which wraps Greeting, NEVER sees a locale prop.
 *        - LocaleSwitcher and Greeting both read from the same provider.
 *
 *   4. Design reflection:
 *        - Why does this context's `value` need BOTH locale AND setLocale?
 *        - What would break if you only provided `locale`?
 *        - Could you add a 5th locale by editing just one file?
 */
export default function YouDoLanguage() {
  return (
    <LanguageProvider>
      <DemoSurface title="No prop drilling to refactor — recognize that locale should start in Context and build it from scratch.">
        <div className="space-y-3">
          <LocaleSwitcher />
          <Shell />
        </div>
      </DemoSurface>
    </LanguageProvider>
  )
}
