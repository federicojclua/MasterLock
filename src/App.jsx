import { useState } from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Home from './components/home/Home'
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
     <Header/>
     <Home/>
     <About/>
   
     
      </div>
    </>
  )
}




export default App
