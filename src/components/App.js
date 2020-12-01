import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history';

import { Container } from 'semantic-ui-react';
import CvApplicationForm from './CvApplicationForm';
import CvApplication from './CvApplication';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" exact component={CvApplicationForm} />
            <Route path="/view/:docId" exact component={CvApplication} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
