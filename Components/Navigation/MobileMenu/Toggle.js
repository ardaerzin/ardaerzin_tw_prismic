import { m as motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Path = ({ state, colors, ...rest }) => {
  return (
    <motion.path
      fill='transparent'
      strokeWidth='3'
      stroke='#fff'
      strokeLinecap='round'
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 400
      }}
      {...rest}
    />
  )
}

Path.propTypes = {
  state: PropTypes.bool,
  colors: PropTypes.object
}

const MenuToggle = ({
  colors,
  toggle,
  state,
  ...rest
}) => {
  const animation = useAnimation()
  const x = useRef(state ? 'open' : 'closed')
  useEffect(() => {
    animation.start(state ? 'open' : 'closed')
  }, [state, animation])
  return (
    <motion.div
      {...rest}
      className='fixed md:hidden top-4 right-4 cursor-pointer bg-accent3 w-12 h-12 flex justify-center items-center rounded-full shadow-md z-50'
      animate={animation}
      initial={x.current}
    >
      <motion.svg
        width='22'
        height='22'
        viewBox='0 0 22 22'
        className='mt-1'
      >
        <Path
          d=''
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
          state={state}
          colors={colors}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { scale: 1 },
            open: { scale: 0 }
          }}
          style={{
            scale: 0
          }}
          state={state}
          colors={colors}
        />
        <Path
          d=''
          state={state}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
          colors={colors}
        />
      </motion.svg>
    </motion.div>
  )
}

MenuToggle.propTypes = {
  pathVariants: PropTypes.array,
  toggle: PropTypes.func,
  state: PropTypes.bool,
  colors: PropTypes.object
}

export default MenuToggle
