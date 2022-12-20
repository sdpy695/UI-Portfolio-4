//add alt text and aria labels
 



import "./App.css";
import { useState } from "react";

import NavBar from './components/NavBar';
import WorkGallery from "./components/WorkGallery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';


const Home = () => {
  
  function ScrollDown() {
    window.focus();
    window.scrollTo(0,800);
  }

  if(window.matchMedia("(min-width: 600px)").matches){
    return (

      <div className="mainApp"> 
      
      <div className="AppCenter">
        <div className="topBuffer"></div>
        <div style={{}}  className="bio"> 
        <p style={{"fontSize":"calc(1.375rem + 1.0vw)"}}>Hi, my name is Chloe! I'm a Computer Science Student at Brown University. <b>I care about design that is clean, conscious, and deliberate.</b></p>
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

        
        <p style={{"fontSize":"calc(1.375rem + 1.0vw)"}}>Hi, my name is Chloe! I'm a Computer Science Student at Brown University. <b>I care about design that is clean, conscious, and deliberate.</b></p>
        
        </div>
        <div style={{'margin-top':'10%','display':'flex', 'justify-content':'center'}}>
            <IconButton size="large" style={{'color':'#000000'}} onClick={()=>ScrollDown()}>
              <KeyboardArrowDownIcon style={{'width':'2.2em', 'height':'2.2em'}} />
            </IconButton>
            </div>
        {WorkGallery()}
      </div>
      
      </div>
      
      )
    }
}



export default Home;

