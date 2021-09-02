import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
  Link
} from 'react-router-dom';
import { Header } from 'containers';
import { Logo, Nav, UserContents } from 'components';
import TopBanner from 'components/TopBanner/TopBanner';
import { StyledApp } from './App.styled';

export default function App() {

  return (
    <Router>
      <StyledApp>
        <TopBanner/>
        <Header>
          <Logo color='black' />
          <Nav />
          <UserContents />
        </Header>
      </StyledApp>
    </Router>
  );
}
