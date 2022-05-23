import React from 'react';

import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
    column-gap: 5%;
    
`;

const Grid1 = styled.div`
    display: flex;
    justify-content: space-between;
   
     
`;

const Item = styled.div`
    width: 30%;
   
`;



//Justify-content vs Column-gap
export const Flexbox = () => {
    return (
        <>
         <Grid>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
            <Item>item 4</Item>
            <Item>item 5</Item>
         </Grid>
            <br/> <br/>
         <Grid1>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
            <Item>item 4</Item>
            <Item>item 5</Item>
         </Grid1>
        
        </>
    )
}