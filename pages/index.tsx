import { styled } from '../stitches.config'
import { Layout } from 'components/Layout'
import Link from 'next/link'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})

export default function Home() {
  return (
    <Layout>
      <Text as="h1">Hello!</Text>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  )
}
