import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './LGD.css'
import TeamPage from './TeamPage';
import LGD_LOGO from "../assets/LPL_LGD.png";
import LGD_SASI from '../assets/LGD_SASI.png';
import LGD_HENG from '../assets/LGD_HENG.png';
import LGD_TANGYUAN from '../assets/LGD_TANGYUAN.png';
import LGD_SHAOYE from '../assets/LGD_SHAOYE.png';
import LGD_YCX from '../assets/LGD_YCX.png';

const Roster = [
    { Logo: LGD_SASI},
    { Logo: LGD_HENG},
    { Logo: LGD_TANGYUAN},
    { Logo: LGD_SHAOYE },
    { Logo: LGD_YCX}
];

const TeamDescript="LGD Gaming is one of the most established esports organizations in China, with a long history in League of Legends competition dating back to the early days of the LPL. Founded in 2009, LGD quickly became a prominent name in Chinese esports and has competed at the highest level for over a decade. The team achieved major success in 2015, winning both the LPL Spring and Summer splits and qualifying for the World Championship. Although international results have varied over the years, LGD has remained a consistent presence in the LPL, rebuilding its roster multiple times to stay competitive. Known for developing domestic talent, the organization has featured many notable players throughout its history. LGD has experienced both high peaks and rebuilding periods, reflecting the evolving nature of the LPL. Despite ups and downs, the team continues to push forward with the goal of returning to the top of Chinese League of Legends. Its long-standing legacy makes LGD one of the most recognizable names in the region."

function LGD(){
    return (
        <div className="LGDCLASS">
            <TeamPage Logo={LGD_LOGO} Description={TeamDescript} Players={Roster}/>
        </div>
    )
}

export default LGD