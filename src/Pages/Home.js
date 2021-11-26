import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import useAuth from '../hooks/useAuth';
import '../Home.css';
import Hero from './Hero';
import Service from './Service/Service';
import Team from './Team';
import aboutBg from '../images/Slider/slider6.jpeg';



const Home = () => {
    const {services} = useAuth();
    return (
        <div>
            <Hero></Hero>
            <Team></Team>
             {/* service  */}
            <div className="container top-border">
                <div className="text">
                    <h6 className="text-center">What We Do</h6>
                    <h1 className="text-center">Our Featured Services</h1>
                </div>

                <div className="container mt-5">
                    <div className="card-grid">
                        {
                            services.slice(0, 3)?.map(service => <Service service={service} key={service.key} ></Service>)
                        }
                    </div>
                </div>

            </div>

            {/* about  */}
            <div className="about">
                <div className="container">
                    <div className="contianer-fluid ">

                        <div className="container">
                            <div className="row  text-img">
                                <div className="text">
                                    <h5 className="text-white">
                                        Why Choose
                                    </h5> <h5 className="text-white"> Docfind Clinic?


                                    </h5>
                                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. It is a long established fact that a reader will be Lorem ipsum dolor sit amet consectetur.</p>
                                    <h5 className="text-white">

                                        Quality Control System

                                    </h5>
                                    <h5 className="text-white">
                                        Highly Professional Staff</h5>
                                    <p className="text-white">It is a long established fact that a reader will be distracted by the readable content.
                                    </p>
                                    <div className="mt-3">
                                        <NavLink to="/services" className="btn btn-outline-dark button-f text-white"> Explore Services</NavLink>
                                    </div>
                                </div>
                                <div className="about-img">
                                    <img src="https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/home-1/400x280.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;