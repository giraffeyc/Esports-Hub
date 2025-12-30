import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './NAVI.css'
import TeamPage from './TeamPage';
import NAVI_LOGO from "../assets/LEC_NAVI.png";
import NAVI_T from "../assets/NAVI_T.png";
import NAVI_J from "../assets/NAVI_J.png";
import NAVI_M from "../assets/NAVI_M.png";
import NAVI_A from "../assets/NAVI_A.png";
import NAVI_S from "../assets/NAVI_S.png";

const Roster = [
    { Logo: NAVI_T},
    { Logo: NAVI_J},
    { Logo: NAVI_M},
    { Logo: NAVI_A},
    { Logo: NAVI_S}
];

const TeamDescript="Natus Vincere, commonly known as NAVI, is one of the most historic esports organizations in the world, originating from Ukraine. While best known for its success in titles like CS:GO, NAVI also competes in League of Legends through its participation in European competition. The organization entered League of Legends with the goal of expanding its multi-title legacy into Riot Games’ flagship esport. NAVI’s approach emphasizes discipline, infrastructure, and long-term player development. Although their League of Legends roster has faced challenges establishing itself among Europe’s top teams, the organization continues to invest in competitive growth. With a globally recognized brand and strong organizational backing, NAVI remains a respected name across the esports ecosystem."

function NAVI(){
    return (
        <div className="NAVICLASS">
            <TeamPage Logo={NAVI_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default NAVI