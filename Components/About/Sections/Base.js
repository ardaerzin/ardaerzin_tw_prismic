import { SectionHeader } from 'Components/Common/Headers'
import PropTypes from 'prop-types'

const AboutSectionBase = ({ title, children, ...rest }) => {
  return (
    <div className='flex flex-col space-y-8' {...rest}>
      <SectionHeader
        className='text-5xl font-bold text-accent4 leading-none'
      >
        {title}
      </SectionHeader>
      {children}
    </div>
  )
}

AboutSectionBase.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default AboutSectionBase
