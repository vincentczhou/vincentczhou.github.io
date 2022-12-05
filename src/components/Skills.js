import { forwardRef } from 'react'

import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2'
import LinearProgress from '@mui/material/LinearProgress'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { Card, CardHeader } from '@mui/material'
import { styled } from '@mui/material/styles'

import skillData from '../data/skillData'

const StyledGrid2 = styled(Grid2)`
  // &:hover {
  //   transform: scale(1.1);
  //   transition: 0.6s ease-in-out;
`
const StyledLinearProgress = styled(LinearProgress)(() => ({
  height: 9,
  borderRadius: 6,
}))

const Skills = forwardRef((props, ref) => {
  return (
    <Container
      sx={{
        padding: '150px 15px 150px 15px',
        // backgroundColor: '#0085ff',
        // boxShadow: '0 33px 39px 0',
      }}
      id="skills"
      ref={ref}
    >
      <Typography variant="h1" sx={{ padding: '0px 0px 150px 0px' }}>
        Skills
      </Typography>
      <Grid2 container spacing={3}>
        {skillData.map((data) => (
          <StyledGrid2 xs="auto" key={data.name}>
            <Tooltip title={data.tooltip}>
              <Card elevation={15}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt={data.name}
                      component={data.imgSrc}
                      variant="rounded"
                      sx={{ bgcolor: 'transparent' }}
                    />
                  }
                  title={data.name}
                  subheader={data.description}
                />
                <Container sx={{ padding: 1 }}>
                  <StyledLinearProgress variant="determinate" value={data.progress} />
                </Container>
              </Card>
            </Tooltip>
          </StyledGrid2>
        ))}
      </Grid2>
    </Container>
  )
})

export default Skills
