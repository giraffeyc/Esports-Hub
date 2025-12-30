import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './WBG.css'
import TeamPage from './TeamPage';
import WBG_LOGO from "../assets/LPL_WBG.png";
import WBG_ZIKA from '../assets/WBG_ZIKA.png';
import WBG_JIEJIE from '../assets/WBG_JIEJIE.png';
import WBG_XIAOHU from '../assets/WBG_XIAOHU.png';
import WBG_ELK from '../assets/WBG_ELK.png';
import WBG_ERHA from '../assets/WBG_ERHA.png';

const Roster = [
    { Logo: WBG_ZIKA},
    { Logo: WBG_JIEJIE},
    { Logo: WBG_XIAOHU},
    { Logo: WBG_ELK },
    { Logo: WBG_ERHA}
];

const TeamDescript="Weibo Gaming is a professional League of Legends esports organization based in China that competes in the LPL (League of Legends Pro League), one of the strongest leagues in the world. The team was formed in 2021 after Weibo acquired the former Suning roster, inheriting a lineup that had previously reached the World Championship Finals. Since then, WBG has established itself as a consistent contender within the LPL, known for its aggressive playstyle and high-profile rosters. The organization quickly gained popularity due to its star power, including veteran players and world champions who brought experience and leadership to the team. Over the years, WBG has remained competitive in both domestic league play and international tournaments, frequently qualifying for playoffs and global events. The team is known for its strong laning phases and decisive mid-game fights. Backed by one of China’s largest social media companies, Weibo Gaming continues to invest heavily in talent and infrastructure. Today, WBG stands as one of the most recognizable and ambitious teams in the LPL."

function WBG(){
    return (
        <div className="WBGCLASS">
            <TeamPage Logo={WBG_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default WBG