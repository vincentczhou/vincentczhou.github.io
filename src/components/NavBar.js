import React, { useState, useEffect, useRef } from 'react'

import { useClickAway } from 'react-use'

import { HashLink } from 'react-router-hash-link'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Backdrop from '@mui/material/Backdrop'
import Button from '@mui/material/Button'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import {
  MenuRounded as MenuRoundedIcon,
  MenuOpenRounded as MenuOpenRoundedIcon,
  HomeRounded as HomeRoundedIcon,
  DocumentScannerRounded as DocumentScannerRoundedIcon,
  IntegrationInstructionsRounded as IntegrationInstructionsRoundedIcon,
  SubtitlesRounded as SubtitlesRoundedIcon,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'

import SocialIcon from './social-icons'
import { ReactComponent as Logo } from '../assets/img/logo.svg'
import siteMetadata from '../data/siteMetadata'

const HidingNavbar = styled(Navbar, { shouldForwardProp: (prop) => prop !== 'shownav' })`
  padding: 21px;
  top: 0px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  ${(props) => (!props.shownav ? 'opacity: 0%; visibility: collapse;' : '')}

  & .navbar-toggler {
  }
`
const StyledLogo = styled(Logo)`
  width: 90px;
  &:hover {
    fill: #00c8f0;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`
const actions = [
  { icon: <HomeRoundedIcon />, name: 'Home' },
  { icon: <DocumentScannerRoundedIcon />, name: 'Resume' },
  { icon: <IntegrationInstructionsRoundedIcon />, name: 'Skills' },
  { icon: <SubtitlesRoundedIcon />, name: 'Projects' },
]

const NavBar = () => {
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

  const [open, setOpen] = React.useState(false)
  // const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen(!open)

  const speedDialRef = useRef()
  useClickAway(speedDialRef, handleClose, ['mouseup'])

  return (
    <Container>
      <HidingNavbar shownav={showNav} bg="light" expand="md" fixed="top">
        <Container>
          <Navbar.Brand className="navbarbrand" href="#home">
            <StyledLogo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
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

              <SocialIcon kind="github" href={siteMetadata.github} size="30" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="30" />
              {/* <SocialIcon kind="ctftime" href={siteMetadata.ctftime} size="30" /> */}
              {/* <SocialIcon kind="homepage" href={siteMetadata.homepage} size="30" /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </HidingNavbar>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial"
        hidden={showNav ? true : false}
        sx={{ position: 'fixed', top: 21, right: 21 }}
        icon={<SpeedDialIcon icon={<MenuRoundedIcon />} openIcon={<MenuOpenRoundedIcon />} />}
        direction="down"
        // onClose={handleClose}
        // onOpen={handleOpen}
        onClick={handleToggle}
        open={open}
        ref={speedDialRef}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={
              <StyledHashLink to={`#${action.name.toLowerCase()}`}> {action.icon} </StyledHashLink>
            }
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Container>
  )
}

export default NavBar
