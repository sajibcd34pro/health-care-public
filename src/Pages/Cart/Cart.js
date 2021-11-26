import React from 'react';
import useAuth from '../../hooks/useAuth';

import './Cart.css';
const Cart = () => {
    const { selectedService, } = useAuth();
    

    
    console.log(selectedService)
    return (
        <div>
            {selectedService.length ?
                (<div className="container">
             
                    
                
                    {
                        selectedService.map((service) => (
                            
                             
                            (<div className="card-css">
                                <div>
                                    <img className="w-5" src={service.img} alt="" />
                                </div>
                                <div className="dsc">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p> {service.dsc} </p>

                                </div>



                            </div>)
                                   
                         
                        

                        ))

                    }
                
                    
                
                </div>)
                
                : (
            <div className="text-center my-5 py-5">
                <h1 className="text-danger">No Items Selected!</h1>
            </div>
            )}

                
        </div>
    );
};

export default Cart;