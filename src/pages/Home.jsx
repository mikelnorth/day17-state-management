import { Link } from 'react-router-dom'
import ConceptCallout from '../components/ui/ConceptCallout.jsx'

const objectives = [
  'Explain the difference between local and shared state, and recognize prop drilling as a symptom of state in the wrong place.',
  'Use the Context API to share state without threading props through every level of the tree.',
  'Choose between useState and useReducer based on how complex state updates actually are.',
  'Combine Context + useReducer into a clean, reusable state architecture with a custom hook.',
  'Refactor a prop-drilled example into a Context-based solution and explain the tradeoffs.',
  'Avoid overusing global state by keeping UI-only state local.',
]

const lessonCards = [
  {
    to: '/prop-drilling',
    title: '1. Prop Drilling',
    tag: 'The problem',
    desc: 'Feel the pain first. See why passing the same prop through 4 layers gets old fast.',
  },
  {
    to: '/context',
    title: '2. Context API',
    tag: 'Sharing state',
    desc: 'Create a Provider, read from a Consumer, and make data available anywhere in the tree.',
  },
  {
    to: '/use-reducer',
    title: '3. useReducer',
    tag: 'Managing complex updates',
    desc: 'Replace scattered setState calls with a clear, action-driven state machine.',
  },
  {
    to: '/context-reducer',
    title: '4. Context + useReducer',
    tag: 'The architecture',
    desc: 'Combine both into a single Provider with a custom hook. The go-to pattern for medium apps.',
  },
  {
    to: '/choose-pattern',
    title: '5. Choose the Pattern',
    tag: 'Judgment',
    desc: 'Practice scenarios. Given a situation, decide: useState, Context, useReducer, or combo?',
  },
]

const decisionRows = [
  {
    pattern: 'useState',
    when: 'Simple, local, one or two setters',
    examples: 'Input text, modal open/closed, selected tab',
  },
  {
    pattern: 'Lift state up',
    when: 'A few nearby components need the same data',
    examples: 'Form inputs + submit button',
  },
  {
    pattern: 'Context',
    when: 'Many components across the tree need the same data',
    examples: 'Theme, auth, locale, current user',
  },
  {
    pattern: 'useReducer',
    when: 'Complex updates, multiple action types, related transitions',
    examples: 'Cart, task list, multi-step form',
  },
  {
    pattern: 'Context + useReducer',
    when: 'Shared state AND complex updates',
    examples: 'App-wide cart, favorites, notifications',
  },
]

export default function Home() {
  return (
    <article className="space-y-10">
      <header className="border-b border-slate-200 pb-6">
        <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold">
          Instructor guide
        </p>
        <h1 className="text-4xl font-bold text-slate-900 mt-1">
          Day 17 &mdash; State Management Patterns
        </h1>
        <p className="text-slate-600 mt-3 text-base leading-relaxed max-w-3xl">
          This app walks students through <strong>prop drilling</strong>, the{' '}
          <strong>Context API</strong>, <strong>useReducer</strong>, and how they
          combine. Every concept has an <strong>I do / We do / You do</strong> example
          so you can demo, practice together, and then hand off independent practice.
        </p>
      </header>

      <ConceptCallout title="Not all state belongs in one component.">
        <p>
          The big question today isn&apos;t &quot;how do I write state?&quot; &mdash;
          students already know <code className="px-1 bg-slate-200 rounded">useState</code>.
          Today is about <em>where</em> state should live and <em>how</em> it should be
          shared.
        </p>
        <p className="text-slate-600">
          Before reaching for Context or useReducer, ask: can this stay local? Can this
          be solved by lifting state? Do many components really need access?
        </p>
      </ConceptCallout>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Learning objectives</h2>
        <ul className="space-y-2">
          {objectives.map((o, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 leading-relaxed"
            >
              <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Lesson flow</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {lessonCards.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group rounded-xl border border-slate-200 bg-white px-5 py-4 hover:border-indigo-400 hover:shadow transition"
            >
              <p className="text-[11px] uppercase tracking-widest text-indigo-600 font-semibold">
                {l.tag}
              </p>
              <p className="text-lg font-semibold text-slate-900 mt-0.5 group-hover:text-indigo-700">
                {l.title}
              </p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{l.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Decision framework: which pattern?
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Pattern</th>
                <th className="px-4 py-3 font-semibold">When to reach for it</th>
                <th className="px-4 py-3 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {decisionRows.map((row) => (
                <tr key={row.pattern}>
                  <td className="px-4 py-3 font-mono text-indigo-700 font-semibold align-top">
                    {row.pattern}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top">{row.when}</td>
                  <td className="px-4 py-3 text-slate-600 align-top">{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Common mistakes to watch for
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            'Using Context for everything (even local UI state)',
            'Confusing Context with state management by itself',
            'Writing reducer logic that mutates state instead of returning new state',
            'Overcomplicating tiny examples that a single useState would handle',
            'Forgetting that prop drilling is not always bad — two levels is fine',
            'Putting volatile state (inputs, hover) in app-wide context',
          ].map((m) => (
            <li
              key={m}
              className="rounded-md border border-rose-200 bg-rose-50/60 px-3 py-2 text-sm text-rose-900"
            >
              {m}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
