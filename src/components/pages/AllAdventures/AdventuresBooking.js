import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './AdventuresBooking.css'
import useAuth from '../../hook/useAuth';

const AdventuresBooking = () => {
const {user}=useAuth()
const {bookingid}=useParams()
const[booking,setbooking]=useState({})

useEffect(() => {
    
    
    fetch(`https://secure-sierra-15746.herokuapp.com/Adventures/${bookingid}`)
    .then(res=>res.json())
    .then(data=>setbooking(data))
}, []);

// console.log(Valunt);
const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log(data)
    data.email=user.email;
    data.img=booking.img;
    data.travelName=booking.name

    fetch('https://secure-sierra-15746.herokuapp.com/users',{

    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(data)

 })
 .then(res=>res.json())
 .then(data=>console.log(data))

  };


    return (
        <div>
            {/* <h1>Addvolunteer:{Valunt.name}</h1> */}
            <div>
                <div className="booking__img">
                <img src={booking.img} className="img-fluid" alt="img"/>
                </div>

                <div className="booking__item">
                    <h2>{booking.name}</h2>
                    <h5><span>$ {booking.price}</span></h5>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">

                            <div className="overview">
                                <h3>Overview the travio</h3>
                                <p>{booking.description}</p>
                            </div>



                        </div>
                        <div className="col-md-4">

                        <form onSubmit={handleSubmit(onSubmit)}id="form">

<div className="form-group">
    <label htmlFor="name">Your Name</label>
    <br />
    
    <div className="input-group ">
    <input id="name" {...register("name")} placeholder="Enter Your Name"/>
    </div>
</div>
 <div className="form-group">
    <label htmlFor="name">Your Photo</label>
    <br />
    <div className="input-group">
    <input  id="name"{...register("photo")} placeholder="Enter Your Photo Url"/>
    
    </div>
</div> 
<div className="form-group">
    <label htmlFor="name">Your Phone</label>
    <br />
    <div className="input-group">
    <input type="number" id="name"{...register("phone")} placeholder="Enter Your Phone"/>
    
    </div>
</div>
<div className="form-group">
    <label htmlFor="name">Your Tickets</label>
    <br />
    <div className="input-group">
    <input type="number" id="name"{...register("phone")} placeholder="Enter Your Tickets No"/>
    
    </div>
</div>
<div className="form-group">
    <label htmlFor="name">Your Date</label>
    <br />
    <div className="input-group">
    <input type="date" id="start" name="trip-start"

        min="2000-01-01" max="2050-12-31" {...register("date")} />
    
    </div>
</div>
<div className="form-group">
    <label htmlFor="name">Your Message</label>
    <br />
    <div className="input-group">
    <input id="name" type="text" {...register("Message")} placeholder="Enter Your Message"/>
    
    </div>
</div>


{errors.exampleRequired && <span>This field is required</span>}

<input className="btn btn-outline-secondary" type="submit" value="Book Tour" />


                        </form>

                        </div>
                    </div>
 
                </div>






            </div>

           




            
        </div>
    );
};

export default AdventuresBooking;