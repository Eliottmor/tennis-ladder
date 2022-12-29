import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'

interface DropdownProps {
  trigger: ReactNode,
  className: string,
  children: JSX.Element[] | JSX.Element
}

const Dropdown = ({ trigger, className, children }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={className}>
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className='bg-white min-w-[220px] rounded-md p-2 shadow-md'>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default Dropdown
