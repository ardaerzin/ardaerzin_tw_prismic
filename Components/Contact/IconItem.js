import PropTypes from 'prop-types'

const ContactIconItem = ({ icon: Icon, text, color, ...rest }) => {
  return (
    <div
      className={`
        flex flex-col
        items-center
        space-y-4
        text-${color}
        p-2
      `}
    >
      <div className={`rounded-full p-8 bg-${color}`}>
        <Icon
          className='text-2xl md:text-4xl lg:text-6xl'
          color='#fff'
        />
      </div>
      <span
        className='
          font-body
          text-md text-gray-500 text-center text-lg max-w-header-prose
        '
      >
        {text}
      </span>
    </div>
  )
}

ContactIconItem.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string
}

export default ContactIconItem
