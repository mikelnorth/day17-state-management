import { useLanguage } from './LanguageContext.jsx'

/*
 * YOU DO — consumer that needs to READ locale AND WRITE to it.
 *
 * After you finish LanguageContext.jsx with the recommended shape:
 *   - useLanguage() gives you { locale, setLocale }
 *   - Each button calls setLocale(option.value)
 *   - The selected button highlights based on `locale`
 *
 * If your buttons don't do anything, re-read LanguageContext.jsx —
 * the stubs there return a dummy setLocale that no-ops.
 */
const options = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'ja', label: '日本語' },
]

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLanguage()
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setLocale(o.value)}
          className={`text-xs rounded px-3 py-1.5 border transition ${
            locale === o.value
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
