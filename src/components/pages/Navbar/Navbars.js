import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../asste/logo.png'
import useAuth from '../../hook/useAuth';
import './Navbar.css'
const Navbars = () => {

  const{user,logOut}=useAuth()
    return (
        <div>
        <Navbar sticky="top" collapseOnSelect expand="lg" className="top-nav py-3">
          <div className="container">
         <Navbar.Brand  href="#home"><img className="logow" src={logo} alt="logo" /></Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
            <Nav >
    
              <Link className="navLink" to="/">Home</Link>
              
              
              
               {user.email?
              <div>
                <Link className="navLink" to="/Admin">Admin</Link>
                <Link className="navLink" to="/Profile">Profile</Link>
              <Link className="navLink" to="/AddAdventures">AddAdventures</Link>
                <span>{user?.email.slice(0,10)}</span>
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