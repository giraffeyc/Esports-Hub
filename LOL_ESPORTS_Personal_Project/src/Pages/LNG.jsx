import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './LNG.css'
import TeamPage from './TeamPage';
import LNG_LOGO from "../assets/LPL_LNG.png";
import LNG_SHEER from '../assets/LNG_SHEER.png';
import LNG_CROCO from '../assets/LNG_CROCO.png';
import LNG_BULLDOG from '../assets/LNG_BULLDOG.png';
import LNG_1XN from '../assets/LNG_1XN.png';
import LNG_MISSING from '../assets/LNG_MISSING.png';

const Roster = [
    { Logo: LNG_SHEER},
    { Logo: LNG_CROCO},
    { Logo: LNG_BULLDOG},
    { Logo: LNG_1XN },
    { Logo: LNG_MISSING}
];

const TeamDescript="LNG Esports is a professional League of Legends team based in China that competes in the LPL (League of Legends Pro League), one of the strongest leagues in the world. The organization was originally known as Snake Esports, a long-standing Chinese team that rebranded to LNG in 2019 after being acquired by the Li-Ning Group. Since the rebrand, LNG has steadily grown into a competitive force within the LPL, earning multiple playoff appearances and international qualifications. The team gained major recognition in 2021 after qualifying for the World Championship, marking a turning point in its competitive history. Known for its disciplined macro play and strong individual talent, LNG has consistently challenged top LPL teams. Over the years, the roster has featured standout players such as Tarzan, Scout, and Ale, helping elevate the team’s international profile. LNG continues to focus on long-term growth while aiming to compete for domestic titles and deeper international runs. Today, the team is viewed as a stable and respected contender within the highly competitive LPL ecosystem."

function LNG(){
    return (
        <div className="LNGCLASS">
            <TeamPage Logo={LNG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default LNG