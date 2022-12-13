//add alt text and aria labels
 



import "./App.css";
import { useState } from "react";

import NavBar from './components/NavBar';
import WorkGallery from "./components/WorkGallery";

const Home = () => {
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  
  if(window.matchMedia("(min-width: 600px)").matches){
    return (

      <div className="mainApp"> 
      
      <div className="AppCenter">
        <div className="topBuffer"></div>
        <div style={{}}  className="bio"> 
        <p style={{"fontSize":"calc(1.375rem + 1.0vw)"}}>Hi, my name is [Redacted]! I'm a Computer Science Student at Brown University. <b>I care about design that is clean, conscious, and deliberate.</b></p>
        
        </div>
        <div id="header">

        </div>
        {WorkGallery()}
      </div>
      
      </div>
      
    )
    }
    else{
      return(

      <div className="mainApp"> 
      
      <div className="AppCenter">
        <div className="topBuffer"></div>
        <div style={{}} className="bio"> 
        <p style={{"fontSize":"calc(1.375rem + 1.0vw)"}}>Hi, my name is [Redacted]! I'm a Computer Science Student at Brown University. <b>I care about design that is clean, conscious, and deliberate.</b></p>
        
        </div>
        <div id="header">

        </div>
        {WorkGallery()}
      </div>
      
      </div>
      
      )
    }
}



export default Home;

