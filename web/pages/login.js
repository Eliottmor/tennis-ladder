import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'
import Button from '../components/Button'
import TextFieldBlock from '../components/TextFieldBlock'
import { css } from '@stitches/react'
import Separator from '../components/Separator'
import { useForm } from 'react-hook-form'
import login from './gql/Login.gql'
import { useMutation } from '@apollo/client'
import { usePlayerContext } from '../playerContext'

const Login = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const { signIn } = usePlayerContext()

  const onLoginCompleted = (data) => {
    const { login } = data
    if (login?.player) {
      console.log('logged in')
      const { player, token } = login
      signIn(player, token)
      router.push('/dashboard')
    }
  }

  const [loginMutation, { error }] = useMutation(login, {
    onCompleted: onLoginCompleted
  })

  const handleLogin = ({ emailAddress, password }) => {
    loginMutation({
      variables: {
        email: emailAddress,
        password
      }
    })
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
