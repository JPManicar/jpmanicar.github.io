
import React from 'react';
import './components/styles/style.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ScrollButton from './components/ScrollButton'; 



function App(){

    return (
    <div className="App">
    <NavBar/>
    <Home/>
    <ScrollButton /> 
    </div>
    );  
  }



export default App;
