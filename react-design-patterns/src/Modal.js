import React from 'react';
import styled from 'styled-components';

//Use this when 
const Modal = styled.div`
    display: flex;
`;



const ModalMain = styled.div`
    margin: auto;
`;

const A = styled.a`
    text-decoration: none;
    color: magenta;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ModalSpacing = () => {
    return (
        <Modal>
            <ModalMain>
                <A href="https://www.google.com/">Google</A>
                <A href='http://localhost:3000/'>Home</A>
                <A href='https://glitch.com'>Glitch</A>

            </ModalMain>
        </Modal>
    )
}