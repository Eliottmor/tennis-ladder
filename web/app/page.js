'use client'
import { useForm } from 'react-hook-form'
import Separator from '../components/Separator'
import TextFieldBlock from '../components/TextFieldBlock'

export default function Page() {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <button className='btn-action w-96 m-2'>next</button>
      <button className='btn-outline m-2'>outline</button>
      <button className='m2 text-white bg-'>nothing</button>
      <Separator>Hello</Separator>
      <input className='txt-field' />
      <TextFieldBlock label={'Email Address'} register={register} />
    </>
  )
}
