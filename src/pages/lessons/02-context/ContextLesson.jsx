import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import IDoContext from './ido/IDoContext.jsx'
import WeDoContext from './wedo/WeDoContext.jsx'
import YouDoLanguage from './youdo/YouDoLanguage.jsx'
import ValueShapeTable from './ValueShapeTable.jsx'
import NotACureAll from './NotACureAll.jsx'
import MultipleProvidersDemo from './MultipleProvidersDemo.jsx'
import Bug1MissingProvider from './bugs/Bug1MissingProvider.jsx'
import Bug2WrongShape from './bugs/Bug2WrongShape.jsx'
import Bug3NotInState from './bugs/Bug3NotInState.jsx'
import Bug4ForgotProvider from './bugs/Bug4ForgotProvider.jsx'
import Bug5Overuse from './bugs/Bug5Overuse.jsx'

export default function ContextLesson() {
  return (
    <LessonShell
      number="2"
      title="Context API — share state without the drill"
      subtitle="Context lets a Provider publish a value, and any descendant can read it with useContext. Today's I Do and We Do refactor prop-drilled trees from Lesson 1 into Context. The You Do starts fresh."
    >
      <ConceptCallout title="Context is a shared data channel for part of the tree.">
        <p>
          A Provider wraps a subtree and publishes a value. Any component inside
          that subtree can <em>opt in</em> to read it with{' '}
          <code className="px-1 bg-slate-200 rounded">useContext</code>. Components
          that don&apos;t care just ignore it.
        </p>
      </ConceptCallout>

      <CodeBlock label="The 3-step pattern">{`// 1. Create the context (once, at module scope)
const ThemeContext = createContext()

// 2. Provide a value somewhere near the top
<ThemeContext.Provider value={{ theme, toggle }}>
  <App />
</ThemeContext.Provider>

// 3. Read it anywhere inside
const { theme, toggle } = useContext(ThemeContext)`}</CodeBlock>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Value shape — what do you put in Provider&apos;s <code className="px-1 bg-slate-100 rounded">value</code>?
        </h2>
        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
          This is a design choice, not a syntax choice. Pick the shape deliberately
          &mdash; it determines your context&apos;s public API. The custom hook pattern
          (<code className="px-1 bg-slate-100 rounded">useTheme()</code>) lets you
          evolve the shape without rewriting every call site.
        </p>
        <ValueShapeTable />
      </section>

      <ExampleBlock
        variant="ido"
        title="Demo — refactor a drilled `user` tree into Context"
        description="Starting state is the same linear drill from Lesson 1: user → Layout → Sidebar → UserProfile. Instructor live-refactors the drill into Context. Narrate what each file loses."
      >
        <IDoContext />
        <div className="rounded-md bg-sky-50 border border-sky-200 px-4 py-3 text-sm text-sky-900">
          <p className="font-semibold mb-1">Instructor activity (live-refactor):</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              In <code className="px-1 bg-white rounded border border-sky-200">ido/IDoContext.jsx</code>: export a <code className="px-1 bg-white rounded border border-sky-200">UserContext</code>, wrap <code className="px-1 bg-white rounded border border-sky-200">&lt;Layout&gt;</code> in <code className="px-1 bg-white rounded border border-sky-200">&lt;UserContext.Provider value={'{user}'}&gt;</code>, and drop the prop.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-sky-200">ido/Layout.jsx</code>: delete the <code className="px-1 bg-white rounded border border-sky-200">user</code> prop. Layout is lighter now.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-sky-200">ido/Sidebar.jsx</code>: delete the <code className="px-1 bg-white rounded border border-sky-200">user</code> prop. Sidebar is lighter too.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-sky-200">ido/UserProfile.jsx</code>: delete the prop, import <code className="px-1 bg-white rounded border border-sky-200">useContext</code> + <code className="px-1 bg-white rounded border border-sky-200">UserContext</code>, call <code className="px-1 bg-white rounded border border-sky-200">useContext(UserContext)</code>.
            </li>
            <li>
              <strong>Say out loud:</strong> &ldquo;Same 4 files touched &mdash; but Layout and Sidebar just stopped being tax collectors.&rdquo;
            </li>
          </ol>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Together — refactor a forked theme drill + extract a custom hook"
        description="Theme is drilled to THREE unrelated branches (Navbar, ThemedCard inside MainPanel, and FooterBar). Class refactors together, extracts a ThemeContext module with a useTheme() custom hook."
      >
        <WeDoContext />
        <div className="rounded-md bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-900">
          <p className="font-semibold mb-1">Class activity (do this together, 6 files in ./wedo):</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">wedo/ThemeContext.jsx</code>: fill in the stubbed <code className="px-1 bg-white rounded border border-amber-200">ThemeProvider</code> and <code className="px-1 bg-white rounded border border-amber-200">useTheme</code>. This is the reusable module.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">wedo/WeDoContext.jsx</code>: import <code className="px-1 bg-white rounded border border-amber-200">ThemeProvider</code>, wrap the tree, delete the local useState, stop passing props.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">wedo/Navbar.jsx</code>, <code className="px-1 bg-white rounded border border-amber-200">wedo/ThemedCard.jsx</code>, <code className="px-1 bg-white rounded border border-amber-200">wedo/FooterBar.jsx</code>: drop theme props, call <code className="px-1 bg-white rounded border border-amber-200">useTheme()</code>.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">wedo/MainPanel.jsx</code>: delete the theme prop entirely. It doesn&apos;t care about theme at all now.
            </li>
            <li>
              <strong>Discuss:</strong> what&apos;s the value of a custom hook over calling
              useContext directly? (Consumers don&apos;t even import the Context object. You
              can add logging, defaults, or throw-if-no-provider in ONE place.)
            </li>
          </ol>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Practice — build a LanguageContext from scratch (no drill to refactor)"
        description="No prop-drilled starting state. Students recognize that locale is shared state from day one, and build it as Context directly. Matches what they'll do in the mini-project."
      >
        <YouDoLanguage />
        <div className="rounded-md bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-900">
          <p className="font-semibold mb-1">Student tasks (5 files in ./youdo):</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <code className="px-1 bg-white rounded border border-emerald-200">youdo/LanguageContext.jsx</code>: build the real <code className="px-1 bg-white rounded border border-emerald-200">LanguageProvider</code> + <code className="px-1 bg-white rounded border border-emerald-200">useLanguage</code>. Replace the stubs.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-emerald-200">youdo/YouDoLanguage.jsx</code> already wraps the tree &mdash; once your provider actually provides, everything lights up.
            </li>
            <li>
              Confirm <code className="px-1 bg-white rounded border border-emerald-200">Greeting.jsx</code> and <code className="px-1 bg-white rounded border border-emerald-200">LocaleSwitcher.jsx</code> share state (without props between them).
            </li>
            <li>
              Notice <code className="px-1 bg-white rounded border border-emerald-200">Shell.jsx</code> sits between them but never sees <code className="px-1 bg-white rounded border border-emerald-200">locale</code>. That&apos;s the win.
            </li>
          </ol>
          <p className="font-semibold mt-3 mb-1">Design reflection:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Why does value need BOTH locale AND setLocale?</li>
            <li>If you only provided locale, what would break?</li>
            <li>What does <code className="px-1 bg-white rounded border border-emerald-200">useLanguage()</code> give you that <code className="px-1 bg-white rounded border border-emerald-200">useContext(LanguageContext)</code> doesn&apos;t?</li>
          </ul>
        </div>
      </ExampleBlock>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Composing contexts
        </h2>
        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
          You don&apos;t need ONE giant app-wide context with every piece of state.
          Split by concern. Components read only what they need. Nesting providers
          is fine &mdash; order doesn&apos;t usually matter.
        </p>
        <MultipleProvidersDemo />
      </section>

      <NotACureAll />

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Spot the bug gallery
        </h2>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Each card is a real, running bug. Inspect the symptom, click{' '}
          <em>Diagnose it</em> to reveal what went wrong, then <em>Show the fix</em>.
          Have students predict the problem before revealing.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Bug1MissingProvider />
          <Bug2WrongShape />
          <Bug3NotInState />
          <Bug4ForgotProvider />
          <div className="md:col-span-2">
            <Bug5Overuse />
          </div>
        </div>
      </section>

      <DemoSurface title="Wrap-up">
        <p className="text-sm text-slate-700 leading-relaxed">
          Context is the <em>sharing</em> tool. It replaces prop drilling when
          data is needed in many places. It is NOT a replacement for
          <code className="px-1 bg-slate-100 rounded">useState</code>, and it is
          NOT state management by itself &mdash; it just delivers whatever value
          the Provider hands it. Next we&apos;ll see how to organize complex
          state with <code className="px-1 bg-slate-100 rounded">useReducer</code>,
          and in Lesson 4 we&apos;ll combine the two.
        </p>
      </DemoSurface>
    </LessonShell>
  )
}
