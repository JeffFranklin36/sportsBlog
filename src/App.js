//Libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Styles
import './App.css';

//Components
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import BearsBlog from './Components/BearsBlog';
import BlackhawksBlog from './Components/BlackhawksBlog';
import BullsBlog from './Components/BullsBlog';
import WhiteSoxBlog from './Components/WhiteSoxBlog';

function App() {
  return (
    <div className='App'>
      <Router>
      <div className='display'>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/bears" element={<BearsBlog/>}/>
            <Route exact path="/blackhawks" element={<BlackhawksBlog/>}/>
            <Route exact path="/bulls" element={<BullsBlog/>}/>
            <Route exact path="/whitesox" element={<WhiteSoxBlog/>}/>
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
