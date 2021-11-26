import React from 'react';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/header-logo/logo-light.png';


const Header = () => {
    const style = {
        margin: '5px',
        textDecoration: 'none',
        fontSize: '20px',
        color: 'black'
    }
    const activeStyle = { fontWeight: 'bold', textDecoration: 'underline'}
    // //  
    const { AllContexts, selectedService,} = useAuth();
    const { user, logOut } = AllContexts;
    
    
    const { displayName, email, photoURL} = user;
    // console.log(user);
return (
    <div className="sticky-top">
        <Navbar style={{ background: `rgb(43, 110, 116)` }} expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    <img width="140px" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center">
                        <NavLink activeStyle={activeStyle} style={style} className="text-white" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} style={style} className="text-white" to="/services">Services</NavLink>
                        {email&& <NavLink activeStyle={activeStyle} style={style} className="text-white" to="/about">About</NavLink>}
                        
                       
                    
                        {email&& <NavLink style={style} className="text-white" to="/cart"><i className="fas fa-people-carry"></i><Badge className="badge" bg="secondary"> {selectedService.length}   </Badge></NavLink>}
                      </Nav>
                       
                    {/* sign in & sign out dynamic  */}
                    
                    {!email ? (
                            

                        <Nav className="ms-auto">
                            <NavLink activeStyle={activeStyle} style={style} className="text-white" to="/signup">SignUp</NavLink>

                            <NavLink activeStyle={activeStyle} style={style} className="text-white" to="/login">Login</NavLink>
                        </Nav>
                           
                        )
                        
                        : (
                            <Nav className="ms-auto">
                                <NavDropdown title={
                                   photoURL === null ?
                                    displayName
                                    
                                    :
                                   
                                        <img
                                            style={{
                                                width: '45px',
                                                borderRadius: '50%',
                                                border: '2px solid white'
                                            }}
                                            src={photoURL} alt=""
                                        />

                                }
                                    
                                >
                                    <div className="p-5 text-center">
                                        <h6>{displayName}  </h6>
                                        <h6>Email: {email} </h6>
                                        <br />
                                        <button onClick={logOut}  className="btn btn-outline-dark">
                                            LogOut
                                        </button>
                                    </div>
                                    
                                </NavDropdown>
                            </Nav>
                          ) }  
                        

                   
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

        
    </div>
);
};

export default Header;