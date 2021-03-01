import PropTypes from 'prop-types'
import classnames from 'classnames'

const ItemHighlights = ({ size = 'normal', highlights }) => {
  return (
    <ul
      className={classnames('ml-8 pt-2 space-y-2 list-disc font-body text-lg text-gray-600 leading-snug', {
        'text-xl': size === 'normal',
        'text-lg': size !== 'normal'
      })}
    >
      {highlights.map((hi, i) => <li key={`highlight-item-${i}`}>{hi}</li>)}
    </ul>
  )
}

ItemHighlights.propTypes = {
  size: PropTypes.string,
  highlights: PropTypes.array
}

const ItemRemark = ({ size = 'normal', ...rest }) => {
  return (
    <p
      className={classnames('font-body mt-2 line break-normal', {
        'text-xl': size === 'normal',
        'text-lg': size !== 'normal'
      })}
      {...rest}
    />
  )
}

ItemRemark.propTypes = {
  size: PropTypes.string
}

const ItemHead = ({ size = 'normal', title, position, location, date }) => {
  return (
    <div className='flex flex-row w-full justify-between'>
      <div className='flex flex-col font-display'>
        <h4 className={classnames('font-semibold tracking-tight', {
          'text-2xl': size === 'normal',
          'text-xl': size !== 'normal'
        })}>
          {size !== 'normal' && <span className='text-accent4'>{'</> '}</span>} {title}
        </h4>
        {position && <span className={classnames('text-lg text-brand font-medium', {
          'text-lg': size === 'normal',
          'text-md': size !== 'normal'
        })}>{position}</span>}
      </div>
      <div className='flex flex-col items-end font-display text-right w-max'>
        {location && <span className='text-md font-semibold text-gray-500'>{location}</span>}
        {date && <span className='text-sm text-gray-500 whitespace-nowrap'>{date}</span>}
      </div>
    </div>
  )
}

ItemHead.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string
}

const SectionSubItem = ({ title, remarks, url, location, position, date, highlights }) => {
  return (
    <div className='flex flex-col ml-1 space-y-1'>
      <ItemHead size='smaller' {...{ title, position, location, date }} />
      {remarks && <ItemRemark size='smaller'>{remarks}</ItemRemark>}
      {highlights && <ItemHighlights size='smaller' {...{ highlights }} />}
    </div>
  )
}

SectionSubItem.propTypes = {
  remarks: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  highlights: PropTypes.array
}

const SectionItem = ({ subItems, title, remarks, url, position, location, date, highlights }) => {
  return (
    <div className='flex flex-col md:ml-4'>
      <ItemHead {...{ title, position, location, date }} />
      {remarks && <ItemRemark>{remarks}</ItemRemark>}
      {highlights && <ItemHighlights {...{ highlights }} />}
      {subItems && <div className='pl-3 mt-6 border-l-2 border-accent4 space-y-4 py-2'>{subItems.map((si, ii) => <SectionSubItem {...si} key={`sub-item-${ii}`} />)}</div>}
    </div>
  )
}

SectionItem.propTypes = {
  title: PropTypes.string,
  remarks: PropTypes.string,
  url: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  highlights: PropTypes.array,
  subItems: PropTypes.array
}

export default SectionItem
