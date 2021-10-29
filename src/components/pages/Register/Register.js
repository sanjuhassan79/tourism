import React from 'react';

import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Register.css'
const Register = () => {

    const{signInUsingGoogle,handleEmailChange,handlePasswordChange,handleRegister,setUser}=useAuth()
    const location=useLocation()
    
    const history=useHistory()
const redirect_uri=location.state?.from || '/Home'
const handleGoogleLogin=()=>{
  signInUsingGoogle()
  .then((result) => {
    history.push(redirect_uri)
    setUser(result.user);
    // ...
  })
}


    return (
        <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-md-7 intro-section">
          <div className="brand-wrapper">
            <h1>Logo</h1>
          </div>
          <div className="intro-content-wrapper">
            <h1 className="intro-title">Welcome to website !</h1>
            <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna</p>
            <a href="#!" className="btn btn-read-more">Read more</a>
          </div>
          <div className="intro-section-footer">
            <div className="footer-nav">
            <button type="button" className="btn btn-outline-danger">Facebook</button>
            <button type="button" className="btn btn-outline-warning mx-3">Twitter</button>
            <button onClick={handleGoogleLogin} type="button" className="btn btn-outline-info">Gmail</button>
                        
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-5 form-section">
          <div className="login-wrapper">
            <h2 className="login-title">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input onBlur={handleEmailChange} type="email" name="email" id="email" className="form-control" placeholder="Email"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="sr-only">Password</label>
                <input onBlur={handlePasswordChange} type="password" name="password" id="password" className="form-control" placeholder="Password"/>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                
                <input type="submit" className="btn btn-outline-info" value="Register" />
              </div>
            </form>           
            <p className="login-wrapper-footer-text">Need an account? <Link to="/Login" className="text-reset">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;