import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="mt-5 pt-5 pb-5 footer">
<div className="container">
  <div className="row">
    <div className="col-lg-5 col-xs-12 about-company">
      <h2>Heading</h2>
      <p className="pr-5 text-white-50">Because of security concerns U.S. government employees in Bangladesh are subject to movement and travel restrictions. The U.S. government may have limited  </p>
      <p><Link to="#"><i className="fab fa-facebook-square mr-2"></i></Link><Link to="#"><i className="fab fa-linkedin"></i></Link></p>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">Services</h4>
        <ul className="m-0 p-0">
            
          <li>- <Link to="#">Traveling Internationally</Link></li>
          <li>- <Link to="#">The World Travel & Tourism </Link></li>
          <li>- <Link to="#">affecting travel and entry </Link></li>
          <li>- <Link to="#">Travel is the movement </Link></li>
          <li>- <Link to="#">Sed faucibus</Link></li>
          <li>- <Link to="#">Mauris efficitur nulla</Link></li>
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
      <p>vacation tips and photography of the best places to visit around</p>
      <p className="mb-0"><i className="fas fa-phone"></i>0179133333</p>
      <p><i className="fas fa-envelope"></i>info@gmail.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-50">© 2021. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
    );
};

export default Footer;