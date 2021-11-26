import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Detail.css';


const Details = () => {
    const { key } = useParams();
    const { services } = useAuth();
    const singleServices = services?.find((service) => service.key === Number(key));
    
    return (
        <div className="container">
            
                <div className="text-center">
                <div className="grid-card">
                    <div className="text">
                        <h1> {singleServices.name}  </h1>
                        <h6> {singleServices.dsc} </h6>
                    </div>
                    <div className="img-fluid gm">
                        <img className="img-fluid" src={singleServices.img} alt="" />
                    </div>
                    <Link className="btn btn-dark w-25 mt-5" to="/services"> Back?</Link>
                    </div>
                </div>
            
        </div>
    );
};

export default Details;