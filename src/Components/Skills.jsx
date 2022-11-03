import React from 'react';
import "../index.css"
import '../Styles/Mediaquery.css';
import Carousel from "react-multi-carousel";
import { Col, Container, Row } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import SkillData from '../Data/SkillsData';


export default function Skills(){

    const [skill, setSkill] = React.useState(SkillData);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
        <section className='skill' id='skills'>
<Container>
    <Row>
        <Col>
        <div className='skill-box'>
            <h3> Skills </h3>
            <p> A brief introdution on the skills related to languages and applications i've been practicing with/on.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {
                    skill.map(item => {
                        return (
                            <div className='skill-item' key={item.id}>
                            <img src={item.img} alt={item.title}/>
                            <h5> {item.title} </h5>
                        </div>
                        )
                    })
                }
            </Carousel>
        </div>
        </Col>
    </Row>
</Container>
        </section>
        </>
    )
}