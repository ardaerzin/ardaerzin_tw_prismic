import { m as motion } from 'framer-motion'
import { useMemo } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const MyInput = ({ variant = 'input', hasError, ...rest }) => {
  const Comp = useMemo(() => motion[variant], [variant])
  return (
    <Comp
      className={classnames(`
        border-0 border-b
        focus:outline-none focus:border-brand focus:ring-0
        font-body
        text-base
        resize-none
        p-0 pl-1 pb-1 pt-2
      `, {

      })}
      variants={{

      }}
      transition={{
        duration: 5
      }}
      {...rest}
    />
  )
}

MyInput.propTypes = {
  variant: PropTypes.string,
  hasError: PropTypes.bool
}

export default MyInput
