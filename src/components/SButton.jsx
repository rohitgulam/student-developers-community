import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { devices } from './devices';

function SButton({text}) {
  return (
    <Btn to='/'>{text}<BsArrowRight/> </Btn>
  )
}

const Btn = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 15px 30px;
    background: #1f5789; 
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

export default SButton