import { BUTTON_TYPE } from './theme'

export enum ButtonType {
  Action = 'action',
  Outline = 'outline',
  Flat = 'flat'
}

interface ButtonProps {
  label: string
  type: ButtonType
  onClick?: () => void
}

const Button = ({ label, type = ButtonType.Action, ...rest }: ButtonProps) => {
  const buttonTypeClass = BUTTON_TYPE[type]

  return (
    <button
      type='button'
      className={`border border-transparent rounded-[32px] cursor-pointer flex justify-center items-center px-6 py-2 relative text-center text-xs min-w-[2rem] uppercase ${buttonTypeClass}`}
      {...rest}
    >
      {label}
    </button>
  )
}

export default Button
