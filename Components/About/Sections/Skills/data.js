import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextDotJs,
  SiReact,
  SiGraphql,
  SiNodeDotJs,
  SiMongodb,
  SiXcode,
  SiSketch,
  SiFramer,
  SiAdobexd,
  SiArduino,
  SiSwift,
  SiRaspberrypi,
  SiAmazonaws,
  SiGooglecloud,
  SiHeroku,
  SiServerless
} from 'react-icons/si'

export const SkillsData = [
  {
    title: 'programming',
    description: 'I was introduced to computer programming in high-school, then improved my knowledge at the summer camp I attended at UPENN. for the last couple of years, I was in charge of building web experiences (or parts of them at least) of the startups I founded and/or worked at.',
    items: [
      {
        title: 'web development',
        items: [
          { icon: SiHtml5, tip: 'html 5' },
          { icon: SiCss3, tip: 'css 3' },
          { icon: SiJavascript, tip: 'javascript' }
        ]
      },
      {
        title: 'react ecosystem',
        items: [
          { icon: SiReact, tip: 'react' },
          { icon: SiNextDotJs, tip: 'next.js' }
        ]
      },
      {
        title: 'backend development',
        items: [
          { icon: SiNodeDotJs, tip: 'nodejs' },
          { icon: SiServerless, tip: 'serverless' }
        ]
      },
      {
        title: 'ios & mac',
        items: [
          { icon: SiSwift, tip: 'swift' },
          { icon: SiXcode, tip: 'xcode' }
        ]
      },
      {
        title: 'data',
        items: [
          { icon: SiMongodb, tip: 'mongodb' },
          { icon: SiGraphql, tip: 'graph ql' }
        ]
      },
      {
        title: 'cloud platforms',
        items: [
          { icon: SiAmazonaws, tip: 'aws' },
          { icon: SiGooglecloud, tip: 'google cloud platform' },
          { icon: SiHeroku, tip: 'heroku' }
        ]
      }
    ]
  },
  {
    title: 'ux / prototyping',
    description: 'as a follower of lean methodologies I quickly learned prototyping tools and methods before rushing to build actual prototypes.',
    items: [
      {
        title: 'design & digital prototyping',
        items: [
          { icon: SiSketch, tip: 'sketch' },
          { icon: SiFramer, tip: 'framer' },
          { icon: SiAdobexd, tip: 'adobe xd' }
        ]
      },
      {
        title: 'hardware prototyping',
        items: [
          { icon: SiArduino, tip: 'arduino' },
          { icon: SiRaspberrypi, tip: 'raspberry pi' }
        ]
      }
    ]
  }
]

export const LanguagesData = [
  {
    language: 'english',
    stars: 3
  },
  {
    language: 'turkish',
    stars: 3
  },
  {
    language: 'german',
    stars: 1.5
  }
]
