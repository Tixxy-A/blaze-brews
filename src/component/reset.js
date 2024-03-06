import { useForm } from 'react-hook-form';
import reset from '../picture/reset.jpg';
import { useContext, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/UserContext';
export default function Reset() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const {user,setUser}=useContext(AuthContext);
    const [error, setError]=useState(false);
    const [redirect, setRedirect]=useState(false);
    const {token}=useParams();
    async function formSubmit(val){
        // console.log(typeof(watch('password')));
        // console.log(watch('conf-password'));
        const val1={...val,token};
        console.log(val1);
        if(watch('conf-password')!==watch('password')){
            setError('Passwords must match. try Again')
        }else{
            try{
                const res=await axios.post('http://localhost:3001/new-password',val1);
                setUser(res.data);
                setRedirect('/shop');

            }
            catch(e){
                console.log(e);
            }
            
        }
    }
    if(redirect){
        return <Navigate to={redirect} />
    }
    return (
        <div className="flex justify-center font-crazy">

            <div className="px-14 py-10 mt-10 w-2/5 rounded-3xl bg-gradient-to-r from-red-600  shadow-2xl shadow-current">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className='mt-2 flex justify-center'>
                        <img className='w-1/5 rounded-full  hover:rotate-180 duration-700 hover:-scale-90' src={reset} alt='profile' />
                    </div>

                    <div className='mt-8 '>
                        <div className='flex gap-5 '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                                <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                            </svg>

                            <div className='flex w-5/6'>
                                <input className=' px-3 text-left text-white text-xl bg-transparent w-full focus:border-red-500 outline-none' type='password' placeholder='password'
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Please enter email",
                                        },
                                    })} />

                            </div>

                        </div>
                        
                        <hr className="h-px mt-2 bg-white border-3 dark:bg-gray-700"></hr>
                        <div className='flex gap-5 mt-10 '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                                <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                            </svg>

                            <div className='flex w-5/6'>
                                <input className='px-3 text-left text-white text-xl font-mono bg-transparent w-full outline-none' type='password' placeholder='Confirm-Password'
                                    {...register("conf-password", {
                                        required: {
                                            value: true,
                                            message: "Please enter password",
                                        },
                                    })} />

                            </div>

                        </div>
                        
                        <hr className="h-px mt-2 bg-white border-3 dark:bg-gray-700"></hr>
                        
                    </div>
                    <button type='submit' className='p-2 flex justify-center gap-2 mt-8 w-full rounded-full text-white  text-2xl bg-black disabled:opacity-55'>
                        Reset</button>
                        {error && 
                         <div className='flex justify-center mt-3'>
                         <p className='text-yellow-600 text-xl font-simple font-semibold'>{error}</p>
                         </div>
                        }
                    
                    
                </form>
            </div>
        </div>
    )
}
