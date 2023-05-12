import { useState } from 'react'
import { deleteUser } from '../../utils'


import '../../App.js'
import './User.css'

function User({ setPage, selectedUser, user })
{

  const [message, setMessage] = useState()

  const userDelete = async (e) => 
  {
    e.preventDefault()

    setMessage()

    const data = await deleteUser()

    if (data)
    {
      console.log('User.js data ', data)
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