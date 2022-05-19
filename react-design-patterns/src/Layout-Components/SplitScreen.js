import React from 'react'


import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex: ${props => props.weight};
`;
/* export const SplitScreen = ({
    left: Left,
    right: Right,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    return (
        <Container>
            <Pane weight={leftWeight}>
                <Left />
            </Pane>
            <Pane weight={rightWeight}>
                <Right />
            </Pane>
        </Container>
    );
} */

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    const [left, right] = children;
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
}

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