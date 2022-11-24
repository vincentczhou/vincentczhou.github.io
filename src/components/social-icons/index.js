import { ReactComponent as Mail} from './mail.svg'
import { ReactComponent as Github} from './github.svg'
import { ReactComponent as Linkedin} from './linkedin.svg'
import { ReactComponent as CTFtime} from './ctftime.svg'
import { ReactComponent as Homepage} from './homepage.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  ctftime: CTFtime,
  homepage: Homepage,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="social-icon-wrapper"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
    <SocialSvg src={SocialSvg} alt={kind} width={size} height={size} />
    </a>  
  )
}

export default SocialIcon
