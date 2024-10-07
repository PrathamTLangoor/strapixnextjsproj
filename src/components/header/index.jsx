import React from 'react';
import Link from 'next/link';
import { SiApacheopenoffice } from "react-icons/si";
import { RiSpeedUpLine } from "react-icons/ri";
const Header = () => {
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
          <Link href={"/manager"} className='text-white hover:text-blue-500'>
            Managers
          </Link> 
          <Link href={"/project"} className='text-white hover:text-blue-500'>
            Projects
          </Link> 
          <Link href={"/about-us"} className='text-white hover:text-blue-500'>
            About Us
          </Link> 
          <Link href={"/login"} className='text-white bg-blue-500 p-2 rounded-lg hover:bg-white hover:text-blue-500'>
            Log In
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default Header