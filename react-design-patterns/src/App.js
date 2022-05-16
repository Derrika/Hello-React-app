import React from 'react';

import { SplitScreen } from './SplitScreen';

const LeftHandCompenent = () => {
  return <h1 style={{ backgroundColor: '#DAF7A6' }}>Left!</h1>
}

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: '#CCCCFF'}}>Right!</h1>
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

export default App;
