import TextField from './TextField'
import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '@stitches/react'
import useGetClassName from '../../utils/useGetClassName'
import { toCamelCase } from '../../utils/textHelper'

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

const TextFieldBlock = ({ label, className, register, isPassword }) => {
  const makeClassName = useGetClassName('TextFieldBlock')
  const password = isPassword && { type: 'password' }

  return (
    <div className={className}>
      <StyledLabel className={makeClassName('label')} htmlFor={label}>
        {label}
      </StyledLabel>
      <TextField
        className={makeClassName('text-field')}
        {...password}
        {...register(toCamelCase(label))}
      />
    </div>
  )
}

export default TextFieldBlock
