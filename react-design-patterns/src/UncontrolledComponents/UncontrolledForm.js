import React from 'react';


export const UncontrollForm = () =>{
    return (
        <form>
            <input name="name" type="text" placeholder='Name'/>
            <input name="age" type="number" placeholder='Age'/>
            <input name="hairColor" type="text" placeholder='Hair Color'/>
            <input name="hobbies" type="text" placeholder='Hobby'/>
            <input name="submit" type="submit" value="Submit"/>
          
        </form>
    )
}