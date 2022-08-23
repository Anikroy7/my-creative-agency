import React from 'react';
import slack from '../../../images/images/logos/slack.png'
import google from '../../../images/images/logos/google.png'
import uber from '../../../images/images/logos/uber.png'
import netflix from '../../../images/images/logos/netflix.png'
import airbnb from '../../../images/images/logos/airbnb.png'


const BrandsLogo = () => {
    return (
        <div style={{ position: 'absolute', top: '650px' }} className='flex px-40'>
            <img className='mr-10' style={{ width: "140px ", height: '36px' }} src={slack} alt="" />
            <img className='mr-10' style={{ width: "140px ", height: '36px' }} src={google} alt="" />
            <img className='mr-10' style={{ width: "140px ", height: '36px' }} src={uber} alt="" />
            <img style={{ width: "140px ", height: '36px' }} src={netflix} alt="" />
            <img className='ml-10' style={{ width: "140px ", height: '36px' }} src={airbnb} alt="" />
        </div>
    );
};

export default BrandsLogo;