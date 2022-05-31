import React from 'react';

//import { UseCurrentUser } from './CustomHooks/useCurrentUser';
//import { useUser } from './CustomHooks/useUser';
import { useResource } from './CustomHooks/useResource';



export const UserInfo = ({userId}) => {
    const user = useResource(`/users/${userId}`);

    const {id, name, age, hairColor, hobbies} = user || {};
    
    return  user ? (
        <>
         <p>{id}</p>
         <h3>{name}</h3>
         <p>Age: {age} years</p>
         <p>Hair Color: {hairColor}</p>
         <h3>Hobbies: </h3>
         <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
         </ul>
        </>
    ) : <p>Loading...</p>;

















/* 
export const UserInfo = () => {
    const user = UseCurrentUser();
    const {id, name, age, hairColor, hobbies} = user || {};
    
    return  user ? (
        <>
         <p>{id}</p>
         <h3>{name}</h3>
         <p>Age: {age} years</p>
         <p>Hair Color: {hairColor}</p>
         <h3>Hobbies: </h3>
         <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
         </ul>
        </>
    ) : <p>Loading...</p>; */
}