import SectionItem from 'Components/About/Items/SectionItem'
import { OtherData, SportsData } from './data'
import AboutSectionBase from '../Base'

const OtherSection = (props) => {
  return (
    <>
      <AboutSectionBase title='other'>
        {OtherData.map((ei, i) => <SectionItem {...ei} key={`other-item-${i}`} />)}
      </AboutSectionBase>
      <AboutSectionBase title='sports'>
        {SportsData.map((ei, i) => <SectionItem {...ei} key={`sport-item-${i}`} />)}
      </AboutSectionBase>
    </>
  )
}

export default OtherSection
