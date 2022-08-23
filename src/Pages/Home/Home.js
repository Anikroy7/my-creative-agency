import React from 'react';
import BrandsLogo from './Components/BrandsLogo';
import CeoReviews from './Components/CeoReviews';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
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
            <CeoReviews></CeoReviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div >
    );
};

export default Home;