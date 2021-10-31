import React from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="page-breadcrumb">
                <h1 className="page-title">Contact</h1>
            </div>


            <div className="container">
                <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="single-info-box">

                                <div className="icon-box"><i className="fas fa-map-marker-alt envelopeItem"></i></div>
                                <div className="inner-box">
                                <h3>Address</h3>
                                <p>31 park street, 5th Avenue, <br /> Dhanmondy, Dhaka.</p>
                                </div>
                                 </div>
                                 </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="single-info-box">

                                <div className="icon-box"><i className="fas fa-phone-alt envelopeItem"></i></div>
                                <div className="inner-box">
                                <h3>Phone</h3>
                                <p>+31 666 888 0001</p>
                                </div>
                                 </div>
                                 </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                <div className="single-info-box">

                                <div className="icon-box"><i className="fas fa-envelope envelopeItem"></i></div>
                                <div className="inner-box">
                                <h3>Email</h3>
                                <p>info@example.com</p>
                                </div>
                                 </div>
                                 </div>
            </div>
            </div>






            
        <div className="my-5 bg-light py-5">
            <div className="container">

                <div className="row">
                    
                    <div className="col-md-7 sec-title">
                        <h6>GET IN TOUCH</h6>
                        <h2>Feel Free to Contact<br /> with us <br /></h2>
                        <p>You, our discerning readers, will often plan your next adventure before the one you're on has even ended. Your love of exploring the world has helped sustain the travel industry during these tumultuous times, and as the world began to reopen, you were among the first to get back out there. Your insights on those trips — and on your pre-pandemic journeys,</p>
                      
                    </div>
                    <div className="col-md-5">
                    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
    </Row>


  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="warning" type="submit">
    Submit
  </Button>
</Form>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Contact;