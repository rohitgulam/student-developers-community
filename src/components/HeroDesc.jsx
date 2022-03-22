import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SButton from './SButton';
import { devices } from './devices';

function HeroDesc() {
  return (
    <Div>
      <h1>Student Developers Community: Where Students Become More </h1>
      <p>Has this ever happened to you?</p>
      <ul>
        <li>You're stuck with a coding error and can't find any solution.</li>
        <li>You want to study programming but you don't know where to start.</li>
        <li>You want to attend programming events and meetups but you can't find any.</li>
        <li>You need someone to collaborate with on a new project but you can't find anyone</li>
        <li>You want someone to partner up with and learn together but you can't find anyone.</li>
        <li>You want to take a programming course but it's very expensive and you can't afford it.</li>
        <li>You want to learn a new programming skill but you don't know where to find free learning resources.</li>
      </ul>
      <BtnDiv>
        <p>You're in the right place. Here's what you can do next:</p>
        <Button text='Join Now'/>
        <SButton text='Learn More'/>
      </BtnDiv>
    </Div>
  )
}

const Div = styled.div`
    @media ${devices.mobileS}{
      width: 96%;
      margin: 0 auto;

      h1{
        margin: 0 0 10px 0;
        font-size: 1.4rem;
      }
      
      p{
        font-size: 1rem;
        
      }

      ul{
        font-size: 1rem;
      }
    }

    @media ${devices.tablet}{
      width: 96%;
      margin: 0 auto;

      h1{
        margin: 0 0 10px 0;
        font-size: 1.5rem;
      }
      
      p{
        font-size: 1.1rem;
        
      }

      ul{
        font-size: 1.1rem;
      }
    }

    @media ${devices.laptop}{
        width: 60%;
        h1{
          margin: 60px 0;
        }

        p{
          margin: 10px 0;
        }
    }

    



    ul{
      li{
        padding: 10px 0 ;
      }
    }
`;

const BtnDiv = styled.div`
  max-width: 60%;
  margin: 30px 0;

  a{
    margin: 10px 50px 10px 0;
  }

  @media ${devices.mobileS}{
    max-width: unset;
    
    a{
      margin: 5px 10px 5px 0;
    }

  }

  @media ${devices.tablet}{
    max-width: unset;
    
    a{
      margin: 5px 15px 5px 0;
    }

  }
`;


export default HeroDesc