import { useState } from 'react'
import { getDmas } from '../../data'
import { updateUser } from '../../utils'
import '../../App.js'
import './UserUpdate.css'

function UserUpdate({ jwtToken, setPage, selectedUser })
{
    const [fname, setFname] = useState(selectedUser.firstName)
    const [sname, setSname] = useState(selectedUser.surname)
    const [email, setEmail] = useState(selectedUser.email)
    const [locality, setLocality] = useState()
    const [message, setMessage] = useState()
    
    const prev = 
        {fname:selectedUser.firstName
        ,sname:selectedUser.surname
        ,email:selectedUser.email
        ,locality:selectedUser.locality
        }
        
    const dmas = getDmas('uk')

    const userUpdate = async (e) =>
    {
        e.preventDefault() // will not refresh the browser
       
        try 
        {
            const data = {fname:'', sname:'', email:'', locality:'', message:''}
            
            if (fname !== prev.fname)
            {
                data.fname = await updateUser(jwtToken, 'firstName', fname, selectedUser.username)
                console.log('UserUpdate.js fname data: ', data.fname.message)
                data.message = data.fname.message
            }

            if (sname !== prev.sname)
            {
                data.sname = await updateUser(jwtToken, 'surname', sname, selectedUser.username)
                console.log('UserUpdate.js sname data: ', data.sname.message)
                data.message = data.sname.message
            }

            if (email !== prev.email)
            {
                data.email = await updateUser(jwtToken, 'email', email, selectedUser.username)
                console.log('UserUpdate.js email data: ', data.email.message)
                data.message = data.email.message
            }

            if (locality  !== prev.locality)
            {
                data.locality = await updateUser(jwtToken, 'locality', locality, selectedUser.username)
                console.log('UserUpdate.js locality data: ', data.locality.message)
                data.message = data.locality.message
            }    
           
            setPage('u')

        } 
        catch (error) 
        {
            console.log('UpdateUser.js error - ', error)
            setMessage(error)
            setPage('t')
        }
    }

    return (
        <div className="App">
            <div>update user details</div>
            <div align="center">
                <table>
                <tr>
                    <td>
                        First Name:
                    </td>
                    <td>
                        <input type="text" value={fname} className="user-update-data" onChange={ (e) => setFname(e.target.value) } />
                    </td>
                </tr>
                <tr>
                    <td>
                      Surname:
                    </td>
                    <td>
                      <input type="text" value={sname} className="user-update-data" onChange={ (e) => setSname(e.target.value) } required />
                    </td>
                </tr>
                <tr>
                    <td>
                      Email:
                    </td>
                    <td>
                      <input type="text" value={email} className="user-update-data" onChange={ (e) => setEmail(e.target.value) } required />
                    </td>
                </tr>
                <tr>
                    <td>
                      Locality:              
                    </td>
                    <td>
                        <select className="user-update-data" onChange={(e) => setLocality(e.target.value)}>
                        {
                            dmas.map
                            ((dma, index) => 
                                {
                                    if (dma.value === selectedUser.locality)
                                    {
                                        return <option value={dma.value} selected>{dma.label}</option>
                                    }
                                    else
                                    {
                                    return <option value={dma.value}>{dma.label}</option>
                                    }
                                }
                            )
                        }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>   
                        <form onSubmit={userUpdate} >
                            <div className="user-update-buttons">
                            <input type="button" className="user-update-button" value="users" onClick={ () => setPage('u') } />
                            <input type="button" className="user-update-button" value="events" onClick={ () => setPage('l') } />
                            <input type="submit" className="user-update-button" value="update" />
                            </div>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td colSpan="100%">{message}</td>
                </tr>
                </table>
            </div>
        </div>
    )
}


export default UserUpdate