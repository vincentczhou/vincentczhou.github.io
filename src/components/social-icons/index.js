import Link from '@mui/material/Link'
import SvgIcon from '@mui/material/SvgIcon'

import { ReactComponent as Mail } from './mail.svg'
import { ReactComponent as Github } from './github.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
import { ReactComponent as CTFtime } from './ctftime.svg'
import { ReactComponent as Homepage } from './homepage.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  ctftime: CTFtime,
  homepage: Homepage,
}

const SocialIcon = ({ kind, href, size = 8, sx }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" sx={sx}>
      <SvgIcon
        component={SocialSvg}
        // htmlColor={color}
        sx={{ width: `${size}px`, height: `${size}px`, margin: '9px 18px' }}
        inheritViewBox
      />
    </Link>
  )
}

export default SocialIcon
