import Button from 'Components/Common/Button'
import CardItem from 'Components/Common/Card'
import PropTypes from 'prop-types'

const SuperpeerServiceItem = ({ icon: Icon, description, title, url, ...rest }) => {
  return (
    <CardItem
      className='
        flex-grow flex-col
        items-start
        p-6
        space-y-4
      '
    >
      <div className='flex flex-row items-center space-x-2'>
        <Icon className='text-4xl' />
        <h3
          className='
            text-2xl
            font-display font-semibold
          '
        >
          {title}
        </h3>
      </div>
      <p
        className='
          font-body
          text-sm text-gray-500
        '
      >
        {description}
      </p>
      <Button>
        <span className='text-xs font-display'>
          book now
        </span>
      </Button>
    </CardItem>
  )
}

SuperpeerServiceItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.func
}

export default SuperpeerServiceItem
