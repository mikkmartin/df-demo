import { Layout } from 'components/Layout'
import { getRootUrl } from 'utils/rootUrl'
import { products, Product } from 'data'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { styled } from 'stitches.config'
import { Button } from 'components/Button'
import { FC } from 'react'

const PostPage: FC<Product> = props => {
  const { image, price, title } = props

  return (
    <Layout>
      <Head>
        <meta
          property="og:image"
          content={`https://dev.designfactory.app/files/product-bae3t.png?price=€299&photo=${image}&product-name=${title}`}
        />
        <meta property="twitter:card" content="summary_large_image" />
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

export const getServerSideProps: GetServerSideProps<Product> = async ({ req, params }) => {
  const props = products
    .map(product => ({ ...product, image: getRootUrl(req) + product.image }))
    .find(p => p.slug === (params?.product as string))
  if (!props) return { notFound: true }
  return { props }
}

export default PostPage
