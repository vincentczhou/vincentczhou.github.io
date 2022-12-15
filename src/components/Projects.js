import { forwardRef, Fragment, useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Card, CardActions, CardContent } from '@mui/material'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {
  CircleRounded as CircleRoundedIcon,
  CloseRounded as CloseRoundedIcon,
  RadioButtonCheckedRounded as RadioButtonCheckedRoundedIcon,
  RadioButtonUncheckedRounded as RadioButtonUncheckedRoundedIcon,
} from '@mui/icons-material'
import { styled, useTheme } from '@mui/material/styles'

import SocialIcon from './social-icons'
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

  & .carousel-item-next,
  .carousel-item-prev,
  .carousel-item.active {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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
  // max-width: 900px;
  // max-height: 700px;
  // max-width: 100%;
  // max-height: 100%;
  max-width: min(100%, 900px);
  max-height: min(100%, 700px);
`

const Projects = forwardRef((props, ref) => {
  const theme = useTheme()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  const [dialogState, setDialogState] = useState(false)
  const handleDialogOpen = () => setDialogState(true)
  const handleDialogClose = () => setDialogState(false)
  // const handleDialogToggle = () => setDialogState(!dialogState)

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
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid2
          lg={5}
          sx={{
            display: { xs: 'none', lg: 'flex' },
            padding: '0px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
              sx={{ maxHeight: '900px', overflow: 'auto', borderRadius: '15px' }}
            >
              <List sx={{ overflow: 'auto', bgcolor: 'background.paper', borderRadius: '15px' }}>
                {projectsData.map((data, index) => (
                  <Fragment key={data.title}>
                    <ListItem alignItems="flex-start" sx={{ maxWidth: '390px' }}>
                      <ListItemButton
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                        sx={{ height: '100%' }}
                      >
                        <img alt={data.title} src={data.bannerSrc} width="120px" />
                        <ListItemText
                          primary={data.title}
                          primaryTypographyProps={{ noWrap: true }}
                          secondary={data.summary}
                          secondaryTypographyProps={{ noWrap: true }}
                          sx={{ marginLeft: '9px' }}
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
        <Grid2
          xs={15}
          lg={9}
          sx={{ padding: '0px', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box>
            <Paper elevation={21} sx={{ borderRadius: '15px' }}>
              {/* <Card sx={{ width: '900px', height: '900px', overflow: 'auto' }}> */}
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'visible',
                  borderRadius: '15px',
                  height: '900px',
                }}
              >
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
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {projectsData[selectedIndex].summary}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      '-webkit-line-clamp': '3',
                      '-webkit-box-orient': 'vertical',
                    }}
                  >
                    {projectsData[selectedIndex].description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                    width: '100%',
                    height: '5%',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'start', flex: '1' }}>
                    {projectsData[selectedIndex].active ? (
                      <Chip
                        label="Active"
                        color="success"
                        size="small"
                        icon={<RadioButtonCheckedRoundedIcon />}
                      />
                    ) : (
                      <Chip
                        label="Inactive"
                        color="error"
                        size="small"
                        icon={<RadioButtonUncheckedRoundedIcon />}
                      />
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', flex: '1' }}>
                    <Button onClick={handleDialogOpen}>Learn More</Button>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'end', flex: '1' }}>
                    <SocialIcon
                      kind="github"
                      href={projectsData[selectedIndex].github}
                      size="30"
                      sx={{
                        color: theme.palette.text.primary,
                        '&:hover': {
                          color: theme.palette.secondary.main,
                          transition: 'all 0.3s ease-in-out',
                        },
                      }}
                    />
                  </Box>
                </CardActions>
              </Card>
            </Paper>
          </Box>
        </Grid2>
        {/* dialog */}
        <Dialog open={dialogState} onClose={handleDialogClose}>
          <DialogTitle>
            <Typography gutterBottom variant="h5" component="div">
              {projectsData[selectedIndex].title}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {projectsData[selectedIndex].summary}
            </Typography>
            <IconButton
              onClick={handleDialogClose}
              sx={{ position: 'absolute', right: 9, top: 9, color: 'text.secondary' }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="body2" color="text.secondary">
              {projectsData[selectedIndex].description}
            </Typography>
            {projectsData[selectedIndex].body ? (
              <List dense>
                {projectsData[selectedIndex].body.map((data) => (
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 0, paddingRight: '9px' }}>
                      <CircleRoundedIcon sx={{ width: '15px', height: '15px' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={data}
                      primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
              </List>
            ) : null}
          </DialogContent>
          <DialogActions
            sx={{
              width: '100%',
              height: '5%',
              paddingLeft: '15px',
              paddingRight: '15px',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'start', flex: '1' }}>
              {projectsData[selectedIndex].active ? (
                <Chip
                  label="Active"
                  color="success"
                  size="small"
                  icon={<RadioButtonCheckedRoundedIcon />}
                />
              ) : (
                <Chip
                  label="Inactive"
                  color="error"
                  size="small"
                  icon={<RadioButtonUncheckedRoundedIcon />}
                />
              )}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flex: '1' }}></Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', flex: '1' }}>
              <SocialIcon
                kind="github"
                href={projectsData[selectedIndex].github}
                size="30"
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              />
            </Box>
          </DialogActions>
        </Dialog>
        {/* aaaaaaaaaaa */}
        <Grid2 xs={15} sx={{ display: { xs: 'flex', lg: 'none' } }}>
          <Paper elevation={21} sx={{ overflow: 'auto', borderRadius: '15px' }}>
            <List
              component={Stack}
              direction="row"
              sx={{ overflow: 'auto', bgcolor: 'background.paper', borderRadius: '15px' }}
            >
              {projectsData.map((data, index) => (
                <Fragment key={data.title}>
                  <ListItem alignItems="flex-start" sx={{ maxWidth: '390px' }}>
                    <ListItemButton
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                      sx={{ height: '100%' }}
                    >
                      <img alt={data.title} src={data.bannerSrc} width="120px" />
                      <ListItemText
                        primary={data.title}
                        primaryTypographyProps={{ noWrap: true }}
                        secondary={data.summary}
                        secondaryTypographyProps={{ noWrap: true }}
                        sx={{ marginLeft: '9px' }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Fragment>
              ))}
            </List>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  )
})

export default Projects
