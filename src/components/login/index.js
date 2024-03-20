import {useState} from 'react'
import {
  Heading,
  Box,
  Logo,
  Label,
  Input,
  Checkbox,
  Button,
  Para,
} from './styles'

import ThemeContext from '../../context/ThemeContext'

const Login = () => {
  const [showPassword, togglePassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onChangeShowPassword = () => {
    togglePassword(!showPassword)
  }
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const [loginErrorMsg, setErrorMsg] = useState('')
  const fetchLoginDetails = async () => {
    const req = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(req),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const jwtToken = await response.json()

    if (response.ok) {
      setUsername('')
      setPassword('')
      // console.log('succesfully logged  in')
    } else {
      setErrorMsg('*Invalid Credentials')
    }
    console.log(response)
  }

  const onClickLogin = () => {
    if (username === '') {
      setErrorMsg("*Username can't be empty")
    } else if (password === '') {
      setErrorMsg("*Password can't be empty")
    } else if (username === '' && password === '') {
      setErrorMsg('*Fill all the required fills')
      console.log('hey')
    } else if (username !== '' && password !== '') {
      setErrorMsg('')
      fetchLoginDetails()
    }
  }

  //   console.log(username, password, loginErrorMsg)

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        // console.log(theme)
        return (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            theme={theme}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              theme={theme}
              height="381px"
              width="480px"
              br="10px"
              shadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
              padding="20px"
            >
              <Logo src={theme.logoUrl} />
              <Label htmlFor="username">USERNAME</Label>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                onChange={onChangeUsername}
                value={username}
              />
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={onChangePassword}
                value={password}
              />
              <Box paddingTop="10px">
                <Checkbox
                  type="checkbox"
                  id="showPassword"
                  onChange={onChangeShowPassword}
                />
                <Label htmlFor="showPassword">Show Password</Label>
              </Box>
              <Button
                bgColor="#3b82f6"
                color="#ffffff"
                height="37px"
                width="440px"
                border="none"
                br="7px"
                mTop="30px"
                fontFamily="Roboto"
                onClick={onClickLogin}
              >
                Login
              </Button>
              <Para>{loginErrorMsg}</Para>
            </Box>
          </Box>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Login
