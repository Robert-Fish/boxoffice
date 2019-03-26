// Basic imports
import React, { Component, Fragment } from 'react';
import './sass/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import { Container } from './styles/GeneralStyles';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route
            path="/"
            render={props => (
              <Fragment>
                <Header />
              </Fragment>
            )}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
