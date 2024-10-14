
import { Feature } from './Feature'
import React, { useState } from 'react';
import data from '../../../FeatureData';

export const FeatureList = () => {
    const [features] = useState(data);
  return (
    <div>
        <div className='sm:grid-cols-2 grid-cols-1 grid place-items-center gap-12 pb-20'>
            {features.map((feature) => {
                return (
                    <Feature Label={feature.label} Text={feature.text} key={feature.id}/>
                )
            })}

        </div>
    </div>
  )
}
