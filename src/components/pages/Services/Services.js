import React from 'react';
import './Services.css'
const Services = () => {
    return (
     
<section className="services">
   <div className="container">
    
      <div className="row">
         <div className="col-md-3 shadow-sm">
            <div className="service-thumb">
                <div className="thumb-icon"><i className="fas fa-users"></i></div>
                <h4>2000+ Our Worldwide Guide</h4>
               
             </div>
         </div>
         
         <div className="col-md-3 shadow-sm">
            <div className="service-thumb">
                <div className="thumb-icon"><i className="fas fa-heart-broken"></i></div>
                <h4>100% Trusted Tour Agency</h4>
               
             </div>
         </div>
         
         <div className="col-md-3 shadow-sm">
            <div className="service-thumb">
                <div className="thumb-icon"><i className="fas fa-glass-martini-alt"></i></div>
                <h4>12+ Years of Travel Experience</h4>
               
             </div>
         </div>
         
         <div className="col-md-3 shadow-sm">
            <div className="service-thumb">
                <div className="thumb-icon"><i className="fas fa-swimmer"></i></div>
                <h4>98% of Our Travelers are Happy</h4>
               
             </div>
         </div>
      </div>
   </div>
</section>
    );
};

export default Services;