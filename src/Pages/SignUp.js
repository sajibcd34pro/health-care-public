import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import {  Form} from "react-bootstrap";
import useAuth from '../hooks/useAuth';
import './Signup.css';
const SignUp = () => {
    const { AllContexts } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || '/home';
    const redirect_signup = location?.state?.from || '/login';
    const { signInUsingGoogle, signInUsingGithub, setUser,
        setError, getName, signUpEmailPass, getEmail, getPassword, error, UpdateName, emailVerify  } = AllContexts;
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
                setUser(err.message)
            });
    }
   
    const handleSignUpSubmit = (e) => {
        
        signUpEmailPass()
            .then((result) => {
                UpdateName();
                emailVerify();
                alert("user has been created");
                history.push(redirect);
            })
            .catch((err) => {
                setError(err.message);
            });

        e.preventDefault();
    }



    return (
        <div className="container">
            <Form onSubmit={handleSignUpSubmit} className="card mx-auto login" >
                <h4 className="text-primary text-center"> Please Sign Up</h4>
                <p className="text-danger text-center">{error}</p>
                <input className="email shadow" required
                    onBlur={getName} type="text" placeholder="Enter Your Name" />
                <input className="email shadow" type="email" placeholder="Enter Your Email Address" required
                    onBlur={getEmail} />
                <input className="password shadow" required
                    onBlur={getPassword} type="Password" placeholder="Password" id="password-field" />
                
                <button type="submit" className="shadow roundc btn btn-primary mt-2">
                    Sign Up
                </button>

                <div className="text-center">
                    <NavLink to="/login"><span className="text-primary">Already hav an account? Please Login</span></NavLink>
                </div>
                <div className="text-center">
                    <p className="text-center">or,</p>
                    <i onClick={handleGoogleLogin} className="or fab fa-google"></i>
                    <i onClick={handleGithubLogin} className="or fab fa-github"></i>
                </div>

            </Form>
        </div>
    );
};

export default SignUp;