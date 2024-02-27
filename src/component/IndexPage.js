import img from '../picture/pic4.jpeg';
import img1 from '../picture/pic3.jpg';
import React from 'react';
import {useState} from 'react';
import { Link, Navigate, redirect } from 'react-router-dom';
export default function Index() {
    function redirected(){
        redirect('/login');
    }
    return (
        <div className="h-screen absolut">

            <img className="z-0 absolute left- top-0  object-contain  w-full" src={img} alt="fuck" />
            <div className=' absolute w-2/5 top-60 left-20 z-30 text-center '>
                <h1 className=' leading-normal p-2 mx-auto text-yellow-700 font-bold font-crazy text-7xl'><span className='bg-yellow-700 rounded-lg text-black px-2'>Celebrate life's finer</span> moments with the touch of class
                </h1>
                <div className='mt-20 flex gap-10 justify-center'>
                    <Link to={'/login'} class="w-40 flex justify-center items-center text-yellow-200 border-2 rounded-lg border-yellow-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#FBA834,0_0_30px_#FBA834] hover:bg-yellow-500 hover:text-black" onClick={()=><Navigate to={'/login'}/>}>
                        Get Started
                    </Link>

                    <button class="w-30 border-2 border-yellow-600 rounded-lg px-4 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
                    Buy Now
                </button>
                    
                    
                </div>
            </div>
            <h1>h1ello</h1>
            <img src={img1}/>
        </div>
    );
}