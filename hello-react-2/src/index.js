import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const lakelist = [
  {id: "1", name: "Echo", trailhead: "Echo"},
  {id: "2", name: "Maud", trailhead: "Wrights"},
  {id: "3", name: "Velma", trailhead: "Bayview"}
];

const list = [1, 2, 3, 4, 5];

//Structure
function App({lakes}) {
  return (
    <div>
      {lakes.map(lake => (
        <div key = {lake.id}>
          <h2>{lake.name}</h2>
          <p>Accesed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

function Apps({ items }){
  return (
    <ul>
      {items.map(item => (
        <li key={item.toString()}>{item}</li>
      ))}
    
    </ul>
  );
}


ReactDOM.render(
 <Apps items={list}/>,
  document.getElementById('root')
);


