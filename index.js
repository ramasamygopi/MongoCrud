const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usermodel = require('./models/Users');

const app = express();

app.use(cors());
app.use(express.json());
require('dotenv').config(); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/',(req,res)=>{
  usermodel.find({})
  .then(users=>res.json(users))
.catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
  const id=req.params.id;
  usermodel.findById({_id:id})
  .then(users=>res.json(users))
  .catch(err=>res.json(err))

})
 app.put('/updateUser/:id',(req,res)=>{
   const id=req.params.id;
   usermodel.findByIdAndUpdate({_id: id},{
 name:req.body.name,
 email:req.body.email,
 age:req.body.age
   })
   .then(users=>res.json(users))
   .catch(err=>res.json(err))
})


app.delete('/deleteUser/:id',(req,res) =>{
  const id=req.params.id;
  usermodel.findByIdAndDelete({_id: id})
  .then(res=>res.json(res))
  .catch(err=>res.json(err))
})

app.post('/CreateUser', (req, res) => {
  usermodel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
