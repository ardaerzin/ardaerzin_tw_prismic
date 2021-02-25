import { HeroDescription, HeroTextSection } from 'Components/Common/HeroComponents'
import { HeroHeader, SectionHeader } from 'Components/Common/Headers'
import CommonSection from 'Components/Common/Section'
import BlogPostList from 'Components/Blog/PostList'
import Page from 'Components/Common/Page'
import PropTypes from 'prop-types'
import Button from 'Components/Common/Button'

const Contact = ({ posts, ...rest }) => {
  return (
    <Page>
      <CommonSection
        className='lg:space-x-16 space-y-8 lg:space-y-0 pb-0 md:pb-0 lg:pb-0'
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

      <CommonSection>
        <SectionHeader>
          first contact
        </SectionHeader>
      </CommonSection>

      <CommonSection>
        <SectionHeader>
          future comm
        </SectionHeader>
      </CommonSection>
    </Page>
  )
}

Contact.propTypes = {
  posts: PropTypes.array
}

export default Contact
