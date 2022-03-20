import React from 'react';
import styled from 'styled-components';
import {IoIosPeople} from 'react-icons/io';
import {FaHandshake} from 'react-icons/fa';
import {VscDebugConsole} from 'react-icons/vsc';

function IconSection() {
  return (
    <Div>
        <div>
            <h2>Features</h2>
            <Items className="items">
                <div>
                    <IoIosPeople/>
                    <h3>Meetups</h3>
                    <p>Attend various events and learn from industry experts.</p>
                </div>

                <div>
                    <FaHandshake/>
                    <h3>Networking</h3>
                    <p>Network and collaborate with like-minded student developers and form meaningful relationships</p>
                </div>

                <div>
                    <VscDebugConsole/>
                    <h3>Bug Squashing</h3>
                    <p>Get help in solving different errors in your code and coding challenges</p>
                </div>
            </Items>
        </div>
    </Div>
  )
}

const Div = styled.div`
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    h2{
        text-align: center;
    }
`;

const Items = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 20px;

    div{
        // background: #999;
        width: 400px;
        margin: 0 20px;

        svg{
            font-size: 2.5rem;
            display: flex;
            justify-content: center;
            width: 100%;
            color: #6dafa7;
        }

        h3{
            text-align: center;
        }

        p{
            text-align: center;
        }

    }
`;



export default IconSection