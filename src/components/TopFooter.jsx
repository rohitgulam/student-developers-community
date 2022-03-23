import React from 'react';
import SButton from './SButton';
import styled from 'styled-components';
import {devices} from './devices'

function TopFooter() {
  return (
    <Div>
      <h3>👋</h3>
      <h2>Join a community of student developers.</h2>
      <p>As a student, books and classes aren't enough. Student Developers need more than books and classes. <br /> Our community is where you can connect with other student developers and learn from their expereinces and get help when you need it the most</p>
      <SButton text='Join the community'/>
      <p className="small">Entry will be closed once we reach 100 members 😉 </p>
    </Div>
  )
}

const Div = styled.div`
  background-color: #6dafa7;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    font-size: 3rem;
  }

  h2{
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }

  p{
    width: 700px;
    text-align: center;
    font-size: 1.1rem;
    margin: 20px 0;
  }

  a{
    margin-top: 10px;
  }

  .small{
    font-size: 0.8rem;
    width: 300px;
    margin: unset;

  }
  
  @media ${devices.mobileS}{
    padding: 30px 0;

    h2{
      font-size: 1.8rem;
      text-align: center;
    }

    p{
      width: 90%;
      text-align: center;
      font-size: 1.1rem;
      margin: 15px 0;
    }


    .small{
      font-size: 0.75rem;
      width: 280px;
      margin: unset;

    }
  } 
  @media ${devices.tablet}{

  } 
  @media ${devices.laptop}{
    p{
    width: 700px;
    text-align: center;
    font-size: 1.1rem;
    margin: 20px 0;
  }
  } 

`;

export default TopFooter