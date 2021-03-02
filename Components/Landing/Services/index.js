import { SectionHeader } from 'Components/Common/Headers'
import CommonSection from 'Components/Common/Section'
import LandingServiceItem from './item'

const LandingServicesSection = () => {
  return (
    <CommonSection className='flex-wrap space-y-12'>
      <SectionHeader>
        <span className='text-accent3'>stuff</span> that I do
      </SectionHeader>
      <div className='flex flex-col space-y-16'>
        <LandingServiceItem
          title='mentorship'
          illustration='mentor'
          description='I can help you create different MVP testing strategies focusing on customer focused actionable learning, and teach you how to work as a team.'
          items={['effectuation', 'lean startup', 'design thinking', 'customer development', 'business model generation', 'stakeholder theory']}
        />
        <LandingServiceItem
          title='mvp building'
          illustration='mvpbuild'
          description='using the same tech stack which powers this website and my other projects, I can create and launch high fidelity digital prototypes for your projects within days.'
          items={['website / webapp', 'a/b testing', 'data collection', 'analysis']}
        />
      </div>
    </CommonSection>
  )
}

export default LandingServicesSection
