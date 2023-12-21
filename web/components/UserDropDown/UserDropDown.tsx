import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Dropdown from '../Dropdown'

interface UserDropDownProps {
  user: Session['user']
  className: string
}

const UserDropDown = ({ user, className }: UserDropDownProps) => {
  const userEmail = user?.email
  const userId = user?.id
 
  return (
    <Dropdown trigger={userEmail} className={className}>
      <Link href={`/profile/${userId}`}>
        <DropdownMenu.DropdownMenuItem
          key='profile'
          className='items-center py-1 px-2 pl-6 relative data-[highlighted]:bg-backgroundContainerAlt outline-0 rounded'
        >
          Profile
        </DropdownMenu.DropdownMenuItem>
      </Link>
      <DropdownMenu.DropdownMenuItem
        key='players'
        className='items-center py-1 px-2 pl-6 relative data-[highlighted]:bg-backgroundContainerAlt outline-0 rounded'
      >
        <Link className='p-2 rounded hover:bg-backgroundContainerAlt transition duration-300' href='/players'>
          Players
        </Link>
      </DropdownMenu.DropdownMenuItem>
      <DropdownMenu.DropdownMenuItem
        key='players'
        className='items-center py-1 px-2 pl-6 relative data-[highlighted]:bg-backgroundContainerAlt outline-0 rounded'
      >
        <Link className='p-2 rounded hover:bg-backgroundContainerAlt transition duration-300' href='/ladders'>
          Ladders
        </Link>
      </DropdownMenu.DropdownMenuItem>
      <DropdownMenu.DropdownMenuItem
        key={'sign-out'}
        className='items-center py-1 px-2 pl-6 relative cursor-pointer data-[highlighted]:bg-backgroundContainerAlt outline-0 rounded'
        onSelect={() => signOut()}
      >
        Sign out
      </DropdownMenu.DropdownMenuItem>
    </Dropdown>
  )
}

export default UserDropDown
