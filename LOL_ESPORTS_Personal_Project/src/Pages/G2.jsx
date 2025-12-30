import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './G2.css'
import TeamPage from './TeamPage';
import G2_LOGO from "../assets/LEC_G2.png";
import G2_T from "../assets/G2_BB.png";
import G2_J from "../assets/G2_SKEWMOND.png";
import G2_M from "../assets/G2_CAPS.png";
import G2_A from "../assets/G2_HANSSAMA.png";
import G2_S from "../assets/G2_LABROV.png";

const Roster = [
    { Logo: G2_T},
    { Logo: G2_J},
    { Logo: G2_M},
    { Logo: G2_A},
    { Logo: G2_S}
];

const TeamDescript="G2 Esports is one of the most successful and recognizable organizations in League of Legends history, competing in the LEC since joining the league in 2016. Founded by former pro player Carlos “ocelote” Rodríguez, G2 quickly rose to dominance, winning multiple LEC championships in consecutive seasons. The team became internationally famous for its creative playstyle, flexibility, and strong individual talent. G2 reached its competitive peak in 2019, winning both LEC splits, the Mid-Season Invitational, and finishing as runner-up at the World Championship. The organization has been home to legendary players such as Caps, Perkz, Jankos, and Mikyx. Known for its aggressive drafting and fearless approach, G2 consistently challenges the global elite. Today, G2 remains one of Europe’s most successful and influential teams, blending entertainment with elite competitive performance."

function G2(){
    return (
        <div className="G2CLASS">
            <TeamPage Logo={G2_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default G2