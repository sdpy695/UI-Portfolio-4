import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigation, Link } from 'react-router-dom';
 
import Home from './Home';
import About from './About.js';
import NavBar from './components/NavBar';
import Test from './project pages/CSI/test.js';
import ResponsiveRedesign from './project pages/ResponsiveRedesign';


// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); //to access built-in plugins

class App extends Component {
  
  render() {
    return (      
       <BrowserRouter>
        <div>
          <NavBar />
            <Routes>
             <Route path="/" element={<Home/>}/>
             {/* <Route exact target="_blank" path="/CSI/" element= {new HtmlWebpackPlugin({ template: {CSI} })} />new HtmlWebpackPlugin({ template: {CSI} }) */}
             <Route path="/about" element={<About/>}/>
            <Route component={Error}/>
           </Routes>
           <p style="font-size: 8px; ">made with love in providence, ri</p>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;