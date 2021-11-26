import React, { useEffect, useState } from 'react';
import './Team.css';


const Services = () => {
    const [Teams, setTeams] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    },[])
    return (
        <div className="container">
            <h1 className="text-center mb-5">Our Creative Team</h1>
            <div className="team-grid">
                {
                    Teams.map((Team, key) => {
                        return (
                            <div key={key} className="card shadow" >
                                <img height="300px" src={Team.image} className="card-img-top" alt="..."/>
                                <div className="card-container">
                                <h5 className="card-title">{Team.author}</h5>
                                    <p className="card-text">{Team.passion} </p>
                                    <div className="location">
                                         <p><i className="fas fa-map-marker-alt"></i> Hong Kong</p>
                                    </div>
                               
                                </div>
                            </div>
                        )

                    }
                    )
                }
            </div>

        </div>
    );
};

export default Services;