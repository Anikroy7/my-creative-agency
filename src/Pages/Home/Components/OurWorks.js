import React from 'react';
import WorksSlider from './WorksSlider';

const OurWorks = () => {
    return (
        <div className='bg-secondary p-24 mt-32'>
            <h1 className=' text-center text-white font-bold text-2xl'>Here are some of <span className='text-success'>our works</span></h1>

            {/* slider */}

            <div className='mt-16'>
                <WorksSlider></WorksSlider>
            </div>
        </div>
    );
};

export default OurWorks;