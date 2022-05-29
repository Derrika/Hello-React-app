import React, {useState} from 'react';
//import { UncontrolledOnboardFlow } from './UncontrolledComponents/UncontrolledOnboardingFlow';

import {ControlledOnboardFlow } from './controlledComponent/ControlledOnboardFlow';


const StepOne =({goToNext}) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'James Bond' })}>Next</button>
  </>
);

const StepTwo =({goToNext}) => (
   <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 78 })}>Next</button>
  </>
);
const StepThree =({goToNext}) => (
  <>
  <h1>Step 3</h1>
  <p>Congratulations! You qualify for our senior discount</p>
  <button onClick={() => goToNext({})}>Next</button>
  </>
);

const StepFour =({goToNext}) => (
  <>
  <h1>Step 4</h1>
  <button onClick={() => goToNext({HairColor: 'red'})}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      <ControlledOnboardFlow 
        currentIndex={currentIndex}
        onNext = {onNext}
      >
          <StepOne />
          <StepTwo />
          {onboardingData.age >= 62 && <StepThree/> }
          
          <StepFour />
      </ControlledOnboardFlow>
    </>
  )
}

export default App;

































/* import React, {useState} from 'react';

//import styled from 'styled-components';

import {ControlledModal} from './controlledComponent/ControlledModal';

 const buttonStyle = styled.button`
    padding: 5px;
    border: 1px solid;
`;

const aStyle = styled.button`
    text-align: center;
    text-decoration: none;
`;

const h1Style = styled.h1`
    text-align: center;
`; 

function App() {
const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
      <>
      <br/><br/>
      <ControlledModal 
          shouldShow={shouldShowModal}
          onRequestClose={() => {
            setShouldShowModal(false);
          }}
      >
          <h1>Welcome Back!! <span role='img' aria-label='smileyface'>😁</span></h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
          {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
      </button>

      </>
  )
}

export default App;  */




































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




/* import React from 'react';

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

}*/






















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