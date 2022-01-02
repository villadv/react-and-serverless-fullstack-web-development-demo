import React, {useState, useEffect} from "react";
import { StyledGame, StyledScore, StyleTimer, StyledCharacter } from '../styled/Game';
import { Strong } from '../styled/Random';


export default function Game(){
    const [score, setScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScore((prevScore) => prevScore + 1);
            }, 1000);
        return () => {
            clearInterval(interval);
        };
            }, [score]);
    
 

    return (
        <StyledGame>
            <StyledScore>
                Score:<Strong>{score}</Strong>
            </StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyleTimer>Time: <Strong>00: 0000</Strong></StyleTimer>
        </StyledGame>
    );
}