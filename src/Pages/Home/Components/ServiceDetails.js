import React from 'react';

const ServiceDetails = ({ service }) => {

    const { name, description, image } = service;
    console.log(image, name, ' dddd');
    return (
        <div class="card  w-full hover:shadow-2xl">
            <div class="card-body text-center">
                <div class="avatar">
                    <div class="w-24 mx-auto rounded-full">
                        <img src={image} alt="image" />
                    </div>
                </div>
                <h2 class="font-bold text-xl">{name}</h2>
                <p className='text-slate-700' >{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;