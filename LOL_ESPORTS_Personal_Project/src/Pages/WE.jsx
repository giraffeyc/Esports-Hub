import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './WE.css'
import TeamPage from './TeamPage';
import WE_LOGO from "../assets/LPL_WE.png";
import WE_CUBE from '../assets/WE_CUBE.png';
import WE_MONKI from '../assets/WE_MONKI.png';
import WE_KARIS from '../assets/WE_KARIS.png';
import WE_ABOUT from '../assets/WE_ABOUT.png';
import WE_YAOYAO from '../assets/WE_YAOYAO.png';

const Roster = [
    { Logo: WE_CUBE},
    { Logo: WE_MONKI},
    { Logo: WE_KARIS},
    { Logo: WE_ABOUT},
    { Logo: WE_YAOYAO}
];

const TeamDescript="Team WE is one of the most historic and respected organizations in Chinese League of Legends, competing in the LPL since the earliest days of professional play. Founded in 2011, Team WE was one of China’s first internationally successful teams, representing the region at early global tournaments and helping establish China as a major esports power. The organization built its legacy around strong teamwork, discipline, and long-term player development. Over the years, Team WE has experienced both dominant periods and rebuilding phases as the competitive scene evolved. Despite ups and downs, the team has remained a staple of the LPL, frequently developing young talent and fostering growth within the region. Known for its loyal fanbase and historical significance, Team WE continues to pursue a return to the top of Chinese League of Legends."

function WE(){
    return (
        <div className="WECLASS">
            <TeamPage Logo={WE_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default WE