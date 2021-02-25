import { getBlogPostBySlug, getBlogPosts } from 'lib/prismic/endpoints'
import Page from 'Components/Common/Page'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { HeroHeader, SectionHeader } from 'Components/Common/Headers'
import BlogAuthorArea from 'Components/Blog/BlogPost/authorArea'
import { RichText } from 'prismic-reactjs'
import { parseDateString } from 'lib/date'
import BlogPostThumbnail from 'Components/Blog/BlogPost/item'

const BlogPostPage = ({ post, ...rest }) => {
  const { cover, title, date, excerpt, content, category } = post || {}
  return (
    <Page className='pt-8 md:pt-12 pb-20 align-start items-start divide-y-4'>
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
                <span className='bg-accent3 rounded-full py-1 px-2 font-display text-xs text-white'>
                  {category}
                </span>
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
                mt-12
                pt-4
              '
            >
              share area
            </div>
            <div
              className='
                max-w-prose
                mt-12
                pt-12
              '
            >
              <SectionHeader>
                similar posts
              </SectionHeader>
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
                <BlogPostThumbnail {...post} />
                <BlogPostThumbnail {...post} />
              </div>
            </div>
          </>
        )
      }
    </Page>
  )
}

BlogPostPage.propTypes = {
  post: PropTypes.object
}

export default BlogPostPage

export const getStaticProps = async ({ params }) => {
  const [{ node }] = await getBlogPostBySlug(params.slug)
  return {
    props: { post: node }
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
