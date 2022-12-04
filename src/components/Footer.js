import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import siteMetadata from '../data/siteMetadata'

const Footer = () => {
  return (
    <Container>
      <Typography variant="caption" display="block" gutterBottom>
        <div>Made by {siteMetadata.dev}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        {siteMetadata.title}
      </Typography>
    </Container>
  )
}

export default Footer
