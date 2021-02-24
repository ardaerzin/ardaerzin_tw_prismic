import CardItem from 'Components/Common/Card'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { CardTitle } from 'Components/Common/Headers'
import BlogAuthorArea from './authorArea'

const BlogPostThumbnail = ({ cover, title, date, category, excerpt, ...rest }) => {
  return (
    <CardItem>
      <div className='aspect-w-16 aspect-h-9'>
        <div>
          <Image
            src={`${cover.url}`}
            alt={`${title} cover`}
            loading='lazy'
            layout='fill'
          />
        </div>
      </div>
      <div className='flex flex-col space-y-2 p-4 flex-grow'>
        <span className='text-xs uppercase font-medium tracking-tighter text-accent3'>
          #{category}
        </span>
        <CardTitle>
          {title[0].text}
        </CardTitle>
        <p
          className='
            font-body
            text-md text-left text-gray-500
            leading-snug
            line-clamp-4
          '
        >
          {excerpt}
        </p>
        <BlogAuthorArea
          date={date}
        />
      </div>
    </CardItem>
  )
}

BlogPostThumbnail.propTypes = {
  cover: PropTypes.object,
  title: PropTypes.array,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string
}

export default BlogPostThumbnail