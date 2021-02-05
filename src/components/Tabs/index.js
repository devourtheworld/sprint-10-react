import React from 'react';
import './tabs.css';

const Tabs = ({switchCategoryprops, ...props}) => {
   
    return <div className="navigation">

        <input type="radio" defaultChecked name="nav"  value="people" id="radio1" onClick={() => props.switchCategory('people')}/>
        <label htmlFor="radio1">People</label>

        <input type="radio" name="nav" value="planets" id="radio2" onClick={() => props.switchCategory('planets')}/>
        <label htmlFor="radio2">Planets</label> 

        <input type="radio" name="nav" value="starships" id="radio3" onClick={() => props.switchCategory('starships')}/>
        <label htmlFor="radio3">Starships</label>

    </div>
}

export default Tabs;