import { forwardRef } from 'react'

// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import siteData from '../data/siteData'

const StyledImage = styled('img')`
  max-width: 720px;
  // height: 405px;
  width: 100%;
  height: 100%;
  border-radius: 30px;
`

const Banner = forwardRef((props, ref) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        padding: '300px 15px 390px 15px',
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
      {/* <Grid2 container spacing={3} sx={{ flexGrow: 1 }} columns={15}>
       */}
      <Grid2
        container
        sx={{ padding: '0px', justifyContent: 'space-evenly', alignItems: 'center' }}
      >
        <Grid2 xs={12} lg={5}>
          <Typography variant="h1" component="div">
            {siteData.bannerHeader}
          </Typography>
          <Typography variant="body1" component="div">
            {siteData.bannerBody1}
          </Typography>
          <Button variant="contained" color="success" size="large" disableRipple>
            Status: {siteData.bannerStatus}
          </Button>
        </Grid2>
        <Grid2 container xs={12} lg="auto" sx={{ justifyContent: 'center' }}>
          <Paper
            elevation={15}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '780px',
              maxHeight: '465px',
              width: '100%',
              height: '100%',
              padding: '30px',
              borderRadius: '30px',
            }}
          >
            <StyledImage src="./static/images/banner-img.png" alt="Lofi Banner" />
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  )
})

export default Banner
