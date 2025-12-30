import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './UP.css'
import TeamPage from './TeamPage';
import UP_LOGO from "../assets/LPL_UP.png";
import UP_LIANGCHEN from "../assets/UP_LIANGCHEN.png";
import UP_LUOLIYU from "../assets/UP_LUOLIYU.png";
import UP_SABER from "../assets/UP_SABER.png";
import UP_BAIYE from "../assets/UP_BAIYE.png";
import UP_XIAOXIA from "../assets/UP_XIAOXIA.png";

const Roster = [
    { Logo: UP_LIANGCHEN},
    { Logo: UP_LUOLIYU},
    { Logo: UP_SABER},
    { Logo: UP_BAIYE},
    { Logo: UP_XIAOXIA}
];

const TeamDescript="Ultra Prime is a Chinese League of Legends esports organization competing in the LPL, having entered the league in 2021 after rebranding from eStar Gaming. The team represents a newer generation of LPL organizations focused on sustainable growth and player development. Since joining the league, Ultra Prime has worked to build competitive rosters capable of challenging more established teams. While results have varied, the organization has demonstrated steady improvement and resilience throughout multiple seasons. Ultra Prime is known for giving opportunities to younger talent and refining players through structured development. As the team continues to evolve, it aims to strengthen its presence in the LPL and become a consistent contender in the future."

function UP(){
    return (
        <div className="UPCLASS">
            <TeamPage Logo={UP_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default UP