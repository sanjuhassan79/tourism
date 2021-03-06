import React from 'react';
import { useState,useEffect } from 'react';
import { Container,Row } from 'react-bootstrap';
import './Adventures.css'
import Adventuresitem from './Adventuresitem';

const Adventures = () => {

const [Adventures,setAdventures]=useState([])

useEffect(() => {
   fetch('https://secure-sierra-15746.herokuapp.com/Adventures')
   .then(res=>res.json())
   .then(data=>setAdventures(data))
}, []);





    return (
        <div>


 <Container className="my-5">
   <div className="Adventures">
     <h4>MODERN & BEAUTIFUL</h4>
     <h2>Our Most Popular Adventures</h2>

   </div>
            <Row xs={1} md={3} className="g-4">
            {

Adventures.map(Advent=> <Adventuresitem
key={Advent._id}

Adventur={Advent}
></Adventuresitem>)

  } 
</Row>
</Container>
        </div>
    );
};

export default Adventures;