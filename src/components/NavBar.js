import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import siteMetadata from '../data/siteMetadata'
import SocialIcon from './social-icons'
import { ReactComponent as Logo } from '../assets/img/logo.svg'

const NavBar = () => {
  const [showNav, setShowNav] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
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
  return (
    <Navbar className={showNav ? '' : 'hiddenNavbar'} bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand className="navbarbrand" href="#home">
          <Logo className="logo" />
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
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="30" />
            <SocialIcon kind="github" href={siteMetadata.github} size="30" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="30" />
            {/* <SocialIcon kind="ctftime" href={siteMetadata.ctftime} size="30" /> */}
            {/* <SocialIcon kind="homepage" href={siteMetadata.homepage} size="30" /> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
