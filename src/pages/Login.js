import { useState } from 'react'
import { loginUser } from '../utils'
import '../App.css'

function Login({ setUser, setPage, users })
{
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()

    const userLogin = async (e) => 
    {
        e.preventDefault()

        setUser()
        const data = await loginUser(username, password)
        console.log(data.user)
        if (data.loginValid)
        {
          setUser({username:username})
          setPage('l')
        }
        else
        {
          setMessage(data.message)
        }
    }


    function register()
    {
        setPage('r')
    }

  return (
    <div className="App">
      <div>login</div>
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
              <input type="submit" value="login" />
              <input type="button" value="register" onClick={ () => register() } />
          </div>
        </div>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default Login