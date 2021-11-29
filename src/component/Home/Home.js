import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <AboutMe/>
            <Contact></Contact>       
        </div>
    );
};

export default Home;