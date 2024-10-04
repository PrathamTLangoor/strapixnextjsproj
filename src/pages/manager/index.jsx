import React from 'react';
import { IoChevronBack } from "react-icons/io5";
import Link from 'next/link';
import ManagerCard from '@/components/managerCard';
import { fetcher } from '../../../lib/api';

const Manager = ({ managers }) => {
    return (
        <div>
            <div>
                <Link href={"/employee"} className=' flex gap-1 items-center pt-2 pl-2 w-[85px] hover:underline hover:decoration-blue-500 underline-offset-2'>
                    <IoChevronBack size={20} className='no-underline'/>
                    <div className='text-black text-[1.2rem]'>
                        Back
                    </div>
                </Link>
                <div className='text-[3rem] font-semibold w-full text-center'>
                    Managers
                </div>
                <ManagerCard managers={managers} />
            </div>
        </div>
    )
}

export default Manager

export async function getStaticProps() {
    const managerResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/managers`);
    console.log(managerResponse);
    return {
        props: {
            managers: managerResponse
        }
    }
}