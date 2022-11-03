import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import AnimatedLetters from "../Data/AnimatedLetters";
import "../index.css";
import '../Styles/Mediaquery.css';
import { useEffect } from 'react';
export default function Header(){

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArr = ['K', 'i', 'r', 'k', 's', 't', 'o', 'n', '', 'M', 'e', 'l', 'd','e','r'];
    const jobArr = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.',]

useEffect(() =>{

let timer = setTimeout(() => {
setLetterClass('text-animate-hover')
}, 3800)
},[])

    return(
        <section className='banner' id='home'>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                <div className='text-zone'>
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i !</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m,</span>
<br/>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArr}
                    idx={15}
                    />
                    <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArr}
                    idx={22}
                    />
                    </h1>
                    <h2> Front End Developer</h2>
                    <a href='Professional Resume.pdf' download="Professional Resume.pdf">
                    <button type='button' className='application-btn'>
                    Download Resume 
                     </button>
                    </a>
                    
                    </div>
                 </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className='image-container mt-4'>
                    <img src='.images/component-Images/banner-image.png' className='astro-image' alt='astro'/> 
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}