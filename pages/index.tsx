import { styled } from '../stitches.config'
import { Layout } from 'components/Layout'
import Link from 'next/link'

const Headline = styled('h1', {
  fontSize: '$6'
})

export default function Home() {
  return (
    <Layout>
      <Headline>Hello!</Headline>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  )
}
