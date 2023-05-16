import { deleteCookie } from '../../common'
import '../../App.css'
import './Header.css'
import headerImage from '../../img/logo-no-back.png'

function Header({ setUser, setPage, user }) {

    function logout() {
        deleteCookie('jwt_token')
        setUser()
        setPage()
    }

    return (
        <div className="App">
            <div>
                <img src={headerImage} height="100px" width="auto" alt=""></img>
                <div className="header-line">
                    {
                        user
                            ?
                            <div>

                                User: <i> {user.username}</i>
                                <input type="button" value="logout" className="delete-button" onClick={() => logout()} />
                            </div>
                            : <div></div>
                    }
                </div>
            </div>

        </div >
    )
}

export default Header