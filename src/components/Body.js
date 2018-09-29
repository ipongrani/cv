import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';




class Body extends Component {

  render () {

    return (
        <Switch>
          <Route exact path='/' render={(props) => <Home />}/>
        </Switch>

    )
  }
}
// <Route exact path='/SignUp' render={(props) => <SignUp />}/>

export default Body
