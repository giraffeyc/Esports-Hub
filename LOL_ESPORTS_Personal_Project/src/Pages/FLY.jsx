import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './FLY.css'
import TeamPage from './TeamPage';
import FLY_LOGO from "../assets/LCS_FLY.png";
import FLY_T from "../assets/FLY_GAKGOS.png";
import FLY_J from "../assets/FLY_GRYFFINN.png";
import FLY_M from "../assets/FLY_QUAD.png";
import FLY_A from "../assets/FLY_MASSU.png";
import FLY_S from "../assets/FLY_CYROGEN.png";

const Roster = [
    { Logo: FLY_T},
    { Logo: FLY_J},
    { Logo: FLY_M},
    { Logo: FLY_A},
    { Logo: FLY_S}
];

const TeamDescript="FlyQuest is a North American League of Legends organization known for combining competitive ambition with strong environmental and social initiatives. Founded in 2017, the team quickly established itself in the LCS and became recognized for its branding focused on sustainability and community impact. FlyQuest has consistently competed at the top level of North American League of Legends, earning multiple playoff appearances and international qualifications. The organization has featured several high-profile players over the years and is known for its structured approach to team building. FlyQuest gained significant attention for its strong performances in recent seasons, including deep playoff runs and international appearances. With a balance of competitive focus and organizational values, FlyQuest continues to be one of the most distinctive teams in the LCS."

function FLY(){
    return (
        <div className="FLYCLASS">
            <TeamPage Logo={FLY_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default FLY