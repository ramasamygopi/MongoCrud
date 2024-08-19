import React from 'react'
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import './updateuser.css'
 const UpdateUser = () => {
  const {id}=useParams()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
const navigate=useNavigate()
useEffect(()=>{
  axios.get('https://mongocrud-bczd.onrender.com/getUser/'+id)
  .then(result=>{
    console.log(result)
    setName(result.data.name)
    setEmail(result.data.email)
    setAge(result.data.age)

  })
.catch(err=>console.log(err)) 
},[]
  )
  const Update=(e)=>{
e.preventDefault();
axios.put('https://mongocrud-bczd.onrender.com/UpdateUser/'+id, { name, email, age })
.then(result => {
  console.log(result)
 navigate('/')   
})  
    .catch(err => console.error('Error:', err));
};
  
  return (
  
    <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      
      
      <form onSubmit={Update}>
        <h2>Update User</h2>
        <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" value={name} placeholder='Enter Name' className='form-control'  onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="text" value={email}placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text" value={age} placeholder='Enter Age' className='form-control'  onChange={(e) =>setAge(e.target.value)} />
        </div>
        <div className="bt-container">
        <button className='bt'>
    
Update
        </button>
        
        </div>
      </form>
      
        </div>
        </div>
  )
}
export default UpdateUser;