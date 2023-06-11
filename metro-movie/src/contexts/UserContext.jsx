import { onAuthStateChanged } from "@firebase/auth";
import React, {userContext, createContext, useState, useEffect} from "react";
export const UserContext = createContext(null)
import { auth } from "../firebase/firebaseConfig";
import { getUserProfile } from "../firebase/users-service";

export function UserContextProvider({ children }){
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect (() =>{
        onAuthStateChanged(auth, async (firebaseUser) => {
            setIsLoading(true);
            if (firebaseUser){
                const profile = await getUserProfile(firebaseUser.email);
                setUser(profile);
            }else{
                setUser(null);
            }
            setIsLoading(false);

        });
    })
    return (<UserContext.Provider value ={{
        user, isLoading,
    }}>
        {children}
        </UserContext.Provider>);
}

export function useUser (){
    return useContext(UserContext);
}