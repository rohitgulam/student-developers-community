import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineSwapRight, AiOutlineRight } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';

function Button({text}) {
  return (
    <Btn to='/'>{text}<BsArrowRight/> </Btn>
  )
}

const Btn = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 15px 30px;
    background: #a8dadc; 
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    svg{
      padding-left: 5px;
      font-size: 1.5rem;
    }
`;

export default Button