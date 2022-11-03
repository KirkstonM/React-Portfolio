import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../index.css"
import '../Styles/Mediaquery.css';

export default function About(){

    return(
       <section className='about pt-5' id="about">
        <Container>
            <div className='about-header'>
                <h3> About </h3>
            </div>
            <Row className='mt-5'>
                <Col xs={12} md={6} xl={7}> 
                <p className='self-text'> 
                Hello there! My name is Kirkston Melder and I'm an undergraduate. After working myself in different fields I finally found what i enjoy
                doing and that's Web Development. I do projects on a daily basis, always trying to fine tune my skills and also learning a lot of things on the way. Its so intresting how
                things work on the web. As for hobbies I'm a person who likes to read, travel and also blogs on the side. Positive and a team player.
               
                Enjoy my profile, which i made using React!
                </p>
                </Col>

                <Col xs={12} md={6} xl={5}>
    <div className="stage-cube-cont">
        <div className="cubespinner">
        <div className="face1">
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt='html'/>
        </div>

        <div className="face2">
            <img src="https://img.icons8.com/color/48/000000/css3.png "
            alt='css' />
        </div>

        <div className="face3">
            <img src="https://img.icons8.com/color/48/000000/react-native.png"
            alt='react'/>
        </div>

        <div className="face4">
            <img src="https://img.icons8.com/color/48/000000/bootstrap.png"
            alt='bootstrap'/>
        </div>

        <div className="face5">
            <img src="https://img.icons8.com/color/48/000000/figma--v1.png"
            alt='figma'/>
        </div>

        <div className="face6">
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            alt='javascript'/>
        </div>
        </div>
     </div>
     </Col>
            </Row>
        </Container>
       </section>
    )
}