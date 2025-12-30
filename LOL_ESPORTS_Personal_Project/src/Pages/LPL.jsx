import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './LPL.css';
import TeamCard from './TeamCard';
import AL from "../assets/LPL_AL.png";
import BLG from "../assets/LPL_BLG.png";
import EDG from "../assets/LPL_EDG.png";
import IG from "../assets/LPL_IG.png";
import JDG from "../assets/LPL_JDG.png";
import LGD from "../assets/LPL_LGD.png";
import LNG from "../assets/LPL_LNG.png";
import NIP from "../assets/LPL_NIP.png";
import OMG from "../assets/LPL_OMG.png";
import TES from "../assets/LPL_TES.png";
import TT from "../assets/LPL_TT.png";
import UP from "../assets/LPL_UP.png";
import WBG from "../assets/LPL_WBG.png";
import WE from "../assets/LPL_WE.png";
/* In React if onClick is undefined it crashes the page so remember to define it */

const LPLTeams1 = [
    { Logo: AL, Path: '/LPL_AL' },
    { Logo: BLG, Path: '/LPL_BLG' },
    { Logo: EDG, Path: '/LPL_EDG' },
    { Logo: IG, Path: '/LPL_IG' },
    { Logo: JDG, Path: '/LPL_JDG' }
];

const LPLTeams2 = [
    { Logo: LGD, Path: '/LPL_LGD' },
    { Logo: LNG, Path: '/LPL_LNG' },
    { Logo: NIP, Path: '/LPL_NIP' },
    { Logo: OMG, Path: '/LPL_OMG' },
    { Logo: TES, Path: '/LPL_TES' }
];

const LPLTeams3 = [
    { Logo: TT, Path: '/LPL_TT' },
    { Logo: UP, Path: '/LPL_UP' },
    { Logo: WBG, Path: '/LPL_WBG' },
    { Logo: WE, Path: '/LPL_WE' }
];


function LPL() {
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
    <div className="LPLPage">
        <div className="LPLBackground"></div>
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

        <div className="LPLDescription">
            <h1>LPL (China)</h1>
            <p>The League of Legends Pro League (LPL) is renowned for its explosive, high-tempo style and has become one of the most dynamic regions in competitive League of Legends. Built on relentless aggression, creative drafting, and fearless skirmishing, the LPL often pushes the pace of the game and tests the limits of what is strategically possible on the Rift. Teams from this region are known for producing mechanically gifted players who thrive in chaotic teamfights and clutch moments on the international stage. Over the years, the LPL’s willingness to innovate, take risks, and challenge conventional macro play has shaped global strategies and forced other regions to adapt. Supported by a massive fanbase and a deep talent pool, the LPL stands today as a powerhouse of creativity, intensity, and championship-caliber competition within League of Legends esports.</p>    
        </div>

        <h1 className="LPLTeams">TEAMS</h1>

        <div className="LPLTeams1">
            {LPLTeams1.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>

        <div className="LPLTeams2">
            {LPLTeams2.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>

        <div className="LPLTeams3">
            {LPLTeams3.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>
    </div>
  )
}

export default LPL