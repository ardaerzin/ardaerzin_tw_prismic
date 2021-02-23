import classnames from 'classnames'
import PropTypes from 'prop-types'

export const HeroHeader = ({ className, ...rest }) => {
  return (
    <h1
      className={classnames(`
        text-6xl
        lg:text-7xl
        font-black
        font-display
        max-w-prose
        tracking-tight
      `, className)}
      {...rest}
    />
  )
}

HeroHeader.propTypes = {
  className: PropTypes.string
}

export const SectionHeader = ({ className, ...rest }) => {
  return (
    <p
      className={classnames(`
        lg:text-6xl
        text-4xl
        font-black
        font-display
        tracking-tight
        max-w-header-prose
      `, className)}
      {...rest}
    />
  )
}

SectionHeader.propTypes = {
  className: PropTypes.string
}

export const SectionSubHeader = ({ className, ...rest }) => {
  return (
    <h2
      className={classnames(`
        lg:text-4xl
        text-3xl
        font-black
        font-display
        tracking-tight
        max-w-prose
      `, className)}
      {...rest}
    />
  )
}

SectionSubHeader.propTypes = {
  className: PropTypes.string
}

export const CardTitle = ({ className, ...rest }) => {
  return (
    <h2
      className={classnames(`
        text-2xl
        font-bold
        font-display
        tracking-tight
        max-w-prose
      `, className)}
      {...rest}
    />
  )
}

CardTitle.propTypes = {
  className: PropTypes.string
}
