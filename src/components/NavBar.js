import React from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import siteMetadata from '../data/siteMetadata'
import SocialIcon from './social-icons'
import { ReactComponent as Logo } from '../assets/img/logo.svg'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <Container fluid="xl">
            <Logo className="logo" />
          </Container>
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
          <span className="navbar-text">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="30" />
            <SocialIcon kind="github" href={siteMetadata.github} size="30" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="30" />
            {/* <SocialIcon kind="ctftime" href={siteMetadata.ctftime} size="30" /> */}
            {/* <SocialIcon kind="homepage" href={siteMetadata.homepage} size="30" /> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
