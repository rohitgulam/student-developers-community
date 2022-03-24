import React from 'react';
import styled from 'styled-components';
import {devices} from './devices';

function Benefits() {
  return (
      <Div id='benefits' >
        <h2>Benefits</h2>
        <p>A few things that you would benefit if you joined this community</p>
          <GridContainer>
            <div>
                <h5>💻</h5>
                <h4>Coding Questions</h4>
                <p>Get help with your code errors by having more people look at your code</p>
            </div>
            <div>
                <h5>🛠️</h5>
                <h4>Programming Resources</h4>
                <p>Discover new and interesting programming resources and tools</p>
            </div>
            <div>
                <h5>👥</h5>
                <h4>Events</h4>
                <p>Get access to different events and meetups with industry experts</p>
            </div>
            <div>
                <h5>✍🏽</h5>
                <h4>Coding Challenges</h4>
                <p>Test your coding and problem solving skills with various challenges</p>
            </div>
            <div>
                <h5>📝</h5>
                <h4>Class Questions</h4>
                <p>Get help with your class questions</p>
            </div>
            <div>
                <h5>👔</h5>
                <h4>Jobs and Opportunities</h4>
                <p>Find interesting jobs and opportunities in the tech industry</p>
            </div>
            <div>
                <h5>🤝</h5>
                <h4>Collaboration</h4>
                <p>Find bright minds to collaborate together on interesting projects</p>
            </div>
            <div>
                <h5>📖</h5>
                <h4>UE Preparation</h4>
                <p>Get help preparing for your university examination</p>
            </div>
            <div>
                <h5>🫂</h5>
                <h4>Coding Questions</h4>
                <p>Get help with your coding questions</p>
            </div>
        </GridContainer>
      </Div>
  )
}

const Div = styled.div`
    text-align: center;

    h2{
        margin: 10px 0;
    }


`;
 
const GridContainer = styled.div`
    width: 50%;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    text-align: center;

    h5{
        font-size: 3rem;
        padding-bottom: 10px;
    }

    h4{
        font-size: 1.2rem;
        padding-bottom: 10px;
    }

    div{
        background: #eef0f1;
        border-radius: 6px;
        height: 300px;
        padding: 20px 20px;
        /* margin: 20px 0; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: box-shadow 140ms linear;
        
        :hover{
            box-shadow: 10px 10px 20px rgba(199, 197, 197, 0.8);
        }

        p{
            line-height: 1.6rem;
            letter-spacing: 2px;
        }

    }

    @media ${devices.mobileS}{
        width: 96%;
        margin: 20px auto;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;

        h5{
            font-size: 2rem;
            padding-bottom: 5px;
        }

        h4{
            font-size: 1.1rem;
            padding-bottom: 5px;
        }

        }

        div{
            background: #eef0f1;
            border-radius: 6px;
            height: 250px;
            padding: 10px;

            :hover{
                box-shadow: unset;
            }
        

            p{
                line-height: 1.2rem;
                letter-spacing: 1px;
            }

        }

        
    @media ${devices.tablet}{
        width: 94%;
        margin: 30px auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        text-align: center;

        div{
            :hover{
                box-shadow: unset;
            }
        }
    }
    @media ${devices.laptop}{
        width: 50%;
        margin: 30px auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        text-align: center;

        div{
        :hover{
            box-shadow: 10px 10px 20px rgba(199, 197, 197, 0.8);
        }
    }
    }

`;

export default Benefits