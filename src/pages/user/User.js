import { useState } from 'react'
import { deleteUser } from '../../utils'
import { deleteCookie } from '../../common'
import '../../App.js'
import './User.css'

function User({ jwtToken, setPage, setUser, selectedUser, user })
{
  const [message, setMessage] = useState('')

  function updateUser()
  {
    console.log('User.js updateuser')
    if (selectedUser.username != user.username)
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
    if (selectedUser.username != user.username)
    {
      setMessage('cannot delete user')
    }
    else
    {
      setPage('d')
    }
  }

  return (
        <div className="App user-page">
          <div className="users-title">view users details</div>
          <div>
            <label>
              First Name:
              <i>{selectedUser.firstName}</i>
            </label>
          </div>
          <div>
            <label>
              Surname:
              <i>{selectedUser.surname}</i>
            </label>
          </div>
          <div>
            <label>
              Email:
              <i>{selectedUser.email}</i>
            </label>
          </div>
          <div>
            <label>
              Locality:
              <i>{selectedUser.locality}</i>
            </label>
          </div>
          <div>
            <label>
              Username:
              <i>{selectedUser.username}</i>
            </label>
          </div>

          <div>
            <input type="button" value="users" className="user-buttons" onClick = {() => setPage('u') } />
            <input type="button" value="update" className="user-buttons" onClick = {() => updateUser(selectedUser)} />
            <input type="button" value="delete" className="user-buttons" onClick = {() => deleteUser(selectedUser)} />
          </div>
          <div>{message}</div>
        </div>
      )
}

export default User