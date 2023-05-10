import { useState } from 'react';
import '../App.css';

function Register({ setPage })
{
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function login()
    {
        setPage('l')
    }

    function register()
    {
        setPage('l')
    }

  return (
    <div className="App">
        <div>register</div>
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
      </div>
    </div>
  )
}

export default Register