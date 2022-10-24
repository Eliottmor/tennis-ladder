import { styled } from '@stitches/react'

const StyledSpan = styled('span', {
  color: '$textLight',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
  margin: '40px auto',
  whiteSpace: 'nowrap',

  '&::before': {
    content: '',
    display: 'inline-block',
    width: '40%',
    height: 1,
    margin: '0 8px',
    backgroundColor: '$textLighter'
  },

  '&::after': {
    content: '',
    display: 'inline-block',
    width: '40%',
    height: 1,
    margin: '0 8px',
    backgroundColor: '$textLighter'
  }
})

const Separator = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>
}

export default Separator
