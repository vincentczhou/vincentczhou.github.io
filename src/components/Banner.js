import { forwardRef } from 'react'

// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const Banner = forwardRef((props, ref) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        padding: '520px 15px 520px 15px',
        minHeight: '100px',
        // backgroundImage: `url(./static/images/banner.JPG)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      id="home"
      ref={ref}
    >
      {/* <Row>
        <Col>
          <Typography variant="h1">Hello</Typography>
        </Col>
        <Col>
          <Typography variant="h1">some image her
          e maybe</Typography>
        </Col>
      </Row> */}
      <Grid2 container spacing={3} sx={{ flexGrow: 1 }} columns={15}>
        <Grid2 xs={15}>
          <Typography variant="h1">Hi! I'm Vincent.</Typography>
          <Typography variant="body1">
            I'm currently an engineering student at Bellevue College, as well as the President of
            the InfoSec Club there. Scroll down to learn more about me!
          </Typography>
          <Button variant="contained" color="success" size="large" disableRipple>
            Current Status: Finals Week!
          </Button>
          <div>Site is [WIP]</div>
        </Grid2>
        {/* <Grid2 xs={6} mdOffset={2}>
          <Typography variant="h1">some image here</Typography>
        </Grid2> */}
      </Grid2>
    </Container>
  )
})

export default Banner
