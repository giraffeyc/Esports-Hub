import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css';
import RegionCard from './RegionCard';
import PlayerCard from './PlayerCard';
import LCKLogo from "../assets/LCK.png";
import LPLLogo from "../assets/LPL.png";
import LCSLogo from "../assets/LCS.png";
import LECLogo from "../assets/LEC.png";
import T1Faker from "../assets/T1_FAKER.png";
import T1KERIA from "../assets/T1_KERIA.png";
import BLGVIPER from "../assets/BLG_VIPER.png";
import GENGCHOVY from "../assets/GENG_CHOVY.png";


/* Image imports store the url to the path while imports from .jsx is importing the component*/
const Data = [{Code:"LCK",Logo:LCKLogo, Path:'/LCK'}, {Code:"LPL",Logo:LPLLogo, Path: '/LPL'}, {Code:"LCS",Logo:LCSLogo, Path:'/LCS'}, {Code:"LEC",Logo:LECLogo,Path:'/LEC'}]
const Data2 = [{Logo:T1Faker}, {Logo:T1KERIA}, {Logo:BLGVIPER}, {Logo:GENGCHOVY}]

function Home() {
  /* Function for handling navigating to different pages*/

  /* event can be thought of as an object that stores all information about what just happened on our website */
  const navigate= useNavigate();
  const NavBarClick = async(event) => {
    event.preventDefault();
    const clickedText = event.target.textContent;  /* Lets us know which element was clicked and the text thats associated with it if none its empty string */
    if (clickedText === 'Home'){
      navigate('/');
    }
    else{
      const path = '/' + clickedText;                
      navigate(path);
    }
  }
  
  return (
    <div className="Home">
      <div className="Background"></div>

      <div className="NavBar">
        <ul>
          
          <li>
            <a href="#" onClick={NavBarClick}>Home</a>
          </li>

          <li>
            <a href="#" onClick={NavBarClick}>LCK</a>
          </li>

          <li>
            <a href="#" onClick={NavBarClick}>LPL</a>
          </li>

          <li>
            <a href="#" onClick={NavBarClick}>LCS</a>
          </li>

          <li>
            <a href="#" onClick={NavBarClick}>LEC</a>
          </li>
        </ul>
      </div>

      <h1 className= "Header">All Things LoL Esports, All in One Place</h1>
      <p className= "Introduction">Welcome to the ultimate Leauge Of Legend Esports hub!
          Here, you can explore teams from the major regions. LCK represening South Korea, LPL representing China, LCS representing
          North America, and lastly LEC representing Europe. Discover detailed rosters, learn about star players, and stay updated
          with one of the most popular games in the world. Whether you're a casual fan or a competive follower, this site will provide
          you with everything you need to know about the world of LoL Esports in one place!
      </p>
      <h2 className="Region">Explore Regions</h2>

      {/* Props are named inputs that you pass to a component */}
      {/* If we want to pass props we use the syntax below and children which is basically other html then we do it like regular html */}
      {/*<RegionCard Code="LCK" Logo={LCKLogo}/> */}
      <div className="HomeRegionCard">
          {Data.map((entry) => (
            <RegionCard key={entry.Code} Code={entry.Code} Logo={entry.Logo} Path={entry.Path}/>
          ))}
      </div>

      <h3 className="FeaturedPlayers">Featured Players</h3>

      <div className="HomePlayerCard">
          {Data2.map((entry) => (
            <PlayerCard key={entry.Logo}  Logo={entry.Logo}/>
          ))}
      </div>
    </div>
  )
}

export default Home