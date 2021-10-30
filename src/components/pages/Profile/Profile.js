import React from 'react';
import { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import './Profile.css'
import ProfileItem from './ProfileItem';


const Profile = () => {
const{user}=useAuth()
const email=user.email
    const [addEvents,setaddEvents]=useState([])
    const [isDelete,setisDelete]=useState(null)
console.log(addEvents[0]?.name);
    useEffect(() => {
       fetch(`https://secure-sierra-15746.herokuapp.com/users/${email}`)
       .then(res=>res.json())
       .then(data=>setaddEvents(data))
    }, [email,isDelete]);


const handleDelete=id=>{


    console.log(id);
    fetch(`https://secure-sierra-15746.herokuapp.com/users/${id}`,{
    
    method:"DELETE",
     
     })
   .then(res=>res.json())
   .then(dataitem=>{
         if(dataitem.acknowledged === true){
          alert('Deleted succesfully')
           setisDelete(true)
           const remainingUser= addEvents.filter(addEvent=>addEvent._id !==id)
           setaddEvents(remainingUser)
         
      }else{
           setisDelete(false)  
       }
     })



}




    return (
        <div>


<div className="container-fluid">
  <div className="row">
      <div className="col-md-3 bg-light fixed-left avatat px-2 ">
         <div className="avata__item mt-5">
         <div className="imgage">
          <img src={addEvents[0]?.photo} className="img-thumbnail" alt="..."/>
          </div>
          <div className="avata__title">
              <h4>{addEvents[0]?.name}</h4>
              <p className="mb-0"><i className="fas fa-phone icon"></i>{addEvents[0]?.phone}</p>
      <p><i className="fas fa-envelope icon"></i>{addEvents[0]?.email}</p>
              <p></p>

          </div>
         </div>





      </div>
      <div className="col-md-9 bg__color">

      <Container className="my-5">
            <Row xs={1} md={4} className="g-4">
 {

addEvents.map(Events=> <ProfileItem
key={Events._id}

Events={Events}
handleDelete={handleDelete}
></ProfileItem>)

  } 
</Row>
</Container>


      </div>
  </div>
</div>


            
          
        </div>
    );
};

export default Profile;