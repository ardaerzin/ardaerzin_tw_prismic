import SectionItem from 'Components/About/Items/SectionItem'
import AboutSectionBase from '../Base'
import { TeachingData } from './data'

const TeachingSection = (props) => {
  return (
    <AboutSectionBase title='teaching'>
      {TeachingData.map((ei, i) => <SectionItem {...ei} key={`teaching-item-${i}`} />)}
    </AboutSectionBase>
  )
}

export default TeachingSection
