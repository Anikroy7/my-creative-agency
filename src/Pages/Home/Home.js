import React from 'react';
import BrandsLogo from './Components/BrandsLogo';
import Header from './Components/Header';
import Services from './Components/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandsLogo></BrandsLogo>
            <Services></Services>
        </div >
    );
};

export default Home;