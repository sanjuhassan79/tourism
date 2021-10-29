import React from 'react';
import { useState,useEffect } from 'react';
import { Table,Button } from 'react-bootstrap';

const Admin = () => {

const [user,setuser]=useState([])
const [isDelete,setisDelete]=useState(null)

useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setuser(data))
}, [isDelete]);

const handleDelete=(id)=>{

console.log(id);
fetch(`http://localhost:5000/users/${id}`,{

method:"DELETE",
headers:{"content-type":"application/json"}
})
.then(res=>res.json())
.then(dataitem=>{
    if(dataitem.deleteCount){
        setisDelete(true)
    }else{
        setisDelete(false)  
    }
})


}

    return (
        <div>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Email ID</th>
      <th>Registating date</th>
      <th>Volunteer List</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map(users=><tr
        key={users._id}>
           
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>{users.date}</td>
            <td>{users.description}</td>
            <td><Button onClick={()=>handleDelete(users._id)} variant="danger">Cancel</Button></td>
          </tr>
          
          )
    }
    
  </tbody>
</Table>
        </div>
    );
};

export default Admin;