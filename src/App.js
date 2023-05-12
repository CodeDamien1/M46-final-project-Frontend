import { useState, useEffect } from 'react'
import './App.css'
import Header from './pages/header/Header'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Events from './pages/events/Events'
import Event from './pages/event/Event'
import Users from './pages/users/Users'
import User from './pages/user/User'
import { authCheck, getCookie } from './common'

const App = () =>
{

  const [user, setUser] = useState()
  const [page, setPage] = useState()
  const [events, setEvents] = useState()
  const [event, setEvent] = useState()
  const [cities, setCities] = useState()
  const [selectedUser, setSelectedUser] = useState()
  const [jwt, setJwt] = useState();
  //const [dma, setDma] = useState(607)

 
  useEffect(() => 
  {

    let jwtoken = getCookie("jwt_token");
    console.log(jwtoken)

    if (jwtoken !== false) 
    {
      loginWithToken(jwtoken)
    }

  }, [])

  const loginWithToken = async (jwtoken) => 
  {
    const user = await authCheck(jwtoken)
    setUser({'username':user})
    setJwt(jwtoken)
  }

  const renderPage = () => {
    if (!user) {                        // checks the value of user and returns the appropriate component
      return page === 'r' ? (
        <Register setPage={setPage} />
      ) : (
        <Login setUser={setUser} setPage={setPage} />
      );
    }

    switch (page) {                   // checks the value of page and returns the appropriate component
      case 'l':
        return (
          <Events
            setPage={setPage}
            user={user}
            setEvent={setEvent}
            setEvents={setEvents}
            setCities={setCities}
            dma={607}
          />
        );
      case 'e':
        return (
          <Event
            setPage={setPage}
            events={events}
            event={event}
            cities={cities}
            user={user}
          />
        );
      case 'u':
        return (
          <Users
            jwtToken={jwt}
            setPage={setPage}
            setSelectedUser={setSelectedUser}
            user={user}
          />
        );
      case 'v':
        return <User setPage={setPage} selectedUser={selectedUser} user={user} />;
      default:
        return (
          <Events
            setPage={setPage}
            user={user}
            setEvent={setEvent}
            setCities={setCities}
            dma={607}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header setUser={setUser} setPage={setPage} user={user} />
      {renderPage()}
    </div>
  );
}

export default App;
