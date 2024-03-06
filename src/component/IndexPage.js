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
            <div className=' absolute w-2/5 top-60 left-20 z-10 text-center '>
                <h1 className=' leading-normal  font-crazy text-6xl font-semibold text-sky-400'>Celebrate life's finer moments with the touch of class 
                </h1>
                <div className='mt-5'>
                <p className='text-gray-300 text-lg font-simple leading-normal'>Blaze Brews is a leading online platform dedicated to providing beer enthusiasts with a wide selection of high-quality beers delivered straight to their doorstep. We cater to customers who appreciate the craft and artistry behind brewing, offering an extensive range of unique and flavorful brews from both local and international breweries.</p>
                </div>
                <div className='mt-20 flex gap-10 justify-center'>
                    <Link to={'/login'} class="w-40 flex justify-center items-center text-yellow-200 border-2 rounded-lg border-sky-600 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#0C359E,0_0_30px_#0C359E] hover:bg-sky-300 hover:text-black" onClick={()=><Navigate to={'/login'}/>}>
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