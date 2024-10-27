import React, { useState } from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../style/Contact.css';

const Contact: React.FC = () => {

    const [emailClicked, setEmailClicked] = useState(false);
    const [phoneClicked, setPhoneClicked] = useState(false);

    return (
        <section id='contact' className="section contact">
            <h2>Contact me</h2>
            <div className="contact-icons">
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/ido-nice" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin style={{ color: '#0a66c2' }} />
                    </a>
                    <span className="contact-label">LinkedIn</span>
                </div>
                <div className="contact-item">
                    <a href="https://wa.me/+972504697264" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                        <FaWhatsapp style={{ color: '#25d366' }} />
                    </a>
                    <span className="contact-label">WhatsApp</span>
                </div>
                <div className="contact-item">
                    <a href="mailto:idonice3@gmail.com" title="Email">
                        <FaEnvelope style={{ color: '#d44638' }} onClick={() => { setEmailClicked(!emailClicked) }} />
                    </a>
                    <span className="contact-label">{emailClicked ? 'idonice3@gmail.com' : 'Email'}</span>
                </div>
                <div className="contact-item">
                    <a href="tel:+972504697264" title="Phone">
                        <FaPhone style={{ color: '#4a4a4a' }} onClick={() => { setPhoneClicked(!phoneClicked) }} />
                    </a>
                    <span className="contact-label">{phoneClicked ? '050-4697264' : 'Phone'}</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
