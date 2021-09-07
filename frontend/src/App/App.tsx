import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Header, BurgerButton, Logo, Nav, TopBanner, UserContents } from 'components';
import { Landing } from 'pages';
import Styled from 'styled-components/macro';

export default function App() {
  return (
    <Router>
      <div className='app'>
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
        
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch> 
        
      </div>
    </Router>
  );
}
