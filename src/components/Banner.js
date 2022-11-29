import React from 'react'

import { useHashScroll } from 'react-hash-scroll'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const Banner = ({ hash, options }) => {
  const scrollRef = useHashScroll(hash, options)
  return (
    // <section className="banner" >
    <Container
      maxWidth="false"
      sx={{
        padding: '666px 0px 444px 0px',
        minHeight: '100px',
        backgroundImage: `url(${'https://cdn.pixabay.com/photo/2022/11/09/12/23/lotus-7580478_960_720.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      id="home"
      ref={scrollRef}
    >
      <Row>
        <Col>
          <Typography variant="h1">Hello</Typography>
        </Col>
        <Col>
          <Typography variant="h1">some image here maybe</Typography>
        </Col>
      </Row>
    </Container>
    // </section>
  )
}

export default Banner
