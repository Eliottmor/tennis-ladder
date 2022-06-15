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

  '&:hover': { backgroundColor: '$actionHighlight' },

  variants: {
    outlined: {
      true: {
        backgroundColor: 'transparent',
        border: '3px solid black',
        color: 'black',
        transition: 'background-color .33s, color .33s',
        '&:hover': {
          backgroundColor: 'black',
          color: 'white',
          border: '3px solid black'
        }
      }
    }
  }
})

export default Button
