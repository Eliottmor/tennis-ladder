'use client'
import { useForm } from 'react-hook-form'
import Button, { ButtonType } from '../../../components/Button'
import Modal from '../../../components/Modal'
import TextFieldBlock from '../../../components/TextFieldBlock'

const ProfileEditModalForm = () => {
  const { register } = useForm()

  return (
    <>
      {/* <form> */}
      <Modal
        trigger={<Button buttonType={ButtonType.Link} label='Edit profile' className='self-center'/>}
        title='Edit profile'
        subtitle="Make changes to your profile here. Click save when you're done."
        action={<Button label='Save changes' />}
      >
        <TextFieldBlock className='pr-12 inline-block' label='Phone number' register={register} />
        <TextFieldBlock className='inline-block' label='Email' register={register} />
        <TextFieldBlock className='pr-12 inline-block' label='USTA Number' register={register} />
        <TextFieldBlock className='inline-block' label='USTA Rating' register={register}/>

        <TextFieldBlock inputClass='w-11/12' label='Availability' register={register}/>
      </Modal>
      {/* </form> */}
    </>
  )
}

export default ProfileEditModalForm
