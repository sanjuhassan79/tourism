import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="Found__item">
            <Link to="/Home"><button type="button" class="btn btn-success">Go to Home</button></Link>
            

        </div>
    );
};

export default NotFound;