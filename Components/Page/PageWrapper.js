import { m as motion, useSpring, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const PageWrapper = ({ forwardRef, scrollY, ...rest }) => {
  const [{ top, bottom }, setConstraints] = useState({ top: 0, bottom: 0 })
  useEffect(() => {
    if (!forwardRef?.current) return
    const top = forwardRef?.current?.getBoundingClientRect()?.bottom - forwardRef?.current?.getBoundingClientRect()?.height - window?.innerHeight + 50
    const bottom = forwardRef?.current?.getBoundingClientRect()?.bottom - window?.innerHeight
    setConstraints({ top, bottom })
  }, [forwardRef])

  const borderRange = [0, 0, 24]
  const borderRadius = useSpring(useTransform(scrollY, [0, top, bottom], borderRange), { damping: 40, stiffness: 400 })
  const translateZ = useSpring(useTransform(scrollY, [0, top, bottom], [0, 0, -5]), { damping: 40, stiffness: 400 })

  return (
    <motion.div
      id='page-wrapper'
      style={{
        transformPerspective: translateZ,
        transformStyle: 'preserve-3d',
        borderRadius
      }}
      transformTemplate={
        ({ transformPerspective }) => `translateZ(${transformPerspective})`
      }
      {...rest}
    />
  )
}

PageWrapper.propTypes = {
  forwardRef: PropTypes.object,
  scrollY: PropTypes.object
}

export default PageWrapper
