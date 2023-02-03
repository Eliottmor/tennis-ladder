'use client'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Button, { ButtonType } from './Button'
import { Session } from 'next-auth'
import UserDropDown from './UserDropDown'

interface NavProps {
  session: Session
}

const Nav = ({ session }: NavProps) => {
  const isLoggedIn = !!session?.user

  return (
    <NavigationMenu.Root className='text-nav font-medium'>
      <NavigationMenu.List className='flex items-center'>
        <NavigationMenu.Item className='ml-14 mt-3 w-1/4'>
          <Link className='p-2 rounded hover:bg-backgroundContainerAlt text-xl font-semibold transition duration-300' href='/'>
            Tennis Ladder
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='mt-3 ml-10'>
          <Link className='p-2 rounded hover:bg-backgroundContainerAlt transition duration-300' href='/players'>
            Players
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='mt-3 ml-10'>
          <Link className='p-2 rounded hover:bg-backgroundContainerAlt transition duration-300' href='/ladders'>
            Ladders
          </Link>
        </NavigationMenu.Item>

        {!isLoggedIn && (
          <>
            <NavigationMenu.Item className='mt-3 ml-10 absolute right-32'>
              <Link href='/api/auth/signin' passHref>
                <Button label='Login' />
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='mt-3 absolute right-6'>
              <Link href='/login' passHref>
                <Button type={ButtonType.Flat} label='Sign up'/>
              </Link>
            </NavigationMenu.Item>
          </>
        )}

        {isLoggedIn && (
          <UserDropDown user={session.user} className='mt-3 absolute right-6'/>
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Nav
