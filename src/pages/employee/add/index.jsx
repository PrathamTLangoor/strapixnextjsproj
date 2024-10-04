import { useState } from 'react';
import { fetcher } from '../../../../lib/api';
import Image from 'next/image';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    employee_id: '',
    first_name: '',
    last_name: '',
    employee_email: '',
    phone_number: '',
    position: '',
    department: '',
    hire_date: '',
    salary: '',
    manager_id: '',
    location: '',
    performance_rating: '',
    project_ids: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithNumber = {
      ...formData,
      phone_number: Number(formData.phone_number),
    };
    try {
      const options = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT_BEARER_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: formDataWithNumber }),
      };
      const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/employees`, options);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='pb-36'>
      <div className='text-[3rem] font-semibold w-full text-center'>
        New Employee
      </div>
      <form className='flex flex-col gap-3 mt-4'>
        <div className='grid grid-cols-3 gap-20 px-20'>
          <div className='-z-10 text-center'>
            <Image src="https://img.freepik.com/free-vector/business-user-cog_78370-7040.jpg?t=st=1727955374~exp=1727958974~hmac=91f49f89719e6a48e7d7c53dd5327003f1d85606b675229ee2b65a797ca70923&w=1480" width={500} height={500}/>
          </div>
          <div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Employee ID:</div>
              <input type="text" name="employee_id" onChange={handleChange} required className='border rounded p-2 border-black ' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>First Name:</div>
              <input type="text" name="first_name" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Last Name:</div>
              <input type="text" name="last_name" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Employee Email:</div>
              <input type="text" name="employee_email" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Phone Number:</div>
              <input type="text" name="phone_number" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Position:</div>
              <input type="text" name="position" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Department:</div>
              <input type="text" name="department" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Hire Date:</div>
              <input type="date" name="hire_date" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Salary:</div>
              <input type="text" name="salary" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Manager ID:</div>
              <input type="text" name="manager_id" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Location:</div>
              <input type="text" name="location" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Performance Rating:</div>
              <input type="text" name="performance_rating" onChange={handleChange} required className='border rounded p-2 border-black' />
            </div>
            <div className='flex flex-col gap-1 pb-2'>
              <div className=' text-[1.4rem]'>Project IDs:</div>
              <input type="text" name="project_ids" onChange={handleChange} className='border rounded p-2 border-black' />
            </div>
          </div>
        </div>
        <div className='text-center mt-2'>
          <button
            type="button"
            onClick={handleSubmit}
            className='bg-blue-200 border border-blue-600 rounded-lg p-4 w-56 active:bg-blue-300 hover:bg-blue-300'>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
