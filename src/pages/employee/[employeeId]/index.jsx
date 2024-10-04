import React from 'react';
import { useRouter } from 'next/router';
import { fetcher } from '../../../../lib/api';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";
import Image from 'next/image';
import { MdEmail, MdDateRange } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { FaMapLocation } from "react-icons/fa6";
import { HiMiniIdentification } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

const EmployeeDetail = ({ employee, manager, project }) => {
    console.log(employee.attributes)
    const managerFound = manager.data.find((mgr) => employee.attributes.manager_id == mgr.attributes.manager_id);
    const projectIds = employee.attributes.project_ids ? employee.attributes.project_ids.split(',') : [];
    const projectsHandled = projectIds.map((id) => project.data.find((pjt) => pjt.attributes.project_id === id)).filter(Boolean);

    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <div className="w-full pb-[130px]">
            <Link href={"/employee"} className=' flex gap-1 items-center pt-2 pl-2 w-[85px] hover:underline hover:decoration-blue-500 underline-offset-2'>
                <IoChevronBack size={20}  className='no-underline'/>
                <div className='text-black text-[1.2rem]'>
                    Back
                </div>
            </Link>
            <h1 className="text-[3rem] font-bold mb-4 text-center w-full text-[#000]">Employee Details</h1>
            <div className="rounded-lg shadow-lg">
                <div className='h-[200px] border-2 border-blue-500 bg-black mx-20 relative -z-20'>
                    <div className='absolute flex justify-evenly w-full -z-10'>
                        <h2 className="font-semibold mt-[120px] text-white text-[3rem]">{employee.attributes.first_name} {employee.attributes.last_name}</h2>
                        <Image src={`http://localhost:1337${employee.attributes.profile_img.data.attributes.url}`} alt='employee profile pic' width={320} height={370} className='mt-4 border-2 border-blue-500  rounded-md' />
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-6 ml-[20rem]'>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <MdEmail className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Email</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {employee.attributes.employee_email}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <FaPhoneAlt className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Phone</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {employee.attributes.phone_number}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <GiPositionMarker className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Designation</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {employee.attributes.designation}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <HiOfficeBuilding className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Department</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {employee.attributes.department}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <FaMapLocation className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Location</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {employee.attributes.location}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <MdDateRange className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Hire Date</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {employee.attributes.hire_date}
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <HiMiniIdentification className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Manager Name</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <Link href={'/manager/[managerId]'} as={`/manager/${managerFound.attributes.manager_id}`} className='text-blue-500 underline text-[1.4rem]'>
                            <div className='mt-4'>
                                {managerFound.attributes.first_name} {managerFound.attributes.last_name}
                            </div>
                        </Link>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <FaStar className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Performance Rating</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem]'>
                            {employee.attributes.performance_rating}/5
                        </div>
                    </div>
                    <div className='border-white border-2 p-3 rounded-md w-max'>
                        <div className='flex gap-3 items-center'>
                            <FaStar className='text-[1.2rem]' />
                            <div className='text-black text-[2.5rem] italic'> Projects Handled</div>
                        </div>
                        <hr className='w-[34rem] text-black' />
                        <div className='text-black mt-4 text-[1.4rem] flex flex-col gap-2'>
                            {projectsHandled.length > 0 ? (
                                projectsHandled.map((project) => (
                                    <Link href={`/project/${project.attributes.project_id}`} className='underline text-blue-500' key={project.attributes.project_id}>{project.attributes.project_name}</Link>
                                ))
                            ) : (
                                <div>No projects assigned</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;

export async function getStaticProps({ params }) {
    const employeeResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/employees?filters[employee_id]=${params.employeeId}&populate=profile_img`);
    const managerResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/managers`);
    const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`);

    if (!employeeResponse || employeeResponse.data.length === 0) {
        return { notFound: true };
    }

    return {
        props: {
            employee: employeeResponse.data[0],
            manager: managerResponse,
            project: projectResponse
        }
    };
}

export async function getStaticPaths() {
    const employeeResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/employees`);
    const employees = employeeResponse.data;

    const paths = employees.map((employee) => ({
        params: { employeeId: employee.attributes.employee_id.toString() }
    }));

    return {
        paths,
        fallback: true
    };
}
