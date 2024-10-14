import React from 'react'
import "./Features.css"
import { FeatureList } from './Feature/FeatureList'

export const Features = () => {
  return (
    <section className=' bgFeature min-h-screen w-screen flex flex-col boxShadow' id='section2'>
      <div className="bgBlur min-h-screen flex flex-col justify-center items-center">
        <div className='text-white text-center p-10'>
            <h2 className='text-4xl shadow m-5'>
                PC7 Features
            </h2>
            <p className='w-96'>PC7 offers allot of different unique features that are only avaliable on PC7, from customizability features to Quality of life features you name it! We listed a couple ones here</p>
            </div>
     

       <FeatureList/>
       
       
      </div>

    </section>
  )
}
