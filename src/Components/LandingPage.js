import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingPage.css';
import * as FaIcons from "react-icons/fa";


const LandingPage = () => {
    return (
        <>
            <div className="main">
                <video src="VDs/video-2.mp4" autoPlay loop muted />
                <h2>ADVENTURE AWAITS</h2>
                <p>What are you waiting for?</p>
                <div className="buttons">
                <Button buttonStyle={"btn--outline"} buttonSize={"btn--large"} children={'GET STARTED'} />
                <Button buttonSize={"btn--large"}>WATCH TRAILER <FaIcons.FaPlayCircle/></Button>
                </div>
            </div>
        </>
    );
};

export default LandingPage;