import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import IDoPropDrill from './ido/IDoPropDrill.jsx'
import WeDoPropDrill from './wedo/WeDoPropDrill.jsx'
import YouDoPropDrill from './youdo/YouDoPropDrill.jsx'

export default function PropDrilling() {
  return (
    <LessonShell
      number="1"
      title="Prop Drilling: the problem that motivates everything else"
      subtitle="Prop drilling is passing a prop through components that don't actually use it — just to get it to a deeper component that does."
    >
      <ConceptCallout title="Build the drill, then feel the cost.">
        <p>
          Every demo below is <strong>intentionally broken</strong>. The components
          exist in separate files, but no state is created and no props are wired.
          Each activity is to <em>build the drill yourself</em>: create state at the
          top, pass it down through every layer, and display it at the bottom.
        </p>
        <p className="text-slate-600">
          Pay attention to the <strong>number of files you edit</strong> for a
          single piece of data. That number is the tax of prop drilling.
        </p>
      </ConceptCallout>

      <ExampleBlock
        variant="ido"
        title="Demo — drill a `user` from App to UserProfile (4 files)"
        description="Instructor live-codes the entire drill. Each component lives in its own file under ./ido. Narrate every file switch so students feel the cost."
      >
        <IDoPropDrill />
        <div className="rounded-md bg-sky-50 border border-sky-200 px-4 py-3 text-sm text-sky-900">
          <p className="font-semibold mb-1">Instructor activity (live-code all 4 files):</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <code className="px-1 bg-white rounded border border-sky-200">ido/IDoPropDrill.jsx</code> —
              add <code className="px-1 bg-white rounded border border-sky-200">useState</code> for <code className="px-1 bg-white rounded border border-sky-200">user</code>, pass it to <code className="px-1 bg-white rounded border border-sky-200">&lt;Layout&gt;</code>.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-sky-200">ido/Layout.jsx</code> —
              accept <code className="px-1 bg-white rounded border border-sky-200">user</code>, forward to <code className="px-1 bg-white rounded border border-sky-200">&lt;Sidebar&gt;</code>.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-sky-200">ido/Sidebar.jsx</code> —
              accept <code className="px-1 bg-white rounded border border-sky-200">user</code>, forward to <code className="px-1 bg-white rounded border border-sky-200">&lt;UserProfile&gt;</code>.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-sky-200">ido/UserProfile.jsx</code> —
              accept <code className="px-1 bg-white rounded border border-sky-200">user</code>, display <code className="px-1 bg-white rounded border border-sky-200">user.name</code> and <code className="px-1 bg-white rounded border border-sky-200">user.role</code>.
            </li>
            <li>
              <strong>Count aloud:</strong> 4 files touched for 1 piece of data.
            </li>
            <li>
              <strong>Bonus pass:</strong> add a &quot;Swap user&quot; button &mdash; shows
              that changes also flow down through every file.
            </li>
          </ol>
        </div>
        <CodeBlock label="End-state of the tree">{`<IDoPropDrill user={user}>      {/* ido/IDoPropDrill.jsx */}
  <Layout user={user}>           {/* ido/Layout.jsx       */}
    <Sidebar user={user}>        {/* ido/Sidebar.jsx      */}
      <UserProfile user={user}/> {/* ido/UserProfile.jsx  */}
    </Sidebar>
  </Layout>
</IDoPropDrill>`}</CodeBlock>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Together — drill a `cartCount` to TWO deep consumers (5 files)"
        description="Class co-authors this one. Take student suggestions for each step. Each file lives under ./wedo. Notice that Page has to fork the prop to two children."
      >
        <WeDoPropDrill />
        <div className="rounded-md bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-900">
          <p className="font-semibold mb-1">Class activity (do this together):</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">wedo/WeDoPropDrill.jsx</code> —
              add <code className="px-1 bg-white rounded border border-amber-200">cartCount</code> state. Wire the
              &quot;Add to cart&quot; and &quot;Clear&quot; buttons to update it. Pass it to <code className="px-1 bg-white rounded border border-amber-200">&lt;Page&gt;</code>.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">wedo/Page.jsx</code> —
              accept it, forward to <code className="px-1 bg-white rounded border border-amber-200">&lt;Header&gt;</code>
              AND <code className="px-1 bg-white rounded border border-amber-200">&lt;CartPreview&gt;</code>.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">wedo/Header.jsx</code> &rarr;
              <code className="px-1 bg-white rounded border border-amber-200">wedo/CartBadge.jsx</code> —
              keep forwarding until the badge displays it.
            </li>
            <li>
              <code className="px-1 bg-white rounded border border-amber-200">wedo/CartPreview.jsx</code> —
              display the count in the sentence.
            </li>
            <li>
              <strong>Discuss:</strong> how does Page feel about having to hand the
              same prop to two different children? What if a third consumer appeared?
            </li>
          </ol>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Practice — drill an `accentColor` through 4 middle layers (5 files)"
        description="Students work this one alone. A color picker at the top, and Labels at the bottom that must change color. Every component in between has to learn about a prop it never uses."
      >
        <YouDoPropDrill />
        <div className="rounded-md bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-900">
          <p className="font-semibold mb-1">Student tasks (all 5 files under ./youdo):</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <code className="px-1 bg-white rounded border border-emerald-200">youdo/YouDoPropDrill.jsx</code> —
              add <code className="px-1 bg-white rounded border border-emerald-200">accentColor</code> state
              and wire the color picker buttons to update it.
            </li>
            <li>
              Pass <code className="px-1 bg-white rounded border border-emerald-200">accentColor</code> to <code className="px-1 bg-white rounded border border-emerald-200">&lt;Shell&gt;</code>.
            </li>
            <li>
              Thread it through <code className="px-1 bg-white rounded border border-emerald-200">Shell</code>
              &rarr; <code className="px-1 bg-white rounded border border-emerald-200">Panel</code>
              &rarr; <code className="px-1 bg-white rounded border border-emerald-200">Card</code>
              &rarr; <code className="px-1 bg-white rounded border border-emerald-200">Label</code>.
            </li>
            <li>
              In <code className="px-1 bg-white rounded border border-emerald-200">Label.jsx</code>, use
              the prop as the background color via an inline <code className="px-1 bg-white rounded border border-emerald-200">style</code>.
            </li>
            <li>
              <strong>Success check:</strong> clicking a swatch re-colors every label instantly.
            </li>
          </ol>
          <p className="font-semibold mt-3 mb-1">Then reflect:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>How many files did you edit for ONE feature?</li>
            <li>How many of those components actually used the color?</li>
            <li>If a sixth consumer showed up in a different branch, what would you have to change?</li>
          </ul>
        </div>
      </ExampleBlock>

      <DemoSurface title="Wrap-up">
        <p className="text-sm text-slate-700 leading-relaxed">
          You just edited <strong>4, then 5, then 5 files</strong> to deliver one
          piece of data. Most of those components never used the data &mdash; they
          just paid the tax. The fix isn&apos;t &ldquo;move state down&rdquo;
          (the consumer is still deep). The fix is a way for deep components to
          read from a shared source <em>without</em> the middle caring. That&apos;s
          Context. Next lesson.
        </p>
      </DemoSurface>
    </LessonShell>
  )
}
