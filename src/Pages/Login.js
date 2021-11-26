import React from 'react';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import '../Components/login/login.css';
import useAuth from '../hooks/useAuth';
const Login = () => {
    const { AllContexts } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect =location?.state?.from || '/home' ;
    const { signInUsingGoogle, signInUsingGithub, setUser,
        setError, getEmail,
        getPassword,
        signInWithEmail, } = AllContexts;
     
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect);
            })
            .catch((err) => {
                setError(err.message)
            });
    }

    const handleGithubLogin = () => {
        signInUsingGithub()
            .then((result) => {
                setUser(result.user)
                history.push(redirect);
            })
            .catch((err) => {
                setError(err.message)
            });
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then((result) => {
                setUser(result.user);
                history.push(redirect);
            })
            .catch((err) => {
                setError(err.message)
            });
    }


    return (
        <div className="container ">
            {/* <button onClick={signInUsingGoogle}>login</button> */}
            <Form onSubmit={handleSubmit} className="card mx-auto login ">
                <h4 className="text-primary text-center"> Please Sign In to Continue</h4>
                <input onBlur={getEmail} className="email shadow" type="email" placeholder="Email Address"/>
                <input onBlur={getPassword} className="password shadow" type="Password" placeholder="Password" />
                <button type="submit" className="shadow roundc btn btn-primary mt-2">
                    Login
                </button>

                
            </Form>
                <div className="text-center">
                    <NavLink to="/signup">Create New Acount</NavLink>
                </div>
                <div className="text-center or-button">
                     <p className="text-center">or,</p>
                    <i onClick={handleGoogleLogin} className="or fab fa-google"></i>
                    <i onClick={handleGithubLogin} className="or fab fa-github"></i>
                </div>
            
        </div>
    );
};

export default Login;