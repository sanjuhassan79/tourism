import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../../hook/useAuth';
import './Navbar.css'
const Navbars = () => {

  const{user,logOut}=useAuth()
    return (
        <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" className="top-nav py-3">
          <div className="container">
         <Navbar.Brand  href="#home"><img className="logow" src='https://www.pinclipart.com/picdir/big/368-3684726_egypt-clipart-oasis-sri-lanka-travel-agency-logo.png' alt="logo" /></Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
            <Nav >
    
              <Link className="navLink" to="/">Home</Link>
              
              
              
               {user.email?
              <div>
                <Link className="navLink" to="/Admin">Admin</Link>
                <Link className="navLink" to="/Profile">Profile</Link>
              <Link className="navLink" to="/AddAdventures">AddAdventures</Link>
                <span className="mavName">{user?.email.slice(0,10)}</span>
                <Link onClick={logOut} className="navLink" to="/"><span className="sinItem">Log out</span></Link>
                
              </div>
                :<div><Link className="navLink" to="/Login"><span className="sinItem">Login</span></Link>
                <Link className="navLink" to="/Register"><span className="sinItem">Register</span></Link></div>
              
              } 
              
    
              
              
              
              
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
};

export default Navbars;