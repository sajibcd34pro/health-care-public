import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Service = ({ service}) => {
    const { img, dsc, name, key } = service;

    const {addToCart} = useAuth();
    
    return (
        <div>
            <div className="card" style={{height:'28rem',paddingBottom: '20px' }}>
                <img className="card-img-top h-50" src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name} </h5>
                    <p className="card-text">{dsc}</p>
                    
                </div>
                
                <div className="d-flex justify-content-between mx-5">
                    <button onClick={() => addToCart(service)} className="btn btn-primary">
                        Add to Cart
                    </button>
                    <NavLink className="btn btn-danger" to={`/services/${key}`}>View Cart</NavLink>
                </div>
               
            </div>
        </div>
    );
};

export default Service;