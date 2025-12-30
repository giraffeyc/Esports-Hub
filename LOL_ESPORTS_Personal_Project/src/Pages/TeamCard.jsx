import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './TeamCard.css';

function TeamCard({Logo, Path }){
    const navigate= useNavigate();
    const TeamCardClick = async(event) => {
        event.preventDefault();            
        navigate(Path);
    }
  
    return (
        <div className="TeamCard">
            <div className="TeamCardLogo">
                <img src={Logo} onClick={TeamCardClick}></img>
            </div>
        </div>
    )
}
export default TeamCard