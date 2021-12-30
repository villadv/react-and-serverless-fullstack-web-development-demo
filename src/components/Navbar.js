import React from 'react';
import { StyledNavbar, StyleNavBrand, StyleNavItems, StyledLink } from '../styled/Navbar';
import { Accent } from '../styled/Random';


export default function Navbar() {
    return (
        <StyledNavbar>
            <StyleNavBrand>
                <StyledLink to="/">
                    Learn.Build.<Accent>Type.</Accent>
                </StyledLink>
            </StyleNavBrand>
            <StyleNavItems>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><StyledLink to="/highScores">High Scores</StyledLink></li>
            </StyleNavItems>
        </StyledNavbar>
    )
}
