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

export default function App() {

  return (
    <Router>
      <StyledApp>
        <TopBanner/>
        <Header>
          <Nav />
          <BurgerButton />
          <Logo color='black' />
          <UserContents />
        </Header>
      </StyledApp>
    </Router>
  );
}
