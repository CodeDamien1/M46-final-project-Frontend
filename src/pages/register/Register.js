import { useState } from 'react'
import { registerUser } from "../../utils"

function Register({ setPage }) {
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [locality, setLocality] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState()

  function login() {
    setPage('l')
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username);

    await registerUser(firstName, surname, email, locality, username, password);

    const data = await registerUser(firstName, surname, email, locality, username, password)

    if (data.userCreated) {
      setPage('x')
      console.log('user created')
    }
    else {
      console.log('user not created message ' + data.message)
      setMessage(data.message)
      setPage('r')
    }
  };


  return (
    <div className='register-container'>

      {/* <button onClick={toggleModal} className="btn-modal">
        Register
      </button> */}

      <div className="modal-content">
        <h2> Click here to Register a new account</h2>

        <form onSubmit={submitHandler}>

          <label>
            firstName:
            <input type="text" onChange={e => setFirstName(e.target.value)} required />
          </label>

          <label>
            surname:
            <input type="text" onChange={e => setSurname(e.target.value)} required />
          </label>

          <label>
            email:
            <input type="text" onChange={e => setEmail(e.target.value)} required />
          </label>


          <label>
            locality
            <select onChange={(e) => setLocality(e.target.value)}>
              <option value="All of United Kingdom">All of United Kingdom</option>
              <option value="London">London</option>
              <option value="South">South</option>
              <option value="Midlands and Central">Midlands and Central</option>
              <option value="Wales and North West">Wales and North West</option>
              <option value="North and North East">North and North East</option>
              <option value="Scotland">Scotland</option>
              <option value="All of Ireland">All of Ireland</option>
              <option value="Northern Ireland">Northern Ireland</option>
            </select>

          </label>

          <label>
            Username:
            <input type="text" onChange={e => setUsername(e.target.value)} required />
          </label>

          <label>
            Password:
            <input type="text" onChange={e => setPassword(e.target.value)} required />
          </label>

          {/* <button button className="close-modal" onClick={toggleModal}>
          X
        </button> */}

          <button type='submit'>Create an account</button>

        </form>

      </div>
    </div >

  )
}

export default Register