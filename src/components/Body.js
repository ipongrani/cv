import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';




class Body extends Component {

  render () {

    return (
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
    )
  }
}

// <Route exact path='/SignUp' render={(props) => <SignUp />}/>

export default Body
