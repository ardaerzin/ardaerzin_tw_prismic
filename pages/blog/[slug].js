import { findSimilarBlogPosts, getBlogPostBySlug, getBlogPosts } from 'lib/prismic/endpoints'
import { HeroHeader, SectionSubHeader } from 'Components/Common/Headers'
import BlogAuthorArea from 'Components/Blog/BlogPost/authorArea'
import BlogPostThumbnail from 'Components/Blog/BlogPost/item'
import { RichText } from 'prismic-reactjs'
import Page from 'Components/Common/Page'
import PropTypes from 'prop-types'
import Image from 'next/image'
import BlogPostCategoryPill from 'Components/Blog/BlogPost/CategoryPill'

const BlogPostPage = ({ post, similarposts, ...rest }) => {
  const { cover, title, date, excerpt, content, category } = post || {}
  return (
    <Page className='pt-8 md:pt-12 pb-20 align-start items-start divide-y-2'>
      {
        post && (
          <>
            <div className='max-w-prose font-body space-y-4 mt-8'>
              <div
                className='w-full max-w-4xl rounded-lg overflow-hidden'
              >
                <Image
                  src={`${cover.url}`}
                  alt={`${title[0].text} cover`}
                  width={cover.dimensions.width}
                  height={cover.dimensions.height}
                  loading='eager'
                  layout='responsive'
                />
              </div>
              <div
                className='flex flex-row justify-between items-center'
              >
                <BlogAuthorArea
                  className='self-start'
                  date={date}
                />
                <BlogPostCategoryPill category={category} large />
              </div>
              <HeroHeader className='self-start'>
                {title[0].text}
              </HeroHeader>
              <p className='text-xl leading-relaxed text-gray-600'>
                {excerpt}
              </p>
              <RichText
                render={content}
              />
            </div>
            <div
              className='
                max-w-prose
                mt-6
                pt-6
                space-y-6
              '
            >
              <SectionSubHeader>
                <span className='text-accent4'>similar</span> posts
              </SectionSubHeader>
              <div
                className='
                  grid
                  w-full
                  grid-cols-1 sm:grid-cols-2
                  gap-y-4
                  sm:gap-x-4
                '
                {...rest}
              >
                {similarposts.map((sp, i) => <BlogPostThumbnail key={`similar-post-item-${i}`} {...sp} />)}
              </div>
            </div>
          </>
        )
      }
    </Page>
  )
}

BlogPostPage.propTypes = {
  post: PropTypes.object,
  similarposts: PropTypes.array
}

export default BlogPostPage

export const getStaticProps = async ({ params }) => {
  const [{ node: post }] = await getBlogPostBySlug(params.slug)
  const similarposts = (await findSimilarBlogPosts(`{ documentId:"${post._meta.id}", max:2 }`)).map((si, i) => si.node)
  return {
    props: {
      post,
      similarposts
    }
  }
}

export async function getStaticPaths() {
  const postsData = await getBlogPosts()
  const paths = postsData.map((pd, i) => ({ params: { slug: encodeURIComponent(pd.node._meta.uid) } }))
  return {
    paths,
    fallback: true
  }
}
