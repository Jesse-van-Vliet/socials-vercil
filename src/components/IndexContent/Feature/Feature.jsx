import React from 'react'

export const Feature = ({Label, Text}) => {
  return (
<>



<div className=' text-white h-96 w-10/12 sm:w-2/4 flex flex-col items-center justify-center border-2 rounded-3xl'>
    <div className=' flex items-center  w-3/4 mb-3 '>
    <h1 className='border-b-2 text-xl border-white'>{Label}</h1>
    </div>

    <div className=' w-3/4 flex'>
    <p>{Text}</p>

    </div>
    
</div>


</>
  )
}
