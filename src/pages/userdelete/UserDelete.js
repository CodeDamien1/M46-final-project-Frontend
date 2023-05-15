import { useState } from 'react'
import { deleteUser } from '../../utils'
import { deleteCookie } from '../../common'
import '../../App.js'
import './UserDelete.css'

function UserDelete({ jwtToken, setUser, setPage, selectedUser,  user })
{
    const [message, setMessage] = useState()

    const userDelete = async (e) => 
    {
  
      e.preventDefault()
  
      setMessage()
  
      console.log('User.js User jwt token - ', jwtToken)
      console.log('User.js Selected User  - ', selectedUser.user)
  
      const data = await deleteUser(selectedUser.username, jwtToken)
  
      console.log('UserDelete.js data - ', data)
      console.log('UserDelete.js SelectedUser: ' + selectedUser.username + ' user.username ' + user.username)
  
      if (data.deleteSuccessful)
      {
        console.log('UserDelete.js data.message - ', data.message)
  
        if (selectedUser.username === user.username)
        {
          deleteCookie('jwt_token')
          setUser()
          setPage()
        }
        else
        {
          setPage('u')
        }
      }
      else
      {
        console.log('Delete of "' + selectedUser.username + '" failed')
        setMessage(data.message)
      }
   
    }
    
    return (
    <div className="App">
    <div className="user-title">delete user</div>
    <div>
      <div className="user-message"><br></br><br></br>Are you sure you want to delete user "{selectedUser.username}" from tables User?<br></br><br></br></div>
    </div>
    <form onSubmit={userDelete}>
      <input type="button" className="user-buttons" value="no" onClick={ () => setPage('v')} />
           
      <input type="submit" className="user-buttons" value="yes"  />
    </form>
    <div>{message}</div>
  </div>
    )
}


export default UserDelete