import '../../App.css'

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
            <div className="logo">OurApp</div>
                {
                    user ? <div><input type="button" value="logout" onClick={ () => logout() } /></div> : <div></div>
                }
        </div>

    </div>
  )
}

export default Header