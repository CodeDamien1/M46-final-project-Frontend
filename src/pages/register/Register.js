import { useState } from 'react'
import { registerUser } from '../../utils'
import '../../App.css'
import './Register.css'

function Register({ setPage })
{
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()

    function login()
    {
        setPage('l')
    }

    const userRegister = async (e) => 
    {
        e.preventDefault() // will not refresh the browser

        console.log('Username:' + username)
        console.log('Password:' + password)

        const data = await registerUser(username, password)

        if (data.userCreated)
        {
          setPage('x')
          console.log('user created')
        }
        else
        {
          console.log('user not created message ' + data.message)
          setMessage(data.message)
          setPage('r')
        }
    }

  return (
    <div className="App">
        <div>register</div>
        <form onSubmit={userRegister}>
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
              <input type="submit" value="register" />
              <input type="button" value="login" onClick={ () => login() } />
            </div>
          </div>
        </form>
        <div>{message}</div>
    </div>
  )
}

export default Register