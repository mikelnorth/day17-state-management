import DemoSurface from '../../../../components/ui/DemoSurface.jsx'
import Layout from './Layout.jsx'

/*
 * I DO — file 1 of 4 (the top, where state will live).
 *
 * Instructor's live-coding task (narrate every file you touch):
 *
 *   1. Add `user` state in this file with useState.
 *   2. Pass it as a prop to <Layout />.
 *   3. Open Layout.jsx — accept `user`, forward it to <Sidebar />.
 *   4. Open Sidebar.jsx — accept `user`, forward it to <UserProfile />.
 *   5. Open UserProfile.jsx — accept `user` and display it.
 *
 * Count out loud: 4 files touched to put ONE piece of data in ONE place.
 * That is the tax of prop drilling.
 *
 * OPTIONAL second pass, after students see it once: add a "Swap user"
 * button with a setUser setter, to show that even changes flow through
 * all 4 files in the same way.
 */

export default function IDoPropDrill() {
  // TODO: const [user, setUser] = useState({ name: 'Ada Lovelace', role: 'Admin' })

  return (
    <DemoSurface title="4 files live in ./ido. Thread `user` from App all the way to UserProfile.">
      <div className="mb-3 text-xs text-slate-500">
        Starting state: UserProfile shows &ldquo;Guest&rdquo; because no data is
        being passed. Live-code the drill file by file.
      </div>
      {/* TODO: pass user to Layout, e.g. <Layout user={user} /> */}
      <Layout />
    </DemoSurface>
  )
}
