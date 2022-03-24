import React from 'react';
import styled from 'styled-components';
import { devices } from './devices';

function About() {
  return (
    <Div>
        <h2 id='about'>About</h2>
        <p>Students Developers Community is a community for student developers by student developers. It's main goal is to help students when they're learning to code and forge them to be great developers according to industry standards </p>
        <p>What are you waiting for? <br /> <a href="https://discord.gg/Q8Ee6XbFzE">Join the community now</a></p>
    </Div>
  )
}

const Div = styled.div`
    width: 80%;
    margin: 40px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    

    p{
        width: 700px;
    }

    a{
        text-decoration: none;
        color: black;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        padding-bottom: 3px;
    }

    a:before, 
    a:after{
        content: '';
        position: absolute;
        border-bottom: 4px solid #6dafa7;
        border-radius: 1em;
        bottom: 0;
        transition: transform 5000ms cubic-bezier(0.075, 0.82, 0.165, 1);
        
    }

    a:before{
        width: 2.5em;
        transform-origin: left;
    }

    a:after{
        width: 92%;
        left: 1em;
        transform: translateX(110%);
    }

    a:hover:before{
        transform: scaleX(0.4);
    }

    a:hover:after{
        transform: translateX(0);
    }

    @media ${devices.mobileS} {
        width: 94%;
        p{
            width: unset;
        }
    }
`;


export default About