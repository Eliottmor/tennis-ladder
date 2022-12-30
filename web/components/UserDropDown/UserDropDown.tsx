import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Dropdown from '../Dropdown'

interface UserDropDownProps {
  user: Session['user']
  className: string
}

const UserDropDown = ({ user, className }: UserDropDownProps) => {
  const userEmail = user?.email
 
  return (
    <Dropdown trigger={userEmail} className={className}>
      <DropdownMenu.DropdownMenuItem
        key={'sign-out'}
        className='items-center px-2 pl-6 relative data-[highlighted]:bg-backgroundContainerAlt outline-0 rounded'
        onSelect={() => signOut()}
      >
        Sign out
      </DropdownMenu.DropdownMenuItem>
    </Dropdown>
  )
}

export default UserDropDown
