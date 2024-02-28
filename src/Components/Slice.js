import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Slice.css';

export const Slice = ({
    header,
    elements
}) => {
    return(
        <div className="crd">
            <h3>{header}</h3>
            <ul>
                {
                    elements.map((e, index)=>
                       <li key={index}>
                        <Link to='#'>{e}</Link>
                       </li> 
                    )
                }
            </ul>
        </div>
    );
}