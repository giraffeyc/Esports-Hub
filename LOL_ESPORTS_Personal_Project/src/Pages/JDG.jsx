import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './JDG.css'
import TeamPage from './TeamPage';
import JDG_LOGO from "../assets/LPL_JDG.png";
import JDG_XIAOXU from '../assets/JDG_XIAOXU.png';
import JDG_JUNIA from '../assets/JDG_JUNJIA.png';
import JDG_HONGQ from '../assets/JDG_HONGQ.png';
import JDG_GALA from '../assets/JDG_GALA.png';
import JDG_VAMPIRE from '../assets/JDG_VAMPIRE.png';

const Roster = [
    { Logo: JDG_XIAOXU},
    { Logo: JDG_JUNIA},
    { Logo: JDG_HONGQ},
    { Logo: JDG_GALA },
    { Logo: JDG_VAMPIRE}
];

const TeamDescript="JD Gaming (JDG) is a professional League of Legends esports team based in China that competes in the LPL (League of Legends Pro League), one of the strongest regional leagues in the world. The organization was founded in 2017 after JD.com acquired the LPL slot of QG Reapers, officially entering China’s top League of Legends competition. In its early years, JDG steadily developed into a competitive team, making regular playoff appearances and building a reputation for strong team coordination. The organization achieved a major breakthrough in 2020, winning its first LPL Spring Championship, which marked JDG’s rise into the elite tier of Chinese teams. JDG continued its domestic success by capturing additional LPL titles in 2022 and 2023, establishing itself as one of the most dominant teams of that era. Internationally, the team represented the LPL at events like the Mid-Season Invitational and the World Championship, consistently placing among the top contenders. JD Gaming became especially known for its structured macro play and ability to perform under pressure on the biggest stages. Over the years, the roster has featured star players such as Kanavi and Knight, whose performances helped define the team’s identity. Today, JDG remains a powerhouse in the LPL, continuing to compete for championships while maintaining a strong legacy in both domestic and international League of Legends."

function JDG(){
    return (
        <div className="JDGCLASS">
            <TeamPage Logo={JDG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default JDG