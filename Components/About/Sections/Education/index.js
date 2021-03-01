import SectionItem from 'Components/About/Items/SectionItem'
import AboutSectionBase from '../Base'
import { EducationData } from './data'

const EducationSection = (props) => {
  return (
    <AboutSectionBase title='education'>
      {EducationData.map((ei, i) => <SectionItem {...ei} key={`education-item-${i}`} />)}
    </AboutSectionBase>
  )
}

export default EducationSection
