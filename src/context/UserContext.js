import axios from 'axios';
import {createContext, useState,useEffect, } from 'react';
import { redirect } from 'react-router-dom';

export const AuthContext = createContext();
export function UserContextProvider({children}){
    const [user,setUser] = useState(null);
    useEffect(()=>{
        if(!user){
            try{
                axios.get('http://localhost:3001/profile').then(res=>{
                    setUser(res.data);
                    console.log(res.data);
                })
            }catch(e){
                redirect('/');
                console.log(e);
            }
        }
    },[])
    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

