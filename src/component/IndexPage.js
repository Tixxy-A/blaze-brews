import img from '../picture/pic4.jpeg';
import img1 from '../picture/pic3.jpg';
import React from 'react';
import {useState} from 'react';
export default function Index() {
    console.log('jeko')
    return (
        <div className="h-screen  absolute bg-red-200">

            <img className="z-0 left- top-0  object-contain  w-full h-1/1" src={img} alt="fuck" />
            <div className=' absolute w-2/5 top-80 left-20 z-30 text-center '>
                <h1 className=' leading-2 p-2 mx-auto text-yellow-700 font-bold font-cursive text-7xl'><span className='bg-yellow-700 rounded-lg text-black px-1'>Celebrate life's finer</span> moments with the touch of class
                </h1>
                <div className='mt-20 flex gap-10 justify-center'>
                    <button class="w-40   flex justify-center items-center text-yellow-200 border-2 rounded-lg border-yellow-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#FBA834,0_0_30px_#FBA834] hover:bg-yellow-500 hover:text-black">
                        Get Started
                    </button>

                    <button class="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
                    Buy Now
                </button>
                    
                    
                </div>
            </div>
            <h1>h1ello</h1>
            <img src={img1}/>
        </div>
    );
}