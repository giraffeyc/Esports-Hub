import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './GX.css'
import TeamPage from './TeamPage';
import GX_LOGO from "../assets/LEC_GX.png";
import GX_T from "../assets/GX_LOT.png";
import GX_J from "../assets/GX_ISMA.png";
import GX_M from "../assets/GX_JACKIES.png";
import GX_A from "../assets/GX_NOAH.png";
import GX_S from "../assets/GX_JUN.png";

const Roster = [
    { Logo: GX_T},
    { Logo: GX_J},
    { Logo: GX_M},
    { Logo: GX_A},
    { Logo: GX_S}
];

const TeamDescript="GIANTX is a European esports organization competing in the LEC, formed through the merger of Giants Gaming and EXCEL Esports. The team represents a new era in European League of Legends, combining two established organizations with a shared goal of long-term success. GIANTX entered the LEC aiming to build a sustainable roster focused on development, structure, and competitive growth. While still establishing its identity in the league, the organization has focused on developing young talent and building strong infrastructure behind the scenes. GIANTX emphasizes teamwork, strategic play, and long-term stability over short-term results. As the team continues to grow, it seeks to become a consistent playoff contender and a respected presence within the LEC ecosystem."

function GX(){
    return (
        <div className="GXCLASS">
            <TeamPage Logo={GX_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default GX