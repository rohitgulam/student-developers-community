import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Button from './Button';
import { devices } from './devices';

function Navbar() {
  return (
    <Nav>
        <NavLink to='/' className="site-title">
            Student Developers Community
        </NavLink> 
        <ul>
            <li>
                <NavLink to='/'>About</NavLink>
            </li>
            <li>
                <NavLink to='/'>Benefits</NavLink>
            </li>
        </ul>
        <Button text='Join the community' />
    </Nav>
  )
}

const Nav = styled.nav`
    height: 8vh;
    min-height: 80px;
    border-bottom: 1px solid #d9dbde;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 500;

    @media ${devices.mobileS}{
        padding: 0 10px;
        font-size: 1.1rem;
        font-weight: 400;
    }

    a{
        color: black;
        text-decoration: none;
    }

    

    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        min-width: 250px;

        li{
            a{
                color: #737d89;
                text-decoration: none;
                padding: 16px 28px;
                border-radius: 4px;
                transition: all 180ms ease-in-out; 
        
                :hover{
                    background: #eef0f1;
                    color: black;
                }

                @media ${devices.mobileS}{
                    /* :hover{
                        background: unset;
                        color: unset;
                    } */
                }
            }
        }
    }
`;


export default Navbar;