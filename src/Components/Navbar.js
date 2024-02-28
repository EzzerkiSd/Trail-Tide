import React, { useEffect, useState } from 'react';
import { NavbarData } from './NavbarData';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './Navbar.css';

const Navbar = () => {

    const [isTheRightWidth, setRightWidth] = useState(true);
    const checkWidth = () => {
        if (window.innerWidth < 960) {
            setRightWidth(false);
        } else {
            setRightWidth(true);
        }
    };
    useEffect(() => {
        checkWidth();
    }, []);
    window.addEventListener("resize", checkWidth);

    const [isWorking, setWork] = useState(false);
    const showSideBar = () => setWork(!isWorking);

    const ff = () => {
        if (isTheRightWidth) {
            return (
                <ul className='navFull' >
                    {NavbarData.map((e, index) =>
                        <li className='navFull' key={index}>
                            <Link to={`${e.path}`}>{e.title}</Link>
                        </li>
                    )}
                    <button className='signUp navFull'>SIGN UP</button>
                </ul>
            );
        } else {
            return (
                <>
                    <button className='ss' onClick={showSideBar}><FaIcons.FaBars /></button>
                </>
            );
        }
    };
    const fff = () => {
        if (!isTheRightWidth) {
            return <div className={isWorking ? "sideBar" : "sideBar Off"}>
                <button className='closer' onClick={showSideBar}><AiIcons.AiOutlineClose /></button>
                <ul className='side'>
                    {NavbarData.map((e, index) =>
                        <li className='sideOne' key={index}>
                            <Link to={`${e.path}`}>{e.title}</Link>
                        </li>
                    )}
                    <button className='signUp' id='side'>SIGN UP</button>
                </ul>
            </div>;
        }
    };

    return (
        <>
            <nav>
                <div className="logo">
                    <Link to='/'>TrailTide <FaIcons.FaTypo3 /></Link>
                </div>
                {
                    ff()
                }
            </nav>
            {fff()}
        </>
    );
};

export default Navbar;