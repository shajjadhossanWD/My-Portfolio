import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProjects = ({project}) => {
    const {name, img, details, live_link} = project;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} className="w-100"/>
                
                </Card>
                <h4>{name}</h4>
                <p>{details}</p>
                <a href={live_link}>
                    <button className="button1">Live Demo</button>
                </a>
                <Link to={`/projects/${name}`}>
                    <button className="button2">More Details</button>
                </Link>
            </Col>
    );
};

export default AllProjects;