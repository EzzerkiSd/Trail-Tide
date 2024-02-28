import React from 'react';
import { Cards } from './Cards';
import './CheckOut.css';


const CheckOut = () => {
    return (
        <>
            <div className="check">
                <div className="header">
                    <h2>Check out these EPIC Destinations!</h2>
                </div>
                <div className="content">
                    <Cards cardSize={'card--large'} imgSrc='Imgs/img-9.jpg' p={'Explore  the hidden waterfall deep inside the Amazon Jugle'} ticket={'Adventure'} />
                    <Cards cardSize={'card--large'} imgSrc='Imgs/img-2.jpg' p={'Travel through the Islands of Bali in a Private Cruise'} ticket={'Luxury'} />
                </div>
                <div className="content2">
                    <Cards imgSrc='Imgs/img-3.jpg' p={'Set Sall in the Atlantic Ocean visiting Uncharted Waters'} ticket={'Mystery'} />
                    <Cards imgSrc='Imgs/img-4.jpg' p={'Experience Football on Top of the Himilayan Moutains'} ticket={'Adventure'} />
                    <Cards imgSrc='Imgs/img-8.jpg' p={'Ride Through the Sahara on a guided camel tour'} ticket={'Adventure'} />
                </div>
            </div>
        </>
    );
};

export default CheckOut;