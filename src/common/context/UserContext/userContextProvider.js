import {useState} from "react";
import UserContext from "./userContext"

const UserContextProvider = ({children}) => {
    const [username, setUsername] = useState(() =>{
        return localStorage.getItem("username")
    })

    const value = {
    username,
    setUsername
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider