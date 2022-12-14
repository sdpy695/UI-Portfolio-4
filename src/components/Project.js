import "../App.css"
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Project(props) {

    return(

        <div className="Project"> 
            <h4 style={{"marginBottom": "10%"}}>{props.name}</h4>
            <img src={props.image}/>
            <p style={{"marginTop":"10%", "marginBottom":"2%"}}>{props.desc}</p>
            
            <button className="button" onClick={() => {
                                    
                                    window.location.href="/UI-Portfolio-4/"+props.link}} type="button">
            View Project</button>

        </div> 
        

    )
}