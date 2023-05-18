import { useState } from 'react';
import '../App.css';

function Users({ setPage, user, users })
{
    const [selected, setSelected] = useState()

  return (
    <div className="App">
      <div>users     User: {user.username} </div>
      <div>
        {
            selected
            ?
            <div>
                {users.data[selected.username].username}
                <div><input type="button" value="user list" onClick={ () => setSelected() } /></div>
            </div>

            :
            users.array.map
            ((usr, index) =>
                {
                    return <div className="users-list"><input type="button" value={usr.username} className="users-item" onClick={ () => setSelected({username:usr.username}) } /></div>
                }
            )
        }
      </div>
      <div><input type="button" value="events" onClick={ () => setPage('e')} /></div>
    </div>
  )
}

export default Users