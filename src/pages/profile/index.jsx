import React from 'react'
import { fetcher } from '../../../lib/api'

const Profile = (employees) => {
  console.log(employees)
  return (
    <div>
      {
        employees.employees.data.map((employee) => (
          // const employeeFound = employees.data.find((emp)=> emp.attributes.employee_email == user.username)
          // employeeFound.map((employee) => {
          // return(
          // <div>
          //   <div className='text-black pt-6'> {user.username} </div>
          // </div>
          // )})
          <div>{employee.employee_id}</div>
        ))
      }
    </div>
  )
}

export default Profile

export async function getStaticProps() {
  const employeeResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/employees?populate=*`)
  return {
    props: {
      employees: employeeResponse,
    },
  };
}