import { GetServerSideProps } from 'next'
import { getRootUrl } from 'utils/rootUrl'
import { posts, Post } from 'data'

export const getServerSideProps: GetServerSideProps<Post> = async ({ req, query }) => {
  const slug = query.post
  const post = posts
    .map(post => ({ ...post, image: getRootUrl(req) + post.image }))
    .find(post => post.slug === slug)
  if (!post) return { notFound: true }
  return {
    props: post,
  }
}
