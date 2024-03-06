import { Link } from "react-router-dom";
import profile from "../picture/question.jpg";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from 'axios';
export default function ForgetPassword() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState();
    const [sent, setSent] = useState(false);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false);



    async function handler(val) {
        //console.log(val);
        try {
            setloading(true);
            const res = await axios.post('http://localhost:3001/reset-password', val);
            //console.log(res.data);
            setSent(true);

        } catch (e) {
            setloading(false);
            setError(e.response.data.message);
            console.log(e);
        }
    }
    return (
        <div className="flex justify-center font-crazy">

            <div className="px-14 py-10 mt-10 w-2/5 rounded-3xl bg-gradient-to-r from-red-700 shadow-2xl shadow-current">
                {loading && !sent &&
                    <div className="flex justify-center">
                        <svg aria-hidden="true" class="inline w-20 h-20text-gray-200 animate-spin dark:text-white fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                }
                {!loading && !sent &&
                    <form onSubmit={handleSubmit(handler)}>
                        <div className='mt-2 flex justify-center'>
                            <img className='w-1/5 rounded-full  hover:rotate-180 duration-700 hover:-scale-90' src={profile} alt='profile' />
                        </div>
                        <div className="mt-4 flex justify-center">
                            <p className="text-gray-300 text-lg font-simple">To reset your password, please provide your Blaze brews userId</p>
                        </div>

                        <div className='mt-4 '>
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
                                {errors.email && (
                                    <p className="ml-12 mt-2 text-yellow-400 text-sm ">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <hr className="h-px mt-2 bg-white border-3 dark:bg-gray-700"></hr>



                        </div>
                        {error && <div className="flex justify-center mt-2 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow" class="w-7 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>

                            <p className="text-yellow-500 text-2xl font-simple">{error}</p>
                        </div>
                        }
                        <button type="submit" className='p-2 flex justify-center gap-2 mt-4 w-full rounded-full text-white  text-xl bg-black disabled:opacity-55' >

                            Reset password
                        </button>


                        <div className='text-center text-lg font-lg mt-2'>
                            Don't have an account yet?<br></br>
                            <Link className='underline text-white hover:text-blue-950 duration-300' to={'/register'}> Register Now</Link>
                        </div>
                    </form>
                }
                {sent &&
                    <p className="text-white font-simple text-2xl">A mail is sent to your registered email. Go check the mail you will find a link to reset your password.</p>
                }
            </div>
        </div>

    );
}