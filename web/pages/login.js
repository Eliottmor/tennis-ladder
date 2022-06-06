import styles from '../styles/Login.module.css'
import Button from '../components/Button'
import TextFieldBlock from '../components/TextFieldBlock'
import TextField from '../components/TextField'

const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>
      <TextFieldBlock label='Email Address' />
      <TextFieldBlock label='Password' />
      <Button css={{ width: '100%' }}>Sign in</Button>
    </div>
  )
}

export default Login
