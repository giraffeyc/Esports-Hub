import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './LCK.css';
import TeamCard from './TeamCard';
import BNKFearX from "../assets/LCK_BNK_FearX.png";
import BRO from "../assets/LCK_BRO.png";
import DNFreecs from "../assets/LCK_DN_FREECS.png";
import Dplus from "../assets/LCK_Dplus.png";
import DRX from "../assets/LCK_DRX.png";
import GENG from "../assets/LCK_GENG.png";
import HLE from "../assets/LCK_HLE.png";
import KT from "../assets/LCK_KT.png";
import NS from "../assets/LCK_NS.png";
import T1 from "../assets/LCK_T1.png";
/* In React if onClick is undefined it crashes the page so remember to define it */

const LCKTeams1 = [
    { Logo: BNKFearX, Path: '/LCK_BNK_FEARX'},
    { Logo: BRO, Path: '/LCK_BRO'},
    { Logo: DNFreecs, Path: '/LCK_DNF' },
    { Logo: Dplus, Path: '/LCK_DK' },
    { Logo: DRX, Path: '/LCK_DRX' }
];

const LCKTeams2 = [
    { Logo: GENG, Path: '/LCK_GENG' },
    { Logo: HLE, Path: '/LCK_HLE' },
    { Logo: KT, Path: '/LCK_KT' },
    { Logo: NS, Path: '/LCK_NS' },
    { Logo: T1, Path: '/LCK_T1' }
];

function LCK() {
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
    <div className="LCKPage">
        <div className="LCKBackground"></div>
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

        <div className="LCKDescription">
            <h1>LCK (South Korea)</h1>
            <p>The League of Legends Champions Korea (LCK) is widely regarded as one of the most successful and influential regions in the history of competitive League of Legends. Known for its disciplined macro play, precise team coordination, and deep understanding of the game, the LCK has consistently set the standard for high-level competition. Teams from this region have produced some of the most legendary players in esports history and have dominated international tournaments for years. The LCK’s structured approach to gameplay emphasizes strong fundamentals, intelligent decision-making, and calculated aggression. Its league system has fostered long-term rivalries and a culture of excellence that continues to shape the global meta. Even as other regions have grown stronger, the LCK remains a constant contender on the world stage. Today, it stands as a symbol of consistency, innovation, and competitive legacy within League of Legends esports.</p>    
        </div>

        <h1 className="LCKTeams">TEAMS</h1>

        <div className="LCKTeams1">
            {LCKTeams1.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>

        <div className="LCKTeams2">
            {LCKTeams2.map((entry)=>(
                <TeamCard key={entry.Logo} Logo={entry.Logo} Path={entry.Path}/>
            ))}
        </div>
    </div>
  )
}

export default LCK