export { getServerSideProps } from './_getServerSideProps'
import Head from 'next/head'
import { Layout } from 'components/Layout'
import { Post } from 'data'

export default function PostPage(post: Post) {
  const { title, content, excerpt } = post
  return (
    <Layout>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
      </Head>
      <h1>{title}</h1>
      {content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </Layout>
  )
}
