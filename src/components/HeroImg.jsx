import React from 'react';
import styled from 'styled-components';
import Img from '../img/hero.svg'

function HeroImg() {
  return (
    <Div>
        <img src={Img} alt="Students collaborating" />
    </Div>
  )
}

const Div = styled.div`
    width: 40%;
    margin-top:70px;
`;


export default HeroImg