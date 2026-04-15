import DemoSurface from '../../../../components/ui/DemoSurface.jsx'
import Shell from './Shell.jsx'

/*
 * YOU DO — file 1 of 5 (the top, where state will live).
 *
 * Starting state: the color picker below doesn't do anything. The Labels
 * deep inside Shell > Panel > Card are hardcoded slate gray.
 *
 * Your tasks (do them in this order):
 *
 *   1. In this file: add `accentColor` state (useState, start with '#4f46e5').
 *   2. Make the color picker buttons actually set accentColor when clicked.
 *   3. Pass accentColor as a prop to <Shell />.
 *   4. Open Shell.jsx — accept the prop, forward it to <Panel />.
 *   5. Open Panel.jsx — accept the prop, forward it to <Card />.
 *   6. Open Card.jsx — accept the prop, forward it to BOTH <Label /> calls.
 *   7. Open Label.jsx — accept the prop and use it as the background color.
 *
 * When you're done: clicking a color swatch should re-color every Label.
 *
 * Then REFLECT:
 *   - How many files did you edit for one feature?
 *   - How many of those components actually cared about the color?
 *   - If a SIXTH consumer appeared somewhere in the tree, what would change?
 */

const colors = [
  { value: '#4f46e5', label: 'Indigo' },
  { value: '#059669', label: 'Emerald' },
  { value: '#dc2626', label: 'Rose' },
  { value: '#d97706', label: 'Amber' },
]

export default function YouDoPropDrill() {
  // TODO 1: const [accentColor, setAccentColor] = useState('#4f46e5')

  return (
    <DemoSurface title="5 files live in ./youdo. Build the drill yourself, then reflect on the cost.">
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="text-xs text-slate-600">Accent:</span>
        {colors.map((c) => (
          <button
            key={c.value}
            // TODO 2: wire this up — onClick={() => setAccentColor(c.value)}
            // Also: highlight the currently-selected swatch by comparing to accentColor
            className="text-xs rounded px-2.5 py-1 border bg-white"
            style={{ color: c.value, borderColor: c.value }}
          >
            {c.label}
          </button>
        ))}
      </div>
      {/* TODO 3: pass accentColor to Shell */}
      <Shell />
    </DemoSurface>
  )
}
