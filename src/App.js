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
import FilmDetail from './components/FilmDetail';
import { getLatestFilms } from './actions/filmActions';

class App extends Component {
  componentWillMount = () => {
    store.dispatch(getLatestFilms);
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Header />
                  <FilmGrid />
                </Fragment>
              )}
            />
            <Route path="/listing/" component={FilmDetail} />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
