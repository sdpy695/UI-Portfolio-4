


import "./App.css";
import { useState } from "react";

import NavBar from './components/NavBar';
import WorkGallery from "./components/WorkGallery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';


const About = () => {
  
    function ScrollDown() {
        window.focus();
        window.scrollTo(0,800);
      }
    
      if(window.matchMedia("(min-width: 600px)").matches){
        return (
                
              
          <div className="mainApp"> 
          
          <div className="AppCenter">
            <div  className="topBuffer"></div>
            <div style="margin: 30% 15% 10% 15%" id="about!">
                    
                    <h6>Hi there!</h6>
                        
                        <p>
                        My name is Chloe and I am a junior user interface designer based in Providence, RI. I have a passion for creating intuitive and appealing designs that enhance the user experience. My design style is influenced by accessibility, functionality, and a strong focus on user-centered design principles.
                        </p>
        
                        <p>
                        I'm working on my bachelor's degree in Computer Science at Brown University and have gained valuable experience through internships at Sasaki and the Center for Sustainable Infrastructure. I have a strong foundation in design principles and am proficient in design software such as Adobe Creative Suite and Figma.
                        </p>
                        <p>
                        I am always looking for opportunities to grow and learn as a designer, and I am excited to bring my skills and creativity to new challenges.
                    

                        </p>
                        <p>
                        In my spare time, you can find me playing ultimate frisbee and drawing little cartoons. I am always looking for new opportunities to grow and improve as a designer, and I am excited to see where my career takes me next.
                        </p>
                        <p>
                        Thank you for taking the time to visit my portfolio. I hope you enjoy browsing my work and getting to know more about me as a designer.

                    </p>
                </div> 
          </div>
          
          </div>
          
        )
        }
        else{
          return(
    
          <div className="mainApp"> 
          <div className="AppCenter">
            <div className="topBuffer"></div>
            <div id="about!">
                    
                    <h6>Hi there!</h6>
                        
                        <p>
                        My name is Chloe and I am a junior user interface designer based in Providence, RI. I have a passion for creating intuitive and appealing designs that enhance the user experience. My design style is influenced by accessibility, functionality, and a strong focus on user-centered design principles.
        
                        I'm working on my bachelor's degree in Computer Science at Brown University and have gained valuable experience through internships at Sasaki and the Center for Sustainable Infrastructure. I have a strong foundation in design principles and am proficient in design software such as Adobe Creative Suite and Figma.
        
                        I am always looking for opportunities to grow and learn as a designer, and I am excited to bring my skills and creativity to new challenges.
        
                        In my spare time, you can find me playing ultimate frisbee and drawing little cartoons. I am always looking for new opportunities to grow and improve as a designer, and I am excited to see where my career takes me next.
        
                        Thank you for taking the time to visit my portfolio. I hope you enjoy browsing my work and getting to know more about me as a designer.
                    </p>
                </div> 
          </div>
          </div>

          
          )
        }
     
}

export default About;



