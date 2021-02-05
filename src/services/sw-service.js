import { baseUrl } from '../config';
import axios from 'axios';

export default class swService {
    
    _getRequest = async (url) => {
        try{
            console.log('request url: ', url);
            const response = await axios({
                url: url,
                method: 'get'
            });
            return response;
        } catch (err) {
            console.log('request error: ', err);
            return 0;
        }
    }

    _format = {
        people: (response, img) => {
            const data = {
                name: '',
                gender: '',
                birthYear: '',
                eyeColor: '',
                img: 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
            };

            if( response.hasOwnProperty('data') ) {
                data.name = response.data.name;
                data.gender = response.data.gender;
                data.birthYear = response.data.birth_year;
                data.eyeColor = response.data.eye_color;
                if(img.length > 1) {
                    data.img = img;
                }       
            }

            return data;
        },

        planets: (response, img) => {
            const data = {
                name: '',
                diameter: '',
                rotationPeriod: '',
                gravity: '',
                img: 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
            };

            if( response.hasOwnProperty('data') ) {
                data.name = response.data.name;
                data.diameter = response.data.diameter;
                data.rotationPeriod = response.data.rotation_period;
                data.gravity = response.data.gravity;
                if(img.length > 1) {
                    data.img = img;
                }

            }

            return data;
        },

        starships: (response, img) => {
            const data = {
                name: '',
                model: '',
                manufacturer: '',
                length: '',
                img: 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
            };

            if( response.hasOwnProperty('data') ) {
                data.name = response.data.name;
                data.model = response.data.model;
                data.manufacturer = response.data.manufacturer;
                data.length = response.data.length;
                console.log('img:', img);
                if(img.length > 1) {
                    console.log('write data ing');
                    data.img = img;
                }
            }

            return data;
        }        
    }


    getItem = async (category, id) => {
        const response =  await this._getRequest(`${baseUrl.api}${category}/${id}/`);
        const imgCategory = category === 'people' ? 'characters' : category;
        const imgUrl = `${baseUrl.img}${imgCategory}/${id}.jpg`;
        let img =  await this._getRequest(imgUrl);

        return this._format[category](response, img === 0 ? '' : imgUrl);
        
    }
 
}