
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { chainPropTypes } from '@mui/utils';
import { formLabelClasses } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Icon } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import { IconButton } from '@mui/material';


import * as React from 'react';

import { NavLink } from 'react-router-dom';


const NavBar= () => {

  const [padding, setPadding] = useState('5% 10% 1% 10%');

  window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {
        setPadding('2% 5% 1% 5%')

      } else {
        setPadding('5% 10% 1% 10%')
      }
    }
   
  const handleChange = (event) => {
    console.log('handling change like a champ')
  };


  if(window.matchMedia("(min-width: 600px)").matches){
    return (
      <div style={{padding:padding}} className="NavBar">
         <NavLink style={{ textDecoration: 'none', color: "black"}} to="/"><h1 style={{"fontSize":"calc(1.375rem + 2vw)", "padding":"10px"}} href="">Name Redacted</h1></NavLink>
        <div className="NavButtons">
        {/* <a style={{"padding": "10px"}} target="_blank"  href="mailto:chloe_de_campos@brown.edu">{ LinkedInIcon}</a>  */}
        {/* <a style={{"padding": "10px"}} target="_blank" href="https://www.linkedin.com/in/chloedecampos">Link me in</a>
        <a style={{"padding": "10px"}} target="_blank"  href="https://www.instagram.com/stink.lines/">Look at my cartoons</a> */}
        <Button style={{"margin": "10px"}} onClick={() => alert("link intentionally broken for anonymization")}>
          {/* Link me in */}
          <LinkedInIcon/>
        </Button>
        <Button style={{"margin": "10px"}} onClick={() => alert("link intentionally broken for anonymization")}>
          {/* Email  */}
          <EmailIcon/>
        </Button>
        <Button style={{"margin": "10px"}} title="poop" onClick={() => alert("link intentionally broken for anonymization")}>
          {/* See my Cartoons */}
          <EmojiPeopleIcon/>
        </Button>
        {/* <Button style={{"margin": "10px"}} onClick={() => alert("link intentionally broken for anonymization")}>link me in</Button>
        <Button style={{"margin": "10px"}} onClick={() => alert("link intentionally broken for anonymization")}>see my cartoons</Button> */}
        {/* <a style={{"padding": "10px"}} target="_blank"  href="mailto:chloe_de_campos@brown.edu">Email me</a>
        <a style={{"padding": "10px"}} target="_blank" href="https://www.linkedin.com/in/chloedecampos">Link me in</a>
        <a style={{"padding": "10px"}} target="_blank"  href="https://www.instagram.com/stink.lines/">Look at my cartoons</a> */}
          {/* <NavLink to="/Responsive-Redesign">ResponsiveRedesign</NavLink> */}
          {/* <a style={{"padding": "10px"}} href="">Work</a>
          <a style={{"padding": "10px"}} href="">Contact</a> */}
  
        </div>
       </div>        
    )
  }
  else{
    return (
      <div id="NavBar" className="NavBar">
          <NavLink style={{ textDecoration: 'none', color: "black"}} to="/"><h1 style={{"fontSize":"calc(1.375rem + 2vw)", "padding":"10px"}} href="">Name Redacted</h1></NavLink>

        <img ></img>
       </div>        
    )
  }
  
}

export default NavBar;