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
    setSelectedUser(userSelected)
    setPage('v')
  }

  return (
    <div className="App">
      <div className="users-title"> users</div>
      <div>
      {
        users.length === 0
        ? <form onSubmit={getList}><strong>To get a list of users click </strong><input type="submit" value="here" className="users-here" /></form>
        : message ? <div>{message}</div>:
          users.map
          (user =>
            <div>
              <input type="button" value={user.username} className="users-name" onClick={(e) => viewUser(user)} />
            </div>
          )
      }
      </div>
      <div>{message}</div>
      <div><input type="button" value="events" className="events-button" onClick={ () => setPage('l')} /></div>
    </div>
  )
}

export default Users