import { styled } from '@stitches/react'

const Button = styled('button', {
  backgroundColor: '$action',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: '32px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '4.5rem',
  minWidth: '4.5rem',
  padding: '8px 16px',
  position: 'relative',
  textAlign: 'center',
  // button label
  color: 'white',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '14px',
  textTransform: 'uppercase',

  '&:hover': { backgroundColor: '$actionHighlight' }
})

export default Button
