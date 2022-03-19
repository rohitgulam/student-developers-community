import React from 'react';
import styled from 'styled-components';
import HeroDesc from './HeroDesc';
import HeroImg from './HeroImg';

function Hero() {
  return (
    <Div>
        <HeroDesc/>
        <HeroImg/>
    </Div>
  )
}

const Div = styled.div`
    display: flex;
`;



export default Hero