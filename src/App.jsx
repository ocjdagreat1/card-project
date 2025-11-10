
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from "./pages/LoginPage"
import DashBoard from './pages/DashBoard'
import Registration from './pages/Registration'
import UsersTable from './pages/UsersTable'
import ViewUser from './pages/ViewUser'
import UpdateUser from './pages/UpdateUser'




function App() {

  return (
  <>
  <Routes>
<Route path='/' element = {<LoginPage/>}/>
<Route path='/DashBoard' element = {<DashBoard/>}/>
<Route path='/Registration' element = {<Registration/>}/>
<Route path='/users' element = {<UsersTable/>}/>
<Route path='/users/:id' element = {<ViewUser/>}/>
<Route path='/users/edit/:id' element = {<UpdateUser/>}/>

  </Routes>

  
  
  </>
  )
}

export default App
