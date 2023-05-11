import { useState, useEffect } from 'react'
import { getUsers } from '../../utils'
import '../../App.css'

function Users({ setPage, setSelectedUser, user })
{
  console.log('beginning og users')
  const [message, setMessage] = useState()
  const [users, setUsers] = useState()

  console.log('before use effect')

  useEffect(() => 
  {

      const getUserData = async () => 
      {
        console.log('GetUserDATA')
        try
        {
          const data = await getUsers()
          setMessage(data.users.length + ' found')
          console.log('users: ', data.users)
          setUsers(data.users)
        } 
        catch (error) 
        {
          setMessage(error.message)
        }
        
      }

      getUserData()
      //eslint-disable-next-line
    }, [])
      

    function selectUser(userSelected)
    {
      setSelectedUser(userSelected)
      setPage('')
    }

  return (
    <div className="App">
      <div>users     User: {user.username} </div>
      <div>
        {
            users.array.map
            ((usr, index) =>
                {
                    return <div className="users-list"><input type="button" value={usr.username} className="users-item" onClick={ () => selectUser({usr}) } /></div>
                }
            )
        }
      </div>
      <div>{message}</div>
      <div><input type="button" value="events" onClick={ () => setPage('e')} /></div>
    </div>
  )
}

export default Users