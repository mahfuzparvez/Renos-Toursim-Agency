import React from 'react';
import './Head.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
const Head = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div>
                {/*---------------
              Navbar Section
            -------------- */}
                <Navbar sticky="top" collapseOnSelect expand="lg" id="navBar" variant="light">
                    <Navbar.Brand href="#home" className='h2'><img id="headerlogo" src="https://i.postimg.cc/ZYjn4gTx/icon1-removebg-preview-1.png" alt="" /> Touring with Renos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="hashlink me-auto h6">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/service">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/review">Review</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            <a className='text-decoration-none mx-2' href="#login"> {user?.displayName}</a>
                        </Navbar.Text>
                        {user?.email ?
                            <Button className="loginbtn me-3" onClick={logOut} variant="info">Logout</Button> :
                            <Button variant="info" className="loginbtn me-3"><Link id="loginbtn" to="/login">Login</Link></Button>}
                    </Navbar.Collapse>
                </Navbar>
            </div>
            {/*---------------
              Banner Section
            -------------- */}
            <div className='banner mb-4'>
                <div className='bannerText'>
                    <h3>Rely on Renos for a trip to Belgium. Renos offers good quality delightful travel services at low cost.</h3>
                    <h5>Will be Touring With Renos</h5>
                    <button>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Head;