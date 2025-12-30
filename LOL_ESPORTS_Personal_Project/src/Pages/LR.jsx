import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './LR.css'
import TeamPage from './TeamPage';
import LR_LOGO from "../assets/LEC_LR.png";
import LR_T from "../assets/LR_BAUS.png";
import LR_J from "../assets/LR_VELJA.png";
import LR_M from "../assets/LR_NEMESIS.png";
import LR_A from "../assets/LR_CROWNSHOT.png";
import LR_S from "../assets/LR_REKKLES.png";

const Roster = [
    { Logo: LR_T},
    { Logo: LR_J},
    { Logo: LR_M},
    { Logo: LR_A},
    { Logo: LR_S}
];

const TeamDescript="Los Ratones is a European League of Legends team known for its strong online presence and community-driven identity. Originally formed as a content-focused and competitive project led by well-known figures in the League of Legends scene, the team blends entertainment with high-level gameplay. Los Ratones gained popularity through participation in regional leagues and show-matches, attracting attention for both its personalities and competitive ambition. The team often features a mix of experienced players and rising talent, creating a unique dynamic compared to traditional organizations. While not always competing in top-tier leagues, Los Ratones has built a dedicated fanbase through consistent content creation and memorable performances. Their brand emphasizes creativity, accessibility, and enjoyment of the game, setting them apart from more traditional esports organizations. As a result, Los Ratones has become a recognizable and influential name within the European League of Legends community."

function LR(){
    return (
        <div className="LRCLASS">
            <TeamPage Logo={LR_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default LR