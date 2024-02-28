import React from 'react';
import './Cards.css';

const SIZES = ['card--medium', 'card--large'];

export const Cards = ({
    cardSize,
    p,
    imgSrc,
    ticket
}) => {
    const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];

    return (
        <div className={`card ${checkCardSize}`}>
            <div className="img">
                <img src={imgSrc} alt='' />
                <span>{ticket}</span>
            </div>
            <div className="para">{p}</div>
        </div>
    );
};