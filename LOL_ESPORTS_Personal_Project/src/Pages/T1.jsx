import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './T1.css'
import TeamPage from './TeamPage';
import T1_LOGO from "../assets/LCK_T1.png";
import T1_DORAN from '../assets/T1_DORAN.png';
import T1_ONER from '../assets/T1_ONER.png';
import T1_FAKER from '../assets/T1_FAKER.png';
import T1_PEYZ from '../assets/T1_PEYZ.png';
import T1_KERIA from '../assets/T1_KERIA.png';



const Roster = [
    { Logo: T1_DORAN},
    { Logo: T1_ONER},
    { Logo: T1_FAKER},
    { Logo: T1_PEYZ },
    { Logo: T1_KERIA}
];

const TeamDescript="T1 is a legendary League of Legends esports organization based in South Korea that competes in the LCK (League of Legends Champions Korea) and is widely considered one of the most successful teams in esports history. Since debuting in the LCK as SK Telecom T1, the team built a dynasty that includes numerous domestic titles and global triumphs, and it later rebranded to T1 while maintaining its competitive excellence. Led by legendary mid‑laner Lee “Faker” Sang‑hyeok, T1 has a legacy of success that includes multiple League of Legends World Championship titles and a reputation for disciplined play and elite individual talent. In 2025, T1 continued its historic performance by winning its third consecutive World Championship, becoming the first team in League of Legends history to achieve a three‑peat at the sport’s highest international level. Domestically, T1 consistently competes at the top of the LCK, contending for split championships and regularly qualifying for international events. The organization blends star power with strategic depth, making it a perennial favorite both in Korea and abroad. With a passionate global fanbase and a storied past, T1 continues to pursue greatness as a benchmark of competitive League of Legends excellence." 


function T1(){
    return (
        <div className="T1CLASS">
            <TeamPage Logo={T1_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default T1