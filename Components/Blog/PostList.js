import { SectionHeader, SectionSubHeader } from 'Components/Common/Headers'
import PropTypes from 'prop-types'
import BlogHeroPost from './BlogPost/HeroPost'
import BlogPostThumbnail from './BlogPost/item'

const BlogPostList = ({ posts = [], ...rest }) => {
  const [heroPost, ...others] = posts
  return (
    <div className='flex flex-col space-y-8'>
      <SectionHeader>
        <span className='text-accent4'>most</span> recent
      </SectionHeader>
      <BlogHeroPost
        {...heroPost}
      />
      <SectionSubHeader>
        <span className='text-accent4'>older</span> posts
      </SectionSubHeader>
      {
        others.length > 0 ? (
          <div
            className='
              grid
              w-full
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              gap-y-4
              sm:gap-x-4
            '
            {...rest}
          >
            {others.map((pi, i) => <BlogPostThumbnail key={`mentored-item-${i}`} {...pi} />)}
          </div>
        ) : (
          <span className='text-lg font-body text-gray-400'>
            could not find other posts in this category
          </span>
        )
      }
    </div>
  )
}

BlogPostList.propTypes = {
  posts: PropTypes.array
}

export default BlogPostList
