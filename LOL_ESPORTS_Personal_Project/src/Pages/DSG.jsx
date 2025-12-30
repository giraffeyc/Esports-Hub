import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './DSG.css'
import TeamPage from './TeamPage';
import DSG_LOGO from "../assets/LCS_DSG.png";
import DSG_T from "../assets/DSG_CASTLE.png";
import DSG_J from "../assets/DSG_KRYRA.png";
import DSG_M from "../assets/DSG_CALLME.png";
import DSG_A from "../assets/DSG_SAJED.png";
import DSG_S from "../assets/DSG_LYONZ.png";

const Roster = [
    { Logo: DSG_T},
    { Logo: DSG_J},
    { Logo: DSG_M},
    { Logo: DSG_A},
    { Logo: DSG_S}
];

const TeamDescript="Disguised, also known as Disguised Toast’s esports organization, entered the professional League of Legends scene as part of its expansion into competitive gaming. Founded by popular content creator Disguised Toast, the organization quickly gained attention due to its strong branding and community-driven approach. Disguised competes in North American leagues with a focus on developing talent and creating an entertaining, fan-friendly team identity. While newer compared to legacy organizations, the team has shown ambition by investing in competitive rosters and experienced coaching staff. Disguised blends esports competition with content creation, helping bridge the gap between casual fans and competitive play. The organization continues to grow its presence within the League of Legends ecosystem as it builds toward long-term success."

function DSG(){
    return (
        <div className="DSGCLASS">
            <TeamPage Logo={DSG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default DSG