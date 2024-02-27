import profile from '../picture/profile.jpg'
import { useForm } from 'react-hook-form';
import { Link, redirect } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
export default function RegisterPage() {
    const { register, watch, handleSubmit, formState: { errors, isValid }, } = useForm();
    const [completion, setCompletion] = useState(false);
    async function formSubmit(data) {
        //console.log(data);
        //console.log(watch(['name']));
        try {
            const response = await axios.post('http://localhost:3001/register', data);
            //console.log(response.data);
            setCompletion(true);
        } catch (e) {
            console.log(e);
            redirect('/');
        }



    }

    return (
        <div className="flex justify-center font-crazy">
            <div className="px-14 py-10 mt-15 w-2/5 rounded-3xl bg-gradient-to-r from-red-700 shadow-2xl shadow-current">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className='mt-2 flex justify-center'>
                        <img className='w-1/5 rounded-full  hover:rotate-180 duration-700 hover:-scale-90' src={profile} alt='profile' />
                    </div>
                    <div className='mt-8 '>
                        <div className='flex gap-5 '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                            <div className='flex w-5/6'>
                                <input className=' px-3 text-left text-white text-xl bg-transparent w-full focus:border-red-500 outline-none' type='text' placeholder='Name'
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Please enter name",
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
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>

                            <div className='flex w-5/6'>
                                <input className=' px-3 text-left text-white text-xl bg-transparent w-full focus:border-red-500 outline-none' type='email' placeholder='Email Id'
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Please enter email address",
                                        },
                                    })} />

                            </div>

                        </div>
                        <div className='flex justify-cen'>
                            {errors.email && (
                                <p className="ml-12 mt-2 text-yellow-400 text-sm ">
                                    {errors.email.message}
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
                        <div className='flex justify-cente'>
                            {errors.password && (
                                <p className="ml-12 mt-2 text-yellow-400 text-sm ">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <hr className="h-px mt-2 bg-white border-3 dark:bg-gray-700"></hr>
                    </div>
                    <button className='p-2 mt-10 w-full rounded-full text-white text-2xl bg-black' type='submit'>Register</button>
                    {completion &&
                        <div className='mt-2 text-green-600 font-simple text-center flex justify-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                            </svg>

                            Registration is completed </div>
                    }
                    <div className='text-center text-lg font-lg mt-2'>
                       {!completion &&  <p>already have an account?<br></br></p>}
                        <Link className='underline text-white hover:text-blue-950 duration-300' to={'/login'}> login now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}