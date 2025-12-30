import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './DNF.css'
import TeamPage from './TeamPage';
import DN_LOGO from "../assets/LCK_DN_FREECS.png";
import DN_DUDU from '../assets/DN_DUDU.png';
import DN_PYOSIK from '../assets/DN_PYOSIK.png';
import DN_CLOZER from '../assets/DN_CLOZER.png';
import DN_DEOKDAM from '../assets/DN_DEOKDAM.png';
import DN_PETER from '../assets/DN_PETER.png';

const Roster = [
    { Logo: DN_DUDU},
    { Logo: DN_PYOSIK},
    { Logo: DN_CLOZER},
    { Logo: DN_DEOKDAM },
    { Logo: DN_PETER}
];

const TeamDescript="DN Freecs is a professional League of Legends esports team from South Korea that competes in the LCK, the country’s top-tier league. The organization was originally founded in 2015 as Afreeca Freecs, becoming a well-known name in the Korean esports scene. Over the years, the team experienced several rebrands, including Kwangdong Freecs, before adopting the name DN Freecs through a sponsorship partnership with DN Group. During its peak years, Afreeca Freecs achieved strong playoff performances and qualified for international tournaments such as the World Championship. The team has historically been recognized for fielding a mix of veteran players and emerging talent. While recent seasons have involved rebuilding and roster changes, DN Freecs remains an established organization within the LCK. The team places emphasis on long-term development and competitive consistency. DN Freecs continues to work toward reclaiming its position among Korea’s top contenders."

function DNF(){
    return (
        <div className="DNFCLASS">
            <TeamPage Logo={DN_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default DNF