import React from 'react';
import './person.css';

const Person = (props) => {

    const {id, name, gender, birthYear, eyeColor, img} = props.data;
    return <div className="container">
        <img id="personImg" className="img" src={img} alt=""/>
        <ul className="details">
            <li id="name"> {name} </li>
            <li className="info">gender: {gender} </li>
            <li className="info">birth year: {birthYear} </li>
            <li className="info">eye color: {eyeColor}</li>
        </ul>
    </div>;
}

export default Person;