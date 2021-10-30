import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Adventuresitem.css'
const Adventuresitem = (props) => {

// console.log(props.volunteer);
const{description,img,name,_id }=props.Adventur

    return (
        <div>
             <Link to={`/AdventuresBooking/${_id}`}>
             <Col>
              <div className="hover hover-4 text-white rounded"><img src={img} alt=""/>
          <div className="hover-overlay"></div>
          <div className="hover-4-content">
            <h3 className="hover-4-title text-uppercase font-weight-bold mb-0"><span className="font-weight-light">{name.slice(0,15)} </span></h3>
            <p className="hover-4-description text-uppercase mb-0 small">{description.slice(0,50)}</p>
           
          </div>
        </div>
    </Col>
             
             
             
             </Link>
        </div>
    );
};

export default Adventuresitem;