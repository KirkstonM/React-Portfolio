import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "../index.css"
import '../Styles/Mediaquery.css';
import emailjs from '@emailjs/browser';

export default function Contact(){

    const contactDetails = {
        firstName: '', lastName: '', email: '', number: '', message: ''
    }

    const[information, setInformation] = React.useState(contactDetails);
    const[mail, setMail] = React.useState({});
    const form = React.useRef()


    function handleChange(event){
        const{value, name} = event.target;
        setInformation(prevState => ({
            ...prevState,
            [name] : value
        }))
   }

    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hnrj3z8', 'template_c6sj0ik', form.current, '1ECEF4pPv6kKTmdxi')
        .then(() => {
            setMail({success: true, message: 'Message sent successfully'});
            window.location.reload(false)
        }, (error) => {
          setMail({ success: false, message: 'Something went wrong, please try again later.'});
        });
    };

    return (
        <section className="contact-section" id='contact'>
            <Container>
            <Row className='contact'>
                <Col>
                <h4> Get In Touch </h4>
                </Col>
                <form  ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name='firstName' onChange={handleChange} required/>
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" name='lastName' onChange={handleChange} required/>
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name='email'  onChange={handleChange} required/>
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." name='number' onChange={handleChange} required/>
                    </Col>

                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name='message' onChange={handleChange} required/>
                      <button type="submit">Submit</button>
                      
                    </Col>
                    {
                      mail &&
                    <span className={mail.success ? 'mail-confirmation' : 'mail-error'}>
                     {mail.message}
                    </span>
                    }  
                  </Row>
                </form>
            </Row>
        </Container>
        </section>
    )
}