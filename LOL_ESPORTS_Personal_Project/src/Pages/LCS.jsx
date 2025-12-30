import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './LCS.css';
import TeamCard from './TeamCard';
import C9 from "../assets/LCS_C9.png";
import DIG from "../assets/LCS_DIG.png";
import DSG from "../assets/LCS_DSG.png";
import FLY from "../assets/LCS_FLY.png";
import LYON from "../assets/LCS_LYON.png";
import SEN from "../assets/LCS_SEN.png";
import SR from "../assets/LCS_SR.png";
import TL from "../assets/LCS_TL.png";
/* In React if onClick is undefined it crashes the page so remember to define it */

const LCSTeams1 = [
    { Logo: C9, Path: '/LCS_C9' },
    { Logo: DIG, Path: '/LCS_DIG' },
    { Logo: DSG, Path: '/LCS_DSG' },
    { Logo: FLY, Path: '/LCS_FLY' },
];

const LCSTeams2 = [
    { Logo: LYON, Path: '/LCS_LYON' },
    { Logo: SEN, Path: '/LCS_SEN' },
    { Logo: SR, Path: '/LCS_SR' },
    { Logo: TL, Path: '/LCS_TL' },
];


function LCS() {
    const navigate= useNavigate();
      const NavBarClick = async(event) => {
        event.preventDefault();
        const clickedText = event.target.textContent;  /* Lets us know which element was clicked and the text thats associated with it if none its empty string */
        if (clickedText === 'Home'){
          navigate('/');
        }
        else{
          const path = '/' + clickedText;                
          navigate(path);
        }
    }

    return (
    <div className="LCSPage">
        <div className="LCSBackground"></div>
        <div className="NavBar">
            <ul>
            
            <li>
                <a href="#" onClick={NavBarClick}>Home</a>
            </li>

            <li>
                <a href="#" onClick={NavBarClick}>LCK</a>
            </li>

            <li>
                <a href="#" onClick={NavBarClick}>LPL</a>
            </li>

            <li>
                <a href="#" onClick={NavBarClick}>LCS</a>
            </li>

            <li>
                <a href="#" onClick={NavBarClick}>LEC</a>
            </li>
            </ul>
        </div>
        <div className="LCSDescription">
            <h1>LCS (United States of America)</h1>
            <p>The League Championship Series (LCS) represents the heart of North American League of Legends and has been a cornerstone of the game’s global esports ecosystem. Built on a foundation of star power, storytelling, and passionate fan engagement, the LCS has produced iconic players, memorable rivalries, and era-defining teams that helped popularize League esports in the West. The league is known for its diverse playstyles, with teams often blending structured macro with creative picks and strategies to find their edge. Over time, the LCS has continually adapted—through format changes, talent development, and infrastructure improvements—to remain competitive and entertaining on the international stage. Today, it stands as a symbol of resilience, personality, and regional pride, serving as both a proving ground for new talent and a showcase of North America’s best League of Legends competition.</p>    
        </div>

        <h1 className="LCSTeams">TEAMS</h1>
        <div className="LCSTeams1">
            {LCSTeams1.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>
        
        <div className="LCSTeams2">
            {LCSTeams2.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>
    </div>
  )
}

export default LCS