import React from 'react';

//Uncontroolled form does no care where the data is coming from until
export const UncontrolledForm = () =>{
    // Get the input value
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();
    const hobbiesInput = React.createRef();

    const handleSubmit = (e) => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        console.log(hobbiesInput.current.value);
        e.preventDefault();
    }

    return (
        <form>
            <input name="name" type="text" placeholder='Name' ref={nameInput}/>
            <input name="age" type="number" placeholder='Age' ref={ageInput}/>
            <input name="hairColor" type="text" placeholder='Hair Color' ref={hairColorInput}/>
            <input name="hobbies" type="text" placeholder='Hobby'ref={hobbiesInput}/>
            <input name="submit" type="submit" value="Submit" onClick={handleSubmit}/>
          
        </form>
    );
}