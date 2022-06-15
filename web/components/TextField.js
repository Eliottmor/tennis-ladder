import { styled } from '@stitches/react'

const TextField = styled('input', {
  all: 'unset',
  minWidth: 200,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: '$1',
  lineHeight: 1,
  backgroundColor: '$neutral',
  margin: '1rem 0 2.5rem',
  boxSizing: 'border-box'
})

export default TextField
