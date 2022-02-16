import { GetServerSideProps } from 'next'
import { Layout } from 'components/Layout'
import { getRootUrl } from 'utils/rootUrl'
import { posts, Post } from 'data'

const PostPage = (post: Post) => {
  const { title, content } = post
  return (
    <Layout>
      <h1>{title}</h1>
      {content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </Layout>
  )
}

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

export default PostPage
