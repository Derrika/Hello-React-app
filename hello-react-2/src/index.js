import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

let city = {
   name: "Madrid",
   country: "Spain",
};

ReactDOM.render(
  <h2 id="heading" className='cool-text'>{city.name} is in {city.country}</h2>,
  document.getElementById('root')
);


