import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { HashLink } from 'react-router-hash-link'

// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'

import AppBar from '@mui/material/AppBar'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import {
  DarkModeRounded as DarkModeRoundedIcon,
  DocumentScannerRounded as DocumentScannerRoundedIcon,
  HomeRounded as HomeRoundedIcon,
  IntegrationInstructionsRounded as IntegrationInstructionsRoundedIcon,
  LightModeRounded as LightModeRoundedIcon,
  MenuOpenRounded as MenuOpenRoundedIcon,
  MenuRounded as MenuRoundedIcon,
  SubtitlesRounded as SubtitlesRoundedIcon,
} from '@mui/icons-material'
import { styled, useTheme } from '@mui/material/styles'

import SocialIcon from './social-icons'
import { ReactComponent as Logo } from '../assets/img/logo.svg'
import siteMetadata from '../data/siteMetadata'

// const StyledNavbar = styled(Navbar, { shouldForwardProp: (prop) => prop !== 'shownav' })`
//   padding: 21px;
//   top: 0px;
//   width: 100%;
//   transition: all 0.3s ease-in-out;
//   ${(props) => (!props.shownav ? 'opacity: 0%; visibility: collapse;' : '')}

//   & .navbar-toggler {
//   }
// `
const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'shownav' })`
  position: fixed;
  padding: 21px;
  color: inherit;
  top: 15px;
  border-radius: 60px;
  margin-right: 5%;
  width: 90%;
  transition: all 0.3s ease-in-out;
  ${(props) => (!props.shownav ? 'opacity: 0%; visibility: collapse;' : '')}

  & .navbar-toggler {
  }
`
const StyledLogo = styled(Logo)`
  width: 90px;
  justify-content: center;
  align-items: center;
  &:hover {
    fill: #00c8f0;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const StyledHashLink = styled(HashLink, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'transitioncolor',
})`
  text-decoration: none;
  color: inherit;

  display: block;
  padding: 9px 18px;

  ${(props) => (props.active ? `color: ${props.transitioncolor};` : '')}
  &:hover {
    color: ${(props) => `${props.transitioncolor}`};
    transition: all 0.3s ease-in-out;
  }

  // &:focus,
  // &:visited,
  // &:link,
  // &:active {
  //   text-decoration: none;
  //   color: inherit;
  // }
