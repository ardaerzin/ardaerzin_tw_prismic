import { CardTitle } from 'Components/Common/Headers'
import Image from 'next/image'
import PropTypes from 'prop-types'
import BlogAuthorArea from './authorArea'

const BlogHeroPost = ({ cover, title, excerpt, date }) => {
  return (
    <div
      className='
        flex md:flex-row flex-col
        bg-white
        rounded-lg
        overflow-hidden
        shadow-md
        w-full
        p-8
        mb-8
        md:space-x-8
        space-y-4 md:space-y-0
      '
    >
      <div
        className='
          w-full max-w-lg
        '
      >
        <div
          className='
            rounded-lg
            overflow-hidden
            relative
            aspect-w-16 aspect-h-9
          '
        >
          <Image
            src={`${cover.url}`}
            alt={`${title} cover`}
            loading='lazy'
            layout='fill'
          />
        </div>
      </div>

      <div className='flex flex-col space-y-2 max-w-prose'>
        <CardTitle>
          {title[0].text}
        </CardTitle>
        <p
          className='
            font-body
            text-md text-left text-gray-500
            leading-snug
            line-clamp-4
            max-w-prose
          '
        >
          {excerpt}
        </p>
        <BlogAuthorArea
          date={date}
        />
      </div>
    </div>
  )
}

BlogHeroPost.propTypes = {
  cover: PropTypes.object,
  title: PropTypes.object,
  excerpt: PropTypes.string,
  date: PropTypes.string
}

export default BlogHeroPost
