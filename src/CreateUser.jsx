import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './createuser.css';
const serverUrl = import.meta.env.VITE_SERVER_URL;

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
const navigate=useNavigate('')
  const submit = (e) => {
    e.preventDefault();
    axios.post(`${serverUrl }/CreateUser`, { name, email, age })
      .then(result => {
        console.log(result)
       navigate('/')   
      })      .catch(err => console.error('Error:', err));
  };

  return (
    <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form  onSubmit={submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label>Name</label>
            <input 
              type="text" 
              placeholder='Enter Name' 
              className='form-control' 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input 
              type="text" 
              placeholder='Enter Email' 
              className='form-control' 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-2">
            <label>Age</label>
            <input 
              type="text" 
              placeholder='Enter Age' 
              className='form-control'
              onChange={(e) => setAge(e.target.value)} 
            />
          </div>
          <div className="bt-container">
          <button className='btn' type="submit">Submit</button>
          </div> </form>
      </div>
    </div>
  );
};

export default CreateUser;
