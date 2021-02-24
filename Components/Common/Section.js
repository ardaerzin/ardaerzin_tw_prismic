import classnames from 'classnames'
import PropTypes from 'prop-types'

const CommonSection = ({ className, ...rest }) => {
  return (
    <section
      className={
        classnames(`
          flex flex-col
          lg:flex-row
          py-16 md:py-24 lg:py-32
          max-w-screen-lg w-full
          self-center
          mx-auto
      `, className)
      }
      {...rest}
    />
  )
}

CommonSection.propTypes = {
  className: PropTypes.string
}

export default CommonSection
