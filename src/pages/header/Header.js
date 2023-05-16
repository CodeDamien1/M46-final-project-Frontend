import { deleteCookie } from '../../common'
import '../../App.css'
import './Header.css'

function Header({ setUser, setPage, user }) {

    function logout() {
        deleteCookie('jwt_token')
        setUser()
        setPage()
    }

    return (
        <div className="App">
            <div>
                <div className="header-line">
                    {
                        user
                            ? <div>
                                User: <i> {user.username}</i>
                                <input type="button" value="logout" className="delete-button" onClick={() => logout()} />
                            </div>
                            : <div></div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Header