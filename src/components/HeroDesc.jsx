import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
        <Button text='Learn More'/>
      </BtnDiv>
    </Div>
  )
}

const Div = styled.div`
    width: 60%;h1{
      margin: 60px 0;
    }

    p{
      margin: 10px 0;
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
`;


export default HeroDesc