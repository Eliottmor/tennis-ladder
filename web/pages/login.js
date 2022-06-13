import styles from '../styles/Login.module.css'
import Button from '../components/Button'
import TextFieldBlock from '../components/TextFieldBlock'
import { css } from '@stitches/react'
import Separator from '../components/Separator'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const handleLogin = (data) => {
    console.log(data)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
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
          Sign in
        </Button>
        <Separator>OR</Separator>
        <Button outlined css={{ width: '100%' }}>
          Create Account
        </Button>
      </form>
    </div>
  )
}

const textFieldCss = css({
  '& .TextFieldBlock-text-field': {
    width: '100%'
  }
})

export default Login
