import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './SEN.css'
import TeamPage from './TeamPage';
import SEN_LOGO from "../assets/LCS_SEN.png";
import SEN_T from "../assets/SEN_IMPACT.png";
import SEN_J from "../assets/SEN_HAMBAK.png";
import SEN_M from "../assets/SEN_DARKWINGS.png";
import SEN_A from "../assets/SEN_RAHEL.png";
import SEN_S from "../assets/SEN_HUHI.png";

const Roster = [
    { Logo: SEN_T},
    { Logo: SEN_J},
    { Logo: SEN_M},
    { Logo: SEN_A},
    { Logo: SEN_S}
];

const TeamDescript="Sentinels is a well-known North American esports organization recognized primarily for its success across multiple competitive titles. While best known for its achievements in other esports, Sentinels has also participated in the broader League of Legends ecosystem through development and competitive involvement. The organization is known for its strong branding, professional infrastructure, and commitment to building high-profile rosters. Sentinels emphasizes player development, performance culture, and fan engagement across all of its competitive ventures. Though not a long-standing LCS mainstay, the organization has remained influential in shaping North American esports culture. Their presence in League of Legends reflects an ongoing interest in expanding competitive reach and fostering talent within the region."

function SEN(){
    return (
        <div className="SENCLASS">
            <TeamPage Logo={SEN_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default SEN