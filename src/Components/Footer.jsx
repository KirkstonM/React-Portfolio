import React from 'react';
import "../index.css"
import '../Styles/Mediaquery.css';
import {faWhatsapp, faLinkedin, faInstagram, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container} from 'react-bootstrap';


export default function Footer(){

    return(
        <section className='footer'>
            <Container>
                <div  className='footer-section'>
                    <div className='footer-logo'>
                    {/* <img src='./images/logo.png' className='footer-logo'/> */}
                     <a href='#home'> <img src='./images/Component-Images/logo.png' className='logo-image' alt='logo'></img></a>
                    </div>

                <div className='end'>
                    <div className='social-icon mt-4'>
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
            <p>copyright kirkston melder</p>
                </div>
                
                </div>
            </Container>
        </section>
    )
}