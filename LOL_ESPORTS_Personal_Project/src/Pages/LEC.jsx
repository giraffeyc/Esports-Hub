import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './LEC.css';
import TeamCard from './TeamCard';
import FNC from '../assets/LEC_FNC.png';
import G2 from '../assets/LEC_G2.png';
import GX from '../assets/LEC_GX.png';
import KC from '../assets/LEC_KC.png';
import KCB from '../assets/LEC_KCB.png';
import LR from '../assets/LEC_LR.png';
import MKOI from '../assets/LEC_MKOI.png';
import NAVI from '../assets/LEC_NAVI.png';
import SK from '../assets/LEC_SK.png';
import SRS from '../assets/LEC_SRS.png';
import TH from '../assets/LEC_TH.png';
import VIT from '../assets/LEC_VIT.png';
/* In React if onClick is undefined it crashes the page so remember to define it */

const LECTeams1 = [
    {Logo: FNC, Path:'/LEC_FNC'},
    {Logo: G2, Path:'/LEC_G2'},
    {Logo: GX, Path:'/LEC_GX'},
    {Logo: KC, Path:'/LEC_KC'}
];

const LECTeams2= [
    {Logo: KCB, Path:'/LEC_KCB'},
    {Logo: LR, Path:'/LEC_LR'},
    {Logo: MKOI, Path:'/LEC_MKOI'},
    {Logo: NAVI, Path:'/LEC_NAVI'}
]

const LECTeams3= [
    {Logo: SK, Path:'/LEC_SK'},
    {Logo: SRS, Path:'/LEC_SRS'},
    {Logo: TH, Path:'/LEC_TH'},
    {Logo: VIT, Path:'/LEC_VIT'}
]

function LEC() {
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
    <div className="LECPage">
        <div className="LECBackground"></div>
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
        <div className="LECDescription">
            <h1>LEC (Germany)</h1>
            <p>The League of Legends EMEA Championship (LEC) is celebrated for its creativity, bold drafting, and playful yet fiercely competitive spirit. Teams from this region are known for experimenting with unconventional picks, flexible roles, and diverse macro approaches, often pushing the boundaries of the evolving meta. The LEC has produced some of the most charismatic players and storied rivalries in League of Legends esports, helping to build a passionate and deeply engaged fanbase. Its broadcast style, rich with personality, humor, and high production value, has become a defining trait that sets the league apart. Today, the LEC stands as a hub of innovation, entertainment, and high-level competition, showcasing a mix of strategic depth and stylistic flair that keeps it at the forefront of the global League of Legends scene.</p>    
        </div>

        <h1 className="LECTeams">TEAMS</h1>

        <div className="LECTeams1">
            {LECTeams1.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>

        <div className="LECTeams2">
            {LECTeams2.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>

        <div className="LECTeams3">
            {LECTeams3.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>
    </div>
  )
}

export default LEC