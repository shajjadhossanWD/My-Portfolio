import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { name } = useParams();
    const [project, setProject] = useState([]);

    useEffect(()=>{
        fetch('/projectsData.json')
        .then(res => res.json())
        .then( data => {
            const result = data.find(projectResult => projectResult.name === name)
            setProject(result)
            console.log(result)
        })
    },[name])

    return (
       <div className="details">
           <h1 className="text-center py-5">{project.name}</h1>

           <Row xs={1} md={2} lg={2} className="g-4 container mx-auto">
           <Col>
              <Card>
                <Card.Img variant="top" src={project.img1} className="w-100"/>
              </Card>
            </Col>
           <Col>
              <Card>
                <Card.Img variant="top" src={project.img2} className="w-100"/>
              </Card>
            </Col>
           <Col>
              <Card>
                <Card.Img variant="top" src={project.img3} className="w-100"/>
              </Card>
            </Col>

   
           
          </Row>
          <div className="detail_part py-5">
                <h3 className="text-center">Project Details</h3>
                <p className="details_all mx-auto">{project.full_details}</p>
              <div className="btn_divv">
                 <a href={project.live_link}>
                    <button className="button1 mb-5">Visit Live Demo</button>
                 </a>
                  
                <a href="https://github.com/shajjadhossanWD">
                <button className="button2 mb-5">Visit My More Project</button>
                </a>
              </div>
               
            </div>
       </div>
    );
};

export default ProjectDetails;