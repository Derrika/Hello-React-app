import React from 'react';


export const partiallyApply = (Component, parialProps) => {
    return props => {
       return <Component {...parialProps} {...props} />
    }
}

export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color,
        }} {...props}>{text}</button>
    );
}

export const DangerButton = partiallyApply(Button, {color: 'red'});
export const SuccessButton = partiallyApply(Button, { color: 'green', size: 'large'});