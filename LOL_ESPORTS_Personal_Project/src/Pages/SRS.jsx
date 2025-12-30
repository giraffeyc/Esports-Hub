import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './SRS.css'
import TeamPage from './TeamPage';
import SRS_LOGO from "../assets/LEC_SRS.png";
import SRS_T from "../assets/SRS_T.png";
import SRS_J from "../assets/SRS_J.png";
import SRS_M from "../assets/SRS_M.png";
import SRS_A from "../assets/SRS_A.png";
import SRS_S from "../assets/SRS_S.png";

const Roster = [
    { Logo: SRS_T},
    { Logo: SRS_J}, 
    { Logo: SRS_M},
    { Logo: SRS_A},
    { Logo: SRS_S}
];

const TeamDescript="Shifters is a developing European esports organization that has competed primarily in regional leagues and lower-tier competitive circuits. The team focuses on cultivating rising talent and providing players with opportunities to grow in a professional environment. Although not yet established at the top tier of competition, Shifters has gained recognition for its dedication to structured improvement and player development. The organization serves as a stepping stone for emerging talent aiming to reach higher levels of professional play. Through consistent participation and growth, Shifters continues to build its identity within the European esports ecosystem."

function SRS(){
    return (
        <div className="SRSCLASS">
            <TeamPage Logo={SRS_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default SRS