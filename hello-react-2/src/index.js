import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';



function Hello({library, message, number}) {
  //console.log(props);
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>{message}</p>
      <p>{number} Props total</p>
    </div>
  )
}


ReactDOM.render(
 <Hello 
 library="React" 
 message="Add dynamic data!"
 number={3}
 />,
  document.getElementById('root')
);


