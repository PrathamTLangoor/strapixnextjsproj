import React, { useState } from 'react'
import { fetcher } from '../../../lib/api';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        identifier: '',
        password: ''
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
            const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, options);
            console.log("Response", response);
            console.log("Response", response.status);
            if (response.jwt) {
                setMessage("Successfully Logged In");
                localStorage.setItem('isAuthenticated', 'true');
                sessionStorage.setItem('Username', formData.identifier)
                router.push("/")
            }
            else {
                setMessage("Incorrect Username or Password");
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='flex items-center justify-center pt-24'>
            <div className=' shadow-lg w-80 rounded-lg'>
                <form className='text-center p-6'>
                    <div className='text-[3rem] text-blue-500 m-2'>
                        Login
                    </div>
                    <div className='text-left mb-6'>
                        <label htmlFor="username" className='text-[1.4rem]'> Username:</label>
                        <input id="identifier" name="identifier" type="text" className='border-b w-full p-2' onChange={handleChange} />
                    </div>
                    <div className='text-left'>
                        <label htmlFor="password" className='text-[1.4rem]'>Password:</label>
                        <input id="password" name="password" type="password" className='border-b w-full p-2' onChange={handleChange} />
                    </div>
                    <button type="submit" onClick={handleSubmit} className='bg-blue-500 mt-4 py-1 px-2 rounded-md text-[1.2rem] text-white'>Submit</button>
                    {message !== "Incorrect Username or Password" ?
                        (
                            <div>{message}</div>
                        ) :
                        (
                            <div className='text-red-400'>{message}</div>
                        )}
                </form>
                <div className='font-light text-center mb-4'>Have no account? <Link href={"/register"} className='underline text-blue-500'>Register</Link></div>
            </div>
        </div>
    )
}

export default Login
