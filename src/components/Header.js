import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <h1>
          <Link to="/home">
            <img src={Logo} />
          </Link>
        </h1>
        <nav>
          <Link to="/home">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/portfolio">PORTFOLIO</Link>
        </nav>
      </div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    width: 4rem;
    height: 4rem;
  }

  nav {
    a {
      padding: 1rem;
      font-weight: 300;
      font-size: 1.4rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 12rem;
    padding: 2rem;

    h1 {
      width: 8rem;
      height: 8rem;
    }

    nav {
      a {
        padding: 2rem;
        font-size: 2.4rem;
      }
    }
  }
`;
