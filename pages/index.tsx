import { styled } from '../stitches.config'
import { Layout } from 'components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <p>
        Hey, I'm a Senior Software Engineer at Company. I enjoy working with Next.js and crafting
        beautiful front-end experiences.
      </p>
      <p>
        This portfolio is built with Next.js and a library called Nextra. It allows you to write
        Markdown and focus on the content of your portfolio.
      </p>
      <p>Deploy your own in a few minutes.</p> <hr />
      <p>Twitter @myname</p> <p>GitHub @yourname</p> <p>Instagram @yourname</p>
      <p>Email your@name.com</p>
    </Layout>
  )
}
