import React from 'react';
import About from '../About/About';
import Adventures from '../AllAdventures/Adventures';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import GroupTravel from '../GroupTravel/GroupTravel';

import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Adventures></Adventures>
            <GroupTravel></GroupTravel>
            
            
            <Footer></Footer>
        </div>
    );
};

export default Home;