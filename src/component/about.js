
import React from 'react';
import background from '../picture/pic2.jpg';
export default function AboutPage()  {
  return (
  
    <div className="max-w-[1320px]   md:py-[80px] py-5 flex mx-auto">
        <div className='basis-[45%]'>
        <img className='w-full rounded-2xl' src={background} alt='baground'></img>
      
        </div>
        <div className='basis-[55%]'>
            <h1 className='text-center'>ABOUT</h1>
        </div>
    </div>
  );
};


