import React from "react";
import { useScore } from "../contexts/ScoreContext";
import { Navigate } from 'react-router-dom';
import { StyledLink } from "../styled/Navbar";



export default function GameOver(){
    const [score] = useScore();

    if (score === -1){
       return <Navigate to='/' />
    }  else if (score >= 0){
        return (
            <div>
                    <h1>Game Over</h1>
                    <p>{score}</p>
                    <StyledLink to="/">Go Home</StyledLink>
                    <StyledLink to="/game">Play Again?</StyledLink>         
            </div> 
        );
    }
} 