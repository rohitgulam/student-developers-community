import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo.png';
import Button from './Button';

function Footer() {
  return (
    <FooterDiv>
        <div>
            <NavLink to='/' className="site-title">
                <img src={logo} alt="Student Developer Community Logo" width="140px" height="80px"/>
            </NavLink>
            <Button text="Join the community" />
        </div>
        <LFooter>
            <p>Made with 💜 </p>
        </LFooter>
    </FooterDiv>
  )
}

const FooterDiv = styled.footer`
    background-color: #1d3557;
    color: white;
    padding: 10px 0px;

    div{
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const LFooter = styled.div`
    width: 100%;
    p{
        text-align: center;
        width: 100%;
    }
`;

export default Footer