import classnames from 'classnames'
import PropTypes from 'prop-types'

const CardItem = ({ className, ...rest }) => {
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
}

CardItem.propTypes = {
  className: PropTypes.string
}

export default CardItem
