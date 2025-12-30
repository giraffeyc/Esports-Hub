import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './LYON.css'
import TeamPage from './TeamPage';
import LYON_LOGO from "../assets/LCS_LYON.png";
import LYON_T from "../assets/LYON_ZAMUDO.png";
import LYON_J from "../assets/LYON_INSPIRED.png";
import LYON_M from "../assets/LYON_SAINT.png";
import LYON_A from "../assets/LYON_BERSERKER.png";
import LYON_S from "../assets/LYON_ISLES.png";

const Roster = [
    { Logo: LYON_T},
    { Logo: LYON_J},
    { Logo: LYON_M},
    { Logo: LYON_A},
    { Logo: LYON_S}
];

const TeamDescript="LYON is a professional esports organization that has competed in the North American League of Legends ecosystem through developmental and regional competition. The team has focused on cultivating emerging talent and providing opportunities for rising players to gain experience at a high level of play. Known for its emphasis on structure and teamwork, LYON has worked to establish a competitive identity within the broader North American scene. Over time, the organization has participated in various leagues and qualifiers, gaining valuable experience against more established teams. While not always in the spotlight, LYON has served as a stepping stone for players aiming to reach top-tier competition. The team continues to focus on growth, adaptability, and long-term development within the region. Through consistent effort and roster refinement, LYON remains committed to building a stronger presence in competitive League of Legends."

function LYON(){
    return (
        <div className="LYONCLASS">
            <TeamPage Logo={LYON_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default LYON