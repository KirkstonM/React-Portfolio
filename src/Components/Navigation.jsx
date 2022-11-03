import React from 'react';
import "../index.css"
import '../Styles/Mediaquery.css';
import {Navbar, Container, Nav, Link} from 'react-bootstrap';
import {faWhatsapp, faLinkedin, faInstagram, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Navigation(){

    return(
<Navbar expand="lg" fixed="top" className='navigation-bar'>
      <Container className='Navbar'>
        <Navbar.Brand href="#home">
            <img src='./images/Component-Images/logo.png' className='logo-image' alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-links">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects"> Projects </Nav.Link>
            <Nav.Link href="#contact"> Contact </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icons'>
      <a href='#' rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href='https://www.facebook.com/kirkston.dexter' target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href='https://instagram.com/kirk_melder97?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href='https://www.linkedin.com/in/kirkston-melder-71247a189/' target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://github.com/KirkstonM' target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}