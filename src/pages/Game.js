import React, {useState, useEffect, useCallback} from 'react';
import { StyledGame, StyledScore, StyleTimer, StyledCharacter } from '../styled/Game';
import { Strong } from '../styled/Random';
import { useNavigate } from 'react-router-dom';
import { useScore } from '../contexts/ScoreContext';

export default function Game({history}){
    const MAX_SECONDS = 5;
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const [currentCharacter, setCurrentCharacter] = useState('');
    const [score, setScore] = useScore();
    const [ms, setMs] = useState(0);
    const [seconds, setSeconds] = useState(MAX_SECONDS);

    useEffect(() => {
        setRandomCharacter();
        setScore(0);
        const currentTime = new Date();
        const interval = setInterval(() => updateTime(currentTime), 1);
            return () => clearInterval(interval);
        }, []);
    
    const setRandomCharacter = () => {
        const randomInt = Math.floor(Math.random() * 36);
        setCurrentCharacter(characters[randomInt]);
    }

    const updateTime = (startTime) => {
        const endTime = new Date();
        const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
        const formattedMSString = ('0000' + msPassedStr).slice(-5);

        const updatedSeconds = MAX_SECONDS - parseInt(formattedMSString.substring(0,2)) - 1;
        const updateMs = 1000 - parseInt(formattedMSString.substring(formattedMSString.length - 3));
        
        setSeconds(addLeadingZeros(updatedSeconds, 2));
        setMs(addLeadingZeros(updateMs, 3));
    }
    
    const addLeadingZeros = (num, length) => {
        let zeros = '';
        for(let i = 0; i < length; i++){
            zeros += "0";
        }
        return (zeros + num).slice(-length);
    }


    const navigate = useNavigate()
        if (seconds <= -1){
            navigate('/GameOver');
        };

    const keyUpHandler = useCallback((e) => {
        console.log(e.key);
        if(e.key === currentCharacter){
            setScore((prevScore) => prevScore + 1);
        } else {
            if(score > 0 ){
                setScore((prevScore) => prevScore -1);
            }
        }
        setRandomCharacter();
        }, [currentCharacter]);    
    

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);
        return () => {
            document.removeEventListener('keyup', keyUpHandler);
        }
    }, [keyUpHandler]);


    return (
        <StyledGame>
            <StyledScore>
                Score:<Strong>{score}</Strong>
            </StyledScore>
            <StyledCharacter>{currentCharacter}</StyledCharacter>
            <StyleTimer>Time: <Strong>{seconds}: {ms}</Strong></StyleTimer>
        </StyledGame>
    );
}