import React from "react";
import { StyledGame, StyledScore, StyleTimer, StyledCharacter } from '../styled/Game';
import { Strong } from '../styled/Random';

export default function Game(){
    return (
        <StyledGame>
            <StyledScore>Score:0</StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyleTimer>Time: <Strong>00: 0000</Strong></StyleTimer>
        </StyledGame>
    );
}