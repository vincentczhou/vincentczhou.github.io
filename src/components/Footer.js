import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import SocialIcon from './social-icons'
import siteMetadata from '../data/siteMetadata'

const Footer = () => {
  return (
    <Container>
      <SocialIcon
        kind="mail"
        href={`mailto:${siteMetadata.email}`}
        size="30"
        // color={theme.palette.text.primary}
      />
      <SocialIcon
        kind="github"
        href={siteMetadata.github}
        size="30"
        // color={theme.palette.text.primary}
      />
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
