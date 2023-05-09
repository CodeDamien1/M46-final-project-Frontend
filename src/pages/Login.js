import { useState } from 'react';
import '../App.css';

function Login({ setUser, setPage, users })
{
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()

    function login()
    {
        let loginSuccessful = false

        if (users.data[username] && users.data[username].password === password)
        {
               loginSuccessful = true
        }

        if (loginSuccessful)
        {
            
            setUser({username:username})
            setPage('l')
        }
        else
        {
            setMessage('Login details incorrect')
        }
    }

    function register()
    {
        alert('register')
        setPage('r')
    }

  return (
    <div className="App">
      <div>login</div>
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
            <input type="button" value="login" onClick={ () => login() }/>
            <input type="button" value="register" onClick={ () => register() }/>
        </div>
        <div>{message}</div>
      </div>
    </div>
  )
}

export default Login