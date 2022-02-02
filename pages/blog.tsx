import { Layout } from 'components/Layout'
import { getRootUrl } from 'utils/rootUrl'
import { posts, Post } from 'data'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout>
      {posts.map(post => (
        <div>
          <Link href={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      posts: posts.map(product => ({
        ...product,
        image: getRootUrl(req) + product.image,
      })),
    },
  }
}

export default Blog
