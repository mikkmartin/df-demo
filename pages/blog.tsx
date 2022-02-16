import { Layout } from 'components/Layout'
import { styled } from '../stitches.config'
import { getRootUrl } from 'utils/rootUrl'
import { posts, Post } from 'data'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout>
      {posts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <LinkItem>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </LinkItem>
        </Link>
      ))}
    </Layout>
  )
}

const LinkItem = styled('a', {
  cursor: 'pointer',
  display: 'block',
  paddingX: '$3',
  paddingTop: '$2',
  paddingBottom: '$3',
  width: '100%',
  h1: {
    color: 'Black',
    fontWeight: 200,
    margin: 0,
  },
  p: {
    color: 'gray',
    margin: 0,
  },
  '&:hover': {
    backgroundColor: '#EAEAEA',
    borderRadius: 4
  },
})

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
