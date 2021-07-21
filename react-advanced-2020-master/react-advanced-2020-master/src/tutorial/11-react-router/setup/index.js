import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return <Router>
    <Navbar></Navbar>
    <Switch> {/*permite que solo el muestre el primero que matchee con la condicion*/}
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/people">
        <People></People>
      </Route>
      <Route path="/person/:id" children={<Person/>}></Route>
      <Route path="*">
        <Error></Error>
      </Route>
    </Switch>
  </Router>;
};

export default ReactRouterSetup;
