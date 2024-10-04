import Image from 'next/image';
import { HiOfficeBuilding } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import Link from 'next/link';

const ManagerCard = ({ managers }) => {
    return (
        <div  className='flex flex-row gap-4 pl-4 mt-5 flex-wrap'>
            {managers &&
                managers.data.map((managers) => {
                    // const manager = managers.data.find(manager => manager.attributes.manager_id === employee.attributes.manager_id);

                    return (
                        <Link href={"/manager/[managerId]"} as={`/manager/${managers.attributes.manager_id}`} key={managers.id} className='flex gap-4 items-center bg-black text-white focus:bg-black focus:text-white hover:bg-white border-2 border-[#000] hover:border-blue-500 focus:border-[#000] hover:text-black py-3 px-4 rounded-md w-[24%]'>
                            <div>
                                <Image
                                    src="https://img.freepik.com/free-vector/illustration-business-people_53876-5879.jpg?t=st=1727162808~exp=1727166408~hmac=1d1aa0fb136ba26c0949426f4fc8e3784084e6da1d505418ce42186dc0f91ca5&w=1480"
                                    width={50}
                                    height={50}
                                    className='rounded-full border-2 grayscale'
                                    alt="Manager Image"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex gap-1 items-center'>
                                    <HiIdentification className='text-[0.8rem]' />
                                    <span className='font-bold'>ID:</span> {managers.attributes.manager_id}
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <IoPerson className='text-[0.8rem]' />
                                    <span className='font-bold'>Name:</span> {managers.attributes.first_name} {managers.attributes.last_name}
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <HiOfficeBuilding className='text-[0.8rem]' />
                                    <span className='font-bold'>Department:</span> {managers.attributes.department}
                                </div>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default ManagerCard;
