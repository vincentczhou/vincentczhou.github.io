import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import SocialIcon from './social-icons'
import siteMetadata from '../data/siteMetadata'

const Footer = () => {
  return (
    <Container sx={{ padding: '39px 0px 39px 0px' }}>
      <Box>
        <SocialIcon
          kind="mail"
          href={`mailto:${siteMetadata.email}`}
          size="30"
          sx={{
            color: 'text.primary',
            '&:hover': {
              color: 'secondary.main',
              transition: 'all 0.3s ease-in-out',
            },
          }}
        />
        <SocialIcon
          kind="github"
          href={siteMetadata.github}
          size="30"
          sx={{
            color: 'text.primary',
            '&:hover': {
              color: 'secondary.main',
              transition: 'all 0.3s ease-in-out',
            },
          }}
        />
        <SocialIcon
          kind="linkedin"
          href={siteMetadata.linkedin}
          size="30"
          sx={{
            color: 'text.primary',
            '&:hover': {
              color: 'secondary.main',
              transition: 'all 0.3s ease-in-out',
            },
          }}
        />
      </Box>
      <Typography variant="caption" display="block" gutterBottom>
        Made by {siteMetadata.dev} {` • `} {`© ${new Date().getFullYear()}`}
        {/* {` • `}{' '} */}
        {/* {siteMetadata.title} */}
        <div>Built from scratch using React and Material UI</div>
      </Typography>
    </Container>
  )
}

export default Footer
