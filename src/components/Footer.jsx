import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo-light.png';
import Button from './Button';
import {devices} from './devices'

function Footer() {
  return (
    <FooterDiv>
        <div>
            <NavLink to='/' className="site-title">
                <img src={logo} alt="Student Developer Community Logo" width="105px" height="60px"/>
            </NavLink>
            <Button link='https://discord.gg/Q8Ee6XbFzE' className="btn" text="Join the community" />
        </div>
        <hr />
        
        <LFooter>
            <p className='small' > &copy; Student Developers Community. All rights reserved </p>
        </LFooter>
    </FooterDiv>
  )
}

const FooterDiv = styled.footer`
    background-color: #1f3a68;
    color: white;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    hr{
        width: 80%;
        border: 0.8 solid #d9dbde;
        margin: 10px 0;
    }

    @media ${devices.mobileS}{

        div{
            width: 94%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .btn{
                display: none;
            }
        }

    }
    @media ${devices.tablet}{
        
    }
    @media ${devices.laptop}{
        
    }
`;

const LFooter = styled.div`
    width: 100%;

    .small{
        font-size: 0.8rem;
        text-align: center;
        width: 100%;
        font-weight: 200;
    }
`;

export default Footer