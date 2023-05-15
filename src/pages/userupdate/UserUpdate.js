import '../../App.js'
import './UserUpdate.css'

function UserUpdate({ jwtToken, setPage, selectedUser })
{
    return (
        <div className="App">
            <div>update user details</div>
            <div>
                <label>
                    First Name:
                    <input value={selectedUser.firstName} />
                </label>
            </div>
            <div>
                <label>
                  Surname:
                  <input value={selectedUser.surname} />
                </label>
            </div>
            <div>
                <label>
                  Email:
                  <input value={selectedUser.email} />
                </label>
            </div>
            <div>
                <label>
                  Locality:
                  <i>{selectedUser.locality}</i>
                </label>
            </div>

            <input type="button" className="user-update-buttons" value="view" onClick={ () => setPage('v') } />
            <input type="button" className="user-update-buttons" value="users" onClick={ () => setPage('l') } />
        </div>
    )
}


export default UserUpdate