import { createStitches } from '@stitches/react'

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    colors: {
      gray100: 'hsl(206, 22%, 99%)',
      gray200: 'hsl(206, 12%, 97%)',

      blue100: 'hsl(216, 100%, 40%)',
      blue200: 'hsl(216, 100%, 50%)',

      highlight: '$blue200',
      backgroundColor: '$gray300',
    },
    space: {
      1: '6px',
      2: '12px',
      3: '18px',
      4: '24px',
      5: '30px',
      6: '36px',
    },
    sizes: {
      1: '6px',
      2: '12px',
      3: '18px',
      4: '24px',
      5: '30px',
      6: '36px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '42px',
    },
    fonts: {
      system: '"JetBrains Mono", monospace',
    },
  },
  utils: {
    marginX: value => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: value => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: value => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
  },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  ':root': {
    backgroundColor: '$backgroundColor',
    fontFamily: '$system',
  },
  a: {
    textDecoration: 'none',
    color: '$highlight',
    '&:hover': {
      color: 'white',
      background: '$highlight',
    },
  },
  p: {
    marginY: '$3',
  }
})
