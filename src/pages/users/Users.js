import { useState } from 'react'
import { getUsers } from '../../utils'
import '../../App.css'

function Users({ setPage, setSelectedUser, user })
{

  const [message, setMessage] = useState()
  const [users, setUsers] = useState([])

  console.log('before use effect')

  const getList = async (e) => 
  {
     e.preventDefault()

      setMessage()

      const data = await getUsers()

      if (data.users)
      {
          setUsers(data.users)
      }
      else
      {
          setMessage(data.message)
      }
      
  }

  function viewUser(userSelected)
  {
    setSelectedUser(userSelected)
    setPage('')
  }

  return (
    <div className="App">
      <div>users     User: {user.username} </div>
      <div>
      {
        users.length === 0
        ? <form onSubmit={getList}>To get a list of users click <input type="submit" value="here" /></form>
        : message ? <div>{message}</div>:
          users.map
          (user =>
            <div>
              <input type="button" value={user.username} onClick={(e) => viewUser(user)} />
            </div>
          )
      }
      </div>
      <div>{message}</div>
      <div><input type="button" value="events" onClick={ () => setPage('e')} /></div>
    </div>
  )
}

export default Users