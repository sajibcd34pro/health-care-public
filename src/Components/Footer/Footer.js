import React from 'react';
import './Footer.css';
import logo from '../../images/header-logo/logo-light.png';
const Footer = () => {
    return (
        <div className="container mt-5">
            <div className="card grid">
                <div className="d-flex m-5">
                    <div className="mx-3 icon card">
                        <i className="f-common fas fa-map-marker-alt"></i>
                    </div>

                    <div>
                        <div style={{ color: '#6893CD' }}> Our Address</div>
                        <h6 className="card-title">Drive Chicago, IL 60607</h6>
                    </div>
                </div>
                <div className="d-flex m-5">
                    <div className="mx-3 icon card">
                        <i className="f-common fas fa-phone"></i>
                    </div>

                    <div>
                        <div style={{ color: '#6893CD' }}> Call Us</div>
                        <h6 className="card-title">360-779-2228</h6>
                    </div>
                </div>
                <div className="d-flex m-5">
                    <div className="mx-3 icon card">
                        <i className="f-common fas fa-envelope-open"></i>
                    </div>

                    <div>
                        <div style={{ color: '#6893CD' }}>
                            Our Mail</div>
                        <h6 className="card-title">example@example.com</h6>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'10%', borderTop:'1px solid black'}}>
                <div className="main-footer mt-5">
                    <div className="footer-logo">
                        <img className="logo-bg" src={logo} alt="" />
                        <p style={{ color: '#6893CD' }}>It is a long established fact that a reader will be distracted by the readable.</p>
                        <div className="footer-button">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-google"></i>
                        </div>
                    </div>
                        
                    <div className="service-footer">
                        <h5>Services</h5>
                        <p>Therapiya</p>
                        <p>Dentistry</p>
                        <p> Virusology</p>
                        <p>Pharmocology</p>
                        <p>Cardiology</p>
                    </div>

                    <div className="usefull-links">
                        <h5>Usefull Links</h5>
                        <p>Home</p>
                        <p>About us</p>
                        <p>News</p>
                        <p>Doctors</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="subscrie">
                        <h5>Subscribe</h5>
                        <input placeholder="Email" className="footer-btn" type="email" width="150px" />
                        <br />
                        <button className="footer-btn submit" type="submit">Submit</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;