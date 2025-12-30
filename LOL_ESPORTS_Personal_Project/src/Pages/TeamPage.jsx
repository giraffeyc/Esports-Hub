import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './TeamPage.css';
import PlayerCard from './PlayerCard';
import TeamCard from "./TeamCard";

function TeamPage({Logo, Description, Players, Path}){
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
        <div className="TeamPageBackground">
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
            <div className="TeamLogo">
                <TeamCard Logo={Logo} Path={Path}/>
            </div>
            
            <div className="DescriptionDetails">
                <h1>TEAM BIO</h1>
                <p>{Description}</p>
            </div>
            

            <div className="Roster">
                {Players.map((entry)=>(
                    <PlayerCard key={entry.Logo} Logo={entry.Logo}/>
                ))}
            </div>

        </div>
    )
}
export default TeamPage