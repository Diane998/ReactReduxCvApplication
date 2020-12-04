import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history';

import { Container } from 'semantic-ui-react';
import CvApplicationForm from './CvApplicationForm';
import CvApplication from './CvApplication';
import Navbar from './Navbar';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import DummyCv from './DummyCv';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/create" exact component={CvApplicationForm} />
            <Route path="/view/:docId" exact component={CvApplication} />
            <Route path="/default" exact component={DummyCv} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
