import React from 'react';

import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';

import './Services.css';


const Services = () => {
    const {services} = useAuth();
    
    return (
        <div className="container" style={{height:'100%'}}>
            <div className="text">
                <h6 className="text-center">What We Do</h6>
                <h1 className="text-center">Our Services</h1>
            </div>
            
            <div className="mt-5">
                <div className="card-grid">
                    {
                        services.map(service => <Service service={service} key={service.key} ></Service> )
                    }
                </div>
                </div>
            
        </div>
    );
};

export default Services;