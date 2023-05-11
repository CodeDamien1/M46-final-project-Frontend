import { useState  } from 'react'
import './App.css'
import Header from './pages/header/Header'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Events from './pages/events/Events'
import Event from './pages/event/Event'
import Users from './pages/users/Users'
import User from './pages/user/User'

function App()
{

  const [user, setUser] = useState()
  const [page, setPage] = useState()
  const [events, setEvents] = useState()
  const [event, setEvent] = useState()
  const [cities, setCities] = useState()
  const [selectedUser, setSelectedUser] = useState()
  //const [dma, setDma] = useState(607)


  return (
    <div className="App">
      <Header setUser={setUser} setPage={setPage} user={user} />
      {
        user 
        ? (page === 'l' ) 
          ? <Events setPage={setPage} user={user} setEvent={setEvent} setEvents={setEvents} setCities={setCities} dma={607} /> 
          : (page === 'e')
            ? <Event setPage={setPage} events={events} event={event} cities={cities} user={user} /> 
            : (page === 'u' ) 
              ? <Users setPage={setPage} setSelectedUser={setSelectedUser} user={user} /> 
              : <User setPage={setPage} selectedUser={selectedUser} user={user} />
        : (page === 'r') 
          ? <Register setPage={setPage} />
          : <Login setUser={setUser} setPage={setPage} />
      }
    </div>
  )
}

export default App;
