import { SectionHeader } from 'Components/Common/Headers'
import MentoredProjectItem from './MentoredProjectItem'
import CommonSection from 'Components/Common/Section'
import PropTypes from 'prop-types'

const LandingReferencesSection = ({ references = [] }) => {
  return (
    <CommonSection className='flex-wrap space-y-12'>
      <SectionHeader>
        some <span className='text-accent2'>mentored</span> projects
      </SectionHeader>
      <div
        className='
          grid
          w-full
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-y-4 sm:gap-y-8
          sm:gap-x-4
        '
      >
        {references.map((ri, i) => <MentoredProjectItem key={`mentored-item-${i}`} {...ri.node} />)}
      </div>
    </CommonSection>
  )
}

LandingReferencesSection.propTypes = {
  references: PropTypes.array
}

export default LandingReferencesSection
