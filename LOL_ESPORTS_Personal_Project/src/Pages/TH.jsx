import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './TH.css'
import TeamPage from './TeamPage';
import TH_LOGO from "../assets/LEC_TH.png";
import TH_T from "../assets/TH_T.png";
import TH_J from "../assets/TH_J.png";
import TH_M from "../assets/TH_M.png";
import TH_A from "../assets/TH_A.png";
import TH_S from "../assets/TH_S.png";

const Roster = [
    { Logo: TH_T},
    { Logo: TH_J}, 
    { Logo: TH_M},
    { Logo: TH_A},
    { Logo: TH_S}
];

const TeamDescript="Team Heretics is a European esports organization based in Spain that competes in the LEC after earning its spot through consistent regional success. Founded by popular content creators and former players, the team quickly built a massive fanbase and strong brand identity. Heretics is known for blending entertainment, community engagement, and competitive ambition. Since entering the LEC, the team has focused on developing young talent while also signing experienced players to guide its rosters. Their playstyle often emphasizes teamwork and adaptability, allowing them to challenge more established teams. Team Heretics continues to grow as both a competitive organization and a major cultural presence within European esports."

function TH(){
    return (
        <div className="THCLASS">
            <TeamPage Logo={TH_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default TH