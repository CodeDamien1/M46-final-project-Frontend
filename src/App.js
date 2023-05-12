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
import { authCheck, getCookie } from './common'

ReactModal.setAppElement("#root");

function App() {

  const [user, setUser] = useState()
  const [page, setPage] = useState()
  const [events, setEvents] = useState()
  const [event, setEvent] = useState()
  const [cities, setCities] = useState()
  const [selectedUser, setSelectedUser] = useState()
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [jwt, setJwt] = useState();
  //const [dma, setDma] = useState(607)

  const handleOpenRegisterModal = () => {

    setRegisterModalIsOpen(true);

  };


  const handleCloseRegisterModal = () => {

    setRegisterModalIsOpen(false);

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
                  ? <User setPage={setPage} selectedUser={selectedUser} user={user} />
                  : <Events setPage={setPage} user={user} setEvent={setEvent} setCities={setCities} dma={607} />
          : (page === 'r')
            ?
            <div>

              <button onClick={handleOpenRegisterModal}>Register</button>

              <ReactModal

                isOpen={registerModalIsOpen}

                onRequestClose={handleCloseRegisterModal}

              >

                <Register />

              </ReactModal>

            </div>

            : <Login setUser={setUser} setPage={setPage} />
      }
    </div>
  )
}

export default App;
