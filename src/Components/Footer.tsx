import React from 'react'

function Footer() {
    const values = ['evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin', 'evolphin'];
    return (
        <div className='text-white flex flex-col items-center'>
            <div className='m-3 text-gray-300'>
                Leading the charge for industries!
            </div>
            <ul className="flex items-center list-none max-w-full overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-none no-scrollbar">
                {values.map((d, i) => (
                    <li className="bg-white text-black p-1 rounded-md mx-2 whitespace-nowrap">
                        {d}
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Footer
