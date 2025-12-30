import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './NS.css'
import TeamPage from './TeamPage';
import NS_LOGO from "../assets/LCK_NS.png";
import NS_KINGEN from '../assets/NS_KINGEN.png';
import NS_SPONGE from '../assets/NS_SPONGE.png';
import NS_SCOUT from '../assets/NS_SCOUT.png';
import NS_TAEYOON from '../assets/NS_TAEYOON.png';
import NS_LEHENDS from '../assets/NS_LEHENDS.png';



const Roster = [
    { Logo: NS_KINGEN},
    { Logo: NS_SPONGE},
    { Logo: NS_SCOUT},
    { Logo: NS_TAEYOON },
    { Logo: NS_LEHENDS}
];

const TeamDescript="Nongshim RedForce is a professional League of Legends esports team competing in the LCK (League of Legends Champions Korea), representing the Nongshim brand in Korea’s top League of Legends league. The organization entered the LCK as part of the league’s franchise system and has steadily built its presence among the region’s competitive teams. As a mid‑tier LCK squad, NS has worked to establish itself by developing Korean talent and competing week‑to‑week against other major franchises in the league. While not yet capturing an LCK title, Nongshim has achieved notable victories and remained competitive in regular season and playoff matches. Their match history against longtime rivals like KT Rolster shows that NS has the capability to challenge stronger teams on any given day. Fans of the team appreciate its dynamic playstyle and growth potential as the organization continues to invest in its roster and coaching staff. On the LCK stage, Nongshim aims to take further steps forward each split and eventually contend for higher placements in both domestic and international competition. " 

function NS(){
    return (
        <div className="NSCLASS">
            <TeamPage Logo={NS_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default NS