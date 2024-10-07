import React from 'react';
import Link from 'next/link';
import { SiApacheopenoffice } from "react-icons/si";

const Footer = () => {
    return (
        <div className=' h-32 bg-black w-full'>
            <div className='h-full flex items-end'>
                <div className='w-full'>
                    <hr className='text-slate-500 opacity-25 w-full' />
                    <div className='text-white text-center p-4 opacity-75'>
                        <Link href={"/"} className='flex items-center gap-3'>
                            <div className='text-[1.4rem] '>
                                <SiApacheopenoffice className=' text-white' />
                            </div>
                            <div className=' text-[1rem] text-white font-bold comp-name'>
                                <span className='italic font-light text-blue-500'>Go Go </span>Employee
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
