import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './TL.css'
import TeamPage from './TeamPage';
import TL_LOGO from "../assets/LCS_TL.png";
import TL_T from "../assets/TL_MORGAN.png";
import TL_J from "../assets/TL_JOSE.png";
import TL_M from "../assets/TL_QUID.png";
import TL_A from "../assets/TL_YEON.png";
import TL_S from "../assets/TL_COREJJ.png";

const Roster = [
    { Logo: TL_T},
    { Logo: TL_J},
    { Logo: TL_M},
    { Logo: TL_A},
    { Logo: TL_S}
];

const TeamDescript="Team Liquid is one of the most successful and recognizable organizations in North American League of Legends history, competing in the LCS since its early years. The team has won multiple domestic championships and has consistently represented the region at international events such as the Mid-Season Invitational and the World Championship. Known for its strong infrastructure, elite training facilities, and high-profile rosters, Team Liquid has long set the standard for professionalism in esports. The organization has featured legendary players from around the world and continues to invest heavily in talent development. With a legacy built on consistency and ambition, Team Liquid remains one of the cornerstone organizations of competitive League of Legends."

function TL(){
    return (
        <div className="TLCLASS">
            <TeamPage Logo={TL_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default TL