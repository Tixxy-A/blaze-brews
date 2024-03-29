import axios from 'axios';
import profile from '../picture/profile.jpg'
import { useForm } from 'react-hook-form';
import { Link, Navigate, redirect } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/UserContext';
export default function LoginPage() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useContext(AuthContext);
    const [redirect, setRedirect] = useState();
    const [ready, setReady] = useState(false);
    
    const [message, setMessage] = useState(false);
    


    //console.log(user);
    //console.log(message);
   // console.log(ready);
    async function formSubmit(val) {
        //console.log(val);
        try {
            const res = await axios.post('http://localhost:3001/login', val);
            setUser(res.data);
            //console.log(res.data);
            setReady(false);
            setRedirect('/shop');
        } catch (e) {
            setReady(true);
            //console.log(e)
            setMessage(e.response.data.message);
            setTimeout(()=>{
                setReady(false);
            }, 3000);
        }
    }
    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div className="flex justify-center font-crazy">

            <div className="px-14 py-10 mt-10 w-2/5 rounded-3xl bg-gradient-to-r from-red-700 shadow-2xl shadow-current">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className='mt-2 flex justify-center'>
                        <img className='w-1/5 rounded-full  hover:rotate-180 duration-700 hover:-scale-90' src={profile} alt='profile' />
                    </div>

                    <div className='mt-8 '>
                        <div className='flex gap-5 '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>

                            <div className='flex w-5/6'>
                                <input className=' px-3 text-left text-white text-xl bg-transparent w-full focus:border-red-500 outline-none' type='email' placeholder='Email Id'
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Please enter email",
                                        },
                                    })} />

                            </div>

                        </div>
                        <div className='flex justify-left'>
                            {errors.name && (
                                <p className="ml-12 mt-2 text-yellow-400 text-sm ">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <hr className="h-px mt-2 bg-white border-3 dark:bg-gray-700"></hr>
                        <div className='flex gap-5 mt-10 '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                                <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                            </svg>

                            <div className='flex w-5/6'>
                                <input className='px-3 text-left text-white text-xl font-mono bg-transparent w-full outline-none' type='password' placeholder='Password'
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Please enter password",
                                        },
                                    })} />

                            </div>

                        </div>
                        <div className='flex justify-left'>
                            {errors.name && (
                                <p className="ml-12 mt-2 text-yellow-400 text-sm ">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <hr className="h-px mt-2 bg-white border-3 dark:bg-gray-700"></hr>
                        <div className='mt-2 flex justify-end'><Link to={'/forget-password'} className='text-white text-lg hover:text-blue-300'>Forget password?</Link></div>
                    </div>
                    <button type='submit' className='p-2 flex justify-center gap-2 mt-4 w-full rounded-full text-white  text-2xl bg-black disabled:opacity-55' disabled={ready}>
                        {ready && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        }
                        LogIN</button>
                    {ready &&
                        <p className='text-center mt-2 text-yellow-400 text-2xl'>{message}</p>
                    }
                    <div className='text-center text-lg font-lg mt-2'>
                        Don't have an account yet?<br></br>
                        <Link className='underline text-white hover:text-blue-950 duration-300' to={'/register'}> Register Now</Link>
                    </div>
                </form>
            </div>
        </div>

    );
}