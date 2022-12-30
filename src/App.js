import React, { Component } from 'react';
import { Switch, BrowserRouter,Router, Route, Routes, Navigation, Link } from 'react-router-dom';

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
      <div>
       
        <BrowserRouter>
        {NavBar}
        <Routes>
           {/* <Route path="/" element={<NavBar/>}/> */}
          <Route path="/" element={Home}/>  
          <Route path="UI-Portfolio-4" element={Home}/>  
          {/* <Route path="UI-Portfolio-4/about" element={About}/>   */}
          <Route path="about" element={About}/>  

        </Routes>
      </BrowserRouter>
    </div>
    );
  }
}
   
      // /* <BrowserRouter>
  
      //     <Routes>
      //       <Route path="/" element={<NavBar/>}>
      //         <Route index element={<Home />} />
      //         <Route path="home" element={<Home />}/>

      //         <Route path="about" element={<About />} />
            
      //       </Route>
      //     </Routes>
      //   </BrowserRouter> */
        // /* <BrowserRouter>
        //   <NavBar />

        //   <Route exact path="/">
        //     <Home/>
        //   </Route> 
            
        //   <Route path="/home">
        //     <Home/>
        //   </Route> 

        //   <Route path="/UI-Portfolio/">
        //     <Home/>
        //   </Route> 

        //   <Route path="/about">
        //     <About/>
        //   </Route> 

        // </BrowserRouter>  
   
      //  <Router>
      //   <div>
      //     <NavBar />
      //       <Routes>
      //        <Route path="UI-Portfolio-4/" element={<Home/>}> <Home></Home> </Route>
      //        <Route path="/" element={<Home/>}><Home></Home> </Route>
      //        {/* <Route exact target="_blank" path="/CSI/" element= {new HtmlWebpackPlugin({ template: {CSI} })} />new HtmlWebpackPlugin({ template: {CSI} }) */}
      //        <Route path="UI-Portfolio-4/about" element={<About/>}/>
      //        <Route path="/about" element={<About/>}/>
      //       <Route component={Error}/>
      //      </Routes>
      //      <p style="font-size: 8px; ">made with love in providence, ri</p>
      //   </div> 
      // </Router>
 
 
export default App;