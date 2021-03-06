/* eslint-disable jsx-a11y/anchor-is-valid */
import CardItem from 'Components/Common/Card'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { CardTitle } from 'Components/Common/Headers'
import BlogAuthorArea from './authorArea'
import Link from 'next/link'
import BlogPostCategoryPill from './CategoryPill'

const BlogPostThumbnail = ({ cover, title, date, category, excerpt, _meta: { uid }, ...rest }) => {
  return (
    <Link href={`/blog/${uid}`}>
      <a>
        <CardItem className='cursor-pointer self-stretch h-full'>
          <div className='aspect-w-16 aspect-h-9 relative'>
            <div>
              <Image
                src={`${cover.url}`}
                alt={`${title} cover`}
                loading='lazy'
                layout='fill'
              />
              <BlogPostCategoryPill category={category} overlay />
            </div>
          </div>
          <div className='flex flex-col space-y-2 p-4 flex-grow'>
            <CardTitle>
              {title[0].text}
            </CardTitle>
            <p
              className='
                font-body
                text-md text-left text-gray-500
                leading-snug
                line-clamp-4
                flex-grow
              '
            >
              {excerpt}
            </p>
            <BlogAuthorArea
              date={date}
            />
          </div>
        </CardItem>
      </a>
    </Link>
  )
}

BlogPostThumbnail.propTypes = {
  cover: PropTypes.object,
  title: PropTypes.array,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  _meta: PropTypes.object
}

export default BlogPostThumbnail
