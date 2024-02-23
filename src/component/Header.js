import { Link } from 'react-router-dom';
import logo from '../picture/svg.svg'
import logo1 from '../picture/beer1.png';


export default function Header() {

    return (
        <div className='pt-4 px-8 z-20 flex w-full justify-between '>

            <header className=" z-20 h-2/5 flex w-2/5 justify-bet bg-red-50  rounded-xl  duration-300 ">
                <Link to="/" className="flex w-1/4 rounded-lg items-center gap-3 bg-yellow-700">

                    <h1 className="mx-auto font-bold text-xl text-primary">Blaze Brews</h1>
                </Link>
                <div className="flex bg-yellow-50   px-4 py-2 justify-between gap-3 ">
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
            <button className='w-1/6 flex justify-end'>
                <img className='w-2/5 h-3/3 rounded-full z-20 object-cover aspect-square hover:-scale-90 hover:rotate-180 duration-700 ' src={logo1} />
            </button>
        </div>
    );
}