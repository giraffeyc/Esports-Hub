import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './FNC.css'
import TeamPage from './TeamPage';
import FNC_LOGO from "../assets/LEC_FNC.png";
import FNC_T from "../assets/FNC_EMPYROS.png";
import FNC_J from "../assets/FNC_RAZORK.png";
import FNC_M from "../assets/FNC_VLADI.png";
import FNC_A from "../assets/FNC_UPSET.png";
import FNC_S from "../assets/FNC_LOSPA.png";

const Roster = [
    { Logo: FNC_T},
    { Logo: FNC_J},
    { Logo: FNC_M},
    { Logo: FNC_A},
    { Logo: FNC_S}
];

const TeamDescript="Fnatic is one of the most historic and successful organizations in League of Legends esports, competing in the LEC (League of Legends EMEA Championship) since the league’s earliest days. Founded in 2004, Fnatic was a founding member of the European LCS and quickly established itself as a dominant force in Western League of Legends. The team made history by winning the first-ever League of Legends World Championship in 2011, setting the foundation for its global reputation. Over the years, Fnatic has remained a consistent contender in Europe, regularly qualifying for international tournaments such as MSI and Worlds. Known for developing star players and aggressive playstyles, the team has featured legends like xPeke, Rekkles, Caps, and Hylissang. Fnatic’s identity is built on resilience, innovation, and long-term competitiveness. Despite ups and downs, the organization continues to be one of the most recognizable and influential brands in the League of Legends esports scene."

function FNC(){
    return (
        <div className="FNCCLASS">
            <TeamPage Logo={FNC_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default FNC