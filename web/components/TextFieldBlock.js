import TextField from './TextField'
import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '@stitches/react'

const StyledLabel = styled(LabelPrimitive.Root, {
  display: 'block',
  fontSize: '$1',
  color: '$textLight',
  fontWeight: 500,
  userSelect: 'none',

  '&:hover': {
    cursor: 'pointer'
  }
})

const TextFieldBlock = ({ label }) => {
  return (
    <>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <TextField type='text' id={label} css={{ width: '100%' }} />
    </>
  )
}

export default TextFieldBlock
