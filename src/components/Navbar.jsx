import { useState } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Button from './Button';
import { devices } from './devices';
import logo from '../img/logo.png';

function Navbar() {

    const [open, setOpen] = useState(false);

    const toggle = () =>{
        setOpen(!open)
    }

  return (
    <Header>
        <Nav>
            <NavLink to='#' className="site-title">
                <img src={logo} alt="Student Developer Community Logo" width="140px" height="80px"/>
            </NavLink> 
        {/* <Button link='https://discord.gg/Q8Ee6XbFzE' text='Join the community' /> */}

        <div>
            <input type="checkbox" className={open ? 'toggler checked' : 'toggler'} open={open} onChange={toggle}/>
            <div className="hamburger"><div></div></div>
        </div>
        </Nav>
        <div className={open ? 'menu show' : 'menu'}>
            <div className={open ? 'show' : ''}>
                <div>
                    <ul>
                        <li>
                            <a href='#about' onClick={() => setOpen(!open)} >About</a>
                        </li>
                        <li>
                            <a href='#benefits' onClick={() => setOpen(!open)} >Benefits</a>
                        </li>
                        <li>
                            <a href='#testimonials' onClick={() => setOpen(!open)} >Reviews</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Header>
  )
}

const Header = styled.header`
    /* .burger{
        width: 60px;
        height: 60px;
        background-color: blue;
        position: absolute;
    } */

    div{
        width: 60px;
        height: 60px;
        position: relative;
        z-index: 21;

        .toggler{
        cursor: pointer;
        width: 60px;
        height: 60px;
        opacity: 0;
        z-index: 22;
        position: absolute;
        top: 0;
        left: 0;
        }

        .hamburger{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 21;
            width: 60px;
            height: 60px;
            padding: .5rem;
            background: #6dafa7;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hamburger > div{
            position: relative;
            width: 100%;
            height: 2px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
        }
        .hamburger > div:before,
        .hamburger > div:after{
            content: '';
            position: absolute;
            z-index: 21;
            top: -10px;
            width: 100%;
            height: 2px;
            background: inherit;
        }

        .hamburger > div:after{
            top: 10px;
        }

        /* Toggler animate */
        .toggler.checked + .hamburger > div{
            transform: rotate(135deg);
        }

        /* Tun lines into X */
        .toggler.checked + .hamburger > div:before,
        .toggler.checked + .hamburger > div:after{
            top: 0;
            transform: rotate(90deg);
        } 

        /* ROtate on hover when checked */
        .toggler.checked:hover + .hamburger > div{
            transform: rotate(225deg);
        }
    }

    /* .toggler:checked .menu{
        visibility: visible;
    }

    .toggler:checked .menu > div{
        transform: scale(1);
        transition-duration: 1s;
    } */

    /* Menu Class */
    .menu{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: ${ ({ open }) => open ? 'visible' : 'hidden' };
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content:center;
        z-index: 20;
    }

    .menu.show{
        visibility: visible;
    }

    .menu > div{
        background: rgba(0,0,0,0.7);
        border-radius: 50%;
        width: 200vw;
        height: 200vw;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;
    }

    .menu > div.show{
        transform: scale(1);
    }

    .menu > div > div{
        text-align: center;
        max-width: 90vw;
        max-height: 100vh;
        opacity: 1;
        transition: opacity 0.4s ease;
    }

    .menu > div > div > ul > li{
        list-style: none;
        color: white;
        font-size: 1.5rem;
        padding: 1rem;
    }

    .menu > div > div > ul > li > a{
        color: inherit;
        text-decoration: none;
        transition: color 0.4s ease;
        padding: 16px 28px;
        border-radius: 4px;
    }

    .menu > div > div > ul > li > a:hover{
        background-color: #6dafa7;
    }
`;

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
`;


export default Navbar;