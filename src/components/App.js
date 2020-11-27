import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';
import CvApplicationForm from './CvApplicationForm';
import CvApplication from './CvApplication';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Navbar />
          <div className="ui container">
            <Route path="/create" exact component={CvApplicationForm} />
            <Route path="/view" exact component={CvApplication} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
