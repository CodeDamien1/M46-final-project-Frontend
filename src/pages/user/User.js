import { useState } from 'react'
import { deleteUser } from '../../utils'


import '../../App.js'
import './User.css'

// adding try catch block to handle any errors that may occur 
function User({ setPage, selectedUser, user })
{
  const [message, setMessage] = useState()

  const handleUserDelete = async (e) => 
  {
    e.preventDefault()
    setMessage()

    try {
      const data = await deleteUser()
      if (data) {
        console.log('User.js Data ', data)
      }
    } catch {
      console.log('User.js error - ', data)
      setMessage(error)
    }
  }

  return (
        <div className="App">
          <div>user     User: {user.username} </div>
          <div>
            <div>{selectedUser}</div>
          </div>
          <div>
                do you want to delete this user?
          </div>
          <div>
            <input type="button" value="no" onClick={ () => setPage('u')} />
            <form onSubmit={userDelete}>
              <input type="button" value="yes" onClick={ () => alert('under construction')} />
            </form>
        </div>
        <div>{message}</div>
        </div>
      )
}
export default User