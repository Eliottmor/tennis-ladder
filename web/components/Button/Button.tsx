import { BUTTON_TEXT_SIZE, BUTTON_TYPE } from './theme'
import { ButtonTextSize, ButtonType } from './types'

interface ButtonProps {
  label: string
  className?: string
  buttonType?: ButtonType
  textSize?: ButtonTextSize
  onClick?: () => void
}

const Button = ({ label, buttonType = ButtonType.Action, textSize = ButtonTextSize.DEFAULT, className, ...rest }: ButtonProps) => {
  const buttonTypeClass = BUTTON_TYPE[buttonType]
  const buttonTextSize = BUTTON_TEXT_SIZE[textSize]

  return (
    <button
      type='button'
      className={`border border-transparent rounded-lg cursor-pointer flex justify-center items-center px-6 py-2 relative text-center h-8 min-w-[2rem] ${className} ${buttonTextSize} ${buttonTypeClass}`}
      {...rest}
    >
      {label}
    </button>
  )
}

export default Button
