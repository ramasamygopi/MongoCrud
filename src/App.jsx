
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import User from './User';

function App() {


  return (
    <>
      <div>
    <BrowserRouter>
    <Routes>
      <Route path=""element={<User/>}></Route>
      <Route path="CreateUser"element={<CreateUser/>}>Add</Route>
      <Route path="UpdateUser/:id"element={<UpdateUser/>}>Update</Route>
    </Routes>
    </BrowserRouter>
      </div>
  
       
    </>
  )
}

export default App
