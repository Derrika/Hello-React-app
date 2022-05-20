import React, {useState} from 'react';

import styled from 'styled-components';

const SpinnerContainer = styled.div`
    
`;

const LoadingSpinner = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
`;


export const LoadingSpinners = () => {
    const [isLoading, setLoading] = useState(false);

    const handleFetch = () => {
        setIsLoading(true);
        fetch("https://reqres.in/api/users?");
    }

    return (
        <>
        <button onClick={handleFetch}>Get Users</button>
        <SpinnerContainer>
            <LoadingSpinner />
        </SpinnerContainer>
        </>
    )
}