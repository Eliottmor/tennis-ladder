import { InputHTMLAttributes, forwardRef } from 'react'
import { BUTTON_TEXT_SIZE, BUTTON_TYPE } from './theme'
import { ButtonTextSize, ButtonType } from './types'

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string
  className?: string
  buttonType?: ButtonType
  textSize?: ButtonTextSize
  type?: 'submit' | 'reset' | 'button'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  label,
  buttonType = ButtonType.Action,
  textSize = ButtonTextSize.DEFAULT,
  className,
  type = 'button',
  ...rest
}, forwardedRef) => {
  const buttonTypeClass = BUTTON_TYPE[buttonType]
  const buttonTextSize = BUTTON_TEXT_SIZE[textSize]

  return (
    <button
      type={type}
      ref={forwardedRef}
      className={`border border-transparent rounded-lg cursor-pointer flex justify-center items-center px-6 py-2 relative text-center h-8 min-w-[2rem] ${className} ${buttonTextSize} ${buttonTypeClass}`}
      {...rest}
    >
      {label}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
