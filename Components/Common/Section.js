import classnames from 'classnames'
import PropTypes from 'prop-types'

const CommonSection = ({ className, ...rest }) => {
  return (
    <section
      className={
        classnames(`
          flex flex-col
          lg:flex-row
          py-24
          max-w-screen-lg
          w-full
          self-center
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
