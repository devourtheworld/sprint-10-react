import React from 'react';
import './planet.css';

const Planet = (props) => {
    const {id, name, diameter, rotationPeriod, gravity, img} = props.data;
    
    return <div className="container">
        <img id="planetImg" className="img" src={img} alt=""/>
        <ul className="details">
            <li id="name"> {name} </li>
            <li className="info">diameter: {diameter} </li>
            <li className="info">rotation period: {rotationPeriod} </li>
            <li className="info">gravity: {gravity}</li>
        </ul>
    </div>; 
}

export default Planet;