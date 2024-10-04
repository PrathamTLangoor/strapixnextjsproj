import React from 'react';
import { fetcher } from '../../../../lib/api';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";
import Image from 'next/image';

const ProjectDetails = ({ project }) => {
  return (
    <div className='pb-36'>
      <Link href={"/manager"} className=' flex gap-1 items-center pt-2 pl-2 w-[85px] hover:underline hover:decoration-blue-500 underline-offset-2'>
        <IoChevronBack size={20} className='no-underline'/>
        <div className='text-black text-[1.2rem]'>
          Back
        </div>
      </Link>
      <h1 className="text-[3rem] font-bold mb-4 text-center w-full text-[#000]">Project Details</h1>
      <div className='flex justify-center gap-6 mt-10'>
        <div className='flex flex-col items-end justify-center gap-16'>
          <div className='flex gap-2 items-end'>
            <div className='font-extralight text-[2rem] mb-0.5'>
              {project.attributes.project_id}
            </div>
            <div className='font-bold text-[2.4rem]'>
              :ID
            </div>
          </div>
          <div className='flex gap-2 items-center w-[320px]'>
            <div className='font-extralight text-[2rem] text-right '>
              {project.attributes.project_name}
            </div>
            <div className='font-bold text-[2.4rem]'>
              :Name
            </div>
          </div>
          <div className='flex gap-2 items-end'>
            <div className='font-extralight text-[2rem] mb-0.5'>
              {project.attributes.start_date}
            </div>
            <div className='font-bold text-[2.4rem]'>
              :Start Date
            </div>
          </div>
        </div>
        <div className=' rounded-lg border-2 border-blue-500 -z-10'>
          <Image
            src="https://img.freepik.com/free-vector/starting-business-project-concept-illustration_114360-7797.jpg?t=st=1727238690~exp=1727242290~hmac=5b1d22bb7c0941a6797cedecdeaa2135fb88e5624ebfccf97e1b069ca17538e9&w=1480"
            width={500}
            height={500}
            className=' grayscale rounded-lg'
            alt="Project"
          />
        </div>
        <div className='flex flex-col gap-16 justify-center'>
          <div className='flex gap-2 items-end'>
            <div className='font-bold text-[2.4rem]'>
              Budget:
            </div>
            <div className='font-extralight text-[2rem] mb-0.5'>
              ₹ {project.attributes.budget}
            </div>
          </div>
          <div className='flex gap-2 items-end'>
            <div className='font-bold text-[2.4rem]'>
              Status:
            </div>
            <div className='font-extralight text-[2rem] mb-0.5'>
              {project.attributes.status}
            </div>
          </div>
          <div className='flex gap-2 items-end'>
            <div className='font-bold text-[2.4rem]'>
              End Date:
            </div>
            <div className='font-extralight text-[2rem] mb-0.5'>
              {project.attributes.end_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

export async function getStaticProps({ params }) {
  const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?filters[project_id]=${params.projectId}`);

  if (!projectResponse || projectResponse.data.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      project: projectResponse.data[0]
    }
  };
}

export async function getStaticPaths() {
  const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`);
  const project = projectResponse.data;

  const paths = project.map((project) => ({
    params: { projectId: project.attributes.project_id.toString() }
  }));

  return {
    paths,
    fallback: true
  };
}
