import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'

const useDocumentBackground = () => {
  const { scrollY, scrollYProgress } = useViewportScroll()
  useEffect(() => scrollYProgress.onChange(latest => {
    if (latest > 1 && document.documentElement.style.backgroundColor !== '#482584') {
      document.documentElement.style.backgroundColor = '#482584'
    } else if (latest < 0 && document.documentElement.style.backgroundColor !== '#F8F8F8') {
      document.documentElement.style.backgroundColor = '#F8F8F8'
    } else {
      if (scrollYProgress.prev > latest && document.documentElement.style.backgroundColor !== '#F8F8F8') {
        // going up
        document.documentElement.style.backgroundColor = '#F8F8F8'
      } else if (scrollYProgress.prev < latest && document.documentElement.style.backgroundColor !== '#482584') {
        // going down
        document.documentElement.style.backgroundColor = '#482584'
      }
    }
  }), [scrollYProgress])

  return [scrollY]
}

export default useDocumentBackground
