import { useLanguage } from './LanguageContext.jsx'

/*
 * YOU DO — consumer that needs to READ locale.
 *
 * After you finish LanguageContext.jsx, this should just work:
 *   - useLanguage() returns { locale, setLocale }
 *   - pick the right string from the `greetings` map and show it
 *
 * You shouldn't need to change anything here if you match the hint's shape.
 */
const greetings = {
  en: 'Hello, friend!',
  es: '¡Hola, amigo!',
  fr: 'Bonjour, ami !',
  ja: 'こんにちは!',
}

export default function Greeting() {
  const { locale } = useLanguage()
  return (
    <div className="rounded border border-slate-200 bg-white p-3">
      <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
        Greeting (reads locale via useLanguage)
      </p>
      <p className="text-lg font-semibold text-slate-900">
        {greetings[locale] ?? '(unknown locale)'}
      </p>
    </div>
  )
}
