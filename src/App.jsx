
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from "./pages/LoginPage"
import DashBoard from './pages/DashBoard'
import Registration from './pages/Registration'
import UsersTable from './pages/UsersTable'




function App() {

  return (
  <>
  <Routes>
<Route path='/' element = {<LoginPage/>}/>
<Route path='/DashBoard' element = {<DashBoard/>}/>
<Route path='/Registration' element = {<Registration/>}/>
<Route path='/users' element = {<UsersTable/>}/>

  </Routes>

  
  
  </>
  )
}

export default App
