import { m as motion, useSpring, useTransform } from 'framer-motion'
import useIsomorphicComponentSize from 'lib/hooks/useIsomorphicComponentSize'
import PropTypes from 'prop-types'
import { forwardRef, useEffect, useRef, useState } from 'react'

const PageWrapper = forwardRef(({ scrollY, ...rest }, ref) => {
  const [{ top = 0, bottom = 0, height = 0 }, setConstraints] = useState({ top: 0, bottom: 0 })
  const { height: pageHeight } = useIsomorphicComponentSize(ref)
  useEffect(() => {
    const footerHeight = document.body.getBoundingClientRect().height - pageHeight
    const top = pageHeight - window?.innerHeight
    const bottom = top + footerHeight
    setConstraints({ top, bottom })
  }, [pageHeight])

  const borderRange = [0, 0, 24]
  const borderRadius = useSpring(useTransform(scrollY, [0, top, bottom], borderRange), { damping: 40, stiffness: 400 })
  const translateZ = useSpring(useTransform(scrollY, [0, top, bottom], [0, 0, -5]), { damping: 40, stiffness: 400 })

  return (
    <motion.div
      ref={ref}
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
})

PageWrapper.propTypes = {
  scrollY: PropTypes.object
}

export default PageWrapper
