import { m as motion, useSpring, useTransform } from 'framer-motion'
import { forwardRef, useEffect, useState } from 'react'
import NavLink from 'Components/Navigation/Common/NavLink'
import twcolors from 'tailwindcss/colors'
import NavLinks from '../Links'
import PropTypes from 'prop-types'

const FooterNavLink = (props) => <NavLink colors={{ initial: twcolors.white, active: '#FFCA58' }} {...props} />

const Footer = forwardRef(({ scrollY }, ref) => {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 })
  useEffect(() => {
    const top = ref?.current?.getBoundingClientRect()?.bottom - ref?.current?.getBoundingClientRect()?.height - window?.innerHeight
    const bottom = ref?.current?.getBoundingClientRect()?.bottom - window?.innerHeight
    setConstraints({ top, bottom })
  }, [ref])
  const opacity = useSpring(useTransform(scrollY, [0, constraints.top, constraints.bottom], [0, 0, 1]), { damping: 40, stiffness: 400 })
  return (
    <motion.div
      ref={ref}
      className='flex flex-col container p-4 justify-center items-center mx-auto space-y-12 md:space-y-6'
      style={{
        opacity
      }}
    >
      <div className='grid grid-flow-row grid-cols-2 w-full md:w-auto md:grid-flow-col gap-x-4 gap-y-4 md:gap-y-0 '>
        { NavLinks.map((nl, i) => <FooterNavLink key={`footer-link-${i}`} {...nl} />) }
      </div>
      <span className='font-body text-gray-500'>
        made with {'<3'} in Berlin
      </span>
    </motion.div>
  )
})

Footer.propTypes = {
  scrollY: PropTypes.object
}

export default Footer
