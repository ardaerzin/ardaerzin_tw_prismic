import classnames from 'classnames'
import PropTypes from 'prop-types'

const BlogPostCategoryPill = ({ category, overlay = false, large = false, color = 'brand' }) => {
  return (
    <div
      className={classnames(`
        text-white
        font-semibold font-display
        bg-${color}
        rounded-full
        uppercase
        shadow-lg
        ring-1 ring-inset ring-accent4
      `, {
        'absolute top-4 right-4': overlay,
        'self-start': !overlay,
        'text-sm py-2 px-4': large,
        'text-xxs py-1 px-2': !large
      })}
    >
      <b>#</b>{category}
    </div>
  )
}

BlogPostCategoryPill.propTypes = {
  category: PropTypes.string,
  overlay: PropTypes.bool,
  large: PropTypes.bool,
  color: PropTypes.string
}

export default BlogPostCategoryPill
