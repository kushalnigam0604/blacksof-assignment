import React from 'react'

function Footer() {
    const buttons = ['evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin'];
    return (
        <div className='text-white flex flex-col items-center'>
            <div className='m-3 text-gray-300'>
                Leading the charge for industries!
            </div>
            <div className="flex justify-around w-full">
                {buttons.map((label, index) => (
                    <button key={index} className="text-sm text-black bg-white py-1 px-5 rounded-md">
                        {label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Footer
