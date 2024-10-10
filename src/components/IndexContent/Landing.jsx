import React from 'react'
import "./Landing.css"
import { ButtonLanding } from '../button/ButtonLanding'
export const Landing = () => {
  return (
    <section className='bgLanding w-screen h-screen'>
        <div className='bgBlur h-screen w-screen flex justify-around items-center '>
            <div className='text-white flex flex-col'>
                <div className="flex flex-col text-center">
                    <h1 className=' text-7xl p-3'>PC7Client</h1>
                    <div className='w-full m-2 h-1 bg-white'></div>
                    <p className='text-xl'>The #1 Krunker Client</p>
                </div>


                <div className='mt-3 flex flex-col sm:flex-row items-center'>
                    <ButtonLanding Label={'Download'} Link={'#'}/>
                    <ButtonLanding Label={'Show more'} Link={'#'}/>
                </div>

            </div>


        </div>

    </section>
  )
}
