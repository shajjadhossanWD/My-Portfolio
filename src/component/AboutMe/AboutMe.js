import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about_div" id="about">
            <h1 className="text-center">ABOUT ME</h1>
           
            <div className="row container mx-auto">
                <div className="col-lg-6">
                    <div className="img_about">
                        <img src="https://i.ibb.co/NxdtdK2/images-removebg-preview.png" alt="" />
                    </div>
                    

                </div>

                <div className="col-lg-6 about_details" >
                 <h4 className="about_skill">
                 <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "I am a Web Developer",
                                        "I am a Full Stack Developer",
                                        "I am a Front End Developer",
                                        "I am a React Developer",
                                        "I am a MERN Stack Developer"
                                    ]
                                }}
                            />
                 </h4>
                 <p>Hello, my name is Md. Shajjad Hossan. I am a full stack developer(MERN). I have almost 1 year experience in this section. I already complete 20+ Demo project that's will available in my github with source code, and also find some of my demo project below in this website. Also I'm a student of World University of Bangladesh Department of Computer Science and Engineering. To know more information please download my resume and if you need any information about me or for build your project please contact with me. </p>
                <Link to='contact'>
                 <button className="button1">Hire Me</button>
                </Link>
                  <a href="ShajjadHossanResume.pdf" download="Md Shajjad Hossan.pdf">
                      <button className="button2">
                          Download Resume
                      </button>
                      </a>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;