import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Blogs from "./Blogs";
import About from "./About";
import Contact from "./Contact";

function App(props) {
    return (
      <>
    <div className="App">
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Blogs' element={<Blogs/>} />
         <Route path='/About' element={<About/>} />
         <Route path='/Contact' element={<Contact/>} />
       </Routes>
     </div>
      </>
    )
  }

export default App;