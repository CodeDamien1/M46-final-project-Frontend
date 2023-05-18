import { useState, useEffect } from 'react'
import { getAllUsers } from '../../utils'
import '../../App.css'
import './Users.css'

function Users({ jwtToken, setPage, setSelectedUser, user }) {

  const [message, setMessage] = useState()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getAllUsers(jwtToken)

  
        if (data.errorMessage)
        {
          setMessage('Users.js error - ' + data.errorMessage)
        }
        else
        {
          setUsers(data.users)
          setPage('u')
        }
      }
      catch (error) {
        console.log('Users.js error - ', error)
        setMessage('Users.js error - ' + error.message)
      }
    }

    fetchUserData()
    //eslint-disable-next-line
  }, [])

/*
  const getList  = async (e) => 
  {
    try 
    {
      e.preventDefault() // will not refresh the browser

      const data = await getAllUsers(jwtToken)

      if (data.users) {
        setUsers(data.users)
        setPage('u')
      }
      else {
        setMessage(data.message)
      }
    }
    catch (error) {
      console.log('Users.js error - ', error)
      setMessage(error)
    }

  }
*/
  function viewUser(userSelected)
  {
    console.log('userSelected: ', userSelected)
    setSelectedUser(userSelected)
    setPage('v')
  }

  return (
    <div className="App">
      <div className="users-title"> Users</div>
      <div>
        {
          users.map
            (user =>
              <div>
                <input type="button" value={user.username} className="users-name" onClick={(e) => viewUser(user)} />
              </div>
            )
        }
      </div>
      <div className="users-message">{message}</div>
      <div><input type="button" value="events" className="events-button" onClick={ () => setPage('l')} /></div>
    </div>
  )
}

export default Users