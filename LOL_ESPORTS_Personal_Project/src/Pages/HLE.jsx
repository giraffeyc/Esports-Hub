import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './HLE.css'
import TeamPage from './TeamPage';
import HLE_LOGO from "../assets/LCK_HLE.png";
import HLE_ZEUS from '../assets/HLE_ZEUS.png';
import HLE_KANAVI from '../assets/HLE_KANAVI.png';
import HLE_ZEKA from '../assets/HLE_ZEKA.png';
import HLE_GUMAYUSI from '../assets/HLE_GUMAYUSI.png';
import HLE_DELIGHT from '../assets/HLE_DELIGHT.png';


const Roster = [
    { Logo: HLE_ZEUS},
    { Logo: HLE_KANAVI},
    { Logo: HLE_ZEKA},
    { Logo: HLE_GUMAYUSI },
    { Logo: HLE_DELIGHT}
];

const TeamDescript="Hanwha Life Esports is a professional League of Legends esports team from South Korea that competes in the LCK (League of Legends Champions Korea), one of the most competitive regional leagues in the world. The organization entered the LCK in 2018 after acquiring the LCK slot and roster from the former ROX Tigers, a team with a rich legacy in Korean League history. Since joining the LCK, HLE has worked to build its identity and competitive success, becoming a consistent presence in league play and earning playoff appearances. In 2025, HLE achieved one of its biggest accomplishments by winning the First Stand Tournament, marking the team’s first international title.  Over the years, the roster has featured talented Korean players and has been known for strong team fighting and resilience against top opponents. While still chasing its first World championship, HLE has shown steady improvement and growth, often challenging established powerhouses within the league. The team blends experienced veterans with rising stars and aims to continue climbing the standings as it builds its legacy in Korean League esports." 


function HLE(){
    return (
        <div className="HLECLASS">
            <TeamPage Logo={HLE_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default HLE