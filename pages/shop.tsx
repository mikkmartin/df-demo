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
          <Link key={product.slug} href={`/shop/${product.slug}`} passHref>
            <Item
              animate="default"
              whileHover="hovered"
              whileTap="tapped"
              variants={{
                default: { scale: 1 },
                tapped: { scale: 0.95, transition: { duration: 0 } },
              }}>
              <motion.h2>{product.title}</motion.h2>
              <motion.img
                variants={{ default: { scale: 1 }, hovered: { scale: 1.05 } }}
                src={product.image}
              />
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
  gap: '$3',
})
const Item = styled(motion.a, {
  display: 'grid',
  color: 'white',
  cursor: 'pointer',
  borderRadius: 4,
  '> *': {
    gridArea: '1 / 1',
  },
  h2: {
    padding: '$1 $2',
    color: 'transparent',
    transition: 'color 0.05s ease-in-out',
  },
  '&:hover': {
    h2: {
      color: 'black',
    },
    h1: {
      zIndex: 2,
    },
  },
})

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      products: products.map(product => ({
        ...product,
        image: getRootUrl(req) + product.image,
      })),
    },
  }
}

export default Shop
