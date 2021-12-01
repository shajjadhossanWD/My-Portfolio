import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllProjects from './AllProjects/AllProjects';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch('./projectsData.json')
        .then(res => res.json())
        .then(data =>{
            setProjects(data);
        })
    },[])
    return (
       <div className="projectsAll" id="project">
        <h1 className="text-center my-5">My Projects</h1>
        <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
          {
            projects.map(project => <AllProjects project={project}></AllProjects>)
          }
           
         </Row>
       </div>
    );
};

export default MyProjects;