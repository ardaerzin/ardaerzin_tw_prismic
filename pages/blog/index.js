import { HeroDescription, HeroTextSection } from 'Components/Common/HeroComponents'
import { HeroHeader } from 'Components/Common/Headers'
import CommonSection from 'Components/Common/Section'
import { getBlogPosts } from 'lib/prismic/endpoints'
import BlogPostList from 'Components/Blog/PostList'
import Page from 'Components/Common/Page'
import PropTypes from 'prop-types'
import CategorySelector from 'Components/Common/CategorySelector'
import { useRouter } from 'next/router'

const Blog = ({ posts, ...rest }) => {
  const { query: { category = 'all' } } = useRouter()
  const filteredPosts = posts.filter((pi, i) => category !== 'all' ? (pi.category === category) : true)
  return (
    <Page>
      <CommonSection
        className='space-y-8 lg:space-y-8 pb-0 md:pb-0 lg:pb-0 flex-wrap'
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
        <CategorySelector
          query='category'
          selected={category}
          categories={[
            {
              name: 'all',
              label: 'all'
            },
            {
              name: 'project',
              label: 'projects'
            },
            {
              name: 'idea',
              label: 'ideas'
            },
            {
              name: 'opinion',
              label: 'opinions'
            }
          ]}
        />
      </CommonSection>
      <CommonSection
        className='lg:flex-col'
      >
        <BlogPostList posts={filteredPosts} />
      </CommonSection>
    </Page>
  )
}

export async function getServerSideProps({ query }) {
  const posts = (await getBlogPosts()).map((pi) => pi.node)
  return {
    props: {
      posts
    }
  }
}

Blog.propTypes = {
  posts: PropTypes.array
}

export default Blog
