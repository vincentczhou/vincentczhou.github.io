import React, { useState } from 'react'

import { useHashScroll } from 'react-hash-scroll'

import Carousel from 'react-bootstrap/Carousel'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Card, CardActions, CardContent } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import projectsData from '../data/projectsData'

const Projects = ({ hash, options }) => {
  const scrollRef = useHashScroll(hash, options)

  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
    console.log(selectedIndex)
  }

  return (
    <Container id="projects" ref={scrollRef}>
      <Grid2 container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid2>
          <Box>
            <Paper elevation={21} sx={{ maxHeight: 300, overflow: 'auto' }}>
              <List sx={{ bgcolor: 'background.paper' }}>
                {projectsData.map((data, index) => (
                  <React.Fragment key={data.title}>
                    <ListItem alignItems="flex-start">
                      <ListItemButton
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                      >
                        <img alt={data.title} src={data.bannerSrc} width="100px" />
                        <ListItemText
                          primary={data.title}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              ></Typography>
                              {data.summary}
                            </React.Fragment>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Box>
        </Grid2>
        {/* aaaaaaaaaaa */}
        <Grid2 mdOffset="auto">
          <Box>
            <Paper elevation={21}>
              <Card sx={{ maxWidth: 345 }}>
                <Carousel>
                  {projectsData[selectedIndex].imgSrc.map((data) => (
                    <Carousel.Item>
                      <img className="d-block w-100" src={data} alt="First slide" />
                      {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption> */}
                    </Carousel.Item>
                  ))}
                </Carousel>
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
                    asdf
                  </Typography>
                </CardActions>
              </Card>
            </Paper>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default Projects
