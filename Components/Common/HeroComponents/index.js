import classnames from 'classnames'
import PropTypes from 'prop-types'

export const HeroTextSection = ({ className, ...rest }) => {
  return (
    <div
      className={classnames(`
        flex flex-col flex-grow
        space-y-4
        w-full max-w-prose
      `, className)}
      {...rest}
    />
  )
}

HeroTextSection.propTypes = {
  className: PropTypes.string
}

export const HeroDescription = ({ className, ...rest }) => {
  return (
    <p
      className={classnames(`
        font-body
        text-2xl lg:text-3xl
      `, className)}
      {...rest}
    />
  )
}

HeroDescription.propTypes = {
  className: PropTypes.string
}
