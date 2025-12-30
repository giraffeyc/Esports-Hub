import React, { useState, useEffect } from 'react';
import './PlayerCard.css';

function PlayerCard({Logo}){
    return (
        <div className="PlayerCard">
            <div className="PlayerCardLogo">
                <img src={Logo}></img>
            </div>
        </div>
    )
}

export default PlayerCard;