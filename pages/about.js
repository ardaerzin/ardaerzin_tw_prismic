import { HeroHeader } from 'Components/Common/Headers'
import { HeroTextSection } from 'Components/Common/HeroComponents'
import Page from 'Components/Common/Page'
import CommonSection from 'Components/Common/Section'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import EducationSection from 'Components/About/Sections/Education'
import ProfessionalSection from 'Components/About/Sections/Professional'
import TeachingSection from 'Components/About/Sections/Teaching'
import OtherSection from 'Components/About/Sections/Other'
import AboutCatagoryArea from 'Components/About/Sections/CatagoryArea'

const SkillsSection = dynamic(() => import('Components/About/Sections/Skills'))

const About = props => {
  const { query: { section = 'skills' } } = useRouter()
  const renderSection = (selectedSection) => {
    switch (selectedSection) {
      case 'skills':
        return <SkillsSection />
      case 'education':
        return <EducationSection />
      case 'professional':
        return <ProfessionalSection />
      case 'teaching':
        return <TeachingSection />
      case 'other':
        return <OtherSection />
      default:
        return 2
    }
  }
  return (
    <Page
      className='gap-x-12 max-w-screen-lg w-full mx-auto content-start grid-cols:about-col md:grid-cols-about-row'
      type='grid'
    >
      <CommonSection
        className='row-start-1 col-span-1 md:col-span-2 lg:space-x-16 space-y-8 lg:space-y-0 w-full'
      >
        <HeroTextSection className='justify-center'>
          <HeroHeader>
            all about <span className='text-brand'>@arda</span>
          </HeroHeader>
        </HeroTextSection>
      </CommonSection>
      <AboutCatagoryArea
        activeSection={section}
      />
      <div
        className='
          row-start-3 md:row-start-2
          col-start-1 md:col-start-2
          col-span-1
          flex flex-col
          space-y-16
          pb-40
          w-full
        '
      >
        {
          renderSection(section)
        }
      </div>
    </Page>
  )
}

About.propTypes = {

}

export async function getServerSideProps({ query }) {
  return {
    props: {
      data: {}
    }
  }
}

export default About
