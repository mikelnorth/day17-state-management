import { useState } from 'react'
import DemoSurface from '../../../../components/ui/DemoSurface.jsx'
import Layout from './Layout.jsx'

/*
 * I DO — refactor a working prop-drilled tree into Context, live.
 *
 * STARTING STATE: `user` is drilled through Layout → Sidebar → UserProfile.
 * (It works. This is the "before.")
 *
 * Live-refactor plan (narrate each file as you touch it):
 *
 *   1. Right here, at the top of this file:
 *        import { createContext } from 'react'
 *        export const UserContext = createContext()
 *      (Exporting lets consumers import the same context instance.)
 *
 *   2. Wrap the tree in the provider:
 *        <UserContext.Provider value={user}>
 *          <Layout />      {/* no more user={user}! */
/*        </UserContext.Provider>
 *
 *   3. Open Layout.jsx — delete the `user` param and delete `user={user}` from <Sidebar />.
 *
 *   4. Open Sidebar.jsx — delete the `user` param and delete `user={user}` from <UserProfile />.
 *
 *   5. Open UserProfile.jsx — delete the `user` param. Replace it with:
 *        import { useContext } from 'react'
 *        import { UserContext } from './IDoContext.jsx'
 *        const user = useContext(UserContext)
 *
 * Count aloud: SAME 4 files touched — but Layout and Sidebar just got simpler.
 * The pass-through tax is gone.
 */
export default function IDoContext() {
  const [user, setUser] = useState({ name: 'Ada Lovelace', role: 'Admin' })

  return (
    <DemoSurface title="Before: props drilled 3 layers. After: Layout + Sidebar stop carrying the prop.">
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() =>
            setUser({ name: 'Grace Hopper', role: 'Compiler Architect' })
          }
          className="text-xs rounded bg-sky-600 text-white px-3 py-1.5 hover:bg-sky-700"
        >
          Swap user
        </button>
        <p className="text-xs text-slate-500">
          Starting state: prop-drilled. Refactor to Context live.
        </p>
      </div>
      <Layout user={user} />
    </DemoSurface>
  )
}
