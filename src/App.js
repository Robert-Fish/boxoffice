// Basic imports
import React, { Component, Fragment } from 'react';
import './sass/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Components
import Header from './components/Header';
import { Container } from './styles/GeneralStyles';
import FilmGrid from './components/FilmListings/FilmGrid';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route
              path="/"
              render={props => (
                <Fragment>
                  <Header />
                  <FilmGrid />
                </Fragment>
              )}
            />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
