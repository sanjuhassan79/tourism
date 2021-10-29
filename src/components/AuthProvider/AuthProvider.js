import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hook/usefirebase';



export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const useFirebasr__allContext=useFirebase()
    return (
        <div>
            <AuthContext.Provider value={useFirebasr__allContext}>

            {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;