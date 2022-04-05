import { styled } from '../stitches.config'
import Link from 'next/link'

export const Layout = ({ children, ...props }) => {
  return (
    <Container size={{ '@initial': '1', '@bp1': '3' }} {...props}>
      <Header>
        <Link href="/">
          <Headline>My site</Headline>
        </Link>
        <div>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <small>2022 © Your Name.</small>
        <a href="https://twitter.com/designfactapp" target="_blank">
          <small>@designfactapp</small>
        </a>
      </Footer>
    </Container>
  )
}

const Container = styled('div', {
  marginX: 'auto',
  minHeight: '100vh',
  paddingTop: '6vh',
  paddingBottom: '$6',
  display: 'flex',
  flexDirection: 'column',
  variants: {
    size: {
      1: {
        maxWidth: '100%',
        paddingX: '2rem',
      },
      2: {
        maxWidth: '585px',
        paddingX: '2rem',
      },
      3: {
        maxWidth: '865px',
        paddingX: '2rem',
      },
    },
  },
})

const Content = styled('div', {
  flex: 1,
  paddingTop: '$6',
  paddingBottom: '$2',
  margin: 'auto',
  width: '100%',
  img: {
    maxWidth: '100%',
  },
})

const Footer = styled('div', {
  display: 'flex',
  marginTop: '$6',
  justifyContent: 'space-between',
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
  fontSize: '$5',
  fontWeight: 200,
})
