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
import NFLScores from './Components/NFLScores';
import NHLScores from './Components/NHLScores';
import MLBScores from './Components/MLBScores';
import NBAScores from './Components/NBAScores';

function App() {
  return (
    <div className='App'>
      <Router>
      <div className='display'>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/bears" element={<>
                <NFLScores />
                <BearsBlog />
              </>} />
            <Route exact path="/blackhawks" element={<>
                <NHLScores />
                <BlackhawksBlog />
              </>} />
              <Route exact path="/bulls" element={<>
                <NBAScores />
                <BullsBlog />
              </>} />
              <Route exact path="/whitesox" element={<>
                <MLBScores />
                <WhiteSoxBlog />
              </>} />
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
