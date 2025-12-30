import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './SR.css'
import TeamPage from './TeamPage';
import SR_LOGO from "../assets/LCS_SR.png";
import SR_T from "../assets/SR_FUDGE.png";
import SR_J from "../assets/SR_CONTRACTZ.png";
import SR_M from "../assets/SR_ZINIE.png";
import SR_A from "../assets/SR_BVOY.png";
import SR_S from "../assets/SR_CEOS.png";

const Roster = [
    { Logo: SR_T},
    { Logo: SR_J},
    { Logo: SR_M},
    { Logo: SR_A},
    { Logo: SR_S}
];

const TeamDescript="Shopify Rebellion is a professional League of Legends team competing in the LCS, representing the esports division of the global e-commerce company Shopify. Originally entering the league after acquiring the former TSM slot, the organization quickly established itself as a modern and forward-thinking competitor. Shopify Rebellion places strong emphasis on infrastructure, player development, and long-term sustainability. The team has steadily worked to build competitive rosters capable of challenging established LCS organizations. Known for its analytical approach and professional management, Shopify Rebellion aims to grow both competitively and culturally within the North American League of Legends scene. Their continued investment signals long-term commitment to success at the highest level."

function SR(){
    return (
        <div className="SRCLASS">
            <TeamPage Logo={SR_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default SR