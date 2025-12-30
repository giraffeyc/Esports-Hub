import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './EDG.css'
import TeamPage from './TeamPage';
import EDG_LOGO from "../assets/LPL_EDG.png";
import EDG_ZDZ from '../assets/EDG_ZDZ.png';
import EDG_XIAOHAO from '../assets/EDG_XIAOHAO.png';
import EDG_ANGEL from '../assets/EDG_ANGEL.png';
import EDG_LEAVE from '../assets/EDG_LEAVE.png';
import EDG_PARUKIA from '../assets/EDG_PARUKIA.png';

const Roster = [
    { Logo: EDG_ZDZ},
    { Logo: EDG_XIAOHAO},
    { Logo: EDG_ANGEL},
    { Logo: EDG_LEAVE },
    { Logo: EDG_PARUKIA}
];

const TeamDescript="EDward Gaming is one of the most successful and historic League of Legends teams in China, competing in the LPL since the league’s early years. Founded in 2013, EDG quickly established itself as a dominant force by winning multiple domestic championships throughout the mid-2010s. The organization became known for consistent excellence, strong macro play, and long-term roster stability. EDG frequently represented China at international events, often reaching deep stages of global tournaments. The pinnacle of the team’s success came in 2021, when EDward Gaming won the League of Legends World Championship, earning China another world title. This victory cemented EDG’s legacy as one of the greatest teams in League of Legends history. Even after roster changes, EDG remains a respected and competitive organization, continuing to develop talent and compete at the highest level of the LPL."

function EDG(){
    return (
        <div className="EDGCLASS">
            <TeamPage Logo={EDG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default EDG