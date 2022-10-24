import { css } from '@stitches/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Button from '../components/shared/Button'
import Separator from '../components/Separator'
import TextFieldBlock from '../components/TextFieldBlock'

const CreatePlayer = () => {
  const { register, handleSubmit } = useForm()

  const handleCreatePlayer = () => {}
  return (
    <div className={containerCss()}>
      <h1 className={titleCss()}>Create Player</h1>
      <form onSubmit={handleSubmit(handleCreatePlayer)}>
        <TextFieldBlock
          className={textFieldCss()}
          label='First Name'
          register={register}
        />
        <TextFieldBlock
          className={textFieldCss()}
          label='Last Name'
          register={register}
        />
        <TextFieldBlock
          className={textFieldCss()}
          label='Email Address'
          register={register}
        />
        <TextFieldBlock
          className={textFieldCss()}
          label='Password'
          register={register}
          isPassword
        />
        <Button name='login' css={{ width: '100%' }} type='submit'>
          Create
        </Button>
        <Separator>OR</Separator>
        <Link href={'/login'}>
          <Button outlined css={{ width: '100%' }}>
            Login
          </Button>
        </Link>
      </form>
    </div>
  )
}

const titleCss = css({
  textAlign: 'center',
  margin: '8rem 0rem'
})

const containerCss = css({
  width: 320,
  margin: 'auto'
})

const textFieldCss = css({
  '& .TextFieldBlock-text-field': {
    width: '100%'
  }
})

export default CreatePlayer
