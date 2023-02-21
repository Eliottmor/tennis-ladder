import * as LabelPrimitive from '@radix-ui/react-label'
import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types'
import { toCamelCase } from '../../utils/textHelper'

interface LabelProps {
  label: string
  children: string
}

interface TextFieldBlockProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
  inputClass?: string
  register: UseFormRegister<FieldValues>
  isPassword?: boolean
}

const Label = ({ label }: LabelProps) => {
  return (
    <LabelPrimitive.Root
      htmlFor={label}
      className='block text-sm font-medium user select-none text-textLight hover:cursor-pointer'
    >
      {label}
    </LabelPrimitive.Root>
  )
}

const TextFieldBlock = ({
  label,
  className, 
  register,
  isPassword,
  inputClass,
  ...rest
}: TextFieldBlockProps) => {
  const password = isPassword && { type: 'password' }

  return (
    <div className={className}>
      <Label label={label}>{label}</Label>
      <input
        className={`min-w-[200px]
          inline-flex
          items-center
          justify-center
          rounded
          py-0
          px-2
          h-9
          text-sm
          leading-[1]
          bg-neutral
          mt-2
          mx-0
          mb-5
          box-border
          ${inputClass}`
        }
        id={label}
        {...password}
        {...register(toCamelCase(label))}
        {...rest}
      />
    </div>
  )
}

export default TextFieldBlock
