import { m as motion } from 'framer-motion'
import Link from 'next/link'
import PropTypes from 'prop-types'

const MobileMenuItem = ({ index, url, label, description, href, ...rest }) => {
  return (
    <Link
      href={href}
    >
      <motion.a
        className='w-1/2 aspect-h-1 aspect-w-2 self-start justify-self-start bg-indigo-500'
        style={{
          background: `rgba(255, 255, 255, ${0 + (index % 3) * 0.1})`
        }}
        href={href}
        variants={{
          open: {
            x: 0,
            opacity: 1
          },
          closed: {
            x: `${(index % 2 === 0 ? -1 : 1) * 100}%`,
            opacity: 0
          }
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 400
        }}
        {...rest}
      >
        <div>
          <div className='flex flex-col justify-end h-full p-4'>
            <h4
              className='font-display text-xl font-bold uppercase tracking-tight'
            >
              {label}
            </h4>
            <span
              className='font-body text-lg font-normal'
            >
              {description}
            </span>
          </div>
        </div>
      </motion.a>
    </Link>
  )
}

MobileMenuItem.propTypes = {
  index: PropTypes.number,
  url: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string
}

export default MobileMenuItem
