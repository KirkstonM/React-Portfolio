import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import "../index.css"
import '../Styles/Mediaquery.css';
import Data from '../Data/ProjectData';

export default function Project(){

    const [details, setDetails] = React.useState(Data);
   
    function filterItems(section){
        const newItems = Data.filter((item) => item.section === section)
        setDetails(newItems)
      }
    return(

<section className='project' id='projects'>
    <Container>
        <Row>
            <Col>
            <h3> Projects </h3>
            <p> Learning to code and develop was a new field to me entirely, so I did what everyone would do,
                sit down in front of my PC and code away creating projects. So below are some projects i've worked on
                using Javascript and React JS as languages and more projects will be added in the future!
            </p>
            <div className='btn-group'>
                <button type='button' className='btn'onClick={() =>setDetails(Data)} > All </button>
                <button type='button' className='btn' onClick={() => filterItems('javascript')}> Javascript </button>
                <button type='button' className='btn' onClick={() => filterItems('React')}> React </button>
            </div>
            <Container className='mt-5 grid-container'>
            <Row>   
            {details.map(item => {
            return (
                <Col xs={12} sm={6} md={6} lg={4} className="my-2 cards" key={item.id}>
         <div className="card card-container">
         <img src={item.img} className='image' alt={item.title}/>
         <div className='overlay'>
            <h6>{item.title}</h6>
           <p className='text'> {item.description}</p>
         </div>
        </div>
        </Col>
      )
    })}
    </Row>
            </Container>
            </Col>
        </Row>
    </Container>
</section>
    )
}