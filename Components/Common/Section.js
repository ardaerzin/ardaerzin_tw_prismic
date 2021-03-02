import classnames from 'classnames'
import PropTypes from 'prop-types'

const CommonSection = ({ className, layout = 'flex', ...rest }) => {
  return (
    <section
      className={
        classnames(`
          py-16 md:py-24 lg:py-32
          max-w-screen-lg w-full
          self-center
          mx-auto
      `, {
          'flex flex-col lg:flex-row': layout === 'flex',
          grid: layout === 'grid'
        }, className)
      }
      {...rest}
    />
  )
}

CommonSection.propTypes = {
  className: PropTypes.string,
  layout: PropTypes.string
}

export default CommonSection
