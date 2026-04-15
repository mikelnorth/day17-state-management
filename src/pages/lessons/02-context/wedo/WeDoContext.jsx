import { useState } from 'react'
import DemoSurface from '../../../../components/ui/DemoSurface.jsx'
import Navbar from './Navbar.jsx'
import MainPanel from './MainPanel.jsx'
import FooterBar from './FooterBar.jsx'

/*
 * WE DO — refactor a forked drill into Context + a custom hook.
 *
 * STARTING STATE: theme is drilled to THREE unrelated branches:
 *   - Navbar (top)
 *   - MainPanel → ThemedCard (middle)
 *   - FooterBar (bottom)
 *
 * Class activity (do this together):
 *
 *   1. Open ThemeContext.jsx and fill in the TODO:
 *        - createContext()
 *        - ThemeProvider component with theme state + toggle
 *        - useTheme() custom hook
 *
 *   2. In this file:
 *        - Import ThemeProvider from './ThemeContext.jsx'
 *        - Wrap the returned tree in <ThemeProvider>.
 *        - Delete the theme/setTheme useState here — it moves into the provider.
 *        - Render <Navbar />, <MainPanel />, <FooterBar /> with NO theme props.
 *
 *   3. In Navbar.jsx, ThemedCard.jsx, FooterBar.jsx:
 *        - Drop the theme/toggle props.
 *        - Call useTheme() inside the component.
 *
 *   4. In MainPanel.jsx:
 *        - Drop the theme prop entirely. MainPanel has nothing to do with theme now.
 *
 * Talking points while you refactor:
 *   - Three unrelated branches, one provider, zero pass-through.
 *   - The custom hook (useTheme) is the "public API". Consumers don't know
 *     ThemeContext even exists — they just call useTheme().
 *   - Tomorrow if you add a fourth consumer in a new branch, you edit ONE
 *     file. With props, you'd edit every ancestor on the path.
 */
export default function WeDoContext() {
  // Starting state uses useState locally. After the refactor, this moves
  // INTO ThemeProvider and disappears from here.
  const [theme, setTheme] = useState('light')
  const toggle = () =>
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <DemoSurface title="Theme drilled to 3 unrelated branches. Refactor to ThemeContext + useTheme().">
      <div className="space-y-3">
        <Navbar theme={theme} toggle={toggle} />
        <MainPanel theme={theme} />
        <FooterBar theme={theme} toggle={toggle} />
      </div>
    </DemoSurface>
  )
}
