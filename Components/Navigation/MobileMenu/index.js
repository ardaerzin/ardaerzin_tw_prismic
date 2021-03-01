import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
import { useState, useEffect, useRef } from 'react'
import { m as motion } from 'framer-motion'
import { useRouter } from 'next/router'
import MobileMenuItem from './Item'
import MenuToggle from './Toggle'
import NavLinks from '../Links'

const MobileMenuContainer = (props) => {
  const [mobileMenuState, setMobileMenuState] = useState(false)
  const ref = useRef()

  /**
   * disable body scroll when mobile menu is open
   */
  useEffect(() => {
    const current = ref.current
    if (!current) return
    if (mobileMenuState) {
      disableBodyScroll(current)
    } else {
      enableBodyScroll(current)
    }
  }, [mobileMenuState])

  /**
   * disable menu when route change is completed
   */
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      setTimeout(() => {
        setMobileMenuState(false)
      }, 500)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <MenuToggle
        onClick={() => {
          setMobileMenuState(!mobileMenuState)
        }}
        state={mobileMenuState}
      />
      <motion.div
        motion
        className='fixed z-40 md:hidden'
        animate={mobileMenuState ? 'open' : 'closed'}
        initial='closed'
        variants={{
          open: {
            background: '#482584',
            top: '0rem',
            right: '0rem',
            width: '100%',
            height: '100%',
            transition: {
              when: 'beforeChildren',
              type: 'spring',
              stiffness: 400,
              damping: 40,
              staggerChildren: 0.05
            },
            borderRadius: '0rem'
          },
          closed: {
            background: '#75BEEF',
            borderRadius: '3rem',
            top: '1rem',
            right: '1rem',
            width: '3rem',
            height: '3rem',
            overflow: 'hidden',
            transition: {
              staggerDirection: -1,
              when: 'afterChildren',
              type: 'spring',
              stiffness: 400,
              damping: 40,
              staggerChildren: 0.05
            }
          }
        }}
      >
        <div
          ref={ref}
          className='flex flex-wrap justify-start items-start content-start w-full h-full text-white overflow-y-scroll'
        >
          <motion.div
            className='flex flex-col self-start px-4 py-8 space-y-2 sticky top-0 bg-brand z-10 w-full'
            variants={{
              open: {
                y: 0,
                opacity: 1
              },
              closed: {
                y: '-100%',
                opacity: 0
              }
            }}
            transition={{
              type: 'spring',
              damping: 40,
              stiffness: 400
            }}
          >
            <h4
              className='font-display font-bold text-xl border-b-2 border-white'
            >
              arda erzin
            </h4>
            <p
              className='font-body'
            >
              self taught programmer & entrepreneur living in Berlin
            </p>
          </motion.div>
          {
            NavLinks.map((nl, i) => {
              return (
                <MobileMenuItem key={`mobile-menu-item-${i}`} index={i} {...nl} />
              )
            })
          }
        </div>
      </motion.div>
    </>
  )
}

export default MobileMenuContainer
