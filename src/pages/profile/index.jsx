import React from 'react'
import { fetcher } from '../../../lib/api'

const Profile = (users) => {
  return (
    <div>
      {
        users.users.map((user) => (
          user.username === "JohnDoe"
            ?
            (
              <div className='text-black pt-6'> {user.username} </div>
            )
            :
            (
              <></>
            )
        ))
      }

    </div>
  )
}

export default Profile

export async function getStaticProps() {
  const userResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users`);
  console.log(userResponse);
  return {
    props: {
      users: userResponse,
    },
  };
}