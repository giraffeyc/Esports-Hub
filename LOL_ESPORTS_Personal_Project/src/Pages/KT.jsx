import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './KT.css'
import TeamPage from './TeamPage';
import KT_LOGO from "../assets/LCK_KT.png";
import KT_PERFECT from '../assets/KT_PERFECT.png';
import KT_CUZZ from '../assets/KT_CUZZ.png';
import KT_BDD from '../assets/KT_BDD.png';
import KT_AIMING from '../assets/KT_AIMING.png';
import KT_GHOST from '../assets/KT_GHOST.png';


const Roster = [
    { Logo: KT_PERFECT},
    { Logo: KT_CUZZ},
    { Logo: KT_BDD},
    { Logo: KT_AIMING },
    { Logo: KT_GHOST}
];

const TeamDescript="KT Rolster is one of the longest‑standing esports organizations in South Korea, fielding a League of Legends team in the LCK (League of Legends Champions Korea) with deep roots dating back to the early competitive era. The organization originally formed in 1999 and added a League of Legends division in 2012, quickly becoming a staple of Korean esports. Over the years, KT Rolster has been known for its participation in domestic league play and international events, including multiple appearances at the League of Legends World Championship. The team has earned respect for its competitive history, including a LCK championship in 2018 and strong performances against top LCK clubs. In the 2025 season, KT Rolster made a major run by upsetting powerhouse teams in the LCK playoffs and qualifying for the World Championship, ultimately reaching the finals in an all‑Korean grand final. KT’s legacy is tied to its perseverance on the Rift and its role in the historic “telecom war” rivalry with T1, which continues to be a defining narrative in Korean League history. The organization strives to blend veteran leadership with up‑and‑coming talent as it works toward future domestic and global titles." 


function KT(){
    return (
        <div className="KTCLASS">
            <TeamPage Logo={KT_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default KT