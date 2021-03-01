import SectionItem from 'Components/About/Items/SectionItem'
import { InternshipsData, ProfessionalData } from './data'
import AboutSectionBase from '../Base'

const ProfessionalSection = (props) => {
  return (
    <>
      <AboutSectionBase title='professional'>
        {ProfessionalData.map((ei, i) => <SectionItem {...ei} key={`professional-item-${i}`} />)}
      </AboutSectionBase>
      <AboutSectionBase title='internships'>
        {InternshipsData.map((ei, i) => <SectionItem {...ei} key={`internship-item-${i}`} />)}
      </AboutSectionBase>
    </>
  )
}

export default ProfessionalSection
