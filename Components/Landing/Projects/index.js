import { SectionHeader } from 'Components/Common/Headers'
import CommonSection from 'Components/Common/Section'
import PropTypes from 'prop-types'
import ProjectItem from './ProjectItem'

const LandingProjectsSection = ({ projects }) => {
  return (
    <CommonSection className='flex-wrap space-y-12'>
      <SectionHeader>
        <span className='text-accent2'>current</span> projects
      </SectionHeader>
      <div
        className='
          grid
          w-full
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          sm:gap-y-8
          sm:gap-x-8 md:gap-x-16
        '
      >
        {projects.map((ri, i) => <ProjectItem key={`mentored-item-${i}`} {...ri.node} />)}
      </div>
    </CommonSection>
  )
}

LandingProjectsSection.propTypes = {
  projects: PropTypes.array
}

export default LandingProjectsSection
