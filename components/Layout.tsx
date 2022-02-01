import { styled } from '../stitches.config'

export const Layout = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

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

Layout.defaultProps = {
  size: { '@initial': '1', '@bp1': '2' },
}
