import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Button from './Button';

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
                <NavLink to='/'>Why Join?</NavLink>
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
            }
        }
    }
`;


export default Navbar;