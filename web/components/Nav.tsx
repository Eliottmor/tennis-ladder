'use client'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Button, { ButtonType } from './Button'
import { Session } from 'next-auth'
import UserDropDown from './UserDropDown'

interface NavProps {
  session: Session | null
}

const Nav = ({ session }: NavProps) => {
  const isLoggedIn = !!session?.user

  return (
    <NavigationMenu.Root className='text-nav font-medium'>
      <NavigationMenu.List className='flex items-center'>
        <NavigationMenu.Item className='ml-6 md:ml-14 mt-3'>
          <Link className='p-2 rounded hover:bg-backgroundContainerAlt text-lg lg:text-xl font-semibold transition duration-300' href='/'>
            Tennis Journey
          </Link>
        </NavigationMenu.Item>
        {!isLoggedIn && (
          <>
            <NavigationMenu.Item className='mt-3 ml-10 absolute right-20 md:right-32'>
              <Link href='/api/auth/signin' passHref>
                <Button label='Login' />
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='mt-3 absolute right-0 md:right-6'>
              <Link href='/login' passHref>
                <Button buttonType={ButtonType.Flat} label='Sign up'/>
              </Link>
            </NavigationMenu.Item>
          </>
        )}

        {isLoggedIn && (
          <UserDropDown user={session.user} className='mt-3 absolute right-6 text-xs md:text-sm w-40 md:w-fit'/>
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Nav
