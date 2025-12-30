import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './IG.css'
import TeamPage from './TeamPage';
import IG_LOGO from "../assets/LPL_IG.png";
import IG_SOBORO from '../assets/IG_SOBORO.png';
import IG_WEI from '../assets/IG_WEI.png';
import IG_ROOKIE from '../assets/IG_ROOKIE.png';
import IG_PHOTIC from '../assets/IG_PHOTIC.png';
import IG_MEIKO from '../assets/IG_MEIKO.png';

const Roster = [
    { Logo: IG_SOBORO},
    { Logo: IG_WEI},
    { Logo: IG_ROOKIE},
    { Logo: IG_PHOTIC },
    { Logo: IG_MEIKO}
];

const TeamDescript="Invictus Gaming is a legendary Chinese League of Legends esports organization that competes in the LPL and has played a major role in the region’s global success. Founded in 2011, IG was one of China’s earliest professional League of Legends teams and helped shape the competitive scene. For many years, the team was known for its mechanically gifted players and aggressive playstyle. In 2018, Invictus Gaming reached the peak of its success by winning the League of Legends World Championship, becoming the first Chinese team to ever claim the title. That victory marked a turning point for the LPL’s reputation on the international stage. After their championship run, IG experienced roster changes and mixed results domestically. Despite ups and downs, Invictus Gaming remains one of the most iconic organizations in League of Legends history, with a lasting legacy in both China and global esports."

function IG(){
    return (
        <div className="IGCLASS">
            <TeamPage Logo={IG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default IG