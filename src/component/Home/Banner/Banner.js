import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import './Banner.css';
import Particles from "react-tsparticles";
const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <div className="banner" id="home">
            
            <div className="row container mx-auto">

            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

                <div className="col-lg-6">
                    <div className="icon_div" data-aos="zoom-out-down" data-aos-duration="2000">
                    <a href="https://www.facebook.com/mdtahsan.khan.3954" target="_abcd"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.linkedin.com/in/md-shajjad-hossan-14289a215/" target="_abcd"><i className="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/MDShajj94352247" target="_abcd"><i className="fab fa-twitter-square"></i></a>  
                    <a href="https://github.com/shajjadhossanWD" target="_abcd"><i className="fab fa-github-square"></i></a>
                    </div>
                  <div className="banner_text" data-aos="fade-right" data-aos-duration="2000">
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
                      <Link to="contact"><button className="button1" data-aos="fade-up" data-aos-duration="2000">Contact Me</button> </Link> 
                      <a href="ShajjadHossanResume.pdf" download="Md Shajjad Hossan.pdf">
                      <button className="button2" data-aos="fade-up" data-aos-duration="2000">
                        Download Resume
                      </button>
                      </a>
                  </div>

                </div>
                <div className="col-lg-6">
                    <div className="img_div" data-aos="fade-left" data-aos-duration="2000">
                        <img src="https://i.ibb.co/FwXr3rF/IMG-20211028-025432-2-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;