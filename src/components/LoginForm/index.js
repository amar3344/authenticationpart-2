import {useState} from 'react'
import Cookies from 'js-cookie'

import './index.css'

const LoginForm = props => {
  const [name, setUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isDisplayErrorMsg, setDisplayMsg] = useState(false)

  const gettingUsername = e => {
    setUsername(e.target.value)
  }

  const gettingPassword = e => {
    setUserPassword(e.target.value)
  }

  const onSubmitSuccess = token => {
    setDisplayMsg(false)
    const jwtToken = token
    Cookies.set('jwtToken', jwtToken, {expires: 1})
    const {history} = props
    history.replace('/')
  }

  const onSubmitFailure = message => {
    setDisplayMsg(true)
    setErrorMsg(message)
  }

  const onClickSubmit = async e => {
    e.preventDefault()
    const userDetails = {username: name, password: userPassword}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const res = await fetch(url, options)
    const data = await res.json()
    if (res.status === 200) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <div className="login-container">
      <div className="top-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
      </div>
      <form onSubmit={onClickSubmit}>
        <div className="input-container">
          <label htmlFor="username" className="form-control">
            USERNAME
          </label>
          <input
            className="form-control"
            id="username"
            type="text"
            placeholder="Username"
            onChange={gettingUsername}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="form-control">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="Password"
            onChange={gettingPassword}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {isDisplayErrorMsg && <p className="error-message">*{errorMsg}</p>}
      </form>
    </div>
  )
}

export default LoginForm
