import React, { useState } from 'react';
import { registerUser } from "../../utils";
import './Register.css';

function Register({ setPage }) {
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [locality, setLocality] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  //issue with setPage

  function login() {
    setPage();
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username);

    console.log('locality:', locality); // make sure locality is defined
    console.log('typeof locality:', typeof locality); // make sure locality is a string

    if (locality === "null") {
      console.log("Please select a locality");
      setMessage("Please select a locality");
      return;
    }

    const data = await registerUser(firstName, surname, email, locality, username, password);

    if (data.userCreated) {
      console.log('user created');
      setMessage('Success! User created.');

    } else {
      console.log('user not created message ' + data.message);
      setMessage(data.message);
    }
  };

  return (
    <div className='register-container'>
      <div className="modal-content">
        <button onClick={() => login()}>Back to Login Page</button>
        <h2>Welcome</h2>
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
            <select onChange={(e) => { console.log('select value:', e.target.value); setLocality(e.target.value) }} required >
              <option value="null">Please select a locality</option>
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
          <button type='submit'>Create an account</button>
        </form>
        {message && <div className="message-banner">{message}</div>}
      </div>
    </div>
  );
}

export default Register;