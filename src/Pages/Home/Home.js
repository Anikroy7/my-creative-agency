import React from 'react';
import BrandsLogo from './Components/BrandsLogo';
import Header from './Components/Header';
import OurWorks from './Components/OurWorks';
import Services from './Components/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandsLogo></BrandsLogo>
            <Services></Services>
            <OurWorks></OurWorks>
        </div >
    );
};

export default Home;