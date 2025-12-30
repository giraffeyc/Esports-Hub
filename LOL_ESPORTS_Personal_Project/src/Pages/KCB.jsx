import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './KCB.css'
import TeamPage from './TeamPage';
import KCB_LOGO from "../assets/LEC_KCB.png";
import KCB_T from "../assets/KCB_TAO.png";
import KCB_J from "../assets/KCB_YUKINO.png";
import KCB_M from "../assets/KCB_KAMILOO.png";
import KCB_A from "../assets/KCB_HAZEL.png";
import KCB_S from "../assets/KCB_PRIME.png";

const Roster = [
    { Logo: KCB_T},
    { Logo: KCB_J},
    { Logo: KCB_M},
    { Logo: KCB_A},
    { Logo: KCB_S}
];

const TeamDescript="Karmine Corp Blue is the sister team of Karmine Corp, one of the most popular and influential esports organizations in Europe. Competing primarily in the LFL (Ligue Française de League of Legends) and now in the LEC, KC Blue serves as a developmental roster focused on nurturing rising talent for the organization’s main LEC team. The team plays an important role in maintaining Karmine Corp’s strong competitive pipeline by giving young players experience in high-pressure regional competition. Over the years, KC Blue has been known for disciplined gameplay, strong fundamentals, and effective team coordination. Many of its players have gone on to compete at higher levels, including the LEC and international events. The roster frequently battles top French and European academy teams, making it a consistent contender within the ERL ecosystem. As part of one of Europe’s most passionate fanbases, Karmine Corp Blue represents the future of the organization’s competitive success."

function KCB(){
    return (
        <div className="KCBCLASS">
            <TeamPage Logo={KCB_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default KCB