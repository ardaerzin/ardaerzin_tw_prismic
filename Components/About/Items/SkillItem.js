import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { SectionSubHeader } from 'Components/Common/Headers'
import Tooltip from 'Components/Common/Tooltip'
import { createElement, useContext, useMemo } from 'react'
import { m as motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { ThemeContext } from 'lib/theme'

const MAX_STARS = 3
export const LanguageItem = ({ language, stars = 1 }) => {
  const StarArea = useMemo(() => {
    const arr = []
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < Math.floor(stars)) {
        arr.push(BsStarFill)
      } else if (i < Math.ceil(stars) && stars % 1 !== 0) {
        arr.push(BsStarHalf)
      } else {
        arr.push(BsStar)
      }
    }
    return arr
  }, [stars])
  return (
    <div>
      <div className='flex flex-row'>
        {
          StarArea.map((si, i) => (
            createElement(si, {
              key: `languageItem-${i}`,
              className: 'text-4xl text-brand'
            })
          ))
        }
      </div>
      <div className='font-body text-2xl mt-2'>
        <span>{language}</span>
      </div>
    </div>
  )
}

LanguageItem.propTypes = {
  language: PropTypes.string,
  stars: PropTypes.number
}

export const SkillIconItem = ({ icon: Icon, tip }) => {
  const colors = useContext(ThemeContext)
  return (
    <motion.div
      className='has-tooltip text-gray-500'
      whileHover='hover'
      initial='initial'
      variants={{
        hover: { color: colors.accent4 },
        initial: { color: colors.gray[500] }
      }}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 400
      }}
    >
      <Icon
        color='inherit'
        className='text-3xl md:text-5xl'
      />
      <Tooltip>
        {tip}
      </Tooltip>
    </motion.div>
  )
}

SkillIconItem.propTypes = {
  icon: PropTypes.func,
  tip: PropTypes.string
}

export const SkillSectionItem = ({ title, items }) => {
  return (
    <div className='flex flex-col'>
      <h4 className='font-display text-md font-semibold text-gray-500'>
        <span className='text-accent4'>{'</>'}</span> {title}
      </h4>
      <div className='flex flex-row space-x-6 mt-6 ml-4'>
        {items.map((ii, i) => <SkillIconItem {...ii} key={`skill-item-${i}`} />)}
      </div>
    </div>
  )
}

SkillSectionItem.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

export const SkillSectionGroup = ({ title, description, items, ...rest }) => (
  <div className='space-y-4'>
    <SectionSubHeader>
      {title}
    </SectionSubHeader>
    <p className='font-body text-lg'>
      {description}
    </p>
    <div
      className='
        w-full
        grid grid-cols-1 md:grid-cols-2
        gap-x-8 gap-y-8
        pt-4
        ml-4
      '
    >
      {items.map((sdi, j) => <SkillSectionItem key={`${title}-subitem-${j}`} {...sdi} />)}
    </div>
  </div>
)

SkillSectionGroup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array
}
