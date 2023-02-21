'use client'
import { gql } from 'graphql-request'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button, { ButtonType } from '../../../components/Button'
import Modal from '../../../components/Modal'
import TextFieldBlock from '../../../components/TextFieldBlock'
import { clientRequest } from '../../../client-gql-request'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  ustaNumber: string
  ustaRating: string
}

interface ProfileEditModalFormProps {
  user: User
}

const updateUserById = gql`
  mutation UpdateUserById($userId: String!, $phoneNumber: String, $email: String, $firstName: String, $lastName: String) {
    updateUserById(userId: $userId, email: $email, phoneNumber: $phoneNumber, firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`

const ProfileEditModalForm = ({ user }: ProfileEditModalFormProps) => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const updateProfile = (data) => {
    clientRequest(updateUserById, {...data, userId: user?.id }).then(() => {
      setIsOpen(false)
      router.refresh()
    })
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        trigger={<Button buttonType={ButtonType.Link} label='Edit profile' className='self-center' />}
        title='Edit profile'
        subtitle="Make changes to your profile here. Click save when you're done."
      >
        <form onSubmit={handleSubmit(updateProfile)}>
          <TextFieldBlock className='pr-12 inline-block' label='First name' defaultValue={user?.firstName} register={register} />
          <TextFieldBlock className='inline-block' label='Last name' defaultValue={user?.lastName} register={register} />
          <TextFieldBlock className='pr-12 inline-block' label='Phone number' defaultValue={user?.phoneNumber} register={register} />
          <TextFieldBlock className='inline-block' label='Email' defaultValue={user?.email} register={register} />
          {/* <TextFieldBlock className='pr-12 inline-block' label='USTA Number' register={register} />
          <TextFieldBlock className='inline-block' label='USTA Rating' register={register}/>
          <TextFieldBlock inputClass='w-11/12' label='Availability' register={register}/> */}
          <div className='flex mt-6 justify-end'>
            <Button label='Save changes' type='submit' />
          </div>
        </form>
      </Modal>
    </>
  )
}

export default ProfileEditModalForm
