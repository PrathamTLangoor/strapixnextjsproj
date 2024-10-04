import React from 'react';
import { useRouter } from 'next/router';
import { fetcher } from '../../../../lib/api';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";
import Image from 'next/image';
import { MdEmail, MdDateRange } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { HiMiniIdentification } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

const ManagerDetail = ({ manager }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!manager) {
        return <div>Manager not found</div>;
    }

    return (
        <div className="w-full pb-[130px]">
            <Link href={"/manager"} className=' flex gap-1 items-center pt-2 pl-2 w-[85px] hover:underline hover:decoration-blue-500 underline-offset-2'>
                <IoChevronBack size={20} className='no-underline'/>
                <div className='text-black text-[1.2rem]'>
                    Back
                </div>
            </Link>
            <h1 className="text-[3rem] font-bold mb-4 text-center w-full text-[#000]">Manager Details</h1>
            <div className="rounded-lg shadow-lg">
                <div className='h-[200px] border-2 border-blue-500 bg-black mx-20 relative -z-20'>
                    <div className='absolute flex justify-evenly w-full -z-10'>
                        <h2 className="font-semibold mt-[120px] text-white text-[3rem]">{manager.attributes.first_name} {manager.attributes.last_name}</h2>
                        <Image src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1727244524~exp=1727248124~hmac=d0b81d11b91ebe750b75cef898ecb5394a9c0d65217a0135c8f7bffe59bc18d7&w=1480" width={320} height={370} className='mt-4  border-b-4 border-blue-500 rounded-full' />
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-6 ml-[20rem]'>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <MdEmail className='text-[1.4rem]' />
                            <div className='text-black text-[2.5rem] italic'> Email</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {manager.attributes.manager_email}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <FaPhoneAlt className='text-[1.4rem]' />
                            <div className='text-black text-[2.5rem] italic'> Phone</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {manager.attributes.phone_number}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <HiOfficeBuilding className='text-[1.4rem]' />
                            <div className='text-black text-[2.5rem] italic'> Department</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {manager.attributes.department}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <FaMapLocation className='text-[1.4rem]' />
                            <div className='text-black text-[2.5rem] italic'> Location</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {manager.attributes.location}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <MdDateRange className='text-[1.4rem]' />
                            <div className='text-black text-[2.5rem] italic'> Hire Date</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {manager.attributes.hire_date}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <HiMiniIdentification className='text-[1.4rem]' />
                            <div className='text-black text-[2.5rem] italic'> Experience</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {manager.attributes.years_of_experience} Years
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <FaStar className='text-[1.4rem]' />
                            <div className='text-black text-[2.5rem] italic'> Performance Rating</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {manager.attributes.performance_rating}/5
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerDetail;

export async function getStaticProps({ params }) {
    const managerResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/managers?filters[manager_id]=${params.managerId}`);

    if (!managerResponse || managerResponse.data.length === 0) {
        return { notFound: true };
    }

    return {
        props: {
            manager: managerResponse.data[0]
        }
    };
}

export async function getStaticPaths() {
    const managerResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/managers`);
    const managers = managerResponse.data;

    const paths = managers.map((manager) => ({
        params: { managerId: manager.attributes.manager_id.toString() }
    }));

    return {
        paths,
        fallback: true
    };
}
