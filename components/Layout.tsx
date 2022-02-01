import { styled } from '../stitches.config'
import Link from 'next/link'

export const Layout = ({ children, ...props }) => {
  return (
    <Container size={{ '@initial': '1', '@bp1': '2' }} {...props}>
      <Header>
        <Link href="/">
          <Headline>Home</Headline>
        </Link>
        <div>
          <Link href="/blog/post">
            <a>Blog</a>
          </Link>
          <Link href="/shop/headphones">
            <a>Shop</a>
          </Link>
        </div>
      </Header>
      <Content>{children}</Content>
      <small>2022 © Your Name.</small>
    </Container>
  )
}

const Container = styled('div', {
  marginX: 'auto',
  minHeight: '100vh',
  paddingY: '$6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})

const Content = styled('div', {
  flex: 1,
  paddingY: '$3',
  img: {
    maxWidth: '100%',
  },
})

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '> div': {
    display: 'flex',
    gap: '32px',
  },
})

const Headline = styled('h1', {
  fontSize: '$6',
  fontWeight: 200,
})
