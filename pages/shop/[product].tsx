import { Layout } from 'components/Layout'
import { getRootUrl } from 'utils/rootUrl'
import { products, Product } from 'data'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { styled } from 'stitches.config'
import { Button } from 'components/Button'

const PostPage = (product: Product) => {
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <Content>
        <img src={product.image} />
        <div>
          <h1>{product.title}</h1>
          <h2>{product.price}€</h2>
        </div>
        <Button>Add to cart</Button>
      </Content>
    </Layout>
  )
}

const Content = styled('div', {
  display: 'grid',
  '> *': {
    gridArea: '1 / 1',
  },
  img: {
    zIndex: 2,
  },
  button: {
    placeSelf: 'end end',
  },
  '&:hover img': {
    zIndex: -1,
  },
})

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const post = products.map(product => ({ ...product, image: getRootUrl(req) + product.image }))[0]
  return {
    props: post,
  }
}

export default PostPage
