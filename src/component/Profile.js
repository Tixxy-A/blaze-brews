import { useContext, useState } from "react";
import { AuthContext } from "../context/UserContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Profile() {
    const { user, setUser } = useContext(AuthContext);
    const [redirect,setRedirect]=useState();
    async function logout(){
        await axios.post('http://localhost:3001/logout');
        setRedirect('/')
        setUser(null);
    }
    console.log(user);
    if(redirect){
        return <Navigate to={redirect}/>
    }
    return (
        <div className="p-8 flex justify-center  ">
            <div className="p-6 text-center w-1/5">
                <h1 className="text-3xl font-cursive font-bold">Profile</h1>
                <h1 className="mt-2 text-3xl font-cursive font-bold">Logged in as {user.name}</h1>
                <div className="w-full mt-3">
                    <button onClick={logout} className="bg-gradient-to-r from-orange-700   w-full h-10 rounded-full text-xl font-crazy text-slate-400 shadow-2xl">logout</button>

                </div>
            </div>
        </div>
    );
}