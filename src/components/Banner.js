import { forwardRef } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const Banner = forwardRef((props, ref) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        padding: '666px 15px 444px 15px',
        minHeight: '100px',
        backgroundImage: `url(./banner.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      id="home"
      ref={ref}
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
  )
})

export default Banner
