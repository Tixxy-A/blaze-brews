import { Link } from 'react-router-dom';
import logo from '../picture/svg.svg'
import logo1 from '../picture/beer1.png';
import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

export default function Header() {
    const { user } = useContext(AuthContext);
    const path=user?'/profile':'/login';

    return (
        <div className='pt-4 px-8 z-20 flex w-full justify-between '>

            <header className=" z-20 h-2/5 flex w-2/5 justify-bet bg-red-50  rounded-xl  duration-300 ">
                <Link to="/" className="flex w-1/4 rounded-lg items-center gap-3 bg-yellow-700">

                    <h1 className="mx-auto font-bold text-xl text-primary">Blaze Brews</h1>
                </Link>
                <div className="flex bg-yellow-50 px-4 py-2 justify-between gap-3 ">
                    <div className='font-semibold'>Anywhere</div>
                    <div className="border-l border-gray-300"></div>
                    <div className='font-semibold'>Any week</div>
                    <div className="border-l border-gray-300"></div>
                    <div className='font-semibold'>Any guest</div>
                    <button className="bg-primary text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </button>
                </div>

            </header>
            <header className='mt-2 w-1/3 flex justify-around'>
                <Link className='flex py-2 px-8 rounded-full h-2/5 text-white outline-dotted'>home</Link>
                <Link className='py-2 px-8 rounded-full h-2/5 text-white  outline-dotted'>about</Link>
                <Link to={path} className='py-2 px-8 rounded-full h-2/5 text-white  outline-dotted '>

                    {
                        user &&
                        <div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                            {user.name}
                        </div>

                    }
                    {
                        !user &&
                        'login'

                    }</Link>
            </header>
            <div className='w-1/6'>


                <Link to={'/shop'} className=' flex justify-end'>
                    <img className='w-2/5 h-1/1 rounded-full z-20 object-cover aspect-square hover:-scale-90 hover:rotate-180 duration-700 ' src={logo1} />
                </Link>

            </div>
        </div>
    );
}