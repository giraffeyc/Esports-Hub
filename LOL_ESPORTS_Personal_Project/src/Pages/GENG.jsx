import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './GENG.css'
import TeamPage from './TeamPage';
import GENG_LOGO from "../assets/LCK_GENG.png";
import GENG_KIIN from '../assets/GENG_KIIN.png';
import GENG_CANYON from '../assets/GENG_CANYON.png';
import GENG_CHOVY from '../assets/GENG_CHOVY.png';
import GENG_RULER from '../assets/GENG_RULER.png';
import GENG_DURO from '../assets/GENG_DURO.png';


const Roster = [
    { Logo: GENG_KIIN},
    { Logo: GENG_CANYON},
    { Logo: GENG_CHOVY},
    { Logo: GENG_RULER },
    { Logo: GENG_DURO}
];

const TeamDescript="Gen.G is a professional League of Legends esports organization based in South Korea that competes in the LCK, the country’s premier League of Legends league. The organization was formed in 2017 after Gen.G acquired the roster and league slot of Samsung Galaxy, a legendary team in Korean esports history. Through this acquisition, Gen.G inherited a championship legacy that includes multiple World Championship titles won under the Samsung Galaxy name. Since entering the LCK, Gen.G has established itself as one of the most consistently competitive teams in the league. The organization is known for its structured, methodical playstyle and emphasis on strategic discipline. Gen.G captured multiple LCK titles in recent years, cementing its position among Korea’s elite teams. The team has also been a regular representative of the LCK at international events such as the Mid-Season Invitational and the World Championship. With a strong organizational foundation and a history of sustained success, Gen.G continues to compete at the highest level of professional League of Legends."

function GENG(){
    return (
        <div className="GENGCLASS">
            <TeamPage Logo={GENG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default GENG