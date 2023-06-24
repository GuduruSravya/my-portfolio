import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About';
import { useState } from 'react';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

import { BrowserRouter as Router, Route,Link,Routes } from 'react-router-dom';

function App() {
  

  return (
    <div>
      <Header/>
      <Home/>
       
          
     
      
    </div>
   
  );
}

export default App;
