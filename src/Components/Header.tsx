import React from 'react'
import {BsArrowRight} from 'react-icons/bs'


function Header() {
    return (
        <div className="bg-black text-white p-4">
            <div className="w-3/4 container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Tech</h1>
                </div>
                <div className="flex space-x-4">
                    <p className="text-gray-400 text-sm hover:text-gray-300">
                        Solutions
                    </p>
                    <p className="text-gray-400 text-sm hover:text-gray-300">
                        Services
                    </p>
                    <p className="text-gray-400 text-sm hover:text-gray-300">
                        About
                    </p>
                    <p className="text-gray-400 text-sm hover:text-gray-300">
                        Culture
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <button className="text-sm bg-gray-700 hover:bg-gray-800 text-gray-300 py-1 px-3 rounded-full focus:outline-none">
                        Contact us
                    </button>
                    <button className='text-sm bg-gray-700 hover:bg-gray-800 text-gray-300 p-1.5 rounded-full focus:outline-none'><BsArrowRight/></button>
                </div>
            </div>
        </div>
    )
}

export default Header
