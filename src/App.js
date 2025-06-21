import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navebar from './component/Navebar';
import Home from './component/Home';
import Part1 from './component/Part1';
import Part2 from './component/Part2';
import Part3 from './component/Part3';

import Part4 from './component/Part4';
import Part5 from './component/Part5';
import Part6 from './component/Part6';
import Footer from './component/Footer';
import Part7 from './component/Part7';




const App = () => {
  const [, ] = useState(false);

  return (
    <Router>
      { <Navebar />}  
      <Routes>
      
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Part1" element={<Part1 />} />
            <Route path="/Part2" element={<Part2/>} />
            <Route path="/Part3" element={<Part3 />} />
            <Route path="/Part4" element={<Part4 />} />
            <Route path="/Part5" element={<Part5 />} />
            <Route path="/Part6" element={<Part6 />} />
            <Route path="/Part7" element={<Part7 />} />
   
          </>
    
      </Routes>
 <Footer/>
    
    </Router>
  );
};

export default App;
