import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './DK.css'
import TeamPage from './TeamPage';
import DK_LOGO from "../assets/LCK_Dplus.png";
import DK_SIWOO from '../assets/DK_SIWOO.png';
import DK_LUCID from '../assets/DK_LUCID.png';
import DK_SHOWMAKER from '../assets/DK_SHOWMAKER.png';
import DK_SMASH from '../assets/DK_SMASH.png';
import DK_CAREER from '../assets/DK_CAREER.png';

const Roster = [
    { Logo: DK_SIWOO},
    { Logo: DK_LUCID},
    { Logo: DK_SHOWMAKER},
    { Logo: DK_SMASH },
    { Logo: DK_CAREER}
];

const TeamDescript="Dplus KIA is a professional League of Legends esports team from South Korea that competes in the LCK, the country’s premier League of Legends league. The organization was originally founded in 2017 under the name Damwon Gaming and quickly rose through the Korean competitive scene. After entering the LCK, the team established itself as a top contender through strong performances and disciplined play. In 2020, Damwon Gaming won its first LCK championship and went on to capture the League of Legends World Championship, marking one of the most dominant seasons in esports history. The team continued its success in 2021 by winning additional LCK titles and maintaining a strong international presence. Following a partnership with Kia Motors, the team competed as DWG KIA before rebranding to Dplus KIA as part of a broader organizational identity shift. Despite fluctuations in results in recent seasons, Dplus KIA has remained a consistent contender in the LCK. Known for developing elite talent and maintaining a championship pedigree, the team continues to build on its legacy as one of Korea’s most successful esports organizations. The club is known for nurturing world-class talent like mid-laner ShowMaker and for its strategic growth as both a domestic and international brand. Today, Dplus KIA continues to compete among elite Korean teams, striving to reclaim top placements in the LCK while building on a legacy that includes both regional titles and the pinnacle of global esports success."

function DK(){
    return (
        <div className="DKCLASS">
            <TeamPage Logo={DK_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default DK