import { Layout } from 'components/Layout'
import { getRootUrl } from 'utils/rootUrl'
import { posts, Post } from 'data'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout>
      {[...posts, ...posts].map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a>
            <h1>{post.title}</h1>
          </a>
        </Link>
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
