
import{BrowserRouter,Routes,Route, HashRouter} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import User from './User';

function App() {


  return (
    <>
      <div>
    <HashRouter>
    <Routes>
      <Route path=""element={<User/>}></Route>
      <Route path="CreateUser"element={<CreateUser/>}>Add</Route>
      <Route path="UpdateUser/:id"element={<UpdateUser/>}>Update</Route>
    </Routes>
    </HashRouter>
      </div>
  
       
    </>
  )
}

export default App
