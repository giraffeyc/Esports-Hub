import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './AL.css'
import TeamPage from './TeamPage';
import AL_LOGO from "../assets/LPL_AL.png";
import AL_FLANDRE from '../assets/AL_FLANDRE.png';
import AL_TARZAN from '../assets/AL_TARZAN.png';
import AL_SHANKS from '../assets/AL_SHANKS.png';
import AL_HOPE from '../assets/AL_HOPE.png';
import AL_KAEL from '../assets/AL_KAEL.png';

const Roster = [
    { Logo: AL_FLANDRE},
    { Logo: AL_TARZAN},
    { Logo: AL_SHANKS},
    { Logo: AL_HOPE },
    { Logo: AL_KAEL}
];

const TeamDescript="Anyone’s Legend is a professional League of Legends esports team from China that competes in the LPL (League of Legends Pro League), the top-tier league in the region. The organization was originally founded as Rogue Warriors in 2017 before rebranding to Anyone’s Legend in 2022 as part of a new organizational direction. During its early years, the team struggled to consistently place near the top of the LPL but gained experience competing against some of the strongest teams in the world. After the rebrand, Anyone’s Legend focused on rebuilding its roster and developing young talent to become more competitive. The team has shown steady improvement through regular-season performances and playoff appearances. Known for a developing playstyle and long-term growth mindset, AL continues to refine its identity within the LPL. While still chasing its first major international title, the organization aims to establish itself as a stable and respected contender in China’s highly competitive League of Legends scene."

function AL(){
    return (
        <div className="ALCLASS">
            <TeamPage Logo={AL_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default AL