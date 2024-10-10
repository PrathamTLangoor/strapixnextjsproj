import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SiApacheopenoffice } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { Avatar } from 'rsuite';
import 'rsuite/Avatar/styles/index.css'
import { fetcher } from '../../../lib/api';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setIsLoggedIn(isAuthenticated);
    }
  }, []);

  const handleLogOut = async () => {
    localStorage.setItem("isAuthenticated", "false");
    sessionStorage.setItem("Username", "");
    setIsLoggedIn(false);
  };
  return (
    <div className='w-full p-5 bg-black rounded-bl-xl fixed top-0'>
      <div className='flex justify-between items-center'>
        <Link href={"/"} className='flex items-center gap-3'>
          <div className='text-[2rem] '>
            <SiApacheopenoffice className=' text-white' />
          </div>
          <div className=' text-[1.2rem] text-white font-bold comp-name'>
            <span className='italic font-light text-blue-500'>Go Go </span>Employee
          </div>
        </Link>
        <div className='flex items-center gap-7 mr-4 font-bold'>
          <Link href={"/"} className='text-white hover:text-blue-500'>
            Home
          </Link>
          <Link href={"/employee"} className='text-white hover:text-blue-500'>
            Employees
          </Link>
          {/* <Link href={"/manager"} className='text-white hover:text-blue-500'>
            Managers
          </Link>
          <Link href={"/project"} className='text-white hover:text-blue-500'>
            Projects
          </Link> */}
          {/* <Link href={"/about-us"} className='text-white hover:text-blue-500'>
            About Us
          </Link> */}
          <Link href={"/attendance"} className='text-white hover:text-blue-500'>
            Attendance
          </Link>
          <Link href={"/login"} className='text-white bg-blue-500 p-2 rounded-lg hover:bg-white hover:text-blue-500'>
            Log In
          </Link>
          <Link href={"/login"} onClick={handleLogOut} className='bg-red-700 text-white text-[1.4rem] rounded-md p-2 hover:text-red-950'>
            <IoIosLogOut />
          </Link>
          <Link href={"/profile"} className='text-white flex gap-1 items-center bg-white p-2 rounded-full'>
            <Avatar circle className='text-white w-8 h-8' />
            <div className='text-[1rem] text-black'>Profile</div>
          </Link>
          {/* {isLoggedIn ? (
            <Link href={"/login"} onClick={handleLogOut} className='bg-red-800 text-white text-[1.4rem] rounded-md p-2'>
              <IoIosLogOut />
            </Link>
          )
            :
            (
              <Link href={"/login"} className='text-white bg-blue-500 p-2 rounded-lg hover:bg-white hover:text-blue-500'>
                Log In
              </Link>
            )
          } */}
        </div>
      </div>
    </div>
  )
}

export default Header