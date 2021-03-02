import { GiSkills, GiDiploma, GiTeacher, GiCardRandom, GiOfficeChair } from 'react-icons/gi'
import { CategorySelectorItem } from 'Components/Common/CategorySelector'
import { useInView } from 'react-intersection-observer'
import { m as motion } from 'framer-motion'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Categories = [
  {
    name: 'skills',
    icon: GiSkills,
    color: 'bg-accent1'
  },
  {
    name: 'education',
    icon: GiDiploma,
    color: 'bg-accent2'
  },
  {
    name: 'professional',
    icon: GiOfficeChair,
    color: 'bg-accent3'
  },
  {
    name: 'teaching',
    icon: GiTeacher,
    color: 'bg-accent4'
  },
  {
    name: 'other',
    icon: GiCardRandom,
    color: 'bg-brand'
  }
]

const SelectorRow = ({ icon: Icon, name, color, activeSection, ...rest }) => {
  return (
    <CategorySelectorItem
      className='flex space-x-2 items-center'
      query='section'
      activeColor='brand'
      selected={activeSection === name}
      name={name}
      {...rest}
    >
      <SelectorIcon color={color}>
        <Icon className='text-white' />
      </SelectorIcon>
      <span className='font-semibold'>
        {name}
      </span>
    </CategorySelectorItem>
  )
}

SelectorRow.propTypes = {
  icon: PropTypes.func,
  name: PropTypes.string,
  color: PropTypes.string,
  activeSection: PropTypes.string
}

const SelectorIcon = ({ color, ...rest }) => (
  <motion.div
    className={classnames('w-6 h-6 rounded-md flex items-center justify-center text-xs', color)}
    variants={{
      initial: { opacity: 0.25 },
      hover: { opacity: 1 }
    }}
    {...rest}
  />
)

SelectorIcon.propTypes = {
  color: PropTypes.string
}

const AboutCatagoryArea = ({ activeSection }) => {
  const { ref, inView } = useInView({
    threshold: 1
  })
  return (
    <div
      ref={ref}
      className='
        flex md:flex-col
        row-start-2 col-start-1
        col-span-1
        bg-bg
        sticky -top-1 md:top-0
        self-start
        py-2 md:py-0
        overflow-x-scroll md:overflow-hidden
        max-w-max md:w-max
      '
    >
      <motion.div
        className='
          flex md:flex-col
          md:space-y-2 md:space-x-0 space-x-2
          border-b-4 md:border-b-0
          w-max
          py-4 pr-12 md:pr-0
          self-start
        '
        animate={inView ? 'visible' : 'sticky'}
        initial='visible'
        variants={{
          visible: { borderColor: 'rgba(0, 0, 0, 0)' },
          sticky: { borderColor: 'rgba(0, 0, 0, 0.6)' }
        }}
      >
        {Categories.map((si, i) => (
          <SelectorRow key={`selector-row-${i}`} {...si} {...{ activeSection }} />
        ))}
      </motion.div>
    </div>
  )
}

AboutCatagoryArea.propTypes = {
  activeSection: PropTypes.string
}

export default AboutCatagoryArea
