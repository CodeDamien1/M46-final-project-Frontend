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
    /*
    const prev = 
        {fname:selectedUser.firstName
        ,sname:selectedUser.surname
        ,email:selectedUser.email
        ,locality:selectedUser.locality
        }
    
    console.log('UserUpdate prev - ', prev)
        */
    const dmas = getDmas('uk')


    const userUpdatee = async (e) =>
    {
        console.log('userUpdatee')
        e.preventDefault() // will not refresh the browser

        /*
        try 
        {
    
            const data = {fname:'', sname:'', email:'', locality:'', message:''}
            console.log('UserUpdate.js fname: ', fname )
            
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
            //const data = await updateUser(jwtToken)    
           
            setPage('v')

        } 
        catch (error) 
        {
            console.log('UpdateUser.js error - ', error)
            setMessage(error)
            setPage('t')
        }
        */
        setPage('v')
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
                        <input type="text" value={fname} onChange={ (e) => setFname(e.target.value) } />
                    </td>
                </tr>
                <tr>
                    <td>
                      Surname:
                    </td>
                    <td>
                      <input type="text" value={sname} onChange={ (e) => setSname(e.target.value) } required />
                    </td>
                </tr>
                <tr>
                    <td>
                      Email:
                    </td>
                    <td>
                      <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } required />
                    </td>
                </tr>
                <tr>
                    <td>
                      Locality:              
                    </td>
                    <td>
                        <select onChange={(e) => setLocality(e.target.value)}>
                        {
                            dmas.map
                            ((dma, index) => 
                                {
                                    return <option value={dma.value}>{dma.label}</option>             
                                }
                            )
                        }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        
                        <input type="button" className="user-update-button" value="view" onClick={ () => setPage('v') } />
                        <input type="button" className="user-update-button" value="users" onClick={ () => setPage('u') } />
                        
                        <form onChange={userUpdatee} className="user-update-buttons" >
                            <button className="user-update-button">update</button>
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