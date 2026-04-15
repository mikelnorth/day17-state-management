import { useState } from 'react'
import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'

const scenarios = [
  {
    id: 's1',
    prompt:
      'A search input on a single page. Only this page reads or writes the search text.',
    answer: 'useState',
    why: 'Local to one component, one setter, simple. No sharing needed.',
  },
  {
    id: 's2',
    prompt:
      'A light/dark theme used across the entire app — navbar, buttons, cards, modals all need it.',
    answer: 'Context',
    why:
      'Simple value (a string), but many unrelated components need it. Prop drilling would be painful.',
  },
  {
    id: 's3',
    prompt:
      'Modal open/closed flag, used only by the component that owns the modal.',
    answer: 'useState',
    why:
      'Very local, boolean flag, one setter. Keep it next to the component that cares.',
  },
  {
    id: 's4',
    prompt:
      "A shopping cart with add, remove, and quantity updates — used by a product grid, the navbar's cart badge, and a cart drawer.",
    answer: 'Context + useReducer',
    why:
      'Many components need the data (Context) AND updates have multiple action types (useReducer). The combo pattern.',
  },
  {
    id: 's5',
    prompt:
      'A task app with input, list, and stats components — all need to read and update the same tasks array.',
    answer: 'Context + useReducer',
    why:
      'Shared state across siblings + multiple update paths (add / toggle / delete).',
  },
  {
    id: 's6',
    prompt:
      'A 10-field registration form with related update rules. Only the form component uses it.',
    answer: 'useReducer',
    why:
      'Local to one component (no sharing), but many fields and related transitions. A reducer with update_field + reset beats 10 setters.',
  },
  {
    id: 's7',
    prompt: 'Hover state on a single button to show a tooltip preview.',
    answer: 'useState',
    why:
      "Volatile, local, boolean. Don't put this in Context — it would cause unrelated re-renders.",
  },
  {
    id: 's8',
    prompt:
      'The current logged-in user, used by the navbar, profile page, settings, and 20 other places.',
    answer: 'Context',
    why:
      'Shared, mostly read, simple shape. Context is ideal; a reducer is only needed when auth updates get complex.',
  },
]

const patternStyles = {
  useState: 'bg-sky-100 text-sky-800 border-sky-300',
  Context: 'bg-purple-100 text-purple-800 border-purple-300',
  useReducer: 'bg-amber-100 text-amber-800 border-amber-300',
  'Context + useReducer': 'bg-emerald-100 text-emerald-800 border-emerald-300',
}

function ScenarioCard({ scenario }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
        <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
          Scenario
        </p>
        <p className="text-sm text-slate-800 mt-1 leading-relaxed">
          {scenario.prompt}
        </p>
      </div>
      <div className="p-4 space-y-3">
        {revealed ? (
          <>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                Recommended
              </span>
              <span
                className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold font-mono ${patternStyles[scenario.answer]}`}
              >
                {scenario.answer}
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{scenario.why}</p>
            <button
              onClick={() => setRevealed(false)}
              className="text-xs text-slate-500 hover:text-slate-800"
            >
              Hide answer
            </button>
          </>
        ) : (
          <button
            onClick={() => setRevealed(true)}
            className="text-xs rounded bg-indigo-600 text-white px-3 py-1.5 hover:bg-indigo-700"
          >
            Reveal pattern
          </button>
        )}
      </div>
    </div>
  )
}

export default function ChoosePattern() {
  const [nonce, setNonce] = useState(0) // bump to reset all cards to hidden

  return (
    <LessonShell
      number="5"
      title="Choose the right pattern"
      subtitle="Good React developers aren't defined by how fancy their state is — they're defined by how well it matches the problem. This is a judgment exercise."
    >
      <ConceptCallout title="Start with the simplest thing that works.">
        <p>
          <strong>useState</strong> → <strong>Lift state</strong> →{' '}
          <strong>Context</strong> → <strong>Context + useReducer</strong>.
        </p>
        <p className="text-slate-600">
          Escalate only when the simpler tool stops fitting. Going straight to
          Context for everything causes unnecessary re-renders and harder debugging.
        </p>
      </ConceptCallout>

      <ExampleBlock
        variant="ido"
        title="Demo — walk through 2 scenarios"
        description="Pick one easy scenario and one tricky one. Model your reasoning out loud: Who owns it? Who needs it? How many ways can it change?"
      >
        <div className="space-y-3">
          <ScenarioCard key={`ido-${nonce}-0`} scenario={scenarios[0]} />
          <ScenarioCard key={`ido-${nonce}-3`} scenario={scenarios[3]} />
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Together — reason through 3 scenarios"
        description="Read each scenario out loud. Ask the class: which pattern and why? Reveal the answer only after discussion."
      >
        <div className="space-y-3">
          <ScenarioCard key={`wedo-${nonce}-2`} scenario={scenarios[2]} />
          <ScenarioCard key={`wedo-${nonce}-5`} scenario={scenarios[5]} />
          <ScenarioCard key={`wedo-${nonce}-6`} scenario={scenarios[6]} />
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Practice — your call on the rest"
        description="Students attempt these on their own first. Commit to an answer before revealing."
      >
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={() => setNonce((n) => n + 1)}
            className="text-xs rounded border border-slate-300 bg-white text-slate-700 px-3 py-1.5 hover:bg-slate-100"
          >
            Reset all answers
          </button>
          <span className="text-xs text-slate-500">
            Tap each card to reveal the recommendation.
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[scenarios[1], scenarios[4], scenarios[7]].map((s) => (
            <ScenarioCard key={`youdo-${nonce}-${s.id}`} scenario={s} />
          ))}
        </div>
      </ExampleBlock>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          The decision flow
        </h2>
        <ol className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            <strong>1. Can it stay local?</strong> →{' '}
            <code className="px-1 bg-slate-100 rounded">useState</code>
          </li>
          <li>
            <strong>2. Do a couple of siblings need it?</strong> → Lift state to the
            closest common parent.
          </li>
          <li>
            <strong>3. Do many distant components need it?</strong> →{' '}
            <code className="px-1 bg-slate-100 rounded">Context</code>
          </li>
          <li>
            <strong>4. Does the state update in many ways?</strong> →{' '}
            <code className="px-1 bg-slate-100 rounded">useReducer</code>
          </li>
          <li>
            <strong>5. Both shared AND complex?</strong> →{' '}
            <code className="px-1 bg-slate-100 rounded">Context + useReducer</code>
          </li>
        </ol>
      </section>
    </LessonShell>
  )
}
