import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface FormData {
    name: string;
    email: string;
    country: string;
    contactNumber: string;
    userRequirement: string;
}

const initialFormData: FormData = {
    name: '',
    email: '',
    country: '',
    contactNumber: '',
    userRequirement: '',
};

const Form = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='p-5 bg-white rounded-lg'>
            <h2 className='font-semibold'>Fill Out The Form</h2>
            <p className='text-sm'>Our team will touch base with you in 24 hours.</p>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-between mt-8 mb-8'>
                    <div >
                        <input
                            type="text"
                            name="name"
                            className='outline-none border-b-2 w-3/4'
                            placeholder='Full Name*'
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            className='outline-none border-b-2 w-3/4'
                            placeholder='Email ID*'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className='flex justify-between mt-8 mb-8'>
                    <div>
                        <input
                            type="text"
                            name="country"
                            className='outline-none border-b-2 w-3/4'
                            placeholder='Country*'
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="contactNumber"
                            className='outline-none border-b-2 w-3/4'
                            placeholder='Contact Number*'
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className='flex justify-between mt-8 mb-8'>
                    <div>
                        <input
                            name="userRequirement"
                            className='outline-none border-b-2 w-3/4'
                            placeholder='Tell us your requirement*'
                            value={formData.userRequirement}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div></div>
                </div>
                <div className='flex items-center'>
                    <button className="text-sm bg-black text-gray-300 py-1 px-3 rounded-full focus:outline-none">
                        Submit
                    </button>
                    <button className='text-sm bg-black text-gray-300 ml-1 p-1.5 rounded-full focus:outline-none'><BsArrowRight /></button>
                </div>
            </form>
        </div>
    );
};

export default Form;
