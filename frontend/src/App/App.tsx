import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Header, TopBanner } from 'components';
import { Landing } from 'pages';
import Footer from 'components/Footer/Footer';

export default function App() {
  return (
    <Router>
      <TopBanner/>
      <Header />       
      <Switch>
        <Route exact path='/' component={Landing} />
        <Redirect to='/' />
      </Switch> 
      <Footer />    
      </Router>
  );
}