`
const actions = [
  { icon: <HomeRoundedIcon />, name: 'Home' },
  { icon: <DocumentScannerRoundedIcon />, name: 'Resume' },
  { icon: <IntegrationInstructionsRoundedIcon />, name: 'Skills' },
  { icon: <SubtitlesRoundedIcon />, name: 'Projects' },
]

const NavBar = ({ themeToggle }) => {
  const theme = useTheme()

  const [activeLink, setActiveLink] = useState('')
  const updateActiveLink = (value) => setActiveLink(value)

  const [showNav, setShowNav] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const [drawerState, setDrawerState] = useState(false)
  const handleDrawerOpen = () => setDrawerState(true)
  const handleDrawerClose = () => setDrawerState(false)
  const handleDrawerToggle = () => setDrawerState(!drawerState)

  const [speedDialState, setSpeedDialState] = useState(false)
  // const handleSpeedDialOpen = () => setSpeedDialState(true)
  const handleSpeedDialClose = () => setSpeedDialState(false)
  const handleSpeedDialToggle = () => setSpeedDialState(!speedDialState)

  const speedDialRef = useRef()
  useClickAway(speedDialRef, handleSpeedDialClose, ['mouseup'])

  return (
    <Container>
      {/* <StyledNavbar shownav={showNav} bg="light" expand="md" fixed="top">
        <Navbar.Brand className="position-absolute top-50 start-50 translate-middle" href="#home">
          <StyledLogo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => console.log('i just got clicked')}
        >
          <IconButton size="large" edge="start">
            <DocumentScannerRoundedIcon />
          </IconButton>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Button variant="outlined" size="medium">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="30" />
            </Button>
            <Button onClick={() => themeToggle()}>mode</Button>
            <SocialIcon kind="github" href={siteMetadata.github} size="30" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="30" />
            <SocialIcon kind="ctftime" href={siteMetadata.ctftime} size="30" />
            <SocialIcon kind="homepage" href={siteMetadata.homepage} size="30" />
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar> */}
      <StyledAppBar shownav={showNav}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', alignItems: 'center' }} disableGutters>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flex: '1' }}>
              <IconButton size="large" edge="start" onClick={handleDrawerToggle}>
                {drawerState ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: '1' }}>
              {actions.map((action) => (
                <StyledHashLink
                  key={action.name}
                  to={`#${action.name.toLowerCase()}`}
                  active={activeLink === action.name ? true : false}
                  transitioncolor={theme.palette.secondary.main}
                  onClick={() => updateActiveLink(`${action.name}`)}
                >
                  <Typography variant="overline" display="block">
                    {action.name}
                  </Typography>
                </StyledHashLink>
              ))}
            </Box>
            <Box sx={{ fill: theme.palette.text.primary, flex: '1' }}>
              <StyledLogo />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                flex: '1',
              }}
            >
              <SocialIcon
                kind="mail"
                href={`mailto:${siteMetadata.email}`}
                size="30"
                color={theme.palette.text.primary}
              />
              <SocialIcon
                kind="github"
                href={siteMetadata.github}
                size="30"
                color={theme.palette.text.primary}
              />
              <SocialIcon
                kind="linkedin"
                href={siteMetadata.linkedin}
                size="30"
                color={theme.palette.text.primary}
              />
              {/* <SocialIcon kind="ctftime" href={siteMetadata.ctftime} size="30" /> */}
              {/* <SocialIcon kind="homepage" href={siteMetadata.homepage} size="30" /> */}
              <IconButton onClick={() => themeToggle()} color="inherit">
                {theme.palette.mode === 'dark' ? (
                  <DarkModeRoundedIcon sx={{ width: `30px`, height: `30px` }} />
                ) : (
                  <LightModeRoundedIcon sx={{ width: `30px`, height: `30px` }} />
                )}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flex: '1' }} />
          </Toolbar>
        </Container>
      </StyledAppBar>
      {/* saASasdasd */}
      <SwipeableDrawer onOpen={handleDrawerOpen} onClose={handleDrawerClose} open={drawerState}>
        <Box onClick={handleDrawerClose} sx={{ textAlign: 'center' }}>
          <List>
            {actions.map((action) => (
              <ListItem key={action.name} disablePadding>
                <StyledHashLink
                  to={`#${action.name.toLowerCase()}`}
                  active={activeLink === action.name ? true : false}
                  transitioncolor={theme.palette.secondary.main}
                  onClick={() => updateActiveLink(`${action.name}`)}
                >
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemIcon>{action.icon}</ListItemIcon>
                    <ListItemText primary={action.name} />
                  </ListItemButton>
                </StyledHashLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
      {/* aaaaaaaaaa */}

      <Backdrop open={speedDialState} />
      <SpeedDial
        ariaLabel="SpeedDial"
        hidden={showNav ? true : false}
        sx={{ position: 'fixed', bottom: 30, right: 30 }}
        icon={<SpeedDialIcon icon={<MenuRoundedIcon />} openIcon={<MenuOpenRoundedIcon />} />}
        direction="up"
        // onClose={handleSpeedDialClose}
        // onOpen={handleSpeedDialOpen}
        onClick={handleSpeedDialToggle}
        open={speedDialState}
        ref={speedDialRef}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={
              <StyledHashLink
                to={`#${action.name.toLowerCase()}`}
                active={activeLink === action.name ? true : false}
                transitioncolor={theme.palette.secondary.main}
                onClick={() => updateActiveLink(`${action.name}`)}
              >
                {action.icon}
              </StyledHashLink>
            }
            tooltipTitle={action.name}
            tooltipOpen
            tooltipPlacement="left"
            onClick={handleSpeedDialClose}
          />
        ))}
      </SpeedDial>
    </Container>
  )
}

export default NavBar
