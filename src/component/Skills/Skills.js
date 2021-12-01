import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div id="skill">
            <h1 className="text-center my-5">My Skills</h1>
            <div className="row container mx-auto">
                <div className="col-lg-6 mt-5">
                  <div className="bars">
                      <div className="line">
                          <span>Html & Css</span>
                          <span>90%</span>
                      </div>
                      <div className="linee html"></div>
                  </div>
                  <div className="bars">
                      <div className="line">
                          <span>Javascript</span>
                          <span>70%</span>
                      </div>
                      <div className="linee javascript"></div>
                  </div>
                  <div className="bars">
                      <div className="line">
                          <span>React JS</span>
                          <span>80%</span>
                      </div>
                      <div className="linee react"></div>
                  </div>
                  <div className="bars">
                      <div className="line">
                          <span>Node JS</span>
                          <span>60%</span>
                      </div>
                      <div className="linee node"></div>
                  </div>
                  <div className="bars">
                      <div className="line">
                          <span>Express JS</span>
                          <span>70%</span>
                      </div>
                      <div className="linee express"></div>
                  </div>
                  <div className="bars">
                      <div className="line">
                          <span>MongoDB</span>
                          <span>90%</span>
                      </div>
                      <div className="linee mongo"></div>
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

export default Skills;