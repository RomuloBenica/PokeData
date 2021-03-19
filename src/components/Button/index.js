import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    max-width: 150px;
    height: 40px;
    
    border: 2px solid #fff;
    border-radius: 4px;
    background: red;

    font-size: 15px;
    color: #fff;
    cursor: pointer;
    :hover{
        background: yellow;
        color: black;
    }
`;

export default Button;