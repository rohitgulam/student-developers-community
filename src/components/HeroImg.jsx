import React from 'react';
import styled from 'styled-components';
import Img from '../img/hero.svg';
import { devices } from './devices';

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

    @media ${devices.mobileS}{
      width: 96%;
      margin-top: unset;
    }
    @media ${devices.tablet}{
      width: 96%;
      margin-top: unset;
    }

    @media ${devices.laptop}{
      width: 40%;
      margin-top: 70px;
    }


`;  


export default HeroImg