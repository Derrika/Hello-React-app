import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

function Lake(){
  return (
    <h1>Lake</h1>
  )
}

function SkiResort() {
  return (
    <h1>Ski Resort</h1>
  )
}



ReactDOM.render(
 <>
  <Lake/>
  <SkiResort/>
  </>,
  document.getElementById('root')
);


