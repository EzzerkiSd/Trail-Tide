import React from 'react';
import '../../App.css';
import CheckOut from '../CheckOut';
import Footer from '../Footer';
import LandingPage from '../LandingPage';

function Home() {
    return (
        <>
            <LandingPage />
            <CheckOut/>
            <Footer/>
        </>
    );
}
 
export default Home;