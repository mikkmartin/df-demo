import { Layout } from 'components/Layout'
import { products, Product } from 'data'
import Head from 'next/head'
import { getRootUrl } from 'utils/rootUrl'

const PostPage = (product: Product) => {
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <h1>{product.title}</h1>
      <img src={product.image} />
    </Layout>
  )
}

export const getServerSideProps = async ({ req }) => {
  const post = products[0]
  post.image = getRootUrl(req) + post.image
  return {
    props: post,
  }
}

export default PostPage
