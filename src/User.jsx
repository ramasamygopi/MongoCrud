import React, { useEffect, useState } from 'react';
import './User.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
const serverUrl = import.meta.env.VITE_SERVER_URL;

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
  axios.get(`${process.env.VITE_SERVER_URL}`)
  .then(result=>setUsers(result.data))
.catch(err=>console.log(err)) 
},[]
  )
  const handleDelete=(id)=>{
    axios.delete(`${serverUrl}/deleteUser/`+id)
.then(res=>{console.log(res)
  window.location.reload()
})
.catch(err=>console.log(err))

  }


  return (
    <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        
      <h2>User Details</h2>
        <table className="table">
         
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map((user) => {
                return<tr >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
               
                <Link to={`/UpdateUser/${user._id}`}> <button className='btnu'>Update</button> </Link>  
                 <button className='btnd' onClick={(e)=>{handleDelete(user._id)}}>Delete</button>
              
                </td>
              </tr>
})}
          </tbody>
      
        </table>
        <div className="btn-container">
      <Link to="CreateUser"> <button className='btn btn-success' >Add</button></Link> 
        </div>
      </div>
    </div>
  );
};

export default User;
