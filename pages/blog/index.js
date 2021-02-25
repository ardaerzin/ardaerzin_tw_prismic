import { HeroHeader } from 'Components/Common/Headers'
import CommonSection from 'Components/Common/Section'
import PropTypes from 'prop-types'
import Page from 'Components/Common/Page'
import { HeroDescription, HeroTextSection } from 'Components/Common/HeroComponents'
import { getBlogPosts } from 'lib/prismic/endpoints'
import BlogPostList from 'Components/Blog/PostList'

const Blog = ({ posts, ...rest }) => {
  return (
    <Page>
      <CommonSection
        className='lg:space-x-16 space-y-8 lg:space-y-0 pb-0 md:pb-0 lg:pb-0'
      >
        <HeroTextSection>
          <div
            className='
              flex flex-col
              font-display
              text-base w-max font-semibold
            '
          >
            <span>
              last updated on
            </span>
            <span className='border-b-2 text-brand'>Nov 13, 2020</span>
          </div>
          <HeroHeader>
            <span className='text-brand'>@arda</span>'s personal rant space
          </HeroHeader>
          <HeroDescription>
            join my occasional rant on entrepreneurial ecosystems, building products, dealing with partners & other stakeholders.
          </HeroDescription>
        </HeroTextSection>
      </CommonSection>
      <CommonSection
        className='lg:flex-col'
      >
        <BlogPostList posts={posts} />
      </CommonSection>
    </Page>
  )
}

Blog.propTypes = {
  posts: PropTypes.array
}

export default Blog

export async function getStaticProps() {
  const posts = await getBlogPosts()
  return {
    props: { posts }
  }
}
