import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="my-5 bg-light py-5">
            <div className="container">

                <div className="row">
                    <div className="col-md-5">
                        <div className="about-img">
                        <img src="https://i.ibb.co/MGfXfcP/about-1.jpg" className="thumbnail" alt="about-img"/>
                        </div>
                    </div>
                    <div className="col-md-7 sec-title">
                        <h6>ABOUT TRAVIO</h6>
                        <h2>World Best Travel <br /> Agency Company <br /> Since 2008.</h2>
                        <p>You, our discerning readers, will often plan your next adventure before the one you're on has even ended. Your love of exploring the world has helped sustain the travel industry during these tumultuous times, and as the world began to reopen, you were among the first to get back out there. Your insights on those trips — and on your pre-pandemic journeys,</p>
                        <ul className="list">
                            <li><i className="fas fa-hand-point-right might-mar"></i> Ratione voluptatem.sequi nesciunt.</li>
                            <li><i className="fas fa-hand-point-right might-mar"></i> Ratione voluptatem.</li>
                            <li><i className="fas fa-hand-point-right might-mar"></i> Ratione voluptatem sequi.</li> 
                        </ul>
                        <button type="button" className="btn btn-outline-warning">Find Tours</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;