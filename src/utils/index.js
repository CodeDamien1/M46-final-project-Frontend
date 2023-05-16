import { writeCookie } from '../common'

export const loginUser = async (username, password) => {
    console.log('login User - username ' + username)
    console.log('login User - password ' + password)

    try {
        const response = await fetch
            (`${process.env.REACT_APP_BASE_URL}/users/login`,
                {
                    method: 'POST'
                    , headers: { "Content-Type": "application/json" }
                    , body: JSON.stringify
                        (
                            {"username": username
                            ,"password": password
                            }
                        )
                }
            )

        const data = await response.json()
        console.log('After response: ' + JSON.stringify(data))

        writeCookie('jwt_token', data.user.token, 7)

        if (data.error) 
        {
            return { message: data.error, loginValid: false }
        }
        else 
        {
            return { user: data.user, loginValid: true }
        }

    }
    catch (error) 
    {
        console.log('Login User: ' + error)
        return { message: 'Login error (utils/index.js) - ' + error, loginValid: false }
    }
}

export const registerUser = async (firstName, surname, email, locality, username, password) => {
    try {

        const response = await fetch

            (`${process.env.REACT_APP_BASE_URL}/users/register`,
                {
                    method: 'POST'
                    , headers: { "Content-Type": "application/json" }
                    , body: JSON.stringify
                        (
                            {"firstName": firstName
                            ,"surname": surname
                            ,"email": email
                            ,"locality": locality
                            ,"username": username
                            ,"password": password
                            }
                        )
                }
            )
        console.log('locality:', locality)
        const data = await response.json()

        if (data.errorMessage) 
        {
            return { message: data.errorMessage, userCreated: false }
        }
        else 
        {
            return { message: data.message, user: data.user, userCreated: true }
        }
    }
    catch (error) {
        console.log(error)
        return { message: 'Create User error (utils/index.js) - ' + error.message, userCreated: false }
    }
}

export const getAllUsers = async (jwtToken) => {
    try {
        const response = await fetch
            (`${process.env.REACT_APP_BASE_URL}/users/getallusers`,
                {method: "GET"
                ,headers:
                    {"Content-Type": "application/json"
                    ,Authorization: `Bearer ${jwtToken}`
                    }
                }
            )

        const data = await response.json();

        if (data.errorMessage) 
        {
            return { message: 'Get Users error (utils/index.js) - ' + data.errorMessage }
        }
        else 
        {
            return { users: data.users, message: data.message }
        }

    }
    catch (error) {
        console.log(error)
        return { message: 'Get Users error (utils/index.js) - ' + error.message }
    }

}

export const updateUser = async (jwtToken, key, value, username) => 
{
    try {
        const response = await fetch
            (`${process.env.REACT_APP_BASE_URL}/users/updateuser`,
                {method: "PUT"
                ,headers:
                    {"Content-Type": "application/json"
                    ,Authorization: `Bearer ${jwtToken}`
                    }
                , body: JSON.stringify
                    (
                        {"updateKey": key
                        ,"updateValue": value
                        ,"username": username
                        }
                    )
                }
            )

        const data = await response.json();

        if (data.errorMessage) 
        {
            return { message: 'Update Users error (utils/index.js) - ' + data.errorMessage }
        }
        else 
        {
            return { message: data.updateResult }
        }

    }
    catch (error) {
        console.log(error)
        return { message: 'Update Users error (utils/index.js) - ' + error.message }
    }

}


export const deleteUser = async (username, jwtToken) => {
    console.log('deleteUser (utils/index.js) username: ', username, ' jwtToken: ', jwtToken)
    try {
        const response = await fetch
        (`${process.env.REACT_APP_BASE_URL}/users/deleteuser`,
            {method: 'DELETE'
            ,headers: 
                {"Content-Type": "application/json"
                ,Authorization: `Bearer ${jwtToken}`
                }
            ,body: JSON.stringify
              (
                {"username":username}
              )
            }
        )

        const data = await response.json() 
        console.log('deleteUser (utils/index.js) - data', data)
        if (data.errorMessage)
        {
            return {deleteSuccessful:false, message:data.errorMessage}
        }
        else if (data.message === 'failure') 
        {
            return { deleteSuccessful: false, message: 'Delate of User "' + username + '" failed middleware error ' + data.message }
        }
        else 
        {
            return { deleteSuccessful: true, message: 'User "' + username + '" successfully deleted from the table Users' }
        }
    }
    catch (error) {
        console.log(error)
        return { message: 'Delete error (utils/index.js) - ' + error.message }
    }
}
