import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <section className='h-auto'>
            <div>
                <h3 className='mb-28 text-3xl text-secondary font-bold text-center'>Provide awesome <span className='text-success'>Services</span></h3>
            </div>
            {/* services details */}

            <div className='flex mt-12'>
                {services.map(service => <ServiceDetails
                    key={service.id}
                    service={service}
                ></ServiceDetails>)}
            </div>
        </section>
    );
};

export default Services;