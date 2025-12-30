import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './SK.css'
import TeamPage from './TeamPage';
import SK_LOGO from "../assets/LEC_SK.png";
import SK_T from "../assets/SK_T.png";
import SK_J from "../assets/SK_J.png";
import SK_M from "../assets/SK_M.png";
import SK_A from "../assets/SK_A.png";
import SK_S from "../assets/SK_S.png";

const Roster = [
    { Logo: SK_T},
    { Logo: SK_J}, 
    { Logo: SK_M},
    { Logo: SK_A},
    { Logo: SK_S}
];

const TeamDescript="SK Gaming is one of the oldest and most established esports organizations in the world, with roots dating back to 1997. Based in Germany, SK has been a long-standing competitor in European League of Legends, participating in multiple eras of the professional scene. The team has a reputation for consistency, professionalism, and developing emerging talent. Over the years, SK Gaming has experienced both high points and rebuilding phases, but it remains a staple of the European competitive ecosystem. The organization focuses on long-term development and structured team growth. With decades of esports history behind it, SK Gaming continues to be a respected name in the LEC."

function SK(){
    return (
        <div className="SKCLASS">
            <TeamPage Logo={SK_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default SK