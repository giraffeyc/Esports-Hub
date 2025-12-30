import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './VIT.css'
import TeamPage from './TeamPage';
import VIT_LOGO from "../assets/LEC_VIT.png";
import VIT_T from "../assets/VIT_T.png";
import VIT_J from "../assets/VIT_J.png";
import VIT_M from "../assets/VIT_M.png";
import VIT_A from "../assets/VIT_A.png";
import VIT_S from "../assets/VIT_S.png";

const Roster = [
    { Logo: VIT_T},
    { Logo: VIT_J}, 
    { Logo: VIT_M},
    { Logo: VIT_A},
    { Logo: VIT_S}
];

const TeamDescript="Team Vitality is a prominent European esports organization based in France, competing in the LEC with a strong emphasis on high-level performance and brand excellence. Founded in 2013, the team has grown into one of the most recognizable names in European esports. Vitality has fielded numerous star-studded rosters and is known for its aggressive playstyle and ambitious roster construction. The organization frequently invests in top-tier talent to compete for LEC titles and international success. With strong infrastructure and a global fanbase, Team Vitality continues to be a major contender in the European League of Legends scene."

function VIT(){
    return (
        <div className="VITCLASS">
            <TeamPage Logo={VIT_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default VIT