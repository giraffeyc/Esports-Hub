import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './BNK_FEARX.css'
import TeamPage from './TeamPage';
import BNKFearX from "../assets/LCK_BNK_FearX.png";
import BNK_Clear from '../assets/BNK_FEARX_CLEAR.png';
import BNK_Raptor from '../assets/BNK_FEARX_RAPTOR.png';
import BNK_VICLA from '../assets/BNK_FEARX_VICLA.png';
import BNK_DIABLE from '../assets/BNK_FEARX_DIABLE.png';
import BNK_KELLIN from '../assets/BNK_FEARX_KELLIN.png';

const Roster = [
    { Logo: BNK_Clear},
    { Logo: BNK_Raptor},
    { Logo: BNK_VICLA},
    { Logo: BNK_DIABLE },
    { Logo: BNK_KELLIN}
];

const TeamDescript="BNK FEARX is a professional League of Legends esports team based in South Korea that competes in the LCK, the highest level of Korean League of Legends competition. The organization was originally founded as SANDBOX Gaming and later rebranded to Liiv SANDBOX as it grew within the LCK. In 2023, the team adopted the name FearX, signaling a shift toward a new competitive identity. The organization later became BNK FEARX following a sponsorship partnership with BNK Financial Group. Throughout its history, the team has focused heavily on developing young talent and building long-term stability rather than relying on superstar rosters. While results have varied across seasons, BNK FEARX has remained a consistent presence in the LCK. The team is known for its disciplined approach and structured playstyle. Today, BNK FEARX continues to compete against Korea’s top teams while working to establish itself as a stronger contender within the league."

function BNK_FEARX(){
    return (
        <div className="BNK_FEARX">
            <TeamPage Logo={BNKFearX} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default BNK_FEARX