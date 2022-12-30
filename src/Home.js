//add alt text and aria labels
 



import "./App.css";
import About from "./About.js"
import { useState } from "react";

import NavBar from './components/NavBar';
import WorkGallery from "./components/WorkGallery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';


 const Home =() =>{
  
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
        {/* <div>
          
                                
          <p>
              I am a junior user interface designer based in Providence, RI. I have a passion for creating intuitive and appealing designs that enhance the user experience. My design style is influenced by accessibility, functionality, and a strong focus on user-centered design principles.
              </p>
  
              <p>
              I'm currently in my third year of Computer Science at Brown University. I've gained valuable experience through internships at <a href="https://www.sasaki.com/">Sasaki</a> and the <a href="https://www.sustaininfrastructure.org/">Center for Sustainable Infrastructure</a>, and a term at the <a href="https://berlinartinstitute.com/">Berlin Art Institute</a>. I have a strong foundation in design principles and am proficient in design software such as Adobe Creative Suite and Figma.
              </p>
  
              <p>
              In my spare time, you can find me playing ultimate frisbee, drawing, and tinkering with code. I am always looking for new opportunities to grow and improve as a designer, and I am excited to see where my career takes me next.
              </p>
              <p>
              Thank you for taking the time to visit my portfolio. I am always looking for opportunities to grow and learn as a designer, and I am excited to bring my skills and creativity to new challenges.
              </p>
          </div> */}

        {/* {About()} */}
        
        {/* <a href="/p">about me! </a> */}
        
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
        {/* <div>
          
                                
          <p>
              I am a junior user interface designer based in Providence, RI. I have a passion for creating intuitive and appealing designs that enhance the user experience. My design style is influenced by accessibility, functionality, and a strong focus on user-centered design principles.
              </p>
  
              <p>
              I'm currently in my third year of Computer Science at Brown University. I've gained valuable experience through internships at <a href="https://www.sasaki.com/">Sasaki</a> and the <a href="https://www.sustaininfrastructure.org/">Center for Sustainable Infrastructure</a>, and a term at the <a href="https://berlinartinstitute.com/">Berlin Art Institute</a>. I have a strong foundation in design principles and am proficient in design software such as Adobe Creative Suite and Figma.
              </p>
  
              <p>
              In my spare time, you can find me playing ultimate frisbee, drawing, and tinkering with code. I am always looking for new opportunities to grow and improve as a designer, and I am excited to see where my career takes me next.
              </p>
              <p>
              Thank you for taking the time to visit my portfolio. I am always looking for opportunities to grow and learn as a designer, and I am excited to bring my skills and creativity to new challenges.
              </p>
          </div>
       */}
        <div style={{'margin-top':'10%','display':'flex', 'justify-content':'center'}}>
            <IconButton size="large" style={{'color':'#000000'}} onClick={()=>ScrollDown()}>
              <KeyboardArrowDownIcon style={{'width':'2.2em', 'height':'2.2em'}} />
            </IconButton>
            </div>
        {WorkGallery()}
        <p id="bottombar" style="font-size: 8px;">Made with love in Providence, RI.</p>
      </div>
      
      </div>
      
      )
    }
}



export default <Home/>;

