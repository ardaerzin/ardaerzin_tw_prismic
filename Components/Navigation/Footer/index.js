import useIsomorphicComponentSize from 'lib/hooks/useIsomorphicComponentSize'
import { m as motion, useSpring, useTransform } from 'framer-motion'
import NavLink from 'Components/Navigation/Common/NavLink'
import { useEffect, useRef, useState } from 'react'
import twcolors from 'tailwindcss/colors'
import PropTypes from 'prop-types'
import NavLinks from '../Links'

const FooterNavLink = (props) => <NavLink colors={{ initial: twcolors.white, active: '#FFCA58' }} {...props} />

const Footer = ({ scrollY, pageRef }) => {
  const [{ top, bottom }, setConstraints] = useState({ top: 0, bottom: 0 })
  const ref = useRef()
  const { height: footerHeight } = useIsomorphicComponentSize(ref)
  const { height: pageHeight } = useIsomorphicComponentSize(pageRef)
  useEffect(() => {
    const top = document.body.getBoundingClientRect().height - footerHeight - window?.innerHeight
    const bottom = top + footerHeight
    setConstraints({ top, bottom })
  }, [footerHeight, pageHeight])

  const opacity = useSpring(useTransform(scrollY, [0, top, bottom], [0, 0, 1]), { damping: 40, stiffness: 400 })
  const y = useSpring(useTransform(scrollY, [0, top, bottom], [0, 100, 0]), { damping: 40, stiffness: 400 })

  return (
    <motion.div
      ref={ref}
      className='flex flex-col container p-4 justify-center items-center mx-auto space-y-12 md:space-y-6'
      style={{
        opacity,
        y
      }}
    >
      <div className='grid grid-flow-row grid-cols-2 w-full md:w-auto md:grid-flow-col gap-x-4 gap-y-4 md:gap-y-0 '>
        { NavLinks.map((nl, i) => <FooterNavLink key={`footer-link-${i}`} {...nl} />) }
      </div>
      <span className='font-body text-gray-200'>
        made with {'<3'} in Berlin
      </span>
    </motion.div>
  )
}

Footer.propTypes = {
  scrollY: PropTypes.object,
  pageRef: PropTypes.object
}

export default Footer
