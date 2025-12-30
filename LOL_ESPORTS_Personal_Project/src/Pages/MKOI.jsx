import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './MKOI.css'
import TeamPage from './TeamPage';
import MKOI_LOGO from "../assets/LEC_MKOI.png";
import MKOI_T from "../assets/MKOI_MYRWN.png";
import MKOI_J from "../assets/MKOI_ELOYOYA.png";
import MKOI_M from "../assets/MKOI_JOJO.png";
import MKOI_A from "../assets/MKOI_SUPA.png";
import MKOI_S from "../assets/MKOI_ALVARO.png";

const Roster = [
    { Logo: MKOI_T},
    { Logo: MKOI_J},
    { Logo: MKOI_M},
    { Logo: MKOI_A},
    { Logo: MKOI_S}
];

const TeamDescript="Movistar KOI is a European League of Legends esports organization that competes in the LEC, representing a partnership between Spanish esports brands KOI and Movistar Riders. The team was formed through the merger of KOI and MAD Lions, combining strong fanbases and competitive histories into one organization. MKOI entered the LEC with the goal of becoming a long-term contender built around Spanish and European talent. The organization emphasizes strong branding, community engagement, and a modern approach to esports development. Throughout its early seasons, MKOI has focused on building cohesive rosters capable of competing with Europe’s top teams. The organization is known for its passionate fanbase and strong online presence, especially within the Spanish esports scene. With continued investment and structural stability, MKOI aims to establish itself as a consistent playoff contender in the LEC."

function MKOI(){
    return (
        <div className="MKOICLASS">
            <TeamPage Logo={MKOI_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default MKOI