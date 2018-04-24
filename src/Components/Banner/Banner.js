import React from 'react';
import './Banner.css'

const Banner = (props) => (
    <div className="banner">
        <div className="banner__mask">
            <h1>{props.text}</h1>
            
        </div>
        
    </div>
    
);


export default Banner;