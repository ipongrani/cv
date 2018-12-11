import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import { createBrowserHistory } from 'history';






class Body extends Component {

  render () {

    return (
        <Switch history={createBrowserHistory()}>
          <Route path='/' component={Home}/>
        </Switch>
    )
  }
}

// <Route exact path='/SignUp' render={(props) => <SignUp />}/>

export default Body
