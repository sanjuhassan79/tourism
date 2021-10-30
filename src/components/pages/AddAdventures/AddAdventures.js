import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hook/useAuth';
import './AddAdventures.css'

const AddEvent = () => {
    const {user}=useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
    //   console.log(data);
      data.email=user.email

axios.post('http://localhost:5000/Adventures',data)

    //    fetch('http://localhost:5000/Adventures',{

    //     method:"POST",
    //     headers:{
    //         "content-type":"application/json"
    //     },
    //     body:JSON.stringify(data)
    
    //  })
     
     .then(res=>{
          
       
        // reset()
        if(res.data.insertedId){

            alert('added successfully')
            console.log(res)
             }
    })
    
     }
      
    return (
      

        <div className="header-row">
           
           <div className="container">
            <div className="row">

            <div className="col-md-8 explore">
            <div><h1 className="banner__title">Our Most Popular  <br /> Adventures </h1>
            <p className="banner__subtitle">Discover your next great adventure, become an explorer to get started!</p></div>
            </div>
            <div className="col-md-4">
            
            <form onSubmit={handleSubmit(onSubmit)}id="form">

                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <br />
                    
                    <div className="input-group">
                    <input id="name" defaultValue='' {...register("name")}/>
                    </div>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="name">Your Image Url</label>
                    <br />
                    
                    <div className="input-group">
                    <input id="name" defaultValue='' {...register("img")}/>
                    </div>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="name">Your Price</label>
                    <br />
                    <div className="input-group">
                    <input  name="number" type="number" {...register("price")}/>
                    
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
                    <label htmlFor="name">Your Description</label>
                    <br />
                    <div className="input-group">
                    <textarea id="name" {...register("description")} placeholder="Enter Your Description"></textarea>
                    
                    </div>
                </div>
                

                {errors.exampleRequired && <span>This field is required</span>}
      
                <input className="btn btn-outline-secondary" type="submit" />
  

            </form>
            
            </div>


            </div>
            </div>








            
        </div>
    );
};

export default AddEvent;