import { HeroDescription, HeroTextSection } from 'Components/Common/HeroComponents'
import { GiTeacher, GiGlobe, GiMailbox, GiPositionMarker } from 'react-icons/gi'
import SuperpeerServiceItem from 'Components/Contact/SuperpeerService'
import { HeroHeader, SectionHeader } from 'Components/Common/Headers'
import ContactIconItem from 'Components/Contact/IconItem'
import ContactForm from 'Components/Contact/ContactForm'
import CommonSection from 'Components/Common/Section'
import Button from 'Components/Common/Button'
import CardItem from 'Components/Common/Card'
import Page from 'Components/Common/Page'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { IoConstruct } from 'react-icons/io5'

const Contact = ({ posts, ...rest }) => {
  return (
    <Page>
      <CommonSection
        className='lg:space-x-16 space-y-8 lg:space-y-0'
      >
        <img
          src='/undraw/converse.svg'
          className='max-w-xs flex-shrink'
          alt='next'
        />
        <HeroTextSection className='justify-center'>
          <HeroHeader>
            let's have a <span className='text-brand'>chat</span>
          </HeroHeader>
          <HeroDescription>
            I am looking forward to new discussions about you and your projects
          </HeroDescription>
          <div className='flex flex-row space-x-2'>
            <Button className='rounded-full'>
              intro
            </Button>
            <Button className='rounded-full'>
              follow-ups
            </Button>
          </div>
        </HeroTextSection>
      </CommonSection>

      <CommonSection
        className='
          grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4
          gap-x-8 gap-y-8
        '
      >
        <ContactIconItem
          icon={GiMailbox}
          text="you'll get my email address after your initial contact request"
          color='accent1'
        />
        <ContactIconItem
          icon={GiPositionMarker}
          text="I am located in Berlin, and always willing to have a coffee with you"
          color='accent2'
        />
        <ContactIconItem
          icon={GiGlobe}
          text="available globally thanks to all those digital tools"
          color='accent3'
        />
        <ContactIconItem
          icon={GiGlobe}
          text="available globally thanks to all those digital tools"
          color='accent4'
        />
      </CommonSection>

      <CommonSection className='md:flex-row md:space-x-8 md:space-y-0 space-y-8'>
        <div className='flex flex-col space-y-4'>
          <SectionHeader>
            <span className='text-accent4'>first</span> contact
          </SectionHeader>
          <div className='flex flex-col flex-shrink font-body text-lg max-w-prose space-y-1'>
            <span>
              if you haven't contacted me before, use this form to get my attention. if I believe I can help you, we'll then schedule an online meeting to talk about your questions in depth.
            </span>
            <span id='discount' className='text-sm text-gray-500'>
              * discount codes for 1-1 sessions are available. please mention any discount requests in the contact form here.
            </span>
          </div>
        </div>
        <CardItem
          className='
            flex flex-col flex-grow
            w-full max-w-full md:max-w-md
            p-6
          '
        >
          <ContactForm />
        </CardItem>
      </CommonSection>

      <CommonSection className='lg:flex-col space-y-4'>
        <SectionHeader>
          <span className='text-accent4'>future</span> comm
        </SectionHeader>
        <div className='flex flex-row font-body text-lg space-x-2'>
          <div className='relative w-16 h-16 rounded-lg overflow-hidden'>
            <Image
              src='/images/superpeer.png'
              layout='fill'
              alt='superpeer logo'
            />
          </div>
          <div className='max-w-prose space-y-1 flex flex-col'>
            <p>
              due to covid restrictions and to ensure global availability, all future communications will take place on the <a href='https://superpeer.com' target='_blank' rel='noreferrer' className='underline'>Superpeer</a> platform.
            </p>
            <span className='text-sm text-gray-500'>
              * discount codes <a href='#discount' className='underline'>are available.</a>
            </span>
          </div>
        </div>
        <div
          className='
            grid grid-cols-3 gap-x-4
            w-full
            pt-4
          '
        >
          <SuperpeerServiceItem
            title='lean mentorship'
            duration='45 mins'
            icon={GiTeacher}
            description='Ea cupidatat ipsum cupidatat irure minim. Consectetur sunt commodo nisi aliqua laborum nulla magna fugiat pariatur quis laboris aliqua. Commodo ad non mollit ullamco reprehenderit labore nisi velit anim. Exercitation ad et deserunt sit aliqua ex minim. Amet enim minim deserunt incididunt ea sint aliquip non adipisicing qui laboris tempor ex mollit. Culpa adipisicing irure voluptate aute officia id nisi amet. Magna ut minim veniam pariatur minim cillum occaecat sunt culpa laboris nulla.'
          />
          <SuperpeerServiceItem
            title='deck review'
            duration='45mins'
            icon={HiOutlinePresentationChartLine}
            description='Laboris aute ea nulla consequat labore veniam consectetur. Reprehenderit aute consequat ipsum ut occaecat anim fugiat. Lorem duis fugiat et irure irure.'
          />
          <SuperpeerServiceItem
            title='mvp review'
            duration='45mins'
            icon={IoConstruct}
            description='Reprehenderit elit amet laborum nulla duis ex ut. Ut eiusmod officia ad nostrud cillum veniam enim commodo. Ut id nostrud tempor dolor elit proident ullamco enim. Consequat ad non quis laboris eu Lorem. Occaecat consectetur ullamco labore id cupidatat eiusmod mollit consectetur commodo adipisicing. Voluptate minim sit nisi anim cillum. Aliqua labore culpa aliquip aute fugiat tempor sit.'
          />
        </div>
      </CommonSection>
    </Page>
  )
}

Contact.propTypes = {
  posts: PropTypes.array
}

export default Contact
