
//import { useState, useEffect} from "react"
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Search from "./Components/Search";
import {BrowserRouter, Route, Routes,Link} from "react-router-dom"
import Login from "./Components/Login"

function App() {
  return (
    <BrowserRouter>
    <div >
      
      <div className="header">
      <header className="container">
        <h1 className="heading"
        style={{color: '#ce3a16'}}>Get Help</h1> 
        <h1 className="heading">Who We Are </h1>  
        <h1 className="heading">What We Do </h1> 
        <h1 className="heading">Get Involved </h1>
        <h1 className="heading">Ways to Give </h1>
        <h1 className="heading">
          <Search/>
        </h1>
        <h1 className="heading">
        <button className="btn" 
        style={{backgroundColor: '#FFDA00'}}>Give Now</button>
        <Login/>
       
        
        </h1>

      </header>
      </div>
     
      <footer className="footer">
        hello
      </footer>
      
    </div>
    </BrowserRouter>
  );
}



export default App;
