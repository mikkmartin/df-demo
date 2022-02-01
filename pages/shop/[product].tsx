import { Layout } from 'components/Layout'
import { getRootUrl } from 'utils/rootUrl'
import { products, Product } from 'data'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const post = products.map(product => ({ ...product, image: getRootUrl(req) + product.image }))[0]
  return {
    props: post,
  }
}

export default PostPage
