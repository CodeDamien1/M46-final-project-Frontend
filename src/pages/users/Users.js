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
      setMessage(error.toString())
    }
 
  }

  const viewUser = (userSelected) =>
  {
    console.log('userSelected: ', userSelected)
    setSelectedUser(userSelected.username)
    setPage('v')
  }

  
  return (
    <div className="App">
      <div>users User: {user.username}</div>
      <div>
        {users.length === 0 ? (
          <form onSubmit={getList}>
            To get a list of users click
            <input type="submit" value="here" />
          </form>
        ) : (
          users.map((user) => (
            // adding key to div to improve performance when rendering larger lists 
            <div key={user.username}>                   
              <input
                type="button"
                value={user.username}
                onClick={() => viewUser(user)}
              />
            </div>
          ))
        )}
        {message && <div>{message}</div>}
      </div>
      <div>
        <input
          type="button"
          value="events"
          className="events-button"
          onClick={() => setPage('e')} // onclick changed to arrow function
        />
      </div>
    </div>
  );
}

export default Users