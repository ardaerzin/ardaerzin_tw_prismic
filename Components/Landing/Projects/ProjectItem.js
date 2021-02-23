import { CardTitle } from 'Components/Common/Headers'
import { parseDateString } from 'lib/date'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'
import Image from 'next/image'

const ProjectItem = ({ img, title, description, startDate }) => {
  return (
    <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-md'>
      <div className='w-full'>
        <Image
          src={`${img.url}`}
          alt={`${title} cover`}
          width={img.dimensions.width}
          height={img.dimensions.height}
          loading='lazy'
          layout='responsive'
        />
      </div>
      <div className='flex flex-col space-y-1 p-4'>
        <span
          className='font-display text-green-500 text-sm'
        >
          {parseDateString(startDate)}
        </span>
        <CardTitle>
          {title}
        </CardTitle>
        <div
          className='font-body text-md text-left'
        >
          <RichText render={description} />
        </div>
      </div>
    </div>
  )
}

ProjectItem.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.array,
  startDate: PropTypes.object
}
export default ProjectItem
