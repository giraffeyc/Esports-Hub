import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './BRO.css'
import TeamPage from './TeamPage';
import BRO_LOGO from "../assets/LCK_BRO.png";
import BRO_CASTING from '../assets/BRO_CASTING.png';
import BRO_GIDEON from '../assets/BRO_GIDEON.png';
import BRO_FISHER from '../assets/BRO_FISHER.png';
import BRO_TEDDY from '../assets/BRO_TEDDY.png';
import BRO_NAMGUNG from '../assets/BRO_NAMGUNG.png';

const Roster = [
    { Logo: BRO_CASTING},
    { Logo: BRO_GIDEON},
    { Logo: BRO_FISHER},
    { Logo: BRO_TEDDY },
    { Logo: BRO_NAMGUNG}
];

const TeamDescript="OKSavingsBank BRION is a South Korean League of Legends esports team competing in the LCK, Korea’s premier professional league. The organization has a long history in Korean esports, originally competing under names such as Brion Blade and hyFresh Blade. In 2021, the team entered the LCK under the name Fredit BRION, marking its arrival at the top level of competition. The organization later rebranded to OKSavingsBank BRION after securing sponsorship from OK Savings Bank. Throughout its time in the LCK, the team has often taken on an underdog role. BRION is known for emphasizing team culture and gradual roster development over immediate success. Despite frequent challenges, the team has achieved notable upset victories against stronger opponents. OKSavingsBank BRION continues to compete with a focus on growth, perseverance, and long-term improvement."

function BRO(){
    return (
        <div className="BROCLASS">
            <TeamPage Logo={BRO_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default BRO