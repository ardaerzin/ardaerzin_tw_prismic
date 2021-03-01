import { m as motion } from 'framer-motion'
import { ThemeContext } from 'lib/theme'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import classnames from 'classnames'

export const CategorySelectorItem = ({ activeColor, className, children, label, query, name, selected, ...rest }) => {
  const colors = useContext(ThemeContext)
  const router = useRouter()
  const page = router.route.split('/')[1]
  return (
    <motion.a
      className={classnames('text-lg font-display cursor-pointer pl-2', className)}
      whileHover='hover'
      initial='initial'
      animate={selected ? 'hover' : 'initial'}
      variants={{
        initial: {
          color: colors.gray[400]
        },
        hover: {
          color: colors[activeColor] || '#75BEEF'
        }
      }}
      onClick={() => {
        router.push(`/${page}?${query}=${name}`, `/${page}?${query}=${name}`, { shallow: true })
      }}
      {...rest}
    >
      {children}
      {label}
    </motion.a>
  )
}

CategorySelectorItem.propTypes = {
  activeColor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  label: PropTypes.string,
  query: PropTypes.string,
  name: PropTypes.string,
  selected: PropTypes.bool
}

const CategorySelector = ({ direction = 'row', className, categories, selected, ...rest }) => {
  return (
    <div
      className={classnames('flex', {
        'flex-col space-y-2 w-max sticky top-0 self-start': direction === 'column',
        'flex-row space-x-2 w-full divide-x-2': direction === 'row'
      }, className)}
    >
      {categories.map((ci, i) => <CategorySelectorItem selected={ci.name === selected} key={`category-selector-item-${i}`} {...ci} {...rest} />)}
    </div>
  )
}

CategorySelector.propTypes = {
  categories: PropTypes.array,
  selected: PropTypes.string,
  direction: PropTypes.string,
  className: PropTypes.string
}

export default CategorySelector
