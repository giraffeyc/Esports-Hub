import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './KC.css'
import TeamPage from './TeamPage';
import KC_LOGO from "../assets/LEC_KC.png";
import KC_T from "../assets/KC_CANNA.png";
import KC_J from "../assets/KC_YIKE.png";
import KC_M from "../assets/KC_KYEAHOO.png";
import KC_A from "../assets/KC_CALISTE.png";
import KC_S from "../assets/KC_BUSIO.png";

const Roster = [
    { Logo: KC_T},
    { Logo: KC_J},
    { Logo: KC_M},
    { Logo: KC_A},
    { Logo: KC_S}
];

const TeamDescript="Karmine Corp is one of the most popular and passionate esports organizations in Europe, competing in the LEC after earning promotion through its success in the European regional leagues. Founded by French content creators Kameto and Prime, KCorp quickly built one of the largest and most dedicated fanbases in esports. Before entering the LEC, the team dominated the LFL (French League), winning multiple championships and proving itself as a top-tier organization. Karmine Corp is known for its high-energy fan culture, strong branding, and emotionally driven playstyle. The team focuses on developing young talent while maintaining strong competitive ambition. Since joining the LEC, KCorp has aimed to establish itself as a long-term contender and a major force in European League of Legends."

function KC(){
    return (
        <div className="KCCLASS">
            <TeamPage Logo={KC_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default KC