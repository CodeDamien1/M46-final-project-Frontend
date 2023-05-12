import '../../App.css'
import './Header.css'

function Header({ setUser, setPage, user })
{

    function logout()
    {
        setUser()
        setPage('l')
    }

  return (
    <div className="App">
        <div>
            <div className="logo">OurApp
                {
                    user ? <div><input type="button" value="logout" className="delete-button" onClick={ () => logout() } /></div> : <div></div>
                }
            </div>
        </div>

    </div>
  )
}

export default Header