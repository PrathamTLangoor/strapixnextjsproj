import React, { useState } from 'react'
import { fetcher } from '../../../lib/api';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Register = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
            const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`, options);
            console.log("Response", response);
            console.log("Response", response.status);
            if (response.jwt) {
                setMessage("Successfully Registered");
                router.push("/")
            }
            else {
                setMessage("Error");
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='flex items-center justify-center pt-24'>
            <div className=' shadow-lg w-80 rounded-lg'>
                <form onSubmit={handleSubmit} className='text-center p-6'>
                    <div className='text-[3rem] text-blue-500 m-2'>
                        Register
                    </div>
                    <div className='text-left mb-6'>
                        <label htmlFor="username" className='text-[1.4rem]'> Username:</label>
                        <input id="username" name="username" type="text" className='border-b w-full p-2' onChange={handleChange} />
                    </div>
                    <div className='text-left mb-6'>
                        <label htmlFor="password" className='text-[1.4rem]'>Email:</label>
                        <input id="email" name="email" type="password" className='border-b w-full p-2' onChange={handleChange} />
                    </div>
                    <div className='text-left'>
                        <label htmlFor="password" className='text-[1.4rem]'>Password:</label>
                        <input id="password" name="password" type="password" className='border-b w-full p-2' onChange={handleChange} />
                    </div>
                    <button type="submit" className='bg-blue-500 mt-4 py-1 px-2 rounded-md text-[1.2rem] text-white'>Submit</button>
                    {message !== "Incorrect Username or Password" ?
                        (
                            <div>{message}</div>
                        ) :
                        (
                            <div className='text-red-400'>{message}</div>
                        )}
                </form>
                <div className='font-light text-center mb-4'>Already have an account? <Link href={"/login"} className='underline text-blue-500'>Login In</Link></div>
            </div>
        </div>
    )
}

export default Register
