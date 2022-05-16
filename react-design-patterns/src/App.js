import React from 'react';

import { SplitScreen } from './SplitScreen';

const LeftHandCompenent = ({ name }) => {
  return <h1 style={{ backgroundColor: '#DAF7A6' }}>{name}</h1>
}

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: '#CCCCFF'}}>{message}</h1>
}
/* function App() {
  return (
      <SplitScreen 
          left={LeftHandCompenent}
          right={RightHandComponent}
          leftWeight={1}
          rightWeight={3}
      />
  );
} */

function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={3}>
          <LeftHandCompenent name="Dasean"/>
          <RightHandComponent message="Hello"/>
      </SplitScreen>
  );
} 

export default App;
