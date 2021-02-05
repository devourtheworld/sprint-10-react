import React from 'react';
import './starship.css';

const Starship = (props) => {
    const {id, name, model, manufacturer, length, img} = props.data;
    
    return <div className="container">
        <img id="starshipImg" className="img" src={img} alt=""/>
        <ul className="details">
            <li id="name"> {name} </li>
            <li className="info">model: {model} </li>
            <li className="info">manufacturer: {manufacturer} </li>
            <li className="info">length: {length}</li>
        </ul>
    </div>;
}

export default Starship;