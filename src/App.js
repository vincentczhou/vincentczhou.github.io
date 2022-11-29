import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'

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
    type: 'light',
    primary: {
      main: '#f50057',
    },
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Banner hash="#home" options={{ position: 'start' }} />
          <Resume hash="#resume" options={{ position: 'start' }} />
          <Skills hash="#skills" options={{ position: 'start' }} />
          <Projects hash="#projects" options={{ position: 'start' }} />
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
