import '../../App.js'
import './User.css'

function User({ setPage, selectedUser, user })
{
    return (
        <div className="App">
          <div>user     User: {user.username} </div>
          <div>
            <div>{selectedUser.username}</div>
          </div>
          <div>
                do you want to delete this user?
          </div>
          <div>
            <input type="button" value="no" onClick={ () => setPage('u')} />
            <input type="button" value="yes" onClick={ () => alert('under construction')} />
        </div>
        </div>
      )
}
export default User