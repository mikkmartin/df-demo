import { Layout } from 'components/Layout'
import { posts, Post } from 'data'
import Head from 'next/head'
import { getRootUrl } from 'utils/rootUrl'

const PostPage = (post: Post) => {
  const { title } = post
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}

export const getServerSideProps = async ({ req }) => {
  const post = posts[0]
  post.coverImage = getRootUrl(req) + post.coverImage
  return {
    props: post,
  }
}

export default PostPage
