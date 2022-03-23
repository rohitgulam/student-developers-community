import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import { devices } from './devices';

function Button({link, text}) {
  return (
    <Btn href={link} >{text}<BsArrowRight/> </Btn>
  )
}

const Btn = styled.a`
    text-decoration: none;
    color: black;
    padding: 15px 30px;
    background: #6dafa7; 
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    svg{
      padding-left: 5px;
      font-size: 1.5rem;
    }

    @media ${devices.mobileS}{
      padding: 12px 26px;
    }
`;

export default Button