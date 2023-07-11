import {About,Footer,Header,Skills,Projects} from './cointainer';
import {Nav} from './components';
import React from 'react';
import './App.css';

function App() {
 return (
    <div className='app'>
      <Nav/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
