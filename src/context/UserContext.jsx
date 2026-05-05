import { createContext, useContext, useEffect, useState } from "react";
import authentication from "../auth/auth";

const UserContext = createContext()

export default function UserProvider({children}){
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

      async  function getUserDetails(){
            try {
            const loggedInUser = await authentication.checkUser();
            if(loggedInUser){
                // console.log(loggedInUser)
                setUser(loggedInUser)
                // console.log(user)
            }
            
            
        } catch (error) {
            console.log("Error while checking user in UserContext.js")
        }finally{
            setLoading(false)
        }
        }
        

    useEffect(() => {
        getUserDetails()
    },[])

    return(
    <UserContext.Provider value={{user, setUser, loading}}>
        {children}
    </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)

