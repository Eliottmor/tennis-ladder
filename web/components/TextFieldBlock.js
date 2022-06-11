import TextField from './TextField'
import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '@stitches/react'
import useGetClassName from '../utils/useGetClassName'

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

const TextFieldBlock = ({ label, className }) => {
  const makeClassName = useGetClassName('TextFieldBlock')

  return (
    <div className={className}>
      <StyledLabel className={makeClassName('label')} htmlFor={label}>
        {label}
      </StyledLabel>
      <TextField
        className={makeClassName('text-field')}
        type='text'
        id={label}
      />
    </div>
  )
}

export default TextFieldBlock
