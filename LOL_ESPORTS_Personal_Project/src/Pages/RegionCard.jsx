import React, { useState, useEffect } from 'react';
import './RegionCard.css';
import {useNavigate} from 'react-router-dom';

function RegionCard({Code,Logo,Path}){
    const navigate= useNavigate();
        const RegionCardClick = async(event) => {
            event.preventDefault();            
            navigate(Path);
        }

    return (
        <div className="RegionCard">
            <p className="Code">{Code}</p>
            <div className="Logo">
                <img src={Logo} onClick={RegionCardClick}></img>
            </div>
        </div>
    )
}

export default RegionCard;