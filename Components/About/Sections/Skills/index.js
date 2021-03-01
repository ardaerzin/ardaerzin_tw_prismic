import { LanguageItem, SkillSectionGroup } from 'Components/About/Items/SkillItem'
import { LanguagesData, SkillsData } from './data'
import AboutSectionBase from '../Base'

const SkillsSection = (props) => {
  return (
    <>
      <AboutSectionBase title='skillz'>
        <div className='flex flex-col space-y-16 mt-4'>
          {
            SkillsData.map((sd, i) => (
              <SkillSectionGroup
                key={`skill-data-${i}`}
                {...sd}
              />
            ))
          }
        </div>
      </AboutSectionBase>
      <AboutSectionBase title='languages'>
        <div
          className='
            flex flex-col md:flex-row
            md:space-x-12
            space-y-12 md:space-y-0
            ml-4 md:ml-0
          '
        >
          {LanguagesData.map((ld, i) => <LanguageItem key={`language-item-${i}`} {...ld} />)}
        </div>
      </AboutSectionBase>
    </>
  )
}

export default SkillsSection
