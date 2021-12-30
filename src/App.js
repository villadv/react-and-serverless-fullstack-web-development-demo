import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import HighScores from "./pages/HighScores";
import Home from "./pages/Home";
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/Game" component={Game} />
        <Route path="/HighScores" component={HighScores} />
        <Route path="/GameOver" component={GameOver} />
        <Route path="/" component={Home} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
