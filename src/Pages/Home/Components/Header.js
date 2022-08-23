import React from 'react';
import Navbar from './Navbar';
import image from '../../../images/images/logos/Frame.png'

const Header = () => {
    return (
        <div>
            {/* This is navbar */}

            <Navbar></Navbar>


            {/* This is header */}


            <div class="hero bg-primary px-12 p-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img style={{ height: '300px' }} src={image} class="max-w-sm rounded-lg" />
                    <div className='mt-5'>

                        <h1 class="text-5xl text-secondary font-bold">Lets Grow Your</h1>
                        <h1 class="text-5xl text-secondary font-bold">Brand To The</h1>
                        <h1 class="text-5xl text-secondary font-bold">Next Level</h1>

                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-secondary px-9 text-white">Hire us</button>
                    </div>
                </div>
            </div>
            <svg className='relative' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBD062" fill-opacity="1" d="M0,100L1440,4L1440,0L0,0Z"></path></svg>
        </div>
    );
};

export default Header;