import React from "react";
import rs from '../picture/RSbarrel.webp'
import bc from '../picture/brocode.webp'

//hover:-scale-90 hover:rotate-180 duration-700
export default function Shop() {
    return (
        <div className="z-0 px-12 grid grid-cols-5 place-items-center mt-10 gap-6 ">
            <div className="px-4 py-4 rounded-xl bg-gradient-to-r from-red-300 to-red-600 shadow-2xl shadow-current hover:scale-110 duration-300">
                <div className="flex justify-between">
                    <h1 className="text-xl">$1000</h1>
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>

                </div>
                <div className="flex justify-center ">
                    <img className="z-10 h-50 aspect-square object-cover" src={rs} alt="BEER" />
                </div>
                <div className="text-center mt-2">
                    <h1 className="text-2xl">royal Stag barrel</h1>


                </div>
                <button className="mt-2 w-full bg-red-900 text-white rounded-xl shadow-xl h-8 ">add to cart</button>
            </div>
            <div className="px-4 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-300 shadow-2xl shadow-current">
                <div className="flex justify-between">
                    <h1 className="text-xl">$1000</h1>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>

                </div>
                <div className="flex justify-center ">
                    <img className="z-10 h-50 aspect-square object-cover" src={bc} alt="BEER" />
                </div>
                <div className="text-center mt-2">
                    <h1 className="text-2xl">bro code beer</h1>


                </div>
                <button className="py-1 mt-2 w-full bg-red-900 text-white rounded-xl shadow-xl ">add to cart</button>
            </div>
            <div className="px-4 py-4 rounded-xl bg-gradient-to-r from-amber-300 to-orange-600 shadow-2xl shadow-current">
                <div className="flex justify-between">
                    <h1 className="text-xl">$1000</h1>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>

                </div>
                <div className="flex justify-center ">
                    <img className="z-10 h-50 aspect-square object-cover" src={rs} alt="BEER" />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl">royal Stag barrel</h1>


                </div>
                <button className="mt-2 w-full bg-red-900 text-white rounded-xl shadow-xl h-8 ">add to cart</button>
            </div>
            <div className="px-4 py-4 rounded-xl bg-gradient-to-r from-sky-300 to-slate-600 shadow-2xl shadow-current">
                <div className="flex justify-between">
                    <h1 className="text-xl">$1000</h1>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>

                </div>
                <div className="flex justify-center ">
                    <img className="z-10 h-50 aspect-square object-cover" src={rs} alt="BEER" />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl">royal Stag barrel</h1>


                </div>
                <button className="mt-2 w-full bg-red-900 text-white rounded-xl shadow-xl h-8 ">add to cart</button>
            </div>
            <div className="px-4 py-4 rounded-xl bg-gradient-to-r from-gray-300 to-slate-600 shadow-2xl shadow-current">
                <div className="flex justify-between">
                    <h1 className="text-xl">$1000</h1>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>

                </div>
                <div className="flex justify-center ">
                    <img className="z-10 h-50 aspect-square object-cover" src={rs} alt="BEER" />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl">royal Stag barrel</h1>


                </div>
                <button className="mt-2 w-full bg-red-900 text-white rounded-xl shadow-xl h-8 ">add to cart</button>
            </div>
            
            
        </div>
    );
}