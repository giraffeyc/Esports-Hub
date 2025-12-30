import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './TES.css'
import TeamPage from './TeamPage';
import TES_LOGO from "../assets/LPL_TES.png";
import TES_369 from '../assets/TES_369.png';
import TES_NAIYOU from '../assets/TES_NAIYOU.png';
import TES_CREME from '../assets/TES_CREME.png';
import TES_JACKEYLOVE from '../assets/TES_JACKEYLOVE.png';
import TES_HANG from '../assets/TES_HANG.png';

const Roster = [
    { Logo: TES_369},
    { Logo: TES_NAIYOU},
    { Logo: TES_CREME},
    { Logo: TES_JACKEYLOVE },
    { Logo: TES_HANG}
];

const TeamDescript="Top Esports, commonly known as TES, is a Chinese League of Legends esports team competing in the LPL, where it has grown into one of the region’s most competitive organizations. Founded in 2017, the team quickly rose through the ranks after acquiring top-tier talent and building a strong competitive identity. TES made a major breakthrough in 2020, winning the LPL Summer Split and reaching the semifinals of the World Championship. The team is known for its aggressive playstyle, strong mechanical skill, and emphasis on individual lane dominance. Over the years, TES has featured several elite players who helped establish the organization as a perennial title contender. Despite facing tough competition in the LPL, the team has consistently remained near the top of the standings. TES is also recognized for its passionate fanbase and intense rivalries with other top Chinese teams. As one of the LPL’s flagship organizations, Top Esports continues to chase domestic titles and international success."

function TES(){
    return (
        <div className="TESCLASS">
            <TeamPage Logo={TES_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default TES