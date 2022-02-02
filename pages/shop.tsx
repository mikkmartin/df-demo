import { Layout } from 'components/Layout'
import { getRootUrl } from 'utils/rootUrl'
import { products, Product } from 'data'
import { GetServerSideProps } from 'next'
import { styled } from 'stitches.config'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Shop = ({ products }: { products: Product[] }) => {
  return (
    <Layout>
      <Items>
        {products.map(product => (
          <Link key={product.slug} href={`/shop/${product.slug}`}>
            <Item>
              <motion.h2 whileHover={{ x: 20, y: 10 }}>{product.title}</motion.h2>
              <img src={product.image} />
            </Item>
          </Link>
        ))}
      </Items>
    </Layout>
  )
}

const Items = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$3'
})
const Item = styled('a', {
  display: 'grid',
  color: 'white',
  cursor: 'pointer',
  '> *': {
    gridArea: '1 / 1'
  },
  '&:hover > h1': {
    zIndex: 2
  }
})

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      products: products.map(product => ({
        ...product,
        image: getRootUrl(req) + product.image
      }))
    }
  }
}

export default Shop
