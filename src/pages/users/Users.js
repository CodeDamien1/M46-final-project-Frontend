import { useState } from 'react'
import { getAllUsers } from '../../utils'
import '../../App.css'
import './Users.css'

function Users({ jwtToken, setPage, setSelectedUser, user })
{

  const [message, setMessage] = useState()
  const [users, setUsers] = useState([])


  const getList  = async (e) => 
  {
    try 
    {

      e.preventDefault() // will not refresh the browser

      const data = await getAllUsers(jwtToken)

      if (data.users)
      {
        setUsers(data.users)
        setPage('u')
      }
      else
      {
        setMessage(data.message)
      }
    } 
    catch (error) 
    {
      console.log('Users.js error - ', error)
      setMessage(error)
    }
 
  }

  function viewUser(userSelected)
  {
    console.log('userSelected: ', userSelected)
    setSelectedUser(userSelected.username)
    setPage('v')
  }

  return (
    <div className="App">
      <div><span className="users-title"> users</span><span className="login-user-name">    User: <i>{user.username}</i> </span></div>
      <div>
      {
        users.length === 0
        ? <form onSubmit={getList}>To get a list of users click <input type="submit" value="here" /></form>
        : message ? <div>{message}</div>:
          users.map
          (user =>
            <div>
              <input type="button" className="list-user-nameadd ." value={user.username} onClick={(e) => viewUser(user)} />
            </div>
          )
      }
      </div>
      <div>{message}</div>
      <div><input type="button" value="events" className="events-button" onClick={ () => setPage('e')} /></div>
    </div>
  )
}

export default Users