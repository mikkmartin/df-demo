import Head from 'next/head'
import { Layout } from 'components/Layout'
import { Post } from 'data'
export { getServerSideProps } from './_getServerSideProps'

export default function PostPage(post: Post) {
  const { title, content, excerpt } = post
  return (
    <Layout>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={`https://dev.designfactory.app/files/untitled-8xk4e.png?title=${title}`}
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <h1>{title}</h1>
      {content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </Layout>
  )
}
