import { m as motion } from 'framer-motion'
import twcolors from 'tailwindcss/colors'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const NavLink = ({ label, colors: { active = '#75BEEF', initial = twcolors.trueGray[500] } = {}, ...rest }) => {
  const router = useRouter()
  return (
    <Link
      {...rest}
    >
      <motion.a
        className='font-display text-lg font-semibold cursor-pointer text-center'
        whileHover='hover'
        initial='initial'
        variants={{
          initial: { color: initial },
          hover: { color: active }
        }}
        animate={router.pathname === rest.href ? 'hover' : 'initial'}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.a>
    </Link>
  )
}

NavLink.propTypes = {
  label: PropTypes.string,
  colors: PropTypes.object
}

export default NavLink
