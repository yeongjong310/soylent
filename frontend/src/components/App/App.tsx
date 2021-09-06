import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Header } from 'containers';
import { BurgerButton, Logo, Nav, TopBanner, UserContents } from 'components';
import { StyledApp } from './App.styled';
import Styled from 'styled-components/macro';

export default function App() {

  return (
    <Router>
      <StyledApp>
        <TopBanner/>
        <Header>
          <Nav />
          <BurgerButton />
          <h1
            css={`
              position:absolute;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%, -50%, 0);
              max-width: 4.75rem;
              margin: 0;
            `}
          >
            <Logo color='black' />
          </h1>
          <UserContents />
        </Header>
      </StyledApp>
    </Router>
  );
}
