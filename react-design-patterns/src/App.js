import React from 'react';

import { ControlledForm } from './controlledComponent/ControlledForm';
import {UncontrolledForm} from './UncontrolledComponents/UncontrolledForm';

import {Flexbox} from './Flexbox';
import { ModalSpacing } from './Modal';


function App() {

    return (
      <>
        <br/>
        <UncontrolledForm/>
        <br/><br/>
        <ControlledForm/>

        <br/> <br />

        <Flexbox />

        <br/> <br />
        <ModalSpacing/>
      </>
    );

}

export default App;




































/* import React from 'react';

//import {CurrentUserLoader} from './Container-Components/CurrentUserLoader';
//import { UserLoader } from './Container-Components/UserLoader';
import {UserInfo} from './UserInfo';
import {ProductInfo} from './ProductInfo';
import { DataSource } from './Container-Components/DataSource';
//import {ResourceLoader} from './Container-Components/ResoureLoader';
import axios from 'axios';


const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{message}</h1>;

function App() {

    return (
        <>
          <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
              <UserInfo/>
          </DataSource>

          <DataSource getDataFunc={getServerData('/products/2345')} resourceName="product">
            <ProductInfo/>
          </DataSource>
          
          <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
              <Text />
          </DataSource>
        </>
    );

}

export default App; */



























/* const people = [
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
]; */

/* function App() {
    return (
       <>
       <RegularList 
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem}
       />
       <NumberedList 
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
            
       </>
    )
}
 */
/* 
function App() {
    return (
      <>
        <br/>
        <Modal>
            <LargeProductListItem product={products[0]}/>
        </Modal>
        &nbsp;&nbsp;&nbsp;
        <Modal>
            <LargePersonListItem person={people[0]}/>
        </Modal>
      </>
    )
} */