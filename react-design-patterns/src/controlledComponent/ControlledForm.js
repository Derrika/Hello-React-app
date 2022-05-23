import React, {useState, useEffect} from 'react';


export const ControlledForm = () => {
    const [nameInputErroor, setNameInputError] = useState('');
    //create a two-way binding of state and the value entered
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');
    const [hobbies, setHobbies] = useState('');


    useEffect(() => {
        if(name.length < 2){
            setNameInputError('Name must be two or more characters');
            //console.log('Name must be tw or more characters');
        }else{
            setNameInputError('');
        }
    }, [name])

    return(
        <form>
            {nameInputErroor && <p>{nameInputErroor}</p>}
            <input 
                name='name' 
                type="text" 
                placeholder='Name' 
                value={name} 
                onChange={evnt => setName(evnt.target.value)}
            />
            <input 
                name='name' 
                type="number" 
                placeholder='Age' 
                value={age} 
                onChange={evnt => setAge(Number(evnt.target.value))}
            />
            <input 
                name='hairColor' 
                type="text" 
                placeholder='Hair Color' 
                value={hairColor} onChange={evnt => setHairColor(evnt.target.value)}
            />
            <input 
            name='hobbies' 
            type="text" 
            placeholder='Hobby' 
            value={hobbies} onChange={evnt => setHobbies(evnt.target.value)}
        />
        <input type="submit" value="Submit"/>
        </form>
    );
}