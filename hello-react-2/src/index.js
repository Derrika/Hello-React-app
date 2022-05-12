import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const lakelist = [
  {id: "1", name: "Echo", trailhead: "Echo"},
  {id: "2", name: "Maud", trailhead: "Wrights"},
  {id: "3", name: "Velma", trailhead: "Bayview"}
];

//Structure
function App({lakes}) {
  return (
    <div>
      {lakes.map(lake => (
        <div>
          <h2>{lake.name}</h2>
          <p>Accesed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}


ReactDOM.render(
 <App lakes={lakelist}/>,
  document.getElementById('root')
);


