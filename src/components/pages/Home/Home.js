import React from 'react';
import Adventures from '../AllAdventures/Adventures';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
// import Volunteer from '../AllvolunteerItem/Volunteer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Adventures></Adventures>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;