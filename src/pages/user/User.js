import { useState } from 'react'
import { deleteUser } from '../../utils'
import { deleteCookie } from '../../common'
import '../../App.js'
import './User.css'

function User({ jwtToken, setPage, setUser, selectedUser, user })
{

  const [message, setMessage] = useState()

  const userDelete = async (e) => 
  {

    e.preventDefault()

    setMessage()

    console.log('User.js User jwt token - ', jwtToken)
    console.log('User.js Selected User  - ', selectedUser)

    const data = await deleteUser(selectedUser, jwtToken)

    console.log('User.js data - ', data)
    console.log('User.js selectedUser: ' + selectedUser + ' user.username ' + user.username)

    if (data.deleteSuccessful)
    {
      console.log('User.js data.message - ', data.message)

      if (selectedUser === user.username)
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
      console.log('Delete of "' + selectedUser + '" failed')
      setMessage(data.message)
    }
 
  }


  return (
        <div className="App">
          <div>user     User: {user.username} </div>
          <div>
            <div><br></br><br></br>Are you sure you want to delete user "{selectedUser}" from tables User</div>
          </div>
          <table align="center">
            <tr>
              <td>
                <input type="button" value="no" onClick={ () => setPage('u')} />
              </td>
              <td>
                <form onSubmit={userDelete}>
                  <input type="submit" value="yes"  />
                </form>
              </td>
            </tr>
        </table>
        <div>{message}</div>
        </div>
      )
}

export default User