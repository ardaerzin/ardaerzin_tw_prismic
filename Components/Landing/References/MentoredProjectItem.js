import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'

const MentoredProjectItem = ({ img, name, description, studentproject }) => {
  return (
    <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-md p-8'>
      {
        studentproject && (
          <div className='font-display bg-green-500 font-bold tracking-tight text-white text-xxs rounded-full py-2 px-3 self-end uppercase'>
            student project
          </div>
        )
      }
      <div className='max-w-ref-image mx-auto w-full'>
        <Image
          src={`${img.url}`}
          alt={`${name} cover`}
          width={img.dimensions.width}
          height={img.dimensions.height}
          loading='lazy'
          layout='responsive'
        />
      </div>
      <div
        className='font-body text-md text-left sm:text-center tracking-tight'
      >
        <RichText render={description} />
      </div>
    </div>
  )
}

MentoredProjectItem.propTypes = {
  img: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.array,
  studentproject: PropTypes.bool
}

export default MentoredProjectItem
