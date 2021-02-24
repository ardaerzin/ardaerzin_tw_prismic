import { m as motion } from 'framer-motion'
import classnames from 'classnames'
import { useContext, forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'lib/theme'

const Button = forwardRef(({ color = 'accent3', hint = 'DEFAULT', className, ...rest }, ref) => {
  const theme = useContext(ThemeContext)
  const buttonColor = useMemo(() => {
    const x = theme.colors[color]
    switch (typeof x) {
      case 'object':
        return theme.colors[color][hint] || theme.colors[color][500]
      default:
        return theme.colors[color]
    }
  }, [color, hint, theme.colors])
  return (
    <motion.a
      ref={ref}
      href='/'
      className={classnames(`
        shadow self-start
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
      variants={{
        initial: {
          backgroundColor: buttonColor,
          boxShadow: `0 0 0 0px ${buttonColor}`
        },
        hover: {
          boxShadow: `0 0 0 2px ${buttonColor}`
        }
      }}
      {...rest}
    />
  )
})

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  hint: PropTypes.number
}

export default Button
