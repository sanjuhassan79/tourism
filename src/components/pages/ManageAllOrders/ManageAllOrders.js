import React from 'react';
import { useState,useEffect } from 'react';
import { Table,Button } from 'react-bootstrap';
import './ManageAllOrders.css'
const ManageAllOrders = () => {

const [user,setuser]=useState([])

const [isDelete,setisDelete]=useState(null)


useEffect(() => {
    fetch('https://secure-sierra-15746.herokuapp.com/users')
    .then(res=>res.json())
    .then(data=>setuser(data))
}, [user,isDelete]);

const handleDelete=(id)=>{

console.log(id);
fetch(`https://secure-sierra-15746.herokuapp.com/users/${id}`,{

method:"DELETE",
headers:{"content-type":"application/json"}
})
.then(res=>res.json())
.then(dataitem=>{
    if(dataitem.deleteCount>0 ||dataitem.acknowledged === true){
      setisDelete(true)
      alert('Are you sure delete your order')
        const remainingUser= user.filter(users=>users._id !==id)
        setuser(remainingUser)
    }else{
        setisDelete(false)  
    }
})


}

const handleStatus=id=>{
  
fetch(`https://secure-sierra-15746.herokuapp.com/users/${id}`,{

method:"PUT",
headers:{"content-type":"application/json"},
body:JSON.stringify({
  status:"approved"
})
})

.then(res=>res.json())
.then(data=>{
  console.log(data)
})




}

    return (
        <div className="h-100">
            <Table responsive striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Email ID</th>
      <th>Registating date</th>
      <th>status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        user?.map(users=><tr
        key={users._id}>
           
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>{users.date}</td>
            <td><button onClick={()=>handleStatus(users._id)}>{users.status}</button></td>
           
            <td><Button onClick={()=>handleDelete(users._id)} variant="danger">Cancel</Button></td>
          </tr>
          
          )
    }
    
  </tbody>
</Table>
        </div>
    );
};

export default ManageAllOrders;