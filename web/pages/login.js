import styles from '../styles/Login.module.css'
import Button from '../components/Button'
import TextFieldBlock from '../components/TextFieldBlock'
import { css } from '@stitches/react'

const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>
      <form>
        <TextFieldBlock className={textFieldCss()} label='Email Address' />
        <TextFieldBlock className={textFieldCss()} label='Password' />
        <Button
          name='login'
          css={{ width: '100%' }}
          type='submit'
          onClick={(e) => {
            e.preventDefault()
            console.log(e)
          }}
        >
          Sign in
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
