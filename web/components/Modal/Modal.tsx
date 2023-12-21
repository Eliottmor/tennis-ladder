'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Dispatch, ReactNode, SetStateAction } from 'react'

interface ModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  trigger: ReactNode
  title: string,
  subtitle?: string
  children: ReactNode
}

const Modal = ({
  isOpen,
  setIsOpen,
  trigger,
  title,
  subtitle,
  children
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black bg-opacity-40 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] overflow-auto max-h-[85vh] w-[90vw] max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          <Dialog.Title className='font-medium m-0 text-xl'>{title}</Dialog.Title>
          {subtitle && <Dialog.Description className='mt-2 mb-5 leading-normal text-textLight'>{subtitle}</Dialog.Description>}
          {children}
          <Dialog.Close asChild>
            <button className='hover:bg-sky-100 focus:shadow-darkBlue absolute top-4 right-4 inline-flex h-7 w-7 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none' aria-label='Close'>
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
