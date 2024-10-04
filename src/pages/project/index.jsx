import React from 'react';
import { fetcher } from '../../../lib/api';
import ProjectCard from '@/components/projectCard';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";

const Project = ({ projects }) => {

  const ongoingProjects = projects?.data.filter((project) => project.attributes.status == "Ongoing");
  const completedProjects = projects?.data.filter((project) => project.attributes.status == "Completed");
  const plannedProjects = projects?.data.filter((project) => project.attributes.status == "Planned");
  const onHoldProjects = projects?.data.filter((project) => project.attributes.status == "On Hold");

  return (
    <div className='w-full pb-32'>
      <Link href={"/"} className=' flex gap-1 items-center pt-2 pl-2 w-[85px] hover:underline hover:decoration-blue-500 underline-offset-2'>
        <IoChevronBack size={20} className='no-underline'/>
        <div className='text-black text-[1.2rem]'>
          Back
        </div>
      </Link>
      <div className='text-[3rem] text-center font-bold'>Projects</div>
      <div className='grid grid-cols-2 mt-6'>
        <section className='mb-4'>
          <div className='text-[2rem] font-semibold pl-4'>
            <span className=' font-light'>Status: </span>  Ongoing
            <hr className='w-[26%]' />
          </div>
          <div className='flex flex-row flex-wrap gap-5 p-4'>
            {
              ongoingProjects.length > 0 ?
                (ongoingProjects.map((project) => {
                  return (
                    <div key={project.attributes.project_id} className='w-[48%]'>
                      <ProjectCard project={project} />
                    </div>
                  )
                })) : (
                  <div className='font-light text-[1.2rem]'>
                    <span className=' font-extralight'>Sorry no projects here</span> [0w0]
                  </div>
                )
            }
          </div>
        </section>
        <section className='mb-4'>
          <div className='text-[2rem] font-semibold pl-4'>
            <span className=' font-light'>Status:</span>  Completed
            <hr className='w-[26%]' />
          </div>
          <div className='flex flex-row flex-wrap gap-5 p-4'>
            {
              completedProjects.length > 0 ?
                (completedProjects.map((project) => {
                  return (
                    <div key={project.attributes.project_id} className='w-[48%]'>
                      <ProjectCard project={project} />
                    </div>
                  )
                })) : (
                  <div className='font-light text-[1.2rem]'>
                    <span className=' font-extralight'>Sorry no projects here</span> [0w0]
                  </div>
                )
            }
          </div>
        </section>
        <section className='mb-4'>
          <div className='text-[2rem] font-semibold pl-4'>
            <span className=' font-light'>Status:</span>  Planned
            <hr className='w-[26%]' />
          </div>
          <div className='flex flex-row flex-wrap gap-5 p-4'>
            {
              plannedProjects.length > 0 ?
                (plannedProjects.map((project) => {
                  return (
                    <div key={project.attributes.project_id} className='w-[48%]'>
                      <ProjectCard project={project} />
                    </div>
                  )
                })) : (
                  <div className='font-light text-[1.2rem]'>
                    <span className=' font-extralight'>Sorry no projects here</span> [0w0]
                  </div>
                )
            }
          </div>
        </section>
        <section className='mb-4'>
          <div className='text-[2rem] font-semibold pl-4'>
            <span className=' font-light'>Status:</span>  On Hold
            <hr className='w-[26%]' />
          </div>
          <div className='flex flex-row flex-wrap gap-5 p-4'>
            {
              onHoldProjects.length > 0 ?
                (onHoldProjects.map((project) => {
                  return (
                    <div key={project.attributes.project_id} className='w-[48%]'>
                      <ProjectCard project={project} />
                    </div>
                  )
                })) : (
                  <div className='font-light text-[1.2rem]'>
                    <span className=' font-extralight'>Sorry no projects here</span> [0w0]
                  </div>
                )
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default Project;

export async function getStaticProps() {
  const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`);

  return {
    props: {
      projects: projectResponse
    }
  }
}
