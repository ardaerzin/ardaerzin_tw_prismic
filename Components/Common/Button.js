import { m as motion } from 'framer-motion'
import classnames from 'classnames'
import { useContext, forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'lib/theme'

const Button = forwardRef(({ disabled = false, color = 'accent3', hint = 'DEFAULT', className, ...rest }, ref) => {
  const colors = useContext(ThemeContext)
  const buttonColor = useMemo(() => {
    const x = colors[color]
    switch (typeof x) {
      case 'object':
        return colors[color][hint] || colors[color][500]
      default:
        return colors[color]
    }
  }, [color, hint, colors])
  return (
    <motion.button
      ref={ref}
      href='/'
      className={classnames(`
        shadow
        flex
        py-3 md:py-2
        px-8 md:px-8
        items-center justify-center
        rounded-md
        border border-transparent
        font-display font-medium
        text-base text-white md:text-lg
      `, className)}
      whileHover='hover'
      initial='initial'
      animate={disabled ? 'disabled' : 'initial'}
      variants={{
        disabled: {
          opacity: 0.5
        },
        initial: {
          opacity: 1,
          backgroundColor: buttonColor,
          boxShadow: `0 0 0 0px ${buttonColor}`
        },
        hover: {
          opacity: 1,
          boxShadow: `0 0 0 2px ${buttonColor}`
        }
      }}
      disabled={disabled}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 400
      }}
      {...rest}
    />
  )
})

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  hint: PropTypes.number
}

export default Button
