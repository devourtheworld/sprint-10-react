import React from 'react';
import './button.css';

const NavButtons = ({selectPrev, selectNext, ...props}) => {
    return <div>
            <button className="button" onClick={selectPrev}>previous</button>
            <button className="button" onClick={selectNext}>next</button>
        </div>
}

export default NavButtons;