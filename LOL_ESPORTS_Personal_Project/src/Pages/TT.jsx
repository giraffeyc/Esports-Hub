import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './TT.css'
import TeamPage from './TeamPage';
import TT_LOGO from "../assets/LPL_TT.png";
import TT_KESHI from '../assets/TT_KESHI.png';
import TT_JUNHAO from '../assets/TT_JUNHAO.png';
import TT_HERU from '../assets/TT_HERU.png';
import TT_RYAN3 from '../assets/TT_RYAN3.png';
import TT_FEATHER from '../assets/TT_FEATHER.png';

const Roster = [
    { Logo: TT_KESHI},
    { Logo: TT_JUNHAO},
    { Logo: TT_HERU},
    { Logo: TT_RYAN3},
    { Logo: TT_FEATHER}
];

const TeamDescript="TT Gaming, also known as ThunderTalk Gaming, is a professional League of Legends team competing in the LPL. The organization entered the league in 2021 after acquiring the slot previously held by Dominus Esports. Since joining the LPL, TT has focused on building a competitive roster through a mix of emerging talent and experienced players. While the team has faced challenges against more established organizations, it has shown steady improvement across multiple seasons. TT Gaming is recognized for its emphasis on long-term development and willingness to give opportunities to younger players. As the organization continues to grow, it aims to establish itself as a consistent playoff contender in China’s highly competitive league."

function TT(){
    return (
        <div className="TTCLASS">
            <TeamPage Logo={TT_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default TT