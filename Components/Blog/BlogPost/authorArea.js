import { parseDateString } from 'lib/date'
import PropTypes from 'prop-types'
import Image from 'next/image'

const BlogAuthorArea = ({ date }) => {
  return (
    <div className='flex flex-row justify-start items-center space-x-2'>
      <div className='w-8 h-8 rounded-full bg-indigo-500'>
        <Image
          src='/images/arda2.png'
          quality={75}
          width={250}
          height={250}
          alt='arda'
          loading='eager'
        />
      </div>
      <div className='flex flex-col text-xs'>
        <span className='font-base text-sm'>
          arda erzin
        </span>
        {
          date && (
            <span className='text-gray-400'>
              {parseDateString(date)}
            </span>
          )
        }
      </div>
    </div>
  )
}

BlogAuthorArea.propTypes = {
  date: PropTypes.string
}

export default BlogAuthorArea
