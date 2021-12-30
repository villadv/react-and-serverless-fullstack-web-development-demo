import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import HighScores from "./pages/HighScores";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import { Global } from './styled/Global';


function App() {
  return (
    <Router>
      <Global />
      <Main>   
      <Container>
      <Navbar />
      <Routes>
        <Route path="/Game" element={<Game />} />
        <Route path="/HighScores" element={<HighScores />} />
        <Route path="/GameOver" element={<GameOver />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Container>
      </Main>
    </Router>
  );
}

export default App;
