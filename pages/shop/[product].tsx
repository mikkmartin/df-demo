import { Layout } from 'components/Layout'
import { getRootUrl } from 'utils/rootUrl'
import { products, Product } from 'data'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { styled } from 'stitches.config'
import { Button } from 'components/Button'
import { FC } from 'react'

const PostPage: FC<Product> = props => {
  const { image, price, title, excerpt } = props

  return (
    <Layout>
      <Head>
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={excerpt} />
      </Head>
      <Content>
        <img src={image} alt="" />
        <div>
          <h1>{title}</h1>
          <h2>{price}€</h2>
        </div>
        <Button>Add to cart</Button>
      </Content>
    </Layout>
  )
}

const Content = styled('div', {
  display: 'grid',
  '> *': {
    gridArea: '1 / 1'
  },
  img: {
    zIndex: 1
  },
  div: {
    zIndex: 3,
    pointerEvents: 'none',
    'h1, h2': {
      pointerEvents: 'auto'
    }
  },
  button: {
    placeSelf: 'end end',
    zIndex: 2
  },
  '&:hover img': {
    //zIndex: -1
  }
})

export const getServerSideProps: GetServerSideProps<Product> = async ({ req, params }) => {
  const props = products
    .map(product => ({ ...product, image: getRootUrl(req) + product.image }))
    .find(p => p.slug === (params?.product as string))
  if (!props) return { notFound: true }
  return { props }
}

export default PostPage
