import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './OMG.css'
import TeamPage from './TeamPage';
import OMG_LOGO from "../assets/LPL_OMG.png";
import OMG_HERY from '../assets/OMG_HERY.png';
import OMG_RE0 from '../assets/OMG_RE0.png';
import OMG_HAICHAO from '../assets/OMG_HAICHAO.png';
import OMG_STARRY from '../assets/OMG_STARRY.png';
import OMG_MOHAM from '../assets/OMG_MOHAM.png';

const Roster = [
    { Logo: OMG_HERY},
    { Logo: OMG_RE0},
    { Logo: OMG_HAICHAO},
    { Logo: OMG_STARRY },
    { Logo: OMG_MOHAM}
];

const TeamDescript="Oh My God (OMG) is a professional League of Legends esports team based in China that competes in the LPL (League of Legends Pro League). Founded in 2012, OMG is one of the oldest and most recognizable organizations in Chinese League of Legends history. The team gained international attention during the early years of the LPL, especially for its strong performances at global events such as the 2014 World Championship. Over the years, OMG has gone through multiple roster rebuilds as the competitive landscape of the LPL evolved. Despite periods of inconsistency, the organization has remained committed to developing domestic talent and staying competitive within the league. Known for its aggressive playstyle and passionate fanbase, OMG has maintained a strong identity throughout its long history. The team continues to strive toward returning to top-tier contention in one of the world’s most competitive regions."

function OMG(){
    return (
        <div className="OMGCLASS">
            <TeamPage Logo={OMG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default OMG