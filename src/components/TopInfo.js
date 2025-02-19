import React from 'react';

const TopInfo = ({houseLogo, details, restaurant, title}) =>{
    return (
        <div>
            <img src={houseLogo} className="houseLogo" alt="House Logo" />
            <h1>{restaurant}</h1>
            <h2>{details}</h2>
            <h2 class = "title">{title}</h2>
        </div>
    );
};

export default TopInfo;