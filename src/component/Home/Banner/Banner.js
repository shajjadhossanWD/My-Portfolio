import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner" id="home">
            <div className="row container mx-auto">
                <div className="col-lg-6">
                    <div className="icon_div">
                    <a href="https://www.facebook.com/mdtahsan.khan.3954" target="_abcd"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.linkedin.com/in/md-shajjad-hossan-14289a215/" target="_abcd"><i className="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/MDShajj94352247" target="_abcd"><i className="fab fa-twitter-square"></i></a>  
                    <a href="https://github.com/shajjadhossanWD" target="_abcd"><i className="fab fa-github-square"></i></a>
                    </div>
                  <div className="banner_text">
                  <h1>Welcome to by website</h1>
                    <h1>I am Md. Shajjad Hossan</h1>
                    <h3>
                        I am a 
                        <span className="about_skill">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Web Developer",
                                        "Full Stack Developer",
                                        "Front End Developer",
                                        "React Developer",
                                        "MERN Stack Developer"
                                    ]
                                }}
                            />

                        </span>
                    </h3>
                  </div>

                  <div className="btn_div">
                      <Link to="contact"><button className="button1">Contact Me</button> </Link> 
                      <a href="ShajjadHossanResume.pdf" download="Md Shajjad Hossan.pdf">
                      <button className="button2">
                        Download Resume
                      </button>
                      </a>
                  </div>

                </div>
                <div className="col-lg-6">
                    <div className="img_div">
                        <img src="https://i.ibb.co/FwXr3rF/IMG-20211028-025432-2-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;