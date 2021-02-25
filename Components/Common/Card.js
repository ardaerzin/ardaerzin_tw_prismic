import classnames from 'classnames'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const CardItem = forwardRef(({ className, ...rest }, props) => {
  return (
    <div
      className={classnames(`
        flex flex-col
        bg-white
        rounded-lg
        overflow-hidden
        shadow-md
      `, className)}
      {...rest}
    />
  )
})

CardItem.propTypes = {
  className: PropTypes.string
}

export default CardItem
