import { styled } from '../stitches.config'

export const Button = styled('button', {
  padding: '$2 $5',
  border: 'none',
  borderRadius: '1px',
  fontSize: '$6',
  cursor: 'pointer',
  fontFamily: 'inherit',
  color: '$highlight',
  background: 'transparent',
  '&:hover': {
    color: 'white',
    background: '$highlight',
  },
  '&:active': {
    background: 'white',
    color: '$highlight',
  },
})
