import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import Link from 'next/link';
import { MdDelete } from "react-icons/md";
import { useState } from 'react';

const EmployeeCard = ({ employees, managers, deleteToggle }) => {
    return (
        <div className='flex flex-row gap-4 pl-3 mt-5 flex-wrap'>
            {employees &&
                employees.data.map((employee) => {
                    const manager = managers.data.find(manager => manager.attributes.manager_id === employee.attributes.manager_id);

                    return (
                        <>
                            {deleteToggle ? (
                                <div key={employee.id} className='flex gap-4 justify-evenly items-center bg-black text-white border-2 border-[#000] py-3 px-4 rounded-md w-[24%]' >
                                    <div>
                                        <Image
                                            src={`http://localhost:1337${employee.attributes.profile_img.data.attributes.url}`}
                                            width={75}
                                            height={75}
                                            className='rounded-md border border-blue-500'
                                            alt="Employee Image"
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex gap-1 items-center'>
                                            <HiIdentification className='text-[0.8rem]' />
                                            <span className='font-bold'>ID:</span> {employee.attributes.employee_id}
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoPerson className='text-[0.8rem]' />
                                            <span className='font-bold'>Name:</span> {employee.attributes.first_name} {employee.attributes.last_name}
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <MdEmail className='text-[0.8rem]' />
                                            <span className='font-bold'>Email:</span> {employee.attributes.employee_email}
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <HiOfficeBuilding className='text-[0.8rem]' />
                                            <span className='font-bold'>Department:</span> {employee.attributes.department}
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <GrUserManager className='text-[0.8rem]' />
                                            <span className='font-bold'>Manager:</span> {manager.attributes.first_name} {manager.attributes.last_name}
                                        </div>
                                    </div>
                                    <button className='text-red-600'><MdDelete /></button>
                                </div>
                            ) : (
                                <Link href={"/employee/[employeeId]"} as={`/employee/${employee.attributes.employee_id}`} key={employee.employee_id} className='flex gap-4 justify-evenly items-center bg-black text-white focus:bg-black focus:text-white hover:bg-white border-2 border-[#000] hover:border-blue-500 focus:border-[#000] hover:text-black py-3 px-4 rounded-md w-[24%]' >
                                    <div>
                                        <Image
                                            src={`http://localhost:1337${employee.attributes.profile_img.data.attributes.url}`}
                                            width={75}
                                            height={75}
                                            className='rounded-md border border-blue-500'
                                            alt="Employee Image"
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex gap-1 items-center'>
                                            <HiIdentification className='text-[0.8rem]' />
                                            <span className='font-bold'>ID:</span> {employee.attributes.employee_id}
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoPerson className='text-[0.8rem]' />
                                            <span className='font-bold'>Name:</span> {employee.attributes.first_name} {employee.attributes.last_name}
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <MdEmail className='text-[0.8rem]' />
                                            <span className='font-bold'>Email:</span> {employee.attributes.employee_email}
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <HiOfficeBuilding className='text-[0.8rem]' />
                                            <span className='font-bold'>Department:</span> {employee.attributes.department}
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <GrUserManager className='text-[0.8rem]' />
                                            <span className='font-bold'>Manager:</span> {manager.attributes.first_name} {manager.attributes.last_name}
                                        </div>
                                    </div>
                                </Link>)}
                        </>
                    );
                })
            }
        </div>
    );
}

export default EmployeeCard;
