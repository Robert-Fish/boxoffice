// Basic imports
import React, { Component } from 'react';
import './sass/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

// Components
import Header from './components/Header';
import { Container } from './styles/GeneralStyles';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}

export default App;
