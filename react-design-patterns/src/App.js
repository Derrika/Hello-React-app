import logo from './logo.svg';
import './App.css';

import {SplitScreen} from './SplitScreen';

const LeftHandCompenent = () => {
  return <h1>Left!</h1>
}

const RightHandComponent = () => {
  return <h1>Right!</h1>
}
function App() {
  return (
      <SplitScreen 
          left={LeftHandCompenent}
          right={RightHandComponent}
      />
  );
}

export default App;
