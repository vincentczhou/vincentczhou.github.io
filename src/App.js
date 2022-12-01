import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useEffect, useRef, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const theme = createTheme({
  typography: {
    fontFamily: 'Comfortaa',
    src: './assets/font/Comfortaa-VariableFont_wght.ttf',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#84b6ff',
    },
    secondary: {
      main: '#c5a088',
    },
    background: {
      default: '#FBF7F5',
    },
  },
})

function App() {
  const homeRef = useRef()
  const resumeRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()

  const [resumeLoaded, setResumeLoaded] = useState(false)

  useEffect(() => {
    console.log('before', resumeLoaded)
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
      console.log('after', resumeLoaded)
      Refs[scrollRef].current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [resumeLoaded])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Banner ref={homeRef} />
          <Resume ref={resumeRef} resumeLoad={setResumeLoaded} />
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <Footer />
        </BrowserRouter>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </ThemeProvider>
    </div>
  )
}

export default App
