import React from 'react';

import { NavLink } from 'react-router-dom';
import './Hero.css';
const Hero = () => {
    return (
        <div className="banner-area">
            <div className="content-area">
                <div className="content">
                       <h5 className="text-center">Markets & Resources </h5>
                            <h1 className="text-center">Find The Best Doctor Near By You</h1>
                            <NavLink className="button btn" to="/about">Find Doctor+</NavLink>
                            <NavLink className="button btn" to="/">Read More+</NavLink>
               </div>
            </div>
        </div>
    );
};

export default Hero;