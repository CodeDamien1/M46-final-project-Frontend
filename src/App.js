import { useState, useEffect } from 'react'
import ReactModal from "react-modal";
import './App.css'
import Header from './pages/header/Header'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Events from './pages/events/Events'
import Event from './pages/event/Event'
import Users from './pages/users/Users'
import User from './pages/user/User'
import UserUpdate from './pages/userupdate/UserUpdate'
import UserDelete from './pages/userdelete/UserDelete'
import { authCheck, getCookie } from './common'

ReactModal.setAppElement("#root");

function App() {

  const [user, setUser] = useState()
  const [page, setPage] = useState()
  const [events, setEvents] = useState()
  const [event, setEvent] = useState()
  const [cities, setCities] = useState()
  const [selectedUser, setSelectedUser] = useState()
  const [jwt, setJwt] = useState();

  const handleOpenRegisterModal = () => {
    setPage('r');
  };

  const handleCloseRegisterModal = () => {
    setPage('l');
  };

  useEffect(() => {
    let jwtoken = getCookie("jwt_token");
    console.log(jwtoken)

    if (jwtoken !== false) {
      loginWithToken(jwtoken)
    }
  }, [])

  const loginWithToken = async (jwtoken) => {
    const user = await authCheck(jwtoken)
    setUser({ 'username': user })
    setJwt(jwtoken)
  }

  console.log('page:- ', page)

  return (
    <div className="App">
      <Header setUser={setUser} setPage={setPage} user={user} />
      {
        user
          ? (page === 'l')
            ? <Events setPage={setPage} user={user} setEvent={setEvent} setEvents={setEvents} setCities={setCities} dma={607} />
            : (page === 'e')
              ? <Event setPage={setPage} events={events} event={event} cities={cities} user={user} />
              : (page === 'u')
                ? <Users jwtToken={jwt} setPage={setPage} setSelectedUser={setSelectedUser} user={user} />
                : (page === 'v')
                  ? <User jwtToken={jwt} setPage={setPage} selectedUser={selectedUser} user={user} />
                  :(page === 't')
                    ? <UserUpdate jwtToken={jwt} setPage={setPage} selectedUser={selectedUser} user={user} />
                    : (page === 'd')
                      ? <UserDelete jwtToken={jwt} selectedUser={selectedUser} setUser={setUser} setPage={setPage} user={user} />
                      : <Events setPage={setPage} user={user} setEvent={setEvent} setCities={setCities} dma={607} />
        : <Login setUser={setUser} setPage={setPage} handleOpenRegisterModal={handleOpenRegisterModal} />
      }
      <ReactModal 
        isOpen={page === 'r'}
        onRequestClose={handleCloseRegisterModal}
      >
        <Register onClose={handleCloseRegisterModal} />
      </ReactModal>
    </div>
  )
}

export default App;