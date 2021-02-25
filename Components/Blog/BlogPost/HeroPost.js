/* eslint-disable jsx-a11y/anchor-is-valid */
import { CardTitle } from 'Components/Common/Headers'
import CardItem from 'Components/Common/Card'
import BlogAuthorArea from './authorArea'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

const BlogHeroPost = ({ cover, title, excerpt, date, _meta: { uid } }) => {
  return (
    <Link href={`/blog/${uid}`}>
      <a>
        <CardItem
          className='
            md:flex-row
            w-full
            p-8
            mb-8
            md:space-x-8
            space-y-4 md:space-y-0
            cursor-pointer
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
        </CardItem>
      </a>
    </Link>
  )
}

BlogHeroPost.propTypes = {
  cover: PropTypes.object,
  title: PropTypes.array,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  _meta: PropTypes.object
}

export default BlogHeroPost
