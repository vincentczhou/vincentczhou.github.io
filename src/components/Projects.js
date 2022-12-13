import { forwardRef, Fragment, useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Card, CardActions, CardContent } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

import projectsData from '../data/projectsData'

const StyledCarousel = styled(Carousel, { shouldForwardProp: (prop) => prop !== 'theme' })`
  height: 700px;

  & .carousel-inner {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  ${(props) =>
    props.theme.palette.mode !== 'dark'
      ? `
  & .carousel-indicators {
    filter: invert(50%);
  }
  & .carousel-control-prev {
    filter: invert(50%);
  }
  & .carousel-control-next {
    filter: invert(50%);
  }
  `
      : ''}
`

const StyledImage = styled('img')`
  // justify-content: center;
  // align-items: center;
  // transform: translateY(50%);
  object-fit: contain;
  max-width: 900px;
  max-height: 700px;
`

const Projects = forwardRef((props, ref) => {
  const theme = useTheme()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <Container
      maxWidth="true"
      sx={{
        padding: '150px 15px 150px 15px',
        // backgroundColor: '#0094ff',
        // boxShadow: '0 33px 39px 0',
      }}
      id="projects"
      ref={ref}
    >
      <Typography variant="h1" sx={{ padding: '0px 0px 150px 0px' }}>
        Projects
      </Typography>
      <Grid2
        container
        spacing={1}
        // sx={{ flexGrow: 1 }}
        columns={15}
      >
        <Grid2 xs={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            {/* <Paper elevation={21} sx={{ height: 600, maxHeight: 600, overflow: 'auto' }}> */}
            <Paper
              elevation={21}
              sx={{ maxHeight: '666px', overflow: 'auto', borderRadius: '15px' }}
            >
              <List sx={{ bgcolor: 'background.paper', borderRadius: '15px' }}>
                {projectsData.map((data, index) => (
                  <Fragment key={data.title}>
                    <ListItem alignItems="flex-start">
                      <ListItemButton
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                      >
                        <img alt={data.title} src={data.bannerSrc} width="100px" />
                        <ListItemText
                          primary={data.title}
                          secondary={
                            <Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              ></Typography>
                              {data.summary}
                            </Fragment>
                          }
                          sx={{ marginLeft: '3px' }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Fragment>
                ))}
              </List>
            </Paper>
          </Box>
        </Grid2>
        {/* aaaaaaaaaaa */}
        <Grid2 xs={9}>
          <Box>
            <Paper elevation={21}>
              {/* <Card sx={{ width: '900px', height: '900px', overflow: 'auto' }}> */}
              <Card sx={{ overflow: 'auto' }}>
                <StyledCarousel theme={theme}>
                  {projectsData[selectedIndex].imgSrc.map((data) => (
                    <Carousel.Item>
                      <StyledImage src={data} alt="First slide" />
                      {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption> */}
                    </Carousel.Item>
                  ))}
                </StyledCarousel>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {projectsData[selectedIndex].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {projectsData[selectedIndex].description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography variant="body2" color="text.secondary">
                    [WIP]
                  </Typography>
                </CardActions>
              </Card>
            </Paper>
          </Box>
        </Grid2>
      </Grid2>
      <StyledCarousel theme={theme}>
        {projectsData[selectedIndex].imgSrc.map((data) => (
          <Carousel.Item>
            <StyledImage src={data} alt="First slide" />
            {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </StyledCarousel>
    </Container>
  )
})

export default Projects
