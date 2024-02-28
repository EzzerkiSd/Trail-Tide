import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as FaIcons from "react-icons/fa";
import { Button } from './Button';
import './Footer.css';
import { Slice } from './Slice';

const Footer = () => {
    return ( 
        <>
            <div className="footer">
                <h3>Join the Adventure newsletter to receive our best vacation deals</h3>
                <p>You can subscribe at any time.</p>
                <div className="subscribe">
                    <input type="text" placeholder='Your Email'/>
                    <Button children={'Subscribe'} buttonStyle={'btn--outline'} />
                </div>
                <div className="info">
                    <Slice header={'About Us'} elements={['How it works', 'Testimonials', 'Careers', 'Investors', 'Terms of Service']} />
                    <Slice header={'Contact Us'} elements={['Contact', 'Support', 'Destinations', 'Sponsorships']} />
                    <Slice header={'Videos'} elements={['Submit Video', 'Ambassadors', 'Agency', 'Influencer']} />
                    <Slice header={'Social Media'} elements={['Instagram', 'Facebook', 'Youtube', 'Twitter']} />
                </div>
            </div>
            <div className="lastThing">
                    <div className="logo">
                        <Link to='/'>TRVL <FaIcons.FaTypo3 /></Link>
                    </div>
                    <p className='copyright'>
                        TRVL © 2023
                    </p>
                    <div className="iconed-links">
                        <Link to='#'>
                            <FaIcons.FaFacebookF className='fb'/>
                        </Link>
                        <Link to='#'>
                            <FaIcons.FaInstagram className='insta'/>
                        </Link>
                        <Link to='#'>
                            <FaIcons.FaYoutube className='yt'/>
                        </Link>
                        <Link to='#'>
                            <FaIcons.FaTwitter className='tw'/>
                        </Link>
                        <Link to='#'>
                            <FaIcons.FaLinkedinIn className='in'/>
                        </Link>
                    </div>
            </div>
        </>
     );
}
 
export default Footer;