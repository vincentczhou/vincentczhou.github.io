import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import useMediaQuery from '@mui/material/useMediaQuery'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { amber, blueGrey, purple } from '@mui/material/colors'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')
  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light')

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'Comfortaa',
          src: './assets/font/Comfortaa-VariableFont_wght.ttf',
        },
        palette: {
          mode: `${mode}`,
          primary: {
            // main: '#84b6ff',
            ...blueGrey,
            ...(mode === 'dark' && {
              main: amber[300],
            }),
          },
          secondary: {
            main: '#c5a088',
          },
          background: {
            default: '#FBF7F5',
            ...(mode === 'dark' && {
              default: '#918d8b',
            }),
          },
        },
      }),
    [mode]
  )

  const homeRef = useRef()
  const resumeRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()

  const [resumeLoaded, setResumeLoaded] = useState(false)

  useEffect(() => {
    const Refs = {
      home: homeRef,
      resume: resumeRef,
      skills: skillsRef,
      projects: projectsRef,
    }
    const scrollRef = window.location.hash
      ? window.location.hash.toLowerCase().replace(/\W/g, '')
      : window.location.pathname.toLowerCase().replace(/\W/g, '')
    console.log(scrollRef)
    if (resumeLoaded && Refs[scrollRef]) {
      Refs[scrollRef].current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [resumeLoaded])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar themeToggle={toggleMode} />
          <Banner ref={homeRef} />
          <Resume ref={resumeRef} resumeLoad={setResumeLoaded} />
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
