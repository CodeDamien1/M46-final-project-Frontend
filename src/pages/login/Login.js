import { useState } from 'react'
import { loginUser } from '../../utils'
import '../../App.css'
import './Login.css'

function Login({ setUser, setPage, handleOpenRegisterModal }) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()

  const userLogin = async (e) => {
    e.preventDefault()

    setUser()
    const data = await loginUser(username, password)
    console.log('Login.js data - ', data)
    if (data.loginValid) 
    {
      setUser({ username: username })
      setPage('l')
    }
    else 
    {
      console.log('Login.js message - ', data)
      setMessage(data.message)
    }
  }

  return (
    <div className="App">
      <div>Login</div>
      <form onSubmit={userLogin}>
        <div className="data-entry">
          <label>
            Username:
            <input type="text" onChange={e => setUsername(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="text" onChange={e => setPassword(e.target.value)} required />
          </label>
          <div>

            <input type="submit" value="login" className="login-buttons" />
            <input type="button" value="register" className="login-buttons" onClick={handleOpenRegisterModal} />

          </div>
        </div>
      </form>
      <div className="login-message">{message}</div>
    </div>
  )
}

export default Login;