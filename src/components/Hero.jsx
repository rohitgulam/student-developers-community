import React from 'react';
import styled from 'styled-components';
import HeroDesc from './HeroDesc';
import HeroImg from './HeroImg';
import { devices } from './devices';

function Hero() {
  return (
    <div style={{backgroundColor: "#f8edeb"}} >
      <Div>
          <HeroDesc/>
          <HeroImg/>
      </Div>
    </div>
  )
}

const Div = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;

    @media ${devices.mobileL}{
      flex-direction: column-reverse;
    }

`;



export default Hero