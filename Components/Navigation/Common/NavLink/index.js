import { m as motion } from 'framer-motion'
import twcolors from 'tailwindcss/colors'
import Link from 'next/link'
import PropTypes from 'prop-types'

const NavLink = ({ label, colors: { active = '#75BEEF', initial = twcolors.trueGray[500] } = {}, ...rest }) => {
  return (
    <Link
      {...rest}
    >
      <motion.a
        className='font-display text-2xl font-semibold cursor-pointer text-center'
        whileHover='hover'
        initial='initial'
        variants={{
          initial: { color: initial },
          hover: { color: active }
        }}
        transition={{ duration: 0.3 }}
      >
        {'>'} {label}
      </motion.a>
    </Link>
  )
}

NavLink.propTypes = {
  label: PropTypes.string,
  colors: PropTypes.object
}

export default NavLink
