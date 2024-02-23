import profile from '../picture/profile.jpg'
export default function LoginPage() {
    return (
        <div className="flex justify-center font-crazy">
            <div className="px-14 py-10 mt-20 w-2/5 rounded-3xl bg-gradient-to-r from-red-700 shadow-2xl shadow-current">
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
                            <input className=' px-3 text-left text-white text-xl bg-transparent w-full focus:border-red-500' type='email' placeholder='Email Id' />

                        </div>

                    </div>
                    <hr className="h-px mt-2 bg-white border-3 dark:bg-gray-700"></hr>
                    <div className='flex gap-5 mt-10 '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                        </svg>

                        <div className='flex w-5/6'>
                            <input className='px-3 text-left text-white text-xl font-mono bg-transparent w-full' type='email' placeholder='Password'/>

                        </div>

                    </div>
                    <hr className="h-px mt-2 bg-white border-3 dark:bg-gray-700"></hr>
                </div>
                <button className='p-2 mt-10 w-full rounded-full text-white  text-2xl bg-black'>LogIN</button>
                <div className='text-center text-lg font-lg mt-2'>
                Don't have an account yet?
                <p className='underline text-white' to={'/register'}> Register Now</p>
            </div>
            </div>
        </div>
    );
}