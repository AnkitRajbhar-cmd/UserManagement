import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import UserList from './pages/UserList'
import ProjectList from './pages/ProjectList'
import ProjectForm from './pages/ProjectForm'
import TaskForm from './pages/TaskForm'
import TaskList from './pages/TaskList' 

function App() {
  const [count, setCount] = useState(0);  
   
  
  

  return (
    <>
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/user-list'element={<UserList/>}/>\
      <Route path='/project-list'element={<ProjectList/>}/>
      <Route path='/project-form'element={<ProjectForm/>}/>
      <Route path='/task-form'element={<TaskForm/>}/>
      <Route path='/task-list'element={<TaskList/>}/>
    </Routes>

    </>
  )
}

export default App
