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

export const getServerSideProps = async ({ req }) => {
  const post = posts.map(post => ({ ...post, image: getRootUrl(req) + post.image }))[0]
  return {
    props: post,
  }
}

export default PostPage
