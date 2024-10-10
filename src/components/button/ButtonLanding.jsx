import React from 'react'

export const ButtonLanding = ({Label, Link}) => {
  return (
    <a href={Link} className=' cursor-pointer'>
        <button className='p-5 m-2 border-white hover:border-gray-300 border-solid border-2 rounded-xl w-56 text-white hover:text-gray-200 transition'>
                       {Label}
                    </button>
    </a>
  )
}
