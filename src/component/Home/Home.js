import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MyBlog from '../MyBlog/MyBlog';
import MyProjects from '../MyProjects/MyProjects';
import Navigation from '../Navigation/Navigation';
import Skills from '../Skills/Skills';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <AboutMe/>
            <MyProjects/> 
            <MyBlog/>
            <Skills/>
            <Contact></Contact>
            <Footer></Footer>       
        </div>
    );
};

export default Home;