import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './C9.css'
import TeamPage from './TeamPage';
import C9_LOGO from "../assets/LCS_C9.png";
import C9_THANATOS from "../assets/C9_THANATOS.png";
import C9_BLABER from "../assets/C9_BLABER.png";
import C9_APA from "../assets/C9_APA.png";
import C9_ZVEN from "../assets/C9_ZVEN.png";
import C9_VULCAN from "../assets/C9_VULCAN.png";

const Roster = [
    { Logo: C9_THANATOS},
    { Logo: C9_BLABER},
    { Logo: C9_APA},
    { Logo: C9_ZVEN},
    { Logo: C9_VULCAN}
];

const TeamDescript="Cloud9 is a professional League of Legends esports organization based in North America and one of the most successful teams in the region’s history. Founded in 2013, Cloud9 quickly rose to prominence after dominating the NA LCS and establishing itself as a consistent international contender. The team is known for its strong infrastructure, player development system, and willingness to invest in emerging talent. Over the years, Cloud9 has won multiple LCS championships and represented North America at nearly every World Championship since its founding. They are especially recognized for their deep international runs and ability to challenge top teams from other regions. Cloud9 has featured legendary players such as Hai, Sneaky, Jensen, and Blaber, helping shape the identity of North American League of Legends. With a reputation for innovation and consistency, Cloud9 remains one of the most respected organizations in global esports."

function C9(){
    return (
        <div className="C9CLASS">
            <TeamPage Logo={C9_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default C9