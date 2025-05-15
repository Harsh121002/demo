import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/indo.css'
import Navbar from './Commn/Navbar'
import Home from './Componet/Home'
import Contact from './Componet/Contact'
import Project from './Componet/Project'

function App() {


  return (

    <div className="bg-black ">
      <Navbar />
      <Home/>
      <Project/>
      <Contact/>

    </div>

  )
}

export default App
