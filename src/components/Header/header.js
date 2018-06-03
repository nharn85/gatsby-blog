import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image'

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  height: 70vh;
`;

const Header = ({ siteTitle, data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={ logo } alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </HeaderContainer>
    <Img style={{
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
    }}
    sizes={data.background.sizes}/>
  </HeaderWrapper>
)

export default Header

