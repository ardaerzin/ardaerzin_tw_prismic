import { SectionSubHeader } from 'Components/Common/Headers'
import PropTypes from 'prop-types'

const LandingServiceItem = ({ title, description, illustration, items = [] }) => {
  return (
    <div
      className='flex flex-col space-y-8'
    >
      <SectionSubHeader className='text-accent4'>
        {title}
      </SectionSubHeader>
      <div className='flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0 justify-between'>
        <img
          src={`/undraw/${illustration}.svg`}
          className='max-w-xs flex-shrink'
          alt='next'
        />
        <div className='flex flex-col flex-grow max-w-prose font-body space-y-6'>
          <p className='text-xl'>
            {description}
          </p>
          <ul className='grid grid-cols-2 pt-2 font-display gap-y-6 pl-4'>
            {
              items.map((item, i) => <li key={`landing-service-item-${i}`}><span className='text-accent4'>{'</>'}</span> {item}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

LandingServiceItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array,
  illustration: PropTypes.string
}

export default LandingServiceItem
