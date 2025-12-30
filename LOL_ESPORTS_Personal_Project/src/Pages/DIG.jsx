import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './DIG.css'
import TeamPage from './TeamPage';
import DIG_LOGO from "../assets/LCS_DIG.png";
import DIG_T from "../assets/DIG_PHOTON.png";
import DIG_J from "../assets/DIG_EXYU.png";
import DIG_M from "../assets/DIG_PALAFOX.png";
import DIG_A from "../assets/DIG_FBI.png";
import DIG_S from "../assets/DIG_IGNAR.png";

const Roster = [
    { Logo: DIG_T},
    { Logo: DIG_J},
    { Logo: DIG_M},
    { Logo: DIG_A},
    { Logo: DIG_S}
];

const TeamDescript="Dignitas is a long-standing North American esports organization with a rich history in League of Legends. Originally founded in 2003, the team became one of the early pillars of competitive League play in North America. Dignitas has gone through multiple rebrands and roster rebuilds while maintaining its presence in the LCS ecosystem. Known for its focus on player development and rebuilding phases, the organization has often served as a platform for rising talent. Over the years, Dignitas has featured many notable players and has made several playoff appearances. Although championships have been limited, the team continues to focus on long-term growth and competitiveness. Dignitas remains a respected name in the North American scene with a legacy rooted in perseverance and adaptation."

function DIG(){
    return (
        <div className="DIGCLASS">
            <TeamPage Logo={DIG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default DIG