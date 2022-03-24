import React from 'react';
import styled from 'styled-components';
import {FaQuoteLeft} from 'react-icons/fa';
import Photo from '../img/img.jpg';
import {devices} from "./devices"

function Testimonial() {
  return (
    <Div id='testimonials'>
        <h2>What our members are saying about the community</h2>
        <Grid>
            <div>
              <p><FaQuoteLeft/> I am really enjoying this community so far and have really appreciated everyone’s support and thoughtful responses to my messages!</p>
              <div className="photo-name">
                <img src={Photo} alt="" />
                <p className="name">Conan Doyle <p></p> <span>Computer science student</span> </p>
              </div>
            </div>
            <div>
              <p> <FaQuoteLeft/> I am really enjoying this community so far and have really appreciated everyone’s support and thoughtful responses to my messages!</p>
              <div className="photo-name">
                <img src={Photo} alt="" />
                <p className="name">Conan Doyle <p></p> <span>Computer science student</span> </p>
              </div>
            </div>
            <div>
              <p> <FaQuoteLeft/> I am really enjoying this community so far and have really appreciated everyone’s support and thoughtful responses to my messages!</p>
              <div className="photo-name">
                <img src={Photo} alt="" />
                <p className="name">Conan Doyle <p></p> <span>Computer science student</span> </p>
              </div>
            </div>
        </Grid>
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
      margin: 20px 1px;
      text-align: center;
    }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  div{
    width: 400px;
    margin: 10px 20px;

    p{
      color: #495057;
      font-style: italic;
      font-weight: lighter;
      text-align: center;

      svg{
        color: #6dafa7;
        
      }
    }

    .photo-name{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .name{
      font-style: italic;
      
      span{
        font-style: normal;
        color: black;
      }
    }
  }

  @media ${devices.mobileS}{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;

    div{
    width: 300px;
    margin: 5px 0px;

    p{
      color: #495057;
      font-style: italic;
      font-weight: lighter;
      text-align: center;
      font-size: 0.9rem;

      svg{
        color: #6dafa7;
        
      }
    }

    .photo-name{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .name{
      font-style: italic;
      
      span{
        font-style: normal;
        color: black;
      }
    }
  }


  }
  @media ${devices.tablet}{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px;

    div{
    width: 260px;
    margin: 10px 5px;

    p{
      color: #495057;
      font-style: italic;
      font-weight: lighter;
      text-align: center;
      font-size: 0.9rem;

      svg{
        color: #6dafa7;
        
      }
    }

    .photo-name{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .name{
      font-style: italic;
      
      span{
        font-style: normal;
        color: black;
      }
    }
  }
  }
  @media ${devices.laptop}{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    div{
      width: 400px;
      margin: 10px 20px;

      p{
        color: #495057;
        font-style: italic;
        font-weight: lighter;
        text-align: center;

        svg{
          color: #6dafa7;
          
        }
      }

      .photo-name{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }

      .name{
        font-style: italic;
        
        span{
          font-style: normal;
          color: black;
        }
      }
    }
  }


`;

export default Testimonial