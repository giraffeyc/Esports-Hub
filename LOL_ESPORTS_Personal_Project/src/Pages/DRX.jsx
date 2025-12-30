import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './DRX.css'
import TeamPage from './TeamPage';
import DRX_LOGO from "../assets/LCK_DRX.png";
import DRX_RICH from '../assets/DRX_RICH.png';
import DRX_VINCENZO from '../assets/DRX_VINCENZO.png';
import DRX_UCAL from '../assets/DRX_UCAL.png';
import DRX_JIWOO from '../assets/DRX_JIWOO.png';
import DRX_ANDIL from '../assets/DRX_ANDIL.png';

const Roster = [
    { Logo: DRX_RICH},
    { Logo: DRX_VINCENZO},
    { Logo: DRX_UCAL},
    { Logo: DRX_JIWOO },
    { Logo: DRX_ANDIL}
];

const TeamDescript="DRX is a professional League of Legends esports team based in South Korea that competes in the LCK, the highest level of Korean League of Legends competition. The organization was originally founded in 2012 under the name Incredible Miracle, making it one of the oldest teams in Korean League of Legends history. Over the years, the team underwent several rebrands, most notably competing as Longzhu Gaming and later KING-ZONE DragonX. In 2020, the organization adopted the name DRX, marking a new era for the team. DRX has a history of developing standout talent, including players who later became stars on other top teams. The organization reached its greatest achievement in 2022 by winning the League of Legends World Championship, completing one of the most memorable underdog runs in esports history. Despite fluctuations in domestic performance, DRX remains a respected name within the LCK. Today, the team continues to focus on rebuilding and nurturing talent while competing against Korea’s strongest organizations."

function DRX(){
    return (
        <div className="DRXCLASS">
            <TeamPage Logo={DRX_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default DRX