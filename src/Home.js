//add alt text and aria labels
 



import "./App.css";
import { useState } from "react";

import NavBar from './components/NavBar';
import WorkGallery from "./components/WorkGallery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';


const Home = () => {
  
  function ScrollDown() {
    console.log('workgal', document.getElementById("workGallery"))

    // document.body.scrollTo(document.getElementById("workGallery"))
    // document.body.scrollTo(bottom)
    // document.body.scrollTo(0, 100)
    // document.getElementById("workGallery").scrollIntoView()
    window.focus();
    window.scrollTo(0,800);
    console.log('window', window)
  }

  if(window.matchMedia("(min-width: 600px)").matches){
    return (

      <div className="mainApp"> 
      
      <div className="AppCenter">
        <div className="topBuffer"></div>
        <div style={{}}  className="bio"> 
        <p style={{"fontSize":"calc(1.375rem + 1.0vw)"}}>Hi, my name is [Redacted]! I'm a Computer Science Student at Brown University. <b>I care about design that is clean, conscious, and deliberate.</b></p>
          <div style={{'margin-top':'10%','display':'flex', 'justify-content':'center'}}>
            <IconButton size="large" style={{'color':'#000000'}} onClick={()=>ScrollDown()}>
              <KeyboardArrowDownIcon style={{'width':'2.2em', 'height':'2.2em'}} />
            </IconButton>
            </div>
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
        <IconButton size="large" style={{'color':'#000000'}} onClick={()=>ScrollDown()}>
              <KeyboardArrowDownIcon style={{'width':'2.2em', 'height':'2.2em'}} />
            </IconButton>
        {WorkGallery()}
      </div>
      
      </div>
      
      )
    }
}



export default Home;

