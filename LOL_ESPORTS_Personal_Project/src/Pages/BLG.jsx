import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './BLG.css'
import TeamPage from './TeamPage';
import BLG_LOGO from "../assets/LPL_BLG.png";
import BLG_BIN from '../assets/BLG_BIN.png';
import BLG_XUN from '../assets/BLG_XUN.png';
import BLG_KNIGHT from '../assets/BLG_KNIGHT.png';
import BLG_VIPER from '../assets/BLG_VIPER.png';
import BLG_ON from '../assets/BLG_ON.png';

const Roster = [
    { Logo: BLG_BIN},
    { Logo: BLG_XUN},
    { Logo: BLG_KNIGHT},
    { Logo: BLG_VIPER },
    { Logo: BLG_ON}
];

const TeamDescript="Bilibili Gaming is a professional League of Legends esports team based in China that competes in the LPL, representing the popular Chinese video platform Bilibili. The organization entered the LPL in 2017 after acquiring the slot of I May and has since grown into one of the league’s strongest teams. In its early years, BLG struggled to find consistent success, often finishing in the middle of the standings. The team’s fortunes changed in the early 2020s after major roster upgrades and stronger organizational support. BLG rose to prominence with multiple top-tier LPL finishes and became a regular contender in playoffs. The team achieved major international success by reaching the finals of the Mid-Season Invitational and qualifying for the World Championship. Known for aggressive play and elite individual talent, Bilibili Gaming has become one of the modern powerhouses of the LPL and a serious threat on the global stage."

function BLG(){
    return (
        <div className="BLGCLASS">
            <TeamPage Logo={BLG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default BLG