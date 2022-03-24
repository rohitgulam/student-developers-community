import React from 'react';
import styled from 'styled-components';
import HeroDesc from './HeroDesc';
import HeroImg from './HeroImg';
import { devices } from './devices';

function Hero() {
  return (
    <div id='home' style={{backgroundColor: "#f8edeb"}} >
      <Div>
          <HeroDesc/>
          <HeroImg/>
      </Div>
    </div>
  )
}

const Div = styled.div`
    display: flex;

    @media ${devices.mobileS}{
      flex-direction: column-reverse;
    }

    @media ${devices.tablet}{
      flex-direction: column-reverse;
    }

    @media ${devices.laptop}{
      flex-direction: row;
      align-items: center;
      width: 90%;
      margin: 0 auto;
    }
`;

// #f4c2c9

// #f8edeb


export default Hero