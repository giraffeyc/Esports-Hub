import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './NIP.css'
import TeamPage from './TeamPage';
import NIP_LOGO from "../assets/LPL_NIP.png";
import NIP_HOYA from '../assets/NIP_HOYA.png';
import NIP_GUWON from '../assets/NIP_GUWON.png';
import NIP_CARE from '../assets/NIP_CARE.png';
import NIP_ASSUM from '../assets/NIP_ASSUM.png';
import NIP_ZHUO from '../assets/NIP_ZHUO.png';

const Roster = [
    { Logo: NIP_HOYA},
    { Logo: NIP_GUWON},
    { Logo: NIP_CARE},
    { Logo: NIP_ASSUM },
    { Logo: NIP_ZHUO}
];

const TeamDescript="Ninjas in Pyjamas is a globally recognized esports organization that entered the LPL through a partnership with Victory Five, forming NIP in 2023. Originally founded in Sweden, the organization expanded into the Chinese League of Legends scene as part of its long-term global growth strategy. Since joining the LPL, NIP has focused on building a competitive roster capable of challenging China’s top teams. The team blends experienced veterans with younger talent, aiming to establish consistency in one of the world’s most competitive leagues. Although still relatively new to the LPL compared to long-standing organizations, NIP has shown flashes of strong potential and adaptability. Their participation adds international presence to the league while maintaining a strong Chinese identity in gameplay and structure. As the organization continues to develop, NIP aims to become a regular playoff contender and a respected force within the LPL."

function LNG(){
    return (
        <div className="NIPCLASS">
            <TeamPage Logo={NIP_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default LNG