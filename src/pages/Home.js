import React from "react";
import CTA from "../styled/CTA";
import { Accent, StyleTitled } from "../styled/Random";

export default function Home(){
    return (
        <div>
            <StyleTitled>Ready to Type?</StyleTitled>
            <CTA to="/game">Click or type <Accent>'s</Accent> to start playing!</CTA>
        </div>
    );
}