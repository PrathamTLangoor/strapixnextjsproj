import { useState } from 'react';
import { fetcher } from '../../../../lib/api';
import Image from 'next/image';

const EmployeeForm = () => {
  const placeholderImg ="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1728278742~exp=1728282342~hmac=2af652a14a9cc95ed0e3e7fa04b9420523b690d6ae7be7e7ee6e33104efecccc&w=1480";
  
  const [imageSrc, setImageSrc] = useState(placeholderImg)
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
    profile_img: null,
  });

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profile_img: e.target.files[0],
    }));
    const src = URL.createObjectURL(e.target.files[0])
    console.log(src)
    setImageSrc(src)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageId = null;
      if (formData.profile_img) {
        const imageFormData = new FormData();
        imageFormData.append('files', formData.profile_img);
        const uploadOptions = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT_BEARER_TOKEN}`,
          },
          body: imageFormData,
        };

        const uploadResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/upload/`, uploadOptions);
        imageId = uploadResponse[0].id;
        console.log('Upload Response:', uploadResponse);
      }

      const formDataWithNumber = {
        ...formData,
        phone_number: Number(formData.phone_number),
        profile_img: imageId,
      };

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
      console.log(e)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='pb-36'>
      <div className='text-[3rem] font-semibold w-full py-4 text-center text-blue-500'>
        New Employee
      </div>
      <form className='flex flex-col gap-3 mt-6'>
        <div className='grid grid-cols-3 gap-20 px-20'>
          <div className='flex flex-col gap-1 mb-6'>
            <div className=' text-[2rem] text-center mb-2'>Profile Image</div>
            <div className='flex flex-col items-center text-center'>
              {
                imageSrc === placeholderImg? (
                  <Image src={imageSrc} width={300} height={300} className='rounded-full border-2 mb-2 grayscale' alt='Profile Picture' />
                )
                :
                (
                  <Image src={imageSrc} width={300} height={300} className='rounded-full border-2 mb-2 ' alt='Profile Picture' />
                )
              }
              <input className='file-input' type="file" name="profile_img" onChange={handleFileChange} />
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Employee ID:</div>
              <input type="text" name="employee_id" onChange={handleChange} required className='border-b rounded p-1 ' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>First Name:</div>
              <input type="text" name="first_name" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Last Name:</div>
              <input type="text" name="last_name" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Employee Email:</div>
              <input type="text" name="employee_email" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Phone Number:</div>
              <input type="text" name="phone_number" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Designation:</div>
              <input type="text" name="designation" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Department:</div>
              <input type="text" name="department" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Hire Date:</div>
              <input type="date" name="hire_date" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Salary:</div>
              <input type="text" name="salary" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Manager ID:</div>
              <input type="text" name="manager_id" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Location:</div>
              <input type="text" name="location" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Performance Rating:</div>
              <input type="text" name="performance_rating" onChange={handleChange} required className='border-b rounded p-1' />
            </div>
            <div className='flex flex-col gap-1 mb-6'>
              <div className=' text-[1.4rem]'>Project IDs:</div>
              <input type="text" name="project_ids" onChange={handleChange} className='border-b rounded p-1' />
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
