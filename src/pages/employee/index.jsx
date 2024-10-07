import React, { useState } from 'react';
import { fetcher } from '../../../lib/api';
import EmployeeCard from '@/components/employeeCard/index';
import { IoChevronBack } from "react-icons/io5";
import Link from 'next/link';

const Employee = ({ employees, managers }) => {
  const [remove, setRemove] = useState(false);

  const toggleRemove = () => {
    setRemove(prev => !prev);
    console.log("Remove state ", !remove); 
  };

  return (
    <div>
      <div className='flex justify-between'>
        <Link href={"/"} className='flex gap-1 items-center pt-2 pl-2 w-[85px] hover:underline hover:decoration-blue-500 underline-offset-2'>
          <IoChevronBack size={20} className='no-underline' />
          <div className='text-black text-[1.2rem]'>Back</div>
        </Link>
        <div className='mr-3 mt-3 flex gap-4'>
          <Link href={"/employee/add"} className='py-2 px-3 border border-black rounded-full hover:bg-black hover:text-blue-500'>
            Add Employee
          </Link>
          <button 
            onClick={toggleRemove} 
            className='py-2 px-3 border border-black rounded-full hover:bg-black hover:text-blue-500'
          >
            {remove ? 'Cancel Removal' : 'Remove Employee'}
          </button>
        </div>
      </div>
      <div className='text-[3rem] font-semibold w-full text-center'>Employees</div>
      <EmployeeCard employees={employees} managers={managers} deleteToggle={remove} />
    </div>
  );
};

export default Employee;

export async function getStaticProps() {
  const employeeResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/employees?populate=*`);
  const managerResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/managers`);
  console.log(employeeResponse);
  return {
    props: {
      employees: employeeResponse,
      managers: managerResponse,
    },
  };
}
