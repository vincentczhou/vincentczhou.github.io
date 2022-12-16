import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'

const BoldText = styled(Box)`
  display: inline;
  font-weight: bold;
`

const LinkText = styled(Link)``
LinkText.defaultProps = {
  underline: 'none',
  target: '_blank',
  re: 'noopener noreferrer',
}

const projectsData = [
  {
    title: 'Pilplup Support',
    summary: 'Discord Bot',
    active: false,
    description: (
      <>
        A <BoldText>Discord Bot</BoldText> built using the <BoldText>Discord.JS Library</BoldText>.
        Managed real-time auctioning of virtual merchandise by executing user-triggered functions
        and parsing user input.
      </>
    ),
    body: [
      <>Integrated Discord API to execute user-triggered functions and handle data</>,
      <>Built a platform to manage real-time auctioning of virtual merchandise</>,
    ],
    bannerSrc: '../static/images/projects/pilplupsupport/1.PNG',
    imgSrc: [
      '../static/images/projects/pilplupsupport/1.PNG',
      '../static/images/projects/pilplupsupport/2.PNG',
    ],
    github: '',
  },
  {
    title: 'MaiTools',
    summary: 'Full-Stack Web Application',
    active: false,
    description: (
      <>
        A <BoldText>Website</BoldText> built with <BoldText>Express.JS</BoldText> featuring a custom
        backend and foreign function interface mechanism. Translated, encrypted, and decrypted user
        input while exploring block ciphers and other modern encyrption techniques
      </>
    ),
    body: [
      <>
        Created an original frontend using a server-side template engine and vanilla JavaScript to
        facilitate user input
      </>,
      <>Implemented an Express.JS backend to decrypt and translate user data</>,
      <>
        Utilized a Node.JS foreign function interface mechanism to enable integration of an existing
        C++ library into the backend
      </>,
    ],
    bannerSrc: '../static/images/projects/maitools/1.png',
    imgSrc: [
      '../static/images/projects/maitools/1.png',
      '../static/images/projects/maitools/2.png',
    ],
    github: '',
  },
  {
    title: 'MaiHome',
    summary: 'Arcade Machine Hardware',
    active: true,
    description: (
      <>
        An <BoldText>Arcade Machine</BoldText> built for consumer usage from commercial hardware.
        Interfaced with and emulated hardware components, and bypassed hardware checks using I2C bus
        communication through an <BoldText>Arduino</BoldText>.
      </>
    ),
    body: [
      <>Utilizing I2C bus with Arduino to interface with and emulate commercial hardware</>,
      <>Researching existing hardware architecture for a non-documented system</>,
      <>Troubleshooted hardware issues involving software and hardware integration</>,
      <>
        Working with a multilingual international team to develop consumer cost-friendly solutions
      </>,
    ],
    bannerSrc: '../static/images/projects/maihome/1.jpg',
    imgSrc: [
      '../static/images/projects/maihome/1.jpg',
      '../static/images/projects/maihome/2.jpg',
      '../static/images/projects/maihome/3.jpg',
    ],
    github: '',
  },
  {
    title: 'Bellevue College InfoSec Club Website',
    summary: 'Full-Stack Web Application',
    active: true,
    description: (
      <>
        A Homepage for the{' '}
        <LinkText href="https://www.bcinfosec.me">Bellevue College InfoSec Club</LinkText>, and
        their CTF Team, ☕Black Matcha🍵!
      </>
    ),
    body: [
      <>
        Creating original “capture the flag”-style cybersecurity challenges for club members to
        practice with
      </>,
      <>Implementing a Next.JS backend to handle user input “flag” verification</>,
      <>
        Collaborating with others to streamline an efficient deployment system using Continuous
        Integration and Git
      </>,
    ],
    bannerSrc: '../static/images/projects/bcinfosec/1.PNG',
    imgSrc: ['../static/images/projects/bcinfosec/1.PNG'],
    github: 'https://github.com/vincentczhou/InfoSec-Club-Site',
  },
  {
    title: 'vincentczhou.github.io',
    summary: 'Personal Portfolio',
    active: true,
    description: (
      <>
        A responsive, interactive <BoldText>Personal Portfolio Website</BoldText> built completely
        from scratch using <BoldText>React</BoldText> and <BoldText>Material UI</BoldText>. You're
        looking at it right now!
      </>
    ),
    body: [
      <>Designing an interactive web portfolio using React and Material UI from scratch</>,
      <>
        Developing efficient, scalable code to minimize rendering time and provide ease for updates
      </>,
    ],
    bannerSrc: 'https://cdn.pixabay.com/photo/2022/11/09/12/23/lotus-7580478_960_720.jpg',
    imgSrc: [
      'https://cdn.pixabay.com/photo/2022/11/09/12/23/lotus-7580478_960_720.jpg',
      'https://cdn.pixabay.com/photo/2022/11/09/12/23/lotus-7580478_960_720.jpg',
      'https://cdn.pixabay.com/photo/2022/11/09/12/23/lotus-7580478_960_720.jpg',
    ],
    github: 'https://github.com/vincentczhou/vincentczhou.github.io',
  },
  {
    title: 'MaiTea Web UI',
    summary: 'Full-Stack Web Application',
    active: true,
    description: <>[WIP]</>,
    body: '',
    bannerSrc: 'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg',
    imgSrc: [
      'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg',
      'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg',
      'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg',
    ],
    github: '',
  },
]

export default projectsData
