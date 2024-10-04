import React from 'react'
import { MdDateRange } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
    return (
        <Link href={"/project/[projectId]"} as={`/project/${project.attributes.project_id}`} className='flex gap-4 items-center bg-black text-white focus:bg-black focus:text-white hover:bg-white border-2 border-[#000] hover:border-blue-500 focus:border-[#000] hover:text-black py-3 px-4 rounded-md '>
            <div>
                <Image
                    src="https://img.freepik.com/free-vector/gear-check-icon-logo-design_474888-2466.jpg?t=st=1727095587~exp=1727099187~hmac=713a6f976b4a461692a55a4b7c699501bba90b2c01436aacf3d70297959ad70b&w=1480"
                    width={50}
                    height={50}
                    className='rounded-full border-2 grayscale'
                    alt="Project Image"
                />
            </div>
            <div className='flex flex-col'>
                <div className='flex gap-1 items-center'>
                    <span className='font-bold'>Name:</span> {project.attributes.project_name}
                </div>
                <div className='flex gap-1 items-center'>
                    <MdDateRange className='text-[0.8rem]' />
                    <span className='font-bold'>Start Date:</span> {project.attributes.start_date}
                </div>
                <div className='flex gap-1 items-center'>
                    <MdDateRange className='text-[0.8rem]' />
                    <span className='font-bold'>End Date:</span> {project.attributes.end_date}
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard
