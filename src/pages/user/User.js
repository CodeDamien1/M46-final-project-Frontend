import { useState } from 'react'
import { getDmas } from '../../data'
import '../../App.js'
import './User.css'

function User({ jwtToken, setPage, setUser, selectedUser, user })
{
  const [message, setMessage] = useState('')
  const dlocality = getDmas(selectedUser.locality)
  console.log('User.js dlocality', dlocality)

  function updateUser()
  {
    console.log('User.js updateuser')
    if (selectedUser.username !== user.username)
    {
      setMessage('cannot update user')
    }
    else
    {
      setPage('t')
    }
  }

  function deleteUser()
  {
    console.log('User.js deleteuser')
    if (selectedUser.username !== user.username)
    {
      setMessage('cannot delete user')
    }
    else
    {
      setPage('d')
    }
  }

  return (
        <div className="App">
          <div className="users-title">view users details</div>
          <div className="user-page">
            <div className="user-line">
              <div className="user-label">First Name:</div>
              <div className="user-data"><i>{selectedUser.firstName}</i></div>
            </div>

            <div className="user-line">
              <div className="user-label">Surame:</div>
              <div className="user-data"><i>{selectedUser.surname}</i></div>
            </div>

            <div className="user-line">
              <div className="user-label">Email:</div>
              <div className="user-data"><i>{selectedUser.email}</i></div>
            </div>

            <div className="user-line">
              <div className="user-label">Locality:</div>
              <div className="user-data"><i>{dlocality}</i></div>
            </div>

            <div className="user-line">
              <div className="user-label">Username:</div>
              <div className="user-data"><i>{selectedUser.username}</i></div>
            </div>
          </div>

          <div>
            <input type="button" value="users" className="user-buttons" onClick = {() => setPage('u') } />
            <input type="button" value="update" className="user-buttons" onClick = {() => updateUser(selectedUser)} />
            <input type="button" value="delete" className="user-buttons" onClick = {() => deleteUser(selectedUser)} />
          </div>
          <div className="user-message">{message}</div>
        </div>
      )
}

export default User