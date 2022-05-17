import React from 'react';

import { RegularList } from './RegularList';
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from './people/LargePersonListItem';

//import { SplitScreen } from './SplitScreen';

const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },

  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },

  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  }
];

const products = [
  {
    name: 'Flat-Screen Tv',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },

  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  },

  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum',
    rating: 4.2,
  }
];

function App() {
    return (
       <>
       <RegularList 
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem}
       />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />

      <RegularList 
        items={products}
        resourceName="product"
        itemComponent={SmallPersonListItem}
      />
      <RegularList 
        items={products}
        resourceName="product"
        itemComponent={LargePersonListItem}
      />
            
       </>
    )
}



export default App;



/*const LeftHandCompenent = ({ name }) => {
  return <h1 style={{ backgroundColor: '#DAF7A6' }}>{name}</h1>
}

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: '#CCCCFF'}}>{message}</h1>
}
 function App() {
  return (
      <SplitScreen 
          left={LeftHandCompenent}
          right={RightHandComponent}
          leftWeight={1}
          rightWeight={3}
      />
  );
} 

function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={3}>
          <LeftHandCompenent name="Dasean"/>
          <RightHandComponent message="Hello"/>
      </SplitScreen>
  );
}  */
