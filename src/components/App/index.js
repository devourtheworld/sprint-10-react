import React, { Component } from 'react';
import './app.css';
import swService from '../../services/sw-service';
import Tabs from '../Tabs';
import NavButtons from '../NavButtons';
import Person from '../Person';
import Planet from '../Planet';
import Starship from '../StarShip';

export default class App extends Component {
    state = {
        category: 'people',
        people: {
            id: 1,
            gender: '',
            birthYear: '',
            eyeColor: ''
        },
        planets: {
            id: 2,
            diameter: '',
            rotationPeriod: '',
            gravity: ''
        },
        starships: {
            id: 3,
            model: '',
            manufacturer: '',
            length: ''
        },
    }

    swapiService = new swService();

    switchCategory = (category) => {
        this.swapiService.getItem(category, this.state[category].id)
        .then((data) => {
            const newState = Object.assign(this.state[category], data);            
            this.setState({category, ...newState});
        });
    }

    selectPrev = () => {
        if(this.state[this.state.category].id > 1) {
            this.swapiService.getItem(this.state.category, this.state[this.state.category].id - 1)
            .then( (data) => {
                data.id = this.state[this.state.category].id - 1;
                const newState = Object.assign(this.state[this.state.category], data);            
                this.setState({newState});
            });
        }   
        
    }

    selectNext = () => {
        this.swapiService.getItem(this.state.category, this.state[this.state.category].id + 1)
        .then( (data) => {
            data.id = this.state[this.state.category].id + 1;
            const newState = Object.assign(this.state[this.state.category], data);            
            this.setState({newState});
        });
    }

    componentDidMount() {
        this.swapiService.getItem(this.state.category, this.state[this.state.category].id)
        .then( (data) => {
            this.setState({
                people: {id:this.state[this.state.category].id, ...data},
            });
        });
    }

    render() {
        let itemDetail = {}; 
        switch(this.state.category) {
            case 'planets':
                itemDetail = <Planet data={this.state.planets}/>
                break;
            case 'starships':
                itemDetail = <Starship data={this.state.starships}/>
                break;
            default:    
                itemDetail = <Person data={this.state.people}/>
        }
        return (
            <div className="App">
              <h2 id="swTitle"> StarWars </h2>
              <Tabs switchCategory={this.switchCategory}/>
              <NavButtons selectPrev={this.selectPrev} selectNext={this.selectNext}/>
              {itemDetail}
            </div>
          );
    }
}